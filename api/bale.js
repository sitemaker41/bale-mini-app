export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, method: req.method });
  }

  console.log("BALE UPDATE:", JSON.stringify(req.body));

  return res.status(200).json({
    ok: true,
    received: true
  });
}
