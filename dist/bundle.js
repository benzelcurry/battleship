/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    width: 100vw;\n    margin: 0px;\n    font-size: 18px;\n    display: grid;\n    /* align-items: center;\n    justify-content: center; */\n    grid-template-columns: repeat(3, 1fr);\n}\n\n.board-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.board-container2 {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.gameboard {\n    height: 400px;\n    width: 400px;\n    display: grid;\n    margin: 10px;\n    gap: none;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    align-items: center;\n    justify-content: center;\n    border: solid 2px black;\n    border-bottom: solid 4px black;\n    border-top: solid 4px black;\n}\n\n.square {\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: auto;\n    border: solid 2px black;\n}\n\n/* .square:hover {\n    backdrop-filter: brightness(0.7);\n} */\n\n.status-container {\n    margin: 75px;\n    gap: 50px;\n    border-left: solid 4px black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.player-status {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    flex-grow: 1;\n}\n\n.player1,\n.player2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: bold;\n}\n\n.player1 > *,\n.player2 > * {\n    font-weight: 400;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Creates and manages the gameboard
// Key: {
//     O = Ship (Not hit)
//     M = Miss 
//     X = Hit 
// }

const Ship = __webpack_require__(12);

const Gameboard = () => {
    let board = [];
    for (let i = 0; i < 100; i++) {
        board.push(' ');
    };

    // Declares ships and their arrays
    const xtraSmallShip = Ship(2);
    const smallShip = Ship(3);
    const medShip = Ship(4);
    const bigShip = Ship(5);
    const hugeShip = Ship(6);
    let xtraSmallArr = ['O', 'O'];
    let smallArr = ['O', 'O', 'O'];
    let medArr = ['O', 'O', 'O', 'O'];
    let bigArr = ['O', 'O', 'O', 'O', 'O'];
    let hugeArr = ['O', 'O', 'O', 'O', 'O', 'O'];

    const placeShip = (index, ship, siblings, isVertical, computer) => {
        // Checks to see if ship will fit horizontally from left to right
        let stringIndex = String(index).split('')
        let firstNumIndex = stringIndex[0];
        let nextLine = String(index + ship.size - 1).split('');
        let secondNumIndex = nextLine[0];
        let letter;

        // Determines if there's a ship placed in the designated spot
        const isShipHere = () => {
            let canPlace = true;

            if (!isVertical) {
                for (let i = index; i < (index + siblings); i++) {
                    if (board[i] !== ' ') {
                        return canPlace = false;
                    } else {
                        canPlace = true;
                    }
                }
            // NEW CHUNK, CHECKS FOR VERTICALITY, FIX IF BROKEN
            } else {
                for (let i = index; i > index - (siblings * 10); i -=10) {
                    if (board[i] !== ' ') {
                        return canPlace = false;
                    } else {
                        canPlace = true;
                    }
                }
            }

            return canPlace;
        }

        // Assigns a letter to map the grid square to the ship object on it
        // The placementHelper() used is unrelated to the placementHelper.js 
        // module; unfortunate naming convention that will be fixed if time
        // is found
        if (!isVertical) {
            if (index + ship.size <= 10) {
                if (isShipHere() === false || computer) {
                    return 'Error';
                } else {
                    letter = placementHelper(ship.size);
                }
            } else {
                if (firstNumIndex !== secondNumIndex || isShipHere() === false || computer === true) {
                    return 'Error';
                } else {
                    letter = placementHelper(ship.size);
                };
            };
        } else {
            if (index < 10 || computer) {
                return 'Error';
            } else {
                if (index - ((ship.size - 1) * 10) < 0 || isShipHere() === false) {
                    return 'Error';
                } else {
                    letter = placementHelper(ship.size);
                };
            }
        };

        // Marks where ships are located on the board
        if (!isVertical) {
            for (let i = 0; i < ship.size; i++) {
                board[index + i] = 'O' + letter;
            };
        } else {
            for (let i = 0; i < (ship.size * 10); i += 10) {
                board[index - i] = 'O' + letter;
            };
        };
        
    };

    const receiveAttack = (index) => {
        if (board[index] === ' ') {
            board[index] = 'M'
            return 'miss';
        } else if (board[index] === 'M') {
            return 'already hit';
        } else {
            if (board[index].split('').includes('x')) {
                attackHelper(xtraSmallArr, xtraSmallShip);
            } else if (board[index].split('').includes('s')) {
                attackHelper(smallArr, smallShip);
            } else if (board[index].split('').includes('m')) {
                attackHelper(medArr, medShip);
            } else if (board[index].split('').includes('l')) {
                attackHelper(bigArr, bigShip);
            } else if (board[index].split('').includes('h')) {
                attackHelper(hugeArr, hugeShip);
            };

            board[index] = 'X';
            return 'hit';
        }
    };

    // Returns true if no ships are left on board; otherwise, false
    const gameover = () => {
        return (!board.includes('Ox') &&
                !board.includes('Os') &&
                !board.includes('Om') &&
                !board.includes('Ol') &&
                !board.includes('Oh'));
    };

    // Helper function for determining small/med/bigArr hits
    const placeDmg = (arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'O') {
                count++;
            };
        };
        
        if (arr.length - count !== arr.length) {
            arr.unshift('X');
            arr.pop();
        }
    }

    // Helper function for placeAttack()
    const placementHelper = (shipLength) => {
        let shipLetter;

        if (shipLength === 2) {
            shipLetter = 'x';
        } else if (shipLength === 3) {
            shipLetter = 's';
        } else if (shipLength === 4) {
            shipLetter = 'm';
        } else if (shipLength === 5) {
            shipLetter = 'l';
        } else if (shipLength === 6) {
            shipLetter = 'h';
        }

        return shipLetter;
    }

    // Helper function for receiveAttack()
    const attackHelper = (array, shipSize) => {
        placeDmg(array);
        shipSize.index = array;
        shipSize.isSunk();
    }

    return {board, xtraSmallShip, smallShip, medShip, bigShip, hugeShip, xtraSmallArr,
            smallArr, medArr, bigArr, hugeArr, placeShip, receiveAttack, gameover, 
            placeDmg}
}

