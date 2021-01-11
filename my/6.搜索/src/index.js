(function(tangArr) {
  "use strict";

  const inputDom = document.querySelector("input");
  const ulDom = document.querySelector("ul");

  /**
   * 根据搜索遍历内容
   */
  const seack = function seack(value) {
    const arr = tangArr.filter(item => {
      if(item.contents.indexOf(value) !== -1) {
        return true;
      }
      return false;
    });
    // console.log(arr);
    if(arr.length) {
      setUlDom(arr);
    }
  };

  /**
   * 将搜索结构渲染成DOM
   */
  const setUlDom = function setUlDom(arr) {
    let str = ""
    arr.forEach(item => {
      str += `
        <li>
          <p>${ item.contents }</p>
          <p>${ item.title }-${ item.author }</p>
        </li>
      `
    });

    ulDom.innerHTML = str;
  };



  inputDom.addEventListener("input", function(e) {
    if(e.target.value) {
      seack(e.target.value)
    }
    console.log(e.target.value);
  });




})(tangArr);