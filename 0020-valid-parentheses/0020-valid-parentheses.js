/**
 * @param {string} s
 * @return {boolean}
empty
 */
function isValid(s) {
    while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
        s = s.replace('()', '').replace('{}', '').replace('[]', '');
    }
    return s === '';
}
