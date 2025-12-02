import { onboardingSteps } from "../db/data.js";

export function renderOnboardingSteps(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error("Onboarding steps container not found!");
    return;
  }

  container.innerHTML = "";

  onboardingSteps.forEach((step, index) => {
    const stepNumber = index + 1;
    const paddedStep = stepNumber.toString().padStart(2, "0");

    const card = document.createElement("div");
    card.className = "onboarding-process__card";

    // Card number
    const cardNumber = document.createElement("div");
    cardNumber.className = "onboarding-process__card-number";

    const stepTitle = document.createElement("span");
    stepTitle.textContent = `Step ${paddedStep}`;

    const iconDiv = document.createElement("div");
    iconDiv.className = "onboarding-process__card-icon";
    const iconImg = document.createElement("img");
    iconImg.src = "./src/assets/icons/star.png";
    iconImg.alt = "star icon";
    iconDiv.appendChild(iconImg);

    const line = document.createElement("div");
    line.className = "line";

    cardNumber.appendChild(stepTitle);
    cardNumber.appendChild(iconDiv);
    cardNumber.appendChild(line);

    // Card content
    const cardContent = document.createElement("div");
    cardContent.className = "onboarding-process__card-content";

    const heading = document.createElement("h3");
    heading.textContent = step.title;

    const textWrapper = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = step.text;
    textWrapper.appendChild(paragraph);

    cardContent.appendChild(heading);
    cardContent.appendChild(textWrapper);

    card.appendChild(cardNumber);
    card.appendChild(cardContent);
    container.appendChild(card);
  });
}
