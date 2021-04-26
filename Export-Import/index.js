// for import export we will use type=module so we can import like this.
// generally we use .mjs extension for module file this is just for seprate normal js file with mjs file.
// We can export functions, var, let, const, you can't use export inside a function, 

// First of all, you need to include type="module" in the <script> element, to declare this script as a module. 
// You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the <script> element:

// You can only use import and export statements inside modules, not regular scripts.

// Modules are only executed once, even if they have been referenced in multiple <script> tags.
console.log(ad(2,5));
import { square } from './aggregate.js';
import {add as ad } from './export.js';
console.log("You're in import/Export");
console.log(ad(2,3))
// console.log('multiply:',multiply(2,3))
console.log('Square:',square(5));
// renaming module as ad.
