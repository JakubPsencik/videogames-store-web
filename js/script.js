  window.addEventListener('load', function() {

  });
  
  $(function () {

    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });

     
    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // SCROLL
    $(function() {

      var menubar = document.getElementsByClassName("navbar");
      const barHeight = menubar[0].clientHeight;

      $('.navbar a, .link-button a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - barHeight
        }, 1000);      
      });
    });
  });


function showText(event) {
  var text = document.getElementById("nav-bar-logo-auth");
  text.style.visibility = "visible";
}

function hideText(event) {
  document.getElementById("nav-bar-logo-auth").style.visibility = "hidden";
}

function validateEmail(event, mail) {

  var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(mail);
  if(mail.value.match(mailFormat)) {
    return true;
  }
  else {
    event.preventDefault();
    alert("Invalid email address!");
    document.form.mailform.focus();
    return false;
  }
}

var countdown = setInterval(function() {

    var newYearDate = new Date("Dec 31, 2020 24:00:00").getTime();
    var currentDate = new Date().getTime();

    var diff = newYearDate - currentDate;

    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = d + " days " + h + " hours " + m + " minutes " + s + " seconds";

}, 1000);


