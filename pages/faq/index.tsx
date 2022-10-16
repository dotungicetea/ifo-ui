import { NextPage } from "next";
import React from "react";
import CommingSoon from "../../components/comming-soon";
import FooterComponent from "../../components/footer";
import HeaderComponent from "../../components/header";

const FAQ: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
      <CommingSoon />
      <FooterComponent />
    </div>
  );
};

export default FAQ;
