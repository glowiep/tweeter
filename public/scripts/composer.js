$(document).ready(function() {
  // Show compose-tweet section by default
  $("#compose-tweet").show().find("#tweet-text").focus()
  
  $("#compose").on("click", function(event) {
    event.preventDefault;
    // Remove tweet validation warning
    $("#validate-warning").removeClass("validator").empty();

    $("#compose-tweet").toggle("fast"); // show or hide compose-tweet section
    $("#tweet-text").focus(); // Enable the textarea automatically
  });
  
  // Scroll button is hidden only when the vertical scroll position is 0
  $("#scroll-button").hide();
  $(window).on("scroll", function(event) {
    event.preventDefault;
    
    let $scroll = $(window).scrollTop();
    if ($scroll === 0) {
      return $("#scroll-button").hide();
    }
    $("#scroll-button").show();
  });

  // Scroll to top button function
  $("#scroll-button").on("click", function(event) {
    event.preventDefault;
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return $("#compose-tweet").show().find("#tweet-text").focus();
  });
});