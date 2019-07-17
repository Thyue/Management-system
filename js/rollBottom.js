//處理到底部時工具列下降畫面

//獲取文件高度
function getDocumentTop() {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop; return scrollTop;
}
//獲取可視窗口高度
function getWindowHeight() {
  var windowHeight = 0; if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}
//獲取滾動條滾動高度
function getScrollHeight() {
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight; return scrollHeight;
}
//開始監聽滾動事件
window.onscroll = function () {
  if (getDocumentTop() == 0) {
    document.getElementById("footer").setAttribute("class", "container-fluid p-0"); //初始化class
  }
  else if (getScrollHeight() - (getWindowHeight() + getDocumentTop()) < 40) {
    document.getElementById("footer").setAttribute("class", "container-fluid p-0"); //初始化class
    document.getElementById("footer").classList.add("rollBottom_DownToHide_active");
  }
  else {
    if (document.getElementById("footer").classList.contains("rollBottom_DownToHide_active")) {
      document.getElementById("footer").setAttribute("class", "container-fluid p-0 rollBottom_UpDisplay_active");
      setTimeout(function () {
        document.getElementById("footer").setAttribute("class", "container-fluid p-0"); //初始化class
      }, 500);
    }
  }
}