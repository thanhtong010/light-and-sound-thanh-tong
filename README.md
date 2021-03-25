# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Thanh Tong

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/light-and-sound-thanh-tong

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
[Link to the video for my game](https://drive.google.com/file/d/1LYtN9syhh9-VjB4oQgdRsQQn8gqc2urC/view?usp=sharing)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

N/A

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge that I encountered while creating this submission was when I was attempting to implement the optional feature to make the playback speed shorter.
After testing out how much time I should remove from the speed during each clue sequence, I decided that removing 75 (milliseconds) from each clue sequence playback
was sufficient enough to make the game harder throughout the course of the game. However, after I won the game, I attempted to restart the game and the clueHoldTime
was super short! I was not sure why this was the case, however, after looking at my startGame() function closely again, I realized that I had not initialized the clueHoldTime
variable after I had changed it from a constant to a variable. Because clueHoldTime was not initialized in startGame(), it was still
going to be the same time as it was in the last iteration of the clue playback from the previous game. After locating the bug in my code, I fixed it by making sure to initialize clueHoldTime to 1000 in the startGame() function
(line 19 in script.js). Afterwards, I wanted to make sure that the bug was fixed, so I played the game twice to make sure that clueHoldTime was reset to 1000 at the beginning of the
second game. When playing the game the second time in my test run, the bug was fixed and my game was working as intended.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, I am more curious about how HTML, CSS, and Javascript files work together. I am interested to learn more about how buttons work
in Javascript, and how you can make them clickable (and make buttons appear as images, etc.). I am also interested in the process of making a functioning website using HTML and CSS.
After completing this project, it is clear that there is a lot that must go into the style.css file to create the intended design for a website, as well as creating the HTML file to create
tabs, buttons, lists, etc. Furthermore, in order to make the tabs/buttons work properly for a website, there probably needs to be a Javascript file to link the tabs/buttons to their functionality.
Overall, I am curious about the development of a website after completing my submission, as well as what other projects that I can make using HTML, CSS, and Javascript.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would add a functionality to make the guessing pattern random so that the user can play the game multiple times with different patterns. 
In order to make this random guessing pattern, I would need to use the Math.random function from Javascript to get a secret number. After looking at what Math.random does, it generates a number from 0 to 1, so
I would need to multiply it by the number of buttons I have (in this case, 5). In addition, I would need to use the Math.floor function to make sure each random button number is a whole number
(would thus look something like this: Math.floor(Math.random() * 5)+1). After randomly generating each button number, I would have to create a function to create the pattern array and populate it with random button numbers
(and I would probably do so by using a for loop in the function).
Furthermore, I would also learn how to change the button appearances to images rather than colors, which could make the game more fun for the user. To do this, I would have to upload images to the assets folder
and add the images to the HTML page, as well as editing style.css appropriately.



## License

    Copyright Thanh Tong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.