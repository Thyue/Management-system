$(document).ready(function () {
  $("#verification").hide();
  $("#loginBtn").on("click",function(){
    if ($("#account").val() == "" || $("#password").val() == "") {
      alert("請輸入");
    }
    else {
      $(".box").addClass("active_loginSmall")
      setTimeout(function () {
        $("#animation").addClass("active_animationSmall")
        $(".box").hide();
      }, 800);
      setTimeout(function () {
        $("#animation").attr("class", "");
        $("#animation").addClass("sk-sentTop");
        $("#animation").addClass("active_sentTop");
      }, 4400)
      if ($("#account").val() == "admin" && $("#password").val() == "admin") {
        setTimeout(function () {
          $("#page").addClass("login-success_active");
          $("#clouds").addClass("login-success_cloud_active");
          $("#gress").addClass("login-success_gress_active");
        }, 5000)
        setTimeout(function () {
          alert("畫面跳轉！");
        }, 6000)
      }
      else {
        setTimeout(function () {
          $("#login").attr("class", "");
          $("#animation").attr("class", "");
          $("#animation").attr("class", "sk-sentDown active_sentDown");
        }, 5000)
        setTimeout(function () {
          $("#login").attr("class", "");
          $("#animation").attr("class", "");
          $("#login").addClass("box");
          $("#animation").addClass("sk-rotating-plane");
          document.getElementById("account").value = null;
          document.getElementById("password").value = null;
          $("input").attr("class", "");
          $("#login").show();
          $("#verification").show();
        }, 6000)
      }
    }
  })
});
