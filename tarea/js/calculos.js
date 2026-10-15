// ===== calculos.js: funciones de cálculo =====

// Exportación nombrada
// Arrow + rest: (...notas) agrupa todos los argumentos en un arreglo
export const promedio = (...notas) =>
  notas.reduce((suma, n) => suma + n, 0) / notas.length;

// Exportación nombrada
// Parámetro por defecto: minima = 13
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración en el parámetro: ({ nombre, notas })
// Spread al llamar: promedio(...notas)
// Template literal en el return
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto (solo una por archivo)
export default reporte;
