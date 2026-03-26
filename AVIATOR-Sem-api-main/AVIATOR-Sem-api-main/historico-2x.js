// historico-2x.js
const dados = [
  { hora: "18:09", multiplicador: 7.18 },
  { hora: "18:08", multiplicador: 2.34 },
  { hora: "18:08", multiplicador: 2.78 },
  { hora: "18:06", multiplicador: 3.08 },
  { hora: "18:05", multiplicador: 2.69 },
  { hora: "18:05", multiplicador: 5.84 },
  { hora: "18:04", multiplicador: 4.65 },
  { hora: "18:04", multiplicador: 3.42 },
  { hora: "18:03", multiplicador: 9.08 },
  { hora: "18:02", multiplicador: 3.19 },
  { hora: "18:01", multiplicador: 2.22 },
  { hora: "18:00", multiplicador: 4.18 },
  { hora: "18:00", multiplicador: 7.31 },
  { hora: "17:59", multiplicador: 6.57 },
  { hora: "17:58", multiplicador: 3.86 },
  { hora: "17:57", multiplicador: 3.19 },
  { hora: "17:56", multiplicador: 4.71 },
  { hora: "17:56", multiplicador: 4.53 },
  { hora: "17:55", multiplicador: 2.21 },
  { hora: "17:54", multiplicador: 2.05 },
  { hora: "17:53", multiplicador: 2.30 },
  { hora: "17:52", multiplicador: 3.10 },
  { hora: "17:51", multiplicador: 3.33 },
  { hora: "17:50", multiplicador: 18.29 },
  { hora: "17:49", multiplicador: 50.52 },
  { hora: "17:48", multiplicador: 2.88 },
  { hora: "17:47", multiplicador: 2.63 },
  { hora: "17:46", multiplicador: 2.26 },
  { hora: "17:46", multiplicador: 2.30 },
  { hora: "17:45", multiplicador: 3.39 },
  { hora: "17:45", multiplicador: 2.06 },
  { hora: "17:44", multiplicador: 2.57 },
  { hora: "17:42", multiplicador: 9.70 },
  { hora: "17:41", multiplicador: 2.07 },
  { hora: "17:39", multiplicador: 15.49 },
  { hora: "17:39", multiplicador: 4.20 },
  { hora: "17:37", multiplicador: 134.93 },
  { hora: "17:36", multiplicador: 12.25 },
  { hora: "17:36", multiplicador: 2.05 },
  { hora: "17:35", multiplicador: 4.86 },
  { hora: "17:35", multiplicador: 2.06 },
  { hora: "17:34", multiplicador: 36.36 },
  { hora: "17:33", multiplicador: 26.67 },
  { hora: "17:32", multiplicador: 2.48 },
  { hora: "17:32", multiplicador: 2.41 },
  { hora: "17:31", multiplicador: 3.46 },
  { hora: "17:31", multiplicador: 2.62 },
  { hora: "17:28", multiplicador: 3.93 },
  { hora: "17:28", multiplicador: 3.27 },
  { hora: "17:27", multiplicador: 35.17 },
  { hora: "17:26", multiplicador: 57.58 },
  { hora: "17:24", multiplicador: 18.51 },
  { hora: "17:23", multiplicador: 3.37 },
  { hora: "17:23", multiplicador: 4.97 },
  { hora: "17:21", multiplicador: 3.01 },
  { hora: "17:20", multiplicador: 4.85 },
  { hora: "17:18", multiplicador: 9.25 },
  { hora: "17:17", multiplicador: 8.20 },
  { hora: "17:16", multiplicador: 14.29 },
  { hora: "17:16", multiplicador: 4.02 },
  { hora: "17:15", multiplicador: 2.52 },
  { hora: "17:14", multiplicador: 2.72 },
  { hora: "17:13", multiplicador: 571.76 },
  { hora: "17:12", multiplicador: 2.84 },
  { hora: "17:12", multiplicador: 2.70 },
  { hora: "17:11", multiplicador: 2.87 },
  { hora: "17:10", multiplicador: 3.04 },
  { hora: "17:09", multiplicador: 6.74 },
  { hora: "17:08", multiplicador: 2.56 },
  { hora: "17:06", multiplicador: 35.06 },
  { hora: "17:05", multiplicador: 4.93 },
  { hora: "17:04", multiplicador: 4.10 },
  { hora: "17:04", multiplicador: 2.58 },
  { hora: "17:03", multiplicador: 2.49 },
  { hora: "17:02", multiplicador: 3.06 },
  { hora: "17:02", multiplicador: 5.58 },
  { hora: "16:59", multiplicador: 11.72 },
  { hora: "16:59", multiplicador: 8.66 },
  { hora: "16:58", multiplicador: 8.57 },
  { hora: "16:57", multiplicador: 3.80 },
  { hora: "16:55", multiplicador: 263.35 },
  { hora: "16:54", multiplicador: 12.18 },
  { hora: "16:54", multiplicador: 2.19 },
  { hora: "16:53", multiplicador: 2.32 },
  { hora: "16:53", multiplicador: 2.55 },
  { hora: "16:52", multiplicador: 6.66 },
  { hora: "16:52", multiplicador: 2.61 },
  { hora: "16:52", multiplicador: 2.21 },
  { hora: "16:51", multiplicador: 6.48 },
  { hora: "16:50", multiplicador: 7.39 },
  { hora: "16:48", multiplicador: 4.29 },
  { hora: "16:47", multiplicador: 13.21 },
  { hora: "16:46", multiplicador: 19.83 },
  { hora: "16:46", multiplicador: 2.62 },
  { hora: "16:44", multiplicador: 2.15 },
  { hora: "16:44", multiplicador: 2.87 },
  { hora: "16:43", multiplicador: 12.09 },
  { hora: "16:42", multiplicador: 4.20 },
  { hora: "16:41", multiplicador: 7.35 },
  { hora: "16:39", multiplicador: 253.85 },
  { hora: "16:39", multiplicador: 4.10 },
  { hora: "16:38", multiplicador: 6.48 },
  { hora: "16:38", multiplicador: 3.81 },
  { hora: "16:37", multiplicador: 6.30 },
  { hora: "16:37", multiplicador: 3.28 },
  { hora: "16:36", multiplicador: 4.48 },
  { hora: "16:35", multiplicador: 2.22 },
  { hora: "16:34", multiplicador: 4.42 },
  { hora: "16:33", multiplicador: 8.70 },
  { hora: "16:33", multiplicador: 2.79 },
  { hora: "16:32", multiplicador: 6.02 },
  { hora: "16:32", multiplicador: 2.77 },
  { hora: "16:30", multiplicador: 4.42 },
  { hora: "16:29", multiplicador: 5.67 },
  { hora: "16:29", multiplicador: 2.44 },
  { hora: "16:28", multiplicador: 2.01 },
  { hora: "16:28", multiplicador: 2.65 },
  { hora: "16:27", multiplicador: 5.25 },
  { hora: "16:26", multiplicador: 11.05 },
  { hora: "16:26", multiplicador: 2.72 },
  { hora: "16:25", multiplicador: 3.59 },
  { hora: "16:25", multiplicador: 4.82 },
  { hora: "16:24", multiplicador: 9.50 },
  { hora: "16:22", multiplicador: 9.87 },
  { hora: "16:21", multiplicador: 5.14 },
  { hora: "16:19", multiplicador: 5.45 },
  { hora: "16:18", multiplicador: 3.22 },
  { hora: "16:18", multiplicador: 2.40 },
  { hora: "16:18", multiplicador: 2.25 },
  { hora: "16:17", multiplicador: 2.21 },
  { hora: "16:16", multiplicador: 3.05 },
  { hora: "16:16", multiplicador: 4.65 },
  { hora: "16:15", multiplicador: 29.29 },
  { hora: "16:14", multiplicador: 4.13 },
  { hora: "16:13", multiplicador: 21.00 },
  { hora: "16:11", multiplicador: 2.44 },
  { hora: "16:10", multiplicador: 4.91 },
  { hora: "16:09", multiplicador: 2.90 },
  { hora: "16:08", multiplicador: 4.08 },
  { hora: "16:07", multiplicador: 2.55 },
  { hora: "16:07", multiplicador: 2.29 },
  { hora: "16:06", multiplicador: 2.96 },
  { hora: "16:05", multiplicador: 2.08 },
  { hora: "16:04", multiplicador: 7.13 },
  { hora: "16:04", multiplicador: 3.27 },
  { hora: "16:03", multiplicador: 2.25 },
  { hora: "16:02", multiplicador: 4.13 },
  { hora: "16:01", multiplicador: 6.93 },
  { hora: "16:00", multiplicador: 16.55 },
  { hora: "15:58", multiplicador: 20.00 },
  { hora: "15:56", multiplicador: 21.73 },
  { hora: "15:54", multiplicador: 30.18 },
  { hora: "15:53", multiplicador: 3.85 },
  { hora: "15:53", multiplicador: 5.28 },
  { hora: "15:51", multiplicador: 6.25 }
].sort((a, b) => b.hora.localeCompare(a.hora));

export function getResultadosPorHora(hora) {
  return dados
    .filter(d => d.hora === hora)
    .map(d => d.multiplicador);
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

export function getTodos() {
  return [...dados];
}

export function getPorHora(hora) {
  return getResultadosPorHora(hora);
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