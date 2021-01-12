(function() {
  "use strict";
  const domArr = [];
  const liArr = Array.from(document.querySelectorAll("ul li"));
  const audioArr = Array.from(document.querySelectorAll(".audios audio"));

  liArr.forEach(item => {
    const obj = {
      text: item.textContent, // 按键名字
      doms: item, // 对应按键DOM
      audioDom: {}, // 对应音频DOM
    };
    for(const key of audioArr) {
      if(key.dataset.keyvalue === item.textContent) {
        obj.audioDom = key;
        break;
      }
    }
    domArr.push(obj)
  });
  console.log(domArr);

  /**
   * 根据按键获取元素本身
   */
  const getDom = function getDom(text) {
    const arr = domArr.filter(item => {
      if(text === item.text) {
        return true;
      }
      return false;
    });
    if(arr.length) {
      return arr
    } else {
      return []
    }
  };

  // 按下键
  document.addEventListener("keydown", function(e) {
    const arr = getDom(e.key.toLocaleUpperCase());
    if(!arr.length) { return }
    arr[0].doms.classList.add("kd");
    console.log(arr[0]);
    arr[0].audioDom.currentTime = 0;
    arr[0].audioDom.play();
  });

  // 弹起
  document.addEventListener("keyup", function(e) {
    const arr = getDom(e.key.toLocaleUpperCase());
    if(!arr.length) { return }
    arr[0].doms.classList.remove("kd")
  });

})();