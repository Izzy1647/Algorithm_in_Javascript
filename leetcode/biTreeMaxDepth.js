/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

var maxDepth = function(root) {
    if(!root){return null}
    res = Math.max(maxDepth(root.left),maxDepth(root.right))+1
    return res

};