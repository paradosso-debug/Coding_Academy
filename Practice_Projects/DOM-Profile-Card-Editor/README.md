# 02 — Profile Card Editor (Edit/View Mode)

## What you’re building
A common real-world UI pattern:
- A profile card shows current user info (name, bio, status)
- You can toggle into **Edit Mode**
- You can **Save** changes (updates the DOM)
- You can **Cancel** changes (revert back)

---

## DOM methods used (and why)

### `getElementById()` / `querySelector()`
Select the form elements (inputs/buttons) and the display elements (name/bio/status).

### `addEventListener("click" / "submit")`
React to user actions:
- clicking Edit/Save/Cancel
- submitting the form

### `textContent`
Update the visible profile card (name, bio, status) safely.

### `classList.add()` / `classList.remove()`
Show/hide UI sections:
- hide the form in view mode
- show the form in edit mode

---

## Skills you’re practicing
✅ Managing UI state (view vs edit)  
✅ Form handling (read values, update UI)  
✅ Clean DOM updates (display always matches “data”)
