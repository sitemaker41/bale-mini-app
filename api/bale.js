export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;
  const update = req.body;

  const message = update?.message;
  const chatId = message?.chat?.id;
  const text = message?.text;

  if (!token || !chatId) {
    return res.status(200).json({ ok: true });
  }

  if (text === "/start") {
    const welcomeText = `سلام 👋
به ربات جزوه‌رسان | دانش‌کده۴۱ خوش اومدی!

اینجا می‌تونی جزوات درسی رو به‌صورت مرتب و سریع پیدا کنی و دانلودشون کنی.

درس موردنظرت رو انتخاب کن و جزوه‌ای که می‌خوای رو دریافت کن. 📚`;

    await fetch(
      `https://tapi.bale.ai/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: welcomeText
        })
      }
    );
  }

  if (text === "/help") {
    const helpText = `📚 راهنمای جزوه‌رسان | دانش‌کده۴۱

🤖 درباره ربات:
جزوه‌رسان برای دسترسی سریع و مرتب به جزوه‌های درسی ساخته شده است.

🌐 درباره مینی‌اپ:
مینی‌اپ جزوه‌های درسی را بر اساس درس دسته‌بندی می‌کند تا بتوانی فایل موردنظرت را راحت پیدا و دریافت کنی.

📖 امکانات مینی‌اپ:
• دسته‌بندی جزوه‌ها بر اساس درس
• باز و بسته کردن هر بخش برای مشاهده جزوه‌ها
• نمایش جزئیات جزوه قبل از دانلود
• دانلود مستقیم فایل جزوه
• حالت روشن و تاریک 🌙☀️
• طراحی واکنش‌گرا برای موبایل و کامپیوتر
• رابط کاربری ساده و مرتب

📝 نحوه استفاده:
1. وارد مینی‌اپ جزوات شو.
2. درس موردنظرت را انتخاب کن.
3. جزوه موردنظر را انتخاب کن.
4. در پنجره بازشده روی «دانلود جزوه» بزن.

💡 اگر مشکلی در دریافت یا دانلود جزوه داشتی، اطلاع بده تا بررسی بشه.

دانش‌کده ۴۱ | جزوات، یکجا و مرتب 📚`;

    await fetch(
      `https://tapi.bale.ai/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: helpText
        })
      }
    );
  }

  return res.status(200).json({ ok: true });
}
