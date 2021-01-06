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

  // 初始化时间
  const init = function init() {
    mDom.style.transform=`rotate(${ ~~(6 * secondsDate) }deg)`; // 秒
    fDom.style.transform=`rotate(${ ~~(6 * minutesDate) }deg)`; // 分钟

    if(hoursDate >= 12) {
      sDom.style.transform=`rotate(${ ~~(30 * (hoursDate - 12)) }deg)`; // 分针
    } else {
      console.log(~~(15.4 * 11));
      sDom.style.transform=`rotate(${ ~~(30 * hoursDate) }deg)`; // 分针
    }


  };
  init();

  // 秒针转动
  const mZd = function mZd() {
    
  }


})();