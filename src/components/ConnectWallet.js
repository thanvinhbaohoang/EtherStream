import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { useAccount } from "wagmi";
import styled from "styled-components";

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
        {/* <ConnectKitButton /> */}
        <ExampleButton/>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
const StyledButton = styled.button`
width: 50px;
height: 50px;
margin: 5px;
display: flex;
border-radius: 50%;
justify-content: center;
color:grey;
align-items: center;
background: #36393f;
transition: 0.5s;
border: none;

  transition: 200ms ease;
  &:hover {
    cursor: pointer;
    border-radius: 12px;
    transition: 0.2s;
    color:white;
    background-color: #3ba55da1;  }
  &:active {
    border-radius: 12px;
    color: white;
    transition: 0.2s ease-out;
    background-color: #20af4d;  }
`;

export const ExampleButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};



// Make sure that this component is wrapped with ConnectKitProvider
const MyComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};