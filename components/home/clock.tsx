/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "../../styles/modules/home.module.scss";

// const LibraryButton = forwardRef((props, ref: any) => (
//   <button ref={ref} {...props}>
//     FancyButton
//   </button>
// ));

const ClockTable = forwardRef((_, ref: any) => {
  return (
    <div ref={ref} className={styles.clockTable}>
      <div className={styles.clockTableTop}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.clockTableBot}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
});

const Clock = () => {
  const refDay = useRef<any>();
  const refHour = useRef<any>();
  const refMinute = useRef<any>();
  const refSecond = useRef<any>();
  const [isEnd, setIsEnd] = useState(false);

  const handleChangeClass = (refParam: any, key: string, value: number) => {
    try {
      if (
        refParam &&
        refParam.current &&
        refParam.current.children[0] &&
        refParam.current.children[0].children &&
        refParam.current.children[1] &&
        refParam.current.children[1].children
      ) {
        const max = key === "hour" ? 23 : 59;
        const before = value === max ? 0 : value + 1;
        if (refParam.current.children[0].children[0].innerText === `${value}`) {
          return;
        }
        refParam.current.children[0].children[0].innerText = `${value}`;
        refParam.current.children[0].children[1].innerText = `${before}`;
        refParam.current.children[1].children[1].innerText = `${value}`;
        refParam.current.children[1].children[0].innerText = `${before}`;
        refParam.current.children[0].children[1].className = `coundown-top-down`;
        refParam.current.children[1].children[1].className = `coundown-top-up`;
        setTimeout(() => {
          if (
            refParam &&
            refParam.current &&
            refParam.current.children[0] &&
            refParam.current.children[0].children &&
            refParam.current.children[1] &&
            refParam.current.children[1].children
          ) {
            refParam.current.children[0].children[1].className = ``;
            refParam.current.children[1].children[1].className = ``;
            refParam.current.children[1].children[0].innerText = `${value}`;
          }
        }, 500);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const countDownDate = new Date(2022, 9, 25, 0, 0, 0).getTime();
    const intervalId = setInterval(function () {
      const now = new Date().getTime();

      let distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        setIsEnd(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      handleChangeClass(refDay, "day", days);
      handleChangeClass(refHour, "hour", hours);
      handleChangeClass(refMinute, "minute", minutes);
      handleChangeClass(refSecond, "second", seconds);
    }, 1000);
  }, []);

  if (isEnd) {
    return null;
  }

  return (
    <div className={styles.clock}>
      <div className={styles.clockItem}>
        <ClockTable ref={refDay} />
        <p>DAYS</p>
      </div>
      <div className={styles.clockItem}>
        <ClockTable ref={refHour} />
        <p>HOURS</p>
      </div>
      <div className={styles.clockItem}>
        <ClockTable ref={refMinute} />
        <p>MINUTES</p>
      </div>
      <div className={styles.clockItem}>
        <ClockTable ref={refSecond} />
        <p>SECONDS</p>
      </div>
    </div>
  );
};

export default Clock;
