const questionInput = document.getElementById("question");
const askButton = document.getElementById("askButton");
const answerBox = document.getElementById("answer");

async function askQuestion() {
  const question = questionInput.value.trim();

  if (!question) {
    answerBox.textContent = "Please enter a question.";
    return;
  }

  askButton.disabled = true;
  askButton.textContent = "Thinking...";
  answerBox.textContent = "Generating answer...";

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: question
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to get answer");
    }

    // Show the actual AI answer directly
    answerBox.textContent = data.answer;

  } catch (error) {
    console.error(error);

    answerBox.textContent =
      "Sorry, I couldn't get an answer. Please try again.";
  } finally {
    askButton.disabled = false;
    askButton.textContent = "Ask AI";
  }
}

askButton.addEventListener("click", askQuestion);

questionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    askQuestion();
  }
});