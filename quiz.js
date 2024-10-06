let answerButton = document.getElementById("submit-answer");
function checkAnswer(){
    
    let radioValue = document.querySelector("input[name='quiz']:checked");
    let correctAnswer = "4";
    let userAnswer = radioValue.value;
    let feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
       feedback.textContent = "Correct! Well done.";
    }
    else {
        feedback.textContent = "That's incorrect. Try again!";
    }
    
}

answerButton.addEventListener("click", checkAnswer );

