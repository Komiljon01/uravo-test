import { renderClients } from "./modules/clients.js";
import { renderIntegrations } from "./modules/integrations.js";
import { renderManagementFeatures } from "./modules/management-features.js";
import { renderNavbar } from "./modules/navbar.js";
import { renderOnboardingSteps } from "./modules/onboarding-process.js";
import { renderProblems } from "./modules/problems.js";
import { renderSavings } from "./modules/savings.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar(".navbar__menu");
  renderProblems(".problems__cards");
  renderSavings(".savings__cards");
  renderOnboardingSteps(".onboarding-process__cards");
  renderClients(".clients__cards");
  renderManagementFeatures(".management-features__cards");
  renderIntegrations();
});
