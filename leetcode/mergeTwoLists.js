/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(null)
    let head = res
    while(l1 && l2){
        if(l1.val<=l2.val){
            res.next = new ListNode(l1.val)
            res = res.next
            l1 = l1.next
        }else{
            res.next = new ListNode(l2.val)
            res = res.next
            l2 = l2.next
        }
    }
    if(l1 || l2){
        res.next = l1?l1:l2
    }
    
    return head.next
};

// console.log(1>null)