
$(function() {
  let i = 0;
  let colors = ["red", "gold", "navy", "green", "pink"];

  $(".time-button").click(function() {
    $("body").toggleClass("black");
    $(".img").toggleClass("hidden");
    $("time").text("Hello")
    $(".time-button").toggleClass("white");
    $(".filter-button").toggleClass("white");
    if ($(".time-button").text() === "Night") {
    	$(".time-button").text("Day");
    	$(this).css("background", "black");
    } else {
    	$(".time-button").text("Night");
    	$(this).css("background", "skyblue");
    }
  });

   $(".filter-button").click(function() {
	if (i == -1) {
		$("img").css("opacity", 1.0)
	} else {
		$("img").css("opacity", 0.8)
		$(".img").css("background-color", colors[i]);
	}

    i++;
    if (i >= colors.length) {
      i = -1;
      $(this).css("background", "");
    } else {
      $(this).css("background", colors[i]);
    }

  });

  $(".filter-button").hover(function(){
  	  if (i == colors.length) {
         $(this).css("background", "");
  	  }
      $(this).css("background", colors[i]);
  }, function() {
      $(this).css("background", "");
  });

  $(".time-button").hover(function(){
    	if ($(this).text() === "Night") {
      $(this).css("background", "skyblue");
    } else {
      $(this).css("background", "black");
    }
  }, function() {
      $(this).css("background", "");
  });

});
