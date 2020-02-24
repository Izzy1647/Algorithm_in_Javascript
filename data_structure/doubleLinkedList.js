// 双向链表

class Node{  // 结点
    constructor(key,val){
        this.key = key
        this.val = val
    }
}

class DoubleLink{   // 双向列表 要next和prev
    constructor(){
        this.head = new Node(0,0)
        this.tail = new Node(0,0)
        this.size = 0    // 当前链表长度
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    addNodeToHead(node){   // 在头部加入新结点
        node.next = this.head.next
        node.prev = this.head
        this.head.next.prev = node
        this.head.next = node
        this.size ++
    }

    removeNode(node){    // 删除结点
        node.prev.next = node.next
        node.next.prev = node.prev
        this.size --
    }

    removeFromLast(){   // 删除最后一个节点 返回该结点
        if(this.size === 0){
            return null
        }
        let delNode = this.tail.prev
        this.removeNode(delNode)
        return delNode
    }
}
