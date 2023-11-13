function mostrarPrompt() {
    var resultado = prompt("Indique su mail");
    
    if (resultado !== null) {
      alert("Turno Luthier solicitado " + resultado);
    } else {
      alert("Has cancelado el prompt.");
    }
  }
  