module.exports = Gameboard;

/***/ }),
/* 12 */
/***/ ((module) => {

// Creates a new ship with specified length

const Ship = (length) => {
    let index = [];
    let size = length;

    for (let i = 0; i < length; i++) {
        index.push('O');
    }

    const hit = (num) => {
        index[num] = 'X';
    }

    const isSunk = () => {
        // return (!index.includes('O'));
        return (index.includes('X'));
    }

    return {index, size, hit, isSunk};
}

module.exports = Ship;

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawBoard)
/* harmony export */ });
/* harmony import */ var _placementHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _placementHelper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_placementHelper__WEBPACK_IMPORTED_MODULE_0__);
// Draws gameboards and provides user interface interaction




function drawBoard(gameboard, playerBoard, playerStatus, computer, player2Container) {
    let xtraPlaced = false;
    let smallPlaced = false;
    let medPlaced = false;
    let bigPlaced = false;
    let hugePlaced = false;

    let isGameOver = false;

    const getRandomNum = (max) => {
        return Math.floor(Math.random() * max);
    }

    const placeCom = (comShip, comSibs) => {
        let random = getRandomNum(100);
        let vert;
        let randomVert = getRandomNum(2);

        if (randomVert === 1) {
            vert = true;
        } else {
            vert = false;
        }

        if (gameboard.placeShip(random, comShip, comSibs, vert) === 'Error') {
            placeCom(comShip, comSibs);
        } else {
            gameboard.placeShip(random, comShip, comSibs, vert);
        };
    };
   
    // Randomly places computer ships
    if (computer === true) {
        placeCom(gameboard.xtraSmallShip, 2);
        placeCom(gameboard.smallShip, 3);
        placeCom(gameboard.medShip, 4);
        placeCom(gameboard.bigShip, 5);
        placeCom(gameboard.hugeShip, 6);
        xtraPlaced = true;
        smallPlaced = true;
        medPlaced = true;
        bigPlaced = true;
        hugePlaced = true;
    };

    const horizontal = document.querySelector('.horizontal');
    const vertical = document.querySelector('.vertical');
    let isHorizontal = true;
    let isVertical = false;

    horizontal.addEventListener('click', () => {
        if (isHorizontal === true) {
            return;
        } else {
            isHorizontal = true;
            isVertical = false;
        };
    });

    vertical.addEventListener('click', () => {
        if (isVertical === true) {
            return;
        } else {
            isVertical = true;
            isHorizontal = false;
        };
    });

    const xtraSmallSunk = document.createElement('div');
    xtraSmallSunk.classList.add('sunk');
    xtraSmallSunk.textContent = 'Extra small ship sunk';

    const smallSunk = document.createElement('div');
    smallSunk.classList.add('sunk');
    smallSunk.textContent = 'Small ship sunk';

    const medSunk = document.createElement('div');
    medSunk.classList.add('sunk');
    medSunk.textContent = 'Medium ship sunk';

    const bigSunk = document.createElement('div');
    bigSunk.classList.add('sunk');
    bigSunk.textContent = 'Big Ship sunk';

    const hugeSunk = document.createElement('div');
    hugeSunk.classList.add('sunk');
    hugeSunk.textContent = 'Huge ship sunk';

    for (let i = 0; i < gameboard.board.length; i++) {
        const square = document.createElement('div');
        square.id = i; 
        square.classList.add('square');
        let beenHit = false;
        playerBoard.appendChild(square);

        square.addEventListener('mouseover', () => {
            _placementHelper__WEBPACK_IMPORTED_MODULE_0___default()(xtraPlaced, smallPlaced, medPlaced, bigPlaced, hugePlaced, square, computer, isVertical);
        });

        square.addEventListener('mouseleave', () => {
            if (!hugePlaced) {
                if (!isVertical) {
                    for (let i = Number(square.id); i < (Number(square.id) + 6); i++) {
                        let thisSquare = document.getElementById(i);
                        thisSquare.style.backgroundColor = 'white';
                    }
                } else {
                    for (let i = Number(square.id); i > (Number(square.id) - (6 * 10)); i -= 10) {
                        let thisSquare = document.getElementById(i);
                        thisSquare.style.backgroundColor = 'white';
                    }
                }
            } else {
                square.style.backgroundColor = 'white';
            }
        });

        // Places ships, then executes attack on grid square clicked
        square.addEventListener('click', () => {
            let siblings;

            const markSquares = (sqSize) => {
                if (isVertical === false) {
                    for (let i = Number(square.id); i < (Number(square.id) + siblings); i++) {
                        let thisSquare = document.getElementById(String(i));
                        thisSquare.textContent = sqSize;
                    };
                } else {
                    for (let i = Number(square.id); i > (Number(square.id) - (siblings * 10)); i -= 10) {
                        let thisSquare = document.getElementById(String(i));
                        thisSquare.textContent = sqSize;
                    };
                };
            };

            if (!xtraPlaced) {
                siblings = 2;
                if (gameboard.placeShip(Number(square.id), gameboard.xtraSmallShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.xtraSmallShip, siblings, isVertical);
                    markSquares('XS');
                    xtraPlaced = true;
                }
            } else if (!smallPlaced) {
                siblings = 3;
                if (gameboard.placeShip(Number(square.id), gameboard.smallShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.smallShip, siblings, isVertical);
                    markSquares('S');
                    smallPlaced = true;
                }
            } else if (!medPlaced) {
                siblings = 4;
                if (gameboard.placeShip(Number(square.id), gameboard.medShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.medShip, siblings, isVertical);
                    markSquares('M');
                    medPlaced = true;
                }
            } else if (!bigPlaced) {
                siblings = 5;
                if (gameboard.placeShip(Number(square.id), gameboard.bigShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.bigShip, siblings, isVertical);
                    markSquares('B');
                    bigPlaced = true;
                }
            } else if (!hugePlaced) {
                siblings = 6;
                if (gameboard.placeShip(Number(square.id), gameboard.hugeShip, siblings, isVertical, computer) === 'Error') {
                    alert('You can\'t place a ship here');
                } else {
                    gameboard.placeShip(Number(square.id), gameboard.hugeShip, siblings, isVertical);
                    markSquares('H');
                    hugePlaced = true;
                    player2Container.style.display = 'flex';
                    if (!isVertical) {
                        for (let i = Number(square.id); i < (Number(square.id) + 6); i++) {
                            let thisSquare = document.getElementById(i);
                            thisSquare.style.backgroundColor = 'white';
                        }
                    } else {
                        for (let i = Number(square.id); i > (Number(square.id) - (6 * 10)); i -= 10) {
                            let thisSquare = document.getElementById(i);
                            thisSquare.style.backgroundColor = 'white';
                        }
                    }
                }
            } else {
            // 2. Once all ships been placed, start checking for hits
                if (!computer) {
                    alert('You can\'t attack your own board!');
                    return;
                } else if (isGameOver) {
                    alert('Refresh the page to play again');
                    return;
                } else {
                    if (beenHit === false) {
                        beenHit = true;
                        
                        gameboard.receiveAttack(square.id);
                        if (gameboard.board[square.id] === 'X') {
                            square.textContent = 'O';
                            square.style.color = 'green';
                            if (gameboard.gameover()) {
                                alert('Player 1 Wins!');
                                isGameOver = true;
                            }
                        } else {
                            square.textContent = 'X';
                            square.style.color = 'red';
                        };
                    } else {
                        return;
                    }
                }
                
                // Appends which ships have been sunken to the scoreboard
                if (!gameboard.xtraSmallShip.index.includes('O')) {
                    playerStatus.appendChild(xtraSmallSunk);
                };
                
                if (!gameboard.smallShip.index.includes('O')) {
                    playerStatus.appendChild(smallSunk);
                };

                if (!gameboard.medShip.index.includes('O')) {
                    playerStatus.appendChild(medSunk);
                };

                if (!gameboard.bigShip.index.includes('O')) {
                    playerStatus.appendChild(bigSunk);
                };

                if (!gameboard.hugeShip.index.includes('O')) {
                    playerStatus.appendChild(hugeSunk);
                };
            };
        });
    };
};

