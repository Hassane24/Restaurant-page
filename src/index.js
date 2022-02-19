import { appendingInitialPage, appendHeader, appendFooter } from "./page-load";
import { appendContact } from "./contact";
import { appendAbout } from "./home";
import { appendMenu } from "./menu";

appendingInitialPage();

const home = document.querySelector(".home");
const menu = document.querySelector(".menuu");
const contact = document.querySelector(".contact");

contact.addEventListener("click", removeAndAppendContact);
home.addEventListener("click", removeAndAppendAbout);
menu.addEventListener("click", removeAndAppendMenu);

function removeAndAppendContact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  home.classList.remove("active");
  contact.classList.add("active");
  menu.classList.remove("active");
  appendHeader();
  appendContact();
  appendFooter();
}

function removeAndAppendAbout() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  home.classList.add("active");
  contact.classList.remove("active");
  menu.classList.remove("active");
  appendHeader();
  appendAbout();
  appendFooter();
}

function removeAndAppendMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  home.classList.remove("active");
  contact.classList.remove("active");
  menu.classList.add("active");
  appendHeader();
  appendMenu();
  appendFooter();
}
