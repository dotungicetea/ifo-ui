import React from "react";
import { bannerContent } from "../../constants/home";
import styles from "../../styles/modules/home.module.scss";
import ButtonComponent from "../button-component";
import ImageComponent from "../image-component";

const BannerHome = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerContentLeft}>
          <h1>
            Initial{' '}
            <br />
            Fans{' '}
            <br />
            Offering
          </h1>
          <p>Be a Fan & Earn</p>
          <ButtonComponent className={styles.button} title="Learn more" />
        </div>
        <div className={styles.bannerContentRight}>
            {
                bannerContent?.map((item: any, index: number) => {
                    return (
                        <div key={index} className={styles.bannerContentList}>
                            <ImageComponent src={item?.img} className={styles.imageBanner} />
                            <div className={styles.contentBanner}>
                                <h2>{item?.title}</h2>
                                <p>{item?.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
