const colorData = [
    { code: "#3498db", name: "AZUL BRILLANTE" },
    { code: "#e74c3c", name: "ROJO INTENSO" },
    { code: "#2ecc71", name: "VERDE BRILLANTE" },
    { code: "#f39c12", name: "AMARILLO OSCURO" },
    { code: "#9b59b6", name: "PÚRPURA VIBRANTE" },
    { code: "#1abc9c", name: "VERDE AZULADO" },
    { code: "#d35400", name: "NARANJA OSCURO" },
    { code: "#c0392b", name: "ROJO OSCURO" },
    { code: "#27ae60", name: "VERDE CLARO" },
    { code: "#f1c40f", name: "AMARILLO CLARO" },
    { code: "#804000", name: "CAFÉ" },
    { code: "#2980b9", name: "CELESTE" },
    { code: "#000000", name: "NEGRO" },
    { code: "#95a5a6", name: "GRIS" },
    { code: "#e91e63", name: "ROSADO" }
  ];
  
  const changeButton = document.getElementById("changeButton");
  const colorMessage = document.getElementById("colorMessage");
  const colorName = document.getElementById("colorName");
  
  changeButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colorData.length);
    const randomColor = colorData[randomIndex];
  
    document.body.style.backgroundColor = randomColor.code;
    colorMessage.textContent = `Color de Fondo: ${randomColor.code}`;
    colorName.textContent = randomColor.name; 
  });
  