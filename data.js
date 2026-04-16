const DATA = {

  // ========== フロー（困りごと） ==========
  flow: [
    {
      id: "late", icon: "⏰",
      title: { ja: "遅れそう", vi: "Sắp đi muộn", id: "Akan terlambat", en: "Going to be late", bn: "দেরি হবে" },
      steps: [
        { no: 1,
          action: { ja: "電話をかける", vi: "Gọi điện thoại", id: "Menelepon", en: "Call by phone", bn: "ফোন করুন" },
          show: { ja: "おはようございます。\n○○です。", vi: "Chào buổi sáng.\nTôi là ○○.", id: "Selamat pagi.\nSaya ○○.", en: "Good morning.\nThis is ○○.", bn: "শুভ সকাল।\nআমি ○○।" }
        },
        { no: 2,
          action: { ja: "遅れることを伝える", vi: "Thông báo sẽ đến muộn", id: "Beritahu akan terlambat", en: "Tell them you'll be late", bn: "দেরি হবে জানান" },
          show: { ja: "今日、遅刻します。\n○○分ほど遅れます。", vi: "Hôm nay tôi sẽ đi muộn.\nKhoảng ○○ phút.", id: "Hari ini saya terlambat.\nSekitar ○○ menit.", en: "I will be late today.\nAbout ○○ minutes late.", bn: "আজ দেরি হবে।\nআমি প্রায় ○○ মিনিট দেরি করব।" }
        },
        { no: 3,
          action: { ja: "理由を選ぶ", vi: "Chọn lý do", id: "Pilih alasan", en: "Choose a reason", bn: "কারণ বেছে নিন" },
          options: [
            { ja: "電車が遅れています。", vi: "Tàu điện bị trễ.", id: "Kereta terlambat.", en: "The train is delayed.", bn: "ট্রেন দেরি হচ্ছে।" },
            { ja: "渋滞しています。", vi: "Đường bị tắc.", id: "Macet.", en: "There is traffic.", bn: "যানজট আছে।" },
            { ja: "寝坊しました。\n申し訳ありません。", vi: "Tôi dậy muộn.\nXin lỗi.", id: "Saya kesiangan.\nMaaf.", en: "I overslept.\nI'm sorry.", bn: "ঘুম থেকে দেরিতে উঠেছি।\nমাফ করবেন।" },
            { ja: "体調が悪いです。", vi: "Tôi không khỏe.", id: "Saya tidak enak badan.", en: "I'm not feeling well.", bn: "অসুস্থ বোধ করছি।" },
          ]
        },
        { no: 4,
          action: { ja: "締めの言葉", vi: "Lời kết", id: "Kata penutup", en: "Closing words", bn: "শেষ কথা" },
          show: { ja: "よろしくお願いします。\n失礼します。", vi: "Xin cảm ơn và thông cảm.\nXin chào.", id: "Mohon pengertiannya.\nSampai jumpa.", en: "Thank you for understanding.\nGoodbye.", bn: "ধন্যবাদ বুঝার জন্য।\nবিদায়।" }
        },
      ]
    },
    {
      id: "sick", icon: "🤒",
      title: { ja: "体調が悪い・休みたい", vi: "Không khỏe / Muốn nghỉ", id: "Tidak enak badan / Ingin absen", en: "Feel sick / Want day off", bn: "অসুস্থ / ছুটি নিতে চাই" },
      steps: [
        { no: 1,
          action: { ja: "電話をかける（始業30分前まで）", vi: "Gọi điện (trước 30 phút làm việc)", id: "Telepon (30 menit sebelum kerja)", en: "Call (30 min before work starts)", bn: "ফোন করুন (কাজ শুরুর ৩০ মিনিট আগে)" },
          show: { ja: "おはようございます。\n○○です。", vi: "Chào buổi sáng.\nTôi là ○○.", id: "Selamat pagi.\nSaya ○○.", en: "Good morning.\nThis is ○○.", bn: "শুভ সকাল।\nআমি ○○।" }
        },
        { no: 2,
          action: { ja: "休みたいことを伝える", vi: "Thông báo muốn nghỉ", id: "Beritahu ingin absen", en: "Tell them you need the day off", bn: "ছুটি নিতে চান জানান" },
          show: { ja: "今日、体調が悪くて\n休ませてください。\nよろしくお願いします。", vi: "Hôm nay tôi không khỏe,\nxin cho tôi nghỉ.\nCảm ơn.", id: "Hari ini saya tidak enak badan,\nmohon izin absen.\nTerima kasih.", en: "I'm not feeling well today.\nPlease allow me to take the day off.\nThank you.", bn: "আজ অসুস্থ বোধ করছি।\nছুটি দিন দয়া করে।\nধন্যবাদ।" }
        },
        { no: 3,
          action: { ja: "症状を選ぶ（任意）", vi: "Chọn triệu chứng (tùy chọn)", id: "Pilih gejala (opsional)", en: "Choose symptom (optional)", bn: "উপসর্গ বেছে নিন (ঐচ্ছিক)" },
          options: [
            { ja: "熱があります。", vi: "Tôi bị sốt.", id: "Saya demam.", en: "I have a fever.", bn: "জ্বর আছে।" },
            { ja: "お腹が痛いです。", vi: "Tôi bị đau bụng.", id: "Saya sakit perut.", en: "I have a stomachache.", bn: "পেট ব্যথা আছে।" },
            { ja: "頭が痛いです。", vi: "Tôi bị đau đầu.", id: "Saya sakit kepala.", en: "I have a headache.", bn: "মাথা ব্যথা আছে।" },
            { ja: "病院に行きます。", vi: "Tôi sẽ đi bệnh viện.", id: "Saya akan ke rumah sakit.", en: "I will go to the hospital.", bn: "হাসপাতালে যাব।" },
          ]
        },
      ]
    },
    {
      id: "work_trouble", icon: "🔧",
      title: { ja: "仕事でわからない・困った", vi: "Không hiểu / Gặp khó khăn", id: "Tidak mengerti / Ada masalah", en: "Don't understand / Having trouble", bn: "কাজে বুঝছি না / সমস্যা" },
      steps: [
        { no: 1,
          action: { ja: "担当者を呼ぶ", vi: "Gọi người phụ trách", id: "Panggil penanggung jawab", en: "Call your supervisor", bn: "দায়িত্বশীলকে ডাকুন" },
          show: { ja: "すみません。\n教えてください。", vi: "Xin lỗi.\nXin hãy chỉ cho tôi.", id: "Permisi.\nTolong ajarkan saya.", en: "Excuse me.\nPlease show me.", bn: "মাফ করবেন।\nআমাকে দেখান দয়া করে।" }
        },
        { no: 2,
          action: { ja: "状況を選ぶ", vi: "Chọn tình huống", id: "Pilih situasi", en: "Choose your situation", bn: "পরিস্থিতি বেছে নিন" },
          options: [
            { ja: "これはどうやって\nやりますか？", vi: "Cái này làm thế nào ạ?", id: "Ini caranya bagaimana?", en: "How do I do this?", bn: "এটা কীভাবে করব?" },
            { ja: "もう一度\n教えてください。", vi: "Xin hãy dạy lại một lần nữa.", id: "Tolong ajarkan sekali lagi.", en: "Please show me one more time.", bn: "আরেকবার শেখান দয়া করে।" },
            { ja: "機械が\n動きません。", vi: "Máy không hoạt động.", id: "Mesin tidak berjalan.", en: "The machine won't work.", bn: "মেশিন কাজ করছে না।" },
            { ja: "これは\n不良品ですか？", vi: "Cái này có phải hàng lỗi không?", id: "Ini barang cacat?", en: "Is this defective?", bn: "এটা কি ত্রুটিপূর্ণ?" },
            { ja: "危険です！\n止めてください！", vi: "Nguy hiểm!\nXin hãy dừng lại!", id: "Berbahaya!\nTolong hentikan!", en: "Danger!\nPlease stop!", bn: "বিপজ্জনক!\nথামুন দয়া করে!" },
            { ja: "終わりました。", vi: "Tôi đã xong.", id: "Sudah selesai.", en: "I'm done.", bn: "শেষ হয়েছে।" },
          ]
        },
      ]
    },
    {
      id: "garbage", icon: "🗑️",
      title: { ja: "ゴミを出したい", vi: "Muốn đổ rác", id: "Ingin membuang sampah", en: "Want to take out garbage", bn: "ময়লা ফেলতে চাই" },
      steps: [
        { no: 1,
          action: { ja: "ゴミの種類を確認する", vi: "Kiểm tra loại rác", id: "Periksa jenis sampah", en: "Check garbage type", bn: "ময়লার ধরন দেখুন" },
          options: [
            { ja: "燃えるゴミ\n（生ゴミ・紙・布）", vi: "Rác cháy\n(Thực phẩm, giấy, vải)", id: "Mudah terbakar\n(Sisa makanan, kertas, kain)", en: "Burnable\n(Food waste, paper, cloth)", bn: "পোড়ানো যায়\n(খাবার/কাগজ/কাপড়)" },
            { ja: "燃えないゴミ\n（金属・ガラス・陶器）", vi: "Rác không cháy\n(Kim loại, thủy tinh, gốm)", id: "Tidak terbakar\n(Logam, kaca, keramik)", en: "Non-burnable\n(Metal, glass, ceramic)", bn: "পোড়ানো যায় না\n(ধাতু/কাচ/সিরামিক)" },
            { ja: "資源ゴミ\n（ペットボトル・缶・瓶）", vi: "Rác tái chế\n(Chai nhựa, lon, chai thủy tinh)", id: "Daur ulang\n(Botol plastik, kaleng, botol kaca)", en: "Recyclable\n(PET bottles, cans, glass)", bn: "রিসাইকেল\n(প্লাস্টিক/ক্যান/কাচ)" },
          ]
        },
        { no: 2,
          action: { ja: "収集日・時間を確認する", vi: "Kiểm tra ngày và giờ thu gom", id: "Periksa hari pengangkutan", en: "Check collection day/time", bn: "সংগ্রহের দিন দেখুন" },
          show: { ja: "収集日の朝8時までに出す。\n前日の夜は出さないでください。", vi: "Đổ rác trước 8 giờ sáng ngày thu gom.\nKhông đổ vào tối hôm trước.", id: "Keluarkan sebelum jam 8 pagi.\nJangan malam sebelumnya.", en: "Put out by 8am on collection day.\nDo not put out the night before.", bn: "সকাল ৮টার আগে রাখুন।\nআগের রাতে রাখবেন না।" }
        },
        { no: 3,
          action: { ja: "指定袋に入れて出す", vi: "Cho vào túi quy định và đổ", id: "Masukkan ke kantong yang ditentukan", en: "Put in designated bag and take out", bn: "নির্ধারিত ব্যাগে রেখে ফেলুন" },
          show: { ja: "指定のゴミ袋を使ってください。\nゴミ置き場に出してください。", vi: "Hãy dùng túi rác quy định.\nĐặt ở nơi để rác.", id: "Gunakan kantong sampah yang ditentukan.\nLetakkan di tempat pembuangan.", en: "Use the designated garbage bag.\nPut it at the collection point.", bn: "নির্ধারিত ময়লার ব্যাগ ব্যবহার করুন।\nময়লা রাখার জায়গায় রাখুন।" }
        },
      ]
    },
    {
      id: "hospital_flow", icon: "🏥",
      title: { ja: "病院に行きたい", vi: "Muốn đi bệnh viện", id: "Ingin pergi ke rumah sakit", en: "Want to go to hospital", bn: "হাসপাতালে যেতে চাই" },
      steps: [
        { no: 1,
          action: { ja: "保険証を持つ", vi: "Mang theo thẻ bảo hiểm", id: "Bawa kartu asuransi", en: "Bring your insurance card", bn: "বীমা কার্ড নিন" },
          show: { ja: "保険証を忘れずに\n持って行ってください。", vi: "Đừng quên mang theo\nthẻ bảo hiểm.", id: "Jangan lupa bawa\nkartu asuransi.", en: "Don't forget to bring\nyour insurance card.", bn: "বীমা কার্ড নিতে\nভুলবেন না।" }
        },
        { no: 2,
          action: { ja: "症状を選ぶ", vi: "Chọn triệu chứng", id: "Pilih gejala", en: "Choose your symptom", bn: "উপসর্গ বেছে নিন" },
          options: [
            { ja: "お腹が痛いです。", vi: "Tôi bị đau bụng.", id: "Saya sakit perut.", en: "I have a stomachache.", bn: "পেট ব্যথা আছে।" },
            { ja: "頭が痛いです。", vi: "Tôi bị đau đầu.", id: "Saya sakit kepala.", en: "I have a headache.", bn: "মাথা ব্যথা আছে।" },
            { ja: "熱があります。", vi: "Tôi bị sốt.", id: "Saya demam.", en: "I have a fever.", bn: "জ্বর আছে।" },
            { ja: "ここが痛いです。\n（指さして）", vi: "Chỗ này đau.\n(Chỉ vào)", id: "Di sini sakit.\n(Tunjuk)", en: "It hurts here.\n(Point to it)", bn: "এখানে ব্যথা।\n(আঙুল দিয়ে দেখান)" },
            { ja: "吐き気がします。", vi: "Tôi buồn nôn.", id: "Saya mual.", en: "I feel nauseous.", bn: "বমি বমি লাগছে।" },
            { ja: "動けません。", vi: "Tôi không thể di chuyển.", id: "Saya tidak bisa bergerak.", en: "I cannot move.", bn: "নড়াচড়া করতে পারছি না।" },
          ]
        },
        { no: 3,
          action: { ja: "受付で見せる", vi: "Cho xem tại quầy lễ tân", id: "Tunjukkan di resepsionis", en: "Show at reception", bn: "রিসেপশনে দেখান" },
          show: { ja: "初めて来ました。\n診察をお願いします。\n保険証があります。", vi: "Đây là lần đầu tôi đến.\nTôi muốn khám bệnh.\nTôi có thẻ bảo hiểm.", id: "Ini pertama kali saya datang.\nSaya ingin berobat.\nSaya punya kartu asuransi.", en: "This is my first visit.\nI would like to see a doctor.\nI have my insurance card.", bn: "প্রথমবার এসেছি।\nডাক্তার দেখাতে চাই।\nবীমা কার্ড আছে।" }
        },
        { no: 4,
          action: { ja: "わからないとき", vi: "Khi không hiểu", id: "Ketika tidak mengerti", en: "When you don't understand", bn: "না বুঝলে" },
          show: { ja: "日本語がわかりません。\nゆっくり話してください。", vi: "Tôi không hiểu tiếng Nhật.\nXin hãy nói chậm lại.", id: "Saya tidak mengerti bahasa Jepang.\nTolong berbicara pelan-pelan.", en: "I don't understand Japanese.\nPlease speak slowly.", bn: "জাপানি বুঝি না।\nধীরে কথা বলুন।" }
        },
      ]
    },
  ],

  // ========== ボタン系（タップして見せる） ==========
  button: [
    {
      id: "emergency", cat: "emergency", icon: "🚨",
      title: { ja: "緊急連絡", vi: "Khẩn cấp", id: "Darurat", en: "Emergency", bn: "জরুরি" },
      sections: [
        { label: { ja: "今すぐ電話", vi: "Gọi ngay", id: "Hubungi sekarang", en: "Call now", bn: "এখনই ফোন করুন" }, items: [
          { jp: "119に電話\n（救急・火事）", tr: { vi: "Gọi 119\n(Cấp cứu / Cháy)", id: "Hubungi 119\n(Ambulans / Kebakaran)", en: "Call 119\n(Ambulance / Fire)", bn: "119 ফোন করুন\n(অ্যাম্বুলেন্স/আগুন)" }, color: "red" },
          { jp: "110に電話\n（警察）", tr: { vi: "Gọi 110\n(Cảnh sát)", id: "Hubungi 110\n(Polisi)", en: "Call 110\n(Police)", bn: "110 ফোন করুন\n(পুলিশ)" }, color: "red" },
        ]},
        { label: { ja: "見せるフレーズ", vi: "Câu để cho xem", id: "Frasa untuk ditunjukkan", en: "Show these phrases", bn: "দেখানোর বাক্য" }, items: [
          { jp: "助けてください！", tr: { vi: "Xin hãy giúp tôi!", id: "Tolong saya!", en: "Please help me!", bn: "সাহায্য করুন!" }, color: "red" },
          { jp: "人が倒れています！", tr: { vi: "Có người bị ngã!", id: "Ada orang pingsan!", en: "Someone has collapsed!", bn: "কেউ পড়ে গেছেন!" }, color: "red" },
          { jp: "火事です！", tr: { vi: "Có cháy!", id: "Ada kebakaran!", en: "There is a fire!", bn: "আগুন লেগেছে!" }, color: "red" },
          { jp: "交通事故です！", tr: { vi: "Có tai nạn giao thông!", id: "Ada kecelakaan!", en: "Traffic accident!", bn: "সড়ক দুর্ঘটনা!" }, color: "red" },
          { jp: "住所はここです\n（画面を見せる）", tr: { vi: "Địa chỉ ở đây\n(Cho xem màn hình)", id: "Alamatnya di sini\n(Tunjukkan layar)", en: "Address is here\n(Show screen)", bn: "ঠিকানা এখানে\n(স্ক্রিন দেখান)" }, color: "amber" },
        ]},
      ]
    },
    {
      id: "hospital", cat: "hospital", icon: "🏥",
      title: { ja: "病院・薬局", vi: "Bệnh viện / Nhà thuốc", id: "Rumah sakit / Apotek", en: "Hospital / Pharmacy", bn: "হাসপাতাল/ফার্মেসি" },
      sections: [
        { label: { ja: "症状を見せる", vi: "Cho xem triệu chứng", id: "Tunjukkan gejala", en: "Show symptoms", bn: "উপসর্গ দেখান" }, items: [
          { jp: "お腹が痛いです", tr: { vi: "Tôi bị đau bụng", id: "Saya sakit perut", en: "I have a stomachache", bn: "পেট ব্যথা আছে" }, color: "red" },
          { jp: "頭が痛いです", tr: { vi: "Tôi bị đau đầu", id: "Saya sakit kepala", en: "I have a headache", bn: "মাথা ব্যথা আছে" }, color: "red" },
          { jp: "熱があります", tr: { vi: "Tôi bị sốt", id: "Saya demam", en: "I have a fever", bn: "জ্বর আছে" }, color: "red" },
          { jp: "吐き気がします", tr: { vi: "Tôi buồn nôn", id: "Saya mual", en: "I feel nauseous", bn: "বমি বমি লাগছে" }, color: "red" },
          { jp: "ここが痛いです\n（指さして）", tr: { vi: "Chỗ này đau\n(Chỉ vào)", id: "Di sini sakit\n(Tunjuk)", en: "It hurts here\n(Point to it)", bn: "এখানে ব্যথা\n(আঙুল দিয়ে)" }, color: "red" },
          { jp: "動けません", tr: { vi: "Tôi không thể di chuyển", id: "Saya tidak bisa bergerak", en: "I cannot move", bn: "নড়াচড়া করতে পারছি না" }, color: "red" },
        ]},
        { label: { ja: "受付で使う", vi: "Dùng tại quầy lễ tân", id: "Gunakan di resepsionis", en: "Use at reception", bn: "রিসেপশনে ব্যবহার করুন" }, items: [
          { jp: "初めて来ました\n診察をお願いします", tr: { vi: "Lần đầu đến\nMuốn khám bệnh", id: "Pertama kali datang\nIngin berobat", en: "First visit\nI'd like to see a doctor", bn: "প্রথমবার এসেছি\nডাক্তার দেখাতে চাই" }, color: "green" },
          { jp: "保険証があります", tr: { vi: "Tôi có thẻ bảo hiểm", id: "Saya punya kartu asuransi", en: "I have my insurance card", bn: "বীমা কার্ড আছে" }, color: "green" },
          { jp: "保険証を忘れました", tr: { vi: "Tôi quên thẻ bảo hiểm", id: "Saya lupa kartu asuransi", en: "I forgot my insurance card", bn: "বীমা কার্ড ভুলে এসেছি" }, color: "amber" },
          { jp: "日本語がわかりません", tr: { vi: "Tôi không hiểu tiếng Nhật", id: "Tidak mengerti bahasa Jepang", en: "I don't understand Japanese", bn: "জাপানি বুঝি না" }, color: "amber" },
          { jp: "処方箋があります\n薬をお願いします", tr: { vi: "Có đơn thuốc\nXin thuốc", id: "Punya resep\nMinta obat", en: "Have prescription\nPlease give medicine", bn: "প্রেসক্রিপশন আছে\nওষুধ দিন" }, color: "green" },
        ]},
      ]
    },
    {
      id: "absence", cat: "work", icon: "📞",
      title: { ja: "遅刻・欠勤連絡", vi: "Báo đi muộn / vắng mặt", id: "Lapor terlambat / absen", en: "Late / Absence Notice", bn: "দেরি/অনুপস্থিতির বিজ্ঞপ্তি" },
      sections: [
        { label: { ja: "電話で使う", vi: "Dùng khi gọi điện", id: "Gunakan saat menelepon", en: "Use on the phone", bn: "ফোনে ব্যবহার করুন" }, items: [
          { jp: "○○です。今日\n遅刻します", tr: { vi: "Tôi là ○○. Hôm nay\ntôi sẽ đi muộn", id: "Saya ○○. Hari ini\nsaya akan terlambat", en: "This is ○○. I will be\nlate today", bn: "আমি ○○। আজ\nদেরি হবে" }, color: "amber" },
          { jp: "○○です。体調が悪く\n今日休みます", tr: { vi: "Tôi là ○○. Tôi bị bệnh\nvà nghỉ hôm nay", id: "Saya ○○. Saya sakit\ndan absen hari ini", en: "This is ○○. I'm sick\nand absent today", bn: "আমি ○○। অসুস্থ\nআজ কাজে আসতে পারব না" }, color: "red" },
          { jp: "電車が遅れています\n○○分遅刻します", tr: { vi: "Tàu điện bị trễ\nTôi sẽ muộn ○○ phút", id: "Kereta terlambat\nSaya terlambat ○○ menit", en: "Train is delayed\n○○ minutes late", bn: "ট্রেন দেরি হচ্ছে\n○○ মিনিট দেরি হবে" }, color: "amber" },
          { jp: "よろしく\nお願いします", tr: { vi: "Xin cảm ơn\nvà thông cảm", id: "Mohon\npengertiannya", en: "Thank you for\nunderstanding", bn: "ধন্যবাদ\nঅনুগ্রহ করে বুঝুন" }, color: "green" },
        ]},
      ]
    },
    {
      id: "cityhall", cat: "life", icon: "🏛️",
      title: { ja: "役所・銀行", vi: "Cơ quan hành chính / Ngân hàng", id: "Kantor pemerintah / Bank", en: "City Hall / Bank", bn: "সরকারি অফিস/ব্যাংক" },
      sections: [
        { label: { ja: "役所・銀行で見せる", vi: "Cho xem tại cơ quan / ngân hàng", id: "Tunjukkan di kantor / bank", en: "Show at city hall / bank", bn: "অফিস/ব্যাংকে দেখান" }, items: [
          { jp: "転入届を出したいです", tr: { vi: "Muốn nộp đơn đăng ký chuyển đến", id: "Ingin mengajukan pendaftaran pindah", en: "I'd like to register my move", bn: "বাসস্থান পরিবর্তন নিবন্ধন করতে চাই" }, color: "green" },
          { jp: "マイナンバーカードを\n作りたいです", tr: { vi: "Muốn làm thẻ My Number", id: "Ingin membuat kartu My Number", en: "I'd like a My Number card", bn: "মাই নম্বর কার্ড বানাতে চাই" }, color: "green" },
          { jp: "日本語がわかりません\n通訳はいますか？", tr: { vi: "Không hiểu tiếng Nhật\nCó phiên dịch không?", id: "Tidak mengerti Jepang\nAda penerjemah?", en: "Don't understand Japanese\nIs there an interpreter?", bn: "জাপানি বুঝি না\nদোভাষী আছেন?" }, color: "amber" },
          { jp: "口座を開きたいです", tr: { vi: "Muốn mở tài khoản", id: "Ingin membuka rekening", en: "I'd like to open an account", bn: "অ্যাকাউন্ট খুলতে চাই" }, color: "green" },
          { jp: "海外にお金を送りたいです", tr: { vi: "Muốn gửi tiền ra nước ngoài", id: "Ingin mengirim uang ke luar negeri", en: "I'd like to send money overseas", bn: "বিদেশে টাকা পাঠাতে চাই" }, color: "green" },
        ]},
      ]
    },
    {
      id: "supermarket", cat: "life", icon: "🛒",
      title: { ja: "スーパー・買い物", vi: "Siêu thị / Mua sắm", id: "Supermarket / Belanja", en: "Supermarket / Shopping", bn: "সুপারমার্কেট/কেনাকাটা" },
      sections: [
        { label: { ja: "店員に見せる", vi: "Cho nhân viên xem", id: "Tunjukkan ke pegawai", en: "Show to staff", bn: "কর্মীকে দেখান" }, items: [
          { jp: "これはどこにありますか？", tr: { vi: "Cái này ở đâu ạ?", id: "Di mana ini?", en: "Where is this?", bn: "এটা কোথায় আছে?" }, color: "green" },
          { jp: "袋をください", tr: { vi: "Cho tôi một túi", id: "Tolong berikan kantong", en: "Please give me a bag", bn: "একটা ব্যাগ দিন" }, color: "green" },
          { jp: "ポイントカードがあります", tr: { vi: "Tôi có thẻ tích điểm", id: "Saya punya kartu poin", en: "I have a point card", bn: "পয়েন্ট কার্ড আছে" }, color: "green" },
          { jp: "セルフレジの使い方を\n教えてください", tr: { vi: "Xin hướng dẫn dùng\nmáy tự phục vụ", id: "Tolong ajarkan cara\nkasir mandiri", en: "Please show me how to\nuse self-checkout", bn: "সেলফ চেকআউট কীভাবে\nব্যবহার করবেন শেখান" }, color: "amber" },
        ]},
      ]
    },
  ],

  // ========== 現場メモ ==========
  genba: [
    {
      id: "safety", cat: "genba", icon: "🔴",
      title: { ja: "安全・緊急", vi: "An toàn / Khẩn cấp", id: "Keselamatan / Darurat", en: "Safety / Emergency", bn: "নিরাপত্তা / জরুরি" },
      items: [
        { ja: "危険", vi: "Nguy hiểm", id: "Bahaya", en: "Danger", bn: "বিপদ", kana: "きけん" },
        { ja: "緊急停止", vi: "Dừng khẩn cấp", id: "Henti darurat", en: "Emergency stop", bn: "জরুরি থামুন", kana: "きんきゅうていし" },
        { ja: "止まってください", vi: "Hãy dừng lại", id: "Tolong berhenti", en: "Please stop", bn: "থামুন দয়া করে", kana: "とまってください" },
        { ja: "逃げてください", vi: "Hãy chạy trốn", id: "Tolong kabur", en: "Please evacuate", bn: "পালান দয়া করে", kana: "にげてください" },
        { ja: "助けてください", vi: "Xin hãy giúp tôi", id: "Tolong saya", en: "Please help me", bn: "সাহায্য করুন", kana: "たすけてください" },
        { ja: "火事", vi: "Cháy", id: "Kebakaran", en: "Fire", bn: "আগুন", kana: "かじ" },
        { ja: "怪我をしました", vi: "Tôi bị thương", id: "Saya terluka", en: "I am injured", bn: "আহত হয়েছি", kana: "けがをしました" },
      ]
    },
    {
      id: "instruction", cat: "genba", icon: "🟡",
      title: { ja: "作業指示", vi: "Chỉ thị công việc", id: "Instruksi kerja", en: "Work instructions", bn: "কাজের নির্দেশ" },
      items: [
        { ja: "始めてください", vi: "Hãy bắt đầu", id: "Tolong mulai", en: "Please start", bn: "শুরু করুন", kana: "はじめてください" },
        { ja: "止めてください", vi: "Hãy dừng lại", id: "Tolong berhenti", en: "Please stop", bn: "থামুন", kana: "とめてください" },
        { ja: "急いでください", vi: "Hãy nhanh lên", id: "Tolong cepat", en: "Please hurry", bn: "তাড়াতাড়ি করুন", kana: "いそいでください" },
        { ja: "確認してください", vi: "Hãy kiểm tra", id: "Tolong periksa", en: "Please check", bn: "চেক করুন", kana: "かくにんしてください" },
        { ja: "もう一度やってください", vi: "Hãy làm lại một lần nữa", id: "Tolong lakukan sekali lagi", en: "Please do it again", bn: "আবার করুন", kana: "もういちどやってください" },
        { ja: "手伝ってください", vi: "Hãy giúp tôi", id: "Tolong bantu", en: "Please help me", bn: "সাহায্য করুন", kana: "てつだってください" },
        { ja: "休憩してください", vi: "Hãy nghỉ ngơi", id: "Tolong istirahat", en: "Please take a break", bn: "বিশ্রাম নিন", kana: "きゅうけいしてください" },
        { ja: "終わりました", vi: "Đã xong", id: "Sudah selesai", en: "I'm done", bn: "শেষ হয়েছে", kana: "おわりました" },
        { ja: "わかりました", vi: "Tôi hiểu rồi", id: "Saya mengerti", en: "I understand", bn: "বুঝেছি", kana: "わかりました" },
        { ja: "わかりません", vi: "Tôi không hiểu", id: "Saya tidak mengerti", en: "I don't understand", bn: "বুঝি নি", kana: "わかりません" },
      ]
    },
    {
      id: "quality", cat: "genba", icon: "🟢",
      title: { ja: "品質・検査", vi: "Chất lượng / Kiểm tra", id: "Kualitas / Inspeksi", en: "Quality / Inspection", bn: "মান/পরিদর্শন" },
      items: [
        { ja: "不良", vi: "Lỗi", id: "Cacat", en: "Defect", bn: "ত্রুটি", kana: "ふりょう" },
        { ja: "不良品", vi: "Hàng lỗi", id: "Barang cacat", en: "Defective product", bn: "ত্রুটিপূর্ণ পণ্য", kana: "ふりょうひん" },
        { ja: "良品", vi: "Hàng tốt", id: "Barang bagus", en: "Good product", bn: "ভালো পণ্য", kana: "りょうひん" },
        { ja: "検査", vi: "Kiểm tra", id: "Inspeksi", en: "Inspection", bn: "পরিদর্শন", kana: "けんさ" },
        { ja: "合格", vi: "Đạt", id: "Lulus", en: "Pass", bn: "পাস", kana: "ごうかく" },
        { ja: "不合格", vi: "Không đạt", id: "Tidak lulus", en: "Fail", bn: "ফেল", kana: "ふごうかく" },
        { ja: "キズ", vi: "Vết xước", id: "Goresan", en: "Scratch", bn: "আঁচড়", kana: "きず" },
        { ja: "汚れ", vi: "Vết bẩn", id: "Noda", en: "Dirt/stain", bn: "ময়লা", kana: "よごれ" },
        { ja: "サイズが違います", vi: "Kích thước sai", id: "Ukuran salah", en: "Wrong size", bn: "সাইজ ভুল", kana: "サイズがちがいます" },
        { ja: "問題ありません", vi: "Không có vấn đề", id: "Tidak ada masalah", en: "No problem", bn: "কোনো সমস্যা নেই", kana: "もんだいありません" },
      ]
    },
    {
      id: "quantity", cat: "genba", icon: "📏",
      title: { ja: "数量・時間", vi: "Số lượng / Thời gian", id: "Jumlah / Waktu", en: "Quantity / Time", bn: "পরিমাণ/সময়" },
      items: [
        { ja: "個", vi: "cái", id: "buah", en: "piece(s)", bn: "টি", kana: "こ" },
        { ja: "本", vi: "cái (dài)", id: "batang", en: "stick(s)", bn: "টি", kana: "ほん" },
        { ja: "枚", vi: "tờ", id: "lembar", en: "sheet(s)", bn: "টুকরা", kana: "まい" },
        { ja: "箱", vi: "hộp", id: "kotak", en: "box(es)", bn: "বাক্স", kana: "はこ" },
        { ja: "残り○個あります", vi: "Còn lại ○ cái", id: "Tersisa ○ buah", en: "○ remaining", bn: "○টি বাকি আছে", kana: "のこり○こあります" },
        { ja: "○時に終わります", vi: "Kết thúc lúc ○ giờ", id: "Selesai jam ○", en: "Finish at ○ o'clock", bn: "○টায় শেষ হবে", kana: "○じにおわります" },
        { ja: "遅れています", vi: "Đang chậm", id: "Sedang terlambat", en: "Running late", bn: "দেরি হচ্ছে", kana: "おくれています" },
        { ja: "予定通りです", vi: "Đúng kế hoạch", id: "Sesuai rencana", en: "On schedule", bn: "পরিকল্পনা অনুযায়ী", kana: "よていどおりです" },
      ]
    },
    {
      id: "machine", cat: "genba", icon: "⚙️",
      title: { ja: "設備・機械", vi: "Thiết bị / Máy móc", id: "Peralatan / Mesin", en: "Equipment / Machine", bn: "যন্ত্রপাতি" },
      items: [
        { ja: "機械が止まりました", vi: "Máy đã dừng", id: "Mesin berhenti", en: "Machine stopped", bn: "মেশিন বন্ধ হয়ে গেছে", kana: "きかいがとまりました" },
        { ja: "機械が動きません", vi: "Máy không chạy", id: "Mesin tidak berjalan", en: "Machine won't work", bn: "মেশিন কাজ করছে না", kana: "きかいがうごきません" },
        { ja: "音がおかしいです", vi: "Âm thanh lạ", id: "Bunyi aneh", en: "Strange noise", bn: "অদ্ভুত শব্দ হচ্ছে", kana: "おとがおかしいです" },
        { ja: "修理してください", vi: "Hãy sửa chữa", id: "Tolong perbaiki", en: "Please fix it", bn: "মেরামত করুন", kana: "しゅうりしてください" },
        { ja: "電源を切ってください", vi: "Hãy tắt nguồn điện", id: "Tolong matikan daya", en: "Please turn off power", bn: "বিদ্যুৎ বন্ধ করুন", kana: "でんげんをきってください" },
        { ja: "ボタンを押してください", vi: "Hãy nhấn nút", id: "Tolong tekan tombol", en: "Please press the button", bn: "বাটন চাপুন", kana: "ボタンをおしてください" },
      ]
    },
    {
      id: "5s", cat: "genba", icon: "✨",
      title: { ja: "5S・整理整頓", vi: "5S / Sắp xếp gọn gàng", id: "5S / Kerapian", en: "5S / Organization", bn: "5S/গোছানো" },
      items: [
        { ja: "整理してください", vi: "Hãy sắp xếp", id: "Tolong rapikan", en: "Please organize", bn: "গুছিয়ে রাখুন", kana: "せいりしてください" },
        { ja: "掃除してください", vi: "Hãy dọn dẹp", id: "Tolong bersihkan", en: "Please clean up", bn: "পরিষ্কার করুন", kana: "そうじしてください" },
        { ja: "元の場所に戻してください", vi: "Hãy đặt lại chỗ cũ", id: "Tolong kembalikan ke tempat semula", en: "Please put it back", bn: "আগের জায়গায় রাখুন", kana: "もとのばしょにもどしてください" },
        { ja: "ゴミを捨ててください", vi: "Hãy vứt rác", id: "Tolong buang sampah", en: "Please throw away garbage", bn: "ময়লা ফেলুন", kana: "ゴミをすててください" },
      ]
    },
  ],

  // ========== ルール・カード ==========
  card: [
    {
      id: "rules_basic", cat: "rules", icon: "📋",
      title: { ja: "基本ルール", vi: "Quy tắc cơ bản", id: "Aturan dasar", en: "Basic Rules", bn: "মৌলিক নিয়ম" },
      items: [
        { jp: "遅刻・欠勤は必ず事前に連絡する\n無断欠勤は厳禁", tr: { vi: "Luôn báo trước khi đi muộn hoặc vắng mặt\nNghiêm cấm vắng mặt không báo", id: "Selalu beritahu sebelum terlambat atau absen\nDilarang keras absen tanpa pemberitahuan", en: "Always notify before being late/absent\nUnexcused absence strictly prohibited", bn: "দেরি/অনুপস্থিতির আগেই সবসময় জানাবেন\nবিনা নোটিশে অনুপস্থিতি কঠোরভাবে নিষিদ্ধ" }, note: null },
        { jp: "飲酒しての出勤・作業は禁止\n→ 即解雇の対象", tr: { vi: "Cấm đến làm việc hoặc làm việc khi say\n→ Sa thải ngay", id: "Dilarang bekerja dalam keadaan mabuk\n→ Pemecatan segera", en: "No working while drunk\n→ Immediate dismissal", bn: "মদ্যপ অবস্থায় কাজ নিষিদ্ধ\n→ তাৎক্ষণিক বরখাস্ত" }, note: null },
        { jp: "作業中はスマホ使用禁止\n清潔感のある服装で出勤する", tr: { vi: "Cấm dùng điện thoại khi làm việc\nĐến làm việc với trang phục sạch sẽ", id: "Dilarang pakai ponsel saat bekerja\nHadir dengan pakaian bersih", en: "No smartphone during work\nCome in clean neat clothing", bn: "কাজের সময় স্মার্টফোন নিষিদ্ধ\nপরিষ্কার পোশাকে কাজে আসুন" }, note: null },
      ]
    },
    {
      id: "security", cat: "rules", icon: "🔒",
      title: { ja: "情報・コンプライアンス", vi: "Thông tin / Tuân thủ", id: "Informasi / Kepatuhan", en: "Info / Compliance", bn: "তথ্য/কমপ্লায়েন্স" },
      items: [
        { jp: "職場・製品の写真をSNSに投稿しない\n→ 法的責任を問われる場合あり", tr: { vi: "Không đăng ảnh nơi làm việc/sản phẩm lên MXH\n→ Có thể bị truy cứu pháp lý", id: "Jangan posting foto tempat kerja di medsos\n→ Dapat dikenai tanggung jawab hukum", en: "Don't post workplace photos on SNS\n→ May result in legal liability", bn: "কর্মক্ষেত্রের ছবি সোশ্যাল মিডিয়ায় নয়\n→ আইনি দায় হতে পারে" }, note: null },
        { jp: "ハラスメント・差別は絶対禁止\nパワハラ・セクハラ・いじめすべて禁止", tr: { vi: "Tuyệt đối cấm quấy rối và phân biệt đối xử", id: "Pelecehan dan diskriminasi sama sekali dilarang", en: "Harassment & discrimination absolutely prohibited", bn: "হয়রানি ও বৈষম্য সম্পূর্ণ নিষিদ্ধ" }, note: null },
      ]
    },
    {
      id: "garbage_rules", cat: "life", icon: "🗑️",
      title: { ja: "ゴミ出しのルール", vi: "Quy tắc đổ rác", id: "Aturan buang sampah", en: "Garbage Rules", bn: "ময়লা ফেলার নিয়ম" },
      items: [
        { jp: "種類ごとに分ける\n燃えるゴミ・燃えないゴミ・資源ゴミ", tr: { vi: "Phân loại: cháy / không cháy / tái chế", id: "Pisahkan: mudah terbakar / tidak / daur ulang", en: "Separate: burnable / non-burnable / recyclable", bn: "আলাদা করুন: পোড়ানো যায়/যায় না/রিসাইকেল" }, note: null },
        { jp: "収集日の朝8時までに出す\n前日の夜は出さないこと", tr: { vi: "Trước 8 giờ sáng ngày thu gom\nKhông đổ tối hôm trước", id: "Sebelum jam 8 pagi hari pengangkutan\nJangan malam sebelumnya", en: "By 8am on collection day\nNot the night before", bn: "সকাল ৮টার আগে রাখুন\nআগের রাতে রাখবেন না" }, note: null },
      ]
    },
    {
      id: "bicycle", cat: "life", icon: "🚲",
      title: { ja: "自転車ルール（法律）", vi: "Luật xe đạp", id: "Aturan sepeda (hukum)", en: "Bicycle Laws", bn: "সাইকেল আইন" },
      items: [
        { jp: "飲酒運転は禁止\n（懲役5年・罰金100万円）\n2024年11月から罰則強化", tr: { vi: "Cấm lái xe khi say\n(Tù 5 năm / 1 triệu yên)\nTăng cường từ 11/2024", id: "Dilarang berkendara mabuk\n(5 tahun / 1 juta yen)\nDiperketat November 2024", en: "No drunk cycling\n(5 yrs / ¥1M fine)\nStrengthened Nov 2024", bn: "মদ্যপ সাইকেল নিষিদ্ধ\n(৫ বছর/১০ লাখ ইয়েন)\nনভেম্বর ২০২৪ থেকে কঠোর" }, note: null },
        { jp: "スマホ・イヤホンしながら運転禁止\n（懲役6か月・罰金10万円）", tr: { vi: "Cấm dùng điện thoại/tai nghe khi đi xe\n(6 tháng / 100.000 yên)", id: "Dilarang ponsel/earphone saat berkendara\n(6 bulan / 100.000 yen)", en: "No phone/earphone while cycling\n(6 months / ¥100K)", bn: "ফোন/ইয়ারফোন সহ সাইকেল নিষিদ্ধ\n(৬ মাস/১ লাখ ইয়েন)" }, note: null },
        { jp: "夜間はライトを点灯\nヘルメット着用（努力義務）", tr: { vi: "Bật đèn ban đêm\nĐội mũ bảo hiểm (nỗ lực)", id: "Nyalakan lampu malam\nPakai helm (upaya)", en: "Lights on at night\nWear helmet (effort)", bn: "রাতে লাইট জ্বালুন\nহেলমেট পরুন (প্রচেষ্টা)" }, note: null },
      ]
    },
    {
      id: "noise", cat: "life", icon: "🔊",
      title: { ja: "近隣マナー", vi: "Phép lịch sự với hàng xóm", id: "Tata krama bertetangga", en: "Neighbor Manners", bn: "প্রতিবেশী আচরণ" },
      items: [
        { jp: "夜10時以降は静かにする\n音楽・テレビ・会話の音量を下げる", tr: { vi: "Yên lặng sau 10 giờ tối\nGiảm âm lượng nhạc, TV, tiếng nói", id: "Tenang setelah jam 10\nKecilkan volume musik, TV", en: "Quiet after 10pm\nLower music, TV, conversation", bn: "রাত ১০টার পর চুপ\nসঙ্গীত/টিভি কমান" }, note: null },
      ]
    },
    {
      id: "custom", cat: "custom", icon: "⚙️",
      title: { ja: "会社・現場のルール（カスタム）", vi: "Nội quy công ty / hiện trường", id: "Aturan perusahaan / lokasi", en: "Company / Site Rules", bn: "কোম্পানি/সাইটের নিয়ম" },
      items: [
        { jp: "御社のルールをここに追加できます\nお問い合わせ：トクシントラスト 羽根\n080-8374-1036", tr: { vi: "Có thể thêm nội quy công ty vào đây\nLiên hệ: Tokushin Trust - Hane\n080-8374-1036", id: "Peraturan perusahaan dapat ditambahkan\nHubungi: Tokushin Trust - Hane\n080-8374-1036", en: "Your company rules can be added here\nContact: Tokushin Trust - Hane\n080-8374-1036", bn: "কোম্পানির নিয়ম যোগ করা যাবে\nযোগাযোগ: Tokushin Trust - Hane\n080-8374-1036" }, note: null },
      ]
    },
  ]
};
