/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 给定这个链表：1->2->3->4->5
// 当 k = 2 时，应当返回: 2->1->4->3->5
// 当 k = 3 时，应当返回: 3->2->1->4->5
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummyHead = new ListNode(null)
    dummyHead.next = head
    let pre = dummyHead  // 待翻转区域的前驱
    let end = dummyHead  // 待翻转区域的后继

    while(end.next){   // end 不是末尾结点
        for(let i=0;i<k && end;i++){   // end 移到要反转的区间右边界
            end = end.next
        }
        if(!end){break} // 没有k个一组 end到末尾外面去了

        let next = end.next
        let start = pre.next

        while(start && start.next !== next){   // 进行翻转
            let p = start.next
            start.next = p.next
            p.next = pre.next
            pre.next = p
        }

        start.next = next
        pre = start
        end = start
    }

    return dummyHead.next
};

// reverseKGroup()