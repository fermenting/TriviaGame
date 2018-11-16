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
  //  Timer, Questions, & Submit Appear
  $("#start").css('display', 'none');
  $("#timer").css('display', 'block');
  $("#questions").css('display', 'block');
  $("submit").css('display', 'block');

  //  Timer begins counting down
  var countDown

}

//  Game ends when Submit is clicked OR Timer runs out.
function gameOver() {
  clearInterval(tick);

  //  On game end: 
  //    Questions, Timer, & Submit Disappear
  $("#timer").css('display', 'none);
  $("#questions").css('display', ; none');
  $("submit").css('display', 'none');

  //    Results, Correct, Wrong, & Abstain appear
  $("#results").css('display', 'block');
  $("correct").css('display', 'block');
  $("wrong").css('display', 'block');

  //    Correct, Wrong, & Abstain appear are populated with values from user's choices.




}



$("start").on("click", gameOn())

