/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let duummyHead = new ListNode(null)
    duummyHead.next = head
    let standP = head
    while(standP && standP.next){
        let moveP = standP.next
        standP.next = moveP.next
        moveP.next = duummyHead.next
        duummyHead.next = moveP
    }
    return duummyHead.next

};