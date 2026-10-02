export default async function handler(req, res) {
  try {
    const token = process.env.BALE_BOT_TOKEN;

    if (!token) {
      return res.status(200).json({
        ok: false,
        error: "BALE_BOT_TOKEN is missing"
      });
    }

    const response = await fetch(
      `https://tapi.bale.ai/bot${token}/getMe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const text = await response.text();

    return res.status(200).json({
      ok: true,
      status: response.status,
      response: text
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: String(error),
      cause: error?.cause ? String(error.cause) : null
    });
  }
}
