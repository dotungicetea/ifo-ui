import React, { useContext, useState } from "react";
import ImageComponent from "../image-component";
import { Stack } from "@mui/material";
import ButtonComponent from "../button-component";
import ConnectWalletModal from "../header/connect-wallet-modal";
import { UserContext } from "../contexts/user-context";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { HeaderObjPath } from "../../constants";

const HeaderCoundown = () => {
    const [isShowModalConnect, setIsShowModalConnect] = useState(false);
    // const { loginUser } = useContext(UserContext);
  
    const handleCloseModalConnect = () => {
      setIsShowModalConnect(false);
    };
  
    const handleShowModalConnect = () => {
      setIsShowModalConnect(true);
    };

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText('#FFFFFF'),
        backgroundColor: '#FFFFFF',
        fontFamily: 'Urbanist',
        fontWeight: 700,
        borderRadius: '6px',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#FFFFFF',
        },
    }));

    return (
        <div style={{borderBottom: '1px solid #B9B9B9'}}>
          <div className="container header-coundown">
            <ImageComponent src="/images/logo.svg" alt="logo" className="logo-coundown" />
            <Stack spacing={5} direction="row">
              {HeaderObjPath?.map((item: any, index: number) => {
                return (
                  <span className="path" key={index}>
                    {item?.title}
                  </span>
                );
              })}
              {/* {loginUser ? (
                <span>{loginUser}</span>
              ) : (
                  <ColorButton className="button-connect-wallet" onClick={() => handleShowModalConnect()}>Connect wallet</ColorButton>
              )} */}
              <ConnectWalletModal
                isShow={isShowModalConnect}
                onClose={handleCloseModalConnect}
              />
            </Stack>
          </div>
        </div>
    )
}

export default HeaderCoundown;