// import { WagmiConfig, createClient, configureChains } from 'wagmi'
// import axios from 'axios'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
// import { mainnet, arbitrum, goerli} from "wagmi/chains";
// import { useAccount, useConnect, useDisconnect, useEnsAvatar,useNetwork, useProvider, useSigner, useEnsName} from 'wagmi'
 
// // Configure chains & providers with the Alchemy provider.
// // Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
// const { chains, provider, webSocketProvider } = configureChains(
//   [mainnet, arbitrum, goerli],
//   [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
// )
 
// // Set up client
// const client = createClient({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         qrcode: true,
//       },
//     }),
//   ],
//   provider,
//   webSocketProvider,
// })
 
// export function Profile() {
  
//   const { connect, connectors, error, isLoading, pendingConnector } =
//     useConnect();
//   // const { address, isConnecting, isDisconnected } = useAccount();
//   const { address, isConnecting, connector, isConnected, isDisconnected} = useAccount()
//     const { chain, chains } = useNetwork()
//   const { data: ensAvatar } = useEnsAvatar({ address })
//   const { disconnect } = useDisconnect()
//   if (isConnected) {
//     return (
//       <div>
//         {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
//         {/* <div>{ensName ? `${ensName} (${address})` : address}</div> */}
//         <div>{address.slice(0,5)} {"..."} {address.slice(-5)}</div>
//         {/* <div>Connected to {connector.name}</div> */}
//         <button onClick={disconnect}>Disconnect</button>
//       </div>
//     )
//   }
//   return (
//     <div>
//       {connectors.map((connector) => (
//         <button
//           disabled={!connector.ready}
//           key={connector.id}
//           onClick={() => connect({ connector })}
//         >
//           {connector.name}
//           {!connector.ready && ' (unsupported)'}
//           {isLoading &&
//             connector.id === pendingConnector?.id &&
//             ' (connecting)'}
//         </button>
//       ))}
 
//       {error && <div>{error.message}</div>}
//     </div>
//   )
// }
 



// // Get Wallet Data here
// // Make sure that this component is wrapped with ConnectKitProvider
// export const MyComponent = () => {
//   // Wallet Data From Wagmi
//   const { address, isConnecting, isDisconnected } = useAccount();
//   const { data: signer, isError, isLoading } = useSigner();  // https://wagmi.sh/react/hooks/useSigner
//   const { chain, chains } = useNetwork()
//   const provider = useProvider()
//   if (isDisconnected) return <div>Not Connected</div>

//   // this.setState({
//   //   account: address,
//   //   chainName: chain.network,
//   //   chainID: chain.id,
//   //   provider: provider,
//   //   signer: signer
//   // })

//   return (
//     <> 
//     {/* Data Here for Debugging */}
//       <div>Connected Wallet: {address}</div>
//       {/* <div>Provider: {console.log("PROVIDER:",provider)}</div> */}
//       {/* <div>Signer: {console.log(signer)}</div> */}
//       <div>ChainID: {chain.id}</div>
//       <div>Chain: {chain.network}</div>

//       {/* Add Function Check for CFA Subscription and Display Status here */}
//       <button onClick={tokenStreamAuthentication}> Check Stream</button>
//     </>
//   );
// };


// // Pass client to React Context Provider
// // Right now using Address as authentication. Can use "Sign In With Ethereum" instead for more secure session connection and auth
// // https://wagmi.sh/examples/sign-in-with-ethereum
// export function ConnectWallet() {
//   return (
//     <WagmiConfig client={client}>
//       {/* <Profile /> */}
//       <MyComponent/>
//     </WagmiConfig>
//   )
// }



// // For now we will stick with FDAIx as default tokenName
// export async function tokenStreamAuthentication(){
//   //GraphQL Query (https://console.superfluid.finance/subgraph?_network=goerli)
//   const TOKENS_QUERY =
//   `
//   query {
//     streams(where:{
//           sender: "0x5b33237848f8159d8b7b9cf9a3c940a358735c0d"
//           # receiver: "0xd66e40b0c30595bec72153b502ac1e0c4785991b"
//         }
//       ) {
//       token {
//         id
//         symbol
//       }
//       createdAtTimestamp
//       updatedAtTimestamp
//       currentFlowRate
//       streamedUntilUpdatedAt
//     }
//   }
//   `

//   const queryResult = await axios({
//     url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli',
//     method: 'post',
//     data: {
//       query: TOKENS_QUERY
//     }

//   })

//   console.log("QUERY RESULT:", queryResult.data.streams)


//   // Check Stream from Address to `ServiceProviderAddress` 
//     // Return True if >= Service Fee
//     // Return False if-else

// }

// =========================================================================================================================
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli, arbitrum, mainnet } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";



const chains = [goerli, arbitrum, mainnet];
// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);
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
      </WagmiConfig>

      <Web3Modal
          projectId="<YOUR_PROJECT_ID>"
          ethereumClient={ethereumClient}
        />
    </>
  );
}

