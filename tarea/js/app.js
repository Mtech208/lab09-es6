// ===== app.js: programa principal =====
import { curso, estudiantes } from "./datos.js";
import reporte from "./calculos.js";

// Spread de objeto y de arreglo (reemplaza Object.assign y concat)
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

// Salida por consola
console.log(`Curso: ${curso}`);

// Salida en la página
const lista = document.querySelector("#reportes");
todos.forEach(estudiante => {
  const texto = reporte(estudiante);
  console.log(texto);
  lista.innerHTML += `<li>${texto}</li>`;
});
