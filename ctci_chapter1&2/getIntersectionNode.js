// 给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，而不是基于节点的值。
// 换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} listA
 * @param {ListNode} listB
 
 * @return {ListNode}
 */
var getIntersectionNode = function(listA, listB) {   // 把a、b链表拼起来 最后要么指针pa pb指向结点相同 要么都等于null
    if(listA === null || listB === null){return null}
    let pa = listA
    let pb = listB

    while(pa!==pb){
        pa = (pa === null?listB:pa.next)
        pb = (pb === null?listA:pb.next)
    }
    return pa







};