/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner */ \"./src/components/Banner/index.tsx\");\n/* harmony import */ var _components_ContinentsSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContinentsSlide */ \"./src/components/ContinentsSlide/index.tsx\");\n/* harmony import */ var _components_TravelTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TravelTypes */ \"./src/components/TravelTypes/index.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/luana/Projetos/ignite/ignite-worldtrip/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      continents = _useState[0],\n      setContinents = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_5__.api.get('continents').then(function (response) {\n      setContinents(response.data);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TravelTypes__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n      w: [\"60px\", \"90px\"],\n      mx: \"auto\",\n      h: \"2px\",\n      bg: \"gray.700\",\n      my: [\"9\", \"20\"],\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {\n        w: {\n          base: '3.75rem',\n          sm: '5.625rem'\n        },\n        border: {\n          base: '1px',\n          sm: '2px'\n        },\n        borderColor: \"dark.400\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n      m: \"20\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n        fontWeight: 500,\n        fontSize: \"36px\",\n        align: \"center\",\n        children: [\"Vamos nessa?\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 23\n        }, this), \"Ent\\xE3o escolha seu continente\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContinentsSlide__WEBPACK_IMPORTED_MODULE_3__.default, {\n      continents: continents\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"aaZQ+NB1Eo0IxhAlsciJiTF86KQ=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImNvbnRpbmVudHMiLCJzZXRDb250aW5lbnRzIiwidXNlRWZmZWN0IiwiYXBpIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImJhc2UiLCJzbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFT0MsK0NBQVEsQ0FBMkIsRUFBM0IsQ0FGZjtBQUFBLE1BRXRCQyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBSTdCQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsc0RBQUEsQ0FBa0MsWUFBbEMsRUFBZ0RDLElBQWhELENBQXFELFVBQUFDLFFBQVEsRUFBSTtBQUMvREosbUJBQWEsQ0FBQ0ksUUFBUSxDQUFDQyxJQUFWLENBQWI7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsNEJBRUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsaURBQUQ7QUFBSyxPQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFSO0FBQTBCLFFBQUUsRUFBQyxNQUE3QjtBQUFvQyxPQUFDLEVBQUMsS0FBdEM7QUFBNEMsUUFBRSxFQUFDLFVBQS9DO0FBQTBELFFBQUUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLENBQTlEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFDRSxTQUFDLEVBQUU7QUFBRUMsY0FBSSxFQUFFLFNBQVI7QUFBbUJDLFlBQUUsRUFBRTtBQUF2QixTQURMO0FBRUUsY0FBTSxFQUFFO0FBQUVELGNBQUksRUFBRSxLQUFSO0FBQWVDLFlBQUUsRUFBRTtBQUFuQixTQUZWO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFXRSw4REFBQyxvREFBRDtBQUFRLE9BQUMsRUFBQyxJQUFWO0FBQUEsNkJBRUUsOERBQUMsa0RBQUQ7QUFBTSxrQkFBVSxFQUFFLEdBQWxCO0FBQXVCLGdCQUFRLEVBQUMsTUFBaEM7QUFBdUMsYUFBSyxFQUFDLFFBQTdDO0FBQUEsZ0RBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFrQkUsOERBQUMsZ0VBQUQ7QUFBaUIsZ0JBQVUsRUFBRVI7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBLGtCQURGO0FBdUJEOztHQWxDdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBCb3gsIENlbnRlciwgRGl2aWRlciwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFubmVyXCJcbmltcG9ydCBDb250aW5lbnRzU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGluZW50c1NsaWRlXCI7XG5pbXBvcnQgVHJhdmVsVHlwZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVHJhdmVsVHlwZXNcIlxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuXG5pbnRlcmZhY2UgQ29udGluZW50UmVzcG9uc2VQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXJsSW1nOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2NvbnRpbmVudHMsIHNldENvbnRpbmVudHNdID0gdXNlU3RhdGU8Q29udGluZW50UmVzcG9uc2VQcm9wc1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGkuZ2V0PENvbnRpbmVudFJlc3BvbnNlUHJvcHNbXT4oJ2NvbnRpbmVudHMnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHNldENvbnRpbmVudHMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPEJhbm5lciAvPlxuICAgICAgPFRyYXZlbFR5cGVzIC8+XG4gICAgICA8Qm94IHc9e1tcIjYwcHhcIiwgXCI5MHB4XCJdfSBteD1cImF1dG9cIiBoPVwiMnB4XCIgYmc9XCJncmF5LjcwMFwiIG15PXtbXCI5XCIsIFwiMjBcIl19PlxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIHc9e3sgYmFzZTogJzMuNzVyZW0nLCBzbTogJzUuNjI1cmVtJyB9fVxuICAgICAgICAgIGJvcmRlcj17eyBiYXNlOiAnMXB4Jywgc206ICcycHgnIH19XG4gICAgICAgICAgYm9yZGVyQ29sb3I9XCJkYXJrLjQwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxDZW50ZXIgbT1cIjIwXCIgPlxuXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9ezUwMH0gZm9udFNpemU9XCIzNnB4XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBWYW1vcyBuZXNzYT88YnIgLz5cbiAgICAgICAgICBFbnTDo28gZXNjb2xoYSBzZXUgY29udGluZW50ZVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0NlbnRlcj5cbiAgICAgIDxDb250aW5lbnRzU2xpZGUgY29udGluZW50cz17Y29udGluZW50c30gLz5cblxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});