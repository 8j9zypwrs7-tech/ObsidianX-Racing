/* OBSIDIANX RACING — complete shared JavaScript */

const SITE_CONFIG = {
  raceDate: "2026-12-01T00:00:00Z",
  teamEmail: "obsidianxracing@gmail.com",
  instagramUrl: "https://www.instagram.com/obsidianx_racing/",
  linkedinUrl: "",
};

function buildHeader() {
  const headerTarget = document.querySelector("[data-site-header]");
  if (!headerTarget) return;

  headerTarget.innerHTML = `
    <header class="site-header">
      <div class="shell nav-inner">
        <a class="brand" href="index.html" aria-label="ObsidianX Racing home">
          <span class="brand-logo-wrap">
            <img src="assets/logo.jpg" alt="ObsidianX Racing square logo">
          </span>
          <span class="brand-name">OBSIDIANX <b>RACING</b></span>
          <span class="nav-status" aria-hidden="true"><i></i><i></i><i></i></span>
        </a>

        <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false">
          <span></span><span></span>
        </button>

        <nav class="nav-links" aria-label="Main navigation">
          <a href="team.html">Team</a>
          <a href="partners.html">Partners</a>
          <a class="nav-contact" href="contact.html">Contact</a>
        </nav>
      </div>
    </header>
  `;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  headerTarget.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const menuButton = headerTarget.querySelector(".menu-button");
  const navigation = headerTarget.querySelector(".nav-links");

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

function buildFooter() {
  const footerTarget = document.querySelector("[data-site-footer]");
  if (!footerTarget) return;

  const socialLinks = [
    ["Instagram", SITE_CONFIG.instagramUrl],
    ["LinkedIn", SITE_CONFIG.linkedinUrl],
  ].filter(([, url]) => url);

  const footerMiddle = socialLinks.length
    ? `<div class="footer-socials">${socialLinks
        .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`)
        .join("")}</div>`
    : "<p>Student-led. Data-driven. Built to race.</p>";

  footerTarget.innerHTML = `
    <footer class="footer">
      <div class="shell footer-inner">
        <a class="footer-brand" href="index.html">
          <img src="assets/logo.jpg" alt="">
          <strong>OBSIDIANX <span>RACING</span></strong>
        </a>
        ${footerMiddle}
        <p>© ${new Date().getFullYear()} ObsidianX Racing</p>
      </div>
    </footer>
  `;
}

function addRacingDetails() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="race-frame" aria-hidden="true">
      <span class="speed-index">OX / RACE SPEC / 20M</span>
    </div>`,
  );

  document.querySelectorAll("main .section").forEach((section, index) => {
    section.classList.add("motif-section");

    if (!section.querySelector(".apex-marker")) {
      const marker = document.createElement("span");
      marker.className = "apex-marker";
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = `Sector ${String(index + 1).padStart(2, "0")}`;
      section.appendChild(marker);
    }
  });

  document.querySelectorAll(".page-hero").forEach((hero) => {
    hero.insertAdjacentHTML(
      "beforeend",
      '<span class="track-gauge" aria-hidden="true">START GRID&nbsp;&nbsp; 00 — 20M &nbsp;&nbsp;FINISH</span>',
    );
  });

  document.querySelectorAll(".dark-section, .car-teaser").forEach((section) => {
    section.insertAdjacentHTML("beforeend", '<span class="tyre-tread" aria-hidden="true"></span>');
  });
}

function startCountdowns() {
  const countdowns = document.querySelectorAll("[data-countdown]");
  if (!countdowns.length) return;

  const target = new Date(SITE_CONFIG.raceDate).getTime();

  const update = () => {
    const remaining = Math.max(0, target - Date.now());
    const values = {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining / 3600000) % 24),
      minutes: Math.floor((remaining / 60000) % 60),
      seconds: Math.floor((remaining / 1000) % 60),
    };

    countdowns.forEach((countdown) => {
      Object.entries(values).forEach(([unit, value]) => {
        const output = countdown.querySelector(`[data-${unit}]`);
        if (output) output.textContent = String(value).padStart(2, "0");
      });
    });
  };

  update();
  window.setInterval(update, 1000);
}

function initialiseContactLinks() {
  document.querySelectorAll("[data-team-email]").forEach((link) => {
    if (SITE_CONFIG.teamEmail) {
      link.textContent = SITE_CONFIG.teamEmail;
      link.href = `mailto:${SITE_CONFIG.teamEmail}`;
    } else {
      link.textContent = "Email address coming soon";
      link.removeAttribute("href");
      link.classList.add("contact-placeholder");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  addRacingDetails();
  startCountdowns();
  initialiseContactLinks();
});
