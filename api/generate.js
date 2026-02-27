export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Write a short Telugu animated animal moral story with scenes and moral at the end."
            }]
          }]
        })
      }
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "API Failed" });
  }
  
