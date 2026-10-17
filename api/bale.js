
const lessons = [
  { id: "zist", name: "زیست" },
  { id: "falsafe", name: "فلسفه" },
  { id: "hendese", name: "هندسه" },
  { id: "computer", name: "کامپیوتر" },
  { id: "ai", name: "هوش‌مصنوعی" },
  { id: "jabr", name: "جبر" },
  { id: "fizik", name: "فیزیک" },
  { id: "riazi", name: "ریاضی" },
  { id: "maaref", name: "معارف" },
  { id: "digital", name: "هوش‌دیجیتال" },
  { id: "defaee", name: "دفاعی" },
  { id: "arabi", name: "عربی" },
  { id: "adabiat", name: "ادبیات" },
  { id: "shimi", name: "شیمی" },
  { id: "tarikh", name: "تاریخ" },
  { id: "kashkool", name: "کشکول" },
  { id: "ejtemaei", name: "اجتماعی" }
];

const notes = [
  {
    lesson: "hendese",
    author: "مهربد رضایی",
    fileId: "1082435463:9026604666177527553:0:9e602188365d29cf0e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "defaee",
    author: "متین نجفی",
    fileId: "1082435463:8749411146141867776:0:9749843051de13040a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "riazi",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-7883322762072350974:0:edd339a770e8853676a48ec3000d2c1441ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    lesson: "fizik",
    author: "مهربد رضایی",
    fileId: "1082435463:7747808504281571074:0:9ce4f9f7c4c2cc5a982627338674be8f4b275ce5c7d7d665b55527d32abf29aa91b45472b18a53963ec610bf5b080b001a9ec6f7595b78a8"
  },
  {
    lesson: "riazi",
    author: "مهربد رضایی",
    fileId: "1082435463:-91539246674338046:0:edd339a770e8853691c58b74391ac9a0adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "adabiat",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-4135137259630944510:0:7566a938b4eeaf7b50cea2b3c8862b00e26e1734e6dd9e1873dd0c23c365fbb0542e9b185f146d933edc10faa2b12f059decd1877e3492c2"
  },
  {
    lesson: "zist",
    author: "متین نجفی",
    fileId: "1082435463:-3819102393063170304:0:ecbfeb8f03d3707d7c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    lesson: "tarikh",
    author: "مهربد رضایی",
    fileId: "1082435463:-8590298078619820286:0:9f7f1411ca4da28942b79a56ece0d2f4adee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "shimi",
    author: "متین نجفی",
    fileId: "1082435463:-8457258800148439293:0:fcded9183cc2ea807c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    lesson: "fizik",
    author: "متین نجفی",
    fileId: "1082435463:4451054174859042562:0:9ce4f9f7c4c2cc5a5579f8cd8472714e7e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "fizik",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:2695251536268107520:0:9ce4f9f7c4c2cc5a982627338674be8f4b275ce5c7d7d665b55527d32abf29aa91b45472b18a53963ec610bf5b080b001a9ec6f7595b78a8"
  },
  {
    lesson: "shimi",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:3230432956359515904:0:fcded9183cc2ea807be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    lesson: "riazi",
    author: "متین نجفی",
    fileId: "1082435463:643501124388855552:0:edd339a770e885360a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "arabi",
    author: "مهربد رضایی",
    fileId: "1082435463:9063229697933909762:0:a3ae9f5fe4d57d260df3e7773f5aafd5dbcde43a09e9c5afc37fc5fbc82268199207a2665475629f"
  },
  {
    lesson: "zist",
    author: "مهربد رضایی",
    fileId: "1082435463:-6391396293292908800:0:ecbfeb8f03d3707d0df3e7773f5aafd5dbcde43a09e9c5afc37fc5fbc82268199207a2665475629f"
  },
  {
    lesson: "digital",
    author: "مهربد رضایی",
    fileId: "1082435463:-4305215755622408446:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3e6898d9b55bc1024e61210636c407473d48ed0f88580f8994"
  },
  {
    lesson: "adabiat",
    author: "مهربد رضایی",
    fileId: "1082435463:6176650867094789890:0:7566a938b4eeaf7b315c0cda2b5cb7dff7c113ee8baf20bb7644d12d79d4f84e6a8840662bd147821a9ec6f7595b78a8"
  },
  {
    lesson: "falsafe",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-3631978535266869502:0:c42c1f6aca4995300023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    lesson: "arabi",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:1908017992855330560:0:a3ae9f5fe4d57d267be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    lesson: "tarikh",
    author: "متین نجفی",
    fileId: "1082435463:-97231293710852350:0:9f7f1411ca4da289b5a90f18f25130fb7e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "tarikh",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-6152859179218493694:0:9f7f1411ca4da289fd29b03224d3169f41ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  },
  {
    lesson: "ejtemaei",
    author: "متین نجفی",
    fileId: "1082435463:-981528202457768192:0:99a16bbd348140725eed3b5bd6acb180a35f5f93c6b233e7ffe4e4b5772fb7f2586225cee9e14318"
  },
  {
    lesson: "hendese",
    author: "متین نجفی",
    fileId: "1082435463:-6895495285754290432:0:9e602188365d29cfbf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef"
  },
  {
    lesson: "zist",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-2279630517399380222:0:ecbfeb8f03d3707d7be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c"
  },
  {
    lesson: "digital",
    author: "متین نجفی",
    fileId: "1082435463:-7458777325959569664:0:ad5e88c73fe1d86bb3340fec8065d7ebcb882c4783545ab3e6898d9b55bc1024e61210636c407473d48ed0f88580f8994"
  },
  {
    lesson: "ai",
    author: "متین نجفی",
    fileId: "1082435463:-3877291908746174720:0:ad5e88c73fe1d86bb21986d00a23dea241df4fc1a864b0d3d5ed460d994bd5993c58776bd8039401d9743a3a4255d536"
  },
  {
    lesson: "adabiat",
    author: "متین نجفی",
    fileId: "1082435463:4446914932502241026:0:7566a938b4eeaf7b315c0cda2b5cb7df2f51069756a97c4f553bcd644d0503959207a2665475629f"
  },
  {
    lesson: "arabi",
    author: "متین نجفی",
    fileId: "1082435463:6062789776943881985:0:a3ae9f5fe4d57d267c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8"
  },
  {
    lesson: "falsafe",
    author: "مهربد رضایی",
    fileId: "1082435463:537757965083483905:0:c42c1f6aca4995300e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318"
  },
  {
    lesson: "hendese",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-8643826657853563133:0:9e602188365d29cf0023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7"
  }
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    console.error("NO_TOKEN");
    return res.status(500).json({ ok: false });
  }

  const update = req.body;
  const message = update?.message || update?.channel_post;

  if (!message) {
    return res.status(200).json({ ok: true });
  }

  // لاگ کوتاه برای فایل‌های جدید
  if (message.document) {
    const file = message.document;
    console.log(
      "NOTE|" + (file.file_name || "unknown") + "|" + file.file_id
    );
  }

  // پست کانال فقط لاگ می‌شود
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const result = await response.json();

    if (!response.ok || result.ok === false) {
      console.error("API_ERROR|" + method + "|" +
        (result.description || response.status));
    }

    return result;
  }

  function lessonKeyboard() {
    const rows = [];

    for (let i = 0; i < lessons.length; i += 2) {
      const row = [
        {
          text: lessons[i].name,
          callback_data: "lesson:" + lessons[i].id
        }
      ];

      if (lessons[i + 1]) {
        row.push({
          text: lessons[i + 1].name,
          callback_data: "lesson:" + lessons[i + 1].id
        });
      }

      rows.push(row);
    }

    return {
      inline_keyboard: rows
    };
  }

  function notesKeyboard(lessonId) {
    const matching = notes
      .map((note, index) => ({ ...note, index }))
      .filter(note => note.lesson === lessonId);

    const rows = matching.map(note => [
      {
        text: note.author,
        callback_data: "note:" + note.index
      }
    ]);

    rows.push([
      {
        text: "⬅️ بازگشت به درس‌ها",
        callback_data: "back"
      }
    ]);

    return {
      matching,
      keyboard: { inline_keyboard: rows }
    };
  }

  async function showLessons(targetChatId, text) {
    return api("sendMessage", {
      chat_id: targetChatId,
      text,
      reply_markup: lessonKeyboard()
    });
  }

  if (message.text === "/start") {
    await showLessons(
      chatId,
      "📚 جزوه‌رسان دانشکده۴۱\n\nدرس موردنظرت را انتخاب کن:"
    );

    return res.status(200).json({ ok: true });
  }

  if (message.text === "/help") {
    await showLessons(
      chatId,
      "📚 جزوه‌رسان دانشکده۴۱\n\nاز منوی زیر درس را انتخاب کن، سپس نام نویسنده را بزن تا جزوه برایت ارسال شود."
    );

    return res.status(200).json({ ok: true });
  }

  const query = update?.callback_query;

  if (query) {
    const data = query.data || "";
    const callbackChatId = query.message?.chat?.id;

    await api("answerCallbackQuery", {
      callback_query_id: query.id
    });

    if (!callbackChatId) {
      return res.status(200).json({ ok: true });
    }

    if (data === "back") {
      await showLessons(
        callbackChatId,
        "📚 درس موردنظرت را انتخاب کن:"
      );

      return res.status(200).json({ ok: true });
    }

    if (data.startsWith("lesson:")) {
      const lessonId = data.slice("lesson:".length);
      const lesson = lessons.find(item => item.id === lessonId);

      if (!lesson) {
        return res.status(200).json({ ok: true });
      }

      const result = notesKeyboard(lessonId);

      if (result.matching.length === 0) {
        await api("sendMessage", {
          chat_id: callbackChatId,
          text: "فعلاً جزوه‌ای برای درس " + lesson.name +
            " در نسخهٔ فعلی ربات ثبت نشده است.",
          reply_markup: {
            inline_keyboard: [[
              {
                text: "⬅️ بازگشت به درس‌ها",
                callback_data: "back"
              }
            ]]
          }
        });
      } else {
        await api("sendMessage", {
          chat_id: callbackChatId,
          text: "📚 درس " + lesson.name +
            "\n\nنویسنده را انتخاب کن:",
          reply_markup: result.keyboard
        });
      }

      return res.status(200).json({ ok: true });
    }

    if (data.startsWith("note:")) {
      const index = Number(data.slice("note:".length));
      const note = notes[index];

      if (!Number.isInteger(index) || !note) {
        await api("sendMessage", {
          chat_id: callbackChatId,
          text: "این جزوه در فهرست ربات پیدا نشد."
        });

        return res.status(200).json({ ok: true });
      }

      const lesson = lessons.find(item => item.id === note.lesson);

      const result = await api("sendDocument", {
        chat_id: callbackChatId,
        document: note.fileId,
        caption:
          "📚 درس " + (lesson?.name || note.lesson) +
          "\nنویسنده: " + note.author +
          "\nجزوات هفته اول تا سوم"
      });

      if (!result.ok) {
        await api("sendMessage", {
          chat_id: callbackChatId,
          text: "ارسال این فایل ناموفق بود. ممکن است شناسهٔ فایل در بله قابل استفاده نباشد."
        });
      }

      return res.status(200).json({ ok: true });
    }
  }

  return res.status(200).json({ ok: true });
}
