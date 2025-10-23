// ===== Controle de fonte local (em) =====
const container = document.querySelector(".relative-example");
let fontSizeEm = 10; // tamanho base definido em unidades.css

document.getElementById("aumentar-em").addEventListener("click", () => {
  fontSizeEm += 2;
  container.style.fontSize = fontSizeEm + "px";
});

document.getElementById("diminuir-em").addEventListener("click", () => {
  if (fontSizeEm > 6) {
    fontSizeEm -= 2;
    container.style.fontSize = fontSizeEm + "px";
  }
});