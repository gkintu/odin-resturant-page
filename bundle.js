/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/front-page.png */ \"./src/images/front-page.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles */\n\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  background-color: #f5f5f5;\n  color: #333;\n  line-height: 1.6;\n  min-width: 380px;\n}\n\nheader {\n  background-color: #1a1a1a;\n  padding: 1rem 0rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\nheader nav ul {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  gap: 2rem;\n}\n\nheader nav ul a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 1.5rem;\n  padding: 0.5rem 1rem;\n}\n\nheader nav ul a:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\nheader nav ul a.active {\n  background-color:rgba(138, 41, 41, 0.3);\n  border-radius: 4px;\n}\n\n#content {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n\n\n/* Home Section*/\n.home {\n  text-align: center;\n  padding: 2rem 0;\n}\n\n.home-content {\n  padding: 0rem 0.5rem;\n}\n\n.home-header {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n  color: white;\n  padding: 8rem 2rem;\n  border-radius: 5px;\n  margin-bottom: 1.5rem;\n}\n\n.home-header h1 {\n  font-family: 'Playfair Display', serif;\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); \n}\n\n.home-header p {\n  font-size: 2.5rem; \n  margin-bottom: 2rem;\n}\n\n.home-content p {\n  font-size: 1rem;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n/* About Page*/\n\n.about {\n  padding: 2rem 0;\n}\n\n\n.about h1 {\n  font-family: 'Playfair Display', serif;\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n\n.about-content {\n  display:flex;\n  gap: 2rem;\n  align-items: center;\n}\n\n.about-content img {\n  max-width: 480px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.about-text p {\n  margin-bottom: 1rem;\n  font-size: 0.95rem;\n}\n\n\n/* Contact Page*/\n.contact {\n  padding: 2rem 0;\n}\n\n.contact h1 {\n  font-family: 'Playfair Display', serif;\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.contact-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem\n}\n\n.info-item {\n  display: flex;\n  align-items: flex-start;\n  background-color: #fff;\n  padding: 1.5rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.info-item .icon {\n  font-size: 1.5rem;\n  margin-right: 1rem;\n}\n\n.info-item h3 {\n  margin-bottom: 0.1rem;\n  color: #333;\n}\n\n.hours {\n  background-color: #fff;\n  padding: 1.5rem;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.hours h2 {\n  margin-bottom: 0.5rem;\n  color: #333;\n  font-family: 'Playfair Display', serif;\n}\n\n.hours ul {\n  list-style: none;\n}\n\n.hours li {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid #eee;\n}\n\n.hours li .day {\n  font-weight: bold;\n}\n\n.menu {\n  padding: 2rem 0;\n}\n\n.menu h1 {\n  font-family: 'Playfair Display', serif;\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.menu h2 {  \n  font-family: 'Playfair Display', serif;\n  font-size: 1.8rem;\n  margin-bottom: 0.6rem;\n  border-bottom: 2px solid #ff6b6b5d;\n  color: #1a1a1a;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 0.8rem;\n  margin-bottom: 1rem;\n}\n\n.menu-item {\n  background-color: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n  \n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  height: 100%;\n  display: flex;\n  /* padding: 1rem 2rem; */\n  flex-direction: column;\n}\n\n.menu-item:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n\n.menu-item-content {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  gap: 0.2rem;\n}\n\n.menu-item h3 {\n  font-family: 'Roboto', sans-serif;\n  border-bottom: 1px solid #f0e6e6;\n  font-weight: 700;\n  color: #333;\n}\n\n.price {\n  color: #333;\n}\n\n.risk-indicator {\n  display: block;\n  color: #ff6b6b;\n  font-style: italic;\n  font-size: 0.9rem;\n}\n\n/* Responsive Design */\n@media (max-width: 1057px) {\n  .home-header p {\n    font-size: 1.8rem; \n  }\n}\n\n\n@media (max-width: 768px) {\n  .about-content {\n    flex-direction: column;\n    text-align: center;\n  }\n  \n  .about-content img {\n    margin-bottom: 1.5rem;\n  }\n  \n  header nav ul {\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  \n  .home-header h1 {\n    font-size: 2.5rem;\n  }\n\n  .home-header p {\n    font-size: 1.3rem;\n  }\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_head_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/head-chef.png */ \"./src/images/head-chef.png\");\n//about.js\n\n\n\nfunction createAbout() {\n  const aboutDiv = document.createElement(\"div\");\n  aboutDiv.classList.add(\"about\");\n\n  // Create main title\n  const aboutTitle = document.createElement(\"h1\");\n  aboutTitle.textContent = \"Our Story\";\n  aboutDiv.appendChild(aboutTitle);\n\n  // Create a container  for about content\n  const aboutContent = document.createElement(\"div\");\n  aboutContent.classList.add(\"about-content\");\n\n  // Add Chef\n\n  const aboutImage = document.createElement(\"img\");\n  aboutImage.src = _images_head_chef_png__WEBPACK_IMPORTED_MODULE_0__;\n  aboutImage.alt = \"Our head chef\";\n  aboutContent.appendChild(aboutImage);\n\n  // Create text section\n  const aboutText = document.createElement(\"div\");\n  aboutText.classList.add(\"about-text\");\n\n  const paragraph1 = document.createElement(\"p\");\n  paragraph1.textContent =\n    \"Puffer’s Paradise, founded in 2015, is a daring eatery in the city’s heart. We serve blowfish, a risky delicacy, alongside unique treats like spicy octopus and eel skewers.\";\n  aboutText.appendChild(paragraph1);\n\n  const paragraph2 = document.createElement(\"p\");\n  paragraph2.textContent =\n    \"Our head chef, Hiroshi Kato, mastered fugu preparation in Japan over a decade. His bold vision crafts thrilling dishes, blending precision with creativity for an unmatched dining adventure.\";\n  aboutText.appendChild(paragraph2);\n\n  const paragraph3 = document.createElement(\"p\");\n  paragraph3.textContent =\n    \"Legend says a shipwrecked sailor bet his life savings on blowfish here, won big, and funded Puffer’s Paradise. Now, his wild tale fuels our fearless culinary spirit.\";\n  aboutText.appendChild(paragraph3);\n\n  aboutContent.appendChild(aboutText);\n  aboutDiv.appendChild(aboutContent);\n\n  return aboutDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//contact.js\n\nfunction createContact() {\n    const contactDiv = document.createElement('div');\n    contactDiv.classList.add('contact');\n\n    //Create Page Titles\n    const contactTitle = document.createElement('h1');\n    contactTitle.textContent = 'Contact Us';\n    contactDiv.appendChild(contactTitle);\n\n    // Create contact info section with address, phone and email\n    const infoSection = document.createElement('div');\n    infoSection.classList.add('contact-info');\n\n    //Address section with icon\n    const address = document.createElement('div');\n    address.classList.add('info-item');\n\n    const addressIcon = document.createElement('span');\n    addressIcon.classList.add('icon');\n    addressIcon.textContent = '📍';\n    address.appendChild(addressIcon);\n\n    const addressText = document.createElement('div');\n    addressText.innerHTML = `<h3>Address</h3><p>456 Ocean Pier Lane<br>Coral Bay, Seabound 67890</p>`;\n    address.appendChild(addressText);\n\n    // Phone block with icon\n    const phone = document.createElement('div');\n    phone.classList.add('info-item');\n    \n    const phoneIcon = document.createElement('span');\n    phoneIcon.classList.add('icon');\n    phoneIcon.textContent = '📞';\n    phone.appendChild(phoneIcon);\n    \n    const phoneText = document.createElement('div');\n    phoneText.innerHTML = '<h3>Phone</h3><p>(555) 987-6543</p>';\n    phone.appendChild(phoneText);\n    \n    // Email block with icon\n    const email = document.createElement('div');\n    email.classList.add('info-item');\n    \n    const emailIcon = document.createElement('span');\n    emailIcon.classList.add('icon');\n    emailIcon.textContent = '✉️';\n    email.appendChild(emailIcon);\n    \n    const emailText = document.createElement('div');\n    emailText.innerHTML = '<h3>Email</h3><p>dine@puffersparadise.com</p>';\n    email.appendChild(emailText);\n    \n    // Add all info items to section\n    infoSection.appendChild(address);\n    infoSection.appendChild(phone);\n    infoSection.appendChild(email);\n\n    // Create hours section \n    const hoursSection = document.createElement('div');\n    hoursSection.classList.add('hours');\n\n    const hoursTitle = document.createElement('h2');\n    hoursTitle.textContent = 'Hours of Operation';\n    hoursSection.appendChild(hoursTitle);\n\n    // Create hours list\n    const hoursList = document.createElement('ul');\n\n    const hours = [\n        { day: 'Monday - Thursday ', time: '12:00 PM - 9:00 PM'},\n        { day: 'Friday - Saturday ', time: '12:00 PM - 10:00 PM'},\n        { day: 'Sunday ', time: '1:00 PM - 8:00 PM'}\n    ];\n\n    hours.forEach(item => {\n        const hoursItem = document.createElement('li');\n        hoursItem.innerHTML = `<span class=\"day\">${item.day}:</span><span class=\"time\">${item.time}</span>`;\n        hoursList.appendChild(hoursItem);\n    });\n\n        hoursSection.appendChild(hoursList);\n\n        //Assemble Sections\n        contactDiv.appendChild(infoSection);\n        contactDiv.appendChild(hoursSection);\n\n    return contactDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//home.js\n\nfunction createHome() {\n    const homeDiv = document.createElement('div');\n    homeDiv.classList.add('home');\n  \n    // Create and add headline\n    const homeHeader = document.createElement('header');    \n    homeHeader.classList.add('home-header');\n    \n    const headerTitle = document.createElement('h1');\n    headerTitle.textContent = \"Puffer's Paradise\";\n    homeHeader.appendChild(headerTitle);\n    \n    const tagline = document.createElement('p');\n    tagline.textContent = \"Where Culinary Daring Meets Oceanic Delight\";\n    // tagline.style.fontSize = \"1.5rem\";\n    // tagline.style.marginBottom = \"2rem\";\n    homeHeader.appendChild(tagline);\n    \n    homeDiv.appendChild(homeHeader);\n  \n    // Create content section\n    const contentSection = document.createElement('div');\n    contentSection.classList.add('home-content');\n    \n    const welcomeText = document.createElement('p');\n    welcomeText.textContent = \"Welcome to Puffer's Paradise, where we specialize in the most exquisite and daring seafood dishes. Our signature blowfish delicacies are prepared by certified chefs with the utmost care and precision.\";\n    contentSection.appendChild(welcomeText);\n    \n    const callToAction = document.createElement('p');\n    callToAction.textContent = \"Visit us today for an unforgettable dining experience that will tantalize your taste buds and challenge your culinary boundaries.\";\n    callToAction.style.marginTop = \"1rem\";\n    contentSection.appendChild(callToAction);\n    \n    homeDiv.appendChild(contentSection);\n  \n    return homeDiv;\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/images/front-page.png":
/*!***********************************!*\
  !*** ./src/images/front-page.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"919f8dec7aa2e35f7760.png\";\n\n//# sourceURL=webpack:///./src/images/front-page.png?");

/***/ }),

