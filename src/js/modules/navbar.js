import { navbarLinks } from "../db/data.js";

export function renderNavbar(ulSelector) {
  const ul = document.querySelector(ulSelector);

  navbarLinks.forEach((link) => {
    const li = document.createElement("li");
    li.className = "navbar__menu-item";

    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.text;

    li.appendChild(a);
    ul.appendChild(li);
  });
}
