// historico-5x.js
const dados = [
  { hora: "04:31", multiplicador: 6.48 }, { hora: "04:29", multiplicador: 8.44 }, { hora: "04:26", multiplicador: 29.18 },
  { hora: "04:22", multiplicador: 8.16 }, { hora: "04:20", multiplicador: 7.19 }, { hora: "04:19", multiplicador: 19.54 },
  { hora: "04:18", multiplicador: 7.79 }, { hora: "04:17", multiplicador: 8.64 }, { hora: "04:10", multiplicador: 6.95 },
  { hora: "04:09", multiplicador: 12.20 }, { hora: "04:04", multiplicador: 109.08 }, { hora: "04:01", multiplicador: 14.78 },
  { hora: "03:59", multiplicador: 7.58 }, { hora: "03:58", multiplicador: 37.49 }, { hora: "03:53", multiplicador: 53.14 },
  { hora: "03:52", multiplicador: 52.49 }, { hora: "03:50", multiplicador: 8.39 }, { hora: "03:47", multiplicador: 5.67 },
  { hora: "03:45", multiplicador: 165.46 }, { hora: "03:44", multiplicador: 5.37 }, { hora: "03:43", multiplicador: 157.09 },
  { hora: "03:42", multiplicador: 8.46 }, { hora: "03:40", multiplicador: 52.92 }, { hora: "03:39", multiplicador: 57.13 },
  { hora: "03:38", multiplicador: 5.55 }, { hora: "03:35", multiplicador: 5.06 }, { hora: "03:34", multiplicador: 10.46 },
  { hora: "03:33", multiplicador: 6.33 }, { hora: "03:31", multiplicador: 7.17 }, { hora: "03:30", multiplicador: 37.28 },
  { hora: "03:27", multiplicador: 10.53 }, { hora: "03:26", multiplicador: 6.74 }, { hora: "03:26", multiplicador: 27.40 },
  { hora: "03:24", multiplicador: 9.14 }, { hora: "03:23", multiplicador: 17.14 }, { hora: "03:22", multiplicador: 5.64 },
  { hora: "03:18", multiplicador: 11.89 }, { hora: "03:12", multiplicador: 29.53 }, { hora: "03:10", multiplicador: 51.49 },
  { hora: "03:09", multiplicador: 13.64 }, { hora: "03:08", multiplicador: 136.65 }, { hora: "03:04", multiplicador: 79.19 },
  { hora: "03:03", multiplicador: 13.94 }, { hora: "03:01", multiplicador: 17.87 }, { hora: "03:00", multiplicador: 7.26 },
  { hora: "02:55", multiplicador: 73.93 }, { hora: "02:53", multiplicador: 5.27 }, { hora: "02:49", multiplicador: 15.15 },
  { hora: "02:45", multiplicador: 12.39 }, { hora: "02:44", multiplicador: 8.99 }, { hora: "02:40", multiplicador: 51.88 },
  { hora: "02:37", multiplicador: 5.10 }, { hora: "02:34", multiplicador: 18.23 }, { hora: "02:33", multiplicador: 27.36 },
  { hora: "02:32", multiplicador: 6.84 }, { hora: "02:30", multiplicador: 9.99 }, { hora: "02:27", multiplicador: 5.51 },
  { hora: "02:24", multiplicador: 13.33 }, { hora: "02:22", multiplicador: 6.33 }, { hora: "02:21", multiplicador: 7.06 },
  { hora: "02:20", multiplicador: 12.99 }, { hora: "02:18", multiplicador: 5.15 }, { hora: "02:17", multiplicador: 12.57 },
  { hora: "02:16", multiplicador: 16.05 }, { hora: "02:15", multiplicador: 22.11 }, { hora: "02:13", multiplicador: 13.01 },
  { hora: "02:11", multiplicador: 9.51 }, { hora: "02:07", multiplicador: 6.18 }, { hora: "02:06", multiplicador: 10.16 },
  { hora: "02:03", multiplicador: 286.55 }, { hora: "02:00", multiplicador: 63.27 }, { hora: "01:53", multiplicador: 10.30 },
  { hora: "01:51", multiplicador: 19.14 }, { hora: "01:49", multiplicador: 20.60 }, { hora: "01:45", multiplicador: 19.78 },
  { hora: "01:44", multiplicador: 11.52 }, { hora: "01:43", multiplicador: 20.29 }, { hora: "01:39", multiplicador: 5.30 },
  { hora: "01:36", multiplicador: 23.58 }, { hora: "01:34", multiplicador: 25.14 }, { hora: "01:33", multiplicador: 5.53 },
  { hora: "01:32", multiplicador: 9.07 }, { hora: "01:31", multiplicador: 19.26 }, { hora: "01:30", multiplicador: 5.13 },
  { hora: "01:28", multiplicador: 9.20 }, { hora: "01:28", multiplicador: 7.59 }, { hora: "01:27", multiplicador: 9.65 },
  { hora: "01:26", multiplicador: 36.65 }, { hora: "01:25", multiplicador: 5.35 }, { hora: "01:19", multiplicador: 16.53 },
  { hora: "01:18", multiplicador: 49.89 }, { hora: "01:13", multiplicador: 645.21 }, { hora: "01:10", multiplicador: 11.76 },
  { hora: "01:09", multiplicador: 18.01 }, { hora: "01:07", multiplicador: 9.23 }, { hora: "01:05", multiplicador: 10.39 },
  { hora: "01:02", multiplicador: 24.56 }, { hora: "01:00", multiplicador: 24.68 }, { hora: "00:58", multiplicador: 10.49 },
  { hora: "00:57", multiplicador: 10.97 }, { hora: "00:55", multiplicador: 197.59 }, { hora: "00:54", multiplicador: 16.49 },
  { hora: "00:53", multiplicador: 24.63 }, { hora: "00:51", multiplicador: 53.69 }, { hora: "00:47", multiplicador: 11.93 },
  { hora: "00:45", multiplicador: 11.90 }, { hora: "00:44", multiplicador: 10.28 }, { hora: "00:43", multiplicador: 6.39 },
  { hora: "00:38", multiplicador: 19.27 }, { hora: "00:38", multiplicador: 12.04 }, { hora: "00:36", multiplicador: 5.62 },
  { hora: "00:35", multiplicador: 6.88 }, { hora: "00:32", multiplicador: 10.61 }, { hora: "00:30", multiplicador: 14.34 },
  { hora: "00:29", multiplicador: 8.66 }, { hora: "00:28", multiplicador: 6.05 }, { hora: "00:25", multiplicador: 7.41 },
  { hora: "00:22", multiplicador: 30.84 }, { hora: "00:20", multiplicador: 173.45 }, { hora: "00:20", multiplicador: 5.67 },
  { hora: "00:19", multiplicador: 6.25 }, { hora: "00:18", multiplicador: 12.26 }, { hora: "00:16", multiplicador: 5.10 },
  { hora: "00:14", multiplicador: 6.89 }, { hora: "00:13", multiplicador: 19.76 }, { hora: "00:12", multiplicador: 6.47 },
  { hora: "00:07", multiplicador: 48.32 }, { hora: "00:06", multiplicador: 9.88 }, { hora: "00:03", multiplicador: 6.11 },
  { hora: "00:02", multiplicador: 10.30 }, { hora: "00:01", multiplicador: 12.24 }, { hora: "23:54", multiplicador: 20.39 },
  { hora: "23:52", multiplicador: 35.67 }, { hora: "23:50", multiplicador: 5.63 }, { hora: "23:48", multiplicador: 34.37 },
  { hora: "23:47", multiplicador: 20.40 }, { hora: "23:46", multiplicador: 26.06 }, { hora: "23:45", multiplicador: 22.79 },
  { hora: "23:44", multiplicador: 7.62 }, { hora: "23:39", multiplicador: 25.49 }, { hora: "23:38", multiplicador: 14.06 },
  { hora: "23:37", multiplicador: 11.38 }, { hora: "23:32", multiplicador: 5.98 }, { hora: "23:28", multiplicador: 52.19 },
  { hora: "23:27", multiplicador: 6.66 }, { hora: "23:25", multiplicador: 12.23 }, { hora: "23:24", multiplicador: 39.82 },
  { hora: "23:23", multiplicador: 12.29 }, { hora: "23:22", multiplicador: 5.04 }, { hora: "23:20", multiplicador: 5.22 },
  { hora: "23:19", multiplicador: 8.93 }, { hora: "23:18", multiplicador: 6.84 }, { hora: "23:17", multiplicador: 40.05 },
  { hora: "23:13", multiplicador: 395.43 }, { hora: "23:10", multiplicador: 5.32 }, { hora: "23:09", multiplicador: 15.99 }
].sort((a, b) => b.hora.localeCompare(a.hora));

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