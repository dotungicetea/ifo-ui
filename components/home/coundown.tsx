import React from "react";
import styles from "../../styles/modules/home.module.scss";
import CoundownClock from "./coundown-clock";

const CoundownHome = () => {
  return (
    <div className={styles.coundown}>
      <div className={styles.coundownTitle}>
        <h2>IFO stands for Initial Fan Offering</h2>
        <p>
          Become our fan, bring projects to shine and earn valuable tokens. Just
          by completing simple tasks, your support is the foundation to take the
          project so far. <span>Everyone has a chance</span> as there will be pools available
          for those without staking.
        </p>
      </div>
      <div className={styles.coundownContent}>
        <CoundownClock />
      </div>
    </div>
  );
};

export default CoundownHome;
