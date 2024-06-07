// 先使用 tsc --init 召喚 tsconfig.json
// 其中 inlineSourceMap: true 打開
// rootDir 打開並改為 "rootDir": "./src"
// outDir 打開並改為 "outDir": "./dist"
// 用 tsc 或 tsc --watch 指令執行





// ========== 型別 ========== //
// 基本類型 
let str1: string = "Charmy"   // 可以直接寫成 let str1 = "Charmy1"
let str2: string   // 如果是先宣告沒有要給值的話建議附上型別
str2 = "Charmy2"
let num: number = 9999
let boo: boolean = true
let n: null = null
let un: undefined = undefined
let test: any = 55   // any 可以使用任何型別，就跟 JS 一樣，但如果用太多，就失去了使用 TS 的意義

// 陣列 
let arr1: string[] = ["a", "b"]
let arr2: string[][] = [["a", "b"]]

// 元祖
let tuple1: [number, string, boolean] = [1, "a", true]
let tuple2: [string, string][] = [["a", "b"]]





// ========== Enum 枚舉 ========== //
// 開直播 api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}
const staus = LiveStatus.FAIL
console.log("staus：", staus)





// ========== Union ========== //
let aaa: number | string
aaa = 9999
aaa = "string"





// ========== type ========== //
type A = number | string
type B = boolean | string
let a1: A
a1 = 9999
a1 = "string"
let b1: B
b1 = true
b1 = "string"





// ========== interface ========== //
// type 和 interface 最大的區別是 type 不能擴充
interface User {
    name: string
    age: number
}

// object
type CARD1 = {
    name: string
    desc: string
}

const obj1: CARD1 = {
    name: "Charmy",
    desc: "..."
    
}

interface CARD2 {
    name: string
    desc: string
}

interface CARD2 {
    age?: number   // 加 ? 的意思代表也可以是 undefined，這樣就算下面 obj2 不寫 age 也不會報錯
}

const obj2: CARD2 = {
    name: "Charmy",
    desc: "...",
    age: 9999
}





// ========== function ========== //
// function hello () {}
// 參數
function hello1(a: string, b: string) {
    return a + b
}

function hello2(a: string, b: string): number {
    console.log(a, b)
    return 999
}

function hello3(a: number, b: boolean, c: string) {
    return 999
}

// undefined
function test2(a: number) {
    console.log(a)
}

// 有問號的要擺最後面
function hello4(name: string, age?: number) {
    // let a: number
    // a = age
    if (age === undefined) return -1
    test2(age)
    return
}

// 箭頭函式
const func1 = () => { }
const func2 = () => {
    return 999
}





// ========== 斷言 as unknown ========== //
// jsonplaceholder：https://jsonplaceholder.typicode.com/
type Data = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
}

const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta = {
    name: string
}

// 假設 data1 是動態的
const beta = data1 as unknown as Beta





// ========== class ========== //
// private：私有
// public：公開   預設就是 public
// protected：受保護
// protected 跟 private 不一樣的地方是 protected 可以用繼承的
class Live {
    roomName: string
    private id: string   // 只有在 TS 沒辦法訪問到，但是 JS 可以
    protected name: string

    constructor(roomName1: string, id1: string, name1: string) {
        console.log("建立直播中...")
        this.roomName = roomName1
        this.id = id1
        this.name = name1
    }
}

class CarLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) {
        super(roomName1, id1, name1)
    }

    start() {
        // super.name
    }
}

// 在外面的情況下 private 和 protected 是沒辦法被訪問到的
const live = new Live("1號", "000001", "Charmy1")
console.log(live)
const carLive = new CarLive("car room", "000001", "Charmy2")
console.log(carLive)

// 用 JS 原生的方式去宣告私有變數的內容
class Live2 {
    #name   // 在 JS 中，變數前面加 # 可以把變數變成私有變數
    constructor(name: string) {
        this.#name = name
    }
}
const live2 = new Live2("live2")
console.log(live2)   // 裡面就沒東西了

// 所以 TS 中的 private 只是在開發的時候告知已經是私有變數，不要去使用，但是編譯成 JS 時還是會出現，如果想要完全隱藏，只能用 JS 原生的方式





// ========== implements ========== //
// 可以直接在 interface 加上 export
interface CarProps {
    name: string
    age: number
    start: () => void   // start 一個不會 return 東西的 function
}
// implements 就是實作的意思
class Car implements CarProps {
    name: string   // 注意：在用 class 實做介面時，要注意 interface 的內容，不要用 private 修飾詞
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    start() {}
}





// ========== 泛型 ========== //
// type 一開始就宣告好，但是有時候會想在特定情況也接受不同 type，雖然可以多寫幾遍，但是很沒效率，所以才有泛型的出現
function print<T>(data: T) {   // T 可以隨便寫
    console.log("data", data)
}

print<number>(999)
print<string>("Charmy")
print<boolean>(true)

class Print<T> {
    data: T
    constructor(d: T) {
        this.data = d
    }
}

const p1 = new Print<number>(999)
const p2 = new Print<string>("Charmy")
console.log("p1", p1)
console.log("p2", p2)





// ========== utility ========== //
// 參考網址：https://www.typescriptlang.org/docs/handbook/utility-types.html
// ===== Record<Keys, Type> ===== //
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred" | "Charmy";

// key
// value
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
    Charmy: { age: 16, breed: "British Shorthair" },
};
console.log(cats)

const objUtility: Record<string, boolean> = {
    name: true,
    // age: 123   // 會報錯， 因為 123 不是 boolean
}

// =====Pick<Type, Keys> ===== //
// 寫 interface 時有重複共用的，直接 pick 放到新的 type
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     // description: ""   // 會報錯，因為 description 沒有被 pick 出來
// };

// todo;

// ===== Omit<Type, Keys>===== //
// 跟 Pick 很像，Pick是選出東西，Omit 是省略
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
    // description: ""   // 會報錯，因為 description 已經被省略
};

todo;