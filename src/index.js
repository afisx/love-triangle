/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let cash = preferences, count = 0;
  const length = cash.length;
  for (let i = 0; i<length; i++) {
      let k = cash[i] - 1;
      if (k == i) continue;
      let n = cash[k] - 1;
      if (k == n) continue;
      let m = cash[n] - 1;
      if (m == n) continue;
      if (m == i) {
          count++;
		  cash[i] = null;
      }
   }
  return count;
};
