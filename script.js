const heroName = document.querySelector(".hero-name");

heroName.addEventListener("mousemove", (e) => {
  const rect = heroName.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  heroName.style.setProperty("--x", `${x}px`);
  heroName.style.setProperty("--y", `${y}px`);
});

/* ---------- cursor glow ---------- */
const glow = document.querySelector(".cursor-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let glowX = mouseX;
let glowY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.12;
  glowY += (mouseY - glowY) * 0.12;

  glow.style.left = glowX + "px";
  glow.style.top = glowY + "px";

  requestAnimationFrame(animateGlow);
}

animateGlow();

/* ---------- typewriter role text ---------- */
const roles = [
  "Full-Stack Web Developer",
  "Software Engineer",
  "Problem Solver",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

type();

// Tags stay grayscale on hover
document.querySelectorAll(".project-tags .tag").forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    tag.style.borderColor = "#666";
    tag.style.color = "#fff";
    tag.style.backgroundColor = "#1a1a1a";
  });
  tag.addEventListener("mouseleave", () => {
    tag.style.borderColor = "#2a2a2a";
    tag.style.color = "#a0a0a0";
    tag.style.backgroundColor = "#000000";
  });
});

// Static grayscale styling only
document.querySelectorAll(".hero-role").forEach((el) => {
  el.style.color = "#ffffff";
});
