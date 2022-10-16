import React from "react";
import styles from "../../styles/modules/staking.module.scss";
import { Stack } from "@mui/material";
import ImageComponent from "../image-component";

const StakePool = () => {
  return (
    <div className={styles.stakePool}>
      <h2>
        The first stake pools is <span>NOW OPEN!</span>
      </h2>
      <div className={styles.form}>
        <Stack spacing={2} direction="row">
          <ImageComponent
            src="/images/staking/logo_gamefi.png"
            className={styles.logo}
          />
          <div className={styles.formContent}>
            <h3>$GAFI holders</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              integer est praesent cras duis. Felis, id rhoncus eget gravida
              volutpat semper faucibus. Aenean quam sit leo ornare nisi,
              posuere.
            </p>
            <div className={styles.formContentData}>
              <div className={styles.contentLeft}>
                <div>
                  <h4>Lock time:</h4>
                  <p>6 months</p>
                </div>
                <div>
                  <h4>Pool size:</h4>
                  <p>70,000 $GAFI (Max)</p>
                </div>
                <div>
                  <h4>Caculation:</h4>
                  <p>1 $GAFI = 1 point</p>
                </div>
                <div>
                  <h4>Joining period:</h4>
                  <p>2022, Oct 25 ~ 2022, Nov 05 </p>
                </div>
              </div>
              <div className={styles.contentRight}></div>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default StakePool;
