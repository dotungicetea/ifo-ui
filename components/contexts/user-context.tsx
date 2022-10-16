import React, { createContext } from "react";

export type walletConnected = {
  chainId: number;
  balance: number;
  address: string;
}

export type UserContextType = {
  isShowModalConnect: boolean,
  setIsShowModalConnect: (user: any) => void,
  walletConnect: walletConnected;
  setWalletConnect: (wallet: walletConnected) => void
};

export const UserContext = createContext<UserContextType>({
  isShowModalConnect: false,
  setIsShowModalConnect: () => {},
  walletConnect: {chainId: 0, balance: 0, address: ''},
  setWalletConnect: () => {}
});
