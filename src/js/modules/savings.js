import { savingsCards } from "../db/data.js";

export function renderSavings(containerSelector) {
  const container = document.querySelector(containerSelector);

  container.innerHTML = "";

  savingsCards.forEach((cardData) => {
    const card = document.createElement("div");
    card.className = "savings__card";

    const cardTop = document.createElement("div");
    cardTop.className = "savings__card-top";
    const heading = document.createElement("h3");
    heading.textContent = cardData.heading;
    cardTop.appendChild(heading);

    const cardContent = document.createElement("div");
    cardContent.className = "savings__card-content";

    const statsTitleP = document.createElement("p");
    statsTitleP.textContent = cardData.title;
    cardContent.appendChild(statsTitleP);

    const cardBottom = document.createElement("div");
    cardBottom.className = "savings__card-bottom";

    const stats = document.createElement("div");
    stats.className = "savings__stats";

    const statsTop = document.createElement("div");
    statsTop.className = "savings__stats-top";
    const statsTitle = document.createElement("h4");
    statsTitle.textContent = cardData.statsTitle;
    statsTop.appendChild(statsTitle);

    const statsContent = document.createElement("div");
    statsContent.className = "savings__stats-content";
    const statsText = document.createElement("p");
    statsText.textContent = cardData.statsText;
    statsContent.appendChild(statsText);

    stats.appendChild(statsTop);
    stats.appendChild(statsContent);

    const arrowIcon = document.createElement("div");
    arrowIcon.className = "savings__arrow-icon";
    arrowIcon.innerHTML = `
      <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.7475 8.5575C0.5575 8.5575 0.3675 8.4875 0.2175 8.3375C-0.0725 8.0475 -0.0725 7.5675 0.2175 7.2775L3.2175 4.2775L0.2175 1.2775C-0.0725 0.9875 -0.0725 0.5075 0.2175 0.2175C0.5075 -0.0725 0.9875 -0.0725 1.2775 0.2175L4.8075 3.7475C5.0975 4.0375 5.0975 4.5175 4.8075 4.8075L1.2775 8.3375C1.1275 8.4875 0.9375 8.5575 0.7475 8.5575Z" fill="#4A9C99"/>
      </svg>
    `;

    const hours = document.createElement("div");
    hours.className = "savings__hours";
    const hoursText = document.createElement("p");
    hoursText.textContent = cardData.hours;
    hours.appendChild(hoursText);

    cardBottom.appendChild(stats);
    cardBottom.appendChild(arrowIcon);
    cardBottom.appendChild(hours);

    cardContent.appendChild(cardBottom);

    card.appendChild(cardTop);
    card.appendChild(cardContent);

    container.appendChild(card);
  });
}
