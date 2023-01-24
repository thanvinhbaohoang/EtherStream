import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { useAccount } from "wagmi";

{/* https://docs.family.co/connectkit/theming#additional-options */}
const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  }),
);

export const ConnectWallet = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ConnectKitButton />
        {/* <MyComponent/> */}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

// Get Wallet Data here
// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};