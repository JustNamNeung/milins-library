# Milin's Library

Fan-made website for Namneung Milin — Actress · Artist · iAM48
Not an official account.

---

## Project Structure

```
milins-library/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js      
│   └── app.js
└── images/
    └── (work photos, posters, product photos, ad/rating images ...)
```

---

## Editing Content

Everything is managed in `js/data.js` — one file, no build tools needed.

| Section | What to edit |
|---|---|
| Profile & Bio | `name_th`, `bio_th`, `bio_en` |
| Social links | `social` → handle & URL |
| Works | `works` array |
| แนะนำ (Recommended) | `upcoming` array — supports 3 card types: `video`, `product`, `placeholder` |
| The Fire hub | `thefire_hub` → `ost`, `content`, `reactions`, `spots`, `posters`, `promo`, `ratingads` |
| Fun Facts | `facts` array |
| Contact | `booking`, `collab` |

### แนะนำ (เดิมชื่อ Upcoming)

รายการใน `upcoming` แต่ละอันต้องมี `type` กำกับ:
- `video` — การ์ดคลิป YouTube ปกติ (ใช้ `youtube_id`)
- `product` — การ์ดสินค้า (ใช้ `image`, `price`, `platform`, `buy_url`)
- `placeholder` — การ์ดรอประกาศ (ใช้ `desc_th` / `desc_en` เท่านั้น ไม่มีลิงก์)

จะซ่อนรายการไหนชั่วคราว ให้ comment ทั้งอ็อบเจกต์ด้วย `//` แทนการลบทิ้ง จะได้เอากลับมาใช้ง่ายทีหลัง

### The Fire content hub

การ์ดผลงาน "โซ่รักอัคนี" ในหมวดผลงาน มีปุ่ม **"ดูคอนเทนต์ดีเทลทั้งหมดเกี่ยวกับซีรีย์"** กดแล้ว hub จะเลื่อนโผล่ขึ้นมาใต้กริดผลงาน (ไม่โชว์อัตโนมัติ เพราะซีรีย์จบแล้ว)

รูปในแท็บ **โปสเตอร์** และ **เรตติงและโฆษณา** คลิกแล้วจะเด้งเป็นรูปขยาย (lightbox) — แค่ใส่ `image` ในแต่ละรายการตามปกติ ระบบ lightbox ทำงานอัตโนมัติ ไม่ต้องตั้งค่าเพิ่ม

---

## Deployment

Deployed via Netlify with auto-deploy on every GitHub push.

```
git add .
git commit -m "update content"
git push
```

→ Live in ~1 minute ✨

---

Made with ♥ by fans, for fans
