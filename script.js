/* ── PARTICLES ── */
const particleContainer = document.getElementById("particles");
const colors = [
  "#ffb6c8",
  "#87ceeb",
  "#f7819f",
  "#4ab3e8",
  "#ffe0ea",
  "#d6f0fb",
  "#ffd700",
];
const shapes = ["🌸", "✦", "·", "◦"];
for (let i = 0; i < 35; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  const size = Math.random() * 14 + 4;
  const isEmoji = Math.random() > 0.6;
  if (isEmoji) {
    p.style.cssText = `
      position:absolute;
      left:${Math.random() * 100}%;
      bottom:-20px;
      font-size:${size + 6}px;
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 10}s;
    `;
    p.textContent = shapes[Math.floor(Math.random() * shapes.length)];
  } else {
    p.style.cssText = `
      position:absolute;
      left:${Math.random() * 100}%;
      bottom:-20px;
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:${Math.random() * 10}s;
    `;
  }
  particleContainer.appendChild(p);
}

/* ── NAVBAR ── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

/* ── HAMBURGER ── */
const ham = document.getElementById("ham");
const mob = document.getElementById("mobMenu");
ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  mob.classList.toggle("open");
});
function closeMenu() {
  ham.classList.remove("open");
  mob.classList.remove("open");
}

/* ── REVEAL ON SCROLL ── */
const reveals = document.querySelectorAll(".reveal,.reveal-left,.reveal-right");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);
reveals.forEach((el) => obs.observe(el));

/* ── ANIMATED TEMP ── */
const temps = [180, 183, 186, 188, 185, 190, 192, 189, 185, 187];
let ti = 0;
setInterval(() => {
  const el = document.getElementById("tempNum");
  if (el) {
    el.textContent = temps[ti % temps.length] + "°C";
    ti++;
  }
}, 1800);

/* ── ANIMATED CHART BARS ── */
function animateBars() {
  const bars = document.querySelectorAll(".chart-bars .bar");
  bars.forEach((b) => {
    const h = Math.floor(Math.random() * 60 + 35);
    b.style.height = h + "%";
  });
}
setInterval(animateBars, 3000);

/* ── STAGGER REVEAL ── */
document.querySelectorAll(".features-grid .feature-card").forEach((c, i) => {
  c.style.transitionDelay = i * 0.1 + "s";
});
document.querySelectorAll(".recipes-grid .recipe-card").forEach((c, i) => {
  c.style.transitionDelay = i * 0.08 + "s";
});
document.querySelectorAll(".testi-grid .testi-card").forEach((c, i) => {
  c.style.transitionDelay = i * 0.1 + "s";
});
document.querySelectorAll(".pricing-grid .price-card").forEach((c, i) => {
  c.style.transitionDelay = i * 0.1 + "s";
});
