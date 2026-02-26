const contacts = [
  { name: "Tony", phone: "555-555-555", isfavorite: false },
  { name: "Mika", phone: "555-555-222", isfavorite: true },
];

console.log("All contacts", contacts.length);
console.log("First contact", contacts[0].name);

contacts[0].isfavorite = true;

contacts.push({
  name: "Tom",
  phone: "333-333-333",
  isfavorite: true,
});

console.log("Updated Array of Objects", contacts);
