// module import file:- preferred....



// default import 

import multiply from "./mathOper";
console.log(multiply(2,3));

// named import 

import {add, sub} from "./mathOper";
console.log(add(6,2));
console.log(sub(6,2));