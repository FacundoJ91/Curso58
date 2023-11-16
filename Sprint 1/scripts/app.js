function mostrarPrompt() {
    var resultado = prompt("Indique su mail");
    
    if (resultado !== null) {
      alert("Nos pondremos en contacto al " + resultado);
    } else {
      alert("Has cancelado el prompt.");
    }
  }
  