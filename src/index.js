
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, val) => acc < val ? acc : val, Number.MAX_SAFE_INTEGER);
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, val) => acc > val ? acc : val, Number.MIN_SAFE_INTEGER);
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  return array.reduce((acc, val) => acc + val, 0) / array.length;
}
