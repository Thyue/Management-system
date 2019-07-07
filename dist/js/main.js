document.getElementById("loginBtn").onclick = function () {
  if (document.getElementById("account").value == "" || document.getElementById("password").value == "") {
    alert("請輸入");
  }
  else {
    addClass(document.querySelector(".box"), "active_loginSmall");
    setTimeout(function () {
      addClass(document.getElementById("animation"), "active_animationSmall")
      document.querySelector(".box").style.display = "none"
    }, 800)
    setTimeout(function () {
      document.getElementById("animation").setAttribute("class", "")
      addClass(document.getElementById("animation"), "sk-sentTop")
      addClass(document.getElementById("animation"), "active_sentTop")
    }, 4400)
    if (document.getElementById("account").value == "admin" && document.getElementById("password").value == "admin") {
      setTimeout(function () {
        addClass(document.getElementById("page"), "login-success_active")
        addClass(document.getElementById("clouds"), "login-success_cloud_active")
        addClass(document.getElementById("gress"), "login-success_gress_active")
      }, 5000)
      setTimeout(function () {
        window.location.href = 'https://thyue.github.io/Management-system/system.html';
      }, 6000)
    }
    else {
      setTimeout(function () {
        document.getElementById("login").setAttribute("class", "");
        document.getElementById("animation").setAttribute("class", "")
        document.getElementById("animation").setAttribute("class", "sk-sentDown active_sentDown")
      }, 5000)
      setTimeout(function () {
        document.getElementById("login").setAttribute("class", "");
        document.getElementById("animation").setAttribute("class", "")
        addClass(document.getElementById("login"), "box")
        addClass(document.getElementById("animation"), "sk-rotating-plane")
        document.getElementById("login").style.display = "block"
        document.getElementById("account").value = null;
        document.getElementById("password").value = null;
      }, 6000)
    }
  }
}