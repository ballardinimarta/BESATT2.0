// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/NR_1.jpg":[function(require,module,exports) {
module.exports = "/NR_1.073843e5.jpg";
},{}],"assets/NR_2.jpg":[function(require,module,exports) {
module.exports = "/NR_2.fd66ddd4.jpg";
},{}],"assets/NR_3.jpg":[function(require,module,exports) {
module.exports = "/NR_3.f975e163.jpg";
},{}],"assets/NR_4.jpg":[function(require,module,exports) {
module.exports = "/NR_4.a9549f33.jpg";
},{}],"assets/NR_5.jpg":[function(require,module,exports) {
module.exports = "/NR_5.032f88e5.jpg";
},{}],"assets/iphonepic.jpg":[function(require,module,exports) {
module.exports = "/iphonepic.171c537b.jpg";
},{}],"ts/kop.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpDialog = exports.addMagazines = exports.magazines = exports.Magazine = void 0;

var Magazine =
/** @class */
function () {
  function Magazine(id, month, picture) {
    this.id = id;
    this.month = month;
    this.picture = picture;
  }

  return Magazine;
}();

exports.Magazine = Magazine;
exports.magazines = [];

function addMagazines() {
  var first = new Magazine(1, "Februari 2019", require("../assets/NR_1.jpg"));
  var second = new Magazine(2, "Juni 2019", require("../assets/NR_2.jpg"));
  var third = new Magazine(3, "Oktober 2019", require("../assets/NR_3.jpg"));
  var fourth = new Magazine(4, "Juni 2020", require("../assets/NR_4.jpg"));
  var fifth = new Magazine(5, "Maj 2021", require("../assets/NR_5.jpg"));
  exports.magazines.push(fifth, fourth, third, second, first);
  $.each(exports.magazines, function (i, magazine) {
    var wrap = $("<div></div>").attr("id", "number" + magazine.id + "Wrapper");
    $("<img>").attr("src", magazine.picture).appendTo(wrap);
    var overlay = $("<div></div>").addClass("overlay");
    $("<p></p>").addClass("magInfo").html("Nr." + magazine.id + "<br>" + magazine.month).appendTo(overlay);
    overlay.appendTo(wrap);
    wrap.appendTo($("#magazineContainer"));
  });
}

exports.addMagazines = addMagazines;

function helpDialog() {
  var helpDiv = $("<div></div>").attr("id", "dialog");
  $("<img>").attr("src", require("../assets/iphonepic.jpg")).css("height", "500px").appendTo(helpDiv);
  helpDiv.appendTo($("#buyText"));
  $("#dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false
  });
  $("#opener").on("click", function () {
    $("#dialog").dialog("open");
  });
}

exports.helpDialog = helpDialog;
},{"../assets/NR_1.jpg":"assets/NR_1.jpg","../assets/NR_2.jpg":"assets/NR_2.jpg","../assets/NR_3.jpg":"assets/NR_3.jpg","../assets/NR_4.jpg":"assets/NR_4.jpg","../assets/NR_5.jpg":"assets/NR_5.jpg","../assets/iphonepic.jpg":"assets/iphonepic.jpg"}],"ts/butiker.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStoresHtml = exports.stores = exports.store = void 0;

var store =
/** @class */
function () {
  function store(name, adress, city) {
    this.name = name;
    this.adress = adress;
    this.city = city;
  }

  return store;
}();

exports.store = store;
exports.stores = [];

