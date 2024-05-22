/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function findPermutationDifference(s, t) {
    const charMap = {};
    for (let i = 0; i < s.length; i++) {
      charMap[s[i]] = i;
    }
  
    let ans = 0;
    for (let i = 0; i < t.length; i++) {
      ans += Math.abs(charMap[t[i]] - i);
    }
  
    return ans;
  }
  