$(document).ready( function() {
  scroll()
  var image = document.getElementsByClassName('down');
  let j = new simpleParallax(image, {
      orientation: 'down',
      scale: 1.3
  });

  var image2 = document.getElementsByClassName('left');
  let p = new simpleParallax(image2, {
      orientation: 'left',
      scale: 1.3
  });


$("#gnar").hover(function(){
      $("#gnar_info").toggleClass("hidden");
  }, function() {
      $("#gnar_info").toggleClass("hidden");
  });

$("#steez").hover(function(){
      $("#steez_info").toggleClass("hidden");
  }, function() {
      $("#steez_info").toggleClass("hidden");
  });

$("#send").hover(function(){
      $("#send_info").toggleClass("hidden");
  }, function() {
      $("#send_info").toggleClass("hidden");
  });

  $("#rage").mouseenter(function(){
      $("#rage_info").toggleClass("hidden");
  });

  $("#rage").mouseleave(function(){
      $("#rage_info").toggleClass("hidden");
  });

});

$(document).on("scroll", function () {
  scroll();
})



function scroll() {
   var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var items = $("*");

  for (var i = 0; i < items.length; i++) {
  var item = items[i]

  if (($(item).position().top < pageBottom && $(item).position().top + $(item).height() > pageTop - 150) || $(item).hasClass("stayvisible")) {
  $(item).addClass("visible")
  } else {  $(item).removeClass("visible")
  }
  }
}


// https://www.superhi.com/library/posts/how-to-add-web-design-elements-that-fade-in-and-out-on-scroll