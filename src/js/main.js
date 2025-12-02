import { renderNavbar } from "./modules/navbar.js";
import { renderProblems } from "./modules/problems.js";
import { renderSavings } from "./modules/savings.js";

renderNavbar(".navbar__menu");
renderProblems(".problems__cards");
renderSavings(".savings__cards");
