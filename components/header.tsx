import { Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { HeaderObjPath } from "../constants";
import { UserContext } from "./contexts/user-context";
import ConnectWalletModal from "./header/connect-wallet-modal";

const HeaderComponent = () => {
  const [isShowModalConnect, setIsShowModalConnect] = useState(false);
  const {loginUser} = useContext(UserContext);

  const handleCloseModalConnect = () => {
    setIsShowModalConnect(false);
  };

  const handleShowModalConnect = () => {
    setIsShowModalConnect(true);
  };

  return (
    <Stack spacing={5} direction="row">
      {HeaderObjPath?.map((item: any, index: number) => {
        return <span key={index}>{item?.title}</span>;
      })}
      {
        loginUser ?
        <span>{loginUser}</span>
        :
        <Button variant="contained" onClick={() => handleShowModalConnect()}>
          Connect wallet
        </Button>
      }
      <ConnectWalletModal
        isShow={isShowModalConnect}
        onClose={handleCloseModalConnect}
      />
    </Stack>
  );
};

export default HeaderComponent;
