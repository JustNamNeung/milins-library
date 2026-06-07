# SU WORLD — Fan Site

เว็บแฟนไซต์ศิลปิน Su · Fan-made · Unofficial

---

## 📁 โครงสร้างไฟล์

```
su-world/
├── index.html        ← หน้าเว็บหลัก (ไม่ต้องแก้)
├── css/
│   └── style.css     ← สไตล์เว็บ
├── js/
│   ├── data.js       ← ⭐ แก้ข้อมูลที่นี่ไฟล์เดียว
│   └── app.js        ← โค้ดหลัก (ไม่ต้องแก้)
└── images/           ← ใส่รูปภาพที่นี่
    └── (ใส่รูปผลงาน เช่น work1.jpg, work2.jpg ...)
```

---

## ✏️ วิธีแก้ข้อมูล

เปิดไฟล์ `js/data.js` แก้ข้อมูลที่ต้องการ:

- **ชื่อ / ประวัติ** → แก้ส่วน `name_th`, `bio_th`, `bio_en` ฯลฯ
- **Social links** → แก้ส่วน `social` ใส่ handle และ URL จริง
- **ผลงาน** → เพิ่ม/ลบ object ใน `works` array
- **Facts** → เพิ่ม/ลบ object ใน `facts` array
- **ติดต่อ** → แก้ส่วน `booking` และ `collab`
- **Hashtags** → แก้ `hashtags_x` และ `hashtags_tiktok`

---

## 🖼️ วิธีใส่รูปภาพ

1. นำรูปใส่ในโฟลเดอร์ `images/`
2. ใน `data.js` ตรงผลงาน ใส่ path เช่น `image: "images/seriesA.jpg"`
3. รูปโปรไฟล์ hero: แก้ใน `index.html` ส่วน `<div class="hero-photo">`

---

## 🚀 วิธี Deploy ขึ้น Netlify (ฟรี)

1. ไปที่ **netlify.com** → Sign up ด้วย Google account
2. กด **"Add new site"** → **"Deploy manually"**
3. **ลากโฟลเดอร์ `su-world` ทั้งโฟลเดอร์** วางในช่องที่กำหนด
4. รอ 30 วินาที → ได้ URL เช่น `su-world.netlify.app`

### อัปเดตเว็บในอนาคต
1. แก้ไฟล์ใน `su-world/` บนเครื่อง
2. ไปที่ Netlify → เลือก site → **"Deploys"** → ลากโฟลเดอร์ใหม่วางอีกครั้ง

---

## 🌐 Custom Domain (ถ้าอยากได้ชื่อ domain เอง)
- ซื้อ domain เช่น `suworld.com` จาก Namecheap หรือ Google Domains
- ตั้งค่าใน Netlify → Site settings → Domain management → Add custom domain

---

Made with ♥ for Su · Fan-made · Unofficial
