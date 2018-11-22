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


//question bank complete with possible answers, & index of correct answer
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

// tell the browser to wait for clicks to do stuff:
$(document).ready(function () {

  //start button starts the game
  $("#start").on("click", function () {
    gameOn();
  });

  //   //submit button ends the game
  //   $("#submit").on("click", function () {
  //     gameOver();
  //   });


  // On click of start button:
  function gameOn() {

    //  Start button disappears
    $("#start").css("display", "none");

    //  divs Timer, Questions, & Submit Appear
    $("#timer").css('display', 'block');
    $("#questions").css('display', 'block');
    $("#submit").css('display', 'block');

    //Questions are populated
    questionMaker();

    //Timer begins counting down
    // countDown();

    //end of start button
  }


  //   // upon clicking Again, reset all the things:
  //   $("again").on("click", location.reload());


  function questionMaker() {

    //loop through the question bank
    for (var i in jackieTreehorn.questions) {
      // console.log(jackieTreehorn.questions[i].prompt)
      console.log(jackieTreehorn.questions[i].choose)
      console.log(jackieTreehorn.questions[i].correct)

      //create a form for each question
      var questionRadio = $("<form>");

      //assign each question the data-question-number the value of it's index
      questionRadio.attr("data-question-number", [i]);

      //populate the question text
      questionRadio.text(jackieTreehorn.questions[i].prompt);

      //assign each question the correct answer value
      questionRadio.attr("data-correct", jackieTreehorn.questions[i].correct);

      //give questions the ability for unique stylings
      questionRadio.addClass("question-css")

      questionRadio.append($("<br>"))

      //append the question form onto the question div
      $("#questions").append(questionRadio);
      // console.log(jackieTreehorn.questions[i].prompt)
      // console.log (jackieTreehorn.questions[i].correct)

      //    Questions have radio buttons to select answers

      //we need to loop through the answer array
      for (var j in jackieTreehorn.questions[i].choose) {

        //to create a new line for each choice
        questionRadio.append($("<br>"))

        //assign option text and option-id
        radLabel = $("<label>")
        radLabel.addClass("option-css")
        radLabel.attr("for", [i].toString() + [j].toString());
        //assign option text
        radLabel.text(jackieTreehorn.questions[i].choose[j]);

        questionRadio.append(radLabel)

        //create each option as an <input>
        var radio = $("<input>");
        //assign input to be a radio button
        radio.attr("type", "radio");
        //assign dem some names
        radio.attr("name", "name" + [i])
        //assign data-choice-number to each according to order it appears
        radio.attr("value", [i].toString() + [j].toString());
        //give each label unique id
        radio.attr("id", [i].toString() + [j].toString());


        //append to question form 
        questionRadio.append(radio);
        // console.log(jackieTreehorn.questions[i].choose[j])

        //end of 'j' loop
      }
      //end of 'i' loop
    }

    //end of questionmaker function
  }



  //   // //  Timer begins counting down
  //   // function countDown() {
  //   //   // Set game time to 2 minutes in seconds
  //   //   var gameTime = 120;

  //   //   var tick = setInterval(function () {

  //   //     //decrease gameTime by 1 second until time is out.
  //   //     if (gameTime > 0) {
  //   //       gameTime--;

  //   //       // convert our seconds to minutes, seconds
  //   //       // Thanks W3schools!
  //   //       var minutes = Math.floor(gameTime % (1000 * 60 * 60) / (1000 * 60));
  //   //       var seconds = Math.floor(gameTime % (1000 * 60) / (1000));
  //   //       $("#timer").innerHTHML = minutes + " minutes : " + seconds + " seconds"
  //   //       console.log(gameTime)
  //   //     }
  //   //     //  Game ends when Submit is clicked OR Timer runs out.
  //   //     else {
  //   //       clearInterval(tick);
  //   //       gameOver();
  //   //     }
  //   //   }, 1000);


  //     //keeping score

  //     function checkScore() {
  //       var correct;
  //       var wrong;
  //       var abstain;


  //       if ($("input[name='name0']").val() === jackieTreehorn.questions[0].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name0']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name1']").val() === jackieTreehorn.questions[1].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name1']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name2']").val() === jackieTreehorn.questions[2].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name2']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name3']").val() === jackieTreehorn.questions[3].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name3']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name4']").val() === jackieTreehorn.questions[4].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name4']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name5']").val() === jackieTreehorn.questions[5].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name5']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name6']").val() === jackieTreehorn.questions[6].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name6']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       if ($("input[name='name7']").val() === jackieTreehorn.questions[7].correct) {
  //         correct++;
  //       }
  //       if ($("input[name='name7']").val().isNaN() === true) {
  //         abstain++;
  //       }
  //       wrong = 8 - correct;



  //       //  Game ends when Submit is clicked OR Timer runs out.
  //       function gameOver() {
  //         // clearInterval(tick);

  //         //  On game end: 
  //         //    Questions, Timer, & Submit Disappear
  //         $("#timer").css('display', 'none');
  //         $("#questions").css('display', 'none');
  //         $("#submit").css('display', 'none');

  //         //    Results, Correct, Wrong, Abstain & Again appear
  //         $("#results").css('display', 'block');
  //         $("#correct").css('display', 'block');
  //         $("#wrong").css('display', 'block');
  //         $("#again").css('display', 'block');

  //         //    Correct, Wrong, & Abstain appear are populated with values from user's choices.
  //         $("#results").text('That was a LOT of Questions!');
  //         $("#correct").text(correct);
  //         $("#wrong").text(wrong);
  //         $("#abstain").text(abstain)
  //       };


  //       //end of document ready 

  //     }

  //   // }
});
