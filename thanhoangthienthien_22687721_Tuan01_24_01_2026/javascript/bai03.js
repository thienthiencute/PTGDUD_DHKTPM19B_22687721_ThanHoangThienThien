const doi = [
  { name: "Dolphins", score: [96, 108, 89] },
  { name: "Koalas", score: [88, 91, 110] }
];

const avg = s => s.reduce((a, b) => a + b, 0) / s.length;

const comporeDoi = () => {
  const [d, k] = doi.map(t => ({ ...t, avg: avg(t.score) }));

  if (d.avg > k.avg && d.avg >= 100)
    return `${d.name} thắng (${d.avg.toFixed(1)} vs ${k.avg.toFixed(1)})`;

  if (k.avg > d.avg && k.avg >= 100)
    return `${k.name} thắng (${k.avg.toFixed(1)} vs ${d.avg.toFixed(1)})`;

  if (d.avg === k.avg && d.avg >= 100)
    return `${d.name} và ${k.name} hòa (${d.avg.toFixed(1)})`;

  return "Không đội nào thắng";
};

console.log(comporeDoi());
