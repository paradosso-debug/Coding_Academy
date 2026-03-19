# 10 -- localStorage Mini Tasks (Saving Small Pieces of State)

In Unit 09 you made the page react to user actions using events.

Now we introduce **persistent state** --- information that stays even
after refresh.

This unit focuses on:

- What `localStorage` is
- Saving small pieces of data
- Loading saved values on refresh
- Clearing stored data safely

No arrays-of-objects yet.\
No complex apps yet.\
Just **small pieces of state**.

---

## 1. What is localStorage?

`localStorage` is a built-in browser feature that saves data **inside
the user's browser** as key/value pairs.

Key ideas:

- Data stays after refresh
- Data stays after closing the tab
- Everything is stored as **strings**

Analogy:

A tiny personal locker 🔐 inside the browser:

- label = key
- stored item = value

Example:

```js
localStorage.setItem("favoriteColor", "purple");
const color = localStorage.getItem("favoriteColor");
localStorage.removeItem("favoriteColor");
```

---

You will use localStorage when:

- Saving theme preferences
- Remembering usernames
- Tracking small counters
- Restoring UI state on reload
- Preparing for larger apps later

localStorage makes your app feel persistent.

---

## 3. Important Rules (Beginner Level)

- Only **strings** are stored.
- Data is saved per website (origin).
- Good for small data like settings or names.

Later you will learn JSON for saving objects.

---

## 4. Understanding the Symbols

    localStorage → browser storage object
    .setItem(key, value) → save data
    .getItem(key) → read data
    .removeItem(key) → delete one item
    .clear() → remove ALL items (use carefully)

Example:

```js
localStorage.setItem("username", "Ana");
```

---

## 5. Practice Tasks Overview

Practice happens on a pre-built HTML card with:

- Name input + Save / Load / Clear buttons
- Visit counter display
- Theme toggle button

You will:

1.  Save a name using a key like "savedName".
2.  Load the name and show it in the page.
3.  Clear the name and update the UI.
4.  Create a visit counter:
    - Read "visitCount"
    - Increase it on each page load
    - Display the updated number.
5.  Save a theme preference ("cardTheme") and apply it on load.

Everything is visible and survives refresh.

---
