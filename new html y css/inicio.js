function irAPagina() {
    window.location.href = 'menu.html';
  }
  
  function detectarEnter(event) {
    if (event.key === 'Enter') {
      irAPagina();
    }
  }
  
  window.onload = () => {
    document.body.focus();
  };
  