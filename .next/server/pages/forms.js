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
exports.id = "pages/forms";
exports.ids = ["pages/forms"];
exports.modules = {

/***/ "./apollo-client.ts":
/*!**************************!*\
  !*** ./apollo-client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nclass ApServerClient {\n    constructor(){\n        this.apClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n            uri: process.env.GQL_SERVER_URL,\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n        });\n    }\n    static getInstance() {\n        if (!this.instance) {\n            this.instance = new ApServerClient();\n        }\n        return this.instance;\n    }\n    get client() {\n        return this.apClient;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApServerClient.getInstance());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUV4RSxNQUFNRSxjQUFjO0lBS2xCLGFBQXNCO1FBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlILHdEQUFZLENBQUM7WUFDL0JJLEdBQUcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWM7WUFDL0JDLEtBQUssRUFBRSxJQUFJUCx5REFBYSxFQUFFO1NBQzNCLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBY1EsV0FBVyxHQUFHO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUNDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJUixjQUFjLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDUSxRQUFRLENBQUM7S0FDdEI7SUFDQSxJQUFJQyxNQUFNLEdBQUU7UUFDWCxPQUFPLElBQUksQ0FBQ1IsUUFBUSxDQUFDO0tBQ3RCO0NBQ0Y7QUFFRCxpRUFBZUQsY0FBYyxDQUFDTyxXQUFXLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tleXN0b25lLXJlYWN0LXRvZG8tZGVtby8uL2Fwb2xsby1jbGllbnQudHM/MzlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIERhdGFQcm94eSwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY2xhc3MgQXBTZXJ2ZXJDbGllbnQge1xuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBcFNlcnZlckNsaWVudDtcbiAgcHJpdmF0ZSBhcENsaWVudCA6RGF0YVByb3h5O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcENsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgdXJpOiBwcm9jZXNzLmVudi5HUUxfU0VSVkVSX1VSTCxcbiAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXBTZXJ2ZXJDbGllbnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbiAgIGdldCBjbGllbnQoKXtcbiAgICByZXR1cm4gdGhpcy5hcENsaWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcFNlcnZlckNsaWVudC5nZXRJbnN0YW5jZSgpO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcFNlcnZlckNsaWVudCIsImFwQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIkdRTF9TRVJWRVJfVVJMIiwiY2FjaGUiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo-client.ts\n");

/***/ }),

/***/ "./pages/forms/index.js":
/*!******************************!*\
  !*** ./pages/forms/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apollo-client */ \"./apollo-client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst getForms = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n\tquery{\n    forms{\n    displayName,\n    description,\n      editor{\n        name\n      }\n    }\n  }\n\n`;\n//TODO\nfunction forms({ forms  }) {\n    console.log(\"recieved forms\", forms);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"forms\"\n    }, void 0, false, {\n        fileName: \"/Users/sjahromi/playground/IA/pages/forms/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    const { data  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].client.query({\n        query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n        query Forms {\n            forms{\n            displayName,\n            description,\n            editor{\n                name\n            }\n          }\n        }\n      `\n    });\n    console.log(\" hey -------- :\", data);\n    return {\n        props: {\n            forms: data\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jtcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFvQztBQUNNO0FBQ2pCO0FBQytDO0FBRXhFLE1BQU1NLFFBQVEsR0FBR04sK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUFXckIsQ0FBQztBQUVELE1BQU07QUFDTixTQUFTTyxLQUFLLENBQUMsRUFBQ0EsS0FBSyxHQUFDLEVBQUU7SUFFeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFRixLQUFLLENBQUMsQ0FBQztJQUVuQyxxQkFDRSw4REFBQ0csS0FBRztrQkFBQyxPQUFLOzs7OztZQUFNLENBQ2pCO0NBQ0Y7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFFbkMsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNWCxtRUFBcUIsQ0FBQztRQUMzQ2EsS0FBSyxFQUFFZCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O01BVVgsQ0FBQztLQUNGLENBQUM7SUFFRlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVHLElBQUksQ0FBQztJQUNwQyxPQUFPO1FBQ0xHLEtBQUssRUFBRTtZQUNMUixLQUFLLEVBQUNLLElBQUk7U0FDWDtLQUNILENBQUM7Q0FDSjtBQUNELGlFQUFlTCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5c3RvbmUtcmVhY3QtdG9kby1kZW1vLy4vcGFnZXMvZm9ybXMvaW5kZXguanM/NmQ4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBhcFNlcnZlciBmcm9tIFwiLi4vLi4vYXBvbGxvLWNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIERhdGFQcm94eSwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgZ2V0Rm9ybXMgPSBncWxgXG5cdHF1ZXJ5e1xuICAgIGZvcm1ze1xuICAgIGRpc3BsYXlOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZWRpdG9ye1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbmBcblxuLy9UT0RPXG5mdW5jdGlvbiBmb3Jtcyh7Zm9ybXN9KSB7XG5cbmNvbnNvbGUubG9nKCdyZWNpZXZlZCBmb3JtcycsIGZvcm1zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+Zm9ybXM8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcFNlcnZlci5jbGllbnQucXVlcnkoe1xuICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgcXVlcnkgRm9ybXMge1xuICAgICAgICAgICAgZm9ybXN7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZWRpdG9ye1xuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnIGhleSAtLS0tLS0tLSA6JywgZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZm9ybXM6ZGF0YSxcbiAgICAgIH0sXG4gICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybXMiXSwibmFtZXMiOlsiZ3FsIiwiYXBTZXJ2ZXIiLCJSZWFjdCIsIkFwb2xsb0NsaWVudCIsIkRhdGFQcm94eSIsIkluTWVtb3J5Q2FjaGUiLCJnZXRGb3JtcyIsImZvcm1zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImNsaWVudCIsInF1ZXJ5IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forms/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/forms/index.js"));
module.exports = __webpack_exports__;

})();