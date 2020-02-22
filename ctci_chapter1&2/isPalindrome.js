
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 编写一个函数，检查输入的链表是否是回文的。
// 输入：1->2->2->1
// 输出： true 
var isPalindrome = function(head) {
    if(!head){return head}
    let fast = head
    let slow = head
    while(fast.next && fast){    // fast 在链表最后一个 或 最后外一个的null
        fast = fast.next.next    // slow 在链表正中间 或 当中两个后面的那个
        slow = slow.next
    }
    
    // 头插法翻转前一半
    let dummyHead = new ListNode(null)
    dummyHead.next = head
    let p = head
    while(p.next && p.next != slow){
        let r = p.next
        p.next = r.next
        r.next = dummyHead.next
        dummyHead.next = r
    }

    // 比较翻转完的和后半部分是否相等
    if(fast){slow = slow.next}
    p = dummyHead.next
    while(slow){
        if(p.val!==slow.val){
            return false
        }
        slow = slow.next
        p = p.next
    }
    return true

};