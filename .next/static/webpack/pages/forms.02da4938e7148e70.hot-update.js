"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forms",{

/***/ "./pages/forms/index.js":
/*!******************************!*\
  !*** ./pages/forms/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\tquery{\\n    forms{\\n    displayName,\\n    description,\\n      editor{\\n        name\\n      }\\n    }\\n  }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar getForms = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nfunction forms(param) {\n    var _$forms = param.forms;\n    console.log(\"recieved forms\", _$forms);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"forms\"\n    }, void 0, false, {\n        fileName: \"/Users/sjahromi/playground/IA/pages/forms/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (forms);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jtcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQW9DO0FBRVg7QUFDK0M7QUFFeEUsSUFBTUssUUFBUSxHQUFHTCxtREFBRyxtQkFXbkI7QUFLRCxTQUFTTSxLQUFLLENBQUMsS0FBTyxFQUFFO1FBQVQsT0FBTSxHQUFOLEtBQU8sQ0FBTkEsS0FBSztJQUdyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVGLE9BQUssQ0FBQyxDQUFDO0lBRW5DLHFCQUNFLDhEQUFDRyxLQUFHO2tCQUFDLE9BQUs7Ozs7O1lBQU0sQ0FDakI7Q0FDRjs7QUF5QkQsK0RBQWVILEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybXMvaW5kZXguanM/NmQ4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBhcFNlcnZlciBmcm9tIFwiLi4vLi4vYXBvbGxvLWNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIERhdGFQcm94eSwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgZ2V0Rm9ybXMgPSBncWxgXG5cdHF1ZXJ5e1xuICAgIGZvcm1ze1xuICAgIGRpc3BsYXlOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZWRpdG9ye1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbmBcblxuXG5cblxuZnVuY3Rpb24gZm9ybXMoe2Zvcm1zfSkge1xuXG5cbmNvbnNvbGUubG9nKCdyZWNpZXZlZCBmb3JtcycsIGZvcm1zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+Zm9ybXM8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcFNlcnZlci5jbGllbnQucXVlcnkoe1xuICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgcXVlcnkgRm9ybXMge1xuICAgICAgICAgICAgZm9ybXN7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZWRpdG9ye1xuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnIGhleSAtLS0tLS0tLSA6JywgZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZm9ybXM6ZGF0YSxcbiAgICAgIH0sXG4gICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybXMiXSwibmFtZXMiOlsiZ3FsIiwiUmVhY3QiLCJBcG9sbG9DbGllbnQiLCJEYXRhUHJveHkiLCJJbk1lbW9yeUNhY2hlIiwiZ2V0Rm9ybXMiLCJmb3JtcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forms/index.js\n"));

/***/ })

});