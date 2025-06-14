// Check if running in Node.js and load jsdom if true
let document;
if (typeof window === "undefined") {
    const { JSDOM } = require("jsdom");
    const { window } = new JSDOM(`
        <!DOCTYPE html>
        <html>
            <body>
                <div id="quiz-container">
                    <p id="quiz-question">What is 2 + 2?</p>
                    <div>
                        <input type="radio" id="choice1" name="quiz" value="4">
                        <input type="radio" id="choice2" name="quiz" value="22">
                        <input type="radio" id="choice3" name="quiz" value="3">
                    </div>
                    <button id="submit-answer">Submit Answer</button>
                    <p id="feedback"></p>
                </div>
            </body>
        </html>
    `);
    document = window.document;
}

// Main checkAnswer function
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

// Optional: Simulate user interaction when running in Node.js
if (typeof window === "undefined") {
    // Simulate user selecting the correct answer
    document.getElementById("choice1").checked = true;

    // Simulate the button click
    submitButton.click();

    // Log feedback to the console
    console.log(document.getElementById("feedback").textContent);
}
