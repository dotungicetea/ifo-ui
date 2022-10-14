import { requestNetwork } from "./setup-network";

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

export const selectWalletNetwork = async(chainId: string, walletName: string, setLogin: any) => {
    await requestNetwork(chainId, walletName);
    const loginUser = await connectWallet();
    setLogin(loginUser);
}