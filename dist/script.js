document.addEventListener("DOMContentLoaded", () => {
  const fontType = ["gantari", "inter", "jost"];
  const ff = document.getElementById("fontfamily");

  if (!ff) {
    console.error("Element with ID 'fontfamily' not found.");
    return;
  }

  function changeFont() {
    const num = Math.floor(Math.random() * fontType.length);
    ff.style.fontFamily = fontType[num];
  }

  // Initial font set
  changeFont();

  // Change font every 2 seconds (2000 ms)
  setInterval(changeFont, 1000);
});

const colorPool = [
      "#FF6B6B", // soft red
      "#FFD93D", // golden yellow
      "#6BCB77", // mint green
      "#4D96FF", // blue
      "#843b62", // wine
      "#F38BA0", // rose
      "#9D4EDD", // violet
      "#FF8FAB", // pink
      "#6A0572", // dark purple
      "#00B8A9"  // teal
    ];

    function getTwoDistinctColors() {
      const shuffled = colorPool.sort(() => 0.5 - Math.random());
      return [shuffled[0], shuffled[1]];
    }

    function setGradientFromPool() {
      const [color1, color2] = getTwoDistinctColors();
      const angle = 180;
      document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }

    document.addEventListener("DOMContentLoaded", () => {
      setGradientFromPool();
    });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  } else {
    console.error("Missing #hamburger or #navMenu elements");
  }
});