# 11 -- API Mini Tasks (fetch + JSON)

In Unit 10 you saved small pieces of data using localStorage.

Now we level up again 🚀

Your app will begin talking to **external servers** using APIs.

This lesson focuses on:

- What an API is (plain language)
- How `fetch()` sends a request
- How JSON works
- Reading API responses safely
- Updating the DOM with API data
- Handling errors clearly

No Axios yet.\
No authentication logic.\
No advanced query systems.

Just small, real API calls and careful thinking.

---

## 1. What is an API?

API = Application Programming Interface.

Friendly definition:

An API is a **public door** a server opens so your website can ask for
information.

Your JavaScript sends a request → the server sends data back.

Real‑life analogy 🍽️:

- Menu → API options
- Waiter → API URL
- Order → your request
- Food → the response data
- Table → your JavaScript code

You do NOT control the kitchen --- you only ask and receive.

Example:

```js
fetch("https://api.adviceslip.com/advice");
```

---

## 2. Why APIs Matter

You will use APIs when:

- Showing live data in dashboards
- Loading playlists or media
- Displaying weather, quotes, or advice
- Building TuneShelf search features
- Creating real dynamic applications

APIs are what make apps feel alive.

---

## 3. What is JSON?

Most APIs return JSON.

JSON = JavaScript Object Notation.

It looks like JavaScript objects but is **just data**.

Example:

```js
{
  "slip": {
    "id": 42,
    "advice": "Be kind to yourself."
  }
}
```

Important:

- JSON is data, not executable code.
- JavaScript reads JSON and converts it into objects and arrays.

---

## 4. The fetch → JSON → data Flow (VERY IMPORTANT)

Every API request follows the same pattern.

### STEP A --- Make the request

```js
fetch("some-api-url");
```

You are asking the server for data.

---

### STEP B --- Convert to JSON

```js
.then(function (response) {
  return response.json();
})
```

The browser receives raw data.\
`.json()` converts it into usable JavaScript.

---

### STEP C --- Use the data

```js
.then(function (data) {
  console.log(data);
})
```

Always inspect the data first --- never guess its structure.

---

### STEP D --- Handle errors

```js
.catch(function (error) {
  console.log(error);
});
```

Errors happen when:

- Network fails
- Server is down
- URL is incorrect

Without `.catch()`, problems are hidden.

---

## 5. Understanding the Symbols

    fetch() → sends a request
    .then() → waits for the next step
    .json() → converts response to JavaScript
    .catch() → handles errors
    data → the parsed API result

---

## 6. How to Read an API Response (Most Important Skill)

Rule #1:

Always start with:

```js
console.log(data);
```

Ask yourself:

- Is it an object or array?
- What keys exist?
- What data do I actually need?

Example:

```js
data.slip.advice;
```

This is observation --- not guessing.

---

## 7. Practice Tasks Overview

We build three widgets on one page.

Each follows the same flow:

1.  User clicks a button
2.  Show loading message
3.  Fetch data
4.  Read JSON
5.  Update the DOM

---

### TASK 1 --- Random Advice

API:

```js
"https://api.adviceslip.com/advice";
```

Key path:

```js
data.slip.advice;
```

---

### TASK 2 --- Random Cat Fact

API:

```js
"https://catfact.ninja/fact";
```

Key path:

```js
data.fact;
```

---

### TASK 3 --- NASA Space Photo (APOD)

API:

```js
"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1";
```

Important:

This API returns an ARRAY.

```js
const apod = data[0];
```

Check media type:

```js
if (apod.media_type === "video") {
  // show link
} else {
  // show image
}
```

---
