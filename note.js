
// 1. Loop
'循环'

let arr = [12,3,4,5]

// 1.1 forEach  不可以遍历对象
arr.forEach(function(val,index,arr){   // forEach 回调函数 三个参数
    console.log(val)   // 12 3 4 5
})

// 1.2  for in  可以遍历数组的键名  遍历对象的属性名

let person={name:"老王",age:23,city:"大唐"}

for(let key in person){
    console.log(key)   // name age city
}  

for(let i in arr){
    console.log(i,'type:',typeof(i))    // string类型
}

// 1.3 for of
for(let i of arr){
    console.log(i)   // 12 3 4 5
}

// for(let value of person){
//     console.log(value)    // 报错 不可以遍历对象的值
// }


// 1.4 obj.keys() obj.values()

person={name:"老王",age:23,city:"大唐"}

console.log(Object.keys(person))  // [ 'name', 'age', 'city' ]
console.log(Object.values(person))   // [ '老王', 23, '大唐' ]












// =================================================================================================












// 2 浅拷贝 深拷贝
'浅拷贝 深拷贝'

// 浅拷贝：只拷贝对象的基础属性值，对属性值为对象或数组的属性则拷贝指针。 
// 深拷贝：拷贝对象的所有属性作为一个全新的对象。拷贝前后的对象互不影响。


// 2.1 对象引用   通过地址引用 不会复制 浅拷贝
let ben = {
    name:'ben',
    id:1,
    age: 15
}

let frank = ben
console.log(frank)  // { name: 'ben', id: 1, age: 15 }
ben.id = 2
console.log(frank.id)  // 使用 = 赋值的话 frank和ben指向同一个地址 地址内属性改变 两个对象都改变

// 2.2 浅拷贝   Object.assign()

// 使用Object.assign（） 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
ben = {
    name:'ben',
    id:1,
    age: 15,
    sayhi:function(){
        console.log("hi")
    }
}

let assignedBen = Object.assign({},ben)  // 原始对象拷贝给一个空对象
console.log(assignedBen)  // { name: 'ben', id: 1, age: 15 }  assign后的对象和原对象指向不同地址 互不影响
ben.id = 2
console.log(assignedBen.id)  // 1

assignedBen.sayhi()   // hi
ben.sayhi = function(){ console.log("hello") }
assignedBen.sayhi()  // hi  方法也不影响

// 但是如果原对象的属性是一个对象的引用  如：
var a = {name:{firstName:'wang',lastName:'er'}}
var b = Object.assign({}, a)
a===b // false
b.name.firstName = 'zhang'
console.log(a.name.firstName) //'zhang'

// 所以Object.assign()也是浅拷贝

// 2.3 深拷贝

// 2.3.1  JSON.parse（）与JSON.stringify（）深拷贝

// 通常情况下，我们可以使用JSON.parse（）与 JSON.stringify（）实现对象的深克隆，如下：

let clone = function (obj) {   // 适合于纯数据的对象深拷贝
    return JSON.parse(JSON.stringify(obj));
}
let holand = {
    name:'ben',
    id:1,
    age: 15,
    dad:{
        name:'bigben',
        age:40
    }
}

let roland = clone(holand)
console.log(roland)  // { name: 'ben', id: 1, age: 15, dad: { name: 'bigben', age: 40 } }
holand.dad.age = 43
console.log(roland.dad.age)   // 40  不随原对象改变

// 但是这种方法只能深度拷贝纯数据的对象 
// 如果对象内的属性不是纯数据 如下：
var a = {
    a:function(){
        console.log('hello world')
    },
    b:{c:1},
    c:[1,2,3],
    d:"wanger",
    e:new Date(),
    f:null,
    g:undefined}

var b = clone(a)
console.log("b:",b)  
// b: {
//     b: { c: 1 },
//     c: [ 1, 2, 3 ],
//     d: 'wanger',
//     e: '2020-02-25T11:02:48.778Z',
//     f: null
//   }

// 可以看到不拷贝函数、undefined字段 有点问题

// 手写一个深拷贝函数：
let obj1={
    name:"张三",
    sayhi:function(){console.log("hi")},
	height:[12,26,46],
	birthday:new Date(),
	father:null,
	mother:undefined,
	school:[
			{
				middleschool:'北大附中',
			},
			{
				university:'清华大学',
			}
		]
}

console.log("constructor:",obj1.constructor)   // [Function: Object]

