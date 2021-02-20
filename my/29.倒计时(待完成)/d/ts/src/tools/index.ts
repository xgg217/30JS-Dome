

/**
 * 设置当前时间格式
 */
const setDate = function setDate(date:number, addNum:number):string {

  const newDate = date + (addNum * 1000);
  const newTimne  = new Date(newDate);

  const hoursNum = newTimne.getHours(); // 小时
  const minutesNum = newTimne.getMinutes(); // 分钟
  const secondsNum = newTimne.getSeconds(); // 秒

  let hoursStr = hoursNum > 12 ? `下午 ${ hoursNum - 12 }` : `上午 ${ hoursNum }`;
  let minutesStr = minutesNum > 10 ? `${ minutesNum }` : `0${ minutesNum }`;
  let secondsStr = secondsNum > 10 ? `${ secondsNum }` : `0${ secondsNum }`;

  return hoursStr + `:` + minutesStr + `:` + secondsStr;
}

export {
  setDate,
}