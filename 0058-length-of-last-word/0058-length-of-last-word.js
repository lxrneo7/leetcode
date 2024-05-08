/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    return s.trim().split(' ').pop().length;
}