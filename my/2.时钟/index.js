(function() {
  "use strict";

  const mDom = document.querySelector(".m"); // 秒针
  const fDom = document.querySelector(".f"); // 分针
  const sDom = document.querySelector(".s"); // 时针

  let mTime = 0;

  let mVal = 0;
  let fVal = 0;
  let sVal = 0;

  /**
   * 秒针转动
   * 当转动到 60时，分针 + 1
   * @param {*} val 
   */
  const mZd = function mZd(val) {
    if(val >= 60) {
      mVal = 1;
      fZd(fVal)
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
   * 当转动到 60时，时针 + 1
   */
  const fZd = function fZd(val) {
    if(val >= 60) {
      fVal = 1;
      sZD(sVal)
    } else {
      fVal++;
    }

    fDom.animate([
      { transform: `rotate(${ (val * 6) % 360 }deg)` },
      { transform: `rotate(${ fVal * 6 }deg)` },
    ], 100);
    fDom.style.transform=`rotate(${ ~~(6 * fVal) }deg)`; // 秒
  }

  /**
   * 时针转动
   */
  const sZD = function sZD(val) {

    sVal
    
    if(val >= 12) {
      sVal = 1;
      
    } else {
      sVal++;
    }

    sDom.animate([
      { transform: `rotate(${ (val * 30) % 360 }deg)` },
      { transform: `rotate(${ sVal * 30 }deg)` },
    ], 100);
    sDom.style.transform=`rotate(${ (30 * sVal) }deg)`; // 秒
  }

  // 初始化
  const init = function init() {
    const nowDate = new Date();
    const hoursDate = nowDate.getHours(); // 小时
    const minutesDate = nowDate.getMinutes(); // 分钟
    const secondsDate = nowDate.getSeconds(); // 秒

    mVal = secondsDate;
    fVal = minutesDate;

    fDom.style.transform=`rotate(${ 6 * minutesDate }deg)`; // 分针

    if(hoursDate >= 12) {
      sDom.style.transform=`rotate(${ ~~(30 * (hoursDate - 12)) }deg)`; // 时针
      sVal = hoursDate - 12;
    } else {
      sDom.style.transform=`rotate(${ ~~(30 * hoursDate) }deg)`; // 时针
      sVal = hoursDate;
    }
    console.log(sVal);

    mZd(0);
    // fZd(0);
    // sZD(0);
  };
  init();


})();