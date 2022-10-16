import React, { useEffect, useRef, useState } from "react";

const arrayNumber = [0, 1];

const ContentCoundown = () => {
  const refDay = useRef<any>();
  const refHour = useRef<any>();
  const refMinute = useRef<any>();
  const refSecond = useRef<any>();
  const [isEnd, setIsEnd] = useState(false);

  const handleFloor = (value: number) => {
    if (value) {
      return Math.floor(value);
    } else {
      return 0;
    }
  };

  const handleChangeClass = (
    refParam: any,
    childIdx: number,
    value: number
  ) => {
    const distance = value % 2;
    if (distance === 0) {
      if (
        refParam &&
        refParam.current &&
        refParam.current.children[childIdx] &&
        refParam.current.children[childIdx].children
      ) {
        refParam.current.children[childIdx].children[0].innerText = `${value}`;
        refParam.current.children[childIdx].children[0].className = "active";
        refParam.current.children[childIdx].children[1].className = "before";
      }
    } else {
      if (
        refParam &&
        refParam.current &&
        refParam.current.children[childIdx] &&
        refParam.current.children[childIdx].children
      ) {
        refParam.current.children[childIdx].children[1].innerText = `${value}`;
        refParam.current.children[childIdx].children[1].className = "active";
        refParam.current.children[childIdx].children[0].className = "before";
      }
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
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const bfDay = handleFloor(days / 10);
      console.log(bfDay);
      handleChangeClass(refDay, 0, bfDay);
      const afDay = handleFloor(days % 10);
      handleChangeClass(refDay, 1, afDay);

      
      const bfHour = handleFloor(hours / 10);
      handleChangeClass(refHour, 0, bfHour);
      const afHour = handleFloor(hours % 10);
      handleChangeClass(refHour, 1, afHour);
      
      const bfMinute = handleFloor(minutes / 10);
      handleChangeClass(refMinute, 0, bfMinute);
      const afMinute = handleFloor(minutes % 10);
      handleChangeClass(refMinute, 1, afMinute);
      
      const bfSecond = handleFloor(seconds / 10);
      handleChangeClass(refSecond, 0, bfSecond);
      const afSecond = handleFloor(seconds % 10);
      handleChangeClass(refSecond, 1, afSecond);
    }, 1000);
  }, []);

  if (isEnd) {
    return null;
  }

  return (
    <>
      <h1>
        <div>
          Explore <span>fresh trend</span> in the
        </div>
        <div>cryptocurrency community.</div>
      </h1>
      <h2>Hold tight we are preparing for launching in</h2>
      <div className="coundown-number">
        <div ref={refDay} className={`coundown-list coundown-list-day`}>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div ref={refHour} className={`coundown-list coundown-list-hour`}>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div ref={refMinute} className={`coundown-list coundown-list-minute`}>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div ref={refSecond} className={`coundown-list coundown-list-second`}>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <ul>
            {arrayNumber.map((item: number) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContentCoundown;
