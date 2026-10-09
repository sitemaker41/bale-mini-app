
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

  // فقط جزوات هفته دوم؛ ۴۰ فایل

  const notes = [
    // زیست
    {
      id: "zist-mehrbod",
      lessonId: "l1",
      fileId: "1082435463:-8329823306159350016:0:ecbfeb8f03d3707d0df3e7773f5aafd5dbcde43a09e9c5afc37fc5fbc82268199207a2665475629f",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "زیست - مهربد رضایی"
    },
    {
      id: "zist-matin",
      lessonId: "l1",
      fileId: "1082435463:3892643914695384833:0:ecbfeb8f03d3707d7c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8",
      author: "متین نجفی",
      week: 2,
      buttonName: "زیست - متین نجفی"
    },

    // فلسفه
    {
      id: "falsafeh-danial",
      lessonId: "l2",
      fileId: "1082435463:-7124299620821623040:0:c42c1f6aca4995300023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "فلسفه - دانیال ایمان‌پور"
    },
    {
      id: "falsafeh-mehrbod",
      lessonId: "l2",
      fileId: "1082435463:3907508804822703873:0:c42c1f6aca4995300e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "فلسفه - مهربد رضایی"
    },
    {
      id: "falsafeh-matin",
      lessonId: "l2",
      fileId: "1082435463:6491919133609107202:0:c42c1f6aca499530bf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "فلسفه - متین نجفی"
    },

    // هندسه
    {
      id: "hendese-danial",
      lessonId: "l3",
      fileId: "1082435463:8717915574020153088:0:9e602188365d29cf0023cb12815d3b0241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "هندسه - دانیال ایمان‌پور"
    },
    {
      id: "hendese-mehrbod",
      lessonId: "l3",
      fileId: "1082435463:-4048395713181507838:0:9e602188365d29cf0e06337cd01ac69fadee8e5b01614043c528564c70d43b93586225cee9e14318",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "هندسه - مهربد رضایی"
    },
    {
      id: "hendese-matin",
      lessonId: "l3",
      fileId: "1082435463:-5407409219803734272:0:9e602188365d29cfbf201a3138217ad57e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "هندسه - متین نجفی"
    },

    // کامپیوتر
    {
      id: "computer-danial",
      lessonId: "l4",
      fileId: "1082435463:-7396100427780186366:0:849923ebc03cadde25c3a983457e9eb47be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "کامپیوتر - دانیال ایمان‌پور"
    },

    // هوش مصنوعی
    {
      id: "ai-matin",
      lessonId: "l5",
      fileId: "1082435463:7500834847322087171:0:ad5e88c73fe1d86bb21986d00a23dea241df4fc1a864b0d3d5ed460d994bd5993c58776bd8039401d9743a3a4255d536",
      author: "متین نجفی",
      week: 2,
      buttonName: "هوش‌مصنوعی - متین نجفی"
    },

    // جبر
    {
      id: "jabr-amirmasoud",
      lessonId: "l6",
      fileId: "1082435463:7273754312852905729:0:86bfb31ccaa1c69646437231ec13ac5f79206540449bc9b4b20b313d03e019d33b2058048bb6308bde2e82b5e9e2d930",
      author: "امیرمسعود نبی‌گل",
      week: 2,
      buttonName: "جبر - امیرمسعود نبی‌گل"
    },
    {
      id: "jabr-matin",
      lessonId: "l6",
      fileId: "1082435463:-3599482488379793663:0:86bfb31ccaa1c696a35f5f93c6b233e7ffe4e4b5772fb7f2586225cee9e14318",
      author: "متین نجفی",
      week: 2,
      buttonName: "جبر - متین نجفی"
    },

    // فیزیک
    {
      id: "fizik-amirmasoud",
      lessonId: "l7",
      fileId: "1082435463:5332034733771005699:0:9ce4f9f7c4c2cc5a21f59833e91c0816d1b79e1479af075ab22489a0217903b896ec2fbe91ae2fdc284bca3c8ca627919335c4990847e3f7",
      author: "امیرمسعود نبی‌گل",
      week: 2,
      buttonName: "فیزیک - امیرمسعود نبی‌گل"
    },
    {
      id: "fizik-danial",
      lessonId: "l7",
      fileId: "1082435463:-3548386757362835709:0:9ce4f9f7c4c2cc5adcaca9957f1ca6d241ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "فیزیک - دانیال ایمان‌پور"
    },
    {
      id: "fizik-mehrbod",
      lessonId: "l7",
      fileId: "1082435463:-6411825634562531583:0:9ce4f9f7c4c2cc5abca065dc05c98c07adee8e5b01614043c528564c70d43b93586225cee9e14318",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "فیزیک - مهربد رضایی"
    },
    {
      id: "fizik-matin",
      lessonId: "l7",
      fileId: "1082435463:4868875276686073602:0:9ce4f9f7c4c2cc5a5579f8cd8472714e7e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "فیزیک - متین نجفی"
    },

    // ریاضی
    {
      id: "riazi-amirmasoud",
      lessonId: "l8",
      fileId: "1082435463:172344332243705602:0:edd339a770e88536a3bfbe957bb2fdaed1b79e1479af075ab22489a0217903b896ec2fbe91ae2fdc284bca3c8ca627919335c4990847e3f7",
      author: "امیرمسعود نبی‌گل",
      week: 2,
      buttonName: "ریاضی - امیرمسعود نبی‌گل"
    },
    {
      id: "riazi-danial",
      lessonId: "l8",
      fileId: "1082435463:-2467785438378516733:0:edd339a770e8853676a48ec3000d2c1441ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "ریاضی - دانیال ایمان‌پور"
    },
    {
      id: "riazi-mehrbod",
      lessonId: "l8",
      fileId: "1082435463:-8943078123095515390:0:edd339a770e8853691c58b74391ac9a0adee8e5b01614043c528564c70d43b93586225cee9e14318",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "ریاضی - مهربد رضایی"
    },
    {
      id: "riazi-matin",
      lessonId: "l8",
      fileId: "1082435463:7253996443381604099:0:edd339a770e885360a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "ریاضی - متین نجفی"
    },

    // هوش دیجیتال
    {
      id: "hoosh-digital-amirmasoud",
      lessonId: "l10",
      fileId: "1082435463:5739618955099774722:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3ecd56d605e64fd78b16a6564d6736998d485ee6657b6356d62b74d506c6c61e5498e6e8300af569c3",
      author: "امیرمسعود نبی‌گل",
      week: 2,
      buttonName: "هوش‌دیجیتال - امیرمسعود نبی‌گل"
    },
    {
      id: "hoosh-digital-mehrbod",
      lessonId: "l10",
      fileId: "1082435463:-3780268684452028671:0:9eda983706a27a38473b974085f8c8cec60a77bf41e55b27f3c13899acc859bd535361e81b4c1fda57f55e9e4b994c809335c4990847e3f7",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "هوش دیجیتال - مهربد رضایی"
    },
    {
      id: "hoosh-digital-matin",
      lessonId: "l10",
      fileId: "1082435463:4302846053353660163:0:ad5e88c73fe1d86b3340fec8065d7ebcb882c4783545ab3e6898d9b55bc1024e61210636c407473d48ed0f88580f8994",
      author: "متین نجفی",
      week: 2,
      buttonName: "هوش‌دیجیتال - متین نجفی"
    },

    // دفاعی
    {
      id: "defaei-matin",
      lessonId: "l11",
      fileId: "1082435463:-685127493878145278:0:9749843051de13040a3ffee0ce76a3d47e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "دفاعی - متین نجفی"
    },

    // عربی
    {
      id: "arabi-amirmasoud",
      lessonId: "l12",
      fileId: "1082435463:7014156566443204354:0:a3ae9f5fe4d57d26c7e3b111a237f1bbc0c618480f5960d2ea49083576f2c21885b765a07acf20cda30b36be120c744b",
      author: "امیرمسعود نبی‌گل",
      week: 2,
      buttonName: "عربی - امیرمسعود نبی‌گل"
    },
    {
      id: "arabi-danial",
      lessonId: "l12",
      fileId: "1082435463:656708708618542850:0:a3ae9f5fe4d57d267be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "عربی - دانیال ایمان‌پور"
    },
    {
      id: "arabi-mehrbod",
      lessonId: "l12",
      fileId: "1082435463:5459083141141896962:0:a3ae9f5fe4d57d260df3e7773f5aafd5dbcde43a09e9c5afc37fc5fbc82268199207a2665475629f",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "عربی - مهربد رضایی"
    },
    {
      id: "arabi-matin",
      lessonId: "l12",
      fileId: "1082435463:-8501454407703453952:0:a3ae9f5fe4d57d267c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8",
      author: "متین نجفی",
      week: 2,
      buttonName: "عربی - متین نجفی"
    },

    // ادبیات
    {
      id: "adabiat-danial",
      lessonId: "l13",
      fileId: "1082435463:1061507994688888576:0:7566a938b4eeaf7b50cea2b3c8862b00e26e1734e6dd9e1873dd0c23c365fbb0542e9b185f146d933edc10faa2b12f059decd1877e3492c2",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "ادبیات - دانیال ایمان‌پور"
    },
    {
      id: "adabiat-mehrbod",
      lessonId: "l13",
      fileId: "1082435463:6899024907209219841:0:7566a938b4eeaf7b315c0cda2b5cb7dff7c113ee8baf20bb7644d12d79d4f84e6a8840662bd147821a9ec6f7595b78a8",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "ادبیات - مهربد رضایی"
    },
    {
      id: "adabiat-matin",
      lessonId: "l13",
      fileId: "1082435463:2509095163744034560:0:7566a938b4eeaf7b315c0cda2b5cb7df2f51069756a97c4f553bcd644d0503959207a2665475629f",
      author: "متین نجفی",
      week: 2,
      buttonName: "ادبیات - متین نجفی"
    },

    // شیمی
    {
      id: "shimi-danial",
      lessonId: "l14",
      fileId: "1082435463:4720229852413632258:0:fcded9183cc2ea807be99fdce886d04cb239687ee75668929b780ee5e01a6978365d9914605b1e5dac128c8bb8ac660c",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "شیمی - دانیال ایمان‌پور"
    },
    {
      id: "shimi-mehrbod",
      lessonId: "l14",
      fileId: "1082435463:6461840009226034947:0:718b439a8a320a2aff69ed7e22c8b6f7bad2ca569c10884bf5d1fb8853c2e5bc32ab2dc53b0403e98c5b11f9481f56ab05c2784335435c74c75e586317a614ef",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "نوت‌برداری شیمی - مهربد رضایی"
    },
    {
      id: "shimi-matin",
      lessonId: "l14",
      fileId: "1082435463:-2257299743599157502:0:fcded9183cc2ea807c00fe7ece644a7f1262d13fa20e1e7f20f4a53e0db6042d1a9ec6f7595b78a8",
      author: "متین نجفی",
      week: 2,
      buttonName: "شیمی - متین نجفی"
    },

    // تاریخ
    {
      id: "tarikh-amirmasoud",
      lessonId: "l15",
      fileId: "1082435463:7202840520678842113:0:9f7f1411ca4da289232a6bc9fbfa29add1b79e1479af075ab22489a0217903b896ec2fbe91ae2fdc284bca3c8ca627919335c4990847e3f7",
      author: "امیرمسعود نبی‌گل",
      week: 2,
      buttonName: "تاریخ - امیرمسعود نبی‌گل"
    },
    {
      id: "tarikh-danial",
      lessonId: "l15",
      fileId: "1082435463:4472405262389878528:0:9f7f1411ca4da289fd29b03224d3169f41ccebbf70595ac349ebb2f99641b7796ec85560251c211f83fec623fa77d3b09335c4990847e3f7",
      author: "دانیال ایمان‌پور",
      week: 2,
      buttonName: "تاریخ - دانیال ایمان‌پور"
    },
    {
      id: "tarikh-mehrbod",
      lessonId: "l15",
      fileId: "1082435463:-6638398238596260095:0:9f7f1411ca4da28942b79a56ece0d2f4adee8e5b01614043c528564c70d43b93586225cee9e14318",
      author: "مهربد رضایی",
      week: 2,
      buttonName: "تاریخ - مهربد رضایی"
    },
    {
      id: "tarikh-matin",
      lessonId: "l15",
      fileId: "1082435463:-867444736790814976:0:9f7f1411ca4da289b5a90f18f25130fb7e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "تاریخ - متین نجفی"
    },

    // کشکول
    {
      id: "keshkol-matin",
      lessonId: "l16",
      fileId: "1082435463:-5398701390163861759:0:494aeac206198302e3b69b4ff83d8e527e7a77bc6af1a04adc80035c96146183c75e586317a614ef",
      author: "متین نجفی",
      week: 2,
      buttonName: "کشکول - متین نجفی"
    },

    // اجتماعی
    {
      id: "ejtemaei-matin",
      lessonId: "l17",
      fileId: "1082435463:2725384844181708545:0:99a16bbd348140725eed3b5bd6acb180a35f5f93c6b233e7ffe4e4b5772fb7f2586225cee9e14318",
      author: "متین نجفی",
      week: 2,
      buttonName: "اجتماعی - متین نجفی"
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

  // دریافت فایل از کانال آرشیو و ثبت شناسه در لاگ‌ها
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

  // Callback
  const callbackQuery = update?.callback_query;

  const chatId =
    message?.chat?.id ||
    callbackQuery?.message?.chat?.id;

  if (!chatId) {
    return res.status(200).json({ ok: true });
  }

  // /start
  if (message?.text === "/start") {
    const welcomeText = `سلام 👋
به ربات جزوه‌رسان | دانشکده۴۱ خوش اومدی!

اینجا می‌تونی جزوات درسی هفته دوم رو به‌صورت مرتب پیدا کنی و دریافتشون کنی. 📚

لطفاً درس موردنظرت رو انتخاب کن:`;

    await api("sendMessage", {
      chat_id: chatId,
      text: welcomeText,
      reply_markup: lessonKeyboard()
    });

    return res.status(200).json({ ok: true });
  }

  // /help
  if (message?.text === "/help") {
    const helpText = `🎓 راهنمای جزوه‌رسان | دانشکده۴۱ 🎓

🤖 درباره ربات:
جزوه‌رسان برای دسترسی سریع و مرتب به جزوات درسی ساخته شده است.

📝 نحوه استفاده:
1. درس موردنظرت رو انتخاب کن.
2. جزوه موردنظرت رو انتخاب کن.
3. فایل PDF مستقیماً در همین چت برات ارسال میشه. 📚

💡 اگر مشکلی در دریافت جزوه داشتی، اطلاع بده تا بررسی بشه.

🎓 دانشکده۴۱ | دوره۴۱ علامه‌حلی 🎓`;

    await api("sendMessage", {
      chat_id: chatId,
      text: helpText
    });

    return res.status(200).json({ ok: true });
  }

  // دکمه‌ها
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
