# TypeScript 筆記

[【前端速成】TypeScript TS 快速入門｜Tiktok工程師帶你入門前端｜布魯斯前端](https://www.youtube.com/watch?v=GinkGJZBHIY&list=PLpg39DIMCVqzG7gy_RPdsBIy4wzD5Kqip&index=136&t=7431s)



###### <br/>

---

###### <br/>



## 什麼是 TypeScript

1. **加強版的 JavaScript (Superset)**

2. **加強了「Type」的部分**

3. **開發完成後，最後還是需要編譯成 JavaScript**

4. **適用於開發前端跟後端，例如：搭配 Vue、React、Angular、Express 等框架**

###### <br/>
###### <br/>
###### <br/>





## 為什麼需要 TypeScript

1. **開發時的 (Type) 類型檢查**

2. **補強動態語言 JS 執行起來才出錯的缺點 (例如：用字串做加減乘除)**

3. **提高專案程式碼的維護性**

###### <br/>
###### <br/>
###### <br/>





## TypeScript 的優缺點

- 優點：

    - **減少程式碼運行時的 Bug**

    - **提高專案的穩定性**

    - **看懂一些 function 參數等等**
    
- 缺點：

    - **不是「真正」的類型檢查**

    - **需要編譯，CI / CD 部屬速度慢**

    - **花更多時間開發跟學習**

###### <br/>
###### <br/>
###### <br/>





## 一定需要 TypeScript 嗎

- 時間成本考量

- 專案適不適合

- Trade-off

###### <br/>
###### <br/>
###### <br/>





## 執行 TypeScript 過程

```
TypeScript               編譯工具：tsc           JavaScript
開發：TS                     編譯...             最後產物：JS
檔案.ts            →                      →     前端：改 HTML 引用
檔案.tsx                                        後端：部屬到 Node.js 環境
tsconfig.json
```

###### <br/>
###### <br/>
###### <br/>





## 建立 TypeScript 環境

1. 下載 node.js (只要超過 12 版應該就可以了)

2. 下載 TypeScript 編譯器 ([參考連結](https://www.typescriptlang.org/))

    - 想在專案裡下載的話，直接到專案路徑下執行指令 npm install typescript --save-dev

    - 想直接安裝在電腦裡，打開命令提示字元後執行指令 npm install typescript -g，完成後可以執行 tsc -v 查看目前版本

    - 寫完 TypeScript 後在終端機執行指令 tsc 檔名.ts，就會跑出編譯後的 檔名.js 檔案了 (如果有設定  tsconfig.json 中的 rootDir 和 outDir，那終端機執行指令只要打 tsc 就可以了)

    - 在終端機執行指令 tsc --watch，每當程式碼有變動會直接編譯成 JS

    - 在終端機執行指令 tsc --init 可以召喚 tsconfig.json，其中有很多東西可以修改，包括 JS 的版本、rootDir、是否允許 TS專案中有 JS 檔案

    - rootDir 為入口，outDir 為出口，在 tsconfig.json 都可以視情況更改

    - tsconfig.json 中的 inlineSourceMap 建議打開 (inlineSourceMap: true)，因為 TypeScript 會編譯成 JavaScript 去執行，所以在開發者工具中顯示的報錯或 console.log 出的內容所顯示的行數是根據被編譯成的 JavaScript 的行數，若打開 inlineSourceMap 的話可以將開發者工具中顯示的行數改為 TypeScript 檔案的行數，這樣可以更方便的進行 debug