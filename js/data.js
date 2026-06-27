

const SU = {

  // Info
  name_th: "น้ำหนึ่ง",
  name_en: "Namneung",
  fullname_th: "มิลิญ วาทินธนะกิจ",
  fullname_en: "Milin Watinthanakit",
  role_th: "นักแสดง · ศิลปิน",
  role_en: "Actress · Artist",
  agency_th: "INC Entertainment",
  agency_en: "INC Entertainment",
  birthday: "11 พ.ย. 1996",
  nationality_th: "ไทย",
  nationality_en: "Thai",
  status_th: "พร้อมรับงาน",
  status_en: "Available",
  tags: ["Actress", "Content Creator", "Idol", "Singer"],

  // Basic Info
  name_info: [
    { label_th: "ชื่อจริง", label_en: "Full Name", value_th: "มิลิญ วาทินธนะกิจ", value_en: "Milin Watinthanakit" },
    { label_th: "วันเกิด",  label_en: "Birthday",  value_th: "11 พ.ย. 1996",       value_en: "11 Nov 1996" },
    { label_th: "Fandom",   label_en: "Fandom",    value_th: "มิลิญแลนด์",          value_en: "Milinland" },
  ],

  bio_th: "น้ำหนึ่ง มิลิญ วาทินธนะกิจ อดีตสมาชิก BNK48 ปัจจุบันเป็นนักแสดงและศิลปินที่มีผลงานครอบคลุมทั้งด้านเพลง มิวสิกวิดีโอ และการแสดง",
  bio_en: "Namneung Milin Watinthanakit is a former member of BNK48. She is currently a Thai actress and artist, with her work spanning music, music videos and acting.",

  // Timeline
  timeline: [
    { year: 2017, th: "เดบิวต์ในฐานะสมาชิก BNK48",                    en: "Debuted as a member of BNK48" },
    { year: 2020, th: "ได้รับตำแหน่งเซ็นเตอร์ในซิงเกิลที่ 8",          en: "Selected as the center for the 8th single" },
    { year: 2022, th: "จบการศึกษาจาก BNK48",                           en: "Graduated from BNK48" },
    { year: 2023, th: "ก้าวสู่บทบาทนักแสดงและศิลปิน",                  en: "Stepped into her career as an actress and artist" },
    { year: 2025, th: "ร่วมแสดงในโปรเจกต์ 4 Elements",                 en: "Joined the 4 Elements project" },
  ],

  // Fun Facts 
  facts: [
    { icon: "ti-book",         th: "สำเร็จการศึกษาด้านวิทยาศาสตร์สิ่งแวดล้อมจากมหาวิทยาลัยธรรมศาสตร์", en: "Bachelor of Science in Environmental Science, Thammasat University" },
    { icon: "ti-mood-smile",   th: "เป็นคนค่อนข้างอินโทรเวิร์ตและชอบใช้เวลาเงียบ ๆ กับตัวเอง",         en: "An introvert who enjoys quiet time and personal space" },
    { icon: "ti-library",      th: "รักธรรมชาติ ชอบเข้าวัดทำบุญ และใช้เวลาว่างไปกับการอ่านหนังสือ",                                en: "Loves nature, making merit, and reading books." },
    { icon: "ti-leaf",         th: "ไม่ทานเนื้อสัตว์ใหญ่ เช่น หมูและเนื้อวัว",                        en: "Avoids eating red meat, such as pork and beef." },
    { icon: "ti-paw",          th: "มีสุนัขชื่อ \"ชาวี อัครสิงห์บุรีเดโชโชติช่วงชัชวาล วาทินธนะกิจ\"", en: "Owns a dog named \"Chawee Akkhara Singburi Decho Chotechuangchatchawan Watinthanakit." },
    { icon: "ti-heart",        th: "คำว่า \"รัก\" ของน้ำหนึ่ง พิมพ์โดยกด Shift = ณํฏ",               en: "Namneung types the word \"love\" using Shift = ณํฏ" },
  ],

  // ผลงาน
  works: [

    // Series
    {
      category: "series", title_th: "เสน่หาวาโย", title_en: "The Air", year: 2026,
      image: "https://img.youtube.com/vi/2w3RL-3WxVM/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=2w3RL-3WxVM",
      platforms: [{ name: "iQIYI", url: "https://www.iq.com/album/the-air-4-elements-2026-z2cvnrjpt9?lang=en_us" }],
    },
    {
      category: "series", title_th: "นทีร้อยเล่ห์", title_en: "The Water", year: 2026,
      image: "https://img.youtube.com/vi/rDNsXiN9S74/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=rDNsXiN9S74",
      platforms: [{ name: "iQIYI", url: "https://www.iq.com/album/the-water-4-elements-2026-2fxxh4am0kx?lang=en_us" }],
    },
    {
      category: "series", title_th: "วิวาห์ปฐพี", title_en: "The Earth", year: 2026,
      image: "https://img.youtube.com/vi/8ZEzEJQ3yqU/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=8ZEzEJQ3yqU",
      platforms: [{ name: "iQIYI", url: "https://www.iq.com/album/the-earth-4-elements-2026-16vh6ho38tl?lang=en_us" }],
    },
    {
      category: "series", title_th: "รักปากแข็ง", title_en: "Somewhere Somehow", year: 2025,
      image: "https://img.youtube.com/vi/ZUotNR6SSsM/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=ZUotNR6SSsM",
      spinoffs: [
        { title_th: "พี่ต้า", title_en: "P'Ta", url: "https://www.youtube.com/watch?v=nShWNRl-WNI" },
      ],
    },

    // Movie
    {
      category: "movie", title_th: "The Cheese Sisters", title_en: "The Cheese Sisters", year: 2022,
      image: "https://img.youtube.com/vi/mFj0tS30IyE/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=mFj0tS30IyE",
      spinoffs: [
        { title_th: "Special Interview", title_en: "Special Interview", url: "https://www.youtube.com/watch?v=whhXS-YmexU" },
        { title_th: "MV ข้าง ๆ", title_en: "MV ข้าง ๆ", url: "https://youtu.be/yW6ef0ldOPA?si=uQ7poMlG-6d4zWRp" },
      ],
      platforms: [{ name: "Netflix", url: "https://www.netflix.com/th/title/81663409?source=35&fromWatch=true" }],
    },
    {
      category: "movie", title_th: "ผ้าผีบอก (The Fabric)", title_en: "ผ้าผีบอก (The Fabric)", year: 2022,
      image: "https://img.youtube.com/vi/qPz4aHaIJWo/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=qPz4aHaIJWo",
      platforms: [{ name: "Netflix", url: "https://www.netflix.com/th/title/81597478" }],
    },
    {
      category: "movie", title_th: "ไทบ้าน x BNK48 จากใจผู้สาวคนนี้", title_en: "ไทบ้าน x BNK48 จากใจผู้สาวคนนี้", year: 2020,
      image: "https://img.youtube.com/vi/fOqdaqINocg/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=fOqdaqINocg",
    },
    {
      category: "movie", title_th: "ที่ตรงนั้น มีฉันหรือเปล่า", title_en: "Where We Belong", year: 2019,
      image: "https://img.youtube.com/vi/oN4k4cNlmdw/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=oN4k4cNlmdw",
      spinoffs: [
        { title_th: "Me Before We", title_en: "Me Before We", url: "https://www.youtube.com/watch?v=Ij1bz2JYFuI" },
        { title_th: "Stratosphere", title_en: "Stratosphere", url: "https://www.youtube.com/watch?v=eu9IZvUxmb8" },
      ],
      platforms: [{ name: "Netflix", url: "https://www.netflix.com/th/title/81151163?source=35&fromWatch=true" }],
    },
  
    // MV
    {
      category: "mv", title_th: "Time Flies Cover by NAMNEUNG MILIN", title_en: "Time Flies Cover by NAMNEUNG MILIN", year: 2025,
      image: "https://img.youtube.com/vi/KljbGGdfc_s/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=KljbGGdfc_s",
      role: "singer",
    },
    {
      category: "mv", title_th: "สายตาของผมจะมองแค่คุณคนเดียว", title_en: "สายตาของผมจะมองแค่คุณคนเดียว", year: 2025,
      image: "https://img.youtube.com/vi/IHgmEpr6GXE/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=IHgmEpr6GXE",
      role: "singer",
    },
    {
      category: "mv", title_th: "with us, without - PUPÉ Jiradapa", title_en: "with us, without - PUPÉ Jiradapa", year: 2024,
      image: "https://img.youtube.com/vi/0YzQ0pHSSO4/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=0YzQ0pHSSO4",
      role: "actress",
      spinoffs: [
        { title_th: "Drama Ver.", title_en: "Drama Ver.", url: "https://www.youtube.com/watch?v=Rh_l2vqiI4I" },
      ],
    },
    {
      category: "mv", title_th: "Under the Sun", title_en: "Under the Sun", year: 2024,
      image: "https://img.youtube.com/vi/q4OzmUFYXjI/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=q4OzmUFYXjI",
      role: "singer",
    },
    {
      category: "mv", title_th: "แฟนเทสดี", title_en: "แฟนเทสดี", year: 2023,
      image: "https://img.youtube.com/vi/RHrgLUgTY6o/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=RHrgLUgTY6o&list=RDRHrgLUgTY6o&start_radio=1",
      role: "singer",
    },
    {
      category: "mv", title_th: "ซ้อมรอ - HAVE A NICE DAY", title_en: "ซ้อมรอ - HAVE A NICE DAY", year: 2023,
      image: "https://img.youtube.com/vi/uRxOLkq2S74/maxresdefault.jpg",
      youtube_url: "https://www.youtube.com/watch?v=uRxOLkq2S74",
      role: "actress",
    },

    // BNK48 Song
    { category: "bnk48", title_th: "ดั่งซากุระ ตลอดไป", title_en: "Sakura no Ki ni Narou", year: 2022, image: "https://img.youtube.com/vi/OOxFBnPrRKU/maxresdefault.jpg", youtube_url: "https://youtu.be/OOxFBnPrRKU?si=JLiTrg1BsHVNBH3y" },
    { category: "bnk48", title_th: "Pioneer", title_en: "Pioneer", year: 2022, image: "https://img.youtube.com/vi/rUmPtU3mBWY/maxresdefault.jpg", youtube_url: "https://youtu.be/rUmPtU3mBWY?si=iW007ocOTsBnInW_" },
    { category: "bnk48", title_th: "Jiwaru DAYS", title_en: "Jiwaru DAYS", year: 2022, image: "https://img.youtube.com/vi/TXFZtepXlzk/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=TXFZtepXlzk" },
    { category: "bnk48", title_th: "Believers", title_en: "Believers", year: 2022, image: "https://img.youtube.com/vi/6mZagYSymB4/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=6mZagYSymB4" },
    { category: "bnk48", title_th: "หมกกบ (OST. ผ้าผีบอก)", title_en: "Mok Kob (OST. The Fabric)", year: 2022, image: "https://img.youtube.com/vi/3basTFl8WFw/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=3basTFl8WFw" },
    { category: "bnk48", title_th: "Sayonara Crawl", title_en: "Sayonara Crawl", year: 2022, image: "https://img.youtube.com/vi/FppYrZtcAO0/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=FppYrZtcAO0" },
    { category: "bnk48", title_th: "สวัสดีปีใหม่", title_en: "Happy New Year", year: 2021, image: "https://img.youtube.com/vi/om8vJGrrRvs/maxresdefault.jpg", youtube_url: "https://youtu.be/om8vJGrrRvs?si=l9zvMtRAdfw81LrN" },
    { category: "bnk48", title_th: "High Tension (Namneung's Ver.)", title_en: "High Tension (Namneung's Ver.)", year: 2021, image: "https://img.youtube.com/vi/HA_Zg_SCfpQ/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=HA_Zg_SCfpQ" },
    { category: "bnk48", title_th: "ชอบเธอนะ", title_en: "Sukida Sukida Sukida", year: 2021, image: "https://img.youtube.com/vi/NzAqV54soaA/maxresdefault.jpg", youtube_url: "https://youtu.be/NzAqV54soaA?si=Rrlf3ankOZK9sug1" },
    { category: "bnk48", title_th: "ดีอะ", title_en: "D.AAA", year: 2021, image: "https://img.youtube.com/vi/I64YL2424eU/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=I64YL2424eU" },
    { category: "bnk48", title_th: "Heavy Rotation", title_en: "Heavy Rotation", year: 2020, image: "https://img.youtube.com/vi/d1lgOyQvkug/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=d1lgOyQvkug" },
    { category: "bnk48", title_th: "หัวใจใกล้กัน (อีสาน เวอร์ชั่น)", title_en: "Touch by Heart (Isan Ver.)", year: 2020, image: "https://img.youtube.com/vi/CYpWLjYKyE0/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=CYpWLjYKyE0" },
    { category: "bnk48", title_th: "หัวใจใกล้กัน (English Ver.)", title_en: "Touch by Heart (English Ver.)", year: 2020, image: "https://img.youtube.com/vi/5ZOzZPzZ-zg/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=5ZOzZPzZ-zg" },
    { category: "bnk48", title_th: "หัวใจใกล้กัน [Special Ver.] ", title_en: "Touch by Heart [Special Ver.]", year: 2020, image: "https://img.youtube.com/vi/T5ZkqCbbI2c/maxresdefault.jpg", youtube_url: "https://youtu.be/T5ZkqCbbI2c?si=9EIknsuF8mP3Hsnh" },
    { category: "bnk48", title_th: "High Tension (Dance Practice)", title_en: "High Tension (Dance Practice)", year: 2020, image: "https://img.youtube.com/vi/QG5VNQuZGLQ/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=QG5VNQuZGLQ" },
    { category: "bnk48", title_th: "High Tension", title_en: "High Tension", year: 2020, image: "https://img.youtube.com/vi/_jmHOW6X4V0/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=_jmHOW6X4V0" },
    { category: "bnk48", title_th: "โดดดิด่ง (Dance Practice)", title_en: "Dode di dong (Dance Practice)", year: 2020, image: "https://img.youtube.com/vi/lcPpC9CwLNk/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=lcPpC9CwLNk" },
    { category: "bnk48", title_th: "โดดดิด่ง", title_en: "Dode di dong", year: 2020, image: "https://img.youtube.com/vi/Ek8itihPQgE/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=Ek8itihPQgE" },
    { category: "bnk48", title_th: "Jabaja", title_en: "Jabaja", year: 2019, image: "https://img.youtube.com/vi/WrRLfGZNu1E/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=WrRLfGZNu1E" },
    { category: "bnk48", title_th: "บ๊ายบาย...นายพลาสติก ", title_en: "Bye Bye ... MR.Plastic", year: 2019, image: "https://img.youtube.com/vi/Gho7MGWbfAA/maxresdefault.jpg", youtube_url: "https://youtu.be/Gho7MGWbfAA?si=GX3ehKQHmMCPVfh6" },
    { category: "bnk48", title_th: "Beginner", title_en: "Beginner", year: 2019, image: "https://img.youtube.com/vi/IptefJ9C4PY/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=IptefJ9C4PY" },
    { category: "bnk48", title_th: "BNK Festival", title_en: "BNK Festival", year: 2018, image: "https://img.youtube.com/vi/mo4l8f_VZXo/hqdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=mo4l8f_VZXo" },
    { category: "bnk48", title_th: "หมื่นเส้นทาง", title_en: "Yume e no Route", year: 2018, image: "https://img.youtube.com/vi/su_ZmVg0nw0/maxresdefault.jpg", youtube_url: "https://youtu.be/su_ZmVg0nw0?si=vDvYT65meh_8TFXK" },
    { category: "bnk48", title_th: "เธอคือ…เมโลดี้", title_en: "Kimi wa Melody", year: 2018, image: "https://img.youtube.com/vi/iByxlVvWrww/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=iByxlVvWrww" },
    { category: "bnk48", title_th: "RIVER", title_en: "RIVER", year: 2018, image: "https://img.youtube.com/vi/4TKCbe8jyRI/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=4TKCbe8jyRI" },
    { category: "bnk48", title_th: "ความทรงจำและคำอำลา", title_en: "Sakura no Hanabiratachi", year: 2018, image: "https://img.youtube.com/vi/jMa88SrDlYU/maxresdefault.jpg", youtube_url: "https://youtu.be/jMa88SrDlYU?si=yLJD7ah81vwk9tgw" },
    { category: "bnk48", title_th: "วันแรก", title_en: "Shonichi", year: 2018, image: "https://img.youtube.com/vi/IMx1ojx2fiE/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=IMx1ojx2fiE" },
    { category: "bnk48", title_th: "BNK48", title_en: "BNK48", year: 2017, image: "https://img.youtube.com/vi/1GFytjig8AE/maxresdefault.jpg", youtube_url: "https://youtu.be/1GFytjig8AE?si=hzwBU5xPX8df1C42" },
    { category: "bnk48", title_th: "คุกกี้เสี่ยงทาย", title_en: "Koisuru Fortune Cookie", year: 2017, image: "https://img.youtube.com/vi/mfqJyKm20Z4/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=mfqJyKm20Z4" },
    { category: "bnk48", title_th: "365 วันกับเครื่องบินกระดาษ", title_en: "365-Nichi no Kamihikouki", year: 2017, image: "https://img.youtube.com/vi/b51XaJl28tU/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=b51XaJl28tU" },
    { category: "bnk48", title_th: "ก็ชอบ ให้รู้ว่าชอบ", title_en: "Oogoe Diamond", year: 2017, image: "https://img.youtube.com/vi/TWZ-D0uliFQ/maxresdefault.jpg", youtube_url: "https://youtu.be/TWZ-D0uliFQ?si=y-CyTK0GyhcdywNL" },
    { category: "bnk48", title_th: "อยากจะได้พบเธอ", title_en: "Aitakatta", year: 2017, image: "https://img.youtube.com/vi/zdgemowocu8/maxresdefault.jpg", youtube_url: "https://www.youtube.com/watch?v=zdgemowocu8" },
  ],

    // รางวัล
  awards: [
    {
      year: 2022,
      title_th: "ลำดับที่ 4",
      title_en: "4th Place",
      event_th: "การเลือกตั้งทั่วไปเซ็มบัตสึบีเอ็นเคโฟร์ตีเอต ประจำซิงเกิลที่ 12",
      event_en: "BNK48 12th Single Senbatsu General Election",
      icon: "ti-trophy",
    },
    {
      year: 2020,
      title_th: "ลำดับที่ 10",
      title_en: "10th Place",
      event_th: "การเลือกตั้งทั่วไปเซ็มบัตสึบีเอ็นเคโฟร์ตีเอต ประจำซิงเกิลที่ 9",
      event_en: "BNK48 9th Single Senbatsu General Election",
      icon: "ti-trophy",
    },
    {
      year: 2019,
      title_th: "ลำดับที่ 10",
      title_en: "10th Place",
      event_th: "การเลือกตั้งทั่วไปเซ็มบัตสึบีเอ็นเคโฟร์ตีเอต ประจำซิงเกิลที่ 6",
      event_en: "BNK48 6th Single Senbatsu General Election",
      icon: "ti-trophy",
    },
  ],

  // ช่องทางโซเชียล 
  social: {
    instagram_main:  { handle: "@milinnn.d",       url: "https://www.instagram.com/milinnn.d/" },
    instagram_daily: { handle: "@with.namneung",   url: "https://www.instagram.com/with.namneung/" },
    facebook:        { handle: "Namneung Milin",   url: "https://www.facebook.com/bnk48official.namneung" },
    youtube:         { handle: "Milin D. Channel", url: "https://www.youtube.com/@Milind.channel" },
    x:               { handle: "@Milinyahhhh",     url: "https://x.com/Milinyahhhh" },
    tiktok:          { handle: "@namneung.ml",     url: "https://www.tiktok.com/@namneung.ml" },
  },

  hashtags_x:      ["NamneungMilinD"],
  hashtags_tiktok: ["NamneungMilinD"],

  // ติดต่อจ้างงาน 
  booking: {
    desc_th: "สนใจร่วมงานกับน้ำหนึ่ง ไม่ว่าจะเป็นงานพรีเซนเตอร์ ถ่ายโฆษณา อีเวนต์ หรือโปรเจกต์ต่าง ๆ \nสามารถติดต่อผ่านทีมงานต้นสังกัดได้โดยตรง",
    desc_en: "Interested in working with Namneung?\nFor commercials, presenter bookings, events or collaborations, please contact her management team directly.",
    email: "Milindt.work@gmail.com",
    line:  "@inkpr",
    tel:   "0806699146 (K.Ink)",
    agency_ig: { handle: "@inc_entertain", url: "https://www.instagram.com/inc_entertain/" },
    agency_x:  { handle: "@incent2015",    url: "https://x.com/incent2015" },
  },

  // Upcoming
  upcoming: [
    {
      category:    "series",
      title_th:    "โซ่รักอัคนี",
      title_en:    "The Fire",
      badge_th:    "Official Trailer",
      badge_en:    "Official Trailer",
      premiere_th: "ตอนแรก 11 ก.ค. 2569",
      premiere_en: "First Episode 11 July 2026",
      role_th:     "ไฟ อัจจิมา วาทินวณิช",
      role_en:     "Fai Atchima Watinwanit",
      platform:    "Ch7HD / iQIYI",
      youtube_id:  "U2ozG4r_HZw",
      youtube_url: "https://youtu.be/U2ozG4r_HZw?si=mD4k3nySapiMbgwZ",
      air_date: "2026-07-11",
      desc_th: "รับชมสดทางช่อง 7HD กด 35 ผ่านเว็บไซต์ Ch7HD หรือ TrueID และรับชมย้อนหลังได้ทาง BUGABOO.TV และ iQIYI",
      desc_en: "Watch live on Channel 7HD (Channel 35) via their official website or TrueID, and catch up on previous episodes on BUGABOO.TV and iQIYI.",
      watch_platforms: [
        { name: "Ch7HD Live", url: "https://www.ch7.com/live.html" },
        { name: "TrueID Live",           url: "https://tv.trueid.net/th-th/live/ch7-hd"},  
        { name: "iQIYI Uncut",  url: "" }, 
        { name: "BUGABOO.TV",       url: "" },
      ],
    },
    {
      category:    "mv",
      title_th:    "เร็วๆ นี้",
      title_en:    "Coming Soon",
      badge_th:    "New MV",
      badge_en:    "New MV",
      premiere_th: "TBC",
      premiere_en: "TBC",
      air_date:    "",
      youtube_id:  "",
      youtube_url: "",
      image:       "",
      platform:    "YouTube",
      role_th:     "น้ำหนึ่ง มิลิญ",
      role_en:     "Namneung Milin",
    },
  ],

  //  Collab (SERTIST) 
  collab: {
    friend_name_th: "แก้ว ปูเป้ โมบาย",
    friend_name_en: "Kaew Pupe Mobye",
    desc_th: "Sertist - YouTube / คอนเทนต์ร่วมกับเพื่อน · ติดต่อแยกจากต้นสังกัด",
    desc_en: "Sertist - YouTube / Content with friend · Separate from main agency",
    email: "sertist.office@gmail.com",
    tel:   "0661014622 (k.ploy)",
    social: {
      youtube:   { handle: "SERTIST",         url: "https://www.youtube.com/@sertistchannel" },
      tiktok:    { handle: "@sertist_channel", url: "https://www.tiktok.com/@sertist_channel?lang=en" },
      instagram: { handle: "@sertist_channel", url: "https://www.instagram.com/sertist_channel/" },
      facebook:  { handle: "Sertist channel",  url: "https://www.facebook.com/sertistchannel/" },
    },
  },

  // Milin Vlog! Vlog! 
  vlog: {
    channel_name: "Milin D. Channel",
    channel_url: "https://www.youtube.com/@Milind.channel",
    videos: [
      { youtube_id: "7sQu7HL1lwM", title_th: "เบื้องหลัง | Time Flies Cover", title_en: "Behind The Scenes | Time Flies Cover", thumb: "https://img.youtube.com/vi/7sQu7HL1lwM/hqdefault.jpg" },
      { youtube_id: "DdB2-kI1y3E", title_th: "Ep.19", title_en: "Ep.19", thumb: "https://img.youtube.com/vi/DdB2-kI1y3E/hqdefault.jpg" },
      { youtube_id: "c5mSKr4bcqo", title_th: "EP.18", title_en: "EP.18", thumb: "https://img.youtube.com/vi/c5mSKr4bcqo/hqdefault.jpg" },
    ],
  },

  // SERTIST
  sertist: {
    channel_name: "SERTIST",
    channel_url: "https://www.youtube.com/@sertistchannel",
    desc_th: "ช่อง YouTube ที่น้ำหนึ่งทำร่วมกับเพื่อนๆ แก้ว ปูเป้ และโมบาย",
    desc_en: "A YouTube channel created together with friends Kaew, Pupe and Mobye",
    videos: [
      { youtube_id: "h8mcNILmtgM", title_th: "[REACTION] Overture 4 Elements", title_en: "[REACTION] Overture 4 Elements", thumb: "https://img.youtube.com/vi/h8mcNILmtgM/hqdefault.jpg", playlist_url: "" },
      { youtube_id: "38axki2otzI", title_th: "SERTIST Talk x Wee (vmoho)", title_en: "SERTIST Talk x Wee (vmoho)", thumb: "https://img.youtube.com/vi/38axki2otzI/hqdefault.jpg", playlist_url: "https://www.youtube.com/playlist?list=PL-ZdboqjeU5L1MaT0v0A8YsbT3AjlCe5m" },
      { youtube_id: "xag-_vQZlKs", title_th: "Phuket Vlog ep.1", title_en: "Phuket Vlog ep.1", thumb: "https://img.youtube.com/vi/xag-_vQZlKs/hqdefault.jpg", playlist_url: "" },
    ],
  },

  // Namneung BNK48 (Idol Part)
  bnk48: {
    desc_th: "เรื่องราวและช่วงเวลาของน้ำหนึ่งในฐานะสมาชิก BNK48 ก่อนประกาศจบการศึกษาและเริ่มต้นบทใหม่ในเส้นทางนักแสดงและศิลปิน",
    desc_en: "Stories and memories from Namneung's journey as a member of BNK48 before graduating and beginning a new chapter as an actress and artist",
    mvs: [
      { youtube_id: "Ek8itihPQgE",  title_th: "โดดดิด่ง",                        title_en: "Dode di dong",                        youtube_url: "https://www.youtube.com/watch?v=Ek8itihPQgE" },
      { youtube_id: "_jmHOW6X4V0",  title_th: "High Tension",                    title_en: "High Tension",                    youtube_url: "https://www.youtube.com/watch?v=_jmHOW6X4V0" },
      { youtube_id: "HA_Zg_SCfpQ",  title_th: "High Tension (Namneung's Ver.)",  title_en: "High Tension (Namneung's Ver.)",  youtube_url: "https://www.youtube.com/watch?v=HA_Zg_SCfpQ" },
      { youtube_id: "diGaB364GgQ",  title_th: "หมกกบ x ระเบียบวาทะศิลป์", title_en: "Mok Kob (Live Performance)", youtube_url: "https://www.youtube.com/watch?v=diGaB364GgQ" },
      { youtube_id: "myirZJ_TmfE",  title_th: "BNK48 8th Single Songs Announcement Reaction", title_en: "BNK48 8th Single Songs Announcement Reaction", youtube_url: "https://www.youtube.com/watch?v=myirZJ_TmfE" },
    ],
    iam48: {
      desc_th: "ช่วงเวลาและคอนเทนต์ของน้ำหนึ่งบนแอป iAM48",
      desc_en: "Namneung's moments and content on iAM48",
      images: [
        { src: "images/i1.jpg", alt: "iAM48 รูปที่ 1" },
        { src: "images/am2.jpg", alt: "iAM48 รูปที่ 2" }
      ],
      video_id: "WlE5x2WaU68",
      ios_url: "https://apps.apple.com/th/app/iam48/id1440012960",
      android_url: "https://play.google.com/store/apps/details?id=app.bnk48official",
    },
  },

};
