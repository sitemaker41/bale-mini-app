export default async function handler(req, res) {
  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    return res.status(200).send("TOKEN MISSING");
  }

  try {
    const response = await fetch(
      `https://tapi.bale.ai/bot${token}/getMe`,
      {
        method: "POST"
      }
    );

    const result = await response.text();

    return res.status(200).send(
      `<pre>STATUS: ${response.status}

BALE RESPONSE:
${result}</pre>`
    );

  } catch (error) {
    return res.status(200).send(
      `<pre>FETCH ERROR:
${String(error)}

CAUSE:
${String(error?.cause || "")}</pre>`
    );
  }
}
