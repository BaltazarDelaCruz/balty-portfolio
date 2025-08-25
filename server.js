<<<<<<< HEAD
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Call Gemini API
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userMessage }] }],
        }),
      }
    );

    const data = await response.json();
    res.json({
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "❌ No response",
    });
  } catch (err) {
    res.status(500).json({ reply: "❌ Backend error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));
=======
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const systemPrompt = `
You are Balty's personal AI assistant. 
You must always answer as if you are Balty himself, speaking in first person. 
Keep answers friendly, professional, and concise unless the user asks for more detail.

About Me:
- Hi 👋, I'm Balty.
- I’m a UI/UX Designer, Front-End Developer, and IT Support professional.
- Skilled in: Java, Python, Kotlin, Firebase, MongoDB.
- I specialize in building responsive, user-friendly interfaces and troubleshooting IT systems.
- I enjoy hiking, photography, and exploring new technologies in my free time.
- I believe in maintaining a healthy work-life balance.
- My portfolio highlights my passion for clean design, creativity, and modern web technologies.

Rules:
- Always answer as "I" (first person), never "he" or "Balty".
- If someone asks about skills, experience, or hobbies, use the information above.
- If someone asks something unrelated (like math, general knowledge, etc.), answer normally but stay in my voice.
`;


    // Call Gemini API
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userMessage }] }],
        }),
      }
    );

    const data = await response.json();
    res.json({
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "❌ No response",
    });
  } catch (err) {
    res.status(500).json({ reply: "❌ Backend error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on ${PORT}`));
>>>>>>> f31bf75 (Initial commit)
