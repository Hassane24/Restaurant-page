const content = document.getElementById("content");

// creating the header
const header = document.createElement("div");
header.classList.add("header");
const restaurantName = document.createElement("div");
restaurantName.textContent = "Krusty Krab Restaurant";
const home = document.createElement("div");
home.textContent = "Home";
const menu = document.createElement("div");
menu.textContent = "Menu";
const contact = document.createElement("div");
contact.textContent = "Contact";
restaurantName.classList.add("restaurant-name");
home.classList.add("header-items");
menu.classList.add("header-items");
contact.classList.add("header-items");
home.classList.add("home");
menu.classList.add("menuu");
contact.classList.add("contact");
header.append(restaurantName, home, menu, contact);

// creating the footer
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "Mr. Krab Made An Algerian Kid Make This Website For 0$";

// creating the about section
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
const aboutText = document.createElement("div");
aboutText.classList.add("about");
aboutText.textContent = "About";
const aboutDescription = document.createElement("div");
aboutDescription.classList.add("about-text");
aboutDescription.textContent +=
  "Here at Krusty Krab Restaurant We sell burgers at a good ";
const moneySpan = document.createElement("span");
moneySpan.textContent = "price";
aboutDescription.append(moneySpan);
aboutDescription.textContent += ` You know what I mean Lorem ipsum dolor sit amet
consectetur adipisicing elit. Voluptatum nobis ducimus atque
explicabo? Numquam molestiae culpa reprehenderit laudantium sed`;

mainContent.append(aboutText, aboutDescription);

function appendingInitialPage() {
  content.append(header);
  content.append(mainContent);
  content.append(footer);
}

function appendHeader() {
  content.append(header);
}

function appendFooter() {
  content.append(footer);
}

export { appendingInitialPage, appendHeader, appendFooter };
