import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import axios from "axios";
import { Web3Modal } from "@web3modal/react";
import { useAccount, useConnect, useDisconnect, useEnsAvatar,useNetwork, useProvider, useSigner, useEnsName} from 'wagmi'
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { goerli, arbitrum, mainnet } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";
import { FaAddressCard } from "react-icons/fa";


const chains = [goerli, mainnet];
const { provider } = configureChains(
  chains,
  [
    alchemyProvider({ apiKey: 'Eje_Y-pqB-HZwxVWpOYEUQoB44DhjZGO' }),
    infuraProvider({ apiKey: '2FTMzOge17hhTwy3mfVXN4T7L3j' }),
    publicProvider(),
  ],
)

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "<YOUR_PROJECT_ID>",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
//https://docs.walletconnect.com/2.0/web3modal/react/installation#usage
export function ConnectWallet() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Web3Button /> {/* Premade Web3Modal ConnectButton */}
        <WalletData/>
      </WagmiConfig>

      <Web3Modal
          projectId="<YOUR_PROJECT_ID>"
          ethereumClient={ethereumClient}
        />
    </>
  );
}

// Get Wallet Data here
// Make sure that this component is wrapped with WagmiConfig
export const WalletData = () => {
  // Wallet Data From Wagmi
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();  // https://wagmi.sh/react/hooks/useSigner
  const { chain, chains } = useNetwork()
  const provider = useProvider()
  // if (isDisconnected) return <div>Not Connected</div>
  window.address = address
  return (
    <> 
    {/* Data Here for Debugging */}
      {/* <div>Provider: {console.log("PROVIDER:",provider)}</div> */}
      {/* <div>Signer: {console.log(signer)}</div> */}
      {/* <div>ChainID: {chain.id}</div> */}
      {/* <div>Chain: {chain.network}</div> */}
    </>
  );
};

export const ReturnWalletAddress = (address) => {
  return address
}