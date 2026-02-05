# 01 – Variables

# 📘 Variables & Scope

- What variables are
- Global Scope 🌎
- Function Scope 🏠
- Block Scope 📦
- Differences between **var**, **let**, and **const**
- Reassignment rules

---

## What are variables?

Think of a **variable** like a **labeled box** or **sticky note** in your room.

- The **label** is the variable name (example: `firstName`).
- The **thing inside** is the value (example: `"Hanna"`).
- You can **look at** what’s inside any time.
- You can **change what’s inside** (if the box is a `let`).

In JavaScript, variables are how we:

- Remember information
- Reuse values
- Do math
- Build messages for the user

Example:

```js
let name = "John";
```

Think of a variable like a labeled box 📦:

- `name` → label
- `"John"` → value inside the box

---

# 🌎 Global Scope

Variables declared **outside** functions or blocks are global.

```js
let siteName = "LetPhil";
```

✅ Accessible everywhere in your program.

---

# 🏠 Function Scope

Variables declared **inside a function** only exist inside that function.

```js
function greet() {
  var message = "Hello!";
}
```

❌ You cannot use `message` outside the function.

---

# 📦 Block Scope

A block is anything inside `{ }` like:

- if statements
- loops
- event listeners

```js
if (true) {
  let text = "Hi";
}
```

`text` only exists inside the block.

---

# 📊 Scope + Variable Behavior Chart

| Keyword   | Global Scope 🌎 | Function Scope 🏠 | Block Scope 📦 | Can Reassign? 🔄 | Can Redeclare? ♻️ | Beginner Notes                       |
| --------- | --------------- | ----------------- | -------------- | ---------------- | ----------------- | ------------------------------------ |
| **var**   | ✅ Yes          | ✅ Yes            | ❌ No          | ✅ Yes           | ✅ Yes            | Old JS. Avoid — ignores block scope. |
| **let**   | ✅ Yes          | ✅ Yes            | ✅ Yes         | ✅ Yes           | ❌ No             | Use when value changes.              |
| **const** | ✅ Yes          | ✅ Yes            | ✅ Yes         | ❌ No            | ❌ No             | Use by default. Safer & clearer.     |

---

# 🔄 Reassignment Examples

## let → can change

```js
let score = 10;
score = 20;
```

## const → cannot reassign

```js
const score = 10;
score = 20; // ❌ Error
```

BUT objects with const CAN change internally:

```js
const user = { name: "Ana" };
user.name = "Max"; // ✅ Allowed
```

---

# ⭐ Quick Summary

- **Global scope** → available everywhere 🌎
- **Function scope** → only inside the function 🏠
- **Block scope** → only inside `{ }` 📦
- **var** → old + confusing
- **let** → block-scoped + reassignable
- **const** → block-scoped + safest default
