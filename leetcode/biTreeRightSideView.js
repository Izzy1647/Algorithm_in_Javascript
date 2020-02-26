
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

// 层序遍历 找每层最右边的结点

var rightSideView = function(root) {
    if(!root){return []}
    let levelRes = []
    let queue = [root]

    // 层序遍历 保存成形如 [[3],[9,20],[15,7]] 的数组
    while(queue.length){
        let levelNodes = []
        for(let i=0,len = queue.length;i<len;i++){
            let shiftedNode = queue.shift()
            levelNodes.push(shiftedNode.val)
            if(shiftedNode.left){queue.push(shiftedNode.left)}
            if(shiftedNode.right){queue.push(shiftedNode.right)}
        }
        levelRes.push(levelNodes)
    }
    
    // 取层序遍历数组中每一项的最后一项
    let rightRes = []
    for(let i=0;i<levelRes.length;i++){
        rightRes.push(levelRes[i].pop())
    }

    return rightRes
};


// 有什么区别?? 

for(let i=0,len=queue.length;i<len;i++){  // len整个循环中固定

}

for(let i=0;i<queue.length;i++){   // queue.length 实时更新 循环时会上来判断是否小于

}