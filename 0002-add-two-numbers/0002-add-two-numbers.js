function ListNode(val, next) {
    this.val = (val===undefined? 0 : val);
    this.next = (next===undefined? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0), node = head, carry = 0;

    while (l1 || l2) {
        let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
        carry = sum >= 10? 1 : 0;
        node.next = new ListNode(sum % 10);
        node = node.next;
        l1 = l1? l1.next : null;
        l2 = l2? l2.next : null;
    }

    if (carry > 0) {
        node.next = new ListNode(carry);
    }

    return head.next;
};