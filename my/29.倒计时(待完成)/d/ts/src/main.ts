import template from 'lodash/template';
import { setDate } from "./tools/index"

(function() {
  const timerDOM = document.querySelector('.timer__controls');
  const timeDOM = document.querySelector('.display .display__time-left');
  const timeEndDOM = document.querySelector('.display .display__end-time')!;

  timerDOM!.addEventListener("click", function(e) {
    const targetDOM = <HTMLElement>e.target;
    if(targetDOM.nodeName !== "BUTTON") { return; }
    
    const timeNum =  Number(targetDOM.dataset.time);

    const timeStr = setDate((Date.now() * 1), timeNum);
    timeEndDOM!.textContent = timeStr; // 设置到期时间

    // 倒计时
    timeDOM!.textContent = timeNum + "";
    setTimeout(() => {
      djsTime(timeNum);
    }, 1000)
  });

  const djsTime = function(num:number) {
    if(num <= 0){
      return
    }

    const newNum = num - 1;
    timeDOM!.textContent = newNum + "";
    setTimeout(() => {
      djsTime(newNum);
    }, 1000)
  }
})();

