/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while(!set.has(n)) {
        set.add(n);
        let arr = n.toString();
        let squarsSum = 0;
        for (let i = 0; i < arr.length; i++){
            squarsSum += Math.pow(+arr[i],2)
        }
        if (squarsSum === 1) return true;
        n = squarsSum;
    }
    return false;
};
