// Obtén una referencia a los elementos del DOM
const selectNumeroMeses = document.querySelector('#numeroMeses');
const contenedorMesesGenerados = document.querySelector('#contenedorMesesGenerados');
const divOriginal = document.querySelector('.added-month-original');
const inputMes = document.querySelector('#mes');
const mesSeleccionado = inputMes.value;
// Agrega eventos de cambio al select y al campo de mes
selectNumeroMeses.addEventListener('change', crearElementos);
inputMes.addEventListener('change', crearElementos);
inputMes.addEventListener('change', pushInicial);

//array con todos los meses

const gastosMeses = [];
function pushInicial()  {
  


} 

function crearElementos() {
  const inputMes = document.querySelector('#mes');

  // Limpia el contenedor de meses generados
  contenedorMesesGenerados.innerHTML = '';

  // Obtiene el mes seleccionado del campo de entrada de mes
  

  // Obtiene el número de meses seleccionados del select
  const numeroMeses = parseInt(selectNumeroMeses.value);

  // Obtiene el año y el mes desde la fecha seleccionada
  const fechaSeleccionada = new Date(mesSeleccionado + '-01');
  let anio = fechaSeleccionada.getFullYear();
  let mes = fechaSeleccionada.getMonth();

  // Avanza al siguiente mes antes de crear el primer clon
  mes++;
  if (mes > 11) {
    mes = 0; // Reinicia a enero si llega a diciembre
    anio++;
  }

  // Crea clones de elementos basados en el número de meses seleccionados
  for (let i = 0; i < numeroMeses; i++) {
    const divClone = divOriginal.cloneNode(true);
    divClone.style.display = 'grid';

    // Actualiza el contenido de "Nombre Mes" y "Año" en el clon basado en el mes actual
    const addedMonthName = divClone.querySelector('.added-month-name');
    const year = divClone.querySelector('.year');

    // Configura el contenido del clon basado en el mes y el año actuales
    addedMonthName.textContent = obtenerNombreMes(mes);
    year.textContent = anio;

    // Actualiza el ID de los campos de gasto clonados para que sean únicos
     //clones  
    const inputVivienda = divClone.querySelector('#vivienda-clon');
    inputVivienda.id = `vivienda-${i}`;
    const inputAlimentacion = divClone.querySelector('#alimentacion-clon');
    inputAlimentacion.id = `alimentacion-${i}`;
    const inputOcio = divClone.querySelector('#ocio-clon');
    inputOcio.id = `ocio-${i}`;
    const inputAhorro = divClone.querySelector('#ahorro-clon');
    inputAhorro.id = `ahorro-${i}`;

    // Agrega el clon al contenedor de meses generados
    contenedorMesesGenerados.appendChild(divClone);

    // Avanza al siguiente mes
    mes++;
    if (mes > 11) {
      mes = 0; // Reinicia a enero si llega a diciembre
      anio++;
    }
  }
}

// Función para obtener el nombre del mes a partir del número de mes (0-11)
function obtenerNombreMes(numeroMes) {
  const nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return nombresMeses[numeroMes];
}

// Llama a la función una vez al cargar la página para crear elementos iniciales
crearElementos();
