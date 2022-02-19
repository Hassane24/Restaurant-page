const content = document.getElementById("content");

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

const contact = document.createElement("div");
contact.classList.add("contact");

const phone = document.createElement("div");
phone.classList.add("phone");
phone.textContent = "Phone";

const number = document.createElement("div");
number.classList.add("font");
number.textContent = "123-123-123";

const address = document.createElement("div");
address.classList.add("phone");
address.textContent = "Address";

const bikini = document.createElement("div");
bikini.classList.add("font");
bikini.textContent = "Bikini Bottom";

contact.append(phone);
contact.append(number);
contact.append(address);
contact.append(bikini);

mainContent.append(contact);
function appendContact() {
  content.append(mainContent);
}

export { appendContact };
