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

/* ---------- random tag hover colors + glow ---------- */
const tagColors = [
  "rgb(189, 123, 36)",
  "rgb(93, 173, 226)",
  "rgb(88, 214, 141)",
  "rgb(240, 98, 146)",
  "rgb(175, 122, 197)",
];

document.querySelectorAll(".project-tags .tag").forEach((tag) => {
  const color = tagColors[Math.floor(Math.random() * tagColors.length)];
  const glowColor = color.replace("rgb", "rgba").replace(")", ", 0.5)");

  tag.addEventListener("mouseenter", () => {
    tag.style.borderColor = color;
    tag.style.color = color;
    tag.style.backgroundColor = color
      .replace("rgb", "rgba")
      .replace(")", ", 0.1)");
    tag.style.boxShadow = `0 0 15px ${glowColor}`;
  });
  tag.addEventListener("mouseleave", () => {
    tag.style.borderColor = "#2a2a2a";
    tag.style.color = "#a0a0a0";
    tag.style.backgroundColor = "#0a0a0a";
    tag.style.boxShadow = "none";
  });
});

const randomColorElements = document.querySelectorAll(
  ".line, .hero-role, .project",
);

function randomizeColors() {
  randomColorElements.forEach((el) => {
    const color = lineColors[Math.floor(Math.random() * lineColors.length)];
    const rgbaColor = color.replace("rgb", "rgba");

    if (el.classList.contains("line")) {
      el.style.backgroundColor = color;
      el.style.boxShadow = `0 0 5px ${color}, 0 0 15px ${color}, 0 0 30px ${rgbaColor.replace(")", ", 0.6)")}`;
    } else if (el.classList.contains("project")) {
      el.style.setProperty("--project-glow", color);
      el.style.setProperty(
        "--project-glow-soft",
        rgbaColor.replace(")", ", 0.5)"),
      );
      el.style.setProperty(
        "--project-glow-softer",
        rgbaColor.replace(")", ", 0.3)"),
      );
      el.style.setProperty(
        "--project-glow-faint",
        rgbaColor.replace(")", ", 0.15)"),
      );
    } else {
      el.style.color = color;
      el.style.textShadow = `0 0 8px ${color}, 0 0 20px ${color}`;
    }
  });
}

randomizeColors();
setInterval(randomizeColors, 2500);