/***/ "./src/images/head-chef.png":
/*!**********************************!*\
  !*** ./src/images/head-chef.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61ee68ebd91bd9f4bf7e.png\";\n\n//# sourceURL=webpack:///./src/images/head-chef.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// index.js\n\n\n\n\n\n\nfunction initializeWebsite() {\n  const content = document.getElementById(\"content\");\n  const navLinks = document.querySelectorAll(\"header nav ul li a\");\n\n  function loadHome() {\n    content.innerHTML = \"\"; //clear existing content\n    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()); // add new content\n  }\n\n  function loadAbout() {\n    content.innerHTML = \"\";\n    content.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n  }\n\n  function loadMenu() {\n    content.innerHTML = \"\";\n    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  }\n\n  function loadContact() {\n    content.innerHTML = \"\";\n    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  }\n\n  //highlight clicked tab\n  function setActiveTab(activeLink) {\n    navLinks.forEach((link) => {\n      if (link === activeLink) {\n        link.classList.add(\"active\");\n      } else {\n        link.classList.remove(\"active\");\n      }\n    });\n  }\n\n  //add click event listener to each navigation link\n  navLinks.forEach((link) => {\n    link.addEventListener(\"click\", (e) => {\n      e.preventDefault;\n\n      const linkText = link.textContent.toLowerCase();\n\n      //Determine which content to load base don which link was clicked\n\n      if (linkText === \"home\") {\n        loadHome();\n      } else if (linkText === \"about\") {\n        loadAbout();\n      } else if (linkText === \"menu\") {\n        loadMenu();\n      } else if (linkText === \"contact\") {\n        loadContact();\n      }\n\n      setActiveTab(link); // call setActiveTab\n    });\n  });\n\n  //load home page by default when page first loads\n  loadHome();\n  setActiveTab(navLinks[0]); //highlight home tab by default as well\n}\n\n\ndocument.addEventListener('DOMContentLoaded', initializeWebsite); //run init when DOM is fully loaded\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('menu');\n\n    // Create Menu Title\n    const menuTitle = document.createElement('h1');\n    menuTitle.textContent = 'Our Menu';\n    menuDiv.appendChild(menuTitle);\n\n    // Create container for all menu categories\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n    \n    // Define menu categories \n    const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages'];\n\n    // Create a section for each category\n    categories.forEach(category => {\n        const categorySection = document.createElement('div');\n        categorySection.classList.add('menu-category');\n\n        // Create h2 elements for categories\n        const categoryTitle = document.createElement('h2');\n        categoryTitle.textContent = category;\n        categorySection.appendChild(categoryTitle);\n\n        // Get menu items for this category\n        const items = getMenuItems(category);\n        \n        // Create elements for menu items in a grid\n        const itemsGrid = document.createElement('div');\n        itemsGrid.classList.add('menu-grid');\n\n        // Create elements for each menu item\n        items.forEach(item => {\n            const menuItem = document.createElement('div');\n            menuItem.classList.add('menu-item');\n\n            // Create content container\n            const itemContent = document.createElement('div');\n            itemContent.classList.add('menu-item-content');\n\n            // Create header with name\n            const itemName = document.createElement('h3');\n            itemName.textContent = item.name;\n            itemContent.appendChild(itemName);\n\n            // Add price\n            const itemPrice = document.createElement('div');\n            itemPrice.classList.add('price');\n            itemPrice.textContent = item.price;\n            itemContent.appendChild(itemPrice);\n\n            // Add item description\n            const itemDescription = document.createElement('p');\n            itemDescription.textContent = item.description;\n            itemContent.appendChild(itemDescription);\n\n            // Add risk indicator for fugu dishes\n            if (item.name.toLowerCase().includes('fugu')) {\n                const riskIndicator = document.createElement('span');\n                riskIndicator.classList.add('risk-indicator');\n                riskIndicator.textContent = \"⚠️ Chef's specialty\";\n                riskIndicator.style.display = 'block';\n                riskIndicator.style.marginTop = '8px';\n                riskIndicator.style.color = '#ff6b6b';\n                riskIndicator.style.fontStyle = 'italic';\n                itemContent.appendChild(riskIndicator);\n            }\n\n            menuItem.appendChild(itemContent);\n            itemsGrid.appendChild(menuItem);\n        });\n\n        categorySection.appendChild(itemsGrid);\n        menuContainer.appendChild(categorySection);\n    });\n\n    menuDiv.appendChild(menuContainer);\n    return menuDiv;\n}\n\n// Helper function to organize menu data \nfunction getMenuItems(category) {\n    // Menu data organized by category for Puffer's Paradise\n    const menuItems = {\n        'Appetizers': [\n            { name: 'Spicy Octopus Tempura', description: 'Crispy octopus bites with chili glaze and seaweed garnish', price: '$15' },\n            { name: 'Fugu Sashimi Teaser', description: 'Thinly sliced blowfish with ponzu dipping sauce, served daringly fresh', price: '$18' },\n            { name: 'Crab Citrus Poppers', description: 'Zesty crab-stuffed citrus rounds with a tangy aioli drizzle', price: '$12' }\n        ],\n        'Main Courses': [\n            { name: 'Fugu Feast', description: 'Masterfully prepared blowfish with miso broth and wild rice', price: '$35' },\n            { name: 'Honey-Glazed Eel Skewer', description: 'Tender eel grilled with sweet honey and sesame crunch', price: '$22' },\n            { name: 'Squid Ink Risotto', description: 'Glow-in-the-dark risotto with squid and a hint of spice', price: '$25' },\n            { name: 'Ocean Medley Platter', description: 'A bold mix of seafood treasures with fugu accents', price: '$30' }\n        ],\n        'Desserts': [\n            { name: 'Seafoam Mousse', description: 'Light mousse with a salty-sweet twist and edible coral', price: '$10' },\n            { name: 'Puffer Puff Pastry', description: 'Flaky pastry filled with yuzu cream, a playful nod', price: '$8' }\n        ],\n        'Beverages': [\n            { name: 'Fugu Fizz', description: 'Sparkling sake cocktail with a daring citrus kick', price: '$12' },\n            { name: 'Ocean Breeze Tea', description: 'Herbal blend inspired by coastal waves', price: '$6' }\n        ]\n    };\n    \n    return menuItems[category] || [];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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