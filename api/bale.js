
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
  // مهربد رضایی
  {
    lesson: "هندسه",
    author: "مهربد رضایی",
    fileId: "1082435463:9026604666177527553:0:9e602188365d29cf0e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "فیزیک",
    author: "مهربد رضایی",
    fileId: "1082435463:7747808504281571074:0:9ce4f9f7c4c2cc5a982627338674be8f4b275ce5c7d7d665b55527d32abf29aa91b45472b18a53963ec610bf5b080b001a9ec6f7595b78a8"
  },
  {
    lesson: "ریاضی",
    author: "مهربد رضایی",
    fileId: "1082435463:-91539246674338046:0:edd339a770e8853691c58b74391ac9a0adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "تاریخ",
    author: "مهربد رضایی",
    fileId: "1082435463:-8590298078619820286:0:9f7f1411ca4da28942b79a56ece0d2f4adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "عربی",
    author: "مهربد رضایی",
    fileId: "1082435463:9063229697933909762:0:a3ae9f5fe4d57d260df3e7773f5aafd5dbcde43a09e9c5afc37fc5fbc82268199207a2665475629f"
  },
  {
    lesson: "زیست",
    author: "مهربد رضایی",
    fileId: "1082435463:-6391396293292908800:0:ecbfeb8f03d3707d0df3e7773f5aafd5dbcde43a09e9c5afc37fc5fbc82268199207a2665475629f"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "مهربد رضایی",
    fileId: "1082435463:-4305215755622408446:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3e6898d9b55bc1024e61210636c407473d48ed0f88580f8994"
  },
  {
    lesson: "ادبیات",
    author: "مهربد رضایی",
    fileId: "1082435463:6176650867094789890:0:7566a938b4eeaf7b315c0cda2b5cb7dff7c113ee8baf20bb7644d12d79d4f84e6a8840662bd147821a9ec6f7595b78a8"
  },
  {
    lesson: "فلسفه",
    author: "مهربد رضایی",
    fileId: "1082435463:537757965083483905:0:c42c1f6aca4995300e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318"
  },

  // متین نجفی
  {
    lesson: "دفاعی",
    author: "متین نجفی",
    fileId: "1082435463:8749411146141867776:0:9749843051de13040a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "زیست",
    author: "متین نجفی",
    fileId: "1082435463:-3819102393063170304:0:ecbfeb8f03d3707d7c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    lesson: "شیمی",
    author: "متین نجفی",
    fileId: "1082435463:-8457258800148439293:0:fcded9183cc2ea807c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    lesson: "فیزیک",
    author: "متین نجفی",
    fileId: "1082435463:4451054174859042562:0:9ce4f9f7c4c2cc5a5579f8cd8472714e7e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "ریاضی",
    author: "متین نجفی",
    fileId: "1082435463:643501124388855552:0:edd339a770e885360a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "تاریخ",
    author: "متین نجفی",
    fileId: "1082435463:-97231293710852350:0:9f7f1411ca4da28942b79a56ece0d2f4adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "اجتماعی",
    author: "متین نجفی",
    fileId: "1082435463:-981528202457768192:0:99a16bbd348140725eed3b5bd6acb180a35f5f93c6b233e7ffe4e4b5772fb7f2586225cee9e14318"
  },
  {
    lesson: "هندسه",
    author: "متین نجفی",
    fileId: "1082435463:-6895495285754290432:0:9e602188365d29cfbf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "متین نجفی",
    fileId: "1082435463:-7458777325959569664:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3e6898d9b55bc1024e61210636c407473d48ed0f88580f8994"
  },
  {
    lesson: "هوش‌مصنوعی",
    author: "متین نجفی",
    fileId: "1082435463:-3877291908746174720:0:ad5e88c73fe1d86bb21986d00a23dea241df4fc1a864b0d3d5ed460d994bd5993c58776bd8039401d9743a3a4255d536"
  },
  {
    lesson: "ادبیات",
    author: "متین نجفی",
    fileId: "1082435463:4446914932502241026:0:7566a938b4eeaf7b315c0cda2b5cb7df2f51069756a97c4f553bcd644d0503959207a2665475629f"
  },
  {
    lesson: "عربی",
    author: "متین نجفی",
    fileId: "1082435463:6062789776943881985:0:a3ae9f5fe4d57d267c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },

  // دانیال ایمان‌پور
  {
    lesson: "ریاضی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-7883322762072350974:0:edd339a770e8853676a48ec3000d2c1441ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    lesson: "ادبیات",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-4135137259630944510:0:7566a938b4eeaf7b50cea2b3c8862b00e26e1734e6dd9e1873dd0c23c365fbb0542e9b185f146d933edc10faa2b12f059decd1877e3492c2"
  },
  {
    lesson: "فیزیک",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:2695251536268107520:0:9ce4f9f7c4c2cc5a982627338674be8f4b275ce5c7d7d665b55527d32abf29aa91b45472b18a53963ec610bf5b080b001a9ec6f7595b78a8"
  },
  {
    lesson: "شیمی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:3230432956359515904:0:fcded9183cc2ea807be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    lesson: "فلسفه",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-3631978535266869502:0:c42c1f6aca4995300023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    lesson: "عربی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:1908017992855330560:0:a3ae9f5fe4d57d267be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    lesson: "تاریخ",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-6152859179218493694:0:9f7f1411ca4da289fd29b03224d3169f41ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    lesson: "زیست",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-2279630517399380222:0:ecbfeb8f03d3707d7be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    lesson: "هندسه",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-8643826657853563133:0:9e602188365d29cf0023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
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

    // اول کلیک دکمه‌ها را پردازش می‌کنیم.
    // callback_query معمولاً message مستقیمی در update ندارد.
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

        await api("sendDocument", {
          chat_id: chatId,
          document: note.fileId,
          caption:
            "📚 درس " + note.lesson +
            "\nنویسنده: " + note.author +
            "\nجزوات هفته اول تا سوم"
        });

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

    // پیام‌های کانال نباید منوی ربات را فعال کنند.
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
