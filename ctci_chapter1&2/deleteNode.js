// 实现一种算法，删除单向链表中间的某个节点（除了第一个和最后一个节点，不一定是中间节点），假定你只能访问该节点。

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} node
 * @param {number} n
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node, n) {
    while(node.next){
        if(node.val === n){
            node.val = node.next.val
            node.next = node.next.next
        }
        node = node.next
    }
    
    
};