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
    const welcomeText = `سلام 👋 به ربات جزوه‌رسان | دانش‌کده۴۱ خوش اومدی!

اینجا می‌تونی جزوات درسی رو به‌صورت مرتب و سریع پیدا کنی و دانلودشون کنی.

برای دسترسی راحت به جزوات، روی دکمه «جزوات اینجاست 📚» بزن تا وارد مینی‌اپ بشی.`;

    await fetch(`https://tapi.bale.ai/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: welcomeText,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "جزوات اینجاست 📚",
                url: "https://bale-mini-app.vercel.app/"
              }
            ]
          ]
        }
      })
    });
  }

  return res.status(200).json({ ok: true });
}
