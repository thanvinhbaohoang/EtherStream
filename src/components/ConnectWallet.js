import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { useAccount, useSigner, useNetwork, useProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli} from "wagmi/chains";
import 'ethers';

{/* https://docs.family.co/connectkit/theming#additional-options */}
const alchemyId = process.env.ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [goerli,mainnet, arbitrum ];
const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  }),
);

export const ConnectWallet = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ConnectKitButton />
        <MyComponent/>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

// Get Wallet Data here
// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  // Wallet Data From Wagmi
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();  // https://wagmi.sh/react/hooks/useSigner
  const { chain, chains } = useNetwork()
  const provider = useProvider()
  if (isDisconnected) return <div>Not Connected</div>
  return (
    <>
      <div>Connected Wallet: {address}</div>
      {/* <div>Provider: {console.log("PROVIDER:",provider)}</div>
      <div>Signer: {console.log(signer)}</div>
      <div>ChainName: {console.log(chain.network)}</div>
      <div>ChainID: {console.log(chain.id)}</div> */}
    </>
  );
};


// For now we will stick with FDAIx as default tokenName
// async function getWalletInfo() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const chainId = await window.ethereum.request({ method: "eth_chainId" });

//     const sf = await Framework.create({
//       chainId: Number(chainId),
//       provider: provider
//     });

//     //load the token you'd like to use like this (note that tokens may be loaded by symbol or by address)
//     const tokenName = 'fDAIx'; // DEFAULT TO FDAIx for now
//     const superToken = await sf.loadSuperToken(tokenName);

//     // const fDAIxAddress= superToken.address;
//     // ================================================================
//     // Netflow
//     let netFlow = await superToken.getFlow({
//       sender: account,
//       receiver: 'Services Wallet Address',
//       providerOrSigner: signer
//     });

//     return netFlow;
// }
