
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let stack = [];

    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    if (fast) {
        slow = slow.next;
    }

    while (slow) {
        if (slow.val !== stack.pop()) {
            return false;
        }
        slow = slow.next;
    }

    return true;
};