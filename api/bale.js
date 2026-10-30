
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
  "اجتماعی",
  "کتاب‌عربی"
];

const notes = [
  // دانیال ایمان‌پور
  {
    lesson: "ادبیات",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-1926884968571724031:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e1612cd984fc68c81d7d98c2af21b4cdc5e9c9decd1877e3492c2"
  },
  {
    lesson: "تاریخ",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-3822268478229373184:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e16123226dfc877e22e0a67e563aeb8524a1e9335c4990847e3f7"
  },
  {
    lesson: "ریاضی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-2766593587362324733:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e1612ac81a98e381b94e17c3b5d5ad98c23a89335c4990847e3f7"
  },
  {
    lesson: "زیست",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-9026300845703291136:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e161269219fb25609caf04cd2f0f036d707d7"
  },
  {
    lesson: "شیمی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:4577981680253607680:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e16126d6b29add25dd6f7712c54ac717b3158"
  },
  {
    lesson: "عربی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-9134694277960163582:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e16121ac5df4dd268383cf59d29e32b5d919d"
  },
  {
    lesson: "فلسفه",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-3329717234119401726:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e161246d839ceb87ad7b02c038acedd4a063b9335c4990847e3f7"
  },
  {
    lesson: "فیزیک",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:7776099415780564738:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e16126409cd60e5187b97563c02e826ddfacc9335c4990847e3f7"
  },
  {
    lesson: "هندسه",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-5232739793172947199:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e1612e30c9bfb4040022e1c7a0e3314fe04729335c4990847e3f7"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-3407593512243421439:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e161291d5b34275aad22acd0eeaf9fff0f64866098499c8ff9c5b98e6e8300af569c3"
  },
  {
    lesson: "کتاب‌عربی",
    author: "دانیال ایمان‌پور",
    fileId: "1082435463:-7419274331054072063:0:5640b1b49c09a5737f4a933ceca5c768a56389f5f0e2d3545109933f174e1612c5f167dd0e91b1849f16406979acc122233ad6f4ee14c528c75e586317a614ef"
  },

  // متین نجفی
  {
    lesson: "اجتماعی",
    author: "متین نجفی",
    fileId: "1082435463:9033426343953637121:0:d5ed460d994bd5993c58776bd803940186472e2cbbcc7ab0f9dc7476e8b029e5586225cee9e14318"
  },
  {
    lesson: "ادبیات",
    author: "متین نجفی",
    fileId: "1082435463:6160867205749415682:0:d5ed460d994bd5993c58776bd8039401f2c6ac8b5fc5685d732ad744d92dca0a9207a2665475629f"
  },
  {
    lesson: "تاریخ",
    author: "متین نجفی",
    fileId: "1082435463:948281067374976768:0:d5ed460d994bd5993c58776bd803940165e08aa13dbb64e24cdd68bdc13bc0b5c75e586317a614ef"
  },
  {
    lesson: "دفاعی",
    author: "متین نجفی",
    fileId: "1082435463:8368023479033667331:0:d5ed460d994bd5993c58776bd803940128d8b9182e5131702f8496f26ad53890c75e586317a614ef"
  },
  {
    lesson: "ریاضی",
    author: "متین نجفی",
    fileId: "1082435463:2793388081288126209:0:d5ed460d994bd5993c58776bd8039401e6362ca8ccab27dd79e2139a8a7f1c32c75e586317a614ef"
  },
  {
    lesson: "زیست",
    author: "متین نجفی",
    fileId: "1082435463:7831091537286602499:0:d5ed460d994bd5993c58776bd8039401d2db94065ce3986df4039e71d79ca82c1a9ec6f7595b78a8"
  },
  {
    lesson: "شیمی",
    author: "متین نجفی",
    fileId: "1082435463:-6533910875012718846:0:d5ed460d994bd5993c58776bd8039401d25f895eb9df7c901bf0339030b1ab7e1a9ec6f7595b78a8"
  },
  {
    lesson: "عربی",
    author: "متین نجفی",
    fileId: "1082435463:7326448228658716416:0:d5ed460d994bd5993c58776bd80394016459da3c4201373a2db62b18893ed7a01a9ec6f7595b78a8"
  },
  {
    lesson: "فلسفه",
    author: "متین نجفی",
    fileId: "1082435463:239116894264303361:0:d5ed460d994bd5993c58776bd8039401921de165dbf4aab0ff5d9092ec06efe6c75e586317a614ef"
  },
  {
    lesson: "فیزیک",
    author: "متین نجفی",
    fileId: "1082435463:-4981907214311874816:0:d5ed460d994bd5993c58776bd803940156f2b876c8478de66f8dbda34827d563c75e586317a614ef"
  },
  {
    lesson: "معارف",
    author: "متین نجفی",
    fileId: "1082435463:1092229696864657155:0:d5ed460d994bd5993c58776bd803940118f732bcd87622a1aaa5df7968a1ae23c75e586317a614ef"
  },
  {
    lesson: "هندسه",
    author: "متین نجفی",
    fileId: "1082435463:1594398121687785216:0:d5ed460d994bd5993c58776bd8039401d5f03e2626a70ca1c1182eab47ee3438c75e586317a614ef"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "متین نجفی",
    fileId: "1082435463:-4338819813968437501:0:d5ed460d994bd5993c58776bd8039401ec0cfa90cad74d2bc3b312774e7a2ec7c3a7acf20a824bcf541c33232b5e3d12"
  },
  {
    lesson: "هوش‌مصنوعی",
    author: "متین نجفی",
    fileId: "1082435463:-5403281704666849534:0:d5ed460d994bd5993c58776bd8039401ec0cfa90cad74d2b63223e1888992f75a0012653646ca7bad9743a3a4255d536"
  },
  {
    lesson: "کامپیوتر",
    author: "متین نجفی",
    fileId: "1082435463:-131784401813823741:0:d5ed460d994bd5993c58776bd80394015838149b258b3be2ca255e2dbd71b0c9c81d320a44ca21e81a9ec6f7595b78a8"
  },
  {
    lesson: "کشکول",
    author: "متین نجفی",
    fileId: "1082435463:5270778729225133827:0:d5ed460d994bd5993c58776bd8039401613b18241cad0c9414d2886a7bf48622c75e586317a614ef"
  },

  // مهربد رضایی
  {
    lesson: "تاریخ",
    author: "مهربد رضایی",
    fileId: "1082435463:-8815493112480063744:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea9f7f1411ca4da289c7465916c794fff0"
  },
  {
    lesson: "فیزیک",
    author: "مهربد رضایی",
    fileId: "1082435463:-8768896922082074877:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea9ce4f9f7c4c2cc5aabdb30e8f34d2819"
  },
  {
    lesson: "ریاضی",
    author: "مهربد رضایی",
    fileId: "1082435463:-7720732581276541181:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaedd339a770e88536586225cee9e14318"
  },
  {
    lesson: "هندسه",
    author: "مهربد رضایی",
    fileId: "1082435463:3232525347743866624:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea9e602188365d29cf28503a9904052cae"
  },
  {
    lesson: "شیمی",
    author: "مهربد رضایی",
    fileId: "1082435463:-3859206043970232576:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeafcded9183cc2ea809207a2665475629f"
  },
  {
    lesson: "زیست",
    author: "مهربد رضایی",
    fileId: "1082435463:3618719868557270786:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaecbfeb8f03d3707d9207a2665475629f"
  },
  {
    lesson: "عربی",
    author: "مهربد رضایی",
    fileId: "1082435463:-8494520430146478335:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaa3ae9f5fe4d57d269207a2665475629f"
  },
  {
    lesson: "هوش‌دیجیتال",
    author: "مهربد رضایی",
    fileId: "1082435463:4512005850030415617:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeaad5e88c73fe1d86b3340fec8065d7ebc92d463c117e0f92a9decd1877e3492c2"
  },
  {
    lesson: "جبر",
    author: "مهربد رضایی",
    fileId: "1082435463:-1816675178392772864:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea71d9d3fa501792d1c75e586317a614ef"
  },
  {
    lesson: "ادبیات",
    author: "مهربد رضایی",
    fileId: "1082435463:-6474413160947900670:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eea7566a938b4eeaf7bde3df6867d2c95ca1a9ec6f7595b78a8"
  },
  {
    lesson: "فلسفه",
    author: "مهربد رضایی",
    fileId: "1082435463:-3034311156989878526:0:f3c13899acc859bd535361e81b4c1fdade9853aa259f8eeac42c1f6aca49953028503a9904052cae"
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

  // ارتباط با API بله همراه با ثبت جزئیات خطا
  const api = async (method, body) => {
    const url = `https://tapi.bale.ai/bot${token}/${method}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const raw = await response.text();

      let result;

      try {
        result = JSON.parse(raw);
      } catch {
        result = {
          ok: false,
          description: "Invalid JSON response"
        };
      }

      if (!response.ok || result.ok === false) {
        console.error(
          "BALE_RESPONSE_ERROR|" +
          method +
          "|HTTP=" +
          response.status +
          "|BODY=" +
          raw.slice(0, 1000)
        );
      }

      return result;
    } catch (error) {
      console.error(
        "BALE_NETWORK_ERROR|" +
        method +
        "|NAME=" +
        error.name +
        "|MESSAGE=" +
        error.message +
        "|CAUSE=" +
        String(error.cause || "")
      );

      return {
        ok: false,
        description: error.message
      };
    }
  };

  const sendMessage = (chatId, text, keyboard) => {
    const body = {
      chat_id: chatId,
      text: text
    };

    if (keyboard) {
      body.reply_markup = {
        inline_keyboard: keyboard
      };
    }

    return api("sendMessage", body);
  };

  // ساخت منوی درس‌ها
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

  // ساخت منوی نویسندگان هر درس
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

      // بازگشت به منوی درس‌ها
      if (data === "back") {
        await showLessons(chatId);
        return res.status(200).json({ ok: true });
      }

      // انتخاب درس
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

      // ارسال جزوه انتخاب‌شده
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
            "\nجزوات هفته اول تا پنجم"
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

    // ثبت فایل‌های ارسالی به کانال آرشیو
    if (message.document) {
      const file = message.document;

      console.log(
        "NOTE|" +
        (file.file_name || "unknown") +
        "|" +
        file.file_id
      );
    }

    // پست کانال منوی ربات را فعال نمی‌کند
    if (update?.channel_post) {
      return res.status(200).json({ ok: true });
    }

    const chatId = message.chat?.id;
    const text = (message.text || "").trim();

    if (!chatId) {
      return res.status(200).json({ ok: true });
    }

    // شروع ربات یا راهنما
    if (text === "/start" || text === "/help") {
      await showLessons(chatId);
    }

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(
      "HANDLER_ERROR|" +
      error.name +
      "|" +
      error.message
    );

    return res.status(200).json({ ok: true });
  }
};
