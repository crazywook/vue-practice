"use strict";
exports.__esModule = true;
// import Vue from "vue"
var vue_1 = require("vue");
console.log("Vue", vue_1["default"]);
// import numberBaseball from "./numberBaseball.vue"
// // const Vue = require("vue")
// console.log("Vue", Vue)
// new Vue(numberBaseball).$mount("#root")
var v = new vue_1["default"]({
    el: "#root",
    template: "\n        <div>\n            <div>Hello {{name}}!</div>\n            Name: <input v-model=\"name\" type=\"text\">\n        </div>\n    ",
    data: {
        name: "World"
    }
});
