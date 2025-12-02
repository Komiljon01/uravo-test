import { renderNavbar } from "./modules/navbar.js";
import { renderOnboardingSteps } from "./modules/onboarding-process.js";
import { renderProblems } from "./modules/problems.js";
import { renderSavings } from "./modules/savings.js";

renderNavbar(".navbar__menu");
renderProblems(".problems__cards");
renderSavings(".savings__cards");
renderOnboardingSteps(".onboarding-process__cards");
