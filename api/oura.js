export default async function handler(req, res) {
  try {
    if (!process.env.OURA_TOKEN) {
      return res.status(500).json({ error: "OURA_TOKEN not set" });
    }

    const response = await fetch(
      "https://api.ouraring.com/v2/usercollection/readiness",
      {
        headers: {
          Authorization: `Bearer ${process.env.OURA_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

