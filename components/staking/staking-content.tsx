import React from "react";
import styles from "../../styles/modules/staking.module.scss";
import StakingTooltip from "./tooltip";
import { ifoPoints } from "../../constants/staking";
import StakePool from "./stake-pool";

const StakingContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentData}>
        <h2>
          Your IFO points
          <StakingTooltip />
        </h2>
        <p>
          IFO points used to calculate rewards will be determined by your
          loyalty points (total staked points) and task points.
        </p>
      </div>
      <div className={styles.point}>
        {ifoPoints?.map((item: any, index: number) => {
          return (
            <div className={item?.isBold ? styles.bold : ''} key={index}>
              <h3>{item?.title}</h3>
              <p>{item?.point}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.contentData}>
        <h2>Stake pools</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          volutpat, mauris lacus, aenean in.
        </p>
      </div>
      <StakePool />
    </div>
  );
};

export default StakingContent;