let cloneObj = function(obj){
    if(typeof(obj) !== 'object' || obj === null){return obj}
    if(obj.constructor === Date){ return new Data(obj) }
    if(obj.constructor === RegExp){ return new RegExp(obj) }

    let newobj = new obj.constructor()  // 保持原型链
    for(let key in obj){
        if(obj.hasOwnProperty(key)){   // 是自己的属性 不是原型链上的属性
            let val = obj[key]
            // arguments.callee()解除函数名耦合   
            newobj[key] = typeof(val) === 'object' ? arguments.callee(val) : val 
        //     callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。
        //     这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。


            // newobj[key] = obj[key]
        }
    }
    return newobj
}

let myCloneObject = function(obj){
    if(typeof(obj) !== 'object'){return obj}
    if(obj.constructor === Date){}


}









//===================================









// 3 检测数据类型
'检测数据类型'


// 3.1 typeof : undefined string boolean number object

// 3.2 instanceof  
'instanceof运算符是通过判断该对象在原型链上是否存在一个构造函数的prototype属性；'

let arr1 = [1,2,3]
console.log("instanceof?",arr1 instanceof Array)   // true

// null undefined 不检测

let nummm = 123
console.log(nummm instanceof Number)  // false 

// 因为理论上只有形如 
let nummm2 = new Number(123)
// 创建出来的才是标准的Number类的实例 不过js也允许字面量创建的变量使用Number的方法
console.log(nummm2 instanceof Number)  // true


// 3.3 constructor
console.log(nummm.constructor === Number)  // true
// null undefined 没有生成器 不能判断
// 而且constructor不稳定 可以被覆盖
function fn(){

}
fn.prototype = new Array()
let f = new fn()
console.log(f.constructor === Array)  // true


// 3.4 Object.prototype.toString.call()
console.log(Object.prototype.toString.call(123))    //[object Number]
console.log(Object.prototype.toString.call(null))    //[object Null]
console.log(Object.prototype.toString.call({}))    //[object Object]
console.log(Object.prototype.toString.call(undefined))    //[object Undefined]
console.log(Object.prototype.toString.call('123'))    //[object String]












// =========================================================








// 4. object.create()   https://www.cnblogs.com/QianDingwei/p/10888472.html

'Object.create(proto, [propertiesObject])'

//方法创建一个新对象，使用现有的对象来提供新创建的对象的proto。
// proto : 必须。表示新建对象的原型对象. 该参数会被赋值到目标对象(即新对象，或说是最后返回的对象) 的 原型上。


let objq = {rep:'apple'}
console.log(objq)
let obj2 = new Object(obj)
console.log(obj2)
console.log(obj2.__proto__)  // {}
console.log(obj2.rep)

let obj3 = Object.create(objq)  // 可以理解为继承一个对象 obj 是 obj3 的原型
console.log(obj3)
console.log(obj3.__proto__)   //  { rep: 'apple' }
console.log(obj3.rep)   // 通过原型链访问到rep属性











//=========================================================================








// 5. 原型链 继承

// 5.1 继承的方法

// 5.1.1 构造函数绑定

function Animal(){  // animal的构造函数
    this.species = 'animal'
}

function Cat(name,color){   // cat的构造函数
   
    Animal.apply(this,arguments)  // 劫持另一个对象方法 继承另一个对象属性
    // Function.apply(obj,args)方法能接收两个参数
    // obj：这个对象将代替Function类里this对象
    // args：这个是数组，它将作为参数传给Function（args-->arguments）
    this.name = name
    this.color = color
}

let cat1 = new Cat('h','red')
console.log(cat1.species)  // animal

// 特点：
// 用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
 


// 5.1.2 prototype     让子类新实例的原型等于父类的实例
let cat2 = new Cat()
cat2.prototype = new Animal()  // 子类的实例的原型等于父类的实例 只有这一个继承了
console.log(cat2.species)  // animal

let Dog = function(){
    this.color = 'dogBrown'
}
console.log(Dog.prototype.constructor)  // constructor指向prototype的构造函数  Dog

Dog.prototype = new Animal()   // 构造函数的原型等于父类的实例 

