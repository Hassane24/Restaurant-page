const content = document.getElementById("content");

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

const menu = document.createElement("div");
menu.classList.add("menu");

const menuText = document.createElement("div");
menuText.classList.add("menu-text");
menuText.textContent = "Menu";
menu.append(menuText);

// first item

const menuItem = document.createElement("div");
menuItem.classList.add("menu-item");

const imgContainer = document.createElement("div");
imgContainer.classList.add("image");

const img = document.createElement("img");
img.src = "images/krabby-patty.png";
imgContainer.append(img);

const price = document.createElement("div");
price.classList.add("price");

const itemName = document.createElement("p");
itemName.classList.add("name");
itemName.textContent = "Krabby Patty: 2$";

const description = document.createElement("p");
description.classList.add("description");
description.textContent = "Burger made by SpongBob (BEST CHEF)";

price.append(itemName, description);
menuItem.append(imgContainer, price);
menu.append(menuItem);

// second item

const menuItem1 = document.createElement("div");
menuItem1.classList.add("menu-item");

const imgContainer1 = document.createElement("div");
imgContainer1.classList.add("image");

const img1 = document.createElement("img");
img1.src = "images/Patty_Hype.png";
imgContainer1.append(img1);

const price1 = document.createElement("div");
price1.classList.add("price");

const itemName1 = document.createElement("p");
itemName1.classList.add("name");
itemName1.textContent = "Krabby Patty: 20$";

const description1 = document.createElement("p");
description1.classList.add("description");
description1.textContent = `Colored Burger made by SpongBob (BEST CHEF) 10x the price
because it's colored also`;

price1.append(itemName1, description1);
menuItem1.append(imgContainer1, price1);
menu.append(menuItem1);

// third item

const menuItem2 = document.createElement("div");
menuItem2.classList.add("menu-item");

const imgContainer2 = document.createElement("div");
imgContainer2.classList.add("image");

const img2 = document.createElement("img");
img2.src = "images/classy.jpeg";
imgContainer2.append(img2);

const price2 = document.createElement("div");
price2.classList.add("price");

const itemName2 = document.createElement("p");
itemName2.classList.add("name");
itemName2.textContent = "Krabby Patty: the price is CLASS";

const description2 = document.createElement("p");
description2.classList.add("description");
description2.textContent = `Burger made by SpongBob (BEST CHEF)`;

price2.append(itemName2, description2);
menuItem2.append(imgContainer2, price2);
menu.append(menuItem2);

mainContent.append(menu);

function appendMenu() {
  content.append(mainContent);
}

export { appendMenu };