function addStoresHtml() {
  var konstig = new store("KONST-IG", "Åsögatan 124, 116 24 Stockholm", "Stockholm");
  var pressstop = new store("PRESS STOP", "Götgatan 31, 116 21 Stockholm", "Stockholm");
  var hedengrens = new store("HEDENGRENS", "Stureplan 4, 114 35 Stockholm", "Stockholm");
  var moderna = new store("MODERNA MUSEET", "Exercisplan 4, 111 49 Stockholm", "Stockholm");
  var ronells = new store("RÖNNELLS ANTIKVARIAT", "Birger Jarlsgatan 32B, 114 29 Stockholm", "Stockholm");
  var aspudden = new store("ASPUDDENS BOKHANDEL", "Hägerstensvägen 130, 126 49 Hägersten", "Stockholm");
  var malmokonsthall = new store("MALMÖ KONSTHALLS BOKHANDEL", "S:t Johannesgatan 7, 205 80 Malmö", "Skåne");
  var tidskriftsbutiken = new store("TIDSKRIFTSBUTIKEN MALMÖ", "Södra Förstadsgatan 18, 211 43 Malmö", "Skåne");
  var skissernas = new store("SKISSERNAS MUSEUM", "Finngatan 2, 223 62 Lund", "Skåne");
  var tredjevån = new store("3:E VÅNINGEN", "Sockerbruket 9, 414 51 Göteborg", "Göteborg");
  var eskilstuna = new store("ESKILSTUNA KONSTMUSEUM", "Portgatan 2, 633 42 Eskilstuna", "Övriga Sverige");
  var kristinehamn = new store("KRISTINEHAMNS KONSTMUSEUM", "Doktor Enwalls Väg 13, 681 37 Kristinehamn", "Övriga Sverige");
  exports.stores.push(konstig, pressstop, hedengrens, moderna, ronells, aspudden, malmokonsthall, tidskriftsbutiken, skissernas, tredjevån, eskilstuna, kristinehamn);
  var container = $("#container");
  var sthlmContainer = $("<div></div>").addClass("cityContainer").attr("id", "stockholm");
  var skaneContainer = $("<div></div>").addClass("cityContainer").attr("id", "skane");
  var goteborgContainer = $("<div></div>").addClass("cityContainer").attr("id", "goteborg");
  var ovrigContainer = $("<div></div>").addClass("cityContainer").attr("id", "ovrig");
  $("<h1></h1>").text("Stockholm").css("border-bottom", "3px solid palevioletred").appendTo(sthlmContainer);
  $("<h1></h1>").text("Skåne").css("border-bottom", "3px solid palevioletred").appendTo(skaneContainer);
  $("<h1></h1>").text("Göteborg").css("border-bottom", "3px solid palevioletred").appendTo(goteborgContainer);
  $("<h1></h1>").text("Övriga Sverige").css("border-bottom", "3px solid palevioletred").appendTo(ovrigContainer);
  $.each(exports.stores, function (i, onestore) {
    var storeContainer = $("<div></div>").addClass("storeContainer");
    $("<h3></h3>").addClass("storeName").text(onestore.name).appendTo(storeContainer);
    $("<a></a>").addClass("storeAdress").attr("target", "_blank").attr("href", "https://www.google.se/maps/place/" + onestore.adress).text(onestore.adress).appendTo(storeContainer);

    if (onestore.city == "Stockholm") {
      storeContainer.appendTo(sthlmContainer);
    }

    if (onestore.city == "Skåne") {
      storeContainer.appendTo(skaneContainer);
    }

    if (onestore.city == "Göteborg") {
      storeContainer.appendTo(goteborgContainer);
    }

    if (onestore.city == "Övriga Sverige") {
      storeContainer.appendTo(ovrigContainer);
    }
  });
  sthlmContainer.appendTo(container);
  skaneContainer.appendTo(container);
  goteborgContainer.appendTo(container);
  ovrigContainer.appendTo(container);
}

exports.addStoresHtml = addStoresHtml;
},{}],"ts/main.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var kop_1 = require("./kop");

var butiker_1 = require("./butiker");

$(function () {
  openNav();
  kop_1.addMagazines();
  kop_1.helpDialog();
  butiker_1.addStoresHtml();
});

function openNav() {
  $("#navButton").on('click', function () {
    $("#sideNav").css("width", "100%");
    $("#navButton").css("display", "none");
  });
  $("#closeNavButton").on('click', function () {
    $("#sideNav").css("width", "0%");
    $("#navButton").css("display", "block");
  });
}
},{"./kop":"ts/kop.ts","./butiker":"ts/butiker.ts"}],"../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64254" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/main.ts"], null)
//# sourceMappingURL=/main.0e24b174.js.map