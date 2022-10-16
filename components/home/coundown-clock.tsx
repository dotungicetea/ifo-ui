import React, { useContext, useState } from "react";
import styles from "../../styles/modules/home.module.scss";
import ButtonComponent from "../button-component";
import { UserContext } from "../contexts/user-context";
import Clock from "./clock";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { connectWalletApi } from "../../services";

const CoundownClock = () => {
  const { walletConnect, setIsShowModalConnect } = useContext(UserContext);
  const [predictToken, setProdictToken] = useState('')

  const submit = () => {
    if (predictToken) {
      connectWalletApi({wallet: walletConnect?.address, predict_token_num: predictToken})
    }
  }

  const handleChangeRatio = (value: string) => {
    setProdictToken(value)
  }

  return (
    <div className={styles.coundownClock}>
      <div className={styles.coundownClockTitle}>
        <h3>The first stake pools will be revealed at</h3>
        <p>2022, Oct 25th 00:00 (UTC)</p>
      </div>
      <p className={styles.stay}>Stay tuned!</p>
      <Clock />
      <p className={styles.subscribe}>
        Subscribe now to receive exclusive early bird benefits: Bonus 5% of the
        stake points.
      </p>
      {walletConnect?.address ? (
        <div className={styles.submitTokenBuy}>
          <h3>How much you&apos;re willing to stake in our platform?</h3>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="A"
              control={<Radio sx={{ color: "#00C7F4" }} onChange={(e) => handleChangeRatio(e?.target?.value)} />}
              label="< 20 GAFI"
            />
            <FormControlLabel
              value="B"
              control={<Radio sx={{ color: "#00C7F4" }} onChange={(e) => handleChangeRatio(e?.target?.value)} />}
              label="20-50GAFI"
            />
            <FormControlLabel
              value="C"
              control={<Radio sx={{ color: "#00C7F4" }} onChange={(e) => handleChangeRatio(e?.target?.value)} />}
              label="> 50 GAFI"
            />
          </RadioGroup>
          <ButtonComponent
            className={styles.buttonConnect}
            title="Submit"
            onClick={() => submit()}
          />
        </div>
      ) : (
        <ButtonComponent
          className={styles.buttonConnect}
          title="Connect wallet"
          onClick={() => setIsShowModalConnect(true)}
        />
      )}
    </div>
  );
};

export default CoundownClock;
