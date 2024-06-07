"use strict";
// 先使用 tsc --init 召喚 tsconfig.json
// 其中 inlineSourceMap: true 打開
// rootDir 打開並改為 "rootDir": "./src"
// outDir 打開並改為 "outDir": "./dist"
// 用 tsc 或 tsc --watch 指令執行
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
// ========== 型別 ========== //
// 基本類型 
let str1 = "Charmy"; // 可以直接寫成 let str1 = "Charmy1"
let str2; // 如果是先宣告沒有要給值的話建議附上型別
str2 = "Charmy2";
let num = 9999;
let boo = true;
let n = null;
let un = undefined;
let test = 55; // any 可以使用任何型別，就跟 JS 一樣，但如果用太多，就失去了使用 TS 的意義
// 陣列 
let arr1 = ["a", "b"];
let arr2 = [["a", "b"]];
// 元祖
let tuple1 = [1, "a", true];
let tuple2 = [["a", "b"]];
// ========== Enum 枚舉 ========== //
// 開直播 api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const staus = LiveStatus.FAIL;
console.log("staus：", staus);
// ========== Union ========== //
let aaa;
aaa = 9999;
aaa = "string";
let a1;
a1 = 9999;
a1 = "string";
let b1;
b1 = true;
b1 = "string";
const obj1 = {
    name: "Charmy",
    desc: "..."
};
const obj2 = {
    name: "Charmy",
    desc: "...",
    age: 9999
};
// ========== function ========== //
// function hello () {}
// 參數
function hello1(a, b) {
    return a + b;
}
function hello2(a, b) {
    console.log(a, b);
    return 999;
}
function hello3(a, b, c) {
    return 999;
}
// undefined
function test2(a) {
    console.log(a);
}
// 有問號的要擺最後面
function hello4(name, age) {
    // let a: number
    // a = age
    if (age === undefined)
        return -1;
    test2(age);
    return;
}
// 箭頭函式
const func1 = () => { };
const func2 = () => {
    return 999;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
// 假設 data1 是動態的
const beta = data1;
// ========== class ========== //
// private：私有
// public：公開   預設就是 public
// protected：受保護
// protected 跟 private 不一樣的地方是 protected 可以用繼承的
class Live {
    constructor(roomName1, id1, name1) {
        console.log("建立直播中...");
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }
}
class CarLive extends Live {
    constructor(roomName1, id1, name1) {
        super(roomName1, id1, name1);
    }
    start() {
        // super.name
    }
}
// 在外面的情況下 private 和 protected 是沒辦法被訪問到的
const live = new Live("1號", "000001", "Charmy1");
console.log(live);
const carLive = new CarLive("car room", "000001", "Charmy2");
console.log(carLive);
// 用 JS 原生的方式去宣告私有變數的內容
class Live2 {
    constructor(name) {
        _Live2_name.set(this, void 0); // 在 JS 中，變數前面加 # 可以把變數變成私有變數
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2("live2");
console.log(live2); // 裡面就沒東西了
// implements 就是實作的意思
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() { }
}
// ========== 泛型 ========== //
// type 一開始就宣告好，但是有時候會想在特定情況也接受不同 type，雖然可以多寫幾遍，但是很沒效率，所以才有泛型的出現
function print(data) {
    console.log("data", data);
}
print(999);
print("Charmy");
print(true);
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p1 = new Print(999);
const p2 = new Print("Charmy");
console.log("p1", p1);
console.log("p2", p2);
// key
// value
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
    Charmy: { age: 16, breed: "British Shorthair" },
};
console.log(cats);
const objUtility = {
    name: true,
    // age: 123   // 會報錯， 因為 123 不是 boolean
};
const todo = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
    // description: ""   // 會報錯，因為 description 已經被省略
};
todo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLGtDQUFrQztBQUNsQywyQkFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCLDhCQUE4QjtBQUM5QixRQUFRO0FBQ1IsSUFBSSxJQUFJLEdBQVcsUUFBUSxDQUFBLENBQUcsOEJBQThCO0FBQzVELElBQUksSUFBWSxDQUFBLENBQUcsc0JBQXNCO0FBQ3pDLElBQUksR0FBRyxTQUFTLENBQUE7QUFDaEIsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFBO0FBQ3RCLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQTtBQUN2QixJQUFJLENBQUMsR0FBUyxJQUFJLENBQUE7QUFDbEIsSUFBSSxFQUFFLEdBQWMsU0FBUyxDQUFBO0FBQzdCLElBQUksSUFBSSxHQUFRLEVBQUUsQ0FBQSxDQUFHLDZDQUE2QztBQUVsRSxNQUFNO0FBQ04sSUFBSSxJQUFJLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDL0IsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRW5DLEtBQUs7QUFDTCxJQUFJLE1BQU0sR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3RELElBQUksTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFNN0MsbUNBQW1DO0FBQ25DLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osU0FBUztBQUNULElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUNELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUE7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFNNUIsaUNBQWlDO0FBQ2pDLElBQUksR0FBb0IsQ0FBQTtBQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFBO0FBQ1YsR0FBRyxHQUFHLFFBQVEsQ0FBQTtBQVNkLElBQUksRUFBSyxDQUFBO0FBQ1QsRUFBRSxHQUFHLElBQUksQ0FBQTtBQUNULEVBQUUsR0FBRyxRQUFRLENBQUE7QUFDYixJQUFJLEVBQUssQ0FBQTtBQUNULEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDVCxFQUFFLEdBQUcsUUFBUSxDQUFBO0FBbUJiLE1BQU0sSUFBSSxHQUFVO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLEtBQUs7Q0FFZCxDQUFBO0FBV0QsTUFBTSxJQUFJLEdBQVU7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsS0FBSztJQUNYLEdBQUcsRUFBRSxJQUFJO0NBQ1osQ0FBQTtBQU1ELG9DQUFvQztBQUNwQyx1QkFBdUI7QUFDdkIsS0FBSztBQUNMLFNBQVMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNoQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakIsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVUsRUFBRSxDQUFTO0lBQzVDLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQztBQUVELFlBQVk7QUFDWixTQUFTLEtBQUssQ0FBQyxDQUFTO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbEIsQ0FBQztBQUVELFlBQVk7QUFDWixTQUFTLE1BQU0sQ0FBQyxJQUFZLEVBQUUsR0FBWTtJQUN0QyxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLElBQUksR0FBRyxLQUFLLFNBQVM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNWLE9BQU07QUFDVixDQUFDO0FBRUQsT0FBTztBQUNQLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUN2QixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7SUFDZixPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUMsQ0FBQTtBQWVELFNBQWUsT0FBTzs7UUFDbEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUN2RSxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQVUsQ0FBQTtJQUN6QyxDQUFDO0NBQUE7QUFFRCxNQUFNLEtBQUssR0FBUztJQUNoQixRQUFRLEVBQUUsQ0FBQztJQUNYLElBQUksRUFBRSxDQUFDO0lBQ1AsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixXQUFXLEVBQUUsS0FBSztDQUNyQixDQUFBO0FBTUQsZ0JBQWdCO0FBQ2hCLE1BQU0sSUFBSSxHQUFHLEtBQXdCLENBQUE7QUFNckMsaUNBQWlDO0FBQ2pDLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLCtDQUErQztBQUMvQyxNQUFNLElBQUk7SUFLTixZQUFZLFNBQWlCLEVBQUUsR0FBVyxFQUFFLEtBQWE7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQTtRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLENBQUM7Q0FDSjtBQUVELE1BQU0sT0FBUSxTQUFRLElBQUk7SUFDdEIsWUFBWSxTQUFpQixFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ3JELEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCxLQUFLO1FBQ0QsYUFBYTtJQUNqQixDQUFDO0NBQ0o7QUFFRCx3Q0FBd0M7QUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUVwQix1QkFBdUI7QUFDdkIsTUFBTSxLQUFLO0lBRVAsWUFBWSxJQUFZO1FBRHhCLDhCQUFLLENBQUcsNkJBQTZCO1FBRWpDLHVCQUFBLElBQUksZUFBUyxJQUFJLE1BQUEsQ0FBQTtJQUNyQixDQUFDO0NBQ0o7O0FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFHLFVBQVU7QUFlL0IscUJBQXFCO0FBQ3JCLE1BQU0sR0FBRztJQUlMLFlBQVksSUFBWSxFQUFFLEdBQVc7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7SUFDbEIsQ0FBQztJQUVELEtBQUssS0FBSSxDQUFDO0NBQ2I7QUFNRCw4QkFBOEI7QUFDOUIsZ0VBQWdFO0FBQ2hFLFNBQVMsS0FBSyxDQUFJLElBQU87SUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUVELEtBQUssQ0FBUyxHQUFHLENBQUMsQ0FBQTtBQUNsQixLQUFLLENBQVMsUUFBUSxDQUFDLENBQUE7QUFDdkIsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFBO0FBRXBCLE1BQU0sS0FBSztJQUVQLFlBQVksQ0FBSTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7Q0FDSjtBQUVELE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFTLEdBQUcsQ0FBQyxDQUFBO0FBQ2pDLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFTLFFBQVEsQ0FBQyxDQUFBO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBZ0JyQixNQUFNO0FBQ04sUUFBUTtBQUNSLE1BQU0sSUFBSSxHQUE2QjtJQUNuQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDcEMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO0lBQ3RDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO0lBQ2hELE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO0NBQ2xELENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRWpCLE1BQU0sVUFBVSxHQUE0QjtJQUN4QyxJQUFJLEVBQUUsSUFBSTtJQUNWLHVDQUF1QztDQUMxQyxDQUFBO0FBK0JELE1BQU0sSUFBSSxHQUFnQjtJQUN0QixLQUFLLEVBQUUsWUFBWTtJQUNuQixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsYUFBYTtJQUN4QixnREFBZ0Q7Q0FDbkQsQ0FBQztBQUVGLElBQUksQ0FBQyJ9