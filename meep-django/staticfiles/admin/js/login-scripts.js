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

  function hexToHSL(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return { h, s, l };
  }

  // Convert HSL back to hex
  function hslToHex(h, s, l) {
    let r, g, b;

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return "#" + toHex(r) + toHex(g) + toHex(b);
  }

  function darkenHex(hex, amount = 0.5) {
    const { h, s, l } = hexToHSL(hex);
    const newL = Math.max(0, l * (1 - amount));
    return hslToHex(h, s, newL);
  }

  function setGradientFromPool() {
    const [color1, color2] = getTwoDistinctColors();
    const angle = 180;
    document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    // Set darker meta theme color
    const darkerColor = darkenHex(color1, 0.5);
    let themeMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.setAttribute("name", "theme-color");
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", darkerColor);
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
document.addEventListener("DOMContentLoaded", function() {
  // Get all input fields of type text, email, and password
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

  inputs.forEach(input => {
    input.placeholder = " ";
  });
});