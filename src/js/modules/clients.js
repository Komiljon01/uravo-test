import { clientsCards } from "../db/data.js";

export function renderClients(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error("Clients container not found!");
    return;
  }

  container.innerHTML = "";

  clientsCards.forEach((client) => {
    const card = document.createElement("div");
    card.className = "clients__card";

    const imageDiv = document.createElement("div");
    imageDiv.className = "clients__card-image";
    const img = document.createElement("img");
    img.src = "./src/assets/images/girl-talking.png";
    img.alt = "Client testimonial image";
    imageDiv.appendChild(img);

    const contentDiv = document.createElement("div");
    contentDiv.className = "clients__card-content";

    const badgeDiv = document.createElement("div");
    badgeDiv.className = "clients__card-badge";
    const badgeSpan = document.createElement("span");
    badgeSpan.textContent = "=";
    const badgeP = document.createElement("p");
    badgeP.textContent = "SB Payment Service";
    badgeDiv.appendChild(badgeSpan);
    badgeDiv.appendChild(badgeP);

    const bottomDiv = document.createElement("div");
    bottomDiv.className = "clients__card-bottom";

    const heading = document.createElement("h3");
    heading.textContent = client.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = client.text;

    bottomDiv.appendChild(heading);
    bottomDiv.appendChild(paragraph);

    contentDiv.appendChild(badgeDiv);
    contentDiv.appendChild(bottomDiv);

    card.appendChild(imageDiv);
    card.appendChild(contentDiv);

    container.appendChild(card);
  });
}
