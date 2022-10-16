import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { connectWalletModalStyle } from "../../styles/modals";
import { Button, Stack } from "@mui/material";
import {
  networks,
  networksEnum,
  networksImg,
  walletByNetwork,
  walletImg,
} from "../../constants";
import { requestNetwork } from "../../utils/setup-network";
import {
  appNetworks,
  APP_NETWORKS,
  APP_NETWORKS_NAME,
  NetworkInfo,
} from "../../constants/network";
import { connectWallet, selectWalletNetwork } from "../../utils/user";
import { UserContext } from "../contexts/user-context";
import styles from "../../styles/modules/header.module.scss";
import ImageComponent from "../image-component";

interface Props {
  isShow: boolean;
  onClose: (event: Event) => void;
}

const ConnectWalletModal = ({ isShow, onClose }: Props) => {
  const [walletData, setWalletData] = useState(walletByNetwork.ethereum);
  const [walletNetwork, setWalletNetwork] = useState({
    network: "",
    wallet: "",
  });
  const { setWalletConnect } = useContext(UserContext);

  const handleWalletNetwork = (key: string, value: string) => {
    const walletNetworkData = { ...walletNetwork };
    if (key === "network") {
      walletNetworkData.network = value;
      const valueCheck = value.toUpperCase()
      switch (valueCheck) {
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
      setWalletNetwork(walletNetworkData);
    } else {
      walletNetworkData.wallet = value;
      setWalletNetwork(walletNetworkData);
      const appNetworkName = appNetworks.find(network => network.networkName === walletData?.networkName);
      if (appNetworkName?.id && appNetworkName?.id !== undefined) {
        selectWalletNetwork(appNetworkName.id, value, setWalletConnect, onClose);
      }
    }
  };

  return (
    <Modal open={isShow} onClose={onClose}>
      <Box sx={connectWalletModalStyle} className={styles.modalConnect}>
        <div onClick={(e: any) => onClose(e)} className={styles.cross}>
          <ImageComponent src="/images/header/cross.svg" />
        </div>
        <h2>Connect Wallet</h2>
        <h3>Choose network</h3>
        <div className={styles.listWallet}>
          <Stack spacing={2} direction="row">
            {networksImg.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={styles.listWalletItem}
                  onClick={() => handleWalletNetwork("network", item?.title)}
                >
                  <ImageComponent src={item?.img} />
                  {item?.title}
                </div>
              );
            })}
          </Stack>
        </div>
        <h3>Choose wallet</h3>
        <div className={styles.listWallet}>
          <Stack spacing={2} direction="row">
            {walletData?.wallets?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`${styles.listWalletItem} ${
                    !walletNetwork.network || item?.title !== "Metamask"
                      ? styles.disable
                      : ""
                  }`}
                  onClick={() => handleWalletNetwork("wallet", item?.title)}
                >
                  <ImageComponent src={item?.img} />
                  {item?.title}
                </div>
              );
            })}
          </Stack>
        </div>
      </Box>
    </Modal>
  );
};

export default ConnectWalletModal;
