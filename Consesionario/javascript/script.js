function generarCotizacion() {
    const ci = document.getElementById("ci").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const vehiculo = document.getElementById("vehiculo").value;
    let precio = document.getElementById("precio").value;

    if (vehiculo === "Ford Fiesta") {
        precio = precio - (precio * 0.05);
    } else if (vehiculo === "Ford Focus") {
        precio = precio - (precio * 0.10);
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
      <p>CI: ${ci}</p>
      <p>Nombre: ${nombre}</p>
      <p>Apellido: ${apellido}</p>
      <p>Dirección: ${direccion}</p>
      <p>Vehículo: ${vehiculo}</p>
      <p>Precio Final: $${precio}</p>
    `;
}

function resultadoContabilidad () {
    let nombreEmpleado = document.getElementById("nombreEmpleado").value;
    let cargoEmpleado = document.getElementById("cargoEmpleado").value;
    let horasExtras = document.getElementById("horasExtras").value;
    var sueldoBase;
    switch (cargoEmpleado) {
        case "Administrativo":
            sueldoBase = 700;
            break;
        case "Supervisor":
            sueldoBase = 650;
            break;
        case "Operario":
            sueldoBase = 440;
            break;
        case "Control de Calidad":
            sueldoBase = 490;
            break;
    }
    let sueldoARecibir = sueldoBase + (horasExtras * 10);
    document.getElementById("resultadoContabilidad").innerHTML = "Nombre del Empleado: " + nombreEmpleado + "<br>" +
        "Cargo: " + cargoEmpleado + "<br>" +
        "Sueldo a Recibir: $" + sueldoARecibir;
};
