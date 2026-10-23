
const lessons = [
  "زیست",
  "فلسفه",
  "هندسه",
  "کامپیوتر",
  "هوش‌مصنوعی",
  "جبر",
  "فیزیک",
  "ریاضی",
  "معارف",
  "هوش‌دیجیتال",
  "دفاعی",
  "عربی",
  "ادبیات",
  "شیمی",
  "تاریخ",
  "کشکول",
  "اجتماعی"
];

const notes = [
  // مهربد رضایی — ۱۱ جزوه
  {
    lesson: "فیزیک",
    author: "مهربد رضایی",
    fileId: "1082435463:-2149297047388348670:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea9ce4f9f7c4c2cc5aabdb30e8f34d2819"
  },
  {
    lesson: "هندسه",
    author: "مهربد رضایی",
    fileId: "1082435463:7802754689985158913:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea9e602188365d29cf28503a9904052cae"
  },
  {
    lesson: "تاریخ",
    author: "مهربد رضایی",
    fileId: "1082435463:2762225521036828419:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea9f7f1411ca4da289c7465916c794fff0"
  },
  {
    lesson: "ریاضی",
    author: "مهربد رضایی",
    fileId: "1082435463:-275732379535335678:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaedd339a770e88536586225cee9e14318"
  },
  {
    lesson: "زیست",
    author: "مهربد رضایی",
    fileId: "1082435463:-1836965243851497725:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaecbfeb8f03d3707d9207a2665475629f"
  },
  {
    lesson: "شیمی",
    author: "مهربد رضایی",
    fileId: "1082435463:-1203917647808291071:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeafcded9183cc2ea809207a2665475629f"
  },
  {
    lesson: "عربی",
    author: "مهربد رضایی",
    fileId: "1082435463:7961423824519962369:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaa3ae9f5fe4d57d269207a2665475629f"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "مهربد رضایی",
    fileId: "1082435463:-6295712438196494590:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaad5e88c73fe1d86b3340fec8065d7ebc92d463c117e0f92a9decd1877e3492c2"
  },
  {
    lesson: "جبر",
    author: "مهربد رضایی",
    fileId: "1082435463:6443009380225523458:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea71d9d3fa501792d1c75e586317a614ef"
  },
  {
    lesson: "ادبیات",
    author: "مهربد رضایی",
    fileId: "1082435463:5477368751479856897:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea7566a938b4eeaf7bde3df6867d2c95ca1a9ec6f7595b78a8"
  },
  {
    lesson: "فلسفه",
    author: "مهربد رضایی",
    fileId: "1082435463:-615787641895248128:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeac42c1f6aca49953028503a9904052cae"
  },

  // متین نجفی — ۱۷ جزوه
  {
    lesson: "شیمی",
    author: "متین نجفی",
    fileId: "1082435463:4169493344842620672:0:d5ed460d994bd5993c58776bd8039401d25f895eb9df7c901bf0339030b1ab7e1a9ec6f7595b78a8"
  },
  {
    lesson: "زیست",
    author: "متین نجفی",
    fileId: "1082435463:-6063296211402875134:0:d5ed460d994bd5993c58776bd8039401d2db94065ce3986df4039e71d79ca82c1a9ec6f7595b78a8"
  },
  {
    lesson: "فیزیک",
    author: "متین نجفی",
    fileId: "1082435463:-9051753851073192191:0:d5ed460d994bd5993c58776bd803940156f2b876c8478de66f8dbda34827d563c75e586317a614ef"
  },
  {
    lesson: "ادبیات",
    author: "متین نجفی",
    fileId: "1082435463:-3488804087546044670:0:d5ed460d994bd5993c58776bd8039401f2c6ac8b5fc5685d732ad744d92dca0a9207a2665475629f"
  },
  {
    lesson: "دفاعی",
    author: "متین نجفی",
    fileId: "1082435463:3697077447035723521:0:d5ed460d994bd5993c58776bd803940128d8b9182e5131702f8496f26ad53890c75e586317a614ef"
  },
  {
    lesson: "تاریخ",
    author: "متین نجفی",
    fileId: "1082435463:1879615660765486848:0:d5ed460d994bd5993c58776bd803940165e08aa13dbb64e24cdd68bdc13bc0b5c75e586317a614ef"
  },
  {
    lesson: "کامپیوتر",
    author: "متین نجفی",
    fileId: "1082435463:-9154158802189803773:0:d5ed460d994bd5993c58776bd80394015838149b258b3be2ca255e2dbd71b0c9c81d320a44ca21e81a9ec6f7595b78a8"
  },
  {
    lesson: "ریاضی",
    author: "متین نجفی",
    fileId: "1082435463:-2202048389883879678:0:d5ed460d994bd5993c58776bd8039401e6362ca8ccab27dd79e2139a8a7f1c32c75e586317a614ef"
  },
  {
    lesson: "کشکول",
    author: "متین نجفی",
    fileId: "1082435463:6123278182089760513:0:d5ed460d994bd5993c58776bd8039401613b18241cad0c9414d2886a7bf48622c75e586317a614ef"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "متین نجفی",
    fileId: "1082435463:-1461983463959879933:0:d5ed460d994bd5993c58776bd8039401ec0cfa90cad74d2bc3b312774e7a2ec7c3a7acf20a824bcf541c33232b5e3d12"
  },
  {
    lesson: "هندسه",
    author: "متین نجفی",
    fileId: "1082435463:1852228228185202435:0:d5ed460d994bd5993c58776bd8039401d5f03e2626a70ca1c1182eab47ee3438c75e586317a614ef"
  },
  {
    lesson: "فلسفه",
    author: "متین نجفی",
    fileId: "1082435463:-3042431644618318079:0:d5ed460d994bd5993c58776bd8039401921de165dbf4aab0ff5d9092ec06efe6c75e586317a614ef"
  },
  {
    lesson: "هوش‌مصنوعی",
    author: "متین نجفی",
    fileId: "1082435463:4696816537057369858:0:d5ed460d994bd5993c58776bd8039401ec0cfa90cad74d2b63223e1888992f75a0012653646ca7bad9743a3a4255d536"
  },
  {
    lesson: "معارف",
    author: "متین نجفی",
    fileId: "1082435463:2805744253700087553:0:d5ed460d994bd5993c58776bd803940118f732bcd87622a1aaa5df7968a1ae23c75e586317a614ef"
  },
  {
    lesson: "عربی",
    author: "متین نجفی",
    fileId: "1082435463:4178619908827979521:0:d5ed460d994bd5993c58776bd80394016459da3c4201373a2db62b18893ed7a01a9ec6f7595b78a8"
  },
  {
    lesson: "جبر",
    author: "متین نجفی",
    fileId: "1082435463:5521351147680440067:0:d5ed460d994bd5993c58776bd80394011de3577aa5f841dceb946fa14eb2d4af"
  },
  {
    lesson: "اجتماعی",
    author: "متین نجفی",
    fileId: "1082435463:-7042215248435994879:0:d5ed460d994bd5993c58776bd803940186472e2cbbcc7ab0f9dc7476e8b029e5586225cee9e14318"
  },

  // امیرمسعود نبی‌گل — ۱۱ جزوه
  {
    lesson: "فیزیک",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:2431000360332566272:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb6409cd60e5187b97563c02e826ddfacc9335c4990847e3f7"
  },
  {
    lesson: "ریاضی",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:1629243587616186112:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fbac81a98e381b94e17c3b5d5ad98c23a89335c4990847e3f7"
  },
  {
    lesson: "عربی",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:509645695469100801:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb1ac5df4dd268383cf59d29e32b5d919d"
  },
  {
    lesson: "جبر",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:-6236418520860123391:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb758f76e033b94eb4ac87920405b24626"
  },
  {
    lesson: "تاریخ",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:-934843273205571837:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb3226dfc877e22e0a67e563aeb8524a1e9335c4990847e3f7"
  },
  {
    lesson: "کامپیوتر",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:3775926087518723840:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fbf32895be50d3346bf18aa121d89d8dab536c0637df2b7eb0"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:3909164917437570819:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb91d5b34275aad22acd0eeaf9fff0f64866098499c8ff9c5b98e6e8300af569c3"
  },
  {
    lesson: "ادبیات",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:8429182146837880577:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fbcd984fc68c81d7d98c2af21b4cdc5e9c9decd1877e3492c2"
  },
  {
    lesson: "شیمی",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:-3950259724133064957:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb6d6b29add25dd6f7712c54ac717b3158"
  },
  {
    lesson: "فلسفه",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:8521109715324575489:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb46d839ceb87ad7b02c038acedd4a063b9335c4990847e3f7"
  },
  {
    lesson: "زیست",
    author: "امیرمسعود نبی‌گل",
    fileId: "1082435463:7673349410773802754:0:02a5ea708914b1694c63b756f671ff41a1d29704c20c9a74fe665dd6a50bc3fb69219fb25609caf04cd2f0f036d707d7"
  }
];

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true });
  }

  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    console.error("ERROR|BALE_BOT_TOKEN is missing");
    return res.status(500).json({ ok: false });
  }

  const api = async (method, body) => {
    try {
      const response = await fetch(
        `https://tapi.bale.ai/bot${token}/${method}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      const result = await response.json();

      if (!response.ok || result.ok === false) {
        console.error(
          "API_ERROR|" + method + "|" +
          (result.description || response.status)
        );
      }

      return result;
    } catch (error) {
      console.error("API_ERROR|" + method + "|" + error.message);
      return { ok: false };
    }
  };

  const sendMessage = (chatId, text, keyboard) => {
    const body = {
      chat_id: chatId,
      text: text
    };

    if (keyboard) {
      body.reply_markup = { inline_keyboard: keyboard };
    }

    return api("sendMessage", body);
  };

  const lessonKeyboard = () => {
    const keyboard = [];

    for (let i = 0; i < lessons.length; i += 2) {
      const row = [
        {
          text: lessons[i],
          callback_data: "lesson:" + i
        }
      ];

      if (i + 1 < lessons.length) {
        row.push({
          text: lessons[i + 1],
          callback_data: "lesson:" + (i + 1)
        });
      }

      keyboard.push(row);
    }

    return keyboard;
  };

  const authorKeyboard = (lesson) => {
    const keyboard = [];
    const seen = new Set();

    for (let i = 0; i < notes.length; i++) {
      if (
        notes[i].lesson === lesson &&
        !seen.has(notes[i].author)
      ) {
        seen.add(notes[i].author);

        keyboard.push([
          {
            text: notes[i].author,
            callback_data: "note:" + i
          }
        ]);
      }
    }

    keyboard.push([
      {
        text: "⬅️ بازگشت به درس‌ها",
        callback_data: "back"
      }
    ]);

    return keyboard;
  };

  const showLessons = (chatId) => {
    return sendMessage(
      chatId,
      "📚 جزوات دانشکده۴۱\n\nدرس موردنظر را انتخاب کن:",
      lessonKeyboard()
    );
  };

  try {
    const update = req.body;

    // پردازش کلیک دکمه‌ها
    const query = update?.callback_query;

    if (query) {
      const chatId = query.message?.chat?.id;
      const data = query.data || "";

      await api("answerCallbackQuery", {
        callback_query_id: query.id
      });

      if (!chatId) {
        return res.status(200).json({ ok: true });
      }

      if (data === "back") {
        await showLessons(chatId);
        return res.status(200).json({ ok: true });
      }

      if (data.startsWith("lesson:")) {
        const lessonIndex = Number(data.split(":")[1]);
        const lesson = lessons[lessonIndex];

        if (!lesson) {
          await sendMessage(chatId, "این درس پیدا نشد.");
          return res.status(200).json({ ok: true });
        }

        const hasNotes = notes.some(
          (note) => note.lesson === lesson
        );

        if (!hasNotes) {
          await sendMessage(
            chatId,
            "هنوز جزوه‌ای برای این درس ثبت نشده است.",
            [[
              {
                text: "⬅️ بازگشت به درس‌ها",
                callback_data: "back"
              }
            ]]
          );

          return res.status(200).json({ ok: true });
        }

        await sendMessage(
          chatId,
          "📚 درس " + lesson + "\n\nنویسنده را انتخاب کن:",
          authorKeyboard(lesson)
        );

        return res.status(200).json({ ok: true });
      }

      if (data.startsWith("note:")) {
        const noteIndex = Number(data.split(":")[1]);
        const note = notes[noteIndex];

        if (!note) {
          await sendMessage(chatId, "این جزوه پیدا نشد.");
          return res.status(200).json({ ok: true });
        }

        const result = await api("sendDocument", {
          chat_id: chatId,
          document: note.fileId,
          caption:
            "📚 درس " + note.lesson +
            "\nنویسنده: " + note.author +
            "\nجزوات هفته اول تا چهارم"
        });

        if (!result.ok) {
          await sendMessage(
            chatId,
            "❌ ارسال جزوه ناموفق بود. لطفاً کمی بعد دوباره تلاش کن."
          );
        }

        return res.status(200).json({ ok: true });
      }

      return res.status(200).json({ ok: true });
    }

    // دریافت پیام عادی یا پست کانال
    const message = update?.message || update?.channel_post;

    if (!message) {
      return res.status(200).json({ ok: true });
    }

    // ثبت فایل‌های ارسال‌شده به کانال آرشیو در لاگ‌ها
    if (message.document) {
      const file = message.document;

      console.log(
        "NOTE|" +
        (file.file_name || "unknown") +
        "|" +
        file.file_id
      );
    }

    // پست‌های کانال منوی ربات را فعال نمی‌کنند
    if (update?.channel_post) {
      return res.status(200).json({ ok: true });
    }

    const chatId = message.chat?.id;
    const text = (message.text || "").trim();

    if (!chatId) {
      return res.status(200).json({ ok: true });
    }

    if (text === "/start" || text === "/help") {
      await showLessons(chatId);
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("HANDLER_ERROR|" + error.message);
    return res.status(200).json({ ok: true });
  }
};
