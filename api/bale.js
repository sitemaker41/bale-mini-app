export default async function handler(req, res) {
  try {
    const response = await fetch("https://tapi.bale.ai");
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
