$(document).ready(function() {
//  Render tweets in tweets-container
  const renderTweets = function(tweets) {
    const $allTweetsContainer = $('#tweets-container');
    $allTweetsContainer.empty();
    for (let individualTweet of tweets) {
      const $tweet = createTweetElement(individualTweet);
      $allTweetsContainer.append($tweet);
    }
  };
  
  const createTweetElement = function(tweetObject) {
    // Tweet article header info
    const username = tweetObject.user.name;
    const usernameHandle = tweetObject.user.handle;
    const avatarImg = tweetObject.user.avatars;
    // Tweet message
    const tweetText = tweetObject.content.text;
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

  // AJAX POST handler for form submission
  $("form").on("submit", function(event) {
    // Prevent the form's default submission.
    event.preventDefault();

    const data = $(this).serialize();
    const url = "/tweets";
    
    // AJAX POST request that sends the form data to the server
    $.ajax({
      type: "POST",
      url,
      data,
      success: (data) => {
        // Clear textarea
        $("#tweet-text").val('');
        const $counterElem = $("#tweet-text").parent().find(".counter");
        $counterElem.val('140');
        loadtweets();
      },
      error: (err) => {
        console.log(err);
      }
    });
  });

  
  // Function responsible for fetching tweets
  const loadtweets = function() {
    const tweetsURL = "/tweets";
    $.ajax({
      method: "GET",
      url: tweetsURL,
      success: (newTweet) => {
        renderTweets(newTweet.reverse());
      },
      error: (err) => {
        console.log(err);
      }
    });
  };
  loadtweets();
});