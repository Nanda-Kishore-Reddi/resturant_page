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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nfunction loadContactPage() {\n  var content = document.getElementById('content');\n  content.textContent = ''; // Clear existing content\n\n  // Create header\n  var contactHeader = document.createElement('h1');\n  contactHeader.textContent = \"Contact Us\";\n  content.appendChild(contactHeader);\n\n  // Create the container for the contact form\n  var contactContainer = document.createElement('div');\n  contactContainer.classList.add('contact-container', 'visible');\n\n  // Add a subheading\n  var subheading = document.createElement('h2');\n  subheading.textContent = \"Feel Free to Ask\";\n  contactContainer.appendChild(subheading);\n\n  // Create the form element\n  var form = document.createElement('form');\n  form.setAttribute('action', 'https://formspree.io/f/xkgnobgv');\n  form.setAttribute('method', 'POST');\n\n  // Create the input fields\n  var nameInput = document.createElement('input');\n  nameInput.setAttribute('type', 'text');\n  nameInput.setAttribute('name', 'name');\n  nameInput.setAttribute('id', 'name');\n  nameInput.setAttribute('required', '');\n  nameInput.setAttribute('placeholder', 'Enter your Name');\n  form.appendChild(nameInput);\n  var emailInput = document.createElement('input');\n  emailInput.setAttribute('type', 'email');\n  emailInput.setAttribute('name', 'email');\n  emailInput.setAttribute('id', 'email');\n  emailInput.setAttribute('required', '');\n  emailInput.setAttribute('placeholder', 'Enter your Email');\n  form.appendChild(emailInput);\n  var subjectInput = document.createElement('input');\n  subjectInput.setAttribute('type', 'text');\n  subjectInput.setAttribute('name', 'subject');\n  subjectInput.setAttribute('id', 'subject');\n  subjectInput.setAttribute('required', '');\n  subjectInput.setAttribute('placeholder', 'Subject of the Message');\n  form.appendChild(subjectInput);\n  var messageInput = document.createElement('textarea');\n  messageInput.setAttribute('id', 'message');\n  messageInput.setAttribute('name', 'message');\n  messageInput.setAttribute('required', '');\n  messageInput.setAttribute('placeholder', 'Write your Message here');\n  form.appendChild(messageInput);\n\n  // Create the submit button\n  var submitButton = document.createElement('button');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.textContent = \"Send Message\";\n  form.appendChild(submitButton);\n\n  // Append the form to the contact container\n  contactContainer.appendChild(form);\n\n  // Append the contact container to the content\n  content.appendChild(contactContainer);\n}\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/restaurant.jpeg */ \"./images/restaurant.jpeg\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nfunction loadHomePage() {\n  var content = document.getElementById('content');\n\n  // Main Container\n  var mainContainer = document.createElement('div');\n  mainContainer.classList.add('main-container');\n\n  // Restaurant Name\n  var restaurantName = document.createElement('h1');\n  restaurantName.textContent = \"Welcome to Gourmet Haven!\";\n  restaurantName.classList.add('restaurant-name');\n\n  // Hero Image\n  var heroImage = document.createElement('img');\n  heroImage.src = _images_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; // Replace with your image URL\n  heroImage.alt = \"Delicious food\";\n  heroImage.classList.add('hero-image');\n\n  // Tagline\n  var tagline = document.createElement('p');\n  tagline.textContent = \"Experience the best culinary delights from around the world!\";\n  tagline.classList.add('tagline');\n\n  // Call to Action Button\n  var ctaButton = document.createElement('button');\n  ctaButton.textContent = \"Explore Our Menu\";\n  ctaButton.classList.add('cta-button');\n  ctaButton.addEventListener('click', function () {\n    alert('Redirecting to the menu page...'); // Replace with navigation logic\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\n  // Append Elements to the Main Container\n  mainContainer.appendChild(restaurantName);\n  mainContainer.appendChild(heroImage);\n  mainContainer.appendChild(tagline);\n  mainContainer.appendChild(ctaButton);\n\n  // Clear Existing Content and Add New Content\n  content.textContent = '';\n  content.appendChild(mainContainer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/restaurant.jpeg */ \"./images/restaurant.jpeg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\nconsole.log('Restaurant homepage is running!');\n\n\n\n\n\nfunction clearContent() {\n  document.getElementById('content').textContent = '';\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n// Create header and navbar\nvar header = document.createElement('header');\nheader.classList.add('navbar');\n\n// Create logo\nvar logo = document.createElement('img');\nlogo.src = _images_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; // Add your logo image path here\nlogo.alt = 'Restaurant Logo';\nlogo.classList.add('logo'); // Add a class for styling if needed\nlogo.addEventListener('click', _homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nheader.appendChild(logo);\nvar headerdiv = document.createElement('div');\nheaderdiv.id = 'navi';\n// Create Home button\nvar homebtn = document.createElement('button');\nhomebtn.textContent = 'Home';\nhomebtn.id = 'home-tab';\nheaderdiv.appendChild(homebtn);\n\n// Create Menu button\nvar menuBtn = document.createElement('button');\nmenuBtn.textContent = 'Menu';\nmenuBtn.id = 'menu-tab';\nheaderdiv.appendChild(menuBtn);\n\n// Create Contact button\nvar contactBtn = document.createElement('button');\ncontactBtn.textContent = 'Contact';\ncontactBtn.id = 'contact-tab';\nheaderdiv.appendChild(contactBtn);\nheader.appendChild(headerdiv);\ndocument.body.prepend(header); // Add header to the top of the page\n\n// Event listeners for navigation\ndocument.getElementById('home-tab').addEventListener('click', function () {\n  clearContent();\n  (0,_homepage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\ndocument.getElementById('menu-tab').addEventListener('click', function () {\n  clearContent();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\ndocument.getElementById('contact-tab').addEventListener('click', function () {\n  clearContent();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  var content = document.getElementById('content');\n  content.textContent = ''; // Clear existing content\n\n  var menuHeader = document.createElement('h1');\n  menuHeader.textContent = \"Our Menu\";\n  content.appendChild(menuHeader);\n\n  // Create a list of menu items\n  var menuItems = [{\n    name: \"Margherita Pizza\",\n    description: \"Classic pizza with mozzarella and basil\",\n    price: \"$12.99\"\n  }, {\n    name: \"Spaghetti Carbonara\",\n    description: \"Creamy pasta with pancetta and parmesan\",\n    price: \"$14.50\"\n  }, {\n    name: \"Caesar Salad\",\n    description: \"Crisp lettuce with Caesar dressing and croutons\",\n    price: \"$8.99\"\n  }, {\n    name: \"Grilled Chicken Sandwich\",\n    description: \"Chicken breast with lettuce, tomato, and mayo\",\n    price: \"$11.00\"\n  }, {\n    name: \"Tiramisu\",\n    description: \"Delicious Italian dessert with coffee and mascarpone\",\n    price: \"$6.50\"\n  }];\n\n  // Create a container for the menu items\n  var menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n\n  // Loop through the menu items and create elements\n  menuItems.forEach(function (item) {\n    var menuItem = document.createElement('div');\n    menuItem.classList.add('menu-item');\n    var itemName = document.createElement('h3');\n    itemName.textContent = item.name;\n    menuItem.appendChild(itemName);\n    var itemDescription = document.createElement('p');\n    itemDescription.textContent = item.description;\n    menuItem.appendChild(itemDescription);\n    var itemPrice = document.createElement('span');\n    itemPrice.textContent = item.price;\n    itemPrice.classList.add('price');\n    menuItem.appendChild(itemPrice);\n    menuContainer.appendChild(menuItem);\n  });\n\n  // Append the menu container to the content\n  content.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body, html {\r\n    font-family: 'Arial', sans-serif;\r\n    background-color: #fffffe;\r\n    color: #333;\r\n  }\r\n  \r\n  /* Navbar */\r\n  .navbar {\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem;\r\n    background-color: #46b44d;\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 1000;\r\n  }\r\n  \r\n  .navbar button {\r\n    width: 80px;\r\n    height: 40px;\r\n    font-size: 16px;\r\n    background-color: #145ce1;\r\n    color: #f1f1f1;\r\n    border-radius: 18px;\r\n    text-decoration: none;\r\n    margin: 0 1rem;\r\n    transition: color 0.3s ease;\r\n  }\r\n  \r\n  .navbar button:hover {\r\n    background-color: #b88d00; /* Light Green for hover */\r\n  }\r\n\r\n  .navbar .logo {\r\n    border-radius: 50%;\r\n    width: 70px;\r\n    height: 70px;  /* Adjust the height of your logo */\r\n    margin-right: 20px;  /* Space between logo and buttons */\r\n    justify-self: start;\r\n}\r\n  #content {\r\n    padding: 3rem 1.5rem;\r\n    background-color: #f0f8ff;\r\n    text-align: center;\r\n  }\r\n  \r\n  #content h1 {\r\n    font-size: 2rem;\r\n    margin-bottom: 2rem;\r\n    color: #121212;\r\n  }\r\n  /* Main Container */\r\n.main-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    padding: 20px;\r\n    background-color: #f8f1f1; /* Soft background color */\r\n    font-family: 'Poppins', sans-serif; /* Modern font */\r\n}\r\n\r\n/* Restaurant Name */\r\n.restaurant-name {\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n    color: #e63946; /* Eye-catching red */\r\n}\r\n\r\n/* Hero Image */\r\n.hero-image {\r\n    width: 50%;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    margin: 20px 0;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add subtle shadow */\r\n}\r\n\r\n/* Tagline */\r\n.tagline {\r\n    font-size: 1.5rem;\r\n    color: #2a9d8f; /* Fresh green */\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/* Call to Action Button */\r\n.cta-button {\r\n    padding: 10px 20px;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    background-color: #e63946;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: transform 0.2s, background-color 0.2s;\r\n}\r\n\r\n.cta-button:hover {\r\n    background-color: #d62828;\r\n    transform: scale(1.05);\r\n}\r\n\r\n.cta-button:active {\r\n    transform: scale(1);\r\n}\r\n\r\n  .contact-container {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    background-color: rgba(173, 216, 230, 0.2);\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  #content form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n  \r\n  #content form input, #content form textarea {\r\n    width: 100%;\r\n    padding: 0.75rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    font-family: 'Roboto', sans-serif;\r\n  }\r\n  \r\n  #content form textarea {\r\n    resize: vertical;\r\n    min-height: 150px;\r\n  }\r\n  \r\n  #content form button {\r\n    padding: 0.75rem 1.5rem;\r\n    background-color: #4682B4;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n  }\r\n  \r\n  #content form button:hover {\r\n    background-color: #00b894;\r\n  }\r\n  \r\n  button:hover, button:focus, button:active {\r\n    background-color: #006666;\r\n    outline: none;\r\n  }\r\n  \r\n  .contact-container {\r\n    opacity: 0;\r\n    transform: translateY(50px);\r\n    transition: all 1s ease-in-out;\r\n  }\r\n  \r\n  .contact-container.visible {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n  \r\n\r\n  .menu-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    align-items: center;\r\n  }\r\n  \r\n  .menu-item {\r\n    background-color: #ffffff;\r\n    padding: 1.5rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n    width: 80%;\r\n    max-width: 600px;\r\n    text-align: left;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  }\r\n  \r\n  .menu-item:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .menu-item h3 {\r\n    font-size: 1.5rem;\r\n    color: #333;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  .menu-item p {\r\n    font-size: 1rem;\r\n    color: #666;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .menu-item .price {\r\n    font-size: 1.2rem;\r\n    color: #4682B4;\r\n    font-weight: bold;\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./images/restaurant.jpeg":
/*!********************************!*\
  !*** ./images/restaurant.jpeg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/restaurant.71c9735a950e05b2d47b735035cd083e.jpeg\");\n\n//# sourceURL=webpack:///./images/restaurant.jpeg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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