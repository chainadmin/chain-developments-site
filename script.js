const links = [
  {
    title: "Chain Software Platform",
    description: "Primary platform access and official product updates.",
    url: "https://chainsoftwaregroup.com",
    badge: "Platform",
  },
  {
    title: "Last Safe Tile (Android)",
    description: "Download the Android app from Google Play.",
    url: "https://play.google.com/store/apps/details?id=com.lastsafetile.app&pcampaignid=web_share",
    badge: "Android",
  },
  {
    title: "Support Email",
    description: "Reach our support team directly.",
    url: "mailto:support@chainsoftwaregroup.com",
    badge: "Support",
  },
];

const linkCards = document.querySelector("#link-cards");

const cardMarkup = links
  .map(
    (link) => `
      <article class="card">
        <span class="badge">${link.badge}</span>
        <h3>${link.title}</h3>
        <p>${link.description}</p>
        <a href="${link.url}" target="_blank" rel="noopener">Visit link →</a>
      </article>
    `
  )
  .join("");

linkCards.innerHTML = cardMarkup;

const scrollButtons = document.querySelectorAll("[data-scroll]");

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");

const setStatus = (message, isError = false) => {
  statusEl.textContent = message;
  statusEl.style.color = isError ? "#b91c1c" : "#047857";
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  setStatus("Sending...");

  const formData = new FormData(form);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.error || "Something went wrong. Please try again.");
    }

    form.reset();
    setStatus("Thanks! Your message has been sent.");
  } catch (error) {
    setStatus(error.message, true);
  }
});
