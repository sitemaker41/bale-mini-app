
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;
  const update = req.body;

  if (!token) {
    console.error("NO_TOKEN");
    return res.status(500).json({ ok: false });
  }

  const message = update?.message || update?.channel_post;

  if (!message) {
    return res.status(200).json({ ok: true });
  }

  // ثبت فایل‌های ارسال‌شده در کانال یا چت
  if (message.document) {
    const file = message.document;
    console.log(
      "NOTE|" +
      (file.file_name || "unknown") +
      "|" +
      file.file_id
    );
  }

  // پست کانال نباید پاسخ ربات را فعال کند
  if (update?.channel_post) {
    return res.status(200).json({ ok: true });
  }

  const chatId = message.chat?.id;

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

    return response;
  }

  if (message.text === "/start") {
    await api("sendMessage", {
      chat_id: chatId,
      text: `🛠️ ربات جزوه‌رسان | دانشکده۴۱

سلام 👋

ربات در حال به‌روزرسانی و بهبود است. 🔧

در حال آماده‌سازی و مرتب‌سازی جزوات هستیم تا بتوانید آن‌ها را سریع‌تر و راحت‌تر دریافت کنید. 📚

⏳ لطفاً کمی صبر کنید...
به‌زودی با نسخه‌ای بهتر و کامل‌تر برمی‌گردیم.

🎓 دانشکده۴۱ | دوره۴۱ علامه‌حلی 🎓`
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
