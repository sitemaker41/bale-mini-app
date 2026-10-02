export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const token = process.env.BALE_BOT_TOKEN;

  if (!token) {
    return res.status(200).json({ ok: true });
  }

  const update = req.body;

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

  // =========================
  // جزوات هفته اول
  // =========================

  const notes = [

    // زیست
    {
      id: "zist-najafi",
      lessonId: "l1",
      fileId: "1082435463:7676363798121619202:0:ecbfeb8f03d3707d0f5fab04a612ef5048ed0f88580f8994",
      author: "نجفی",
      week: 1,
      buttonName: "زیست - نجفی"
    },
    {
      id: "zist-nabigol",
      lessonId: "l1",
      fileId: "1082435463:-967275759096553727:0:ecbfeb8f03d3707d143d8dec17d2b626fe665dd6a50bc3fb9207a2665475629f",
      author: "نبی‌گل",
      week: 1,
      buttonName: "زیست - نبی‌گل"
    },
    {
      id: "zist-rezaei",
      lessonId: "l1",
      fileId: "1082435463:6873553831998922498:0:ecbfeb8f03d3707d8af778bd08e355c357f55e9e4b994c809335c4990847e3f7",
      author: "رضایی",
      week: 1,
      buttonName: "زیست - رضایی"
    },

    // فلسفه
    {
      id: "falsafeh-najafi",
      lessonId: "l2",
      fileId: "1082435463:-1713394336569549053:0:c42c1f6aca499530772871fc53c3c3ce50a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "فلسفه - نجفی"
    },
    {
      id: "falsafeh-nabigol",
      lessonId: "l2",
      fileId: "1082435463:3956068418361696000:0:c42c1f6aca499530772871fc53c3c3ce2b74d506c6c61e5498e6e8300af569c3",
      author: "نبی‌گل",
      week: 1,
      buttonName: "فلسفه - نبی‌گل"
    },
    {
      id: "falsafeh-rezaei",
      lessonId: "l2",
      fileId: "1082435463:6635425200525811458:0:c42c1f6aca499530fe09ce2ca00481b80837292d9c012d4f9decd1877e3492c2",
      author: "رضایی",
      week: 1,
      buttonName: "فلسفه - رضایی"
    },
    {
      id: "falsafeh-imanpour",
      lessonId: "l2",
      fileId: "1082435463:-5752093682461040895:0:c42c1f6aca499530fbbea62ce8dbd502a56389f5f0e2d3545109933f174e16129207a2665475629f",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "فلسفه - ایمان‌پور"
    },

    // هندسه
    {
      id: "hendese-rezaei",
      lessonId: "l3",
      fileId: "1082435463:-8908356605756367103:0:9e602188365d29cffe09ce2ca00481b80837292d9c012d4f9decd1877e3492c2",
      author: "رضایی",
      week: 1,
      buttonName: "هندسه - رضایی"
    },
    {
      id: "hendese-najafi",
      lessonId: "l3",
      fileId: "1082435463:333855741925924610:0:9e602188365d29cf772871fc53c3c3ce50a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "هندسه - نجفی"
    },
    {
      id: "hendeseA-nabigol",
      lessonId: "l3",
      fileId: "1082435463:-5697422117525577981:0:9e602188365d29cf44f70178af06db9b85b765a07acf20cda30b36be120c744b",
      author: "نبی‌گل",
      week: 1,
      buttonName: "هندسهA - نبی‌گل"
    },
    {
      id: "hendeseB-nabigol",
      lessonId: "l3",
      fileId: "1082435463:6021462401783504641:0:9e602188365d29cfd2b869eee0e29d1585b765a07acf20cda30b36be120c744b",
      author: "نبی‌گل",
      week: 1,
      buttonName: "هندسهB - نبی‌گل"
    },

    // کامپیوتر
    {
      id: "computer-najafi",
      lessonId: "l4",
      fileId: "1082435463:-6868525733990162687:0:849923ebc03cadde25c3a983457e9eb40f5fab04a612ef5048ed0f88580f8994",
      author: "نجفی",
      week: 1,
      buttonName: "کامپیوتر - نجفی"
    },
    {
      id: "computer-nabigol",
      lessonId: "l4",
      fileId: "1082435463:4352507039228763904:0:849923ebc03cadde25c3a983457e9eb4143d8dec17d2b626fe665dd6a50bc3fb9207a2665475629f",
      author: "نبی‌گل",
      week: 1,
      buttonName: "کامپیوتر - نبی‌گل"
    },
    {
      id: "computer-imanpour",
      lessonId: "l4",
      fileId: "1082435463:-611042908603146496:0:849923ebc03cadde25c3a983457e9eb41ddb6ba67d0f70d304a3c45edcb791cddcb78148fcdd094bc75e586317a614ef",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "کامپیوتر - ایمان‌پور"
    },

    // هوش مصنوعی
    {
      id: "ai-najafi",
      lessonId: "l5",
      fileId: "1082435463:-3205063757391651072:0:ad5e88c73fe1d86bb21986d00a23dea241df4fc1a864b0d3553bcd644d0503959207a2665475629f",
      author: "نجفی",
      week: 1,
      buttonName: "هوش‌مصنوعی - نجفی"
    },

    // جبر
    {
      id: "jabr-najafi",
      lessonId: "l6",
      fileId: "1082435463:823696016493649664:0:86bfb31ccaa1c6963c58776bd8039401d9743a3a4255d536",
      author: "نجفی",
      week: 1,
      buttonName: "جبر - نجفی"
    },
    {
      id: "jabr-nabigol",
      lessonId: "l6",
      fileId: "1082435463:2527782870608322304:0:86bfb31ccaa1c696c48eae0c80d9cb4b3317fa48b7c8cd15c75e586317a614ef",
      author: "نبی‌گل",
      week: 1,
      buttonName: "جبر - نبی‌گل"
    },
    {
      id: "jabr-rezaei",
      lessonId: "l6",
      fileId: "1082435463:-682528065863934208:0:86bfb31ccaa1c696c19f5f013781957b9a026541268feecf",
      author: "رضایی",
      week: 1,
      buttonName: "جبر - رضایی"
    },
    {
      id: "jabr-imanpour",
      lessonId: "l6",
      fileId: "1082435463:-6564558903475757311:0:86bfb31ccaa1c696b55527d32abf29aa91b45472b18a53963ec610bf5b080b001a9ec6f7595b78a8",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "جبر - ایمان‌پور"
    },

    // فیزیک
    {
      id: "fizik-najafi",
      lessonId: "l7",
      fileId: "1082435463:7049641524853939968:0:9ce4f9f7c4c2cc5a2c0b847a0416b61e50a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "فیزیک - نجفی"
    },
    {
      id: "fizik-nabigol",
      lessonId: "l7",
      fileId: "1082435463:1034553984878518019:0:9ce4f9f7c4c2cc5a2c0b847a0416b61e2b74d506c6c61e5498e6e8300af569c3",
      author: "نبی‌گل",
      week: 1,
      buttonName: "فیزیک - نبی‌گل"
    },
    {
      id: "fizik-rezaei",
      lessonId: "l7",
      fileId: "1082435463:8640842192730070787:0:9ce4f9f7c4c2cc5acf3df89048c0cf750837292d9c012d4f9decd1877e3492c2",
      author: "رضایی",
      week: 1,
      buttonName: "فیزیک - رضایی"
    },
    {
      id: "fizik-imanpour",
      lessonId: "l7",
      fileId: "1082435463:3332308014906351363:0:9ce4f9f7c4c2cc5a8e90657a7dd0777aa56389f5f0e2d3545109933f174e16129207a2665475629f",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "فیزیک - ایمان‌پور"
    },

    // ریاضی
    {
      id: "riazi-najafi",
      lessonId: "l8",
      fileId: "1082435463:-1380377548196405502:0:edd339a770e88536b33083cbaf91eaa450a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "ریاضی - نجفی"
    },
    {
      id: "riazi-rezaei",
      lessonId: "l8",
      fileId: "1082435463:-318792961283186942:0:edd339a770e8853654f64bac24d6f1420837292d9c012d4f9decd1877e3492c2",
      author: "رضایی",
      week: 1,
      buttonName: "ریاضی - رضایی"
    },
    {
      id: "riazi-imanpour",
      lessonId: "l8",
      fileId: "1082435463:7810165220266417920:0:edd339a770e88536c9358e03b7c52c23a56389f5f0e2d3545109933f174e16129207a2665475629f",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "ریاضی - ایمان‌پور"
    },

    // هوش دیجیتال
    {
      id: "hoosh-digital-nabigol",
      lessonId: "l10",
      fileId: "1082435463:-6939366257744142589:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3efd4801be09da4c49c4e69cffac7b908c9decd1877e3492c2",
      author: "نبی‌گل",
      week: 1,
      buttonName: "هوش‌دیجیتال - نبی‌گل"
    },

    // دفاعی
    {
      id: "defaei-najafi",
      lessonId: "l11",
      fileId: "1082435463:6733470863450578691:0:9749843051de1304b33083cbaf91eaa450a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "دفاعی - نجفی"
    },

    // عربی
    {
      id: "arabi-rezaei",
      lessonId: "l12",
      fileId: "1082435463:-4592084611487097085:0:a3ae9f5fe4d57d268af778bd08e355c357f55e9e4b994c809335c4990847e3f7",
      author: "رضایی",
      week: 1,
      buttonName: "عربی - رضایی"
    },
    {
      id: "arabi-nabigol",
      lessonId: "l12",
      fileId: "1082435463:4803584597538381571:0:a3ae9f5fe4d57d26143d8dec17d2b626fe665dd6a50bc3fb9207a2665475629f",
      author: "نبی‌گل",
      week: 1,
      buttonName: "عربی - نبی‌گل"
    },
    {
      id: "arabi-imanpour",
      lessonId: "l12",
      fileId: "1082435463:-7087799311419760894:0:a3ae9f5fe4d57d261ddb6ba67d0f70d304a3c45edcb791cddcb78148fcdd094bc75e586317a614ef",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "عربی - ایمان‌پور"
    },

    // ادبیات
    {
      id: "adabiat-najafi",
      lessonId: "l13",
      fileId: "1082435463:8266895146305462017:0:7566a938b4eeaf7b315c0cda2b5cb7dfc8cbca60c04b154a9decd1877e3492c2",
      author: "نجفی",
      week: 1,
      buttonName: "ادبیات - نجفی"
    },
    {
      id: "adabiat-nabigol",
      lessonId: "l13",
      fileId: "1082435463:-6283662466736251134:0:7566a938b4eeaf7b315c0cda2b5cb7df64ac9f6c718c996033168256eb4c6dfa1a9ec6f7595b78a8",
      author: "نبی‌گل",
      week: 1,
      buttonName: "ادبیات - نبی‌گل"
    },

    // شیمی
    {
      id: "shimi-najafi",
      lessonId: "l14",
      fileId: "1082435463:641915189597445888:0:fcded9183cc2ea800f5fab04a612ef5048ed0f88580f8994",
      author: "نجفی",
      week: 1,
      buttonName: "شیمی - نجفی"
    },
    {
      id: "shimi-rezaei",
      lessonId: "l14",
      fileId: "1082435463:6779997080969289472:0:fcded9183cc2ea808af778bd08e355c357f55e9e4b994c809335c4990847e3f7",
      author: "رضایی",
      week: 1,
      buttonName: "شیمی - رضایی"
    },
    {
      id: "shimi-nabigol",
      lessonId: "l14",
      fileId: "1082435463:6889952993474584322:0:fcded9183cc2ea80143d8dec17d2b626fe665dd6a50bc3fb9207a2665475629f",
      author: "نبی‌گل",
      week: 1,
      buttonName: "شیمی - نبی‌گل"
    },
    {
      id: "shimi-imanpour",
      lessonId: "l14",
      fileId: "1082435463:-749697481611796734:0:fcded9183cc2ea801ddb6ba67d0f70d304a3c45edcb791cddcb78148fcdd094bc75e586317a614ef",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "شیمی - ایمان‌پور"
    },

    // تاریخ
    {
      id: "tarikh-najafi",
      lessonId: "l15",
      fileId: "1082435463:-8231743262628897023:0:9f7f1411ca4da28996bf03dabbff69b750a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "تاریخ - نجفی"
    },
    {
      id: "tarikh-rezaei",
      lessonId: "l15",
      fileId: "1082435463:4890075626035355392:0:9f7f1411ca4da28947d7a2716f7a6c320837292d9c012d4f9decd1877e3492c2",
      author: "رضایی",
      week: 1,
      buttonName: "تاریخ - رضایی"
    },
    {
      id: "tarikh-imanpour",
      lessonId: "l15",
      fileId: "1082435463:-7838629802203144446:0:9f7f1411ca4da28991bb9da6335238ffa56389f5f0e2d3545109933f174e16129207a2665475629f",
      author: "ایمان‌پور",
      week: 1,
      buttonName: "تاریخ - ایمان‌پور"
    },

    // کشکول
    {
      id: "keshkol-najafi",
      lessonId: "l16",
      fileId: "1082435463:-2785218949196407038:0:494aeac206198302f7ecb59f76c81fcd50a9ae7b1a02bf079335c4990847e3f7",
      author: "نجفی",
      week: 1,
      buttonName: "کشکول - نجفی"
    },

    // اجتماعی
    {
      id: "ejtemaei-najafi",
      lessonId: "l17",
      fileId: "1082435463:-3424133760219603199:0:99a16bbd348140725eed3b5bd6acb1803c58776bd8039401d9743a3a4255d536",
      author: "نجفی",
      week: 1,
      buttonName: "اجتماعی - نجفی"
    }
  ];

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

  function makeCaption(note, lesson) {
    const weekNames = {
      1: "اول",
      2: "دوم",
      3: "سوم",
      4: "چهارم",
      5: "پنجم",
      6: "ششم",
      7: "هفتم",
      8: "هشتم",
      9: "نهم",
      10: "دهم"
    };

    return `📚درس ${lesson.name}📚
نویسنده : ${note.author}
هفته ${weekNames[note.week] || note.week}`;
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

    return {
      inline_keyboard: rows
    };
  }

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

  // =========================
  // دریافت فایل از کانال آرشیو
  // =========================

  const message = update?.message;

  if (
    message?.chat?.type === "channel" &&
    message?.chat?.id === ARCHIVE_CHANNEL_ID &&
    message?.document
  ) {
    const fileName = message.document.file_name || "بدون نام";
    const fileId = message.document.file_id;

    console.log(`NOTE|${fileName}|${fileId}`);

    return res.status(200).json({ ok: true });
  }

  // =========================
  // Callback
  // =========================

  const callbackQuery = update?.callback_query;

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

    return res.status(200).json({ ok: true });
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

    return res.status(200).json({ ok: true });
  }

  // =========================
  // دکمه‌ها
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

    // انتخاب جزوه
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

      await api("sendDocument", {
        chat_id: chatId,
        document: note.fileId,
        caption: makeCaption(note, lesson)
      });

      return res.status(200).json({ ok: true });
    }

    // بازگشت به درس‌ها
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
