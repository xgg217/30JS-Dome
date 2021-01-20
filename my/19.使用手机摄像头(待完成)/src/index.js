const vConsole = new VConsole();

(function() {
  "use strict";



  const p = document.querySelector("p");

  p.textContent = "111正确12"

  console.log( navigator);
  console.log( navigator.mediaDevices);
  console.log( 1);

  /**
   * 调取本地摄像头
   */
  const constraints = { audio: false, video: { width: 300, height: 200 } };
  function askWebcam() {
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(constraints)
    }
  }

  // askWebcam();

  // navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
  //   /* 使用这个stream stream */
  //   console.log(stream);
  //   // alert(stream)
  //   // p.textContent = stream + "111正确"
  //   p.textContent = "111正确"
  // })
  // .catch(function(err) {
  //   /* 处理error */
  //   console.log(err);
  //   // alert(err)
  //   // p.textContent = err + "1错误"
  //   p.textContent = "1错误"
  // });

  // if (navigator.mediaDevices === undefined) {
  //   navigator.mediaDevices = {};
  // }
  // if (navigator.mediaDevices.getUserMedia === undefined) {
  //     navigator.mediaDevices.getUserMedia = function (constraints) {
  //     var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
  //     if (!getUserMedia) {
  //         return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
  //     }
  //     return new Promise(function (resolve, reject) {
  //         getUserMedia.call(navigator, constraints, resolve, reject);
  //     });
  //   }
  // }

  // navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
  //   /* 使用这个stream stream */
  //   console.log(stream);
  //   // alert(stream)
  //   // p.textContent = stream + "111正确"
  //   p.textContent = "111正确"
  // })
  // .catch(function(err) {
  //   /* 处理error */
  //   console.log(err); 
  //   // alert(err)
  //   // p.textContent = err + "1错误"
  //   p.textContent = "1错误"
  // });

  



})();