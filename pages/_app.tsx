import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
  UserContext,
  walletConnected,
} from "../components/contexts/user-context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isShowModalConnect, setIsShowModalConnect] = useState(false);
  const [walletConnect, setWalletConnect] = useState<walletConnected>({
    chainId: 0,
    balance: 0,
    address: "",
  });

  return (
    <UserContext.Provider
      value={{
        isShowModalConnect,
        setIsShowModalConnect,
        walletConnect,
        setWalletConnect,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
