import { Landing } from "./components/landing";
import "./index.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";



// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { Airdrop } from "./components/AirDrop";

const App = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div>
        <ConnectionProvider
          endpoint={""}
        >
          <WalletProvider
            wallets={[]}
            autoConnect
          >
            <WalletModalProvider>
              <Landing />

              <div className="flex justify-center items-center gap-4">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>

              <Airdrop />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
};

export { App };
