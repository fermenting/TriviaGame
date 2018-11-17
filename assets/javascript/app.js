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


// question bank object
var jackieTreehorn = {
  questions: [{
    prompt: "What are you doing?",
    choose: ["Taking a quiz", "Who wants to know?", "Sitting or Standing.", "Chillaxin'."],
    correct: 1
  },
  {
    prompt: "Where are you doing it?",
    choose: ["On the computer.", "I'm at home", "I'm at work.", "What if it's none of these?"],
    correct: 3
  },
  {
    prompt: "What time is it right now?",
    choose: ["dot com! #Bojack", "It's x hours & y minutes", "When does the sun set?", "The timer above says 1 minute."],
    correct: 2
  },
  {
    prompt: "Why are you here?",
    choose: ["Here I am!", "Why is anybody anywhere?", "Woah...That's deep.", "I'm thinking about hiring a coder."],
    correct: 1
  },
  {
    prompt: "Do you like quizzes?",
    choose: ["Yes, they give me personality", "No, too many questions.", "I like popcorn, not pop quizzes.", "How can I say this nicely?"],
    correct: 3
  },
  {
    prompt: "If you could make a quiz, what would yours be about?",
    choose: ["Pizza", "Cats", "Gif vs. Jif", "17th Century French Poetry", "Huh?"],
    correct: 4
  },
  {
    prompt: "Want an easy one?",
    choose: ["Yes!", "Do I?", "No!!"],
    correct: 1
  },
  {
    prompt: "Have you figured it out?",
    choose: ["What if I said yes?", "Of course!", "Too Easy.", "Not this time."],
    correct: 0
  }]
};

// console.log(jackieTreehorn)
// console.log(jackieTreehorn.questions)



// On click of start button:
function gameOn() {

  //  Start button disappears
  //  divs Timer, Questions, & Submit Appear
  $("#start").css("display", "none");
  $("#timer").css('display', 'block');
  $("#questions").css('display', 'block');
  $("#submit").css('display', 'block');

  //questions are populated
  questionMaker();

  //  Timer begins counting down
  // countDown();

}

//game start and submit buttons
$("start").click(gameOn());
// $("submit").click(gameOver());

// // upon clicking Again, reset all the things:
// // $("again").on("click", location.reload());

// //question bank complete with possible answers, & index of correct answer


function questionMaker() {

  //loop through the question bank
  for (var i in jackieTreehorn.questions) {
    // console.log(jackieTreehorn.questions[i].prompt)
    // console.log (jackieTreehorn.questions[i].choose)
    // console.log (jackieTreehorn.questions[i].correct)


    //create a form for each question
    var newQ = $("<form>");
    //assign each question the id 'quest'
    newQ.attr("id", "quest");
    //populate the question text
    newQ.text(jackieTreehorn.questions[i].prompt);
    //assign each question the correct answer value
    newQ.attr("data-correct", jackieTreehorn.questions[i].correct);
    //append the question form onto the question div
    $("#questions").append(newQ);
    console.log(jackieTreehorn.questions[i].prompt)
    console.log (jackieTreehorn.questions[i].correct)
    //    Questions have radio buttons to select answers

    //we need to loop through the answer array
    for (var j in jackieTreehorn.questions[i].choose) {

      //create each option as an <input>
      var newA = $("<input>");
      //assign input to be a radio button
      newA.attr("type", "radio");
      //assign data-choice-number to each according to order it appears
      newA.attr("data-choice-number", j);
      //assign option text
      newA.text(jackieTreehorn.questions[i].choose[j]);
      //append to question form 
      newQ.append(newA);
      console.log(jackieTreehorn.questions[i].choose[j])
      //end of 'j' loop
    }
    //end of 'i' loop
  }
  //end of questionmaker function
}

// //  Timer begins counting down
// // function countDown() {
//   //Set game time to 2 minutes in seconds
//   // var gameTime = 120;

//   // var tick = setInterval(function () {

//   //   //decrease gameTime by 1 second until time is out.
//   //   if (gameTime > 0) {
//   //     gameTime--;

//   //     // convert our seconds to minutes, seconds
//   //     // Thanks W3schools!
//   //     var minutes = Math.floor(gameTime % (1000 * 60 * 60) / (1000 * 60));
//   //     var seconds = Math.floor(gameTime % (1000 * 60) / (1000));
//   //     $("#timer").innerHTHML = minutes + " minutes : " + seconds + " seconds"
//   //     console.log(gameTime)
//   //   }
//   //   //  Game ends when Submit is clicked OR Timer runs out.
//   //   // else
//   //   //   clearInterval(tick);
//   //   // gameOver();
//   // }, 1000)
// // };




// //  Game ends when Submit is clicked OR Timer runs out.
// function gameOver() {
//   // clearInterval(tick);

//   //  On game end: 
//   //    Questions, Timer, & Submit Disappear
//   $("#timer").css('display', 'none');
//   $("#questions").css('display', 'none');
//   $("#submit").css('display', 'none');

//   //    Results, Correct, Wrong, Abstain & Again appear
//   $("#results").css('display', 'block');
//   $("#correct").css('display', 'block');
//   $("#wrong").css('display', 'block');
//   $("#again").css('display', 'block');

//   //    Correct, Wrong, & Abstain appear are populated with values from user's choices.
//   $("#results").text('That was a LOT of Questions!');
//   // $("#correct").text(numCorrect);
//   // $("#wrong").text(numWrong);
// };









// //we need to pull info out of the object and make it into divs with the choices appearing as radio buttons.




// // jackieTreehorn[i].correct === 

// // function reset(){
// //   location.reload()
// //
