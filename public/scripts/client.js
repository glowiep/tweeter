$(document).ready(function() {
  /**
   * Takes in an array of tweet objects, and render them to the DOM.
   * @param {Object[]} tweets - an array of tweet data objects.
   * @returns appends the tweet HTML structure to the tweets container.
   */
  const renderTweets = function(tweets) {
    const $allTweetsContainer = $('#tweets-container');
    $allTweetsContainer.empty();
    for (let individualTweet of tweets) {
      const $tweet = createTweetElement(individualTweet);
      $allTweetsContainer.append($tweet);
    }
  };
  
  /**
   * Takes in a tweet object and returns a tweet <article> element containing the entire HTML structure of the tweet.
   * @param {object} tweetObject - tweet data object with all the necessary tweet data.
   * @returns individual tweet <article> elements containing the entire HTML structure of the tweet.
   */
  const createTweetElement = function(tweetObject) {
    // Prevent XSS with escaping
    const escape = function(str) {
      let p = document.createElement("p");
      p.appendChild(document.createTextNode(str));
      return p.innerHTML;
    };

    // Tweet article header info
    const username = tweetObject.user.name;
    const usernameHandle = tweetObject.user.handle;
    const avatarImg = tweetObject.user.avatars;
    // Tweet message
    const tweetText = escape(tweetObject.content.text);
    // Calculate when tweet was posted
    const dateTweeted = tweetObject.created_at;
    const postedTime = timeago.format(dateTweeted);


    const $tweet =
    `<article class="shadow">
      <header>
        <div class="tweet-user-profile">
          <img src=${avatarImg} alt="My Profile Picture">
          <h3 class="tweet-user-name">${username}</h3>
        </div>
        <p class="username-handle">${usernameHandle}</p>
      </header>
      <p class="tweet-text">${tweetText}</p>
      <footer>
        <p>${postedTime}</p>
        <div class="all-tweets-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`;
    
    return $tweet;
  };


  /**
   * Fetches tweets from the http://localhost:8080/tweets page.
   * @function
   * @name loadtweets
   */
  const loadtweets = function() {
    const tweetsURL = "/tweets";

    $.ajax({
      method: "GET",
      url: tweetsURL,
      success: (tweets) => {
        renderTweets(tweets.reverse());
      },
      error: (err) => {
        console.log(err);
      }
    });
  };

  // AJAX POST handler for form submission
  $("form").on("submit", function(event) {
    // Prevent the form's default submission.
    event.preventDefault();

    // Remove tweet validation warning
    $("#validate-warning").removeClass("validator").empty();

    // Prevent submission if textarea is empty or exceedes 140 characters
    const $tweetText = $("#tweet-text");
    if ($tweetText.val().length === 0) {
      const errMsg = `<i class="fa-solid fa-circle-exclamation fa-bounce" style="color: #fff700;"></i> Please enter a tweet.`;
      $("#validate-warning").addClass("validator").html(errMsg).hide().slideDown("fast");
      return;
    } else if ($tweetText.val().length > 140) {
      const errMsg = `<i class="fa-solid fa-circle-exclamation fa-bounce" style="color: #fff700;"></i> Tweet has to be less than 140 characters!`;
      $("#validate-warning").addClass("validator").html(errMsg).hide().slideDown("fast");
      return;
    }

    const data = $(this).serialize();
    const url = "/tweets";
    
    // AJAX POST request that sends the form data to the server
    $.ajax({
      type: "POST",
      url,
      data,
      success: (data) => {
        // Clear textarea
        $tweetText.val('');
        const $counterElem = $tweetText.parent().find(".counter");
        // Reset counter
        $counterElem.val('140');
        loadtweets();
      },
      error: (err) => {
        console.log(err);
      }
    });
  });

  loadtweets();
});