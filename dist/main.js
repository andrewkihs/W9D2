/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/canvas.js":
/*!************************!*\
  !*** ./dist/canvas.js ***!
  \************************/
/***/ ((module) => {

eval("module.exports = {\n    canvas: document.addEventListener(\"DOMContentLoaded\", () => {\n        const canvasEle = document.getElementById(\"game-canvas\");\n        canvasEle.width = 500;\n        canvasEle.height = 500;\n\n        const ctx = canvasEle.getContext(\"2d\");\n        ctx.fillStyle = \"black\";\n        ctx.fillRect(0,0,500,500);\n        \n    })\n}\n\n\n//# sourceURL=webpack:///./dist/canvas.js?");

/***/ }),

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nfunction Asteroid (pos) { \n    this.COLOR = \"grey\";\n    this.RADIUS = 200;\n    MovingObject.call(this);\n\n    this.color = COLOR;\n    this.radius = RADIUS;\n    this.vel = Utils.randomVec(5);\n    this.pos = pos;\n};\n\n// Asteroid.prototype.constructor = function (pos) {\n//     MovingObject.call(this);\n\n//     this.color = COLOR;\n//     this.radius = RADIUS;\n//     this.vel = Utils.randomVec(5);\n//     this.pos = pos;\n// }\n\nUtils.inherits(Asteroid, MovingObject); \n\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n__webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n__webpack_require__(/*! ../dist/canvas */ \"./dist/canvas.js\");\n__webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n__webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n__webpack_require__(/*! ./game */ \"./src/game.js\");\n__webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n__webpack_require__(/*! ./ship */ \"./src/ship.js\");\n__webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n// console.log(\"Webpack workiing\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  \n    const canvasEle = document.getElementById(\"game-canvas\");\n    const ctx = canvasEle.getContext(\"2d\");\n\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n\n    mo.draw(ctx);\n    mo.move();\n    mo.draw(ctx);\n\n    const asteroid = new Asteroid([250,250]);\n    console.log(asteroid);\n    asteroid.draw(ctx);\n\n});\n\n\n// import _ from 'lodash';\n\n// function component() {\n//     const element = document.createElement('div');\n\n//     // Lodash, now imported by this script\n//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n//     return element;\n// }\n\n// document.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\n\nMovingObject.prototype.draw = function (ctx){\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.strokeStyle = \"blue\";\n  ctx.lineWidth = 10;\n  ctx.fillStyle = this.color;\n  ctx.fill(); \n}\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() { }\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n        randomVec(length) {\n            const deg = 2 * Math.PI * Math.random();\n            return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n        },\n        scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;