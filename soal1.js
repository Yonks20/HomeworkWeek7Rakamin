//baca file
const fs = require("fs");

//import local module
const luas = require("./rumus.js");

console.log(luas.luasPersegi(15));
console.log(luas.kelilingPersegi(20));
console.log(luas.luasPersegiPanjang(10, 20));
console.log(luas.kelilingPersegiPanjang(10, 20));
