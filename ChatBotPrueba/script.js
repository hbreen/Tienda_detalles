const respuestas = {
    saludo: "¡Hola, humano extraño! ¿Qué tramas?",
    adios: "¡No me dejes solo! 😭",
    ayuda: "Soy un bot loco pero útil. Pide lo que quieras.",
    insulto: "¡Oye! Eso no fue amable 😠",
    default: "No entendí, pero me parece sospechoso... 😐"
  };
  
  function detectarEmocion(texto) {
    texto = texto.toLowerCase();
    if (texto.includes("hola")) return "feliz";
    if (texto.includes("adiós") || texto.includes("bye")) return "triste";
    if (texto.includes("ayuda")) return "sorprendido";
    if (texto.includes("tonto") || texto.includes("feo")) return "enojado";
    return "neutral";
  }
  
  function responder() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const avatar = document.getElementById("avatar");
    const mensaje = input.value.toLowerCase();
    input.value = "";
  
    chatBox.innerHTML += `<p><strong>Tú:</strong> ${mensaje}</p>`;
  
    let respuesta = respuestas.default;
  
    if (mensaje.includes("hola")) respuesta = respuestas.saludo;
    else if (mensaje.includes("adiós") || mensaje.includes("bye")) respuesta = respuestas.adios;
    else if (mensaje.includes("ayuda")) respuesta = respuestas.ayuda;
    else if (mensaje.includes("tonto") || mensaje.includes("feo")) respuesta = respuestas.insulto;
  
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${respuesta}</p>`;
  
    // cambiar imagen del avatar
    const emocion = detectarEmocion(mensaje);
    switch (emocion) {
      case "feliz":
        avatar.src = "avatars/feliz.gif";
        break;
      case "triste":
        avatar.src = "avatars/sorprendido.gif";
        break;
      case "enojado":
        avatar.src = "avatars/enojado.gif";
        break;
      case "sorprendido":
        avatar.src = "avatars/sorprendido.gif";
        break;
      default:
        avatar.src = "avatars/normal.png";
    }
  
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  