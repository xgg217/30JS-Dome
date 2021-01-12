(function(tangArr) {
  "use strict";

  const inputDom = document.querySelector("input");
  const ulDom = document.querySelector("ul");

  /**
   * 节流
   * @param {*} func 
   * @param {*} wait 
   */
  function throttle(func, wait) {
    "use strict";
    let timeout = 0;
    let that = null;
    return function(...args) {
      that = this;
      if(!!timeout) {
        return
      }
      // 能走到这一步，证明上一次定时器已经执行完成
      timeout = setTimeout(function() {
        console.log(timeout);
        timeout = 0;
        func.apply(that, args);
      }, wait);
    }
  }

  /**
   * 根据搜索遍历内容
   */
  const seack = function seack(value) {
    const arr = tangArr.filter(item => {
      if(item.contents.includes(value) || item.title.includes(value) || item.author.includes(value) ) {
        return true;
      }
      return false;
    });
    if(arr.length) {
      setUlDom(arr, value);
    } else {
      ulDom.innerHTML = "";
    }
  };

  /**
   * 将搜索结构渲染成DOM
   */
  const setUlDom = function setUlDom(arr, value) {
    let str = "";
    const reg = new RegExp(value, 'gm');
    arr.forEach(item => {
      let contenHTML = `
        <li>
          <p>${ item.contents }</p>
          <p>${ item.title }-${ item.author }</p>
        </li>
      `;
      const repHTML = contenHTML.replace(reg, a => {
        return `<span>${ a }</span>`
      });
      str += repHTML;
    });
    ulDom.innerHTML = str;
  };

  const handleClick = function(e) {
    if(e.target.value) {
      seack(e.target.value)
    }
    // console.log(e.target.value);
  };

  const throttleFun = throttle(handleClick, 1000);

  inputDom.addEventListener("input", throttleFun);

})(tangArr);