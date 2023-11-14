/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
$(document).ready(function() {
//  Render tweets in tweets-container
  const renderTweets = function(tweets) {
    for (let individualTweet of tweets) {
      const $tweet = createTweetElement(individualTweet);
      $('#tweets-container').append($tweet);
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
    const postedTime = getPostedTime(dateTweeted);

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
        <p>${postedTime} days ago</p>
        <div class="all-tweets-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`;
    
    return $tweet;
  };

  // Helper function to get number of days
  const getPostedTime = function(postedDateInMilliseconds) {
    const currentDate = new Date();
    const millisecondsSinceEpoch = currentDate.getTime();
    const difference = millisecondsSinceEpoch - postedDateInMilliseconds;

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const numberOfDays = Math.round(difference / millisecondsPerDay);
  
    return numberOfDays;
  };
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  renderTweets(data);

  // AJAX POST request when the form is submitted
  $("form").on("submit", function(event) {
    // Prevent the form's default submission.
    event.preventDefault();

    const data = $(this).serialize();
    const url = $(this).attr("action");

    // AJAX POST request that sends the form data to the server
    $.ajax({
      type: "POST",
      url,
      data
    });
  });
});