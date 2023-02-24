// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6oY9T":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ceb3f8cc891f0f0b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8tyFx":[function(require,module,exports) {
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _authController = require("../Controllers/AuthController");
var _routes = require("../utils/Routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
window.addEventListener("DOMContentLoaded", async ()=>{
    const route = new (0, _routesDefault.default)();
    if (/profile/g.test(location.pathname)) highlightingText();
    try {
        await (0, _authController.AuthentificationController).fetchUser();
        route.activation();
    } catch (e) {
        route.activationForNonRegistered();
    }
});
function highlightingText() {
    const menu = document.querySelector(".profile__menu");
    const links = menu?.querySelectorAll("a");
    links?.forEach((a)=>{
        a.classList.remove("profile__menu-active");
        if (location.pathname === "/profile" && a.textContent === "Профиль") a.classList.add("profile__menu-active");
        if (location.pathname === "/profile/data" && a.textContent === "Изменить данные") a.classList.add("profile__menu-active");
        if (location.pathname === "/profile/password" && a.textContent === "Изменить пароль") a.classList.add("profile__menu-active");
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../Controllers/AuthController":"cyuXP","../utils/Routes":"6MXPh"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cyuXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthController", ()=>AuthController);
parcelHelpers.export(exports, "AuthentificationController", ()=>AuthentificationController);
var _authAPI = require("../api/AuthAPI");
var _authAPIDefault = parcelHelpers.interopDefault(_authAPI);
var _store = require("../store/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _routes = require("../utils/Routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
var _router = require("../utils/Routes/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
class AuthController {
    constructor(){
        this.api = (0, _authAPIDefault.default);
    }
    async signin(data) {
        await this.api.signin(data).then(()=>{
            this.fetchUser();
        }).then(()=>{
            new (0, _routesDefault.default)().activation();
        }).then(()=>(0, _routerDefault.default).go("/messenger")).catch((err)=>console.log(err));
    }
    async signup(data) {
        await this.api.signup(data).then(()=>{
            this.fetchUser();
        }).then(()=>new (0, _routesDefault.default)().activation()).then(()=>(0, _routerDefault.default).go("/messenger")).catch((err)=>console.log(err));
    }
    async changeDate(data) {
        this.api.changeDate({
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            data
        }).then((res)=>{
            (0, _storeDefault.default).set("user", res);
        }).catch((err)=>console.log(err));
    }
    async changePassword(data) {
        this.api.changePassword({
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            data
        }).then((res)=>console.log(res)).catch((err)=>console.log(err));
    }
    async changeAvatar(data) {
        this.api.changeAvatar({
            data
        }).then((res)=>(0, _storeDefault.default).set("user", res)).then(()=>{
            document.querySelector("#popup__avatar").style.display = "none";
        }).catch((err)=>console.log(err));
    }
    async fetchUser() {
        const user = await this.api.read();
        (0, _storeDefault.default).set("user", user);
    }
    async logout() {
        try {
            await this.api.logout();
            new (0, _routesDefault.default)().activationForNonRegistered();
            (0, _routerDefault.default).go("/");
        } catch (e) {
            console.error(e.message);
        }
    }
}
const AuthentificationController = new AuthController();

},{"../api/AuthAPI":"9MuyV","../store/Store":"lLZgH","../utils/Routes":"6MXPh","../utils/Routes/Router":"5qvT0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MuyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthAPI", ()=>AuthAPI);
var _requests = require("../services/Requests");
var _requestsDefault = parcelHelpers.interopDefault(_requests);
class AuthAPI {
    constructor(){
        this.request = new (0, _requestsDefault.default)();
    }
    signin(data) {
        return this.request.post("auth/signin", data);
    }
    signup(data) {
        return this.request.post("auth/signup", data);
    }
    read() {
        return this.request.get("auth/user");
    }
    changeDate(data) {
        return this.request.put("user/profile", data);
    }
    changePassword(data) {
        return this.request.put("user/profile/password", data);
    }
    changeAvatar(data) {
        return this.request.put("user/profile/avatar", data);
    }
    logout() {
        return this.request.post("auth/logout", {
            headers: {
                accept: "application/json"
            }
        });
    }
}
exports.default = new AuthAPI();

},{"../services/Requests":"l9igq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9igq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let METHODS;
(function(METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
function queryStringify(data) {
    if (typeof data !== "object") throw new Error("Data must be object");
    const keys = Object.keys(data);
    return keys.reduce((result, key, index)=>{
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
}
class HTTPTransport {
    constructor(){
        this.baseURL = "https://ya-praktikum.tech/api/v2/";
    }
    get = (url)=>{
        return this.request(`${this.baseURL}${url}`, {
            method: METHODS.GET
        });
    };
    post = (url, options)=>{
        return this.request(`${this.baseURL}${url}`, {
            ...options,
            method: METHODS.POST
        });
    };
    put = (url, options)=>{
        return this.request(`${this.baseURL}${url}`, {
            ...options,
            method: METHODS.PUT
        });
    };
    delete = (url, options)=>{
        return this.request(`${this.baseURL}${url}`, {
            ...options,
            method: METHODS.DELETE
        });
    };
    request = (url, options)=>{
        const { headers ={} , method , data  } = options;
        return new Promise(function(resolve, reject) {
            if (!method) {
                reject("No method");
                return;
            }
            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;
            xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);
            Object.keys(headers).forEach((key)=>{
                xhr.setRequestHeader(key, headers[key]);
            });
            xhr.withCredentials = true;
            xhr.responseType = "json";
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) resolve(xhr.response);
                    else reject(xhr.response);
                }
            };
            xhr.ontimeout = reject;
            const dataJSON = data instanceof FormData ? data : JSON.stringify(data);
            if (isGet || !data) xhr.send();
            else xhr.send(dataJSON);
        });
    };
}
exports.default = HTTPTransport;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLZgH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreEvents", ()=>StoreEvents);
parcelHelpers.export(exports, "Store", ()=>Store);
parcelHelpers.export(exports, "withStore", ()=>withStore);
var _eventBus = require("../utils/Event-bus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
var _helpers = require("../utils/helpers");
let StoreEvents;
(function(StoreEvents) {
    StoreEvents["Updated"] = "updated";
})(StoreEvents || (StoreEvents = {}));
class Store extends (0, _eventBusDefault.default) {
    constructor(){
        super();
    }
    state = {};
    set(keypath, data) {
        (0, _helpers.set)(this.state, keypath, data);
        this.emit(StoreEvents.Updated, this.getState());
    }
    getState() {
        return this.state;
    }
}
const store = new Store();
function isPlainObject(value) {
    return typeof value === "object" && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
function isArray(value) {
    return Array.isArray(value);
}
function isArrayOrObject(value) {
    return isPlainObject(value) || isArray(value);
}
function isEqual(lhs, rhs) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) return false;
    for (const [key, value] of Object.entries(lhs)){
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) continue;
            return false;
        }
        if (value !== rightValue) return false;
    }
    return true;
}
function withStore(mapStateToProps) {
    return function wrap(Component) {
        let previousState;
        return class WithStore extends Component {
            constructor(props){
                previousState = mapStateToProps(store.getState());
                super({
                    ...props,
                    ...previousState
                });
                store.on(StoreEvents.Updated, ()=>{
                    const stateProps = mapStateToProps(store.getState());
                    if (!isEqual(previousState, stateProps) || stateProps.selectedChat || stateProps.search) {
                        previousState = stateProps;
                        this.setProps({
                            ...stateProps
                        });
                    }
                });
            }
        };
    };
}
exports.default = store;

},{"../utils/Event-bus":"eks8B","../utils/helpers":"h3C0h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eks8B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventBus {
    listeners = {};
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event]?.push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach(function(listener) {
            listener(...args);
        });
    }
}
exports.default = EventBus;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h3C0h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge);
parcelHelpers.export(exports, "set", ()=>set);
function merge(lhs, rhs) {
    for(let p in rhs){
        if (!rhs.hasOwnProperty(p)) continue;
        try {
            if (rhs[p].constructor === Object) rhs[p] = merge(lhs[p], rhs[p]);
            else lhs[p] = rhs[p];
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }
    return lhs;
}
function set(object, path, value) {
    if (typeof object !== "object" || object === null) return object;
    if (typeof path !== "string") throw new Error("path must be string");
    const result = path.split(".").reduceRight((acc, key)=>({
            [key]: acc
        }), value);
    return merge(object, result);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MXPh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _content = require("../../blocks/libs/profiles/content/Content");
var _chats = require("../../pages/chats/Chats");
var _chatsDefault = parcelHelpers.interopDefault(_chats);
var _entrance = require("../../pages/entrance/Entrance");
var _entranceDefault = parcelHelpers.interopDefault(_entrance);
var _popup = require("../../pages/popup/Popup");
var _popupDefault = parcelHelpers.interopDefault(_popup);
var _errorJpg = require("../../assets/images/error.jpg");
var _errorJpgDefault = parcelHelpers.interopDefault(_errorJpg);
var _profile = require("../../pages/profile/Profile");
var _registration = require("../../pages/registration/Registration");
var _registrationDefault = parcelHelpers.interopDefault(_registration);
var _router = require("./Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _authController = require("../../Controllers/AuthController");
var _error404 = require("../../pages/error404/Error404");
var _error404Default = parcelHelpers.interopDefault(_error404);
let Routes;
(function(Routes) {
    Routes["Index"] = "/";
    Routes["Register"] = "/sign-up";
    Routes["Chats"] = "/messenger";
    Routes["AddFile"] = "/messenger/addFile";
    Routes["addPhotoOrVideo"] = "/messenger/addPhotoOrVideo";
    Routes["addUser"] = "/messenger/addUser";
    Routes["deleteUser"] = "/messenger/deleteUser";
    Routes["Profile"] = "/profile";
    Routes["ChangesData"] = "/profile/data";
    Routes["ChangePassword"] = "/profile/password";
    Routes["ChangeAvatar"] = "/profile/changeAvatar";
    Routes["Error404"] = "/error404";
})(Routes || (Routes = {}));
class ActivationRoute {
    activation = ()=>{
        (0, _routerDefault.default).use(Routes.Chats, (0, _chats.Messenger), {
            classes: "chats",
            images: (0, _chats.images)
        }).use(Routes.AddFile, (0, _chatsDefault.default), {
            classes: "chats",
            images: (0, _chats.images)
        }).use(Routes.AddFile, (0, _popupDefault.default), {
            title: "Загрузите файл",
            name: "file",
            label: "Добавить",
            id: "file",
            events: {
                submit: (e)=>(0, _popup.onSubmitPopup)(e, "file")
            },
            typeButton: "submit",
            typeInput: "file"
        }).use(Routes.addPhotoOrVideo, (0, _chats.Messenger), {
            classes: "chats",
            images: (0, _chats.images)
        }).use(Routes.addPhotoOrVideo, (0, _popupDefault.default), {
            title: "Загрузите файл",
            name: "file",
            label: "Добавить",
            id: "file",
            events: {
                submit: (e)=>(0, _popup.onSubmitPopup)(e, "file")
            },
            typeButton: "submit",
            typeInput: "file"
        }).use(Routes.addUser, (0, _chats.Messenger), {
            classes: "chats",
            images: (0, _chats.images)
        }).use(Routes.addUser, (0, _popupDefault.default), {
            title: "Добавить пользователя",
            name: "login",
            label: "Добавить",
            id: "add",
            events: {
                submit: (e)=>(0, _popup.onSubmitPopup)(e, "add")
            },
            typeButton: "submit",
            typeInput: "text"
        }).use(Routes.deleteUser, (0, _chats.Messenger), {
            classes: "chats",
            images: (0, _chats.images)
        }).use(Routes.deleteUser, (0, _popupDefault.default), {
            title: "Удалить пользователя",
            name: "login",
            label: "Удалить",
            id: "delete",
            events: {
                submit: (e)=>(0, _popup.onSubmitPopup)(e, "delete")
            },
            typeButton: "submit",
            typeInput: "text"
        }).use(Routes.Profile, (0, _profile.ProfilePage), {
            events: {
                click: this.onClick
            }
        }).use(Routes.ChangesData, (0, _profile.ProfilePage), {
            events: {
                click: this.onClick
            }
        }).use(Routes.ChangePassword, (0, _profile.ProfilePage), {
            events: {
                click: this.onClick
            }
        }).use(Routes.ChangeAvatar, (0, _profile.ProfilePage), {
            events: {
                click: this.onClick
            }
        }).use(Routes.Profile, (0, _content.ContentPage), {
            trigger: "profile"
        }).use(Routes.ChangesData, (0, _content.ContentPage), {
            trigger: "data",
            events: {
                submit: (e)=>(0, _content.onSubmitProfile)(e, "data")
            }
        }).use(Routes.ChangePassword, (0, _content.ContentPage), {
            trigger: "password",
            events: {
                submit: (e)=>(0, _content.onSubmitProfile)(e, "password")
            }
        }).use(Routes.ChangeAvatar, (0, _popupDefault.default), {
            title: "Загрузите файл",
            name: "file",
            label: "Поменять",
            id: "avatar",
            events: {
                submit: (e)=>(0, _popup.onSubmitPopup)(e, "avatar")
            },
            typeButton: "submit",
            typeInput: "file"
        }).use(Routes.Error404, (0, _error404Default.default), {
            images: (0, _errorJpgDefault.default)
        }).start();
    };
    activationForNonRegistered = ()=>{
        (0, _routerDefault.default).use(Routes.Index, (0, _entranceDefault.default)).use(Routes.Register, (0, _registrationDefault.default), {
            classes: "registration",
            events: {
                submit: (0, _registration.onSubmitRegistration)
            }
        }).use(Routes.Error404, (0, _error404Default.default), {
            images: (0, _errorJpgDefault.default)
        }).start();
    };
    onClick = (e)=>{
        e.preventDefault();
        const target = e.target;
        if (target.getAttribute("href") === "#") {
            (0, _authController.AuthentificationController).logout();
            return;
        }
        let path = target.getAttribute("href") ? target.getAttribute("href") : target.getAttribute("data-href");
        if (target.getAttribute("data-href") === "/#") {
            if (/profile/g.test(window.location.pathname)) (0, _routerDefault.default).go("/profile");
            else (0, _routerDefault.default).go("/messenger");
            return;
        }
        if (!target.classList.contains("profile__hover")) {
            if (/profile/g.test(target.getAttribute("class"))) {
                if (target.tagName === "A") {
                    const prof = document.querySelector(".profile");
                    const a = prof?.querySelectorAll("a");
                    a?.forEach((a)=>{
                        a.classList.remove("profile__menu-active");
                    });
                    target.classList.add("profile__menu-active");
                }
            }
        }
        if (path) (0, _routerDefault.default).go(path);
    };
}
exports.default = ActivationRoute;

},{"../../blocks/libs/profiles/content/Content":"fE5ug","../../pages/chats/Chats":"36rwK","../../pages/entrance/Entrance":"l6xHw","../../pages/popup/Popup":"9HzUq","../../pages/profile/Profile":"fkSBz","../../pages/registration/Registration":"bC1NC","./Router":"5qvT0","../../Controllers/AuthController":"cyuXP","../../pages/error404/Error404":"gv8yC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../assets/images/error.jpg":"2wxC8"}],"fE5ug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onSubmitProfile", ()=>onSubmitProfile);
parcelHelpers.export(exports, "ContentPage", ()=>ContentPage);
var _authController = require("../../../../Controllers/AuthController");
var _store = require("../../../../store/Store");
var _block = require("../../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _button = require("../../button/Button");
var _profiles = require("../Profiles");
var _profilesDefault = parcelHelpers.interopDefault(_profiles);
var _contentPug = require("./_content.pug");
var _contentPugDefault = parcelHelpers.interopDefault(_contentPug);
class Content extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        this.children.emailInput = new (0, _profilesDefault.default)({
            text: "Почта",
            name: "email",
            type: "email",
            placeholder: "pochta@yandex.ru"
        });
        this.children.loginInput = new (0, _profilesDefault.default)({
            text: "Логин",
            name: "login",
            type: "text",
            placeholder: "ivanivanov"
        });
        this.children.first_nameInput = new (0, _profilesDefault.default)({
            text: "Имя",
            name: "first_name",
            type: "text",
            placeholder: "Иван"
        });
        this.children.second_nameInput = new (0, _profilesDefault.default)({
            text: "Фамилия",
            name: "second_name",
            type: "text",
            placeholder: "Иванов"
        });
        this.children.display_nameInput = new (0, _profilesDefault.default)({
            text: "Имя в чате",
            name: "display_name",
            type: "text",
            placeholder: "Иван"
        });
        this.children.phoneInput = new (0, _profilesDefault.default)({
            text: "Телефон",
            name: "phone",
            type: "tel",
            placeholder: "+7 (909) 967 30 30"
        });
        this.children.oldPasswordInput = new (0, _profilesDefault.default)({
            text: "Старый пароль",
            name: "oldPassword",
            type: "password",
            placeholder: ""
        });
        this.children.newPasswordInput = new (0, _profilesDefault.default)({
            text: "Новый пароль",
            name: "newPassword",
            type: "password",
            placeholder: ""
        });
        this.children.newPassword2Input = new (0, _profilesDefault.default)({
            text: "Повторите новый пароль",
            name: "newPasswordRepeat",
            type: "password",
            placeholder: ""
        });
        this.children.button = new (0, _button.Button)({
            label: "Сохранить",
            classes: "profile",
            type: "submit"
        });
    }
    render() {
        return this.compile((0, _contentPugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Content;
const onSubmitProfile = (e, id)=>{
    const form = document.querySelector(`#${id}`);
    const inputs = form?.querySelectorAll("input");
    e.preventDefault();
    if (inputs) for(let i = 0; i < inputs.length; i++){
        if (inputs[i].classList.contains("validation") || inputs[i].value === "") return;
    }
    if (form) {
        const formData = new FormData(form);
        let data;
        if (formData.get("email")) {
            data = {
                email: formData.get("email"),
                login: formData.get("login"),
                first_name: formData.get("first_name"),
                second_name: formData.get("second_name"),
                display_name: formData.get("display_name"),
                phone: formData.get("phone")
            };
            (0, _authController.AuthentificationController).changeDate(data);
        } else {
            data = {
                oldPassword: formData.get("oldPassword"),
                newPassword: formData.get("newPassword")
            };
            (0, _authController.AuthentificationController).changePassword(data);
        }
    }
};
const withUser = (0, _store.withStore)((state)=>({
        ...state.user
    }));
const ContentPage = withUser(Content);

},{"../../../../Controllers/AuthController":"cyuXP","../../../../store/Store":"lLZgH","../../../../utils/Block":"915bj","../../button/Button":"g9rfu","../Profiles":"4nTOu","./_content.pug":"9bXq1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"915bj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventBus = require("./Event-bus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
var _nanoid = require("nanoid");
let eventBackgraund = false;
class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    id = (0, _nanoid.nanoid)(6);
    _element = null;
    /** JSDoc
	 * @param {string} tagName
	 * @param {Object} props
	 *
	 * @returns {void}
	 */ constructor(propsWithChildren){
        const eventBus = new (0, _eventBusDefault.default)();
        const { props , children  } = this._getChildrenAndProps(propsWithChildren);
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = ()=>eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _getChildrenAndProps(childrenAndProps) {
        const props = {};
        const children = {};
        Object.entries(childrenAndProps).forEach(([key, value])=>{
            if (value instanceof Block) children[key] = value;
            else props[key] = value;
        });
        return {
            props: props,
            children
        };
    }
    _addEvents() {
        const { events ={}  } = this.props;
        Object.keys(events).forEach((eventName)=>{
            if (this._element?.tagName === "FORM" || this._element?.querySelector("form")) this._element?.addEventListener(eventName, events[eventName]);
            else if (this._element?.querySelector("input")) this._element?.querySelector("input")?.addEventListener(eventName, events[eventName]);
            else {
                if (eventName === "click" && events[eventName].name === "onClick" && !eventBackgraund) {
                    document.querySelector(".popup__backgraund")?.addEventListener(eventName, events[eventName]);
                    eventBackgraund = true;
                }
                this._element?.addEventListener(eventName, events[eventName]);
            }
        });
    }
    _removeEvents() {
        const { events ={}  } = this.props;
        Object.keys(events).forEach((eventName)=>{
            if (this._element?.tagName === "FORM" || this._element?.querySelector("form")) this._element?.removeEventListener(eventName, events[eventName]);
            else if (this._element?.querySelector("input")) this._element?.querySelector("input")?.removeEventListener(eventName, events[eventName]);
            else this._element?.removeEventListener(eventName, events[eventName]);
        });
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    init() {}
    _componentDidMount() {
        this.componentDidMount();
    }
    componentDidMount() {}
    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach((child)=>{
            if (Array.isArray(child)) child.forEach((ch)=>ch.dispatchComponentDidMount());
            else child.dispatchComponentDidMount();
        });
    }
    _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidUpdate(oldProps, newProps) {
        return oldProps !== newProps;
    }
    setProps = (nextProps)=>{
        if (!nextProps) return;
        Object.assign(this.props, nextProps);
    };
    get element() {
        return this._element;
    }
    _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild;
        if (this._element && newElement) this._element.replaceWith(newElement);
        this._element = newElement;
        this._removeEvents();
        this._addEvents();
    }
    compile(template, context) {
        const contextAndStubs = {
            ...context
        };
        Object.entries(this.children).forEach(([name, component])=>{
            if (Array.isArray(component)) contextAndStubs[name] = component.map((child)=>`div data-id="${child.id}"></div`);
            else contextAndStubs[name] = `div data-id="${component.id}"></div`;
        });
        const html = template(contextAndStubs);
        const temp = document.createElement("template");
        temp.innerHTML = html;
        const replaceStub = (component)=>{
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
            if (!stub) return;
            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent());
        };
        Object.entries(this.children).forEach(([_, component])=>{
            if (Array.isArray(component)) component.forEach(replaceStub);
            else replaceStub(component);
        });
        return temp.content;
    }
    render() {
        return new DocumentFragment();
    }
    getContent() {
        if (/\/error404/.test(window.location.pathname)) {
            const background = document.querySelector(".popup__backgraund");
            background.style.display = "none";
        } else if (this._element?.getAttribute("class") === "popup" || /\/addUser/.test(window.location.pathname) || /\/deleteUser/.test(window.location.pathname)) {
            const background = document.querySelector(".popup__backgraund");
            background.style.display = "block";
        } else {
            const background = document.querySelector(".popup__backgraund");
            background.style.display = "none";
        }
        return this.element;
    }
    _makePropsProxy(props) {
        // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
        const self = this;
        return new Proxy(props, {
            get (target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set (target, prop, value) {
                const oldTarget = {
                    ...target
                };
                target[prop] = value;
                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty () {
                throw new Error("Нет доступа");
            }
        });
    }
}
exports.default = Block;

},{"./Event-bus":"eks8B","nanoid":"2ifus","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ifus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9rfu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _buttonPug = require("./_button.pug");
var _buttonPugDefault = parcelHelpers.interopDefault(_buttonPug);
class Button extends (0, _blockDefault.default) {
    constructor(props){
        super({
            type: "button",
            ...props
        });
    }
    render() {
        return this.compile((0, _buttonPugDefault.default), {
            ...this.props
        });
    }
}

},{"../../../utils/Block":"915bj","./_button.pug":"cl8hg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cl8hg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(classes1, label1, type1) {
        pug_html = pug_html + "<button" + (pug_attr("class", pug_classes([
            "button",
            `${classes1}__button`
        ], [
            false,
            true
        ]), false, false) + pug_attr("type", `${type1}`, true, false)) + ">" + pug_escape((pug_interp = `${label1}`, pug_interp)) + "</button>";
    }).call(this, "classes" in locals_for_with ? locals_for_with.classes : typeof classes !== "undefined" ? classes : undefined, "label" in locals_for_with ? locals_for_with.label : typeof label !== "undefined" ? label : undefined, "type" in locals_for_with ? locals_for_with.type : typeof type !== "undefined" ? type : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nTOu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _profilesPug = require("./_profiles.pug");
var _profilesPugDefault = parcelHelpers.interopDefault(_profilesPug);
var _input = require("../input/Input");
class Profiles extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        this.children.input = new (0, _input.Input)({
            name: this.props.name,
            classes: "profile",
            type: this.props.type,
            placeholder: this.props.placeholder
        });
    }
    render() {
        return this.compile((0, _profilesPugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Profiles;

},{"../../../utils/Block":"915bj","./_profiles.pug":"dpa4s","../input/Input":"eL84l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpa4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(input1, text1) {
        pug_html = pug_html + '<div class="profile__content-elem"><div class="profile__title">' + pug_escape(null == (pug_interp = text1) ? "" : pug_interp) + "</div><" + input1 + "></" + input1 + "></div>";
    }).call(this, "input" in locals_for_with ? locals_for_with.input : typeof input !== "undefined" ? input : undefined, "text" in locals_for_with ? locals_for_with.text : typeof text !== "undefined" ? text : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eL84l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _validation = require("../../../services/Validation");
var _validationDefault = parcelHelpers.interopDefault(_validation);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _inputPug = require("./_input.pug");
var _inputPugDefault = parcelHelpers.interopDefault(_inputPug);
class Input extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props,
            events: {
                ...props.events,
                focus: new (0, _validationDefault.default)().onFocus,
                blur: new (0, _validationDefault.default)().onBlur
            }
        });
    }
    render() {
        return this.compile((0, _inputPugDefault.default), {
            ...this.props
        });
    }
}

},{"../../../services/Validation":"28DtJ","../../../utils/Block":"915bj","./_input.pug":"lDdWf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28DtJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Validation {
    onFocus = (e)=>{
        this.checkInput(e);
    };
    onBlur = (e)=>{
        this.checkInput(e);
    };
    checkInput = (e)=>{
        const input = e.target;
        switch(input.name){
            case "email":
                this.email(input);
                break;
            case "login":
                this.login(input);
                break;
            case "first_name":
                this.firstNameOrSecondName(input);
                break;
            case "second_name":
                this.firstNameOrSecondName(input);
                break;
            case "phone":
                this.phone(input);
                break;
            case "message":
                this.message(input);
                break;
            case "password":
                this.password(input);
                break;
            case "display_name":
                this.login(input);
                break;
            case "oldPassword":
                this.password(input);
                break;
            case "newPassword":
                this.password(input);
                break;
            case "newPasswordRepeat":
                this.passwordRepeat(input);
                break;
            default:
                break;
        }
    };
    email = (input)=>{
        if (/^[\w]+@[\w]+\.[A-Za-z]{2,}$/i.test(input.value)) {
            input.classList.remove("validation");
            if (input.nextSibling) input.nextSibling.textContent = "";
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть \xabсобака\xbb (@) и точка после неё, но перед точкой обязательно должны быть буквы";
            input.classList.add("validation");
        }
    };
    login = (input)=>{
        if (/^[\w\S]{3,20}$/i.test(input.value) && input.value.match(/\D/gi)?.length && !input.value.match(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi)?.length) {
            input.classList.remove("validation");
            if (input.nextSibling) input.nextSibling.textContent = "";
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)";
            input.classList.add("validation");
        }
    };
    firstNameOrSecondName = (input)=>{
        if ((/^[A-Z][A-Za-z]+$/.test(input.value) || /^[А-Я][А-Яа-яЁё]+$/.test(input.value)) && !input.value.match(/[`~!@#$%^&*()|+\=_?;:'",.<>\{\}\[\]\\\/]/gi)?.length) {
            if (input.nextSibling) input.nextSibling.textContent = "";
            input.classList.remove("validation");
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)";
            input.classList.add("validation");
        }
    };
    password = (input)=>{
        if (/\w{8,40}/.test(input.value) && input.value.match(/[A-Z]/g) && input.value.match(/\d/g)) {
            if (input.nextSibling) input.nextSibling.textContent = "";
            input.classList.remove("validation");
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра";
            input.classList.add("validation");
        }
    };
    passwordRepeat = (input)=>{
        if (/\w{8,40}/.test(input.value) && input.value.match(/[A-Z]/g) && input.value.match(/\d/g)) {
            if (input.nextSibling) input.nextSibling.textContent = "";
            input.classList.remove("validation");
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "пароль не совпадает";
            input.classList.add("validation");
        }
    };
    phone = (input)=>{
        if (/^\+?\d{10,15}$/.test(input.value)) {
            if (input.nextSibling) input.nextSibling.textContent = "";
            input.classList.remove("validation");
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "от 10 до 15 символов, состоит из цифр, может начинается с плюса";
            input.classList.add("validation");
        }
    };
    message = (input)=>{
        if (input.value.length !== 0) {
            if (input.nextSibling) input.nextSibling.textContent = "";
            input.classList.remove("validationMessage");
        } else {
            if (input.nextSibling) input.nextSibling.textContent = "не должно быть пустым";
            input.classList.add("validationMessage");
        }
    };
}
exports.default = Validation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDdWf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(classes1, id1, name1, placeholder1, type1) {
        pug_html = pug_html + "<div" + pug_attr("class", pug_classes([
            `${classes1}__inputs-input`
        ], [
            true
        ]), false, false) + ">";
        if (id1 !== "avatar" && id1 !== "file") pug_html = pug_html + "<input" + (pug_attr("name", `${name1}`, true, false) + pug_attr("type", `${type1}`, true, false) + pug_attr("placeholder", `${placeholder1 || ""}`, true, false) + pug_attr("id", `${id1 || ""}`, true, false)) + "/><label></label>";
        if (id1 === "avatar" || id1 === "file") pug_html = pug_html + "<input" + (pug_attr("name", `${name1}`, true, false) + pug_attr("type", `${type1}`, true, false) + pug_attr("placeholder", `${placeholder1 = ""}`, true, false) + pug_attr("id", `${id1}`, true, false)) + "/><label" + pug_attr("for", `${id1}`, true, false) + ">Выбрать файл на компьютере</label>";
        pug_html = pug_html + "</div>";
    }).call(this, "classes" in locals_for_with ? locals_for_with.classes : typeof classes !== "undefined" ? classes : undefined, "id" in locals_for_with ? locals_for_with.id : typeof id !== "undefined" ? id : undefined, "name" in locals_for_with ? locals_for_with.name : typeof name !== "undefined" ? name : undefined, "placeholder" in locals_for_with ? locals_for_with.placeholder : typeof placeholder !== "undefined" ? placeholder : undefined, "type" in locals_for_with ? locals_for_with.type : typeof type !== "undefined" ? type : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bXq1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(button1, display_name1, display_nameInput1, email1, emailInput1, first_name1, first_nameInput1, login1, loginInput1, newPassword2Input1, newPasswordInput1, oldPasswordInput1, phone1, phoneInput1, second_name1, second_nameInput1, trigger1) {
        if (trigger1 === "profile") pug_html = pug_html + '<div class="profile__content"><div class="profile__content-elem"><div class="profile__title">Почта</div><div class="profile__value">' + pug_escape(null == (pug_interp = email1) ? "" : pug_interp) + '</div></div><div class="profile__content-elem"><div class="profile__title">Логин</div><div class="profile__value">' + pug_escape(null == (pug_interp = login1) ? "" : pug_interp) + '</div></div><div class="profile__content-elem"><div class="profile__title">Имя</div><div class="profile__value">' + pug_escape(null == (pug_interp = first_name1) ? "" : pug_interp) + '</div></div><div class="profile__content-elem"><div class="profile__title">Фамилия</div><div class="profile__value">' + pug_escape(null == (pug_interp = second_name1) ? "" : pug_interp) + '</div></div><div class="profile__content-elem"><div class="profile__title">Имя в чате</div><div class="profile__value">' + pug_escape(null == (pug_interp = display_name1) ? "" : pug_interp) + '</div></div><div class="profile__content-elem"><div class="profile__title">Телефон</div><div class="profile__value">' + pug_escape(null == (pug_interp = phone1) ? "" : pug_interp) + "</div></div></div>";
        if (trigger1 === "data") pug_html = pug_html + '<div class="profile__content"><form class="profile__content-form" id="data"><' + emailInput1 + "><" + loginInput1 + "><" + first_nameInput1 + "><" + second_nameInput1 + "><" + display_nameInput1 + "><" + phoneInput1 + "><" + button1 + "></" + button1 + "></" + phoneInput1 + "></" + display_nameInput1 + "></" + second_nameInput1 + "></" + first_nameInput1 + "></" + loginInput1 + "></" + emailInput1 + "></form></div>";
        if (trigger1 === "password") pug_html = pug_html + '<div class="profile__content"><form class="profile__content-form" id="password"><' + oldPasswordInput1 + "><" + newPasswordInput1 + "><" + newPassword2Input1 + "><" + button1 + "></" + button1 + "></" + newPassword2Input1 + "></" + newPasswordInput1 + "></" + oldPasswordInput1 + "></form></div>";
    }).call(this, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "display_name" in locals_for_with ? locals_for_with.display_name : typeof display_name !== "undefined" ? display_name : undefined, "display_nameInput" in locals_for_with ? locals_for_with.display_nameInput : typeof display_nameInput !== "undefined" ? display_nameInput : undefined, "email" in locals_for_with ? locals_for_with.email : typeof email !== "undefined" ? email : undefined, "emailInput" in locals_for_with ? locals_for_with.emailInput : typeof emailInput !== "undefined" ? emailInput : undefined, "first_name" in locals_for_with ? locals_for_with.first_name : typeof first_name !== "undefined" ? first_name : undefined, "first_nameInput" in locals_for_with ? locals_for_with.first_nameInput : typeof first_nameInput !== "undefined" ? first_nameInput : undefined, "login" in locals_for_with ? locals_for_with.login : typeof login !== "undefined" ? login : undefined, "loginInput" in locals_for_with ? locals_for_with.loginInput : typeof loginInput !== "undefined" ? loginInput : undefined, "newPassword2Input" in locals_for_with ? locals_for_with.newPassword2Input : typeof newPassword2Input !== "undefined" ? newPassword2Input : undefined, "newPasswordInput" in locals_for_with ? locals_for_with.newPasswordInput : typeof newPasswordInput !== "undefined" ? newPasswordInput : undefined, "oldPasswordInput" in locals_for_with ? locals_for_with.oldPasswordInput : typeof oldPasswordInput !== "undefined" ? oldPasswordInput : undefined, "phone" in locals_for_with ? locals_for_with.phone : typeof phone !== "undefined" ? phone : undefined, "phoneInput" in locals_for_with ? locals_for_with.phoneInput : typeof phoneInput !== "undefined" ? phoneInput : undefined, "second_name" in locals_for_with ? locals_for_with.second_name : typeof second_name !== "undefined" ? second_name : undefined, "second_nameInput" in locals_for_with ? locals_for_with.second_nameInput : typeof second_nameInput !== "undefined" ? second_nameInput : undefined, "trigger" in locals_for_with ? locals_for_with.trigger : typeof trigger !== "undefined" ? trigger : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"36rwK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "images", ()=>images);
parcelHelpers.export(exports, "Messenger", ()=>Messenger);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _input = require("../../blocks/libs/input/Input");
var _links = require("../../blocks/libs/links/Links");
var _unionPng = require("../../assets/icons/Union.png");
var _unionPngDefault = parcelHelpers.interopDefault(_unionPng);
var _trashSvg = require("../../assets/svg/trash.svg");
var _trashSvgDefault = parcelHelpers.interopDefault(_trashSvg);
var _menuSvg = require("../../assets/svg/menu.svg");
var _menuSvgDefault = parcelHelpers.interopDefault(_menuSvg);
var _picturePng = require("../../assets/images/picture.png");
var _picturePngDefault = parcelHelpers.interopDefault(_picturePng);
var _checkMarkSvg = require("../../assets/svg/checkMark.svg");
var _checkMarkSvgDefault = parcelHelpers.interopDefault(_checkMarkSvg);
var _checkMark2Svg = require("../../assets/svg/checkMark2.svg");
var _checkMark2SvgDefault = parcelHelpers.interopDefault(_checkMark2Svg);
var _paperclipPng = require("../../assets/icons/paperclip.png");
var _paperclipPngDefault = parcelHelpers.interopDefault(_paperclipPng);
var _photoSvg = require("../../assets/svg/photo.svg");
var _photoSvgDefault = parcelHelpers.interopDefault(_photoSvg);
var _fileSvg = require("../../assets/svg/file.svg");
var _fileSvgDefault = parcelHelpers.interopDefault(_fileSvg);
var _sendSvg = require("../../assets/svg/send.svg");
var _sendSvgDefault = parcelHelpers.interopDefault(_sendSvg);
var _chatsPug = require("./chats.pug");
var _chatsPugDefault = parcelHelpers.interopDefault(_chatsPug);
var _chatListBase = require("./ChatListBase/ChatListBase");
var _button = require("../../blocks/libs/button/Button");
var _chatsController = require("../../Controllers/ChatsController");
var _store = require("../../store/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _messagesController = require("../../Controllers/MessagesController");
var _messages = require("./Messages/Messages");
const images = {
    magnifier: (0, _unionPngDefault.default),
    trash: (0, _trashSvgDefault.default),
    menu: (0, _menuSvgDefault.default),
    picture: (0, _picturePngDefault.default),
    checkMark: (0, _checkMarkSvgDefault.default),
    checkMark2: (0, _checkMark2SvgDefault.default),
    paperclip: (0, _paperclipPngDefault.default),
    photo: (0, _photoSvgDefault.default),
    file: (0, _fileSvgDefault.default),
    send: (0, _sendSvgDefault.default)
};
class Chats extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        (0, _chatsController.ChatController).fetchChats();
        this.children.list = new (0, _chatListBase.ChatsList)({});
        this.children.messages = new (0, _messages.MessengerList)({});
        this.children.link = new (0, _links.Links)({
            text: "Профиль",
            classes: "chats",
            href: "/profile"
        });
        this.children.photoOrVideo = new (0, _links.Links)({
            text: "Фото или Видео",
            classes: "chats",
            href: "/messenger/addPhotoOrVideo",
            li: true
        });
        this.children.file = new (0, _links.Links)({
            text: "Файл",
            classes: "chats",
            href: "/messenger/addFile",
            li: true
        });
        this.children.addUser = new (0, _links.Links)({
            text: "Добавить пользователя",
            classes: "chats",
            href: "/messenger/addUser",
            li: true
        });
        this.children.deleteUser = new (0, _links.Links)({
            text: "Удалить пользователя",
            classes: "chats",
            href: "/messenger/deleteUser",
            li: true
        });
        this.children.search = new (0, _input.Input)({
            name: "search",
            classes: "chats",
            type: "text",
            placeholder: "Поиск",
            events: {
                input: (e)=>{
                    const target = e.target;
                    const regexp = new RegExp(`^${target.value}`, "i");
                    const res = (0, _storeDefault.default).getState().chats.filter((obj)=>{
                        return regexp.test(obj.title);
                    });
                    (0, _storeDefault.default).set("search", res);
                }
            }
        });
        this.children.message = new (0, _input.Input)({
            name: "message",
            classes: "chats__message-input chats",
            type: "text",
            placeholder: "Сообщение"
        });
        this.children.button = new (0, _button.Button)({
            label: "",
            classes: "chats__message-send chats",
            type: "submit",
            events: {
                click: (e)=>{
                    const form = document.querySelector(".chats__message-form");
                    const inputs = form?.querySelectorAll("input");
                    e.preventDefault();
                    if (inputs) for(let i = 0; i < inputs.length; i++){
                        if (inputs[i].value === "") return;
                    }
                    if (form) {
                        const formData = new FormData(form);
                        const message = formData.get("message");
                        inputs[0].value = "";
                        (0, _messagesController.MessageController).sendMessage((0, _storeDefault.default).getState().selectedChat, message);
                    }
                }
            }
        });
    }
    render() {
        return this.compile((0, _chatsPugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Chats;
const withSelectedChatMessages = (0, _store.withStore)((state)=>({
        ...state.user,
        ...state.selectedChat
    }));
const Messenger = withSelectedChatMessages(Chats);

},{"../../utils/Block":"915bj","../../blocks/libs/input/Input":"eL84l","../../blocks/libs/links/Links":"e08wk","../../assets/icons/Union.png":"22iRa","../../assets/svg/trash.svg":"giFI2","../../assets/svg/menu.svg":"e65LM","../../assets/images/picture.png":"4IpVU","../../assets/svg/checkMark.svg":"6Ue12","../../assets/svg/checkMark2.svg":"dgv77","../../assets/icons/paperclip.png":"cItKX","../../assets/svg/photo.svg":"7IPuM","../../assets/svg/file.svg":"pyE7D","../../assets/svg/send.svg":"bVQQn","./chats.pug":"jMqVQ","./ChatListBase/ChatListBase":"ibb9w","../../blocks/libs/button/Button":"g9rfu","../../Controllers/ChatsController":"5udd6","../../store/Store":"lLZgH","./Messages/Messages":"kjtYx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../Controllers/MessagesController":"lCuL7"}],"e08wk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Links", ()=>Links);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _routes = require("../../../utils/Routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
var _linksPug = require("./_links.pug");
var _linksPugDefault = parcelHelpers.interopDefault(_linksPug);
class Links extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props,
            events: {
                click: new (0, _routesDefault.default)().onClick
            }
        });
    }
    render() {
        return this.compile((0, _linksPugDefault.default), {
            ...this.props
        });
    }
}

},{"../../../utils/Block":"915bj","../../../utils/Routes":"6MXPh","./_links.pug":"8aCyI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aCyI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(classes1, href1, li1, text1) {
        if (!li1) pug_html = pug_html + "<div" + pug_attr("class", pug_classes([
            `${classes1}__links`
        ], [
            true
        ]), false, false) + "><a" + (pug_attr("class", pug_classes([
            `${classes1}__link`
        ], [
            true
        ]), false, false) + pug_attr("href", `${href1}`, true, false)) + ">" + pug_escape(null == (pug_interp = text1) ? "" : pug_interp) + "</a></div>";
        if (li1) pug_html = pug_html + "<a" + (pug_attr("class", pug_classes([
            `${classes1}__link`
        ], [
            true
        ]), false, false) + pug_attr("href", `${href1}`, true, false)) + ">" + pug_escape(null == (pug_interp = text1) ? "" : pug_interp) + "</a>";
    }).call(this, "classes" in locals_for_with ? locals_for_with.classes : typeof classes !== "undefined" ? classes : undefined, "href" in locals_for_with ? locals_for_with.href : typeof href !== "undefined" ? href : undefined, "li" in locals_for_with ? locals_for_with.li : typeof li !== "undefined" ? li : undefined, "text" in locals_for_with ? locals_for_with.text : typeof text !== "undefined" ? text : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22iRa":[function(require,module,exports) {
module.exports = require("2f0c718097599228").getBundleURL("hKh4f") + "Union.a7305237.png" + "?" + Date.now();

},{"2f0c718097599228":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"giFI2":[function(require,module,exports) {
module.exports = require("8047a1decc127941").getBundleURL("hKh4f") + "trash.9f5322ca.svg" + "?" + Date.now();

},{"8047a1decc127941":"lgJ39"}],"e65LM":[function(require,module,exports) {
module.exports = require("b9a2eca5e3b577e6").getBundleURL("hKh4f") + "menu.d4ddcbaa.svg" + "?" + Date.now();

},{"b9a2eca5e3b577e6":"lgJ39"}],"4IpVU":[function(require,module,exports) {
module.exports = require("5633af8b83f3fc50").getBundleURL("hKh4f") + "picture.056bfe97.png" + "?" + Date.now();

},{"5633af8b83f3fc50":"lgJ39"}],"6Ue12":[function(require,module,exports) {
module.exports = require("1f66ef08465f333b").getBundleURL("hKh4f") + "checkMark.dfc88a5e.svg" + "?" + Date.now();

},{"1f66ef08465f333b":"lgJ39"}],"dgv77":[function(require,module,exports) {
module.exports = require("a562eaba9f339a45").getBundleURL("hKh4f") + "checkMark2.92b579f1.svg" + "?" + Date.now();

},{"a562eaba9f339a45":"lgJ39"}],"cItKX":[function(require,module,exports) {
module.exports = require("e61e47b6c1e86dfe").getBundleURL("hKh4f") + "paperclip.106fc348.png" + "?" + Date.now();

},{"e61e47b6c1e86dfe":"lgJ39"}],"7IPuM":[function(require,module,exports) {
module.exports = require("6de30bd90a409d16").getBundleURL("hKh4f") + "photo.1f96badd.svg" + "?" + Date.now();

},{"6de30bd90a409d16":"lgJ39"}],"pyE7D":[function(require,module,exports) {
module.exports = require("5d58c5071747ada1").getBundleURL("hKh4f") + "file.2f1e0ee5.svg" + "?" + Date.now();

},{"5d58c5071747ada1":"lgJ39"}],"bVQQn":[function(require,module,exports) {
module.exports = require("c1282ed81dd21523").getBundleURL("hKh4f") + "send.a8adb7fc.svg" + "?" + Date.now();

},{"c1282ed81dd21523":"lgJ39"}],"jMqVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(addUser1, avatar1, button1, deleteUser1, images1, link1, list1, message1, messages1, search1) {
        pug_html = pug_html + '<section class="chats"><div class="chats__block"><div class="chats__block-left"><div class="chats__item">         <' + link1 + '><div class="chats__input"><' + search1 + "><img" + (pug_attr("src", `${images1.magnifier}`, true, false) + ' alt="лупа"') + "/></" + search1 + "><" + list1 + "></" + list1 + '></div><div class="chats__block-right"><h3 class="chats__title">Выберите чат чтобы отправить сообщение</h3></div><div class="chats__message"><div class="chats__message-header"><div class="chats__message-avatar"><div class="chats__message-img"><img' + (pug_attr("src", `${avatar1 ? "https://ya-praktikum.tech/api/v2/resources" + avatar1 : "https://new.kemmamed.ru/upload/staff_photo_no.jpg"}`, true, false) + ' alt="avatar"') + '/></div><div class="chats__message-name"></div></div><div class="chats__message-points"><span></span><span></span><span><ul class="chats__message-menu"><li> <img' + (pug_attr("src", `${images1.menu}`, true, false) + ' alt="плюс"') + "/><" + addUser1 + "><li> <img" + (pug_attr("src", `${images1.menu}`, true, false) + ' alt="крестик"') + "/><" + deleteUser1 + "></" + deleteUser1 + "></li></" + addUser1 + '></li></ul></span></div></div></div><div class="chats__message-content">                             <' + messages1 + "></" + messages1 + '><form class="chats__message-form"><' + message1 + "><" + button1 + "></" + button1 + "></" + message1 + "></form></div></" + link1 + "></div></div></div></section>";
    }).call(this, "addUser" in locals_for_with ? locals_for_with.addUser : typeof addUser !== "undefined" ? addUser : undefined, "avatar" in locals_for_with ? locals_for_with.avatar : typeof avatar !== "undefined" ? avatar : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "deleteUser" in locals_for_with ? locals_for_with.deleteUser : typeof deleteUser !== "undefined" ? deleteUser : undefined, "images" in locals_for_with ? locals_for_with.images : typeof images !== "undefined" ? images : undefined, "link" in locals_for_with ? locals_for_with.link : typeof link !== "undefined" ? link : undefined, "list" in locals_for_with ? locals_for_with.list : typeof list !== "undefined" ? list : undefined, "message" in locals_for_with ? locals_for_with.message : typeof message !== "undefined" ? message : undefined, "messages" in locals_for_with ? locals_for_with.messages : typeof messages !== "undefined" ? messages : undefined, "search" in locals_for_with ? locals_for_with.search : typeof search !== "undefined" ? search : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ibb9w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsList", ()=>ChatsList);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatListBasePug = require("./ChatListBase.pug");
var _chatListBasePugDefault = parcelHelpers.interopDefault(_chatListBasePug);
var _chatList = require("./ChatList/ChatList");
var _store = require("../../../store/Store");
var _chatsController = require("../../../Controllers/ChatsController");
class ChatsListBase extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        this.children.chats = this.createChats(this.props);
    }
    componentDidUpdate(_oldProps, newProps) {
        this.children.chats = this.createChats(newProps);
        return true;
    }
    createChats(props) {
        const chats = props.chats.map((chat)=>{
            const hours = new Date(chat.last_message?.time).getHours();
            const minutes = new Date(chat.last_message?.time).getMinutes();
            return {
                ...chat,
                last_message: chat.last_message ? {
                    ...chat.last_message,
                    time: `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
                } : null
            };
        });
        return chats.map((data)=>{
            return new (0, _chatList.Chat)({
                ...data,
                events: {
                    click: ()=>{
                        (0, _chatsController.ChatController).selectChat(data.id);
                        document.querySelector(".chats__message-form").style.display = "flex";
                        document.querySelector(".chats__block-right").style.display = "none";
                    }
                }
            });
        });
    }
    render() {
        return this.compile((0, _chatListBasePugDefault.default), {
            ...this.props
        });
    }
}
const withChats = (0, _store.withStore)((state)=>{
    if (state.selectedChat && document.querySelector(".chats__message-form") && document.querySelector(".chats__block-right")) {
        document.querySelector(".chats__message-form").style.display = "flex";
        document.querySelector(".chats__block-right").style.display = "none";
    }
    if (state.selectedChat) return {
        chats: [
            ...state.search || []
        ],
        selectedChat: {
            ...state.selectedChat
        }
    };
    return {
        chats: [
            ...state.search || []
        ]
    };
});
const ChatsList = withChats(ChatsListBase);

},{"../../../utils/Block":"915bj","./ChatListBase.pug":"dKREy","./ChatList/ChatList":"9iXGc","../../../store/Store":"lLZgH","../../../Controllers/ChatsController":"5udd6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKREy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(chats1) {
        pug_html = pug_html + '<ul class="chats__friends">';
        (function() {
            var $$obj = chats1;
            if ("number" == typeof $$obj.length) for(var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++){
                var val = $$obj[pug_index0];
                pug_html = pug_html + "<" + val + "> </" + val + ">";
            }
            else {
                var $$l = 0;
                for(var pug_index0 in $$obj){
                    $$l++;
                    var val = $$obj[pug_index0];
                    pug_html = pug_html + "<" + val + "> </" + val + ">";
                }
            }
        }).call(this);
        pug_html = pug_html + "</ul>";
    }).call(this, "chats" in locals_for_with ? locals_for_with.chats : typeof chats !== "undefined" ? chats : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9iXGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withSelectedChat", ()=>withSelectedChat);
parcelHelpers.export(exports, "Chat", ()=>Chat);
var _block = require("../../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatListPug = require("./chatList.pug");
var _chatListPugDefault = parcelHelpers.interopDefault(_chatListPug);
var _store = require("../../../../store/Store");
class ChatBase extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _chatListPugDefault.default), {
            ...this.props,
            isSelected: this.props.id === this.props.selectedChat?.id
        });
    }
}
const withSelectedChat = (0, _store.withStore)((state)=>{
    return {
        selectedChat: (state.search || []).find((list, i)=>{
            if (state.selectedChat === list.id) {
                document.querySelectorAll(".chats__friends-list")[i]?.classList.add("background-link");
                return list.id === state.selectedChat;
            }
            return false;
        })
    };
});
const Chat = withSelectedChat(ChatBase);

},{"../../../../utils/Block":"915bj","./chatList.pug":"7kBZ3","../../../../store/Store":"lLZgH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kBZ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(last_message1, title1, unread_count1) {
        pug_html = pug_html + '<li class="chats__friends-list"><div class="chats__friends-img"><img' + pug_attr("src", `${last_message1 ? "https://ya-praktikum.tech/api/v2/resources" + last_message1.user.avatar : "https://new.kemmamed.ru/upload/staff_photo_no.jpg"}`, true, false) + '/></div><div class="chats__friends-middle"><div class="chats__friends-name">' + pug_escape(null == (pug_interp = title1) ? "" : pug_interp) + '</div><div class="chats__friends-text">' + pug_escape(null == (pug_interp = last_message1 ? last_message1.content : null) ? "" : pug_interp) + '</div></div><div class="chats__friends-right"><div class="chats__friends-time">' + pug_escape(null == (pug_interp = last_message1 ? last_message1.time : null) ? "" : pug_interp) + '</div><div class="chats__friends-count">' + pug_escape(null == (pug_interp = unread_count1) ? "" : pug_interp) + "   </div></div></li>";
    }).call(this, "last_message" in locals_for_with ? locals_for_with.last_message : typeof last_message !== "undefined" ? last_message : undefined, "title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined, "unread_count" in locals_for_with ? locals_for_with.unread_count : typeof unread_count !== "undefined" ? unread_count : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5udd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatController", ()=>ChatController);
