"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Navbar() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: [\n                !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn,\n                    children: \" Signin\"\n                }, void 0, false, {\n                    fileName: \"/Users/sjahromi/playground/IA/components/Navbar.js\",\n                    lineNumber: 11,\n                    columnNumber: 19\n                }, this),\n                session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut,\n                    children: \" Signout\"\n                }, void 0, false, {\n                    fileName: \"/Users/sjahromi/playground/IA/components/Navbar.js\",\n                    lineNumber: 12,\n                    columnNumber: 18\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sjahromi/playground/IA/components/Navbar.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDb0M7QUFFN0QsU0FBU0ksTUFBTSxHQUFHO0lBRWhCLE1BQU0sRUFBRUMsSUFBSSxFQUFDQyxPQUFPLEdBQUUsR0FBR0gsMkRBQVUsRUFBRTtJQUNyQyxxQkFDRTtrQkFFQSw0RUFBQ0ksS0FBRztZQUFDQyxTQUFTLEVBQUMsRUFBRTs7Z0JBQ2YsQ0FBQ0YsT0FBTyxrQkFBSSw4REFBQ0csUUFBTTtvQkFBQ0MsT0FBTyxFQUFJVCxtREFBTTs4QkFBRSxTQUFPOzs7Ozt3QkFBUztnQkFDdkRLLE9BQU8sa0JBQUksOERBQUNHLFFBQU07b0JBQUNDLE9BQU8sRUFBSVIsb0RBQU87OEJBQUUsVUFBUTs7Ozs7d0JBQVM7Ozs7OztnQkFDcEQ7cUJBQ0gsQ0FDSjtDQUNGO0FBRUQsaUVBQWVFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXlzdG9uZS1yZWFjdC10b2RvLWRlbW8vLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG5cbiAgY29uc3QgeyBkYXRhOnNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICB7ICFzZXNzaW9uICYmIDxidXR0b24gb25DbGljayA9IHtzaWduSW59PiBTaWduaW48L2J1dHRvbj4gfVxuICAgIHsgc2Vzc2lvbiAmJiA8YnV0dG9uIG9uQ2xpY2sgPSB7c2lnbk91dH0+IFNpZ25vdXQ8L2J1dHRvbj4gfVxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJSZWFjdCIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiTmF2YmFyIiwiZGF0YSIsInNlc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\n\n\nfunction index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sjahromi/playground/IA/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Hello from home\"\n            }, void 0, false, {\n                fileName: \"/Users/sjahromi/playground/IA/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNnQjtBQUV6QyxTQUFTRSxLQUFLLEdBQUc7SUFDZixxQkFDRTs7MEJBQ0EsOERBQUNELDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDRSxLQUFHOzBCQUFDLGlCQUFlOzs7OztvQkFBTTs7b0JBQ3ZCLENBRUo7Q0FDRjtBQUVELGlFQUFlRCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5c3RvbmUtcmVhY3QtdG9kby1kZW1vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxOYXZiYXIgLz5cbiAgICA8ZGl2PkhlbGxvIGZyb20gaG9tZTwvZGl2PiAgICBcbiAgICA8Lz5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiaW5kZXgiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();