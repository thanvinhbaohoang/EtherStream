import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import axios from "axios";
import { Web3Modal } from "@web3modal/react";
import { useAccount, useConnect, useDisconnect, useEnsAvatar,useNetwork, useProvider, useSigner, useEnsName} from 'wagmi'
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { goerli, arbitrum, mainnet } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";


import { Component } from "react";


const chains = [goerli, arbitrum, mainnet];
// Wagmi client
// const { provider } = configureChains(chains, [
//   walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
// ]);

const { provider } = configureChains(chains, [publicProvider()])

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

var userAddress = ""
// Get Wallet Data here
// Make sure that this component is wrapped with WagmiConfig
export const WalletData = () => {
  // Wallet Data From Wagmi
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: signer, isError, isLoading } = useSigner();  // https://wagmi.sh/react/hooks/useSigner
  const { chain, chains } = useNetwork()
  // const provider = useProvider()
  if (isDisconnected) return <div>Not Connected</div>
  else {userAddress = address.toLowerCase()}
  return (
    <> 
    {/* Data Here for Debugging */}
      {/* <div>Connected Wallet: {address}</div> */}
      {/* <div>Provider: {console.log("PROVIDER:",provider)}</div> */}
      {/* <div>Signer: {console.log(signer)}</div> */}
      {/* <div>ChainID: {chain.id}</div> */}
      {/* <div>Chain: {chain.network}</div> */}
    </>
  );
};