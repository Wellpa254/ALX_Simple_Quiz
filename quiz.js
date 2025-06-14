function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get feedback element
    const feedback = document.getElementById("feedback");

    if (userAnswer) {
        // Compare answers
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
