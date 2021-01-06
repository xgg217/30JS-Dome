(function() {
  "use strict";

  const nowDate = new Date();

  const hoursDate = nowDate.getHours(); // 小时
  const minutesDate = nowDate.getMinutes(); // 分钟
  const secondsDate = nowDate.getSeconds(); // 秒

  console.log(hoursDate);
  // console.log(minutesDate);
  // console.log(secondsDate);

  const mDom = document.querySelector(".m"); // 秒针
  const fDom = document.querySelector(".f"); // 分针
  const sDom = document.querySelector(".s"); // 时针

  let mTime = 0;
  let fTime = 0;
  let sTime = 0;

  let mVal = 0;
  let fVal = 0;
  let sVal = 0;

  

  // 秒针转动
  /**
   * 秒针转动
   * @param {*} val 
   */
  const mZd = function mZd(val) {
    if(val >= 60) {
      mVal = 1;

    } else {
      mVal++;
    }

    mDom.animate([
      { transform: `rotate(${ (val * 6) % 360 }deg)` },
      { transform: `rotate(${ mVal * 6 }deg)` },
    ], 100);
    mDom.style.transform=`rotate(${ ~~(6 * mVal) }deg)`; // 秒

    clearTimeout(mTime);
    mTime = setTimeout(() => {
      mZd(mVal);
    }, 1000);
  };

  /**
   * 分针转动
   */

  // 初始化时间
  const init = function init() {
    mDom.style.transform=`rotate(${ ~~(6 * secondsDate) }deg)`; // 秒
    fDom.style.transform=`rotate(${ ~~(6 * minutesDate) }deg)`; // 分钟

    mVal = secondsDate;
    fVal = minutesDate;

    if(hoursDate >= 12) {
      sDom.style.transform=`rotate(${ ~~(30 * (hoursDate - 12)) }deg)`; // 分针
      sVal = hoursDate - 12;
    } else {
      sDom.style.transform=`rotate(${ ~~(30 * hoursDate) }deg)`; // 分针
      sVal = hoursDate;
    }
    mZd(secondsDate);
  };
  init();


})();