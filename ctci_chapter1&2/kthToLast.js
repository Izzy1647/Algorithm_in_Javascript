// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    let slow = head
    let fast = head
    let i = 0
    while(i<k-1){    // 快指针到前面
        fast = fast.next
        i++
    }

    while(fast){
        fast = fast.next
        slow = slow.next
    }
    return slow.val
};