
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 中序遍历
function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

// 递归方法
var inorderTraversal = function(root) {
    let res = []
    let inorderPushNode = function(node){
        if(node){
            if(node.left){
                inorderPushNode(node.left)
            }
            res.push(node.val)
            if(node.right){
                inorderPushNode(node.right)
            }
        }
    }
    inorderPushNode(root)
    return res
};


