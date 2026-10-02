export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    return res.status(200).json({ ok: true });
  }

  const update = req.body;

  // ==========================================
  // تنظیمات
  // ==========================================

  const ARCHIVE_CHANNEL_ID = 5377402759;

  // ==========================================
  // لیست ثابت درس‌ها
  // ==========================================

  const lessons = [
    { id: "l1", name: "زیست" },
    { id: "l2", name: "فلسفه" },
    { id: "l3", name: "هندسه" },
    { id: "l4", name: "کامپیوتر" },
    { id: "l5", name: "هوش‌مصنوعی" },
    { id: "l6", name: "جبر" },
    { id: "l7", name: "فیزیک" },
    { id: "l8", name: "ریاضی" },
    { id: "l9", name: "معارف" },
    { id: "l10", name: "هوش‌دیجیتال" },
    { id: "l11", name: "دفاعی" },
    { id: "l12", name: "عربی" },
    { id: "l13", name: "ادبیات" },
    { id: "l14", name: "شیمی" },
    { id: "l15", name: "تاریخ" },
    { id: "l16", name: "کشکول" },
    { id: "l17", name: "اجتماعی" }
  ];

  // ==========================================
  // جزوات
  //
  // هر هفته فقط همین قسمت را آپدیت کن.
  //
  // fileId = شناسه فایل از کانال آرشیو
  // lessonId = شناسه درس
  // author = نام نویسنده
  // week = شماره هفته
  // ==========================================

  const notes = [
    {
      id: "be_zoodi",
      lessonId: "l1",
      fileId: "1082435463:-4466787494045212928:0:2e244ceec7a96cd99207a2665475629f",
      author: "دانش‌کده۴۱",
      week: 1,
      buttonName: "به زودی..."
    }

    /*
    نمونه برای اضافه کردن جزوه:

    {
      id: "zist-1",
      lessonId: "l1",
      fileId: "FILE_ID_HERE",
      author: "نبی‌گل",
      week: 1,
      buttonName: "جزوه ۱"
    },

    {
      id: "riazi-1",
      lessonId: "l8",
      fileId: "FILE_ID_HERE",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "جزوه ۱"
    }

    */
  ];

  // ==========================================
  // Bale API
  // ==========================================

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

  // ==========================================
  // ساخت کپشن
  // ==========================================

  function makeCaption(note, lesson) {
    return `📚درس ${lesson.name}📚
نویسنده : ${note.author}
هفته ${note.week}

📱● در دانش‌کده‌۴‌۱ با ما همراه باشید ●`;
  }

  // ==========================================
  // منوی درس‌ها
  // دو به دو
  // ==========================================

  function lessonKeyboard() {
    const rows = [];

    for (let i = 0; i < lessons.length; i += 2) {
      const row = [
        {
          text: lessons[i].name,
          callback_data: `lesson:${lessons[i].id}`
        }
      ];

      if (lessons[i + 1]) {
        row.push({
          text: lessons[i + 1].name,
          callback_data: `lesson:${lessons[i + 1].id}`
        });
      }

      rows.push(row);
    }

    return {
      inline_keyboard: rows
    };
  }

  // ==========================================
  // منوی جزوات
  // ==========================================

  function notesKeyboard(lesson) {
    const lessonNotes = notes.filter(
      note => note.lessonId === lesson.id
    );

    const rows = lessonNotes.map(note => [
      {
        text: note.buttonName,
        callback_data: `note:${note.id}`
      }
    ]);

    rows.push([
      {
        text: "⬅️ بازگشت به درس‌ها",
        callback_data: "back:lessons"
      }
    ]);

    return {
      inline_keyboard: rows
    };
  }

  // ==========================================
  // دریافت پیام
  // ==========================================

  const message = update?.message;
  const callbackQuery = update?.callback_query;

  const chatId =
    message?.chat?.id ||
    callbackQuery?.message?.chat?.id;

  if (!chatId) {
    return res.status(200).json({ ok: true });
  }

  // ==========================================
  // پیام جدید کانال آرشیو
  //
  // فعلاً فقط برای گرفتن اطلاعات فایل
  // و نمایش در لاگ Vercel استفاده می‌شود.
  // ==========================================

  if (
    message?.chat?.type === "channel" &&
    message?.chat?.id === ARCHIVE_CHANNEL_ID &&
    message?.document
  ) {
    console.log("========== ARCHIVE FILE ==========");
    console.log("FILE NAME:", message.document.file_name);
    console.log("FILE ID:", message.document.file_id);
    console.log("CAPTION:", message.caption || "");
    console.log("MESSAGE ID:", message.message_id);
    console.log("===================================");

    return res.status(200).json({ ok: true });
  }

  // ==========================================
  // /start
  // ==========================================

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

    return res.status(200).json({ ok: true });
  }

  // ==========================================
  // /help
  // ==========================================

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

    return res.status(200).json({ ok: true });
  }

  // ==========================================
  // دکمه‌های Inline
  // ==========================================

  if (callbackQuery) {
    const callbackId = callbackQuery.id;
    const data = callbackQuery.data;

    // حذف حالت Loading دکمه
    await api("answerCallbackQuery", {
      callback_query_id: callbackId
    });

    // ========================================
    // انتخاب درس
    // ========================================

    if (data?.startsWith("lesson:")) {
      const lessonId = data.split(":")[1];

      const lesson = lessons.find(
        l => l.id === lessonId
      );

      if (!lesson) {
        return res.status(200).json({ ok: true });
      }

      const lessonNotes = notes.filter(
        note => note.lessonId === lesson.id
      );

      if (lessonNotes.length === 0) {
        await api("sendMessage", {
          chat_id: chatId,
          text: `📚 ${lesson.name}

هنوز جزوه‌ای برای این درس اضافه نشده است.`,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "⬅️ بازگشت به درس‌ها",
                  callback_data: "back:lessons"
                }
              ]
            ]
          }
        });

        return res.status(200).json({ ok: true });
      }

      await api("sendMessage", {
        chat_id: chatId,
        text: `📚 ${lesson.name}

لطفاً جزوه موردنظرت رو انتخاب کن:`,
        reply_markup: notesKeyboard(lesson)
      });

      return res.status(200).json({ ok: true });
    }

    // ========================================
    // انتخاب جزوه
    // ========================================

    if (data?.startsWith("note:")) {
      const noteId = data.substring(5);

      const note = notes.find(
        n => n.id === noteId
      );

      if (!note) {
        return res.status(200).json({ ok: true });
      }

      const lesson = lessons.find(
        l => l.id === note.lessonId
      );

      if (!lesson) {
        return res.status(200).json({ ok: true });
      }

      const caption = makeCaption(note, lesson);

      await api("sendDocument", {
        chat_id: chatId,
        document: note.fileId,
        caption: caption
      });

      return res.status(200).json({ ok: true });
    }

    // ========================================
    // بازگشت به درس‌ها
    // ========================================

    if (data === "back:lessons") {
      await api("sendMessage", {
        chat_id: chatId,
        text: "📚 لطفاً درس موردنظرت رو انتخاب کن:",
        reply_markup: lessonKeyboard()
      });

      return res.status(200).json({ ok: true });
    }
  }

  return res.status(200).json({ ok: true });
}
