import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("StudyBuddy AI backend running 🚀");
});

app.post("/ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: "You are a helpful student assistant." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    const result = data.choices?.[0]?.message?.content || "No response";

    res.json({ result });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});