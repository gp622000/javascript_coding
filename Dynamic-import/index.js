// We will use dynamic import for lazy loading means not whole module will import first
// we don't need to write type="module" in the index.html file.

// Dynamic imports or Code Splitting is the practice of breaking up your JavaScript modules into smaller bundles and loading them dynamically at runtime to improve and increase the performance of your website dramatically


// import('./dynamic.js')
//     .then(data=> {
//         console.log(data.default(2,3));
//         // console.log(data.area(3,4));
// })

// since this is a promise so we can also use async and await.

(async function(){
    const math = await import('./dynamic.js');
    console.log(math.area(2,3));
})();

import('./dynamic.js')
    .then(data => console.log(data.pow(2,4)))
    .catch(err => console.error(err))

