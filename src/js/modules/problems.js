import { problemsCards } from "../db/data.js";

export function renderProblems(problemsSelector) {
  const container = document.querySelector(problemsSelector);

  if (!container) {
    console.error("Problems container not found!");
    return;
  }

  problemsCards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "problem__card";

    const cardTop = document.createElement("div");
    cardTop.className = "problem__card-top";
    const title = document.createElement("h3");
    title.textContent = card.title;
    cardTop.appendChild(title);
    cardDiv.appendChild(cardTop);

    const ul = document.createElement("ul");
    ul.className = "problem__lists";

    card.lists.forEach((item) => {
      const li = document.createElement("li");
      li.className = "problem__list-item";
      li.textContent = item.text;
      ul.appendChild(li);
    });

    cardDiv.appendChild(ul);
    container.appendChild(cardDiv);
  });
}
