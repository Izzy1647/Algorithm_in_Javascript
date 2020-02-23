// 给定两个用链表表示的整数，每个节点包含一个数位。 这些数位是反向存放的，也就是个位排在链表首部。
// 编写函数对这两个整数求和，并用链表形式返回结果。


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
// 输出：2 -> 1 -> 9，即912

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(null)
    head = res  // return 用
    let sum = 0
    let cf = 0
    while(cf || l1 || l2){
        sum = (l1?l1.val:0) + (l2?l2.val:0) + cf
        cf = sum>9?1:0
        res.next = new ListNode(sum%10)
        res = res.next
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null

    }

    return head.next
};