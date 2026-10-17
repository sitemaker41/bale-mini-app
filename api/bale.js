
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;
  const update = req.body;

  if (!token) {
    console.error("ERROR: BALE_BOT_TOKEN is missing");
    return res.status(500).json({ ok: false });
  }

  // پیام خصوصی یا پست کانال
  const message = update?.message || update?.channel_post;

  if (!message) {
    console.log("UPDATE:", JSON.stringify(update));
    return res.status(200).json({ ok: true });
  }

  const chatId = message.chat?.id;
  const chatType = message.chat?.type;

  // ثبت اطلاعات فایل در لاگ‌های Vercel
  const file = message.document;

  if (file) {
    console.log("========== ARCHIVE FILE ==========");
    console.log("CHAT_ID:", chatId);
    console.log("CHAT_TYPE:", chatType);
    console.log("MESSAGE_ID:", message.message_id);
    console.log("FILE_NAME:", file.file_name || "بدون نام");
    console.log("FILE_ID:", file.file_id);
    console.log("FILE_UNIQUE_ID:", file.file_unique_id);
    console.log("FILE_SIZE:", file.file_size);
    console.log("MIME_TYPE:", file.mime_type);
    console.log("==================================");
  }

  // پیام‌های کانال فقط ثبت می‌شوند؛ ربات پاسخ نمی‌دهد.
  if (update?.channel_post) {
    return res.status(200).json({ ok: true });
  }

  if (!chatId) {
    return res.status(200).json({ ok: true });
  }

  async function api(method, body) {
    const response = await fetch(
      `https://tapi.bale.ai/bot${token}/${method}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const result = await response.json();

    if (!response.ok || result.ok === false) {
      console.error("BALE API ERROR:", method, JSON.stringify(result));
    }

    return result;
  }

  if (message.text === "/start") {
    const text = `🛠️ ربات جزوه‌رسان | دانشکده۴۱

سلام 👋

ربات در حال به‌روزرسانی و بهبود است. 🔧

در حال آماده‌سازی و مرتب‌سازی جزوات هستیم تا بتوانید آن‌ها را سریع‌تر و راحت‌تر دریافت کنید. 📚

⏳ لطفاً کمی صبر کنید...
به‌زودی با نسخه‌ای بهتر و کامل‌تر برمی‌گردیم.

🎓 دانشکده۴۱ | دوره۴۱ علامه‌حلی 🎓`;

    await api("sendMessage", {
      chat_id: chatId,
      text
    });

    return res.status(200).json({ ok: true });
  }

  if (message.text === "/help") {
    await api("sendMessage", {
      chat_id: chatId,
      text: `🛠️ ربات در حال به‌روزرسانی است.

جزوات و امکانات ربات پس از پایان به‌روزرسانی در دسترس خواهند بود. 📚

🎓 دانشکده۴۱ | دوره۴۱ علامه‌حلی 🎓`
    });

    return res.status(200).json({ ok: true });
  }

  return res.status(200).json({ ok: true });
}
