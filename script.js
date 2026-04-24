const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

function activateSection(targetId, updateHash = true) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  navLinks.forEach((link) => {
    const isActive = link.dataset.target === targetId;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });

  sections.forEach((section) => {
    section.classList.toggle("is-active", section.id === targetId);
  });

  window.scrollTo(0, 0);

  if (updateHash) {
    window.history.replaceState(null, "", `#${targetId}`);
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => activateSection(link.dataset.target));
});

const initialHash = window.location.hash.replace("#", "");
if (initialHash) {
  activateSection(initialHash, false);
}

window.addEventListener("hashchange", () => {
  const targetId = window.location.hash.replace("#", "");
  if (targetId) {
    activateSection(targetId, false);
  }
});
