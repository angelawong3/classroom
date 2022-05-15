var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var liArray = [li1, li2, li3, li4];

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
li1.textContent = "Apple";
li2.textContent = "Pizza";
li3.textContent = "Dumplings";
li4.textContent = "Cupcakes";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list
favoriteEl.appendChild(listEl);
// can use a for-loop for this li1-li4
for (let index = 0; index < liArray.length; index++) {
  const item = liArray[index];

  listEl.appendChild(item);
}

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "padding: 20px; background-color: #333333;");
li1.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: red;"
);
li2.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: orange;"
);
li3.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: yellow;"
);
li4.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: green;"
);

// TODO: Add ordered list items containing four favorite foods
