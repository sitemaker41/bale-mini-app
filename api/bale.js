export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;
  const update = req.body;

  if (!token) {
    return res.status(200).json({ ok: true });
  }

  // =========================
  // اطلاعات کانال آرشیو
  // =========================

  const ARCHIVE_CHANNEL_ID = 5377402759;

  // =========================
  // جزوات
  // =========================

  const lessons = [
    {
      id: "l1",
      name: "به زودی...",
      notes: [
        {
          id: "n1",
          name: "به زودی...",
          fileId:
            "1082435463:-4466787494045212928:0:2e244ceec7a96cd99207a2665475629f"
        }
      ]
    }
  ];

  // =========================
  // Bale API
  // =========================

  async function api(method, body) {
    return fetch(
      `https://tapi.bale.ai/bot${token}/${method}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
  }

  // =========================
  // منوی درس‌ها
  // =========================

  function lessonKeyboard() {
    return {
      inline_keyboard: lessons.map(lesson => [
        {
          text: lesson.name,
          callback_data: `lesson:${lesson.id}`
        }
      ])
    };
  }

  // =========================
  // منوی جزوات
  // =========================

  function notesKeyboard(lesson) {
    return {
      inline_keyboard: [
        ...lesson.notes.map(note => [
          {
            text: note.name,
            callback_data: `note:${lesson.id}:${note.id}`
          }
        ]),
        [
          {
            text: "⬅️ بازگشت به درس‌ها",
            callback_data: "back:lessons"
          }
        ]
      ]
    };
  }

  const message = update?.message;
  const callbackQuery = update?.callback_query;

  // =========================
  // دریافت فایل از کانال آرشیو
  // =========================

  const channelPost = update?.message;

  if (
    channelPost?.chat?.type === "channel" &&
    channelPost?.chat?.id === ARCHIVE_CHANNEL_ID &&
    channelPost?.document
  ) {
    console.log("Archive file received:");
    console.log("File:", channelPost.document.file_name);
    console.log("File ID:", channelPost.document.file_id);

    return res.status(200).json({ ok: true });
  }

  // =========================
  // Chat ID کاربر
  // =========================

  const chatId =
    message?.chat?.id ||
    callbackQuery?.message?.chat?.id;

  if (!chatId) {
    return res.status(200).json({ ok: true });
  }

  // =========================
  // /start
  // =========================

  if (message?.text === "/start") {
    const welcomeText = `سلام 👋
به ربات جزوه‌رسان | دانش‌کده۴۱ خوش اومدی!

اینجا می‌تونی جزوات درسی رو به‌صورت مرتب و سریع پیدا کنی و دریافتشون کنی. 📚

لطفاً درس موردنظرت رو انتخاب کن:`;

    await api("sendMessage", {
      chat_id: chatId,
      text: welcomeText,
      reply_markup: lessonKeyboard()
    });
  }

  // =========================
  // /help
  // =========================

  if (message?.text === "/help") {
    const helpText = `🎓 راهنمای جزوه‌رسان | دانش‌کده۴۱ 🎓

🤖 درباره ربات:
جزوه‌رسان برای دسترسی سریع و مرتب به جزوات درسی ساخته شده است.

📝 نحوه استفاده:
1. درس موردنظرت رو انتخاب کن.
2. جزوه موردنظرت رو انتخاب کن.
3. فایل PDF مستقیماً در همین چت برات ارسال میشه. 📚

💡 اگر مشکلی در دریافت جزوه داشتی، اطلاع بده تا بررسی بشه.

🎓 دانش‌کده۴۱ | دوره۴۱ علامه‌حلی 🎓`;

    await api("sendMessage", {
      chat_id: chatId,
      text: helpText
    });
  }

  // =========================
  // دکمه‌های Inline
  // =========================

  if (callbackQuery) {
    const callbackId = callbackQuery.id;
    const data = callbackQuery.data;

    await api("answerCallbackQuery", {
      callback_query_id: callbackId
    });

    // انتخاب درس
    if (data?.startsWith("lesson:")) {
      const lessonId = data.split(":")[1];
      const lesson = lessons.find(l => l.id === lessonId);

      if (!lesson) {
        return res.status(200).json({ ok: true });
      }

      await api("sendMessage", {
        chat_id: chatId,
        text: `📚 ${lesson.name}

لطفاً جزوه موردنظرت رو انتخاب کن:`,
        reply_markup: notesKeyboard(lesson)
      });
    }

    // انتخاب جزوه
    if (data?.startsWith("note:")) {
      const [, lessonId, noteId] = data.split(":");

      const lesson = lessons.find(l => l.id === lessonId);
      const note = lesson?.notes.find(n => n.id === noteId);

      if (!lesson || !note) {
        return res.status(200).json({ ok: true });
      }

      await api("sendDocument", {
        chat_id: chatId,
        document: note.fileId,
        caption: `📚 ${lesson.name}
${note.name}`
      });
    }

    // بازگشت
    if (data === "back:lessons") {
      await api("sendMessage", {
        chat_id: chatId,
        text: "📚 لطفاً درس موردنظرت رو انتخاب کن:",
        reply_markup: lessonKeyboard()
      });
    }
  }

  return res.status(200).json({ ok: true });
}
