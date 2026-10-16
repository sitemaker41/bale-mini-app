
const TOKEN = process.env.BALE_BOT_TOKEN;
const API = `https://tapi.bale.ai/bot${TOKEN}`;

const ARCHIVE_CHANNEL_ID = 5377402759;

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

const notes = [
  {
    id: "daniyal-adabiat",
    lessonId: "l13",
    lesson: "ادبیات",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-1601874026488520957:0:7566a938b4eeaf7b50cea2b3c8862b00e26e1734e6dd9e1873dd0c23c365fbb0542e9b185f146d933edc10faa2b12f059decd1877e3492c2"
  },
  {
    id: "daniyal-tarikh",
    lessonId: "l15",
    lesson: "تاریخ",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-3093446632237228286:0:9f7f1411ca4da289fd29b03224d3169f41ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    id: "daniyal-math",
    lessonId: "l8",
    lesson: "ریاضی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-8188382920782897408:0:edd339a770e8853676a48ec3000d2c1441ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    id: "daniyal-zist",
    lessonId: "l1",
    lesson: "زیست",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:6160463884606971649:0:ecbfeb8f03d3707d7be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    id: "daniyal-shimi",
    lessonId: "l14",
    lesson: "شیمی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:6201060169228230400:0:fcded9183cc2ea807be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    id: "daniyal-arabi",
    lessonId: "l12",
    lesson: "عربی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-5448352397245407487:0:a3ae9f5fe4d57d267be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    id: "daniyal-falsafeh",
    lessonId: "l2",
    lesson: "فلسفه",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-6538084783878496509:0:c42c1f6aca4995300023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    id: "daniyal-fizik",
    lessonId: "l7",
    lesson: "فیزیک",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:3539472868002045696:0:9ce4f9f7c4c2cc5a982627338674be8f4b275ce5c7d7d665b55527d32abf29aa91b45472b18a53963ec610bf5b080b001a9ec6f7595b78a8"
  },
  {
    id: "daniyal-hendese",
    lessonId: "l3",
    lesson: "هندسه",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-8884446251862515966:0:9e602188365d29cfbf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },

  {
    id: "matin-ejtemaei",
    lessonId: "l17",
    lesson: "اجتماعی",
    author: "متین نجفی",
    fileId: "1082435463:-691540838101475583:0:99a16bbd348140725eed3b5bd6acb180a35f5f93c6b233e7ffe4e4b5772fb7f2586225cee9e14318"
  },
  {
    id: "matin-adabiat",
    lessonId: "l13",
    lesson: "ادبیات",
    author: "متین نجفی",
    fileId: "1082435463:8638662700486958851:0:7566a938b4eeaf7b315c0cda2b5cb7df2f51069756a97c4f553bcd644d0503959207a2665475629f"
  },
  {
    id: "matin-tarikh",
    lessonId: "l15",
    lesson: "تاریخ",
    author: "متین نجفی",
    fileId: "1082435463:919659560916623105:0:9f7f1411ca4da289b5a90f18f25130fb7e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    id: "matin-defaei",
    lessonId: "l11",
    lesson: "دفاعی",
    author: "متین نجفی",
    fileId: "1082435463:7167816087861927683:0:9749843051de13040a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    id: "matin-math",
    lessonId: "l8",
    lesson: "ریاضی",
    author: "متین نجفی",
    fileId: "1082435463:-1988823619762970879:0:edd339a770e8853691c58b74391ac9a0adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    id: "matin-zist",
    lessonId: "l1",
    lesson: "زیست",
    author: "متین نجفی",
    fileId: "1082435463:8802850944235609858:0:ecbfeb8f03d3707d7c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    id: "matin-shimi",
    lessonId: "l14",
    lesson: "شیمی",
    author: "متین نجفی",
    fileId: "1082435463:1723785409016110849:0:fcded9183cc2ea807c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    id: "matin-arabi",
    lessonId: "l12",
    lesson: "عربی",
    author: "متین نجفی",
    fileId: "1082435463:-5922147962112368896:0:a3ae9f5fe4d57d267c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    id: "matin-fizik",
    lessonId: "l7",
    lesson: "فیزیک",
    author: "متین نجفی",
    fileId: "1082435463:1274902214327017218:0:9ce4f9f7c4c2cc5a5579f8cd8472714e7e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    id: "matin-hendese",
    lessonId: "l3",
    lesson: "هندسه",
    author: "متین نجفی",
    fileId: "1082435463:758074091440905987:0:9e602188365d29cfbf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    id: "matin-digital",
    lessonId: "l10",
    lesson: "هوش‌دیجیتال",
    author: "متین نجفی",
    fileId: "1082435463:4595117535422521088:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3e6898d9b55bc1024e61210636c407473d48ed0f88580f8994"
  },
  {
    id: "matin-ai",
    lessonId: "l5",
    lesson: "هوش‌مصنوعی",
    author: "متین نجفی",
    fileId: "1082435463:4454430788022312706:0:ad5e88c73fe1d86bb21986d00a23dea241df4fc1a864b0d3d5ed460d994bd5993c58776bd8039401d9743a3a4255d536"
  },

  {
    id: "mehrbod-adabiat",
    lessonId: "l13",
    lesson: "ادبیات",
    author: "مهربد رضایی",
    fileId: "1082435463:7402708863543942915:0:7566a938b4eeaf7b315c0cda2b5cb7dff7c113ee8baf20bb7644d12d79d4f84e6a8840662bd147821a9ec6f7595b78a8"
  },
  {
    id: "mehrbod-tarikh",
    lessonId: "l15",
    lesson: "تاریخ",
    author: "مهربد رضایی",
    fileId: "1082435463:4233952948924129027:0:9f7f1411ca4da28942b79a56ece0d2f4adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    id: "mehrbod-math",
    lessonId: "l8",
    lesson: "ریاضی",
    author: "مهربد رضایی",
    fileId: "1082435463:8488054677860327171:0:edd339a770e8853691c58b74391ac9a0adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    id: "mehrbod-zist",
    lessonId: "l1",
    lesson: "زیست",
    author: "مهربد رضایی",
    fileId: "1082435463:-1079006444533637373:0:ecbfeb8f03d3707d7c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    id: "mehrbod-arabi",
    lessonId: "l12",
    lesson: "عربی",
    author: "مهربد رضایی",
    fileId: "1082435463:7200881471234907904:0:a3ae9f5fe4d57d267c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    id: "mehrbod-falsafeh",
    lessonId: "l2",
    lesson: "فلسفه",
    author: "مهربد رضایی",
    fileId: "1082435463:-8581361551104925952:0:c42c1f6aca499530bf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    id: "mehrbod-fizik",
    lessonId: "l7",
    lesson: "فیزیک",
    author: "مهربد رضایی",
    fileId: "1082435463:-8782461978719609088:0:9ce4f9f7c4c2cc5abca065dc05c98c07adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    id: "mehrbod-hendese",
    lessonId: "l3",
    lesson: "هندسه",
    author: "مهربد رضایی",
    fileId: "1082435463:-2966511788596060414:0:9e602188365d29cf0e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    id: "mehrbod-digital",
    lessonId: "l10",
    lesson: "هوش‌دیجیتال",
    author: "مهربد رضایی",
    fileId: "1082435463:-2166093951879143678:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3e8a7ce73963f190a613bb59003a8153d50837292d9c012d4f9decd1877e3492c2"
  }
];

