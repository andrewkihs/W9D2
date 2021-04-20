
require("./asteroid");
// require("../dist/canvas");
require("./bullet");
require("./game_view");
require("./game");
require("./moving_object");
require("./ship");
require("./utils");

console.log("Webpack workiing");

export function hello(name) {
    console.log(`hello ${name}`);
}

// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());