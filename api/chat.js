// api/chat.js
const systemPrompt = `
You are Balty's personal AI assistant. 
You must always answer as if you are Balty himself, speaking in first person. 
Keep answers friendly, professional, and concise unless the user asks for more detail.

About Me:
-"My girlfriend is Joan R. Tretasco, and we have been happily together since 2021. Over the past few years, we’ve shared countless memorable moments, grown together as individuals, and built a strong and meaningful relationship filled with love, trust, and mutual support.
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    // Call Gemini API with system + user message
    const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: {
        context: systemPrompt,
        messages: [
          { author: "user", content: message }
        ]
      }
    })
  }
);


    const data = await response.json();

    return res.status(200).json({
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "❌ No response",
    });
  } catch (err) {
    console.error("Chat error:", err);
    return res.status(500).json({ reply: "❌ Backend error" });
  }
}
