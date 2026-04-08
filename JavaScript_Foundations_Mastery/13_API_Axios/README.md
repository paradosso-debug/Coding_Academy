# 12 -- API Mini Tasks (Axios CDN + async / await)

In Unit 11 you learned how APIs work using `fetch`.

Now we level up again 🚀

This lesson introduces **Axios** while reinforcing the SAME API
thinking:

- Requests
- JSON reading
- Objects vs Arrays
- DOM updates
- Error handling

Axios does NOT replace fetch --- it simply reduces friction for
beginners.

---

## 1. Why Axios Exists

With `fetch`, beginners must manually:

- convert responses using `response.json()`
- check `response.ok`
- write extra boilerplate

Axios simplifies this.

Analogy 🪣

fetch = carrying water with your hands\
Axios = using a bucket with a handle

Both work --- Axios just makes things smoother.

---

## 2. Why Axios Matters

You will use Axios when:

- Building dashboards with live data
- Loading playlists or media
- Showing search results
- Working with APIs inside TuneShelf
- Creating production-style projects

Axios helps you focus on **logic instead of boilerplate**.

---

## 3. Fetch vs Axios --- Key Differences

Feature fetch Axios

---

JSON parsing Manual (`response.json()`) Automatic
Error handling Manual check Automatic
Throws on 404/500 ❌ No ✅ Yes
Syntax length Longer Shorter
Beginner friendly ⚠️ Moderate ✅ High

---

## 4. Loading Axios with CDN

We include Axios using a script tag:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

After this loads:

- `axios` is available globally
- No install needed
- Perfect for beginner projects

---

## 5. async / await with Axios

Standard pattern:

```js
async function getData() {
  try {
    const response = await axios.get("API_URL");
    console.log(response.data);
  } catch (error) {
    console.log("Request failed:", error);
  }
}
```

Key ideas:

- `async` allows `await`
- `await` pauses execution
- `response.data` is already parsed JSON
- `try/catch` handles HTTP + network errors

---

## 6. Understanding the Symbols

    axios.get() → sends request
    response.data → parsed API result
    async → enables await
    await → pauses until response returns
    try/catch → safe error handling

---

## 7. Practice Tasks Overview

We build three widgets on one page.

Each follows this flow:

1.  User clicks a button
2.  Show loading message
3.  Call API with Axios
4.  Read response.data
5.  Update DOM
6.  Handle errors

---

### TASK 1 --- Random Advice

API:

```js
https://api.adviceslip.com/advice
```

Key path:

```js
response.data.slip.advice;
```

---

### TASK 2 --- Random Cat Fact

API:

```js
https://catfact.ninja/fact
```

Key path:

```js
response.data.fact;
```

---

### TASK 3 --- NASA APOD (Random Space Photo)

API:

```js
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1
```

Important:

This API returns an ARRAY.

```js
const data = response.data[0];
```

Defensive rendering:

```js
if (data.media_type === "image") {
  // show image
} else {
  // show video link
}
```

---
