import { walletsEnum } from "../constants";
import { APP_NETWORKS_SUPPORT } from "../constants/network";

export const requestNetwork = async (chainId: string, walletName: string) => {
  const provider =
    walletName === walletsEnum.METAMASK
      ? (window as any).ethereum
      : (window as any).BinanceChain;
  if (provider) {
    try {
      const networkInfo = APP_NETWORKS_SUPPORT[+chainId];
      if (walletName === walletsEnum.METAMASK && networkInfo) {
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: networkInfo.details?.chainId }],
          });

          console.log("wallet ethereum: ", (window as any)?.ethereum);
        } catch (error: any) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (error.code === 4902) {
            try {
              await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    ...(networkInfo.details || {}),
                  },
                ],
              });
            } catch (addError) {
              console.log("requestSupportNetwork", addError);
              console.error(addError);
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      }
    } catch (error: any) {
      console.log("requestSupportNetwork", error.message);
      return false;
    }
  }
};
