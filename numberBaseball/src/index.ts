// import Vue from "vue"
import Vue from "vue"

import numberBaseball from "./numberBaseball.vue"

console.log("Vue", Vue)

// // const Vue = require("vue")
console.log("Vue", Vue)
new Vue(numberBaseball).$mount("#root")
// let v = new Vue({
//     el: "#root",
//     template: `
//         <div>
//             <div>Hello {{name}}!</div>
//             Name: <input v-model="name" type="text">
//         </div>
//     `,
//     data: {
//         name: "World"
//     }
// });