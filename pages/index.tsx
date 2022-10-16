import type { NextPage } from "next";
import Coundown from "../components/coundown";
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import BannerHome from "../components/home/banner";
import CoundownHome from "../components/home/coundown";
import styles from '../styles/modules/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <HeaderComponent />
      <BannerHome />
      <CoundownHome />
      <FooterComponent />
    </div>
  );
};

export default Home;
