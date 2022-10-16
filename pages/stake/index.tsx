import { NextPage } from "next";
import React from "react";
import CommingSoon from "../../components/comming-soon";
import FooterComponent from "../../components/footer";
import HeaderComponent from "../../components/header";
// import BannerStaking from "../../components/staking/banner";
// import StakingContent from "../../components/staking/staking-content";

const Stake: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
      {/* <BannerStaking />
      <StakingContent /> */}
      <CommingSoon />
      <FooterComponent />
    </div>
  );
};

export default Stake;
