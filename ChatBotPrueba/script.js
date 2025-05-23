const respuestas = {
  saludo: "¡Hola! Bienvenido a *Lunaia*. ¿En qué podemos ayudarte hoy? 🎁",
  adios: "Gracias por visitarnos. ¡Esperamos verte pronto de nuevo! 💖",
  ayuda: "Puedes preguntarnos por combos, precios, formas de pago, envíos o personalización de regalos.",
  combos: "Ofrecemos combos personalizados para cumpleaños, aniversarios y ocasiones especiales. ¿Deseas ver opciones?",
  precio: "Nuestros precios varían según el combo. ¿Tienes uno específico en mente?",
  pago: "Aceptamos pagos por Yape, Plin y transferencia bancaria. ¿Te gustaría más detalles?",
  envio: "Realizamos envíos en La Unión y alrededores. ¿A qué distrito necesitas el envío?",
  insulto: "Lamentamos si algo no fue de tu agrado. Estamos para ayudarte con respeto. 😊",
  default: "Lo siento, no entendí tu mensaje. ¿Podrías reformular tu pregunta?"
};

const preguntasFrecuentes = [
  { pregunta: "¿cuál es tu nombre?", respuesta: "Soy el asistente virtual de Lunaia 🌙. ¡Estoy aquí para ayudarte con tus regalos!" },
  { pregunta: "¿qué hora es?", respuesta: "No tengo reloj, pero siempre es un buen momento para regalar con amor 💝." },
  { pregunta: "¿quién te creó?", respuesta: "Fui creado por el equipo de Lunaia para ayudarte a encontrar el detalle perfecto ✨." },
  { pregunta: "¿qué haces?", respuesta: "Te ayudo a explorar combos de regalos, consultar precios, envíos y personalizaciones. ¡Pregúntame lo que quieras!" },
  { pregunta: "¿adiós?", respuesta: "¡Gracias por confiar en Lunaia! Que tengas un día brillante 💫." },
  { pregunta: "¿me ayudas?", respuesta: "¡Claro que sí! Estoy aquí para ayudarte a encontrar el regalo ideal 🌟." }
];

function detectarEmocion(texto) {
  texto = texto.toLowerCase();
  if (texto.includes("hola")) return "feliz";
  if (texto.includes("adiós") || texto.includes("bye")) return "triste";
  if (texto.includes("gracias")) return "feliz";
  if (texto.includes("tonto") || texto.includes("feo") || texto.includes("malo")) return "enojado";
  if (texto.includes("ayuda") || texto.includes("combo")) return "sorprendido";
  return "neutral";
}

function responder() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const avatar = document.getElementById("avatar");
  const mensaje = input.value.toLowerCase().trim();
  input.value = "";

  chatBox.innerHTML += `<p><strong>Tú:</strong> ${mensaje}</p>`;

  // Buscar respuesta en preguntas frecuentes
  let respuesta = respuestas.default;
  const match = preguntasFrecuentes.find(p => mensaje.includes(p.pregunta.toLowerCase()));
  if (match) {
    respuesta = match.respuesta;
  } else {
    if (mensaje.includes("hola")) respuesta = respuestas.saludo;
    else if (mensaje.includes("adiós") || mensaje.includes("bye")) respuesta = respuestas.adios;
    else if (mensaje.includes("ayuda")) respuesta = respuestas.ayuda;
    else if (mensaje.includes("combo") || mensaje.includes("regalo")) respuesta = respuestas.combos;
    else if (mensaje.includes("precio") || mensaje.includes("cuánto")) respuesta = respuestas.precio;
    else if (mensaje.includes("pago") || mensaje.includes("pagar")) respuesta = respuestas.pago;
    else if (mensaje.includes("envío") || mensaje.includes("entrega")) respuesta = respuestas.envio;
    else if (mensaje.includes("tonto") || mensaje.includes("feo") || mensaje.includes("malo")) respuesta = respuestas.insulto;
  }

  chatBox.innerHTML += `<p><strong>Lunaia:</strong> ${respuesta}</p>`;

  // Cambiar imagen del avatar
  const emocion = detectarEmocion(mensaje);
  switch (emocion) {
    case "feliz":
      avatar.src = "avatar.png";
      break;
    case "triste":
      avatar.src = "avatar2.png";
      break;
    case "enojado":
      avatar.src = "avatar2.png";
      break;
    case "sorprendido":
      avatar.src = "avatar2.png";
      break;
    default:
      avatar.src = "avatar2.png";
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

  
