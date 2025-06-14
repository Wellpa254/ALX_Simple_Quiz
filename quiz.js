function checkAnswer() {
    // Retrieve the correct answer
    const correctAnswer = document.getElementById("choice1"); // Correct input element

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Retrieve the feedback element
    const feedback = document.getElementById("feedback");

    if (userAnswer) {
        // Compare the user's selected input element with the correct answer element
        if (userAnswer === correctAnswer) {
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

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