let dog1 = new Dog()
console.log(dog1.species)  // animal
console.log(Dog.prototype.constructor,dog1.constructor)  // 变成Animal了 所以要把constructor给纠正回来:
Dog.prototype.constructor = Dog
console.log(Dog.prototype.constructor,dog1.constructor)  // 变回Dog了 这样才能保持实例的构造函数不混乱
// 总结： 如果替换了对象的prototype对象，那么一定要把替换后的prototype的constructor指回原来的构造函数

// 特点：子类的实例不会继承父类实例的属性


// 5.1.3  利用空对象作为中介 子对象的prototype 赋值为 父对象的prototype
function extend(Child, Parent) {  // Child继承Parent
    var F = function(){};  // 先创建一个空对象
    F.prototype = Parent.prototype;  // 空对象的prototype指向父对象
    Child.prototype = new F();  // 子对象的prototype指向空对象的实例
    Child.prototype.constructor = Child; // 纠正实例的构造函数
    Child.uber = Parent.prototype;  // 为子对象设立一个uber属性 直接指向父对象的prototype 使得子对象可以直接调用父对象的方法 为了完备性
}


// 5.1.4 拷贝继承  把父对象的所有属性和方法 拷贝进子对象



// 5.1.5 __proto__ 与 prototype

// 简单来说，__proto__是对象的一个隐性属性，同时也是一个指针，可以设置实例的原型。
// 实例的 __proto__ 指向构造函数的原型对象。

function Fruit(){    // 构造函数
    this.color = 'green'
}

let apple = new Fruit()  // apple 是实例 
console.log('apple.__proto__ === Fruit.prototype',apple.__proto__ === Fruit.prototype)  
// 实例的__proto__指向了构造函数的prototype
console.log(apple.__proto__)

// 每个对象都有内置的__proto__属性，函数对象才会有prototype属性。

Fruit.prototype.sayhi = function(){   // 原型上挂载一个方法 
    console.log('hi my color',this.color)
}
apple.sayhi()

// 这样也就形成了原型链。通过将实例的原型指向构造函数的原型对象的方式，连通了实例-构造函数-构造函数的原型，
// 原型链的特点就是逐层查找，从实例开始查找一层一层，找到就返回，没有就继续往上找，直到所有对象的原型Object.prototype。





// 7. 闭包、作用域链、内存泄漏

// 7.1 作用域链： 变量从里到外层层搜索
var num = 10
function f1(){
    var num = 20
    function f2(){
        var num = 30
        console.log("num:",num)
    }
    f2()
} 
f1()

// 预解析： 解析代码前 把变量的声明和函数的声明提前 到该作用域最上面 

// 7.2 闭包
// 闭包的概念：函数A中有一个函数B 函数B可以访问函数A的变量或数据 就形成了闭包

// 闭包的模式： 函数闭包 对象闭包

// 闭包的作用： 缓存数据 延长作用域链

// 闭包的优缺点： 缓存数据

function fb1(){
    var n = 10
    return function(){
        n++
        console.log("n:",n)
        return n
    }
}
let ff = fb1()  // fb1()执行完返回的函数给ff
ff() // 调用ff（）函数  11
ff()  // 12
ff()  // 13

// 总结：闭包延长了作用域链

// 10s 内每秒输出一个数字1-10  使用立即执行函数

// for(let i=0;i<5;i++){
//     (function(i){
//         setTimeout(function(){
//             console.log(i)
//         },1000*i)
//     })(i)
// }


// 8. ajax 原生包装 过程  websocket

// xmlhttprequest

// let xhr = new XMLHttpRequest()
// xmlhttp.open(method,url,async);     xhr.open("GET","http://www.runoob.com/try/ajax/demo_get.php",true)
// xmlhttp.send();  




// 9. new 操作符干了什么？

function constructorFn (state, data) {
    this.data = data;
    this.state = state;
}

var instance1 = new constructorFn();  // 相当于：
var obj = {}   // 声明一个空对象
obj.__proto__ = constructorFn.prototype  // 将空对象的__proto__指向构造函数的原型 新增构造函数的prototype上挂载的属性和方法
constructorFn.call(obj)  // 将构造函数的this指向obj 新增了构造函数本地的属性和方法



// 10 Array.map filter reduce

let testArr = [1,2,3,4,5]
let mapArr = testArr.map(x=>{
    return x * x
})

console.log(mapArr)





// 用递归编写一个函数，计算 n 个数字的和，n >= 0。不能循环。

let add = function(n){
    if(n<1){
        return 0
    }
    return add(n-1)+n

}

console.log(add(5))




