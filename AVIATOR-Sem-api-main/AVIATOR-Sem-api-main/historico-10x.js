// historico-10x.js
const dados = [
  { hora: "13:22", multiplicador: 10.85 }, { hora: "13:16", multiplicador: 548.78 }, { hora: "13:14", multiplicador: 40.90 },
  { hora: "12:58", multiplicador: 249.68 }, { hora: "12:57", multiplicador: 19.28 }, { hora: "12:47", multiplicador: 1171.92 },
  // ... (todos os outros acima de 10x)
].sort((a, b) => b.hora.localeCompare(a.hora));

// Funções de acesso aos dados do histórico
export function getResultadosPorHora(hora) {
  return dados
    .filter(d => d.hora === hora)
    .map(d => d.multiplicador);
}

export function getTodos() {
  return [...dados];
}

export function getPorHora(hora) {
  return getResultadosPorHora(hora);
}

export function media(arr) {
  return arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2) : null;
}

export function mediana(arr) {
  if (!arr.length) return null;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2)
    : sorted[mid].toFixed(2);
}

export function getMax(arr) {
  return arr.length ? Math.max(...arr) : null;
}

export function getMin(arr) {
  return arr.length ? Math.min(...arr) : null;
}

export function getEstatisticas(arr) {
  if (!arr.length) return null;
  return {
    min: getMin(arr),
    max: getMax(arr),
    media: media(arr),
    mediana: mediana(arr),
    count: arr.length,
  };
}

export default dados;