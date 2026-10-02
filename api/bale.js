export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  console.log("========== BALE UPDATE ==========");
  console.log(JSON.stringify(req.body, null, 2));
  console.log("=================================");

  return res.status(200).json({ ok: true });
}
