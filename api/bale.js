export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;
  const update = req.body;

  if (!token) {
    return res.status(200).json({ ok: true });
  }

  // دریافت فایل از کانال
  const channelPost = update?.channel_post;

  if (channelPost?.document) {
    const file = channelPost.document;

    console.log("========== FILE RECEIVED ==========");
    console.log("FILE NAME:", file.file_name);
    console.log("FILE ID:", file.file_id);
    console.log("FILE SIZE:", file.file_size);
    console.log("===================================");

    return res.status(200).json({ ok: true });
  }

  return res.status(200).json({ ok: true });
}
