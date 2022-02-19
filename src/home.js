const content = document.getElementById("content");

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

const aboutText = document.createElement("div");
aboutText.classList.add("about");
aboutText.textContent = "About";

const aboutDescription = document.createElement("div");
aboutDescription.classList.add("about-text");
aboutDescription.textContent = `Here at Krusty Krab Restaurant We sell burgers at a good price You know what I mean Lorem ipsum dolor sit amet
consectetur adipisicing elit. Voluptatum nobis ducimus atque
explicabo? Numquam molestiae culpa reprehenderit laudantium sed`;

mainContent.append(aboutText, aboutDescription);

function appendAbout() {
  content.append(mainContent);
}

export { appendAbout };
