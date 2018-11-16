//  Gameflow:
//  Browser loads. User presented with title & start button.
//  On click of start button:
//    Start button disappears
//    Timer, Questions, & Submit Appear
//    Timer begins counting down
//    Questions have radio buttons to select answers
//  
//  Game ends when Submit is clicked OR Timer runs out.
//  On game end: 
//    Questions, Timer, & Submit Disappear
//    Results, Correct, Wrong, & Abstain appear
//    Correct, Wrong, & Abstain appear are populated with values from user's choices.





//    Questions have radio buttons to select answers

//  Timer begins counting down
function countDown() {
  //Set game time to 2 minutes in seconds
  var gameTime = 120;

  var tick = setInterval(function () {

    //decrease gameTime by 1 second until time is out.
    if (gameTime > 0) {
      gameTime--;

      // convert our seconds to minutes, seconds
      // Thanks W3schools!
      var minutes = Math.floor(gameTime % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(gametime % (1000 * 60) / (1000));
      $("#timer").innerHTHML = minutes + " minutes : " + seconds + " seconds"
    }
    //  Game ends when Submit is clicked OR Timer runs out.
    else
      clearInterval(tick);
    gameOver();
  }, 1000);
}


// On click of start button:
function gameOn() {

  //  Start button disappears
  //  divs Timer, Questions, & Submit Appear
  $("#start").css('display', 'none');
  $("#timer").css('display', 'block');
  $("#questions").css('display', 'block');
  $("#submit").css('display', 'block');

  //  Timer begins counting down
  countDown();
 
  //questions are populated
}

//  Game ends when Submit is clicked OR Timer runs out.
function gameOver() {
  clearInterval(tick);

  //  On game end: 
  //    Questions, Timer, & Submit Disappear
  $("#timer").css('display', 'none');
  $("#questions").css('display', 'none');
  $("#submit").css('display', 'none');

  //    Results, Correct, Wrong, Abstain & Again appear
  $("#results").css('display', 'block');
  $("#correct").css('display', 'block');
  $("#wrong").css('display', 'block');
  $("#again").css('display', 'block');
  

  //    Correct, Wrong, & Abstain appear are populated with values from user's choices.

  $("#results").text('That was a LOT of Questions!');
  $("#correct").text(numCorrect);
  $("#wrong").text(numWrong);

}

// function reset(){
//   location.reload()
//

//game start and submit buttons
$("start").on("click", gameOn());
$("submit").on("click", gameOver());

// upon clicking Again, reset all the things:
$("again").on("click", location.reload());

//question bank complete with possible answers, & index of correct answer

var jackieTreehorn = {
 q1={
  prompt: "What are you doing?",
 choose: ["Taking a quiz", "Who wants to know?", "Sitting or Standing.", "Chillaxin'."], 
 correct: 1
},
q2={
prompt: "Where are you doing it?",
 choose: ["On the computer.", "I'm at home", "I'm at work.", "What if it's none of these?"], 
 correct: 3
},
q3={
  prompt: "What time is it right now?",
 choose: ["dot com! #Bojack", "It's x hours & y minutes", "When does the sun set?", "The timer above says 1 minute."], 
 correct: 2
},
q4={
  prompt: "Why are you here?",
 choose: ["Here I am!", "Why is anybody anywhere?", "Woah...That's deep.", "I'm thinking about hiring a coder."], 
 correct: 1
},
q5={
  prompt: "Do you like quizzes?",
 choose: ["Yes, they give me personality", "No, too many questions.", "I like popcorn, not pop quizzes.", "How can I say this nicely?"], 
 correct: 3
},
q6={
  prompt: "If you could make a quiz, what would yours be about?",
 choose: ["Pizza", "Cats", "Gif vs. Jif", "17th Century French Poetry", "Huh?"], 
 correct: 4
},
q7={
  prompt: "Want an easy one?",
 choose: ["Yes!", "Do I?", "No!!"], 
 correct: 1
},
q8={
  prompt: "Have you figured it out?",
 choose: ["What if I said yes?", "Of course!", "Too Easy.", "Not this time."], 
 correct: 0
},
},




