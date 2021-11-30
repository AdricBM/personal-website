$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("scrollDown");
    } else {
      $(".navbar").removeClass("scrollDown");
    }
  });

  // navbar menu button toggle

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  })

});
