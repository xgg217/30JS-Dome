(function() {
  "use strict";

  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  const xz = ["The", "A", "An"];

  const reg = /^([The|A|An] {0,})+/g;

  // 去掉前缀
  const arr = bands.map(item => {
    return item.replace(reg, ($) => {
      console.log($);
      return ""
    })
  });

  const newarr = arr.sort((a, b) => {
    // console.log(a);
    // console.log(b);
    return a > b ? 1 : -1;
  })

  console.log(newarr);



})();