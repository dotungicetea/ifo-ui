import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { HeaderObjPath } from "../constants";
import { UserContext } from "./contexts/user-context";
import ConnectWalletModal from "./header/connect-wallet-modal";
import styles from "../styles/modules/global.module.scss";
import ButtonComponent from "./button-component";
import ImageComponent from "./image-component";
import { getAddressHead, stringByJson } from "../utils";
import { networkSupport } from "../constants/network";
import Link from "next/link";

const HeaderComponent = () => {
  const {
    walletConnect,
    setWalletConnect,
    isShowModalConnect,
    setIsShowModalConnect,
  } = useContext(UserContext);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const walletData = localStorage.getItem("walletConnectData");
    const walletDataFormat = stringByJson(walletData) as any;
    if (walletDataFormat && walletDataFormat.address) {
      setWalletConnect(walletDataFormat);
    }
  }, []);

  const handleCloseModalConnect = () => {
    setIsShowModalConnect(false);
  };

  const handleShowModalConnect = () => {
    setIsShowModalConnect(true);
  };

  const getNetworkSupport = (chainId: number) => {
    const result = networkSupport?.find(
      (network) => network?.id === `${chainId}`
    );
    return result;
  };

  const getBalance = (balance: number) => {
    if (balance && balance?.toFixed) {
      return balance?.toFixed(3);
    } else {
      return "0.000";
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerPosition}>
{/* ----------------------------------------- show in desktop ---------------------------------------------  */}
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/">
            <a className="mr-auto">
              <ImageComponent
                src="/images/logo.svg"
                alt="logo"
                className={styles.headerLogo}
              />
            </a>
          </Link>
          <Stack spacing={5} direction="row">
            {HeaderObjPath?.map((item: any, index: number) => {
              return (
                <span className={styles.path} key={index}>
                  <Link href={item?.path}>
                    <a>{item?.title}</a>
                  </Link>
                </span>
              );
            })}
          </Stack>
          <Stack spacing={2} direction="row">
            {!!walletConnect && !!walletConnect?.chainId && (
              <div className={styles.chainBox}>
                <ImageComponent
                  src={getNetworkSupport(walletConnect?.chainId)?.icon}
                  className={styles.chainImage}
                />
                {getNetworkSupport(walletConnect?.chainId)?.networkName}
              </div>
            )}
            {walletConnect && walletConnect?.address ? (
              <div className={styles.wallet}>
                <div>
                  {getBalance(walletConnect?.balance)}{" "}
                  {getNetworkSupport(walletConnect?.chainId)?.currency}
                </div>
                <span>{getAddressHead(walletConnect?.address)}</span>
              </div>
            ) : (
              <ButtonComponent
                className={styles.buttonConnect}
                title="Connect wallet"
                onClick={() => handleShowModalConnect()}
              />
            )}
            <ConnectWalletModal
              isShow={isShowModalConnect}
              onClose={handleCloseModalConnect}
            />
          </Stack>
          {
            !showMobile ?
            <ImageComponent
              src="/images/header/hamburger.svg"
              className={styles.hamburger}
              onClick={() => setShowMobile(true)}
            />
            :
            <ImageComponent
              src="/images/header/cross.svg"
              className={styles.hamburger}
              onClick={() => setShowMobile(false)}
            />
          }
        </div>
{/* ----------------------------------------- show in desktop ---------------------------------------------  */}
{/* ----------------------------------------- show in mobile ---------------------------------------------  */}
        {
          showMobile &&
          <div className={styles.headerShowMobile}>
            {HeaderObjPath?.map((item: any, index: number) => {
              return (
                <span className={styles.path} key={index}>
                  <Link href={item?.path}>
                    <a>{item?.title}</a>
                  </Link>
                </span>
              );
            })}
            {!!walletConnect && !!walletConnect?.chainId && (
              <div className={styles.chainBox}>
                <ImageComponent
                  src={getNetworkSupport(walletConnect?.chainId)?.icon}
                  className={styles.chainImage}
                />
                {getNetworkSupport(walletConnect?.chainId)?.networkName}
              </div>
            )}
            {walletConnect && walletConnect?.address ? (
              <div className={styles.wallet}>
                <div>
                  {getBalance(walletConnect?.balance)}{" "}
                  {getNetworkSupport(walletConnect?.chainId)?.currency}
                </div>
                <span>{getAddressHead(walletConnect?.address)}</span>
              </div>
            ) : (
              <ButtonComponent
                className={styles.buttonConnect}
                title="Connect wallet"
                onClick={() => handleShowModalConnect()}
              />
            )}
            <ConnectWalletModal
              isShow={isShowModalConnect}
              onClose={handleCloseModalConnect}
            />
          </div>
        }
{/* ----------------------------------------- show in mobile ---------------------------------------------  */}
      </div>
    </div>
  );
};

export default HeaderComponent;
