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
│   ├── data.js       ← ⭐ edit content here
│   └── app.js
└── images/
    └── (work1.jpg, work2.jpg ...)
```

---

## Editing Content

Everything is managed in `js/data.js` — one file, no build tools needed.

| Section | What to edit |
|---|---|
| Profile & Bio | `name_th`, `bio_th`, `bio_en` |
| Social links | `social` → handle & URL |
| Works | `works` array |
| Upcoming | `upcoming` array |
| Fun Facts | `facts` array |
| Contact | `booking`, `collab` |

---

## Deployment

Deployed via Vercel with auto-deploy on every GitHub push.

```
git add .
git commit -m "update content"
git push
```

→ Live in ~30 seconds ✨

---

Made with ♥ by fans, for fans
