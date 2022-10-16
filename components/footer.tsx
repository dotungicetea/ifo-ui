import Link from "next/link";
import React from "react";
import { HeaderObjPath, socialsFooter } from "../constants";
import styles from "../styles/modules/global.module.scss";
import ImageComponent from "./image-component";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <Link href="/">
            <a>
              <ImageComponent src="/images/logo.svg" className={styles.logo} />
            </a>
          </Link>
          <p>68 Circular Road, #02-01, Singapore 049422</p>
          <div className={styles.socail}>
            {socialsFooter?.map((item: any, index: number) => {
              return <ImageComponent key={index} src={item?.img} />;
            })}
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.siteMap}>SITEMAP</div>
          <div className={styles.path}>
            <Link href="/">
              <a>
                <div>Home</div>
              </a>
            </Link>
            {HeaderObjPath?.map((item: any, index: number) => {
              return (
                <Link key={index} href={item?.path}>
                  <a>
                    <div>{item?.title}</div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerDes}>
        Copyright © 2022 . All rights reserved.
      </div>
    </div>
  );
};

export default FooterComponent;
