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