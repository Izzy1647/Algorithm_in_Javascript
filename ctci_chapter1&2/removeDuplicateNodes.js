/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 示例1:

// 输入：[1, 2, 3, 3, 2, 1]
// 输出：[1, 2, 3]
// 示例2:

// 输入：[1, 1, 1, 1, 2]
// 输出：[1, 2]
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    if(!head){return head}
    let hash = {}
    let node = new ListNode()
    node.next = head
    
    while(node.next){
        if(hash[node.next.val]){  //要删除 node.next 
            if(node.next.next){  // node.next 不是最后一个节点
                node.next = node.next.next
            }else{
                node.next = null
            }
        }else{   // 不要删除  哈希表更新 然后往后面走
            hash[node.next.val] = true
            node = node.next
        }
    }
    return head
};