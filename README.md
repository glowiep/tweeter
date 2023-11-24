# Tweeter Project

Tweeter (aka Twitter clone) is a dynamic and responsive Single Page Application (SPA) built with HTML, CSS, JS, jQuery and AJAX.


## Using Tweeter
Tweeter homepage layout will depend on your device.

#### Smaller Screens (Under 1024px):
  ![Screenshot of Tweeter Smaller Screen Layout](https://github.com/glowiep/tweeter/blob/master/docs/tweeter-homepage-smallscreen.png?raw=true)

#### Desktop Layout (1024px and above):
  ![Screenshot of Tweeter Desktop Layout](https://github.com/glowiep/tweeter/blob/master/docs/tweeter-homepage-desktop.png?raw=true)

- Users can create short posts of up to 140 characters and have them append to the main page.
![Screenshot of Tweet compose box](https://github.com/glowiep/tweeter/blob/master/docs/tweet-text.png?raw=true) <br><br>
- The tweet will contain the avatar image, name of user as well as time since it was posted. 
![Screenshot of individual Tweet](https://github.com/glowiep/tweeter/blob/master/docs/individual-tweet.png?raw=true) <br><br>
- The remaining characters avaliable is indicated at the bottom right corner. This will turn red when 140 characters is exceeded. 
![Screenshot of Tweet character count validation error](https://github.com/glowiep/tweeter/blob/master/docs/characters-exceeded-error.png?raw=true) <br><br>
- Empty Tweets will not be posted.
![Screenshot of empty Tweet error](https://github.com/glowiep/tweeter/blob/master/docs/empty-tweet-error.png?raw=true)<br><br>
- Posts are sequential, with the most recent posts appearing at the top of the page. <br><br>
- Click on "Write a new tweet" on the top right corner to toggle the visibility of the compose tweet textbox. <br>
<div align="center">
<img width="100px" src=https://github.com/glowiep/tweeter/blob/master/docs/write-a-new-tweet-button.png?raw=true>
</div>
<br>

## Steps to clone and run locally

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Node 5.10.x or above
- Express
- Chance
- md5
- body-parser

## Development Dependencies

- Nodemon

## Additional Features

- Responsive design using Media queries in CSS.
`(Zoom in and out with CTRL/CMD and +/- (or scroll) to test the responsive design)`
- SASS components for maintainable CSS.


<div align="center">
<h3 style="text-align: center;">Happy Tweeting!</h3>
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWF2eTFmb2dzYnYyeDkwdHBuNzB5dnU5dGF1b3JzZzdncGNtaTNrOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85g4l3qgILLQelgs/giphy.gif" alt="Bird Cartoon Loop GIF By Jason Clarke" width="130">
</div>