async function bale(method, body) {
  const response = await fetch(`${API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const result = await response.json();

  if (!response.ok || !result.ok) {
    console.error(`Bale API error in ${method}:`, result);
  }

  return result;
}

async function sendMessage(chatId, text, replyMarkup) {
  const body = {
    chat_id: chatId,
    text
  };

  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }

  return bale("sendMessage", body);
}

async function answerCallback(callbackId, text) {
  return bale("answerCallbackQuery", {
    callback_query_id: callbackId,
    text
  });
}

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

  return { inline_keyboard: rows };
}

function notesKeyboard(lessonId) {
  const lessonNotes = notes.filter(note => note.lessonId === lessonId);

  const rows = lessonNotes.map(note => [
    {
      text: note.author,
      callback_data: `note:${note.id}`
    }
  ]);

  rows.push([
    {
      text: "⬅️ بازگشت به فهرست دروس",
      callback_data: "back:lessons"
    }
  ]);

  return { inline_keyboard: rows };
}

async function sendNote(chatId, note) {
  const caption =
    `📚 درس ${note.lesson}\n` +
    `نویسنده: ${note.author}\n` +
    `جزوات هفته اول تا سوم`;

  return bale("sendDocument", {
    chat_id: chatId,
    document: note.fileId,
    caption
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("دانشکده۴۱");
  }

  if (!TOKEN) {
    console.error("BALE_BOT_TOKEN is not configured.");
    return res.status(500).json({ ok: false });
  }

  try {
    const update = req.body;

    // ثبت فایل‌های ارسالی به کانال آرشیو برای دریافت file_id
    const channelPost = update.channel_post;

    if (
      channelPost &&
      String(channelPost.chat?.id) === String(ARCHIVE_CHANNEL_ID) &&
      channelPost.document
    ) {
      const fileName = channelPost.document.file_name || "بدون نام";
      const fileId = channelPost.document.file_id;

      console.log(`NOTE|${fileName}|${fileId}`);

      return res.status(200).json({ ok: true });
    }

    // پیام‌های معمولی کاربر
    const message = update.message;

    if (message?.text) {
      const chatId = message.chat.id;
      const text = message.text.trim();

      if (text === "/start") {
        return res.status(200).json(
          await sendMessage(
            chatId,
            "سلام و وقت بخیر!\n\nبه ربات جزوه‌رسان دانشکده۴۱ خوش آمدید.\n\nبرای مشاهده و دریافت جزوات، درس موردنظر خود را انتخاب کنید.",
            lessonKeyboard()
          )
        );
      }

      if (text === "/help") {
        return res.status(200).json(
          await sendMessage(
            chatId,
            "راهنمای استفاده از ربات جزوه‌رسان دانشکده۴۱\n\n۱. درس موردنظر را انتخاب کنید.\n۲. نام نویسنده را انتخاب کنید.\n۳. فایل جزوه برای شما ارسال می‌شود.\n\nبرای شروع، دستور /start را ارسال کنید."
          )
        );
      }

      return res.status(200).json(
        await sendMessage(
          chatId,
          "برای مشاهده جزوات، دستور /start را ارسال کنید."
        )
      );
    }

    // انتخاب درس یا جزوه از منو
    const callback = update.callback_query;

    if (callback) {
      const chatId = callback.message.chat.id;
      const data = callback.data || "";

      await answerCallback(callback.id);

      if (data === "back:lessons") {
        return res.status(200).json(
          await sendMessage(
            chatId,
            "لطفاً درس موردنظر خود را انتخاب کنید:",
            lessonKeyboard()
          )
        );
      }

      if (data.startsWith("lesson:")) {
        const lessonId = data.slice("lesson:".length);
        const lesson = lessons.find(item => item.id === lessonId);

        if (!lesson) {
          return res.status(200).json(
            await sendMessage(chatId, "این درس پیدا نشد.")
          );
        }

        const lessonNotes = notes.filter(
          note => note.lessonId === lessonId
        );

        if (lessonNotes.length === 0) {
          return res.status(200).json(
            await sendMessage(
              chatId,
              `در حال حاضر جزوه‌ای برای درس ${lesson.name} ثبت نشده است.`,
              notesKeyboard(lessonId)
            )
          );
        }

        return res.status(200).json(
          await sendMessage(
            chatId,
            `جزوات درس ${lesson.name}\n\nنویسنده موردنظر را انتخاب کنید:`,
            notesKeyboard(lessonId)
          )
        );
      }

      if (data.startsWith("note:")) {
        const noteId = data.slice("note:".length);
        const note = notes.find(item => item.id === noteId);

        if (!note) {
          return res.status(200).json(
            await sendMessage(chatId, "این جزوه پیدا نشد.")
          );
        }

        const result = await sendNote(chatId, note);

        return res.status(200).json(result);
      }

      return res.status(200).json({ ok: true });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(200).json({ ok: false });
  }
}
