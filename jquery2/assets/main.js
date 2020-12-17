var start_time;
var end_time;
var diff;
var timer;
$(document).ready(function() {



  
  function updateClock() {
    var date = new Date();
    var clockUpdateSpeed = 20000; // speed in milliseconds
    if (date > start_time && date <= end_time) {
      var seconds = (end_time.getTime() - date.getTime()) / 1000;
      var progress = seconds / diff;
      $(".ticker")[0].setAttribute('stroke-dashoffset', 78 + (550.318 * progress)) // end 628.318 start 78 diff 550.318
      var decimals = 2;



      let progress_display = (100.0 - (progress * 100)).toFixed(decimals);

      if (progress_display < 3.0) {
        red = 25 + (progress_display / 3.0) * 35;
        $("body").css("background", "rgb(" + red + ", 25, 112)")
        $(".box").css("fill", "white");
      } else if (progress_display < 6.0) {
        if (progress_display > 5.0) {
          $(".box").css("fill", "black");
        } else {
          $(".box").css("fill", "white");
        }
        proportion = ((progress_display - 3.0) / 3.0);
        red = 60 + proportion * 180;
        green = 25 + proportion  * 19; 
        blue = 112 - proportion * 107;
        $("body").css("background", "rgb(" + red + ", " + green + ", " + blue +")");
      }else if (progress_display < 8.0) {
        $(".box").css("fill", "black");
        proportion = ((progress_display - 6.0) / 2.0);
        green = 44 + proportion * 156; // 7
        $("body").css("background", "rgb(" + 240 + ", " + green + ", " + 5 +")");
      } else if (progress_display < 8.5) {
        $(".box").css("fill", "black");
        proportion = ((progress_display - 8.0) / 0.5);
        red = 240 + 7 * proportion;
        green = 200 + 43 * proportion;
        blue = 5 + 215 * proportion;
        $("body").css("background", "rgb(" + red + ", " + green + ", " + blue +")")
      } else if (progress_display < 13) {
        $(".box").css("fill", "black");
        proportion = ((progress_display - 8.5) / 4.5);
        red = 247 - 112 * proportion;
        green = 243 - 37 * proportion;
        blue = 220 + 15 * proportion;
        $("body").css("background", "rgb(" + red + ", " + green + ", " + blue +")")
      } else if (progress_display > 97) {
        $(".box").css("fill", "white");
        proportion = (100 - progress_display) / 3.0;
        red = 25 + proportion * 35;
        $("body").css("background", "rgb(" + red + ", 25, 112)");
      } else if (progress_display > 94) {
        if (progress_display > 95.0) {
          $(".box").css("fill", "white");
        } else {
          $(".box").css("fill", "black");
        }
        proportion = (97 - progress_display) / 3.0;
        red = 60 + proportion * 180;
        green = 25 + proportion  * 19; 
        blue = 112 - proportion * 107;
        $("body").css("background", "rgb(" + red + ", " + green + ", " + blue +")");
      } else if (progress_display > 92) {
        $(".box").css("fill", "black");
        proportion = (94 - progress_display) / 2.0;
        green = 44 + proportion * 156; // 7
        $("body").css("background", "rgb(" + 240 + ", " + green + ", " + 5 +")");
      } else if (progress_display > 91.5) {
        $(".box").css("fill", "black");
        proportion = (92 - progress_display) / 0.5;
        red = 240 + 7 * proportion;
        green = 200 + 43 * proportion;
        blue = 5 + 215 * proportion;
        $("body").css("background", "rgb(" + red + ", " + green + ", " + blue +")");
      } else if (progress_display > 87) {
        $(".box").css("fill", "black");
        proportion = (91.5 - progress_display) / 4.5;
        red = 247 - 112 * proportion;
        green = 243 - 37 * proportion;
        blue = 220 + 15 * proportion;
        $("body").css("background", "rgb(" + red + ", " + green + ", " + blue +")");
      }

      $(".percent").text(progress_display + "%");
      document.title = progress_display + "%";
    } else if (date > end_time) {
      $(".percent").text("100%");
      document.title =  "100%";
      clearInterval(timer);
      $(".box").css("fill", "white");
    } else if (date < start_time) {
      $("body").css("background", "rgb(25, 25, 112)");
      $(".percent").text("0%");
      document.title =  "0%";
      $(".box").css("fill", "white");
    }
  
  }

 

  $(".ampm").hover(function(){
      $(this).css("background", "azure");
  }, function() {
      $(this).css("background", "white");
  });

  $(".ampm").click(function() {
    if ($(this).text() == "AM") {
      $(this).text("PM");
    } else {
      $(this).text("AM");
    }
  });

  $(".button").click(function() {
    start_hour = parseInt($("#s_hour").val());
    end_hour = parseInt($("#e_hour").val());

    start_min = parseInt($("#s_min").val());
    end_min = parseInt($("#e_min").val());

    if (isNaN(start_hour) || isNaN(end_hour)
      || start_hour < 1 || end_hour < 1
      || start_hour > 12 || end_hour > 12) {
      alert("Please ensure that your hour is a number from 1 to 12");
    } else if (isNaN(start_min)|| isNaN(end_min)
      || start_min < 0 || end_min < 0
      || start_min > 59 || end_min > 59) {
      alert("Please ensure that your minute is a number from 0 to 59");
    } else if (start_hour == end_hour && start_min == end_min) {
      alert("Please ensure that the start time is different than the end time.")
    } else {
      let today = new Date();
      start = new Date();
      end = new Date();

      if ($("#start_ampm").text() == "PM" && start_hour < 12) {
          start_hour += 12;
      } else if (start_hour == 12 && $("#start_ampm").text() == "AM") {
          start_hour = 0;
      }

      if ($("#end_ampm").text() == "PM" && end_hour < 12) {
          end_hour += 12;
      } else if (end_hour == 12 && $("#end_ampm").text() == "AM") {
          end_hour = 0;
      }

      start.setHours(start_hour, start_min, 0)
      if (start_hour > end_hour || (start_hour == end_hour && start_min > end_min)) {
        // end date is tomorrow
        end.setDate(end.getDate() + 1);
      }
      end.setHours(end_hour, end_min, 0)
      start_time = start
      end_time = end
      diff = (end.getTime() - start.getTime()) / 1000;
      console.log('update clock');
      updateClock();
      update_frequency = 300
      if (diff <= 1200) {
        update_frequency = 33;
      }
      timer = setInterval(updateClock, update_frequency);
      $(".container").toggleClass("hidden");
      $(".box").toggleClass("hidden");

    }

  });

});