var _chatAPI = require("../api/ChatAPI");
var _chatAPIDefault = parcelHelpers.interopDefault(_chatAPI);
var _store = require("../store/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _messagesController = require("./MessagesController");
class ChatsController {
    constructor(){
        this.api = (0, _chatAPIDefault.default);
    }
    async create(title, input) {
        await this.api.create(title).then(()=>{
            input.value = "";
        });
        this.fetchChats();
    }
    async fetchChats() {
        const chats = await this.api.read();
        chats.map(async (chat)=>{
            const token = await this.getToken(chat.id);
            await (0, _messagesController.MessageController).connect(chat.id, token);
        });
        (0, _storeDefault.default).set("chats", chats);
        (0, _storeDefault.default).set("search", chats);
    }
    addUserToChat(id, userId) {
        this.api.addUsers(id, [
            userId
        ]);
    }
    async delete(id, input) {
        await this.api.delete(+id).then((res)=>{
            input.value = "";
            console.log(res);
        }).catch((err)=>console.log(err));
        this.fetchChats();
    }
    getToken(id) {
        return this.api.getToken(id);
    }
    selectChat(id) {
        (0, _storeDefault.default).set("selectedChat", id);
    }
}
const ChatController = new ChatsController();

},{"../api/ChatAPI":"7VSsr","../store/Store":"lLZgH","./MessagesController":"lCuL7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7VSsr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsAPI", ()=>ChatsAPI);
var _requests = require("../services/Requests");
var _requestsDefault = parcelHelpers.interopDefault(_requests);
class ChatsAPI {
    constructor(){
        this.request = new (0, _requestsDefault.default)();
    }
    create(title) {
        return this.request.post("chats", {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            data: {
                title
            }
        });
    }
    delete(id) {
        return this.request.delete("chats", {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            data: {
                chatId: id
            }
        });
    }
    read() {
        return this.request.get("chats");
    }
    getUsers(id) {
        return this.request.get(`chats/${id}/users`);
    }
    addUsers(id, users) {
        return this.request.put("chats/users", {
            users,
            chatId: id
        });
    }
    async getToken(id) {
        const response = await this.request.post(`chats/token/${id}`);
        return response.token;
    }
    update = undefined;
}
exports.default = new ChatsAPI();

},{"../services/Requests":"l9igq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCuL7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageController", ()=>MessageController);
var _wstransport = require("../services/WSTransport");
var _wstransportDefault = parcelHelpers.interopDefault(_wstransport);
var _store = require("../store/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
class MessagesController {
    sockets = new Map();
    async connect(id, token) {
        if (this.sockets.has(id)) return;
        const userId = (0, _storeDefault.default).getState().user.id;
        const wsTransport = new (0, _wstransportDefault.default)(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);
        this.sockets.set(id, wsTransport);
        await wsTransport.connect();
        this.subscribe(wsTransport, id);
        this.fetchOldMessages(id);
    }
    sendMessage(id, message) {
        const socket = this.sockets.get(id);
        if (!socket) throw new Error(`Chat ${id} is not connected`);
        socket.send({
            type: "message",
            content: message
        });
    }
    fetchOldMessages(id) {
        const socket = this.sockets.get(id);
        if (!socket) throw new Error(`Chat ${id} is not connected`);
        socket.send({
            type: "get old",
            content: "0"
        });
    }
    closeAll() {
        Array.from(this.sockets.values()).forEach((socket)=>socket.close());
    }
    onMessage(id, messages) {
        let messagesToAdd = [];
        if (Array.isArray(messages)) messagesToAdd = messages.reverse();
        else messagesToAdd.push(messages);
        const currentMessages = ((0, _storeDefault.default).getState().messages || {})[id] || [];
        messagesToAdd = [
            ...currentMessages,
            ...messagesToAdd
        ];
        (0, _storeDefault.default).set(`messages.${id}`, messagesToAdd);
    }
    onClose(id) {
        this.sockets.delete(id);
    }
    subscribe(transport, id) {
        transport.on((0, _wstransport.WSTransportEvents).Message, (message)=>this.onMessage(id, message));
        transport.on((0, _wstransport.WSTransportEvents).Close, ()=>this.onClose(id));
    }
}
const MessageController = new MessagesController();

},{"../services/WSTransport":"2UZDA","../store/Store":"lLZgH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2UZDA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WSTransportEvents", ()=>WSTransportEvents);
var _eventBus = require("../utils/Event-bus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
let WSTransportEvents;
(function(WSTransportEvents) {
    WSTransportEvents["Connected"] = "connected";
    WSTransportEvents["Error"] = "error";
    WSTransportEvents["Message"] = "message";
    WSTransportEvents["Close"] = "close";
})(WSTransportEvents || (WSTransportEvents = {}));
class WSTransport extends (0, _eventBusDefault.default) {
    constructor(url){
        super();
        this.url = url;
        this.socket = null;
        this.pingInterval = 0;
    }
    send(data) {
        if (!this.socket) throw new Error("Socket is not connected");
        this.socket.send(JSON.stringify(data));
    }
    connect() {
        this.socket = new WebSocket(this.url);
        this.subscribe(this.socket);
        this.setupPing();
        return new Promise((resolve)=>{
            this.on(WSTransportEvents.Connected, ()=>{
                resolve();
            });
        });
    }
    close() {
        this.socket?.close();
    }
    setupPing() {
        this.pingInterval = setInterval(()=>{
            this.send({
                type: "ping"
            });
        }, 5000);
        this.on(WSTransportEvents.Close, ()=>{
            clearInterval(this.pingInterval);
            this.pingInterval = 0;
        });
    }
    subscribe(socket) {
        socket.addEventListener("open", ()=>{
            this.emit(WSTransportEvents.Connected);
        });
        socket.addEventListener("close", ()=>{
            this.emit(WSTransportEvents.Close);
        });
        socket.addEventListener("error", (e)=>{
            this.emit(WSTransportEvents.Error, e);
        });
        socket.addEventListener("message", (message)=>{
            const data = JSON.parse(message.data);
            if (data.type && data.type === "pong") return;
            this.emit(WSTransportEvents.Message, data);
        });
    }
}
exports.default = WSTransport;

},{"../utils/Event-bus":"eks8B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kjtYx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessengerList", ()=>MessengerList);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messagesPug = require("./messages.pug");
var _messagesPugDefault = parcelHelpers.interopDefault(_messagesPug);
var _message = require("../Message/Message");
var _store = require("../../../store/Store");
class MessengerBase extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.messages = this.createMessages(this.props);
    }
    componentDidUpdate(_oldProps, newProps) {
        this.children.messages = this.createMessages(newProps);
        return true;
    }
    createMessages(props) {
        return props.messages.map((data)=>{
            const hours = new Date(data.time).getHours();
            const minutes = new Date(data.time).getMinutes();
            const newData = {
                ...data,
                time: `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
            };
            return new (0, _message.Message)({
                ...newData,
                isMine: props.userId === data.user_id
            });
        });
    }
    render() {
        return this.compile((0, _messagesPugDefault.default), {
            ...this.props
        });
    }
}
const withSelectedChatMessages = (0, _store.withStore)((state)=>{
    const selectedChatId = state.selectedChat;
    if (!selectedChatId) return {
        messages: [],
        selectedChat: undefined,
        userId: state.user?.id
    };
    return {
        messages: (state.messages || {})[selectedChatId] || [],
        selectedChat: state.selectedChat,
        userId: state.user?.id
    };
});
const MessengerList = withSelectedChatMessages(MessengerBase);

},{"../../../utils/Block":"915bj","./messages.pug":"blbQm","../Message/Message":"57K2z","../../../store/Store":"lLZgH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blbQm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(messages1) {
        pug_html = pug_html + '<ul class="chats__message-section">';
        (function() {
            var $$obj = messages1;
            if ("number" == typeof $$obj.length) for(var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++){
                var val = $$obj[pug_index0];
                pug_html = pug_html + "<" + val + "> </" + val + ">";
            }
            else {
                var $$l = 0;
                for(var pug_index0 in $$obj){
                    $$l++;
                    var val = $$obj[pug_index0];
                    pug_html = pug_html + "<" + val + "> </" + val + ">";
                }
            }
        }).call(this);
        pug_html = pug_html + "</ul>";
    }).call(this, "messages" in locals_for_with ? locals_for_with.messages : typeof messages !== "undefined" ? messages : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"57K2z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Message", ()=>Message);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messagePug = require("./message.pug");
var _messagePugDefault = parcelHelpers.interopDefault(_messagePug);
class Message extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _messagePugDefault.default), {
            ...this.props
        });
    }
}

},{"../../../utils/Block":"915bj","./message.pug":"3wsac","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wsac":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(content1, isMine1, time1) {
        pug_html = pug_html + "<li" + pug_attr("class", pug_classes([
            `chats__message-wrapper ${isMine1 ? "chats__message-your" : "chats__message-friend"}`
        ], [
            true
        ]), false, false) + '><div class="chats__message-text_your chats__message-text ">' + pug_escape(null == (pug_interp = content1) ? "" : pug_interp) + "<span>" + pug_escape(null == (pug_interp = time1) ? "" : pug_interp) + "</span></div></li>";
    }).call(this, "content" in locals_for_with ? locals_for_with.content : typeof content !== "undefined" ? content : undefined, "isMine" in locals_for_with ? locals_for_with.isMine : typeof isMine !== "undefined" ? isMine : undefined, "time" in locals_for_with ? locals_for_with.time : typeof time !== "undefined" ? time : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6xHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _button = require("../../blocks/libs/button/Button");
var _input = require("../../blocks/libs/input/Input");
var _links = require("../../blocks/libs/links/Links");
var _entrancePug = require("./entrance.pug");
var _entrancePugDefault = parcelHelpers.interopDefault(_entrancePug);
var _authController = require("../../Controllers/AuthController");
class Entrance extends (0, _blockDefault.default) {
    constructor(){
        super({});
    }
    init() {
        this.children.login = new (0, _input.Input)({
            name: "login",
            classes: "entrance",
            type: "text"
        });
        this.children.password = new (0, _input.Input)({
            name: "password",
            classes: "entrance",
            type: "password"
        });
        this.children.button = new (0, _button.Button)({
            label: "Авторизоваться",
            classes: "entrance",
            type: "submit",
            events: {
                click: this.onSubmit
            }
        });
        this.children.link = new (0, _links.Links)({
            text: "Нет аккаунта?",
            classes: "entrance",
            href: "/sign-up"
        });
    }
    onSubmit(e) {
        const form = document.querySelector(".entrance__form");
        const inputs = form?.querySelectorAll("input");
        e.preventDefault();
        if (inputs) for(let i = 0; i < inputs.length; i++){
            if (inputs[i].classList.contains("validation") || inputs[i].value === "") return;
        }
        if (form) {
            const formData = new FormData(form);
            const data = {
                login: formData.get("login"),
                password: formData.get("password")
            };
            (0, _authController.AuthentificationController).signin({
                data,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    }
    render() {
        return this.compile((0, _entrancePugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Entrance;

},{"../../utils/Block":"915bj","../../blocks/libs/button/Button":"g9rfu","../../blocks/libs/input/Input":"eL84l","../../blocks/libs/links/Links":"e08wk","./entrance.pug":"i5PgP","../../Controllers/AuthController":"cyuXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5PgP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(button1, link1, login1, password1) {
        pug_html = pug_html + '<section class="entrance"><h1 class="entrance__title">Добро пожаловать в наше современное приложение!</h1><div class="entrance__wrapper"><h2 class="entrance__title-sub">Вход</h2><form class="entrance__form"><div class="entrance__inputs"><' + login1 + "><" + password1 + '><div class="entrance__buttons"><' + button1 + "><" + link1 + "></" + link1 + "></" + button1 + "></div></" + password1 + "></" + login1 + "></div></form></div></section>";
    }).call(this, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "link" in locals_for_with ? locals_for_with.link : typeof link !== "undefined" ? link : undefined, "login" in locals_for_with ? locals_for_with.login : typeof login !== "undefined" ? login : undefined, "password" in locals_for_with ? locals_for_with.password : typeof password !== "undefined" ? password : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9HzUq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onSubmitPopup", ()=>onSubmitPopup);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _button = require("../../blocks/libs/button/Button");
var _input = require("../../blocks/libs/input/Input");
var _popupPug = require("./popup.pug");
var _popupPugDefault = parcelHelpers.interopDefault(_popupPug);
var _authController = require("../../Controllers/AuthController");
var _chatsController = require("../../Controllers/ChatsController");
var _store = require("../../store/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
class Popup extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        this.children.input = new (0, _input.Input)({
            name: this.props.name,
            classes: `popup__input popup`,
            id: this.props.id,
            type: this.props.typeInput
        });
        this.children.button = new (0, _button.Button)({
            label: this.props.label,
            classes: "popup",
            type: this.props.typeButton
        });
    }
    render() {
        return this.compile((0, _popupPugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Popup;
const onSubmitPopup = (e, id)=>{
    const form = document.querySelector(`#popup__${id} form`);
    const inputs = form?.querySelectorAll("input");
    e.preventDefault();
    if (inputs) for(let i = 0; i < inputs.length; i++){
        if (inputs[i].classList.contains("validation") || inputs[i].value === "") return;
    }
    if (form) {
        const formData = new FormData(form);
        if (id === "add") {
            const title = formData.get("login");
            (0, _chatsController.ChatController).create(title, inputs[0]);
        } else if (id === "avatar") {
            const formData = new FormData();
            const input = inputs[0];
            formData.append("avatar", input.files?.item(0));
            (0, _authController.AuthentificationController).changeAvatar(formData);
        } else if (id === "delete") {
            const allChats = (0, _storeDefault.default).getState();
            const id = allChats.chats.find((chat)=>chat.title === formData.get("login")).id;
            (0, _chatsController.ChatController).delete(id, inputs[0]);
        }
    }
};

},{"../../utils/Block":"915bj","../../blocks/libs/button/Button":"g9rfu","../../blocks/libs/input/Input":"eL84l","./popup.pug":"jHuAa","../../Controllers/AuthController":"cyuXP","../../Controllers/ChatsController":"5udd6","../../store/Store":"lLZgH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHuAa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(button1, id1, input1, title1, typeInput1) {
        if (typeInput1 === "text") pug_html = pug_html + "<section" + (' class="popup"' + pug_attr("id", `popup__${id1}`, true, false)) + '><div class="popup__wrapper"><div class="popup__title">' + pug_escape(null == (pug_interp = title1) ? "" : pug_interp) + '</div><form class="popup__form"><' + input1 + "><" + button1 + "></" + button1 + "></" + input1 + "></form></div></section>";
        if (typeInput1 === "file") pug_html = pug_html + "<section" + (' class="popup"' + pug_attr("id", `popup__${id1}`, true, false)) + '><div class="popup__wrapper"><div class="popup__title">' + pug_escape(null == (pug_interp = title1) ? "" : pug_interp) + '</div><form class="popup__form"><' + input1 + "><" + button1 + "></" + button1 + "></" + input1 + "></form></div></section>";
    }).call(this, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "id" in locals_for_with ? locals_for_with.id : typeof id !== "undefined" ? id : undefined, "input" in locals_for_with ? locals_for_with.input : typeof input !== "undefined" ? input : undefined, "title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined, "typeInput" in locals_for_with ? locals_for_with.typeInput : typeof typeInput !== "undefined" ? typeInput : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkSBz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePage", ()=>ProfilePage);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _links = require("../../blocks/libs/links/Links");
var _profilePug = require("./profile.pug");
var _profilePugDefault = parcelHelpers.interopDefault(_profilePug);
var _store = require("../../store/Store");
var _authController = require("../../Controllers/AuthController");
class Profile extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        (0, _authController.AuthentificationController).fetchUser();
        this.children.chat = new (0, _links.Links)({
            text: "Чат",
            classes: "profile",
            href: "/messenger",
            li: true
        });
        this.children.profile = new (0, _links.Links)({
            text: "Профиль",
            classes: "profile__menu-active profile",
            href: "/profile",
            li: true
        });
        this.children.data = new (0, _links.Links)({
            text: "Изменить данные",
            classes: "profile",
            href: "/profile/data",
            li: true
        });
        this.children.password = new (0, _links.Links)({
            text: "Изменить пароль",
            classes: "profile",
            href: "/profile/password",
            li: true
        });
        this.children.exit = new (0, _links.Links)({
            text: "Выйти",
            classes: "profile",
            href: "#",
            li: true
        });
    }
    render() {
        return this.compile((0, _profilePugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Profile;
const withUser = (0, _store.withStore)((state)=>({
        ...state.user
    }));
const ProfilePage = withUser(Profile);

},{"../../utils/Block":"915bj","../../blocks/libs/links/Links":"e08wk","./profile.pug":"hyBKG","../../store/Store":"lLZgH","../../Controllers/AuthController":"cyuXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hyBKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(avatar1, chat1, data1, exit1, first_name1, password1, profile1) {
        pug_html = pug_html + '<section class="profile"><ul class="profile__menu"><li class="profile__item"><' + chat1 + "></" + chat1 + '></li><li class="profile__item"><' + profile1 + "></" + profile1 + '></li><li class="profile__item"><' + data1 + "></" + data1 + '></li><li class="profile__item"><' + password1 + "></" + password1 + '></li><li class="profile__item"><' + exit1 + "></" + exit1 + '></li></ul><div class="profile__wrapper"><div class="profile__header"><div class="profile__avatar"> <img' + (pug_attr("src", `${avatar1 ? "https://ya-praktikum.tech/api/v2/resources" + avatar1 : "https://new.kemmamed.ru/upload/staff_photo_no.jpg"}`, true, false) + ' alt="avatar"') + '/><div class="profile__hover" data-href="/profile/changeAvatar">Поменять аватар</div></div><h3 class="profile__name">' + pug_escape(null == (pug_interp = first_name1) ? "" : pug_interp) + " </h3></div></div></section>";
    }).call(this, "avatar" in locals_for_with ? locals_for_with.avatar : typeof avatar !== "undefined" ? avatar : undefined, "chat" in locals_for_with ? locals_for_with.chat : typeof chat !== "undefined" ? chat : undefined, "data" in locals_for_with ? locals_for_with.data : typeof data !== "undefined" ? data : undefined, "exit" in locals_for_with ? locals_for_with.exit : typeof exit !== "undefined" ? exit : undefined, "first_name" in locals_for_with ? locals_for_with.first_name : typeof first_name !== "undefined" ? first_name : undefined, "password" in locals_for_with ? locals_for_with.password : typeof password !== "undefined" ? password : undefined, "profile" in locals_for_with ? locals_for_with.profile : typeof profile !== "undefined" ? profile : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bC1NC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onSubmitRegistration", ()=>onSubmitRegistration);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _button = require("../../blocks/libs/button/Button");
var _input = require("../../blocks/libs/input/Input");
var _links = require("../../blocks/libs/links/Links");
var _authController = require("../../Controllers/AuthController");
var _registrationPug = require("./registration.pug");
var _registrationPugDefault = parcelHelpers.interopDefault(_registrationPug);
class Registration extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        this.children.email = new (0, _input.Input)({
            name: "email",
            classes: "registration",
            type: "email"
        });
        this.children.login = new (0, _input.Input)({
            name: "login",
            classes: "registration",
            type: "text"
        });
        this.children.first_name = new (0, _input.Input)({
            name: "first_name",
            classes: "registration",
            type: "first_name"
        });
        this.children.second_name = new (0, _input.Input)({
            name: "second_name",
            classes: "registration",
            type: "text"
        });
        this.children.phone = new (0, _input.Input)({
            name: "phone",
            classes: "registration",
            type: "tel"
        });
        this.children.password = new (0, _input.Input)({
            name: "password",
            classes: "registration",
            type: "password"
        });
        this.children.passwordReplay = new (0, _input.Input)({
            name: "passwordRepeat",
            classes: "registration",
            type: "password"
        });
        this.children.button = new (0, _button.Button)({
            label: "Зарегистрироваться",
            classes: "registration",
            type: "submit"
        });
        this.children.link = new (0, _links.Links)({
            text: "Войти",
            classes: "registration",
            href: "/"
        });
    }
    render() {
        return this.compile((0, _registrationPugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Registration;
const onSubmitRegistration = (e)=>{
    e.preventDefault();
    const form = document.querySelector(".registration__form");
    const inputs = form?.querySelectorAll("input");
    if (inputs) for(let i = 0; i < inputs.length; i++){
        if (inputs[i].classList.contains("validation") || inputs[i].value === "") return;
    }
    if (form) {
        const formData = new FormData(form);
        const data = {
            email: formData.get("email"),
            login: formData.get("login"),
            first_name: formData.get("first_name"),
            second_name: formData.get("second_name"),
            phone: formData.get("phone"),
            password: formData.get("password")
        };
        (0, _authController.AuthentificationController).signup({
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        });
    }
};

},{"../../utils/Block":"915bj","../../blocks/libs/button/Button":"g9rfu","../../blocks/libs/input/Input":"eL84l","../../blocks/libs/links/Links":"e08wk","../../Controllers/AuthController":"cyuXP","./registration.pug":"cUF0C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUF0C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}
function pug_classes_array(r, a) {
    for(var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++)(s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), e = e + u + s, u = " ");
    return e;
}
function pug_classes_object(r) {
    var a = "", n = "";
    for(var o in r)o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, n = " ");
    return a;
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_has_own_property = Object.prototype.hasOwnProperty;
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(button1, classes1, email1, first_name1, link1, login1, password1, passwordReplay1, phone1, second_name1) {
        pug_html = pug_html + '<section class="registration"><div class="registration__wrapper"><h2' + pug_attr("class", pug_classes([
            `${classes1}__title`
        ], [
            true
        ]), false, false) + ">Регистрация</h2><form" + pug_attr("class", pug_classes([
            `${classes1}__form`
        ], [
            true
        ]), false, false) + "><div" + pug_attr("class", pug_classes([
            `${classes1}__inputs`
        ], [
            true
        ]), false, false) + "><" + email1 + "><" + login1 + "><" + first_name1 + "><" + second_name1 + "><" + phone1 + "><" + password1 + "><" + passwordReplay1 + "><div" + pug_attr("class", pug_classes([
            `${classes1}__buttons`
        ], [
            true
        ]), false, false) + "><" + button1 + "><" + link1 + "></" + link1 + "></" + button1 + "></div></" + passwordReplay1 + "></" + password1 + "></" + phone1 + "></" + second_name1 + "></" + first_name1 + "></" + login1 + "></" + email1 + "></div></form></div></section>";
    }).call(this, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "classes" in locals_for_with ? locals_for_with.classes : typeof classes !== "undefined" ? classes : undefined, "email" in locals_for_with ? locals_for_with.email : typeof email !== "undefined" ? email : undefined, "first_name" in locals_for_with ? locals_for_with.first_name : typeof first_name !== "undefined" ? first_name : undefined, "link" in locals_for_with ? locals_for_with.link : typeof link !== "undefined" ? link : undefined, "login" in locals_for_with ? locals_for_with.login : typeof login !== "undefined" ? login : undefined, "password" in locals_for_with ? locals_for_with.password : typeof password !== "undefined" ? password : undefined, "passwordReplay" in locals_for_with ? locals_for_with.passwordReplay : typeof passwordReplay !== "undefined" ? passwordReplay : undefined, "phone" in locals_for_with ? locals_for_with.phone : typeof phone !== "undefined" ? phone : undefined, "second_name" in locals_for_with ? locals_for_with.second_name : typeof second_name !== "undefined" ? second_name : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qvT0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _popup = require("../../pages/popup/Popup");
var _popupDefault = parcelHelpers.interopDefault(_popup);
var _route = require("./Route");
var _routeDefault = parcelHelpers.interopDefault(_route);
class Router {
    constructor(rootQuery){
        this.rootQuery = rootQuery;
        this.routes = [];
        this.currentRoute = null;
        this.history = window.history;
        if (Router.__instance) return Router.__instance;
        this.routes = [];
        Router.__instance = this;
    }
    use(pathname, block, props = {}) {
        const route = new (0, _routeDefault.default)(pathname, block, this.rootQuery, props);
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = (event)=>{
            const target = event.currentTarget;
            this._onRoute(target.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const checkPathname = this.routes.find((route)=>route.match(pathname));
        if (checkPathname) {
            const route = this.getRoute(pathname);
            route.forEach((route)=>{
                if (!route) return;
                if (this.currentRoute && this.currentRoute !== route) this.currentRoute.leave();
                this.currentRoute = route;
                const checkClass = route.blockClass;
                if (checkClass === (0, _popupDefault.default)) route.render("body");
                else route.render();
            });
        } else if (pathname === "/" || pathname === "/sign-up") this.go("/messenger");
        else this.go("/error404");
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        return this.routes.filter((route)=>route.match(pathname));
    }
}
exports.default = new Router("#app");

},{"../../pages/popup/Popup":"9HzUq","./Route":"9t3tY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9t3tY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _content = require("../../blocks/libs/profiles/content/Content");
var _chats = require("../../pages/chats/Chats");
var _chatsDefault = parcelHelpers.interopDefault(_chats);
var _popup = require("../../pages/popup/Popup");
var _popupDefault = parcelHelpers.interopDefault(_popup);
var _profile = require("../../pages/profile/Profile");
function isEqual(lhs, rhs) {
    return lhs === rhs;
}
function render(query, block) {
    const root = document.querySelector(query);
    if (root === null) throw new Error(`root not found by selector "${query}"`);
    if (block instanceof (0, _chatsDefault.default) && document.querySelector(".popup") || block instanceof (0, _profile.ProfilePage) && document.querySelector(".popup")) document.querySelector(".popup")?.remove();
    else if (!(block instanceof (0, _popupDefault.default))) {
        if (block instanceof (0, _profile.ProfilePage) && document.querySelector(".profile")) ;
        else if (block instanceof (0, _profile.ProfilePage)) {
            root.innerHTML = "";
            root.append(block.getContent());
        } else if (block instanceof (0, _content.ContentPage)) {
            document.querySelector(".profile__content")?.remove();
            root.append(block.getContent());
        } else {
            root.innerHTML = "";
            root.append(block.getContent());
        }
    } else root.append(block.getContent());
    return root;
}
class Route {
    constructor(pathname, blockClass, query, props){
        this.pathname = pathname;
        this.blockClass = blockClass;
        this.query = query;
        this.props = props;
        this.block = null;
    }
    leave() {
        this.block = null;
    }
    match(pathname) {
        return isEqual(pathname, this.pathname);
    }
    render(query = this.query) {
        if (!this.block) {
            this.block = new this.blockClass(this.props);
            render(query, this.block);
            return;
        }
    }
}
exports.default = Route;

},{"../../blocks/libs/profiles/content/Content":"fE5ug","../../pages/chats/Chats":"36rwK","../../pages/popup/Popup":"9HzUq","../../pages/profile/Profile":"fkSBz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gv8yC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _button = require("../../blocks/libs/button/Button");
var _error404Pug = require("./error404.pug");
var _error404PugDefault = parcelHelpers.interopDefault(_error404Pug);
class Error404 extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    init() {
        this.children.button = new (0, _button.Button)({
            label: "Назад",
            classes: "error404",
            events: {
                click: ()=>history.go(-2)
            }
        });
    }
    render() {
        return this.compile((0, _error404PugDefault.default), {
            ...this.props
        });
    }
}
exports.default = Error404;

},{"../../utils/Block":"915bj","../../blocks/libs/button/Button":"g9rfu","./error404.pug":"ijIzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijIzx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}
function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for(r = t.index, c = 0; r < a.length; r++){
        switch(a.charCodeAt(r)){
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(button1, images1) {
        pug_html = pug_html + '<section class="error404"><div class="error404__block"><div class="error404__text">УПС.... <div>Страница не найдена</div></div><' + button1 + "></" + button1 + '></div><div class="error404__img"><img' + pug_attr("src", `${images1}`, true, false) + "/></div></section>";
    }).call(this, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "images" in locals_for_with ? locals_for_with.images : typeof images !== "undefined" ? images : undefined);
    return pug_html;
}
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wxC8":[function(require,module,exports) {
module.exports = require("fb783bd27fcc0eff").getBundleURL("hKh4f") + "error.443fb73c.jpg" + "?" + Date.now();

},{"fb783bd27fcc0eff":"lgJ39"}]},["6oY9T","8tyFx"], "8tyFx", "parcelRequiread2e")

//# sourceMappingURL=index.891f0f0b.js.map
