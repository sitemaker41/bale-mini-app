export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;
  const update = req.body;

  if (!token) {
    return res.status(200).json({ ok: true });
  }

  const channelPost = update?.channel_post;

  if (channelPost?.document) {
    console.log("========== ARCHIVE FILE ==========");
    console.log("CHANNEL ID:", channelPost.chat?.id);
    console.log("CHANNEL TITLE:", channelPost.chat?.title);
    console.log("FILE NAME:", channelPost.document.file_name);
    console.log("FILE ID:", channelPost.document.file_id);
    console.log("FILE SIZE:", channelPost.document.file_size);
    console.log("===================================");

    return res.status(200).json({ ok: true });
  }

  return res.status(200).json({ ok: true });
}
