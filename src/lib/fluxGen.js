function fluxGenerator (seed, times, variability, positivity) {
  const output = [];
  let current = seed;

  for (var i = 0; i < times; i++) {
    let change = (Math.random() * variability).toFixed(0);
    if ((Math.random() * positivity) <= (positivity / 2)) {
      change = -change;
    } else {
      change = +change;
    }
    current += change;
    output.push(current);
  }
  return output;
};

module.exports = fluxGenerator;
