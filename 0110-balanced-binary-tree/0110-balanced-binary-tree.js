/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }

    const [leftHeight, leftBalanced] = getHeightAndBalance(root.left);
    const [rightHeight, rightBalanced] = getHeightAndBalance(root.right);

    return (
        Math.abs(leftHeight - rightHeight) <= 1 &&
        leftBalanced &&
        rightBalanced
    );
};

function getHeightAndBalance(node) {
    if (node === null) {
        return [0, true];
    }

    const [leftHeight, leftBalanced] = getHeightAndBalance(node.left);
    const [rightHeight, rightBalanced] = getHeightAndBalance(node.right);

    return [
        1 + Math.max(leftHeight, rightHeight),
        Math.abs(leftHeight - rightHeight) <= 1 && leftBalanced && rightBalanced
    ];
}