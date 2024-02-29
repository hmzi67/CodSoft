$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("show");
    $(".menu-btn i").toggleClass("show");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Freelancer", "Student BSCS"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Freelancer", "Student BSCS"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});


function sendEmail() {

  let userName = document.querySelector("userName");
  let userEmail = document.getElementById()



  console.log("hello " + userName);

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hamzawaheed057@gmail.com",
    Password : "540080562F6AE78214EDD7F5136BAB7EB452",
    To : 'codehuntspk@gmail.com',
    From : "hamzawaheed057@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}