# Toast Notifications

A lightweight, customizable **toast notification system** built with **HTML, CSS, and JavaScript**.
This project demonstrates dynamic DOM manipulation, CSS animations, auto‑dismiss logic, and reusable UI component design.

---

## ✨ Features

* Multiple toast types: **Success, Error, Info**
* Smooth **slide‑in and slide‑out animations**
* **Auto‑dismiss timer** with customizable duration
* Clickable **close button** for manual removal
* Animated **progress bar countdown** synced with toast lifetime
* Clean and beginner‑friendly **vanilla JavaScript implementation**

---

## 📁 Project Structure

```
.
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How It Works

1. A button click calls the `showToast()` function.
2. JavaScript dynamically **creates a toast element**.
3. The toast is styled based on its **type** (success, error, info).
4. A **progress bar animation** runs for the same duration as the toast.
5. After the timer ends, the toast **slides out and is removed** from the DOM.

---

## 🧠 Key JavaScript Concepts Used

* `document.createElement()` for dynamic UI creation
* Template literals for inserting content
* `setTimeout()` for auto‑dismiss timing
* Event handling for manual close actions
* Separation of concerns between **HTML, CSS, and JS**

---

## 📸 Preview

Trigger different notifications using the buttons:

* **Success** → Green toast
* **Error** → Red toast
* **Info** → Blue toast

Each toast includes a **countdown progress bar** and disappears automatically.

---

## 🛠 Usage Example

```javascript
showToast("Saved successfully", "success", 3000);
showToast("There was an error", "error", 4000);
showToast("Information updated", "info", 5000);
```

### Parameters

| Parameter  | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `message`  | string | Text displayed inside the toast              |
| `type`     | string | `success`, `error`, or `info`                |
| `duration` | number | Time in **milliseconds** before auto‑dismiss |

---

## 🎯 Learning Goals

This project helps beginners understand:

* DOM manipulation
* UI feedback patterns in web apps
* Animation timing with CSS + JavaScript
* Building **reusable front‑end components**

---

## 🔮 Possible Improvements

* Convert into a reusable **Toast class or library**
* Add **sound notifications**
* Support **different screen positions**
* Implement **dark/light theme toggle**
* Integrate into a **dashboard or React app**

---

## 👨‍💻 Author

Built as part of a **JavaScript learning journey toward front‑end development mastery**.

---

## 📄 License

This project is open‑source and free to use for learning purposes.
