/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
	var carry = 1; 
	for (var i = digits.length - 1; i > -1; i--) {
		if (carry) {
			var sum = carry + digits[i];
			digits[i] = sum % 10;
			carry = sum > 9 ? 1 : 0;
		}
	}
	if (carry === 1) {
		digits.unshift(1); 
	}
	return digits;
};
console.log(plusOne([1, 2, 3]));