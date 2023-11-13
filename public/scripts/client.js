/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

  const tweet =
    `<article>
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
    
  return tweet;
};

// Helper function to get number of days
const getPostedTime = function(timeInMilliseconds) {
  const currentDate = new Date();
  const millisecondsSinceEpoch = currentDate.getTime();
  const difference = millisecondsSinceEpoch - timeInMilliseconds;

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const numberOfDays = Math.round(difference / millisecondsPerDay);
  
  return numberOfDays;
};