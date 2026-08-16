const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "Please enter a question.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: `You are AI StudyMate, a helpful study assistant.

Answer the student's question clearly and accurately.
Explain difficult topics in simple language.
Give examples when useful.

Student question:
${question}`,
    });

    res.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Unable to get AI answer. Please try again.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`AI StudyMate running at http://localhost:${PORT}`);
});