/***/ }),
/* 14 */
/***/ ((module) => {

// Helper module for hovering/unhovering grid while placing ships to
// avoid cluttering interface.js
// Could fix so it doesn't log errors in console when hovering an
// unplaceable spot, but not a priority.

const placementHelper = (xtra, small, med, big, huge, square, computer, isVertical) => {
    let stringIndex = (square.id).split('')
    let firstNumIndex = stringIndex[0];
    let shipSize;
    let nextLine;
    let secondNumIndex;

    // *edited to include hugePlaced
    const colorSquares = (color) => {
        if (computer) {
            return;
        } else {
            if (!isVertical) {
                for (let i = Number(square.id); i < (Number(square.id) + shipSize); i++) {
                    let thisSquare = document.getElementById(i);
                    thisSquare.style.backgroundColor = color;
                }
            } else {
                for (let i = Number(square.id); i > (Number(square.id) - (shipSize * 10)); i -= 10) {
                    let thisSquare = document.getElementById(i);
                    thisSquare.style.backgroundColor = color;
                }
            }
        }
    };

    const containsText = (x) => {
        let hasText;

        if (!isVertical) {
            for (let i = Number(square.id); i < Number(square.id) + x; i++) {
                let thisSquare = document.getElementById(i);
                if (!thisSquare.textContent) {
                    hasText = false;
                } else {
                    return hasText = true;
                }
            }

            return hasText;
        } else {
            for (let i = Number(square.id); i > Number(square.id) - (x * 10); i -= 10) {
                let thisSquare = document.getElementById(i);
                if (!thisSquare.textContent) {
                    hasText = false;
                } else {
                    return hasText = true;
                }
            }

            return hasText;
        }
    }

    const helper = (x) => {
        shipSize = x;
        nextLine = String(Number(square.id) + shipSize - 1).split('');
        secondNumIndex = (nextLine[0]);
        if (!isVertical) {
            if (Number(square.id) + shipSize <= 10) {
                colorSquares('lightgreen');
            } else {
                if (Number(square.id) + 2 > 100 || firstNumIndex !== secondNumIndex || containsText(x) === true) {
                    colorSquares('red');
                } else {
                    colorSquares('lightgreen');
                }
            }
        } else {
            if (x === 2) {
                if (Number(square.id) < 10 || containsText(x) === true) {
                    colorSquares('red');
                } else {
                    colorSquares('lightgreen');
                };
            } else {
                if (Number(square.id) - ((x - 1) * 10) < 0 || containsText(x) === true) {
                    colorSquares('red');
                } else {
                    colorSquares('lightgreen');
                };
            };
        };
    };

    if (!xtra) {
        helper(2);
    } else if (!small) {
        helper(3);
    } else if (!med) {
        helper(4);
    } else if (!big) {
        helper(5);
    } else if (!huge) {
        helper(6);
    } else { 
        square.style.backgroundColor = 'grey';
    };
};

module.exports = placementHelper;

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameboard_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
// Main module where everything comes together

// Notes:
// 1. Modules are tightly coupled; this isn't good practice and should be fixed if this
// ends up becoming a portfolio piece.
// 2. Code could be cleaned up by creating additional modules and reducing the overall
// size of each one.
// 3. Variable naming is not consistent among modules; this should be improved upon in
// future projects.





const gameboard1 = _gameboard_js__WEBPACK_IMPORTED_MODULE_1___default()();
const gameboard2 = _gameboard_js__WEBPACK_IMPORTED_MODULE_1___default()();
const board1 = document.querySelector('.first');
const board2 = document.querySelector('.second');
const player1Status = document.querySelector('.player1');
const player2Status = document.querySelector('.player2');
const player2Container = document.querySelector('.board-container2');
let computer;

(0,_interface__WEBPACK_IMPORTED_MODULE_2__["default"])(gameboard1, board1, player1Status, computer = false, player2Container);
(0,_interface__WEBPACK_IMPORTED_MODULE_2__["default"])(gameboard2, board2, player2Status, computer = true);

const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
}

const playerChildren = board1.children;

board2.addEventListener('click', (e) => {
    if (e.target.classList.contains('been-hit')) {
        return;
    } else {
        setTimeout(attackPlayer, 1000);
        setTimeout(e.target.classList.add('been-hit'), 1500);
    };
});

let missCap = 0;
let lastHit;
let didHit = false;

// Should go into its own module
const attackPlayer = () => {
    let location = getRandomNum(100);
    let chooseHit = getRandomNum(5);
    if (playerChildren[location].textContent === 'O' || playerChildren[location].textContent === 'X') {
        attackPlayer();
    } else if (didHit === true) {
        if (chooseHit === 1) {
            attackHelper(lastHit - 1);
        } else if (chooseHit === 2) {
            attackHelper(lastHit + 1);
        } else if (chooseHit === 3) {
            attackHelper(lastHit - 10);
        } else {
            attackHelper(lastHit + 10);
        }
    } else if (gameboard1.receiveAttack(location) === 'hit') {
        lastHit = location;
        didHit = true;
        gameboard1.receiveAttack(location)
        playerChildren[location].textContent = 'O';
        playerChildren[location].style.color = 'green';
    } else {
        gameboard1.receiveAttack(location)
        playerChildren[location].textContent = 'X';
        playerChildren[location].style.color = 'red';
    };
    sunkHelper();
}

const attackHelper = (newLocation) => {
    if (playerChildren[newLocation] === undefined) {
        attackPlayer();
    } else if (playerChildren[newLocation].textContent === 'O' || playerChildren[newLocation].textContent === 'X') {
        missCap += 0.25;
        if (missCap > 3) {
            didHit = false;
        }
        attackPlayer();
    } else if (gameboard1.receiveAttack(newLocation) === 'hit') {
        missCap = 0;
        lastHit = newLocation;
        didHit = true;
        gameboard1.receiveAttack(newLocation)
        playerChildren[newLocation].textContent = 'O';
        playerChildren[newLocation].style.color = 'green';
    } else {
        missCap++;
        gameboard1.receiveAttack(newLocation)
        playerChildren[newLocation].textContent = 'X';
        playerChildren[newLocation].style.color = 'red';
        if (missCap > 3) {
            didHit = false;
        };
    };
}

const xtraSmallSunk = document.createElement('div');
xtraSmallSunk.classList.add('sunk');
xtraSmallSunk.textContent = 'Extra small ship sunk';

const smallSunk = document.createElement('div');
smallSunk.classList.add('sunk');
smallSunk.textContent = 'Small ship sunk';

const medSunk = document.createElement('div');
medSunk.classList.add('sunk');
medSunk.textContent = 'Medium ship sunk';

const bigSunk = document.createElement('div');
bigSunk.classList.add('sunk');
bigSunk.textContent = 'Big Ship sunk';

const hugeSunk = document.createElement('div');
hugeSunk.classList.add('sunk');
hugeSunk.textContent = 'Huge ship sunk';

const sunkHelper = () => {
    // Appends which ships have been sunken to the scoreboard
    if (!gameboard1.xtraSmallShip.index.includes('O')) {
        player1Status.appendChild(xtraSmallSunk);
    };
    
    if (!gameboard1.smallShip.index.includes('O')) {
        player1Status.appendChild(smallSunk);
    };

    if (!gameboard1.medShip.index.includes('O')) {
        player1Status.appendChild(medSunk);
    };

    if (!gameboard1.bigShip.index.includes('O')) {
        player1Status.appendChild(bigSunk);
    };

    if (!gameboard1.hugeShip.index.includes('O')) {
        player1Status.appendChild(hugeSunk);
    };
}
})();

/******/ })()
;