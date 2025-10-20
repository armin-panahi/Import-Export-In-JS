// Lesson 10
// The concept of modules and modular programming


// Import React
// import React from "react";
// Import's
import obj,{myprofile, fullname as my_name, age as my_age, fullname, age} from
"./utils.js";
import * as varsFile from "./variables.js";

// Object Destructuring
let {x:ten_num, y:fifteen_num} = varsFile;


// Show
console.log(fullname, age);
console.log(ten_num);
console.log(varsFile.x);


///////////////////////
console.log("//////////");
///////////////////////


// Show
console.log(myprofile);


///////////////////////
console.log("//////////");
///////////////////////

// Show Default
console.log("Default:", obj);
console.log(obj.username, " | ", obj.password);

// Finish