// Global constants
const cluePauseTime = 333; // How long to pause in between clues
const nextClueWaitTime = 1000; // How long to wait before starting playback of the clue sequence

// Global Variables for game
var pattern = [5, 2, 2, 5, 4, 3, 2, 1, 2, 4]; // Array of the pattern for button presses
var progress = 0; // Represents how far along the player is in guessing the pattern
var gamePlaying = false; // Var to check if game is still active
var tonePlaying = false; // 
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0; // Keeps track of where the user in the clue sequence
var clueHoldTime = 1000; // How long to hold each clue's light/sound

/** Function to call when user wants to start game */
function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000; 
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 440
}

/** Function that takes in 2 params (btn - button number; len - time length) 
 *  and plays tone for amount stated 
 */
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone();
  },len)
}

/** Function that plays tone */
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

/** Function that stops playing tone */
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

/** Function to light a button */
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

/** Function to clear a button */
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

/** Function to play a single clue */
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

/** Function to play the clue sequence */
function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 75;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

/** Function gets called if user loses game */
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

/** Function gets called if user wins game */
function winGame() {
  stopGame();
  alert("Gamer Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // Check if the guess was incorrect
  if (btn != pattern[guessCounter]) {
    loseGame();
  }
  // Otherwise the guess was correct
  else {
    // Check if where the user is in the clue sequence is equal to how far along they are
    if (guessCounter == progress) {
      // Check if the user has guessed the entire pattern (they've won)
      if (progress == pattern.length-1) {
        winGame();
      }
      // Otherwise the user has not guessed the full pattern yet
      else {
        progress++;
        playClueSequence();
      }
    }
    // Otherwise check the next guess
    else {
      guessCounter++;
    }
  }
}