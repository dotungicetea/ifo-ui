import { NextPage } from "next";
import React from "react";
import CommingSoon from "../../components/comming-soon";
import FooterComponent from "../../components/footer";
import HeaderComponent from "../../components/header";

const IFO: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
      <CommingSoon />
      <FooterComponent />
    </div>
  );
};

export default IFO;
