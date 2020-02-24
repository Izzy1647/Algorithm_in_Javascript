// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

// 双向链表的作用： 方便删除结点  不用双向链表的话 Map.keys()方法
// map：哈希表 通过key快速查找对应结点Node

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

/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
    this.capacity = capacity   // 缓存最大容量
    this.map = new Map()    // 用来查询键值对  map: {key,Node}
    this.cache = new DoubleLink()  // 存放结点的双向链表 cache
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let map = this.map
    if(!map.has(key)){  // map里没有这个key
        return -1
    }else{
        let val = map.get(key).val  // get 找到的是一个Node
        this.put(key,val)  // 把这个放到最前面 put()里面把后面的那个给删了
        return val
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {   // 把这个键值对放到链表头
    let cahce = this.cache
    let map = this.map
    let insertNode = new Node(key,value)  // 待插入的结点

    if(map.has(key)){  // 如果有这个key 先把原来的key删了
        cahce.removeNode(map.get(key))
    }

    if(this.capacity === this.cache.size){  // 如果容量满了 删掉尾部的第一个
        let deletedNode = cahce.removeFromLast()
        map.delete(deletedNode.key)
    }

    cahce.addNodeToHead(insertNode)
    map.set(key,insertNode)

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */