//背景(藍天綠地)處理
document.addEventListener("DOMContentLoaded", function (event) {
  function gress() {
    var tl = new TimelineMax({
      repeat: -1
    });
    tl.to("#gress", 20, {
      backgroundPosition: "1301px 0px",
      force3D: true,
      rotation: 0.01,
      z: 0.01,
      autoRound: false,
      ease: Linear.easeNone
    });
    return tl;
  }
  function clouds() {
    var tl = new TimelineMax({
      repeat: -1
    });
    tl.to("#clouds", 52, {
      backgroundPosition: "-2247px bottom",
      force3D: true,
      rotation: 0.01,
      z: 0.01,
      //autoRound:false,
      ease: Linear.easeNone
    });
    return tl;
  }
  var masterTL = new TimelineMax({
    repeat: -1
  });
  window.onload = function () {
    masterTL
      .add(gress(), 0)
      .add(clouds(), 0)
      .timeScale(0.7)
      .progress(1).progress(0)
      .play();
  };
});
//處理class
function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
  }
}
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}