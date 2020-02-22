// 使得所有小于 x 的节点排在大于或等于 x 的 节点之前
// 分割链表

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的 节点之前。
// 如果链表中包含 x，x 只需出现在小于 x 的元素之前。分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。


var partition = function(head, x) {  
    if(!head){return head}
    let spotP = head
    while(spotP.next && spotP.val < x){   // 第一个大于等于x的结点定为基准 spotP
        spotP = spotP.next
    }
    let findP = spotP
    while(findP){
        if(findP.val<x){  // 对换 findP 和 spotP 的val  并让spotP前移一个结点 也大于等于x
            [findP.val,spotP.val] = [spotP.val,findP.val]
            spotP = spotP.next
        }
        findP = findP.next
    }
    return head
};