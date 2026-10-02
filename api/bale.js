export default async function handler(req, res) {
  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    return res.status(200).send("TOKEN MISSING");
  }

  try {
    const response = await fetch(
      `https://tapi.bale.ai/bot${token}/getMe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const result = await response.text();

    return res.status(200).send(
      `HTTP STATUS: ${response.status}\n\nBALE RESPONSE:\n${result}`
    );

  } catch (error) {
    return res.status(200).send(
      `FETCH ERROR:\n${String(error)}\n\nCAUSE:\n${String(error?.cause || "")}`
    );
  }
}
