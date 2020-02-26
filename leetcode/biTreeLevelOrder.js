/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//   3
//  / \
// 9   20
//    /  \
//   15   7 

// [[3],[9,20],[15,7]]


function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

var levelOrder = function(root) {
    // 显示层次：
    if(!root){return []}
    let queue = [root]
    let res = []
    let level = 0
    while(queue.length !== 0){
        let nodesNumInThisLevel = queue.length  
        res[level] = []
        // let count = nodesNumInThisLevel
        while(nodesNumInThisLevel>0){
            let shiftedNode = queue.shift() 
            res[level].push(shiftedNode.val)
            if(shiftedNode.left){queue.push(shiftedNode.left)}
            if(shiftedNode.right){queue.push(shiftedNode.right)}
            nodesNumInThisLevel --
        }
        level ++
    }
    return res


    // 无法显示层次：
    if(!root){return []}
    let res = []
    let queue = [root]
    while(queue.length !== 0){
        let node = queue.shift()
        res.push(node.val)
        if(node.left){queue.push(node.left)}
        if(node.right){queue.push(node.right)}
    }
    return res
};