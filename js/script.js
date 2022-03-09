console.log("This is Quiz app");

let index = 0;
let attempt= 0;
let score = 0;
let wrong = 0;
let questions = quiz.sort(function(){
  return 0.5 - Math.random();
});

$(function () {
  let totaltime = 200;
  let min = 0;
  let sec = 0;
  let counter = 0;

  let timer = setInterval(function () {
    counter++;
    min = Math.floor((totaltime - counter) / 60);
    sec = totaltime - counter - min * 60;

    $(".timerBox span").text(min + ":" + sec);

    if (counter == totaltime) {

      alert('Time Up. Press ok to show result ');

      result()


      clearInterval(timer);
    }

    // console.log(min);
    // console.log(sec);
  }, 1000);

  printQuestion(index);
});

// PRINTING QUESTIONS

function printQuestion(i) {
  console.log(questions[0]);

  $(".questionBox").text(questions[i].question);
  $(".optionBox span").eq(0).text(questions[i].option[0]);
  $(".optionBox span").eq(1).text(questions[i].option[1]);
  $(".optionBox span").eq(2).text(questions[i].option[2]);
  $(".optionBox span").eq(3).text(questions[i].option[3]);
}

// To CHECK ANSWER

function checkAnswer(option){
  attempt++;

  let optionClicked = $(option).data("opt")

  showNext();

  if(optionClicked == questions[index].answer){
    $(option).addClass("right");
    score++;
  }else{
    $(option).addClass("wrong");
    wrong++;
  }
  $(".scoreBox span").text(score);

  $(".optionBox span").attr("onclick", " ");

  index++;

}
function showNext(){

 
  
  if(  index >= questions.length - 1 || index == 10 ){
    
      showResult(0);
      return;
  }





  
  $(".optionBox span").removeClass();

  $(".optionBox span").attr("onclick", "checkAnswer(this)");

  printQuestion(index);
}


// TO SHOW RESULT

function showResult(j){
 if ( j == 1 && 
  index < questions.length - 1 && 
  
  !confirm("Quiz has not finished yet. Press ok to skip & get your final Result")
  ) {
    return;
   
 }

result()
 
}


// timeout

function result(){
  $("#questionScreen").hide();
  $("#resultScreen").show();
  
  
  // $("#totalQuestion").text(totalQuestion);
  $("#attemptQuestion").text(attempt);
  $("#correctQuestion").text(score);
  $("#worngAnswer").text(wrong);

}