import { jsonParse } from ".";
import { connectWalletApi } from "../services";
import { requestNetwork } from "./setup-network";
import { getETHBalance } from "./web3";

export const connectWallet = async() => {
    try {
        const windowObj = window as any;
        const { ethereum } = windowObj;
        const account = await ethereum.request({ method: 'eth_requestAccounts' });
        const loginUser = account.length ? account[0] : '';
        return loginUser;
    } catch (e) {
        console.log('error', e);
        return null;
    }
}

export const selectWalletNetwork = async(chainId: string, walletName: string, setWalletConnect: any, close: any) => {
    await requestNetwork(chainId, walletName);
    const loginUser = await connectWallet();
    const balance = await getETHBalance(loginUser)
    const walletConnectData = {chainId, balance, address: loginUser}
    localStorage.setItem('walletConnectData', jsonParse(walletConnectData))
    setWalletConnect(walletConnectData)
    if (loginUser) {
        await connectWalletApi({wallet: loginUser, predict_token_num: ''})
    }
    close();
}