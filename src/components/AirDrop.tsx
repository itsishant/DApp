import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { CustomFallingEmojis } from "./CustomFallingEmojis";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [showEmojis, setShowEmojis] = useState(false);

  const onClickAirdrop = async () => {
    setShowEmojis(true);
    setTimeout(() => setShowEmojis(false), 3000);
    await connection.requestAirdrop(wallet.publicKey!, 1000000000);
  };
  

  return (
    <>
      {showEmojis && <CustomFallingEmojis emojis={["💦", "💧"]} />}
      <div className="flex flex-col justify-center items-center">
        <div>
          <input
            type="text"
            placeholder="Enter Amount"
            className="w-[700px] bg-neutral-300 rounded-md mt-10 text-center  text-black px-8 py-2"
          ></input>
        </div>
        <div>
          <button
            onClick={onClickAirdrop}
            className="bg-purple-700 text-neutral-300 text-3xl px-12 py-2 ml-4 rounded-md hover:bg-purple-700 transition duration-300 mt-10"
          >
            <span
              className="font-bold"
              style={{
                fontFamily: "Poppins",
              }}
            >
              Airdrop DAPPA
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
