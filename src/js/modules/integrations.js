function updateIntegrationLine() {
  const container = document.querySelector(".integrations__cards");
  const cards = container.querySelectorAll(".integrations__card");

  if (cards.length < 2) return;

  const first = cards[0].getBoundingClientRect();
  const last = cards[cards.length - 1].getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const startX = first.left + first.width / 2;
  const endX = last.left + last.width / 2;

  const lineWidth = endX - startX;
  const offsetLeft = startX - containerRect.left;

  const line = container.querySelector(".integrations__cards-line");
  line.style.width = lineWidth + 3 + "px";
  line.style.left = offsetLeft - 1.5 + "px";
  line.style.transform = "none";
}

export function renderIntegrations() {
  updateIntegrationLine();
  window.addEventListener("resize", updateIntegrationLine);
}
