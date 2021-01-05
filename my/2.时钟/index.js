(function() {
  "use strict";

  const nowDate = new Date();

  const hoursDate = nowDate.getHours(); // 小时
  const minutesDate = nowDate.getMinutes(); // 分钟
  const secondsDate = nowDate.getSeconds(); // 秒

  console.log(hoursDate);
  console.log(minutesDate);
  console.log(secondsDate);

  const mDom = document.querySelector(".m"); // 秒针
  const fDom = document.querySelector(".f"); // 分针
  const sDom = document.querySelector(".s"); // 时针

  // 初始化时间
  const init = function init() {
    
  };


})();