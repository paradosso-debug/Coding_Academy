const mainTitleEl = document.getElementById("mainTitle");
const descriptionEl = document.querySelector("#description");
const itemListEl = document.querySelector("#itemList");

mainTitleEl.textContent = "DOM Practice - Updated by JS";
descriptionEl.textContent =
  "This card was updated dynamically using JS DOM manipulation";

mainTitleEl.style.color = "#FF99FF";

const mainCardEl = document.getElementById("mainCard");
mainCardEl.style.backgroundColor = "blue";

mainCardEl.classList.add("highlight-card");

const newItem = document.createElement("li");

newItem.textContent = "4 New List Item";

itemListEl.appendChild(newItem);

const removeItem = itemListEl.querySelector("li");
if (removeItem) {
  removeItem.remove();
}
