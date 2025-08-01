// Animate the text on load using GSAP
window.addEventListener("DOMContentLoaded", () => {
  gsap.to("#clutchText", {
    duration: 2,
    opacity: 1,
    scale: 1.05,
    ease: "power2.out"
  });
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scale = Math.max(1 - scrollY / 1000, 0.5); // Shrinks to 50%
  document.getElementById("clutchText").style.transform = `scale(${scale})`;
});


// tsParticles config
tsParticles.load("tsparticles", {
  background: {
    color: { value: "transparent" }
  },
  fpsLimit: 120,
  particles: {
    number: { value: 40 },
    color: { value: "#00f9ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 5 } },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: { default: "bounce" }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00f9ff",
      opacity: 0.3,
      width: 1
    }
  },
  detectRetina: true
});
function toggleTheme() {
      document.body.classList.toggle('light');
    }
    function goToLogin() {
    window.location.href = "login.html";
    }

    function goToSignup() {
    window.location.href = "signup.html";
    }