/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./aulaproject/frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./aulaproject/frontend/src/components/App.js":
/*!****************************************************!*\
  !*** ./aulaproject/frontend/src/components/App.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\aulaproject\\\\frontend\\\\src\\\\components\\\\App.js: Support for the experimental syntax 'jsx' isn't currently enabled (14:9):\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mFragment\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mHeader\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:766:17)\\n    at Parser.raiseWithData (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:759:17)\\n    at Parser.expectOnePlugin (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8981:18)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10276:22)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9844:23)\\n    at Parser.parseUpdate (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9824:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9813:17)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9657:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9620:21)\\n    at C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9586:39\\n    at Parser.allowInAnd (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11302:12)\\n    at Parser.parseMaybeAssignAllowIn (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9586:17)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10473:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10177:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9844:23)\\n    at Parser.parseUpdate (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9824:21)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9813:17)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9657:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9620:21)\\n    at Parser.parseExpressionBase (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9564:23)\\n    at C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:39\\n    at Parser.allowInAnd (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11296:16)\\n    at Parser.parseExpression (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:17)\\n    at Parser.parseReturnStatement (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11799:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11478:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11430:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12012:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Jaume.JAUME\\\\Desktop\\\\Aula Django\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11998:10)\");\n\n//# sourceURL=webpack:///./aulaproject/frontend/src/components/App.js?");

/***/ }),

/***/ "./aulaproject/frontend/src/index.js":
/*!*******************************************!*\
  !*** ./aulaproject/frontend/src/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./aulaproject/frontend/src/components/App.js\");\n\n\n//# sourceURL=webpack:///./aulaproject/frontend/src/index.js?");

/***/ })

/******/ });