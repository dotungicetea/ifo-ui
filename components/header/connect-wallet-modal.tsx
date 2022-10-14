import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { connectWalletModalStyle } from "../../styles/modals";
import { Button, Stack } from "@mui/material";
import { networks, networksEnum, walletByNetwork } from "../../constants";
import { requestNetwork } from "../../utils/setup-network";
import { APP_NETWORKS, APP_NETWORKS_NAME, NetworkInfo } from "../../constants/network";
import { connectWallet, selectWalletNetwork } from "../../utils/user";
import { UserContext } from "../contexts/user-context";

interface Props {
  isShow: boolean;
  onClose: (event: Event) => void;
}

const ConnectWalletModal = ({ isShow, onClose }: Props) => {
  const [isAgreedTerms, setIsAgreedTerms] = useState(false);
  const [walletData, setWalletData] = useState(walletByNetwork.ethereum);
  const [walletNetwork, setWalletNetwork] = useState({
    network: "",
    wallet: "",
  });
  const {setLoginUser} = useContext(UserContext);

  const handleCheck = () => {
    setIsAgreedTerms(!isAgreedTerms);
  };

  const handleWalletNetwork = (key: string, value: string) => {
    const walletNetworkData = {...walletNetwork}
    if (key === 'network') {
        walletNetworkData.network = value;
        switch(value) {
            case networksEnum.ETHEREUM:
                setWalletData(walletByNetwork.ethereum);
                break;
            case networksEnum.BSC:
                setWalletData(walletByNetwork.bsc);
                break;
            case networksEnum.POLYGON:
                setWalletData(walletByNetwork.polygon);
                break; 
        }
        setWalletNetwork(walletNetworkData)
    } else {
        walletNetworkData.wallet = value;
        setWalletNetwork(walletNetworkData);
        const appNetworkName = APP_NETWORKS[walletData?.networkName as APP_NETWORKS_NAME]
        if (appNetworkName?.id && appNetworkName?.id !== undefined) {
          selectWalletNetwork(appNetworkName.id, value, setLoginUser)
        }
    }
  }

  return (
    <Modal open={isShow} onClose={onClose}>
      <Box sx={connectWalletModalStyle}>
        <h2>Connect wallet</h2>
        <div>
          <input
            defaultChecked={isAgreedTerms}
            checked={isAgreedTerms}
            onChange={() => handleCheck()}
            type="checkbox"
          />
          <span>I read and accept the terms of service and privacy policy</span>
        </div>
        <h3>Choose network</h3>
        <div>
          <Stack spacing={2} direction="row">
            {networks.map((item: any, index: number) => {
              return (
                <Button
                  key={index}
                  variant={walletNetwork?.network === item ? "contained" : "outlined"}
                  disabled={!isAgreedTerms}
                  onClick={() => handleWalletNetwork('network', item)}
                >
                  {item}
                </Button>
              );
            })}
          </Stack>
        </div>
        <h3>Choose wallet</h3>
        <div>
          <Stack spacing={2} direction="row">
            {walletData?.wallets?.map((item: any, index: number) => {
              return (
                <Button
                  key={index}
                  variant={walletNetwork?.wallet === item ? "contained" : "outlined"}
                  disabled={!walletNetwork.network || !isAgreedTerms}
                  onClick={() => handleWalletNetwork('wallet', item)}
                >
                  {item}
                </Button>
              );
            })}
          </Stack>
        </div>
      </Box>
    </Modal>
  );
};

export default ConnectWalletModal;
