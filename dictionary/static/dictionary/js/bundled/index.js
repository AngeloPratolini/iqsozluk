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
})({"iXoUH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "3c2b99c082dbaa39";
module.bundle.HMR_BUNDLE_ID = "49ae2638491d3e70";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
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
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hYGZz":[function(require,module,exports) {
var _autocomplete = require("./lib/autocomplete");
var _dropdown = require("./lib/dropdown");
var _modal = require("./lib/modal");
var _accessibility = require("./accessibility");
var _category = require("./category");
var _common = require("./common");
var _conversation = require("./conversation");
var _dialog = require("./dialog");
var _editor = require("./editor");
var _entry = require("./entry");
var _image = require("./image");
var _leftFrame = require("./left-frame");
var _mql = require("./mql");
var _search = require("./search");
var _topic = require("./topic");
var _user = require("./user");
var _utils = require("./utils");

},{"./lib/autocomplete":"1CvI5","./lib/dropdown":"lSHeG","./lib/modal":"9fh6g","./common":"5ps8S","./accessibility":"2o79S","./category":"2QGpq","./conversation":"cqojY","./editor":"chNVU","./entry":"4D1jM","./search":"jfIzP","./topic":"gseqk","./left-frame":"3yfAd","./dialog":"gxVme","./image":"1IB8k","./mql":"hAKy1","./user":"fRc8P","./utils":"1KXHS"}],"1CvI5":[function(require,module,exports) {
/* global gettext */ var _utils = require("../utils");
/**
 * autocomplete source:
 * (c) 2020 Şuayip Üzülmez
 * https://github.com/realsuayip/autocomplete
 * MIT
 */ function escapeRegExChars(value) {
    return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function formatResult(suggestion, value) {
    /**
     *  formatResult function source:
     *  Ajax Autocomplete for jQuery, version 1.4.11
     *  (c) 2017 Tomas Kirda
     *  https://github.com/devbridge/jQuery-Autocomplete
     *  MIT
     */ if (!value) return (0, _utils.notSafe)(suggestion);
    const pattern = "(" + escapeRegExChars(value) + ")";
    return (0, _utils.notSafe)(suggestion.replace(new RegExp(pattern, "gi"), "<mark>$1</mark>")).replace(/&lt;(\/?mark)&gt;/g, "<$1>");
}
class AutoComplete {
    suggest(name) {
        if (this.cache) {
            const isEmptyResult = this.emptyResults.filter((result)=>name.startsWith(Object.keys(result)[0])).length;
            if (isEmptyResult) {
                this.render([]);
                return;
            }
            const [items] = this.cachedResults.filter((result)=>result[name]);
            if (items) {
                this.render(items[name]);
                return;
            }
        }
        this.lookup(name).then((suggestions)=>{
            const items = suggestions.map((s)=>({
                    name: this.highlight ? formatResult(s.name, name) : (0, _utils.notSafe)(s.name),
                    value: (0, _utils.notSafe)(s.value)
                }));
            if (this.cache && name !== "@") {
                const resultSet = items.length ? this.cachedResults : this.emptyResults;
                resultSet.push({
                    [name]: items
                });
            }
            this.render(items);
        });
    }
    render(items) {
        if (!this.popper) this.popper = this.create();
        if (items.length) {
            this.template.innerHTML = "";
            for (const [index, item] of items.entries())this.template.innerHTML += `<li role="option" data-value="${item.value}" id="cb-opt-${index}">${item.name}</li>`;
        } else {
            if (this.silent) {
                this.destroy();
                return;
            }
            if (!this.template.querySelector(".no-results")) this.template.innerHTML = `<li role="alert" aria-live="assertive" class='no-results'>${this.noResultsMessage}</li>`;
        }
        this.showing = true;
        this.template.style.display = "block";
        this.input.setAttribute("aria-expanded", "true");
    }
    destroy() {
        if (this.popper) {
            this.input.setAttribute("aria-expanded", "false");
            this.template.style.display = "none";
            this.template.innerHTML = "";
            this.selected = null;
            this.showing = false;
            this.popper.destroy();
            this.popper = null;
        }
    }
    create() {
        return (0, _utils.createPopper)(this.input, this.template, {
            placement: "bottom-start"
        });
    }
    triggerOnSelect(selected) {
        if (selected.classList.contains("no-results")) return;
        this.destroy();
        this.input.value = selected.textContent;
        const value = selected.getAttribute("data-value");
        value && this.onSelect && this.onSelect(value);
    }
    constructor(options){
        this.input = options.input;
        this.lookup = options.lookup // Takes name, returns a Promise that resolves into a list of {name, value}s.
        ;
        this.onSelect = options.onSelect // Takes value.
        ;
        this.silent = options.silent === true // Set this to true to disable no suggestions notice.
        ;
        this.highlight = options.highlight // Set this true to enable highlighting
        ;
        this.noResultsMessage = options.noResultsMessage || gettext("-- no corresponding results --");
        this.cache = options.cache === true // Set this true to enable caching
        ;
        this.cachedResults = [];
        this.emptyResults = [];
        this.popper = null;
        this.selected = null;
        this.showing = false;
        const templateID = `id_${this.input.id}`;
        this.template = (0, _utils.template)(`<ul role="listbox" class="autocomplete" id="${templateID}"></ul>`);
        this.input.parentNode.append(this.template);
        this.input.setAttribute("autocomplete", "off");
        this.input.setAttribute("role", "combobox");
        this.input.setAttribute("aria-owns", templateID);
        this.input.setAttribute("aria-autocomplete", "list");
        this.input.setAttribute("aria-expanded", "false");
        this.input.addEventListener("input", ()=>{
            const name = this.input.value.toLocaleLowerCase((0, _utils.lang)).trim();
            this.selected = null;
            if (name) this.suggest(name);
            else if (this.showing) this.destroy();
        });
        this.input.addEventListener("focusout", ()=>{
            setTimeout(()=>{
                this.destroy();
            }, 200);
        });
        this.input.addEventListener("keydown", (event)=>{
            if (![
                "ArrowUp",
                "ArrowDown",
                "Escape",
                "Enter",
                "Tab"
            ].includes(event.key)) return;
            const changeSelected = [
                "ArrowUp",
                "ArrowDown"
            ].includes(event.key);
            // Remove selected class from previously selected item.
            changeSelected && this.selected && this.selected.classList.remove("selected", "mouseover");
            switch(event.key){
                case "ArrowUp":
                    {
                        const last = this.template.lastChild;
                        this.selected = this.selected ? this.selected.previousElementSibling || last : last;
                        if (!this.selected.classList.contains("no-results")) event.preventDefault() // Prevents cursor from moving to beginning of the input.
                        ;
                        break;
                    }
                case "ArrowDown":
                    {
                        const first = this.template.firstChild;
                        this.selected = this.selected ? this.selected.nextElementSibling || first : first;
                        break;
                    }
                case "Escape":
                    this.destroy();
                    break;
                case "Enter":
                    if (this.selected && !this.selected.classList.contains("mouseover")) {
                        event.preventDefault() // Prevents form submit.
                        ;
                        this.triggerOnSelect(this.selected);
                    }
                    break;
                case "Tab":
                    if (this.selected && !event.shiftKey) this.input.value = this.selected.textContent;
                    break;
            }
            if (changeSelected && this.selected && !this.selected.classList.contains("no-results")) {
                this.selected.classList.add("selected");
                this.input.value = this.selected.textContent;
                this.input.setAttribute("aria-activedescendant", this.selected.id);
            }
        });
        this.template.addEventListener("click", (event)=>{
            event.stopPropagation();
            this.triggerOnSelect(event.target.closest("li"));
        });
        this.template.addEventListener("mouseover", (event)=>{
            if (event.target.tagName === "LI" && !event.target.classList.contains("no-results")) {
                Array.from(this.template.childNodes).forEach((el)=>el !== event.target && el.classList.remove("selected", "mouseover"));
                this.selected = event.target;
                this.selected.classList.add("selected", "mouseover");
            }
        });
    }
}
// Initialize autocomplete inputs
const authorQuery = `query($lookup:String!){autocomplete{authors(lookup:$lookup){username}}}`;
function authorAt(name) {
    // name => @username
    return (0, _utils.gqlc)({
        query: authorQuery,
        variables: {
            lookup: name.substr(1)
        }
    }).then((response)=>{
        return response.data.autocomplete.authors.map((user)=>({
                name: `@${user.username}`,
                value: `@${user.username}`
            }));
    });
}
function fullLookup(name) {
    if (name.startsWith("@") && name.substr(1)) return authorAt(name);
    return (0, _utils.gqlc)({
        query: `query($lookup:String!){autocomplete{authors(lookup:$lookup,limit:3){username}topics(lookup:$lookup,limit:7){title}}}`,
        variables: {
            lookup: name
        }
    }).then((response)=>{
        const topicSuggestions = response.data.autocomplete.topics.map((topic)=>({
                name: topic.title,
                value: topic.title
            }));
        const authorSuggestions = response.data.autocomplete.authors.map((user)=>({
                name: `@${user.username}`,
                value: `@${user.username}`
            }));
        return topicSuggestions.concat(authorSuggestions);
    });
}
new AutoComplete({
    input: (0, _utils.one)("#header_search"),
    highlight: true,
    cache: true,
    lookup: fullLookup,
    onSelect (value) {
        window.location = "/topic/?q=" + encodeURIComponent(value);
    }
});
const inEditorSearch = (0, _utils.one)("#editor_input");
if (inEditorSearch) new AutoComplete({
    input: inEditorSearch,
    silent: true,
    highlight: true,
    cache: true,
    lookup: fullLookup
});
const inTopicSearch = (0, _utils.one)("#in_topic_search");
if (inTopicSearch) new AutoComplete({
    input: inTopicSearch,
    silent: true,
    highlight: true,
    cache: true,
    lookup (name) {
        if (name.startsWith("@") && name.substr(1)) return authorAt(name);
        return new Promise((resolve)=>resolve);
    },
    onSelect () {
        inTopicSearch.closest("form").submit();
    }
});
(0, _utils.many)(".author-search").forEach((input)=>{
    new AutoComplete({
        input,
        highlight: true,
        cache: true,
        lookup (name) {
            return (0, _utils.gqlc)({
                query: authorQuery,
                variables: {
                    lookup: name
                }
            }).then((response)=>{
                return response.data.autocomplete.authors.map((user)=>({
                        name: user.username,
                        value: user.username
                    }));
            });
        }
    });
});
const titleInput = (0, _utils.one)("#user_title_edit");
if (titleInput) new AutoComplete({
    input: titleInput,
    highlight: true,
    cache: true,
    lookup (name) {
        return (0, _utils.gqlc)({
            query: `query($lookup:String!){autocomplete{topics(lookup:$lookup,limit:7){title}}}`,
            variables: {
                lookup: name
            }
        }).then((response)=>response.data.autocomplete.topics.map((topic)=>({
                    name: topic.title,
                    value: topic.title
                })));
    }
});

},{"../utils":"1KXHS"}],"1KXHS":[function(require,module,exports) {
/* global gettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cookies", ()=>cookies);
parcelHelpers.export(exports, "many", ()=>many);
parcelHelpers.export(exports, "one", ()=>one);
parcelHelpers.export(exports, "notify", ()=>notify);
parcelHelpers.export(exports, "gqlc", ()=>gqlc);
parcelHelpers.export(exports, "notSafe", ()=>notSafe);
parcelHelpers.export(exports, "template", ()=>template);
parcelHelpers.export(exports, "Handle", ()=>Handle);
parcelHelpers.export(exports, "Handler", ()=>Handler);
parcelHelpers.export(exports, "sleep", ()=>sleep);
parcelHelpers.export(exports, "isValidText", ()=>isValidText);
parcelHelpers.export(exports, "updateQueryStringParameter", ()=>updateQueryStringParameter);
parcelHelpers.export(exports, "toggleText", ()=>toggleText);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "userIsAuthenticated", ()=>userIsAuthenticated);
parcelHelpers.export(exports, "lang", ()=>lang);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _popperLite = require("@popperjs/core/lib/popper-lite");
var _flip = require("@popperjs/core/lib/modifiers/flip");
var _flipDefault = parcelHelpers.interopDefault(_flip);
var _preventOverflow = require("@popperjs/core/lib/modifiers/preventOverflow");
var _preventOverflowDefault = parcelHelpers.interopDefault(_preventOverflow);
"use strict";
const createPopper = (0, _popperLite.popperGenerator)({
    defaultModifiers: [
        ...(0, _popperLite.defaultModifiers),
        (0, _flipDefault.default),
        (0, _preventOverflowDefault.default)
    ]
});
function isValidText(body) {
    return /^[A-Za-z0-9 ğçıöşüĞÇİÖŞÜ#&@()_+=':%/",.!?*~`[\]{}<>^;\\|-]+$/g.test(body.split(/[\r\n]+/).join());
}
function template(html) {
    // Create a node from string.
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
}
// https://stackoverflow.com/questions/5999118/how-can-i-add-or-update-a-query-string-parameter
function updateQueryStringParameter(uri, key, value) {
    const re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    const separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) return uri.replace(re, "$1" + key + "=" + value + "$2");
    else return uri + separator + key + "=" + value;
}
const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};
function notSafe(string) {
    return String(string).replace(/[&<>"']/g, function(s) {
        return entityMap[s];
    });
}
let toastQueue = 0;
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function notify(message, level = "default", initialDelay = 1800, persistent = false) {
    if (toastQueue > 5) return;
    const toastHolder = document.querySelector(".toast-holder");
    const delay = initialDelay + toastQueue * 1000;
    const toastTemplate = `
        <div role="alert" aria-live="assertive" aria-atomic="true" class="toast fade showing">
            <div class="toast-body ${level}">
                <div class="toast-content">
                    <span>${message}</span>
                    ${persistent ? `<button type="button" class="ml-2 close" data-dismiss="toast" aria-label="${gettext("Close")}"><span aria-hidden="true">&times;</span></button>` : ""}
                </div>
            </div>
        </div>`;
    const toast = template(toastTemplate);
    toastHolder.prepend(toast);
    if (persistent) toast.addEventListener("click", async (event)=>{
        if (event.target.closest("[data-dismiss=toast]")) {
            toast.classList.remove("show");
            await sleep(100);
            toast.remove();
        }
    });
    await sleep(50);
    toast.classList.add("show");
    if (!persistent) {
        toastQueue += 1;
        await sleep(delay);
        toast.classList.remove("show");
        toastQueue -= 1;
        await sleep(100);
        toast.remove();
    }
}
function gqlc(data, failSilently = false, failMessage = gettext("something went wrong")) {
    const headers = new Headers({
        "Content-Type": "application/json",
        "X-CSRFToken": (0, _jsCookieDefault.default).get("csrftoken")
    });
    const options = {
        method: "POST",
        headers,
        mode: "same-origin",
        body: JSON.stringify(data)
    };
    const errorHandler = ()=>{
        if (!failSilently) notify(failMessage, "error");
        return {
            errors: [
                failMessage
            ]
        };
    };
    return fetch("/graphql/", options).then((response)=>{
        if (response.ok) return response.json();
        return errorHandler();
    }).catch(()=>{
        return errorHandler();
    });
}
const cookies = (0, _jsCookieDefault.default).withConverter({
    read (value) {
        return decodeURIComponent(value);
    },
    write (value) {
        return encodeURIComponent(value);
    }
}).withAttributes({
    sameSite: "Lax"
});
// DOM
function toggleText(el, a, b) {
    el.textContent = el.textContent === b ? a : b;
}
const many = document.querySelectorAll.bind(document);
const one = document.querySelector.bind(document);
const isString = (obj)=>typeof obj === "string" || obj instanceof String;
function Handle(node, type, callback, ...args) {
    // Shortcut for node.addEventListener, that fail silently when node is non-existent.
    if (isString(node)) node = one(node);
    if (!node) return;
    node.addEventListener(type, callback, ...args);
}
function Handler(nodes, type, callback, ...args) {
    // Handle, but for multiple nodes.
    if (isString(nodes)) nodes = many(nodes);
    nodes.forEach((node)=>{
        node.addEventListener(type, callback, ...args);
    });
}
const userIsAuthenticated = one("body").id === "au";
const lang = document.documentElement.lang;

},{"js-cookie":"2aNDx","@popperjs/core/lib/popper-lite":"cElgf","@popperjs/core/lib/modifiers/flip":"cZtVx","@popperjs/core/lib/modifiers/preventOverflow":"hHE98","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"2aNDx":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === "undefined") return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === "number") attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = "";
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += "; " + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
            }
            return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === "undefined" || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split("=");
                var value = parts.slice(1).join("=");
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {}
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, "", assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        });
    }
    var api = init(defaultConverter, {
        path: "/"
    });
    /* eslint-enable no-var */ return api;
});

},{}],"cElgf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "defaultModifiers", ()=>defaultModifiers);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    (0, _eventListenersJsDefault.default),
    (0, _popperOffsetsJsDefault.default),
    (0, _computeStylesJsDefault.default),
    (0, _applyStylesJsDefault.default)
];
var createPopper = /*#__PURE__*/ (0, _createPopperJs.popperGenerator)({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"016qA","./modifiers/eventListeners.js":"9sIHC","./modifiers/popperOffsets.js":"dpVMz","./modifiers/computeStyles.js":"azQx2","./modifiers/applyStyles.js":"i2bzT","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"016qA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", ()=>popperGenerator);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _detectOverflowJsDefault.default));
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, _instanceOfJs.isElement)(reference) ? (0, _listScrollParentsJsDefault.default)(reference) : reference.contextElement ? (0, _listScrollParentsJsDefault.default)(reference.contextElement) : [],
                    popper: (0, _listScrollParentsJsDefault.default)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, _orderModifiersJsDefault.default)((0, _mergeByNameJsDefault.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = (0, _uniqueByJsDefault.default)([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                (0, _validateModifiersJsDefault.default)(modifiers);
                if ((0, _getBasePlacementJsDefault.default)(state.options.placement) === (0, _enumsJs.auto)) {
                    var flipModifier = state.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === "flip";
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        "present and enabled to work."
                    ].join(" "));
                }
                var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    "between the popper and its reference element or boundary.",
                    "To replicate margin, use the `offset` modifier, as well as",
                    "the `padding` option in the `preventOverflow` and `flip`",
                    "modifiers."
                ].join(" "));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, _getCompositeRectJsDefault.default)(reference, (0, _getOffsetParentJsDefault.default)(popper), state.options.strategy === "fixed"),
                    popper: (0, _getLayoutRectJsDefault.default)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _debounceJsDefault.default)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"3fFry","./dom-utils/getLayoutRect.js":"3ssFc","./dom-utils/listScrollParents.js":"1yUGl","./dom-utils/getOffsetParent.js":"kW1xN","./dom-utils/getComputedStyle.js":"92VFB","./utils/orderModifiers.js":"4NMvM","./utils/debounce.js":"4EmY0","./utils/validateModifiers.js":"6I08P","./utils/uniqueBy.js":"6S7wb","./utils/getBasePlacement.js":"dxLZ5","./utils/mergeByName.js":"dxX0v","./utils/detectOverflow.js":"ba84J","./dom-utils/instanceOf.js":"4g2Do","./enums.js":"55VFm","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"3fFry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, _mathJs.round)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, _mathJs.round)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, _instanceOfJs.isHTMLElement)(offsetParent);
    var offsetParentIsScaled = (0, _instanceOfJs.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, _getDocumentElementJsDefault.default)(offsetParent);
    var rect = (0, _getBoundingClientRectJsDefault.default)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _getNodeNameJsDefault.default)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, _isScrollParentJsDefault.default)(documentElement)) scroll = (0, _getNodeScrollJsDefault.default)(offsetParent);
        if ((0, _instanceOfJs.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRectJsDefault.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, _getWindowScrollBarXJsDefault.default)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"50HuQ","./getNodeScroll.js":"83QBo","./getNodeName.js":"5Rfq6","./instanceOf.js":"4g2Do","./getWindowScrollBarX.js":"gWOSH","./getDocumentElement.js":"jYg8D","./isScrollParent.js":"hW9jI","../utils/math.js":"8bm2r","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"50HuQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, _instanceOfJs.isHTMLElement)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, _mathJs.round)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, _mathJs.round)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, _instanceOfJs.isElement)(element) ? (0, _getWindowJsDefault.default)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, _isLayoutViewportJsDefault.default)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"4g2Do","../utils/math.js":"8bm2r","./getWindow.js":"hQDhN","./isLayoutViewport.js":"hqUU4","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"4g2Do":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, _getWindowJsDefault.default)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, _getWindowJsDefault.default)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"hQDhN","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"hQDhN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"6ZdKi":[function(require,module,exports) {
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

},{}],"8bm2r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "round", ()=>round);
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"hqUU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, _userAgentJsDefault.default)());
}
exports.default = isLayoutViewport;

},{"../utils/userAgent.js":"6VTyR","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"6VTyR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}
exports.default = getUAString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"83QBo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === (0, _getWindowJsDefault.default)(node) || !(0, _instanceOfJs.isHTMLElement)(node)) return (0, _getWindowScrollJsDefault.default)(node);
    else return (0, _getHTMLElementScrollJsDefault.default)(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"fQCsr","./getWindow.js":"hQDhN","./instanceOf.js":"4g2Do","./getHTMLElementScroll.js":"3Zzko","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"fQCsr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = (0, _getWindowJsDefault.default)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"hQDhN","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"3Zzko":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"5Rfq6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"gWOSH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, _getBoundingClientRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)).left + (0, _getWindowScrollJsDefault.default)(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"50HuQ","./getDocumentElement.js":"jYg8D","./getWindowScroll.js":"fQCsr","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"jYg8D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, _instanceOfJs.isElement)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"4g2Do","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"hW9jI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, _getComputedStyleJsDefault.default)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"92VFB","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"92VFB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return (0, _getWindowJsDefault.default)(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"hQDhN","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"3ssFc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = (0, _getBoundingClientRectJsDefault.default)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"50HuQ","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"1yUGl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, _getScrollParentJsDefault.default)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, _getWindowJsDefault.default)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, _isScrollParentJsDefault.default)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, _getParentNodeJsDefault.default)(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"ikveR","./getParentNode.js":"TOWKo","./getWindow.js":"hQDhN","./isScrollParent.js":"hW9jI","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"ikveR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, _getNodeNameJsDefault.default)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, _instanceOfJs.isHTMLElement)(node) && (0, _isScrollParentJsDefault.default)(node)) return node;
    return getScrollParent((0, _getParentNodeJsDefault.default)(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"TOWKo","./isScrollParent.js":"hW9jI","./getNodeName.js":"5Rfq6","./instanceOf.js":"4g2Do","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"TOWKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if ((0, _getNodeNameJsDefault.default)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, _instanceOfJs.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElementJsDefault.default)(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"5Rfq6","./getDocumentElement.js":"jYg8D","./instanceOf.js":"4g2Do","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"kW1xN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _userAgentJs = require("../utils/userAgent.js");
var _userAgentJsDefault = parcelHelpers.interopDefault(_userAgentJs);
function getTrueOffsetParent(element) {
    if (!(0, _instanceOfJs.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, _getComputedStyleJsDefault.default)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, _userAgentJsDefault.default)());
    var isIE = /Trident/i.test((0, _userAgentJsDefault.default)());
    if (isIE && (0, _instanceOfJs.isHTMLElement)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, _getComputedStyleJsDefault.default)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, _getParentNodeJsDefault.default)(element);
    if ((0, _instanceOfJs.isShadowRoot)(currentNode)) currentNode = currentNode.host;
    while((0, _instanceOfJs.isHTMLElement)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, _getNodeNameJsDefault.default)(currentNode)) < 0){
        var css = (0, _getComputedStyleJsDefault.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, _getWindowJsDefault.default)(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, _isTableElementJsDefault.default)(offsetParent) && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, _getNodeNameJsDefault.default)(offsetParent) === "html" || (0, _getNodeNameJsDefault.default)(offsetParent) === "body" && (0, _getComputedStyleJsDefault.default)(offsetParent).position === "static")) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"hQDhN","./getNodeName.js":"5Rfq6","./getComputedStyle.js":"92VFB","./instanceOf.js":"4g2Do","./isTableElement.js":"ibjCp","./getParentNode.js":"TOWKo","../utils/userAgent.js":"6VTyR","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"ibjCp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, _getNodeNameJsDefault.default)(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"5Rfq6","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"4NMvM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return (0, _enumsJs.modifierPhases).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"55VFm","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"55VFm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", ()=>top);
parcelHelpers.export(exports, "bottom", ()=>bottom);
parcelHelpers.export(exports, "right", ()=>right);
parcelHelpers.export(exports, "left", ()=>left);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "basePlacements", ()=>basePlacements);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "end", ()=>end);
parcelHelpers.export(exports, "clippingParents", ()=>clippingParents);
parcelHelpers.export(exports, "viewport", ()=>viewport);
parcelHelpers.export(exports, "popper", ()=>popper);
parcelHelpers.export(exports, "reference", ()=>reference);
parcelHelpers.export(exports, "variationPlacements", ()=>variationPlacements);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "beforeRead", ()=>beforeRead);
parcelHelpers.export(exports, "read", ()=>read);
parcelHelpers.export(exports, "afterRead", ()=>afterRead);
parcelHelpers.export(exports, "beforeMain", ()=>beforeMain);
parcelHelpers.export(exports, "main", ()=>main);
parcelHelpers.export(exports, "afterMain", ()=>afterMain);
parcelHelpers.export(exports, "beforeWrite", ()=>beforeWrite);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "afterWrite", ()=>afterWrite);
parcelHelpers.export(exports, "modifierPhases", ()=>modifierPhases);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead"; // pure-logic modifiers
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"4EmY0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"6I08P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    "name",
    "enabled",
    "phase",
    "fn",
    "effect",
    "requires",
    "options"
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case "name":
                    if (typeof modifier.name !== "string") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                    break;
                case "enabled":
                    if (typeof modifier.enabled !== "boolean") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                    break;
                case "phase":
                    if ((0, _enumsJs.modifierPhases).indexOf(modifier.phase) < 0) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + (0, _enumsJs.modifierPhases).join(", "), '"' + String(modifier.phase) + '"'));
                    break;
                case "fn":
                    if (typeof modifier.fn !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "effect":
                    if (modifier.effect != null && typeof modifier.effect !== "function") console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                    break;
                case "requires":
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                    break;
                case "requiresIfExists":
                    if (!Array.isArray(modifier.requiresIfExists)) console.error((0, _formatJsDefault.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                        return '"' + s + '"';
                    }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error((0, _formatJsDefault.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"5Vbsn","../enums.js":"55VFm","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"5Vbsn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"6S7wb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"dxLZ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"55VFm","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"dxX0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"ba84J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, _enumsJs.clippingParents) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, _enumsJs.viewport) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, _enumsJs.popper) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, _mergePaddingObjectJsDefault.default)(typeof padding !== "number" ? padding : (0, _expandToHashMapJsDefault.default)(padding, (0, _enumsJs.basePlacements)));
    var altContext = elementContext === (0, _enumsJs.popper) ? (0, _enumsJs.reference) : (0, _enumsJs.popper);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, _getClippingRectJsDefault.default)((0, _instanceOfJs.isElement)(element) ? element : element.contextElement || (0, _getDocumentElementJsDefault.default)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, _getBoundingClientRectJsDefault.default)(state.elements.reference);
    var popperOffsets = (0, _computeOffsetsJsDefault.default)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, _rectToClientRectJsDefault.default)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, _enumsJs.popper) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, _enumsJs.popper) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, _enumsJs.right),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, _enumsJs.top),
                (0, _enumsJs.bottom)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"aseSY","../dom-utils/getDocumentElement.js":"jYg8D","../dom-utils/getBoundingClientRect.js":"50HuQ","./computeOffsets.js":"6E0i4","./rectToClientRect.js":"5vtyy","../enums.js":"55VFm","../dom-utils/instanceOf.js":"4g2Do","./mergePaddingObject.js":"67ckZ","./expandToHashMap.js":"b1knZ","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"aseSY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, _getBoundingClientRectJsDefault.default)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, _enumsJs.viewport) ? (0, _rectToClientRectJsDefault.default)((0, _getViewportRectJsDefault.default)(element, strategy)) : (0, _instanceOfJs.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, _rectToClientRectJsDefault.default)((0, _getDocumentRectJsDefault.default)((0, _getDocumentElementJsDefault.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, _listScrollParentsJsDefault.default)((0, _getParentNodeJsDefault.default)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, _getComputedStyleJsDefault.default)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, _instanceOfJs.isHTMLElement)(element) ? (0, _getOffsetParentJsDefault.default)(element) : element;
    if (!(0, _instanceOfJs.isElement)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, _instanceOfJs.isElement)(clippingParent) && (0, _containsJsDefault.default)(clippingParent, clipperElement) && (0, _getNodeNameJsDefault.default)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, _mathJs.max)(rect.top, accRect.top);
        accRect.right = (0, _mathJs.min)(rect.right, accRect.right);
        accRect.bottom = (0, _mathJs.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _mathJs.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"55VFm","./getViewportRect.js":"4rdxv","./getDocumentRect.js":"3UWPl","./listScrollParents.js":"1yUGl","./getOffsetParent.js":"kW1xN","./getDocumentElement.js":"jYg8D","./getComputedStyle.js":"92VFB","./instanceOf.js":"4g2Do","./getBoundingClientRect.js":"50HuQ","./getParentNode.js":"TOWKo","./contains.js":"kSIHh","./getNodeName.js":"5Rfq6","../utils/rectToClientRect.js":"5vtyy","../utils/math.js":"8bm2r","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"4rdxv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _isLayoutViewportJs = require("./isLayoutViewport.js");
var _isLayoutViewportJsDefault = parcelHelpers.interopDefault(_isLayoutViewportJs);
function getViewportRect(element, strategy) {
    var win = (0, _getWindowJsDefault.default)(element);
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, _isLayoutViewportJsDefault.default)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, _getWindowScrollBarXJsDefault.default)(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"hQDhN","./getDocumentElement.js":"jYg8D","./getWindowScrollBarX.js":"gWOSH","./isLayoutViewport.js":"hqUU4","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"3UWPl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, _getDocumentElementJsDefault.default)(element);
    var winScroll = (0, _getWindowScrollJsDefault.default)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, _mathJs.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, _mathJs.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, _getWindowScrollBarXJsDefault.default)(element);
    var y = -winScroll.scrollTop;
    if ((0, _getComputedStyleJsDefault.default)(body || html).direction === "rtl") x += (0, _mathJs.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"jYg8D","./getComputedStyle.js":"92VFB","./getWindowScrollBarX.js":"gWOSH","./getWindowScroll.js":"fQCsr","../utils/math.js":"8bm2r","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"kSIHh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, _instanceOfJs.isShadowRoot)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"4g2Do","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"5vtyy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"6E0i4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, _getBasePlacementJsDefault.default)(placement) : null;
    var variation = placement ? (0, _getVariationJsDefault.default)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"dxLZ5","./getVariation.js":"asgzW","./getMainAxisFromPlacement.js":"5PZod","../enums.js":"55VFm","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"asgzW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split("-")[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"5PZod":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"67ckZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, _getFreshSideObjectJsDefault.default)(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"lz8A5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"lz8A5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"b1knZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"9sIHC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, _getWindowJsDefault.default)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: effect,
    data: {}
};

},{"../dom-utils/getWindow.js":"hQDhN","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"dpVMz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, _computeOffsetsJsDefault.default)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

},{"../utils/computeOffsets.js":"6E0i4","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"azQx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", ()=>mapToStyles);
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, _mathJs.round)(x * dpr) / dpr || 0,
        y: (0, _mathJs.round)(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, _enumsJs.left);
    var sideY = (0, _enumsJs.top);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, _getOffsetParentJsDefault.default)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, _getWindowJsDefault.default)(popper)) {
            offsetParent = (0, _getDocumentElementJsDefault.default)(popper);
            if ((0, _getComputedStyleJsDefault.default)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, _enumsJs.top) || (placement === (0, _enumsJs.left) || placement === (0, _enumsJs.right)) && variation === (0, _enumsJs.end)) {
            sideY = (0, _enumsJs.bottom);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, _enumsJs.left) || (placement === (0, _enumsJs.top) || placement === (0, _enumsJs.bottom)) && variation === (0, _enumsJs.end)) {
            sideX = (0, _enumsJs.right);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = (0, _getComputedStyleJsDefault.default)(state.elements.popper).transitionProperty || "";
    if (adaptive && [
        "transform",
        "top",
        "right",
        "bottom",
        "left"
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        "Popper: Detected CSS transitions on at least one of the following",
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        "\n\n",
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        "for smooth transitions, or remove these properties from the CSS",
        "transition declaration on the popper element if only transitioning",
        "opacity or background-color for example.",
        "\n\n",
        "We recommend using the popper element as a wrapper around an inner",
        "element that can have any CSS property transitioned for animations."
    ].join(" "));
    var commonStyles = {
        placement: (0, _getBasePlacementJsDefault.default)(state.placement),
        variation: (0, _getVariationJsDefault.default)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

},{"../enums.js":"55VFm","../dom-utils/getOffsetParent.js":"kW1xN","../dom-utils/getWindow.js":"hQDhN","../dom-utils/getDocumentElement.js":"jYg8D","../dom-utils/getComputedStyle.js":"92VFB","../utils/getBasePlacement.js":"dxLZ5","../utils/getVariation.js":"asgzW","../utils/math.js":"8bm2r","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"i2bzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, _instanceOfJs.isHTMLElement)(element) || !(0, _getNodeNameJsDefault.default)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect,
    requires: [
        "computeStyles"
    ]
};

},{"../dom-utils/getNodeName.js":"5Rfq6","../dom-utils/instanceOf.js":"4g2Do","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"cZtVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if ((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto)) return [];
    var oppositePlacement = (0, _getOppositePlacementJsDefault.default)(placement);
    return [
        (0, _getOppositeVariationPlacementJsDefault.default)(placement),
        oppositePlacement,
        (0, _getOppositeVariationPlacementJsDefault.default)(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, _getBasePlacementJsDefault.default)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, _getOppositePlacementJsDefault.default)(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, _getBasePlacementJsDefault.default)(placement) === (0, _enumsJs.auto) ? (0, _computeAutoPlacementJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, _getBasePlacementJsDefault.default)(placement);
        var isStartVariation = (0, _getVariationJsDefault.default)(placement) === (0, _enumsJs.start);
        var isVertical = [
            (0, _enumsJs.top),
            (0, _enumsJs.bottom)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, _enumsJs.right) : (0, _enumsJs.left) : isStartVariation ? (0, _enumsJs.bottom) : (0, _enumsJs.top);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var altVariationSide = (0, _getOppositePlacementJsDefault.default)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"107CI","../utils/getBasePlacement.js":"dxLZ5","../utils/getOppositeVariationPlacement.js":"i4ji6","../utils/detectOverflow.js":"ba84J","../utils/computeAutoPlacement.js":"j3sYg","../enums.js":"55VFm","../utils/getVariation.js":"asgzW","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"107CI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"i4ji6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"j3sYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, _enumsJs.placements) : _options$allowedAutoP;
    var variation = (0, _getVariationJsDefault.default)(placement);
    var placements = variation ? flipVariations ? (0, _enumsJs.variationPlacements) : (0, _enumsJs.variationPlacements).filter(function(placement) {
        return (0, _getVariationJsDefault.default)(placement) === variation;
    }) : (0, _enumsJs.basePlacements);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" "));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, _detectOverflowJsDefault.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, _getBasePlacementJsDefault.default)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"asgzW","../enums.js":"55VFm","./detectOverflow.js":"ba84J","./getBasePlacement.js":"dxLZ5","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"hHE98":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, _detectOverflowJsDefault.default)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, _getBasePlacementJsDefault.default)(state.placement);
    var variation = (0, _getVariationJsDefault.default)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, _getMainAxisFromPlacementJsDefault.default)(basePlacement);
    var altAxis = (0, _getAltAxisJsDefault.default)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var altSide = mainAxis === "y" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, _enumsJs.start) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, _enumsJs.start) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, _getLayoutRectJsDefault.default)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, _getFreshSideObjectJsDefault.default)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, _withinJs.within)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParentJsDefault.default)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, _withinJs.within)(tether ? (0, _mathJs.min)(min, tetherMin) : min, offset, tether ? (0, _mathJs.max)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, _enumsJs.top) : (0, _enumsJs.left);
        var _altSide = mainAxis === "x" ? (0, _enumsJs.bottom) : (0, _enumsJs.right);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, _enumsJs.top),
            (0, _enumsJs.left)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, _withinJs.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0, _withinJs.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};

},{"../enums.js":"55VFm","../utils/getBasePlacement.js":"dxLZ5","../utils/getMainAxisFromPlacement.js":"5PZod","../utils/getAltAxis.js":"kRnQL","../utils/within.js":"gFkKx","../dom-utils/getLayoutRect.js":"3ssFc","../dom-utils/getOffsetParent.js":"kW1xN","../utils/detectOverflow.js":"ba84J","../utils/getVariation.js":"asgzW","../utils/getFreshSideObject.js":"lz8A5","../utils/math.js":"8bm2r","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"kRnQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"gFkKx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", ()=>within);
parcelHelpers.export(exports, "withinMaxClamp", ()=>withinMaxClamp);
var _mathJs = require("./math.js");
function within(min, value, max) {
    return (0, _mathJs.max)(min, (0, _mathJs.min)(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"8bm2r","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"lSHeG":[function(require,module,exports) {
var _utils = require("../utils");
const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
function getNextFocusableElement(element) {
    if (!element.nextElementSibling) return null;
    if (element.nextElementSibling.matches(focusableSelector)) return element.nextElementSibling;
    return getNextFocusableElement(element.nextElementSibling);
}
function getPreviousFocusableElement(element) {
    if (!element.previousElementSibling) return null;
    if (element.previousElementSibling.matches(focusableSelector)) return element.previousElementSibling;
    return getPreviousFocusableElement(element.previousElementSibling);
}
let liveDropdown = null;
class Dropdown {
    create() {
        const placement = this.menuElement.getAttribute("data-orientation") || "bottom-end";
        liveDropdown && liveDropdown.destroy();
        liveDropdown = this;
        return (0, _utils.createPopper)(this.button, this.menuElement, {
            placement,
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [
                            0,
                            1
                        ]
                    }
                }
            ]
        });
    }
    async toggle() {
        // To make dynamic dropdowns work (e.g., entry actions)
        // Normally, we should use popper.update() but in Chrome/Edge the layout shift
        // is preserved in (fixed) header for some reason?
        await (0, _utils.sleep)(0);
        if (this.menuElement.style.display === "block") {
            this.destroy();
            return;
        }
        if (!this.popper) this.popper = this.create();
        this.menuElement.style.display = "block";
        this.button.setAttribute("aria-expanded", "true");
    }
    destroy() {
        this.menuElement.style.display = "none";
        this.button.setAttribute("aria-expanded", "false");
        if (this.popper) {
            this.popper.destroy();
            this.popper = null;
            liveDropdown = null;
        }
    }
    constructor(button){
        this.button = button;
        this.menuElement = button.parentNode.querySelector(".dropdown-menu");
        this.popper = null;
        this.menuElement.addEventListener("keydown", (event)=>{
            if (![
                "ArrowUp",
                "ArrowDown"
            ].includes(event.key) || this.menuElement.classList.contains("no-arrows")) return;
            event.preventDefault();
            switch(event.key){
                case "ArrowDown":
                    {
                        const next = getNextFocusableElement(event.target);
                        if (next) next.focus();
                        else // Return focus to top
                        this.menuElement.querySelector(focusableSelector).focus();
                        break;
                    }
                case "ArrowUp":
                    {
                        const previous = getPreviousFocusableElement(event.target);
                        if (previous) previous.focus();
                        else {
                            // Return focus to bottom
                            const items = this.menuElement.querySelectorAll(focusableSelector);
                            items[items.length - 1].focus();
                        }
                        break;
                    }
            }
        });
    }
}
(0, _utils.Handler)("[data-toggle=dropdown]", "click", function() {
    if (!this._dropdownInstance) this._dropdownInstance = new Dropdown(this);
    this._dropdownInstance.toggle();
});
(0, _utils.Handler)("[data-toggle=dropdown]", "keydown", function(event) {
    if (event.key === "ArrowDown") {
        // Focus to the first focusable element if the dropdown is already open.
        event.preventDefault();
        if (this._dropdownInstance && this._dropdownInstance.popper) {
            const firstFocusableElement = this._dropdownInstance.menuElement.querySelector(focusableSelector);
            firstFocusableElement && firstFocusableElement.focus();
            return;
        }
        // Show dropdown menu when users use arrow down while focusing on button.
        this.dispatchEvent(new Event("click"));
    }
});
let lastClickedElement;
(0, _utils.Handle)(document, "mousedown", (event)=>{
    lastClickedElement = event.target;
});
(0, _utils.Handle)(document, "mouseup", ()=>{
    lastClickedElement = null;
});
(0, _utils.Handler)("[data-toggle=dropdown]", "blur", function(event) {
    // Dropdown BUTTON lost focus, destroy the dropdown if the newly focused (or clicked) element is not a child of the menu.
    const dropdown = this._dropdownInstance;
    if (!dropdown) return;
    const clickBlur = lastClickedElement && lastClickedElement.closest(".dropdown-menu") === dropdown.menuElement;
    const focusBlur = event.relatedTarget && event.relatedTarget.closest(".dropdown-menu") === dropdown.menuElement;
    if (focusBlur || clickBlur) return;
    dropdown.destroy();
});
(0, _utils.Handle)(document, "focusin", (event)=>{
    // Dropdown MENU ELEMENT lost focus.
    if (event.target.matches("[data-toggle=dropdown]")) return;
    if (liveDropdown && !event.target.closest(".dropdown-menu")) liveDropdown.destroy();
});
(0, _utils.Handle)(document, "keydown", (event)=>{
    if (event.key === "Escape") {
        if (liveDropdown) liveDropdown.destroy();
        else {
            const modal = (0, _utils.one)(".modal.show");
            if (modal) modal._modalInstance.hide();
        }
    }
});
(0, _utils.Handle)(document, "click", (event)=>{
    const dropdown = liveDropdown;
    if (dropdown) {
        const collapse = dropdown.menuElement.classList.contains("no-collapse") && dropdown.menuElement === event.target.closest(".dropdown-menu");
        if (event.target.classList.contains("dropdown-close") || dropdown.button !== event.target.closest("[data-toggle=dropdown]") && !collapse) dropdown.destroy();
    }
});

},{"../utils":"1KXHS"}],"9fh6g":[function(require,module,exports) {
var _utils = require("../utils");
class Modal {
    show(returnTo) {
        this.returnTo = returnTo;
        this.showing = true;
        this.modal.removeAttribute("aria-hidden");
        this.modal.classList.add("showing");
        this.modal.style.display = "block";
        setTimeout(()=>{
            this.modal.classList.add("show");
            this.lead.focus();
        }, 0);
    }
    hide() {
        if (!this.showing) return false;
        const _modal = this.modal;
        _modal.classList.remove("show");
        new Promise((resolve)=>{
            _modal.addEventListener("transitionend", function _transitionend(event) {
                if (event.target === _modal) resolve(_transitionend);
            });
        }).then((_transitionend)=>{
            _modal.removeEventListener("transitionend", _transitionend);
            _modal.style.display = "none";
            _modal.classList.remove("showing");
            _modal.setAttribute("aria-hidden", "true");
            this.returnTo && this.returnTo.focus();
        });
    }
    constructor(modal){
        this.modal = modal;
        this.showing = false;
        this.lead = modal.querySelector(".lead");
        modal.addEventListener("click", (event)=>{
            if (!event.target.closest(".modal-content") || event.target.closest("[data-dismiss=modal]")) this.hide();
        });
        // https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = modal.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
        modal.addEventListener("keydown", (event)=>{
            if (event.key !== "Tab") return;
            if (event.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            } else if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                event.preventDefault();
            }
        });
    }
}
(0, _utils.many)(".modal[role=dialog]").forEach((modal)=>{
    modal._modalInstance = new Modal(modal);
});

},{"../utils":"1KXHS"}],"5ps8S":[function(require,module,exports) {
var _utils = require("./utils");
var _mql = require("./mql");
(0, _utils.Handle)("body", "change", (event)=>{
    if (event.target.matches("select.page-selector")) window.location = (0, _utils.updateQueryStringParameter)(location.href, "page", event.target.value);
});
(0, _utils.Handle)("body", (0, _mql.isTouchDevice) ? "touchstart" : "focusin", (event)=>{
    // Load pages for paginator select
    const select = event.target;
    if (select.matches("select.page-selector") && !select.hasAttribute("data-loaded")) {
        const max = parseInt(select.getAttribute("data-max"), 10);
        const current = parseInt(select.value, 10);
        select.firstElementChild.remove();
        for(let i = 1; i <= max; i++){
            const option = (0, _utils.template)(`<option ${i === current ? "selected" : ""}>${i}</option>`);
            select.append(option);
        }
        select.setAttribute("data-loaded", "");
    }
});
(0, _utils.Handle)("form.search_mobile, form.reporting-form", "submit", function() {
    Array.from(this.querySelectorAll("input")).filter((input)=>{
        if (input.type === "checkbox" && !input.checked) return true;
        return input.value === "";
    }).forEach((input)=>{
        input.disabled = true;
    });
    return false;
});
(0, _utils.Handler)("[data-toggle=collapse]", "click", function() {
    this.closest("div").parentNode.querySelector(".collapse").classList.toggle("show");
    if (this.getAttribute("aria-expanded") === "false") this.setAttribute("aria-expanded", "true");
    else this.setAttribute("aria-expanded", "false");
});

},{"./utils":"1KXHS","./mql":"hAKy1"}],"hAKy1":[function(require,module,exports) {
/* global gettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userIsMobile", ()=>userIsMobile);
parcelHelpers.export(exports, "isTouchDevice", ()=>isTouchDevice);
var _utils = require("./utils");
const isTouchDevice = matchMedia("(hover: none)").matches;
let userIsMobile = false;
let lastScrollTop = 0;
let hasScrollTopButton = false;
const scrollTopButton = (0, _utils.template)(`<a role="button" tabindex="0" class="bg-light rounded border-0 w-100 p-2 d-none scrolltop text-center" style="display: block">${gettext("scroll to top")}</a>`);
(0, _utils.Handle)(scrollTopButton, "click", function() {
    window.scrollTo(0, 0);
    this.classList.add("d-none");
});
function hideRedundantHeader() {
    const delta = 30;
    let st = window.pageYOffset;
    const header = (0, _utils.one)("header.page_header");
    const sub = (0, _utils.one)(".sub-nav");
    if (st < 0) st = 0 // Reset negative offset (iOS Safari)
    ;
    if (st > 0) scrollTopButton.classList.remove("d-none");
    if (Math.abs(lastScrollTop - st) <= delta) return;
    const reset = ()=>{
        sub.style.marginTop = "0";
        header.style.top = "0";
    };
    if (st > lastScrollTop) {
        // Down scroll code
        sub.style.marginTop = ".75em";
        header.style.top = "-55px";
        header.addEventListener("mouseover", reset, {
            once: true
        });
    } else reset();
    lastScrollTop = st;
}
const mql = window.matchMedia("(max-width: 810px)");
const swhRender = (verbose)=>{
    (0, _utils.many)("a[data-sup]").forEach((sup)=>{
        if (verbose) sup.innerHTML = `<sup>${(0, _utils.notSafe)(sup.getAttribute("data-sup"))}</sup>`;
        else sup.innerHTML = `*`;
    });
};
function desktopView() {
    userIsMobile = false;
    // Find left frame scroll position.
    if (parseInt(localStorage.getItem("where"), 10) > 0) (0, _utils.one)("#left-frame-nav").scroll(0, localStorage.getItem("where"));
    // Restore header.
    window.removeEventListener("scroll", hideRedundantHeader);
    (0, _utils.one)(".sub-nav").style.marginTop = "0";
    (0, _utils.one)("header.page_header").style.top = "0";
    // Code to render swh references properly (reverse) if not touch device (tablet)
    if (isTouchDevice) swhRender(true);
    else swhRender(false);
    if (hasScrollTopButton) {
        scrollTopButton.remove();
        hasScrollTopButton = false;
    }
}
function mobileView() {
    userIsMobile = true;
    // Code to hide some part of the header on mobile scroll.
    window.addEventListener("scroll", hideRedundantHeader);
    // Code to render swh references properly
    swhRender(true);
    if (!hasScrollTopButton) {
        const footer = (0, _utils.one)("footer.body-footer");
        footer.parentNode.insertBefore(scrollTopButton, footer);
        hasScrollTopButton = true;
    }
}
function mqlsw(mql) {
    // check mql & switch
    if (mql.matches) mobileView();
    else desktopView();
}
// Safari doesn't support mql.addEventListener yet, so we have
// to use deprecated addListener.
mql.addListener(mqlsw);
document.addEventListener("DOMContentLoaded", ()=>{
    // DOM ready.
    mqlsw(mql);
    // Handles notifications passed by django's message framework.
    const requestMessages = (0, _utils.one)("#request-messages");
    if (requestMessages.getAttribute("data-has-messages") === "true") {
        let delay = 2000;
        requestMessages.childNodes.forEach((message)=>{
            const isPersistent = message.getAttribute("data-extra").includes("persistent");
            (0, _utils.notify)(message.getAttribute("data-message"), message.getAttribute("data-level"), delay, isPersistent);
            delay += 1000;
        });
    }
});
// Theme
const themeExpires = 90;
function setTheme(theme) {
    const body = (0, _utils.one)("body");
    const icon = (0, _utils.one)("[data-toggle=theme]").querySelector("use");
    const entries = document.querySelectorAll(".girdi");
    body.style.transition = "background-color .5s ease";
    if (theme === "dark") {
        body.classList.add("dark");
        icon.setAttribute("href", "#sun");
        entries.forEach((entry)=>{
            if (entry.classList.value.includes("sorulu")) {
                entry.classList.remove("sorulu");
                entry.classList.add("soruluDARK"); //"#2B2B2B" //32835E
            } else if (entry.classList.value.includes("unlemli")) {
                entry.classList.remove("unlemli");
                entry.classList.add("unlemliDARK");
            }
        });
    } else {
        body.classList.remove("dark");
        icon.setAttribute("href", "#moon");
        entries.forEach((entry)=>{
            if (entry.classList.value.includes("sorulu")) {
                entry.classList.remove("soruluDARK");
                entry.classList.add("sorulu"); //"#2B2B2B" //32835E
            } else if (entry.classList.value.includes("unlemli")) {
                entry.classList.remove("unlemliDARK");
                entry.classList.add("unlemli");
            }
        });
    }
}
(0, _utils.Handle)("[data-toggle=theme]", "click", function() {
    if (0, _utils.userIsAuthenticated) (0, _utils.gqlc)({
        query: "mutation{user{toggleTheme{theme}}}"
    }).then((response)=>{
        setTheme(response.data.user.toggleTheme.theme);
    });
    else if ((0, _utils.cookies).get("theme") === "dark") {
        (0, _utils.cookies).set("theme", "light", {
            expires: themeExpires
        });
        setTheme("light");
    } else {
        (0, _utils.cookies).set("theme", "dark", {
            expires: themeExpires
        });
        setTheme("dark");
    }
});
if (!(0, _utils.userIsAuthenticated) && !(0, _utils.cookies).get("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    (0, _utils.cookies).set("theme", "dark", {
        expires: themeExpires
    });
    setTheme("dark");
}

},{"./utils":"1KXHS","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"2o79S":[function(require,module,exports) {
/* global gettext */ var _utils = require("./utils");
(0, _utils.Handle)("body", "keypress", (event)=>{
    if (event.target.matches("[role=button], .key-clickable") && (event.key === " " || event.key === "Enter")) {
        event.preventDefault();
        event.target.dispatchEvent(new Event("click", {
            bubbles: true
        }));
    }
});
(0, _utils.Handle)(".content-skipper", "click", function() {
    location.replace(this.getAttribute("data-href"));
});
(0, _utils.Handler)("input.is-invalid", "input", function() {
    this.classList.remove("is-invalid");
});
(0, _utils.Handler)("textarea.expandable", "focus", function() {
    this.style.height = `${this.offsetHeight + 150}px`;
    (0, _utils.Handle)(this, "transitionend", ()=>{
        this.style.transition = "none";
    });
}, {
    once: true
});
const irregularCharMap = {
    "“": `"`,
    "”": `"`,
    "‘": `'`,
    "’": `'`,
    "ˆ": `^` // eslint-disable-line
};
function normalizeChars(string) {
    return String(string).replace(/[\u201C\u201D\u2018\u2019\u02C6]/g, function(s) {
        return irregularCharMap[s];
    });
}
(0, _utils.Handler)("textarea#user_content_edit, textarea#message-body", "input", function() {
    window.onbeforeunload = ()=>this.value || null;
    this.value = normalizeChars(this.value);
});
(0, _utils.Handler)("textarea.normalize", "input", function() {
    this.value = normalizeChars(this.value);
});
(0, _utils.Handler)("form", "submit", function(event) {
    window.onbeforeunload = null;
    if (this.id === "header_search_form" && !new FormData(this).get("q").trim()) {
        event.preventDefault();
        window.location = "/threads/search/";
    }
    const userInput = this.querySelector("#user_content_edit");
    if (userInput && userInput.value) {
        if (!(0, _utils.isValidText)(userInput.value)) {
            (0, _utils.notify)(gettext("bu i\xe7erik uygun olmayan karakterler i\xe7eriyor."), "error");
            window.onbeforeunload = ()=>true;
            event.preventDefault();
            return false;
        }
    }
});

},{"./utils":"1KXHS"}],"2QGpq":[function(require,module,exports) {
/* global pgettext */ var _utils = require("./utils");
function categoryAction(type, pk) {
    return (0, _utils.gqlc)({
        query: `mutation{category{${type}(pk:"${pk}"){feedback}}}`
    });
}
(0, _utils.Handler)("button.follow-category-trigger", "click", function() {
    categoryAction("follow", this.getAttribute("data-category-id")).then(()=>{
        (0, _utils.toggleText)(this, pgettext("category-list", "unfollow"), pgettext("category-list", "follow"));
        this.classList.toggle("faded");
    });
});

},{"./utils":"1KXHS"}],"cqojY":[function(require,module,exports) {
/* global gettext */ var _utils = require("./utils");
(0, _utils.Handle)("a#message_history_show", "click", function() {
    (0, _utils.many)("ul#message_list li.bubble").forEach((item)=>{
        item.style.display = "list-item";
    });
    this.classList.add("dj-hidden");
});
(0, _utils.Handle)("a[role=button].chat-reverse", "click", ()=>{
    (0, _utils.many)("input.chat-selector").forEach((input)=>{
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change"));
    });
});
(0, _utils.Handler)("input.chat-selector", "change", function() {
    this.closest("li.chat").classList.toggle("selected");
});
function getPkSet(selected) {
    const pkSet = [];
    selected.forEach((el)=>{
        pkSet.push(el.getAttribute("data-id"));
    });
    return pkSet;
}
function selectChat(init) {
    // inbox.html || conversation.html
    let chat = init.closest("li.chat");
    if (!chat) chat = init.parentNode;
    return chat;
}
function deleteConversation(pkSet, mode) {
    const query = `mutation($pkSet:[ID!]!, $mode:String){message{deleteConversation(pkSet:$pkSet,mode:$mode){redirect}}}`;
    const variables = {
        pkSet,
        mode
    };
    return (0, _utils.gqlc)({
        query,
        variables
    });
}
// Delete (archives and active conversations)
(0, _utils.Handler)("a[role=button].chat-delete-individual", "click", function() {
    if (!confirm(gettext("silmek istediğine emin misin?"))) return false;
    const chat = selectChat(this);
    const mode = ((0, _utils.one)("ul.threads") || chat).getAttribute("data-mode");
    deleteConversation(chat.getAttribute("data-id"), mode).then((response)=>{
        const data = response.data.message.deleteConversation;
        if (data) {
            if ((0, _utils.many)("li.chat").length > 1) {
                chat.remove();
                (0, _utils.notify)(gettext("silinmiş konuşma"));
            } else window.location = data.redirect;
        }
    });
});
(0, _utils.Handle)("a[role=button].chat-delete", "click", ()=>{
    const selected = (0, _utils.many)("li.chat.selected");
    if (selected.length) {
        if (!confirm(gettext("se\xe7ilen konuşmaların hepsini silmek istediğine emin misin?"))) return false;
        deleteConversation(getPkSet(selected), (0, _utils.one)("ul.threads").getAttribute("data-mode")).then((response)=>{
            const data = response.data.message.deleteConversation;
            if (data) window.location = data.redirect;
        });
    } else (0, _utils.notify)(gettext("silmek i\xe7in en az 1 konuşma se\xe7ilmeli"), "error");
});
// Archiving
function archiveConversation(pkSet) {
    const query = `mutation($pkSet:[ID!]!){message{archiveConversation(pkSet:$pkSet){redirect}}}`;
    const variables = {
        pkSet
    };
    return (0, _utils.gqlc)({
        query,
        variables
    });
}
(0, _utils.Handle)("a[role=button].chat-archive", "click", ()=>{
    const selected = (0, _utils.many)("li.chat.selected");
    if (selected.length) {
        if (!confirm(gettext("se\xe7ilen konuşmaların hepsi arşivlensin mi?"))) return false;
        archiveConversation(getPkSet(selected)).then((response)=>{
            const data = response.data.message.archiveConversation;
            if (data) window.location = data.redirect;
        });
    } else (0, _utils.notify)(gettext("arşivlemek i\xe7in ene az 1 konuşma se\xe7ilmeli"), "error");
});
(0, _utils.Handler)("a[role=button].chat-archive-individual", "click", function() {
    if (!confirm(gettext("arşivlemek istediğine emin misin?"))) return false;
    const chat = selectChat(this);
    archiveConversation(chat.getAttribute("data-id")).then((response)=>{
        const data = response.data.message.archiveConversation;
        if (data) {
            if ((0, _utils.many)("li.chat").length > 1) {
                chat.remove();
                (0, _utils.notify)(gettext("arşivlenmiş konuşma"));
            } else window.location = data.redirect;
        }
    });
});
// Individual message deleting
(0, _utils.many)("#message_list time[data-id]").forEach((el)=>{
    el.parentNode.append((0, _utils.template)(`<div data-orientation="bottom" class="dropdown-menu"><a role="button" tabindex="0" class="dropdown-item">${gettext("delete")}</a></div>`));
});
(0, _utils.Handler)("#message_list .dropdown-menu", "click", function(event) {
    if (event.target.classList.contains("dropdown-item") && confirm(gettext("Are you sure?"))) {
        const pk = this.parentNode.querySelector("time[data-id]").getAttribute("data-id");
        (0, _utils.gqlc)({
            variables: {
                pk
            },
            query: "mutation($pk:ID!){message{delete(pk:$pk){immediate}}}"
        }).then((response)=>{
            if (response.errors) return;
            this.closest("li.bubble").remove();
            if (!document.querySelector("li.bubble")) {
                window.location = location // Refresh the page if no messages left.
                ;
                return;
            }
            if (response.data.message.delete.immediate === "true") (0, _utils.notify)(gettext("g\xf6r\xfclmemiş olduğunu umuyoruz."), "info");
        });
    }
});

},{"./utils":"1KXHS"}],"chNVU":[function(require,module,exports) {
/* global gettext, pgettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _utils = require("./utils");
var _image = require("./image");
var _dropzone = require("dropzone");
var _dropzoneDefault = parcelHelpers.interopDefault(_dropzone);
function insertAtCaret(el, insertValue) {
    const startPos = el.selectionStart;
    if (startPos) {
        const endPos = el.selectionEnd;
        const scrollTop = el.scrollTop;
        el.value = el.value.substring(0, startPos) + insertValue + el.value.substring(endPos, el.value.length);
        el.focus();
        el.selectionStart = startPos + insertValue.length;
        el.selectionEnd = startPos + insertValue.length;
        el.scrollTop = scrollTop;
    } else {
        el.value += insertValue;
        el.focus();
    }
}
function insertMeta(type) {
    let fmt;
    switch(type){
        case "ref":
            fmt = [
                gettext("referans verilecek başlık, #girdi veya @yazar:"),
                (text)=>`(${pgettext("editor", "see")}: ${text})`
            ];
            break;
        case "thingy":
            fmt = [
                gettext("hangi başlık veya #entry i\xe7in hede oluşturulacak?"),
                (text)=>`\`${text}\``
            ];
            break;
        case "swh":
            fmt = [
                gettext("yıldız i\xe7inde ne g\xf6r\xfcns\xfcn?"),
                (text)=>`\`:${text}\``
            ];
            break;
        case "spoiler":
            {
                const spoiler = gettext("spoiler");
                fmt = [
                    gettext("spoiler arasına ne yazılacak?"),
                    (text)=>`--\`${spoiler}\`--\n${text}\n--\`${spoiler}\`--`
                ];
                break;
            }
    }
    return {
        label: fmt[0],
        format: fmt[1]
    };
}
function replaceText(textarea, type) {
    const start = textarea.selectionStart;
    const finish = textarea.selectionEnd;
    const allText = textarea.value;
    const sel = allText.substring(start, finish);
    if (!sel) return false;
    else {
        if (type === "link") {
            const linkText = prompt(gettext("hangi adrese gidecek?"), "http://");
            if (linkText && linkText !== "http://") textarea.value = allText.substring(0, start) + `[${linkText} ${sel}]` + allText.substring(finish, allText.length);
        } else textarea.value = allText.substring(0, start) + insertMeta(type).format(sel) + allText.substring(finish, allText.length);
        textarea.focus();
        return true;
    }
}
let meta;
let label;
const doneButton = (0, _utils.one)("#editor_done");
const input = (0, _utils.one)("#editor_input");
const modal = (0, _utils.one)("#editorModal");
if (modal) label = modal.querySelector("label");
const userContent = (0, _utils.one)("#user_content_edit");
const dropzone = (0, _utils.one)(".dropzone");
(0, _utils.Handle)("button#insert_image", "click", ()=>{
    dropzone.style.display = dropzone.style.display === "none" ? "" : "none";
});
(0, _utils.Handle)("button#insert_link", "click", ()=>{
    if (!replaceText(userContent, "link")) {
        const linkText = prompt(gettext("verilecek linkin adı ne olacak?"), "http://");
        if (linkText && linkText !== "http://") {
            const linkName = prompt(gettext("verilecek linkin adı ne olacak?"));
            const text = linkName ? `[${linkText} ${linkName}]` : linkText;
            insertAtCaret(userContent, text);
        }
    }
});
(0, _utils.Handle)(doneButton, "click", ()=>{
    input.value.trim() && insertAtCaret(userContent, meta.format(input.value.trim()));
});
(0, _utils.Handle)(input, "keydown", (event)=>{
    event.key === "Enter" && doneButton.dispatchEvent(new Event("click", {
        bubbles: true
    }));
});
(0, _utils.Handler)("button.insert", "click", function() {
    const type = this.getAttribute("data-type");
    if (!replaceText(userContent, type)) {
        meta = insertMeta(type);
        label.textContent = meta.label;
        input.value = "";
        modal._modalInstance.show(null);
    }
});
(0, _dropzoneDefault.default).options.userImageUpload = {
    addRemoveLinks: true,
    paramName: "file",
    maxFilesize: 2.5,
    acceptedFiles: "image/*",
    maxFiles: 10,
    dictRemoveFileConfirmation: gettext("emin misiniz?"),
    dictDefaultMessage: gettext("buraya tıklayıp g\xf6rselleri se\xe7in veya s\xfcr\xfckleyip bırakın"),
    dictRemoveFile: gettext("g\xf6rseli sil"),
    dictFileTooBig: gettext("Dosya \xe7ok b\xfcy\xfck ({{filesize}}MB). Maksimum boyut: {{maxFilesize}}MB."),
    dictMaxFilesExceeded: gettext("Daha fazla dosya y\xfckleyemezsiniz."),
    dictUploadCanceled: gettext("y\xfckleme iptal edildi."),
    dictCancelUploadConfirmation: gettext("Emin misiniz?"),
    success (file, response) {
        insertAtCaret(userContent, `(${pgettext("editor", "g\xf6rsel")}: ${response.slug})`);
    },
    removedfile (file) {
        file.previewElement.remove();
        const slug = JSON.parse(file.xhr.response).slug;
        userContent.value = userContent.value.replace(new RegExp(`\\(${pgettext("editor", "g\xf6rsel")}: ${slug}\\)`, "g"), "");
        (0, _image.deleteImage)(slug);
    }
};

},{"./utils":"1KXHS","./image":"1IB8k","dropzone":"duEoC","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"1IB8k":[function(require,module,exports) {
/* global gettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteImage", ()=>deleteImage);
var _utils = require("./utils");
const showImageErrorMessage = ()=>{
    (0, _utils.notify)(gettext("image could not be displayed. it might have been deleted."), "error", 2200);
};
(0, _utils.Handle)(document, "click", (event)=>{
    const self = event.target;
    if (self.matches(".entry a[data-img], .text-formatted a[data-img]")) {
        if (self.hasAttribute("data-broken")) {
            showImageErrorMessage();
            return;
        }
        if (!self.hasAttribute("data-loaded")) {
            const p = self.parentNode;
            p.style.maxHeight = "none" // Click "read more" button.
            ;
            const readMore = p.querySelector(".read_more");
            if (readMore) readMore.style.display = "none";
            const url = self.getAttribute("data-img");
            const image = (0, _utils.template)(`<img src="${url}" alt="${gettext("image")}" class="img-thumbnail img-fluid" draggable="false">`);
            const expander = (0, _utils.template)(`<a rel="ugc nofollow noopener" title="${gettext("open full image in new tab")}" href="${url}" target="_blank" class="ml-3 position-relative" style="top: 2px;"></a>`);
            image.onerror = ()=>{
                showImageErrorMessage();
                image.style.display = "none";
                expander.style.display = "none";
                self.setAttribute("data-broken", "true");
            };
            self.after(expander);
            expander.after(image);
            self.setAttribute("aria-expanded", "true");
        } else {
            self.nextElementSibling.classList.toggle("d-none");
            self.nextElementSibling.nextElementSibling.classList.toggle("d-none");
            if (self.getAttribute("aria-expanded") === "true") self.setAttribute("aria-expanded", "false");
            else self.setAttribute("aria-expanded", "true");
        }
        self.setAttribute("data-loaded", "true");
    }
});
function deleteImage(slug) {
    return (0, _utils.gqlc)({
        query: "mutation($slug:String!){image{delete(slug:$slug){feedback}}}",
        variables: {
            slug
        }
    });
}
(0, _utils.Handler)("a[role=button].delete-image", "click", function() {
    if (confirm(gettext("Are you sure?"))) {
        const img = this.closest(".image-detail");
        deleteImage(img.getAttribute("data-slug"));
        img.remove();
    }
});

},{"./utils":"1KXHS","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"duEoC":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    var a, i;
    module.exports = factory();
})(self, function() {
    return /******/ function() {
        /******/ var __webpack_modules__ = {
            /***/ 3099: /***/ function(module1) {
                module1.exports = function(it) {
                    if (typeof it != "function") throw TypeError(String(it) + " is not a function");
                    return it;
                };
            /***/ },
            /***/ 6077: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var isObject = __webpack_require__(111);
                module1.exports = function(it) {
                    if (!isObject(it) && it !== null) throw TypeError("Can't set " + String(it) + " as a prototype");
                    return it;
                };
            /***/ },
            /***/ 1223: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var wellKnownSymbol = __webpack_require__(5112);
                var create = __webpack_require__(30);
                var definePropertyModule = __webpack_require__(3070);
                var UNSCOPABLES = wellKnownSymbol("unscopables");
                var ArrayPrototype = Array.prototype;
                // Array.prototype[@@unscopables]
                // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
                if (ArrayPrototype[UNSCOPABLES] == undefined) definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
                    configurable: true,
                    value: create(null)
                });
                // add a key to Array.prototype[@@unscopables]
                module1.exports = function(key) {
                    ArrayPrototype[UNSCOPABLES][key] = true;
                };
            /***/ },
            /***/ 1530: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var charAt = __webpack_require__(8710).charAt;
                // `AdvanceStringIndex` abstract operation
                // https://tc39.es/ecma262/#sec-advancestringindex
                module1.exports = function(S, index, unicode) {
                    return index + (unicode ? charAt(S, index).length : 1);
                };
            /***/ },
            /***/ 5787: /***/ function(module1) {
                module1.exports = function(it, Constructor, name) {
                    if (!(it instanceof Constructor)) throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
                    return it;
                };
            /***/ },
            /***/ 9670: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var isObject = __webpack_require__(111);
                module1.exports = function(it) {
                    if (!isObject(it)) throw TypeError(String(it) + " is not an object");
                    return it;
                };
            /***/ },
            /***/ 4019: /***/ function(module1) {
                module1.exports = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined";
            /***/ },
            /***/ 260: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var NATIVE_ARRAY_BUFFER = __webpack_require__(4019);
                var DESCRIPTORS = __webpack_require__(9781);
                var global = __webpack_require__(7854);
                var isObject = __webpack_require__(111);
                var has = __webpack_require__(6656);
                var classof = __webpack_require__(648);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var redefine = __webpack_require__(1320);
                var defineProperty = __webpack_require__(3070).f;
                var getPrototypeOf = __webpack_require__(9518);
                var setPrototypeOf = __webpack_require__(7674);
                var wellKnownSymbol = __webpack_require__(5112);
                var uid = __webpack_require__(9711);
                var Int8Array1 = global.Int8Array;
                var Int8ArrayPrototype = Int8Array1 && Int8Array1.prototype;
                var Uint8ClampedArray = global.Uint8ClampedArray;
                var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
                var TypedArray = Int8Array1 && getPrototypeOf(Int8Array1);
                var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
                var ObjectPrototype = Object.prototype;
                var isPrototypeOf = ObjectPrototype.isPrototypeOf;
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
                // Fixing native typed arrays in Opera Presto crashes the browser, see #595
                var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== "Opera";
                var TYPED_ARRAY_TAG_REQIRED = false;
                var NAME;
                var TypedArrayConstructorsList = {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                };
                var BigIntArrayConstructorsList = {
                    BigInt64Array: 8,
                    BigUint64Array: 8
                };
                var isView = function isView(it) {
                    if (!isObject(it)) return false;
                    var klass = classof(it);
                    return klass === "DataView" || has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
                };
                var isTypedArray = function(it) {
                    if (!isObject(it)) return false;
                    var klass = classof(it);
                    return has(TypedArrayConstructorsList, klass) || has(BigIntArrayConstructorsList, klass);
                };
                var aTypedArray = function(it) {
                    if (isTypedArray(it)) return it;
                    throw TypeError("Target is not a typed array");
                };
                var aTypedArrayConstructor = function(C) {
                    if (setPrototypeOf) {
                        if (isPrototypeOf.call(TypedArray, C)) return C;
                    } else for(var ARRAY in TypedArrayConstructorsList)if (has(TypedArrayConstructorsList, NAME)) {
                        var TypedArrayConstructor = global[ARRAY];
                        if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) return C;
                    }
                    throw TypeError("Target is not a typed array constructor");
                };
                var exportTypedArrayMethod = function(KEY, property, forced) {
                    if (!DESCRIPTORS) return;
                    if (forced) for(var ARRAY in TypedArrayConstructorsList){
                        var TypedArrayConstructor = global[ARRAY];
                        if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) delete TypedArrayConstructor.prototype[KEY];
                    }
                    if (!TypedArrayPrototype[KEY] || forced) redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
                };
                var exportTypedArrayStaticMethod = function(KEY, property, forced) {
                    var ARRAY, TypedArrayConstructor;
                    if (!DESCRIPTORS) return;
                    if (setPrototypeOf) {
                        if (forced) for(ARRAY in TypedArrayConstructorsList){
                            TypedArrayConstructor = global[ARRAY];
                            if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) delete TypedArrayConstructor[KEY];
                        }
                        if (!TypedArray[KEY] || forced) // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
                        try {
                            return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array1[KEY] || property);
                        } catch (error) {}
                        else return;
                    }
                    for(ARRAY in TypedArrayConstructorsList){
                        TypedArrayConstructor = global[ARRAY];
                        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) redefine(TypedArrayConstructor, KEY, property);
                    }
                };
                for(NAME in TypedArrayConstructorsList)if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
                // WebKit bug - typed arrays constructors prototype is Object.prototype
                if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != "function" || TypedArray === Function.prototype) {
                    // eslint-disable-next-line no-shadow -- safe
                    TypedArray = function TypedArray() {
                        throw TypeError("Incorrect invocation");
                    };
                    if (NATIVE_ARRAY_BUFFER_VIEWS) {
                        for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
                    }
                }
                if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
                    TypedArrayPrototype = TypedArray.prototype;
                    if (NATIVE_ARRAY_BUFFER_VIEWS) {
                        for(NAME in TypedArrayConstructorsList)if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
                    }
                }
                // WebKit bug - one more object in Uint8ClampedArray prototype chain
                if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
                if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
                    TYPED_ARRAY_TAG_REQIRED = true;
                    defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
                        get: function() {
                            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
                        }
                    });
                    for(NAME in TypedArrayConstructorsList)if (global[NAME]) createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
                }
                module1.exports = {
                    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
                    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
                    aTypedArray: aTypedArray,
                    aTypedArrayConstructor: aTypedArrayConstructor,
                    exportTypedArrayMethod: exportTypedArrayMethod,
                    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
                    isView: isView,
                    isTypedArray: isTypedArray,
                    TypedArray: TypedArray,
                    TypedArrayPrototype: TypedArrayPrototype
                };
            /***/ },
            /***/ 3331: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var global = __webpack_require__(7854);
                var DESCRIPTORS = __webpack_require__(9781);
                var NATIVE_ARRAY_BUFFER = __webpack_require__(4019);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var redefineAll = __webpack_require__(2248);
                var fails = __webpack_require__(7293);
                var anInstance = __webpack_require__(5787);
                var toInteger = __webpack_require__(9958);
                var toLength = __webpack_require__(7466);
                var toIndex = __webpack_require__(7067);
                var IEEE754 = __webpack_require__(1179);
                var getPrototypeOf = __webpack_require__(9518);
                var setPrototypeOf = __webpack_require__(7674);
                var getOwnPropertyNames = __webpack_require__(8006).f;
                var defineProperty = __webpack_require__(3070).f;
                var arrayFill = __webpack_require__(1285);
                var setToStringTag = __webpack_require__(8003);
                var InternalStateModule = __webpack_require__(9909);
                var getInternalState = InternalStateModule.get;
                var setInternalState = InternalStateModule.set;
                var ARRAY_BUFFER = "ArrayBuffer";
                var DATA_VIEW = "DataView";
                var PROTOTYPE = "prototype";
                var WRONG_LENGTH = "Wrong length";
                var WRONG_INDEX = "Wrong index";
                var NativeArrayBuffer = global[ARRAY_BUFFER];
                var $ArrayBuffer = NativeArrayBuffer;
                var $DataView = global[DATA_VIEW];
                var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
                var ObjectPrototype = Object.prototype;
                var RangeError1 = global.RangeError;
                var packIEEE754 = IEEE754.pack;
                var unpackIEEE754 = IEEE754.unpack;
                var packInt8 = function(number) {
                    return [
                        number & 0xFF
                    ];
                };
                var packInt16 = function(number) {
                    return [
                        number & 0xFF,
                        number >> 8 & 0xFF
                    ];
                };
                var packInt32 = function(number) {
                    return [
                        number & 0xFF,
                        number >> 8 & 0xFF,
                        number >> 16 & 0xFF,
                        number >> 24 & 0xFF
                    ];
                };
                var unpackInt32 = function(buffer) {
                    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
                };
                var packFloat32 = function(number) {
                    return packIEEE754(number, 23, 4);
                };
                var packFloat64 = function(number) {
                    return packIEEE754(number, 52, 8);
                };
                var addGetter = function(Constructor, key) {
                    defineProperty(Constructor[PROTOTYPE], key, {
                        get: function() {
                            return getInternalState(this)[key];
                        }
                    });
                };
                var get = function(view, count, index, isLittleEndian) {
                    var intIndex = toIndex(index);
                    var store = getInternalState(view);
                    if (intIndex + count > store.byteLength) throw RangeError1(WRONG_INDEX);
                    var bytes = getInternalState(store.buffer).bytes;
                    var start = intIndex + store.byteOffset;
                    var pack = bytes.slice(start, start + count);
                    return isLittleEndian ? pack : pack.reverse();
                };
                var set = function(view, count, index, conversion, value, isLittleEndian) {
                    var intIndex = toIndex(index);
                    var store = getInternalState(view);
                    if (intIndex + count > store.byteLength) throw RangeError1(WRONG_INDEX);
                    var bytes = getInternalState(store.buffer).bytes;
                    var start = intIndex + store.byteOffset;
                    var pack = conversion(+value);
                    for(var i = 0; i < count; i++)bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
                };
                if (!NATIVE_ARRAY_BUFFER) {
                    $ArrayBuffer = function ArrayBuffer1(length) {
                        anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                        var byteLength = toIndex(length);
                        setInternalState(this, {
                            bytes: arrayFill.call(new Array(byteLength), 0),
                            byteLength: byteLength
                        });
                        if (!DESCRIPTORS) this.byteLength = byteLength;
                    };
                    $DataView = function DataView1(buffer, byteOffset, byteLength) {
                        anInstance(this, $DataView, DATA_VIEW);
                        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                        var bufferLength = getInternalState(buffer).byteLength;
                        var offset = toInteger(byteOffset);
                        if (offset < 0 || offset > bufferLength) throw RangeError1("Wrong offset");
                        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
                        if (offset + byteLength > bufferLength) throw RangeError1(WRONG_LENGTH);
                        setInternalState(this, {
                            buffer: buffer,
                            byteLength: byteLength,
                            byteOffset: offset
                        });
                        if (!DESCRIPTORS) {
                            this.buffer = buffer;
                            this.byteLength = byteLength;
                            this.byteOffset = offset;
                        }
                    };
                    if (DESCRIPTORS) {
                        addGetter($ArrayBuffer, "byteLength");
                        addGetter($DataView, "buffer");
                        addGetter($DataView, "byteLength");
                        addGetter($DataView, "byteOffset");
                    }
                    redefineAll($DataView[PROTOTYPE], {
                        getInt8: function getInt8(byteOffset) {
                            return get(this, 1, byteOffset)[0] << 24 >> 24;
                        },
                        getUint8: function getUint8(byteOffset) {
                            return get(this, 1, byteOffset)[0];
                        },
                        getInt16: function getInt16(byteOffset /* , littleEndian */ ) {
                            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
                            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                        },
                        getUint16: function getUint16(byteOffset /* , littleEndian */ ) {
                            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
                            return bytes[1] << 8 | bytes[0];
                        },
                        getInt32: function getInt32(byteOffset /* , littleEndian */ ) {
                            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
                        },
                        getUint32: function getUint32(byteOffset /* , littleEndian */ ) {
                            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
                        },
                        getFloat32: function getFloat32(byteOffset /* , littleEndian */ ) {
                            return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
                        },
                        getFloat64: function getFloat64(byteOffset /* , littleEndian */ ) {
                            return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
                        },
                        setInt8: function setInt8(byteOffset, value) {
                            set(this, 1, byteOffset, packInt8, value);
                        },
                        setUint8: function setUint8(byteOffset, value) {
                            set(this, 1, byteOffset, packInt8, value);
                        },
                        setInt16: function setInt16(byteOffset, value /* , littleEndian */ ) {
                            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
                        },
                        setUint16: function setUint16(byteOffset, value /* , littleEndian */ ) {
                            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
                        },
                        setInt32: function setInt32(byteOffset, value /* , littleEndian */ ) {
                            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
                        },
                        setUint32: function setUint32(byteOffset, value /* , littleEndian */ ) {
                            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
                        },
                        setFloat32: function setFloat32(byteOffset, value /* , littleEndian */ ) {
                            set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
                        },
                        setFloat64: function setFloat64(byteOffset, value /* , littleEndian */ ) {
                            set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
                        }
                    });
                } else {
                    /* eslint-disable no-new -- required for testing */ if (!fails(function() {
                        NativeArrayBuffer(1);
                    }) || !fails(function() {
                        new NativeArrayBuffer(-1);
                    }) || fails(function() {
                        new NativeArrayBuffer();
                        new NativeArrayBuffer(1.5);
                        new NativeArrayBuffer(NaN);
                        return NativeArrayBuffer.name != ARRAY_BUFFER;
                    })) {
                        /* eslint-enable no-new -- required for testing */ $ArrayBuffer = function ArrayBuffer1(length) {
                            anInstance(this, $ArrayBuffer);
                            return new NativeArrayBuffer(toIndex(length));
                        };
                        var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
                        for(var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;)if (!((key = keys[j++]) in $ArrayBuffer)) createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
                        ArrayBufferPrototype.constructor = $ArrayBuffer;
                    }
                    // WebKit bug - the same parent prototype for typed arrays and data view
                    if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) setPrototypeOf($DataViewPrototype, ObjectPrototype);
                    // iOS Safari 7.x bug
                    var testView = new $DataView(new $ArrayBuffer(2));
                    var nativeSetInt8 = $DataViewPrototype.setInt8;
                    testView.setInt8(0, 2147483648);
                    testView.setInt8(1, 2147483649);
                    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
                        setInt8: function setInt8(byteOffset, value) {
                            nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
                        },
                        setUint8: function setUint8(byteOffset, value) {
                            nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
                        }
                    }, {
                        unsafe: true
                    });
                }
                setToStringTag($ArrayBuffer, ARRAY_BUFFER);
                setToStringTag($DataView, DATA_VIEW);
                module1.exports = {
                    ArrayBuffer: $ArrayBuffer,
                    DataView: $DataView
                };
            /***/ },
            /***/ 1048: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var toObject = __webpack_require__(7908);
                var toAbsoluteIndex = __webpack_require__(1400);
                var toLength = __webpack_require__(7466);
                var min = Math.min;
                // `Array.prototype.copyWithin` method implementation
                // https://tc39.es/ecma262/#sec-array.prototype.copywithin
                module1.exports = [].copyWithin || function copyWithin(target /* = 0 */ , start /* = 0, end = @length */ ) {
                    var O = toObject(this);
                    var len = toLength(O.length);
                    var to = toAbsoluteIndex(target, len);
                    var from = toAbsoluteIndex(start, len);
                    var end = arguments.length > 2 ? arguments[2] : undefined;
                    var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
                    var inc = 1;
                    if (from < to && to < from + count) {
                        inc = -1;
                        from += count - 1;
                        to += count - 1;
                    }
                    while(count-- > 0){
                        if (from in O) O[to] = O[from];
                        else delete O[to];
                        to += inc;
                        from += inc;
                    }
                    return O;
                };
            /***/ },
            /***/ 1285: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var toObject = __webpack_require__(7908);
                var toAbsoluteIndex = __webpack_require__(1400);
                var toLength = __webpack_require__(7466);
                // `Array.prototype.fill` method implementation
                // https://tc39.es/ecma262/#sec-array.prototype.fill
                module1.exports = function fill(value /* , start = 0, end = @length */ ) {
                    var O = toObject(this);
                    var length = toLength(O.length);
                    var argumentsLength = arguments.length;
                    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
                    var end = argumentsLength > 2 ? arguments[2] : undefined;
                    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
                    while(endPos > index)O[index++] = value;
                    return O;
                };
            /***/ },
            /***/ 8533: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $forEach = __webpack_require__(2092).forEach;
                var arrayMethodIsStrict = __webpack_require__(9341);
                var STRICT_METHOD = arrayMethodIsStrict("forEach");
                // `Array.prototype.forEach` method implementation
                // https://tc39.es/ecma262/#sec-array.prototype.foreach
                module1.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */ ) {
                    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                } : [].forEach;
            /***/ },
            /***/ 8457: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var bind = __webpack_require__(9974);
                var toObject = __webpack_require__(7908);
                var callWithSafeIterationClosing = __webpack_require__(3411);
                var isArrayIteratorMethod = __webpack_require__(7659);
                var toLength = __webpack_require__(7466);
                var createProperty = __webpack_require__(6135);
                var getIteratorMethod = __webpack_require__(1246);
                // `Array.from` method implementation
                // https://tc39.es/ecma262/#sec-array.from
                module1.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                    var O = toObject(arrayLike);
                    var C = typeof this == "function" ? this : Array;
                    var argumentsLength = arguments.length;
                    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                    var mapping = mapfn !== undefined;
                    var iteratorMethod = getIteratorMethod(O);
                    var index = 0;
                    var length, result, step, iterator, next, value;
                    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
                    // if the target is not iterable or it's an array with the default iterator - use a simple case
                    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                        iterator = iteratorMethod.call(O);
                        next = iterator.next;
                        result = new C();
                        for(; !(step = next.call(iterator)).done; index++){
                            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                                step.value,
                                index
                            ], true) : step.value;
                            createProperty(result, index, value);
                        }
                    } else {
                        length = toLength(O.length);
                        result = new C(length);
                        for(; length > index; index++){
                            value = mapping ? mapfn(O[index], index) : O[index];
                            createProperty(result, index, value);
                        }
                    }
                    result.length = index;
                    return result;
                };
            /***/ },
            /***/ 1318: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toIndexedObject = __webpack_require__(5656);
                var toLength = __webpack_require__(7466);
                var toAbsoluteIndex = __webpack_require__(1400);
                // `Array.prototype.{ indexOf, includes }` methods implementation
                var createMethod = function(IS_INCLUDES) {
                    return function($this, el, fromIndex) {
                        var O = toIndexedObject($this);
                        var length = toLength(O.length);
                        var index = toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare -- NaN check
                        if (IS_INCLUDES && el != el) while(length > index){
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare -- NaN check
                            if (value != value) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                        }
                        else for(; length > index; index++){
                            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                        }
                        return !IS_INCLUDES && -1;
                    };
                };
                module1.exports = {
                    // `Array.prototype.includes` method
                    // https://tc39.es/ecma262/#sec-array.prototype.includes
                    includes: createMethod(true),
                    // `Array.prototype.indexOf` method
                    // https://tc39.es/ecma262/#sec-array.prototype.indexof
                    indexOf: createMethod(false)
                };
            /***/ },
            /***/ 2092: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var bind = __webpack_require__(9974);
                var IndexedObject = __webpack_require__(8361);
                var toObject = __webpack_require__(7908);
                var toLength = __webpack_require__(7466);
                var arraySpeciesCreate = __webpack_require__(5417);
                var push = [].push;
                // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
                var createMethod = function(TYPE) {
                    var IS_MAP = TYPE == 1;
                    var IS_FILTER = TYPE == 2;
                    var IS_SOME = TYPE == 3;
                    var IS_EVERY = TYPE == 4;
                    var IS_FIND_INDEX = TYPE == 6;
                    var IS_FILTER_OUT = TYPE == 7;
                    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                    return function($this, callbackfn, that, specificCreate) {
                        var O = toObject($this);
                        var self1 = IndexedObject(O);
                        var boundFunction = bind(callbackfn, that, 3);
                        var length = toLength(self1.length);
                        var index = 0;
                        var create = specificCreate || arraySpeciesCreate;
                        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
                        var value, result;
                        for(; length > index; index++)if (NO_HOLES || index in self1) {
                            value = self1[index];
                            result = boundFunction(value, index, O);
                            if (TYPE) {
                                if (IS_MAP) target[index] = result; // map
                                else if (result) switch(TYPE){
                                    case 3:
                                        return true; // some
                                    case 5:
                                        return value; // find
                                    case 6:
                                        return index; // findIndex
                                    case 2:
                                        push.call(target, value); // filter
                                }
                                else switch(TYPE){
                                    case 4:
                                        return false; // every
                                    case 7:
                                        push.call(target, value); // filterOut
                                }
                            }
                        }
                        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
                    };
                };
                module1.exports = {
                    // `Array.prototype.forEach` method
                    // https://tc39.es/ecma262/#sec-array.prototype.foreach
                    forEach: createMethod(0),
                    // `Array.prototype.map` method
                    // https://tc39.es/ecma262/#sec-array.prototype.map
                    map: createMethod(1),
                    // `Array.prototype.filter` method
                    // https://tc39.es/ecma262/#sec-array.prototype.filter
                    filter: createMethod(2),
                    // `Array.prototype.some` method
                    // https://tc39.es/ecma262/#sec-array.prototype.some
                    some: createMethod(3),
                    // `Array.prototype.every` method
                    // https://tc39.es/ecma262/#sec-array.prototype.every
                    every: createMethod(4),
                    // `Array.prototype.find` method
                    // https://tc39.es/ecma262/#sec-array.prototype.find
                    find: createMethod(5),
                    // `Array.prototype.findIndex` method
                    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
                    findIndex: createMethod(6),
                    // `Array.prototype.filterOut` method
                    // https://github.com/tc39/proposal-array-filtering
                    filterOut: createMethod(7)
                };
            /***/ },
            /***/ 6583: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var toIndexedObject = __webpack_require__(5656);
                var toInteger = __webpack_require__(9958);
                var toLength = __webpack_require__(7466);
                var arrayMethodIsStrict = __webpack_require__(9341);
                var min = Math.min;
                var nativeLastIndexOf = [].lastIndexOf;
                var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [
                    1
                ].lastIndexOf(1, -0) < 0;
                var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
                var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
                // `Array.prototype.lastIndexOf` method implementation
                // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
                module1.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */ ) {
                    // convert -0 to +0
                    if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
                    var O = toIndexedObject(this);
                    var length = toLength(O.length);
                    var index = length - 1;
                    if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
                    if (index < 0) index = length + index;
                    for(; index >= 0; index--)if (index in O && O[index] === searchElement) return index || 0;
                    return -1;
                } : nativeLastIndexOf;
            /***/ },
            /***/ 1194: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                var wellKnownSymbol = __webpack_require__(5112);
                var V8_VERSION = __webpack_require__(7392);
                var SPECIES = wellKnownSymbol("species");
                module1.exports = function(METHOD_NAME) {
                    // We can't use this feature detection in V8 since it causes
                    // deoptimization and serious performance degradation
                    // https://github.com/zloirock/core-js/issues/677
                    return V8_VERSION >= 51 || !fails(function() {
                        var array = [];
                        var constructor = array.constructor = {};
                        constructor[SPECIES] = function() {
                            return {
                                foo: 1
                            };
                        };
                        return array[METHOD_NAME](Boolean).foo !== 1;
                    });
                };
            /***/ },
            /***/ 9341: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fails = __webpack_require__(7293);
                module1.exports = function(METHOD_NAME, argument) {
                    var method = [][METHOD_NAME];
                    return !!method && fails(function() {
                        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
                        method.call(null, argument || function() {
                            throw 1;
                        }, 1);
                    });
                };
            /***/ },
            /***/ 3671: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var aFunction = __webpack_require__(3099);
                var toObject = __webpack_require__(7908);
                var IndexedObject = __webpack_require__(8361);
                var toLength = __webpack_require__(7466);
                // `Array.prototype.{ reduce, reduceRight }` methods implementation
                var createMethod = function(IS_RIGHT) {
                    return function(that, callbackfn, argumentsLength, memo) {
                        aFunction(callbackfn);
                        var O = toObject(that);
                        var self1 = IndexedObject(O);
                        var length = toLength(O.length);
                        var index = IS_RIGHT ? length - 1 : 0;
                        var i = IS_RIGHT ? -1 : 1;
                        if (argumentsLength < 2) while(true){
                            if (index in self1) {
                                memo = self1[index];
                                index += i;
                                break;
                            }
                            index += i;
                            if (IS_RIGHT ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
                        }
                        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self1) memo = callbackfn(memo, self1[index], index, O);
                        return memo;
                    };
                };
                module1.exports = {
                    // `Array.prototype.reduce` method
                    // https://tc39.es/ecma262/#sec-array.prototype.reduce
                    left: createMethod(false),
                    // `Array.prototype.reduceRight` method
                    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
                    right: createMethod(true)
                };
            /***/ },
            /***/ 5417: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var isObject = __webpack_require__(111);
                var isArray = __webpack_require__(3157);
                var wellKnownSymbol = __webpack_require__(5112);
                var SPECIES = wellKnownSymbol("species");
                // `ArraySpeciesCreate` abstract operation
                // https://tc39.es/ecma262/#sec-arrayspeciescreate
                module1.exports = function(originalArray, length) {
                    var C;
                    if (isArray(originalArray)) {
                        C = originalArray.constructor;
                        // cross-realm fallback
                        if (typeof C == "function" && (C === Array || isArray(C.prototype))) C = undefined;
                        else if (isObject(C)) {
                            C = C[SPECIES];
                            if (C === null) C = undefined;
                        }
                    }
                    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
                };
            /***/ },
            /***/ 3411: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var anObject = __webpack_require__(9670);
                var iteratorClose = __webpack_require__(9212);
                // call something on iterator step with safe closing on error
                module1.exports = function(iterator, fn, value, ENTRIES) {
                    try {
                        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                    // 7.4.6 IteratorClose(iterator, completion)
                    } catch (error) {
                        iteratorClose(iterator);
                        throw error;
                    }
                };
            /***/ },
            /***/ 7072: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var wellKnownSymbol = __webpack_require__(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                var SAFE_CLOSING = false;
                try {
                    var called = 0;
                    var iteratorWithReturn = {
                        next: function() {
                            return {
                                done: !!called++
                            };
                        },
                        "return": function() {
                            SAFE_CLOSING = true;
                        }
                    };
                    iteratorWithReturn[ITERATOR] = function() {
                        return this;
                    };
                    // eslint-disable-next-line no-throw-literal -- required for testing
                    Array.from(iteratorWithReturn, function() {
                        throw 2;
                    });
                } catch (error) {}
                module1.exports = function(exec, SKIP_CLOSING) {
                    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                    var ITERATION_SUPPORT = false;
                    try {
                        var object = {};
                        object[ITERATOR] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: ITERATION_SUPPORT = true
                                    };
                                }
                            };
                        };
                        exec(object);
                    } catch (error) {}
                    return ITERATION_SUPPORT;
                };
            /***/ },
            /***/ 4326: /***/ function(module1) {
                var toString = {}.toString;
                module1.exports = function(it) {
                    return toString.call(it).slice(8, -1);
                };
            /***/ },
            /***/ 648: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
                var classofRaw = __webpack_require__(4326);
                var wellKnownSymbol = __webpack_require__(5112);
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                // ES3 wrong here
                var CORRECT_ARGUMENTS = classofRaw(function() {
                    return arguments;
                }()) == "Arguments";
                // fallback for IE11 Script Access Denied error
                var tryGet = function(it, key) {
                    try {
                        return it[key];
                    } catch (error) {}
                };
                // getting tag from ES6+ `Object.prototype.toString`
                module1.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
                    var O, tag, result;
                    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
                };
            /***/ },
            /***/ 9920: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var has = __webpack_require__(6656);
                var ownKeys = __webpack_require__(3887);
                var getOwnPropertyDescriptorModule = __webpack_require__(1236);
                var definePropertyModule = __webpack_require__(3070);
                module1.exports = function(target, source) {
                    var keys = ownKeys(source);
                    var defineProperty = definePropertyModule.f;
                    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                    for(var i = 0; i < keys.length; i++){
                        var key = keys[i];
                        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                    }
                };
            /***/ },
            /***/ 8544: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                module1.exports = !fails(function() {
                    function F() {}
                    F.prototype.constructor = null;
                    return Object.getPrototypeOf(new F()) !== F.prototype;
                });
            /***/ },
            /***/ 4994: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var IteratorPrototype = __webpack_require__(3383).IteratorPrototype;
                var create = __webpack_require__(30);
                var createPropertyDescriptor = __webpack_require__(9114);
                var setToStringTag = __webpack_require__(8003);
                var Iterators = __webpack_require__(7497);
                var returnThis = function() {
                    return this;
                };
                module1.exports = function(IteratorConstructor, NAME, next) {
                    var TO_STRING_TAG = NAME + " Iterator";
                    IteratorConstructor.prototype = create(IteratorPrototype, {
                        next: createPropertyDescriptor(1, next)
                    });
                    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                    Iterators[TO_STRING_TAG] = returnThis;
                    return IteratorConstructor;
                };
            /***/ },
            /***/ 8880: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(9781);
                var definePropertyModule = __webpack_require__(3070);
                var createPropertyDescriptor = __webpack_require__(9114);
                module1.exports = DESCRIPTORS ? function(object, key, value) {
                    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
                } : function(object, key, value) {
                    object[key] = value;
                    return object;
                };
            /***/ },
            /***/ 9114: /***/ function(module1) {
                module1.exports = function(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value
                    };
                };
            /***/ },
            /***/ 6135: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var toPrimitive = __webpack_require__(7593);
                var definePropertyModule = __webpack_require__(3070);
                var createPropertyDescriptor = __webpack_require__(9114);
                module1.exports = function(object, key, value) {
                    var propertyKey = toPrimitive(key);
                    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                    else object[propertyKey] = value;
                };
            /***/ },
            /***/ 654: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var createIteratorConstructor = __webpack_require__(4994);
                var getPrototypeOf = __webpack_require__(9518);
                var setPrototypeOf = __webpack_require__(7674);
                var setToStringTag = __webpack_require__(8003);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var redefine = __webpack_require__(1320);
                var wellKnownSymbol = __webpack_require__(5112);
                var IS_PURE = __webpack_require__(1913);
                var Iterators = __webpack_require__(7497);
                var IteratorsCore = __webpack_require__(3383);
                var IteratorPrototype = IteratorsCore.IteratorPrototype;
                var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
                var ITERATOR = wellKnownSymbol("iterator");
                var KEYS = "keys";
                var VALUES = "values";
                var ENTRIES = "entries";
                var returnThis = function() {
                    return this;
                };
                module1.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                    createIteratorConstructor(IteratorConstructor, NAME, next);
                    var getIterationMethod = function(KIND) {
                        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                        switch(KIND){
                            case KEYS:
                                return function keys() {
                                    return new IteratorConstructor(this, KIND);
                                };
                            case VALUES:
                                return function values() {
                                    return new IteratorConstructor(this, KIND);
                                };
                            case ENTRIES:
                                return function entries() {
                                    return new IteratorConstructor(this, KIND);
                                };
                        }
                        return function() {
                            return new IteratorConstructor(this);
                        };
                    };
                    var TO_STRING_TAG = NAME + " Iterator";
                    var INCORRECT_VALUES_NAME = false;
                    var IterablePrototype = Iterable.prototype;
                    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                    var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                    var CurrentIteratorPrototype, methods, KEY;
                    // fix native
                    if (anyNativeIterator) {
                        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                                else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                            }
                            // Set @@toStringTag to native iterators
                            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                        INCORRECT_VALUES_NAME = true;
                        defaultIterator = function values() {
                            return nativeIterator.call(this);
                        };
                    }
                    // define iterator
                    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
                    Iterators[NAME] = defaultIterator;
                    // export additional methods
                    if (DEFAULT) {
                        methods = {
                            values: getIterationMethod(VALUES),
                            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                            entries: getIterationMethod(ENTRIES)
                        };
                        if (FORCED) {
                            for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
                        } else $({
                            target: NAME,
                            proto: true,
                            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                        }, methods);
                    }
                    return methods;
                };
            /***/ },
            /***/ 9781: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                // Detect IE8's incomplete defineProperty implementation
                module1.exports = !fails(function() {
                    return Object.defineProperty({}, 1, {
                        get: function() {
                            return 7;
                        }
                    })[1] != 7;
                });
            /***/ },
            /***/ 317: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var isObject = __webpack_require__(111);
                var document1 = global.document;
                // typeof document.createElement is 'object' in old IE
                var EXISTS = isObject(document1) && isObject(document1.createElement);
                module1.exports = function(it) {
                    return EXISTS ? document1.createElement(it) : {};
                };
            /***/ },
            /***/ 8324: /***/ function(module1) {
                // iterable DOM collections
                // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
                module1.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                };
            /***/ },
            /***/ 8113: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var getBuiltIn = __webpack_require__(5005);
                module1.exports = getBuiltIn("navigator", "userAgent") || "";
            /***/ },
            /***/ 7392: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var userAgent = __webpack_require__(8113);
                var process = global.process;
                var versions = process && process.versions;
                var v8 = versions && versions.v8;
                var match, version;
                if (v8) {
                    match = v8.split(".");
                    version = match[0] + match[1];
                } else if (userAgent) {
                    match = userAgent.match(/Edge\/(\d+)/);
                    if (!match || match[1] >= 74) {
                        match = userAgent.match(/Chrome\/(\d+)/);
                        if (match) version = match[1];
                    }
                }
                module1.exports = version && +version;
            /***/ },
            /***/ 748: /***/ function(module1) {
                // IE8- don't enum bug keys
                module1.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf"
                ];
            /***/ },
            /***/ 2109: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var getOwnPropertyDescriptor = __webpack_require__(1236).f;
                var createNonEnumerableProperty = __webpack_require__(8880);
                var redefine = __webpack_require__(1320);
                var setGlobal = __webpack_require__(3505);
                var copyConstructorProperties = __webpack_require__(9920);
                var isForced = __webpack_require__(4705);
                /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module1.exports = function(options, source) {
                    var TARGET = options.target;
                    var GLOBAL = options.global;
                    var STATIC = options.stat;
                    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                    if (GLOBAL) target = global;
                    else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {});
                    else target = (global[TARGET] || {}).prototype;
                    if (target) for(key in source){
                        sourceProperty = source[key];
                        if (options.noTargetGet) {
                            descriptor = getOwnPropertyDescriptor(target, key);
                            targetProperty = descriptor && descriptor.value;
                        } else targetProperty = target[key];
                        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                        // contained in target
                        if (!FORCED && targetProperty !== undefined) {
                            if (typeof sourceProperty === typeof targetProperty) continue;
                            copyConstructorProperties(sourceProperty, targetProperty);
                        }
                        // add a flag to not completely full polyfills
                        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                        // extend global
                        redefine(target, key, sourceProperty, options);
                    }
                };
            /***/ },
            /***/ 7293: /***/ function(module1) {
                module1.exports = function(exec) {
                    try {
                        return !!exec();
                    } catch (error) {
                        return true;
                    }
                };
            /***/ },
            /***/ 7007: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                // TODO: Remove from `core-js@4` since it's moved to entry points
                __webpack_require__(4916);
                var redefine = __webpack_require__(1320);
                var fails = __webpack_require__(7293);
                var wellKnownSymbol = __webpack_require__(5112);
                var regexpExec = __webpack_require__(2261);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var SPECIES = wellKnownSymbol("species");
                var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                    // #replace needs built-in support for named groups.
                    // #match works fine because it just return the exec results, even if it has
                    // a "grops" property.
                    var re = /./;
                    re.exec = function() {
                        var result = [];
                        result.groups = {
                            a: "7"
                        };
                        return result;
                    };
                    return "".replace(re, "$<a>") !== "7";
                });
                // IE <= 11 replaces $0 with the whole match, as if it was $&
                // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
                var REPLACE_KEEPS_$0 = function() {
                    return "a".replace(/./, "$0") === "$0";
                }();
                var REPLACE = wellKnownSymbol("replace");
                // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
                var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
                    if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
                    return false;
                }();
                // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                // Weex JS has frozen built-in prototypes, so use try / catch wrapper
                var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
                    // eslint-disable-next-line regexp/no-empty-group -- required for testing
                    var re = /(?:)/;
                    var originalExec = re.exec;
                    re.exec = function() {
                        return originalExec.apply(this, arguments);
                    };
                    var result = "ab".split(re);
                    return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
                });
                module1.exports = function(KEY, length, exec, sham) {
                    var SYMBOL = wellKnownSymbol(KEY);
                    var DELEGATES_TO_SYMBOL = !fails(function() {
                        // String methods call symbol-named RegEp methods
                        var O = {};
                        O[SYMBOL] = function() {
                            return 7;
                        };
                        return ""[KEY](O) != 7;
                    });
                    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
                        // Symbol-named RegExp methods call .exec
                        var execCalled = false;
                        var re = /a/;
                        if (KEY === "split") {
                            // We can't use real regex here since it causes deoptimization
                            // and serious performance degradation in V8
                            // https://github.com/zloirock/core-js/issues/306
                            re = {};
                            // RegExp[@@split] doesn't call the regex's exec method, but first creates
                            // a new one. We need to return the patched regex when creating the new one.
                            re.constructor = {};
                            re.constructor[SPECIES] = function() {
                                return re;
                            };
                            re.flags = "";
                            re[SYMBOL] = /./[SYMBOL];
                        }
                        re.exec = function() {
                            execCalled = true;
                            return null;
                        };
                        re[SYMBOL]("");
                        return !execCalled;
                    });
                    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                        var nativeRegExpMethod = /./[SYMBOL];
                        var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                            if (regexp.exec === regexpExec) {
                                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                                // polyfilled function), leasing to infinite recursion.
                                // We avoid it by directly calling the native @@method method.
                                return {
                                    done: true,
                                    value: nativeRegExpMethod.call(regexp, str, arg2)
                                };
                                return {
                                    done: true,
                                    value: nativeMethod.call(str, regexp, arg2)
                                };
                            }
                            return {
                                done: false
                            };
                        }, {
                            REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
                            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                        });
                        var stringMethod = methods[0];
                        var regexMethod = methods[1];
                        redefine(String.prototype, KEY, stringMethod);
                        redefine(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
                            return regexMethod.call(string, this, arg);
                        } : function(string) {
                            return regexMethod.call(string, this);
                        });
                    }
                    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
                };
            /***/ },
            /***/ 9974: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var aFunction = __webpack_require__(3099);
                // optional / simple context binding
                module1.exports = function(fn, that, length) {
                    aFunction(fn);
                    if (that === undefined) return fn;
                    switch(length){
                        case 0:
                            return function() {
                                return fn.call(that);
                            };
                        case 1:
                            return function(a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function(a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function(a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function() {
                        return fn.apply(that, arguments);
                    };
                };
            /***/ },
            /***/ 5005: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var path = __webpack_require__(857);
                var global = __webpack_require__(7854);
                var aFunction = function(variable) {
                    return typeof variable == "function" ? variable : undefined;
                };
                module1.exports = function(namespace, method) {
                    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
                };
            /***/ },
            /***/ 1246: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var classof = __webpack_require__(648);
                var Iterators = __webpack_require__(7497);
                var wellKnownSymbol = __webpack_require__(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                module1.exports = function(it) {
                    if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
                };
            /***/ },
            /***/ 8554: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var anObject = __webpack_require__(9670);
                var getIteratorMethod = __webpack_require__(1246);
                module1.exports = function(it) {
                    var iteratorMethod = getIteratorMethod(it);
                    if (typeof iteratorMethod != "function") throw TypeError(String(it) + " is not iterable");
                    return anObject(iteratorMethod.call(it));
                };
            /***/ },
            /***/ 647: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toObject = __webpack_require__(7908);
                var floor = Math.floor;
                var replace = "".replace;
                var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
                var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
                // https://tc39.es/ecma262/#sec-getsubstitution
                module1.exports = function(matched, str, position, captures, namedCaptures, replacement) {
                    var tailPos = position + matched.length;
                    var m = captures.length;
                    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                    if (namedCaptures !== undefined) {
                        namedCaptures = toObject(namedCaptures);
                        symbols = SUBSTITUTION_SYMBOLS;
                    }
                    return replace.call(replacement, symbols, function(match, ch) {
                        var capture;
                        switch(ch.charAt(0)){
                            case "$":
                                return "$";
                            case "&":
                                return matched;
                            case "`":
                                return str.slice(0, position);
                            case "'":
                                return str.slice(tailPos);
                            case "<":
                                capture = namedCaptures[ch.slice(1, -1)];
                                break;
                            default:
                                var n = +ch;
                                if (n === 0) return match;
                                if (n > m) {
                                    var f = floor(n / 10);
                                    if (f === 0) return match;
                                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                    return match;
                                }
                                capture = captures[n - 1];
                        }
                        return capture === undefined ? "" : capture;
                    });
                };
            /***/ },
            /***/ 7854: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var check = function(it) {
                    return it && it.Math == Math && it;
                };
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                module1.exports = /* global globalThis -- safe */ check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__.g == "object" && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
                function() {
                    return this;
                }() || Function("return this")();
            /***/ },
            /***/ 6656: /***/ function(module1) {
                var hasOwnProperty = {}.hasOwnProperty;
                module1.exports = function(it, key) {
                    return hasOwnProperty.call(it, key);
                };
            /***/ },
            /***/ 3501: /***/ function(module1) {
                module1.exports = {};
            /***/ },
            /***/ 490: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var getBuiltIn = __webpack_require__(5005);
                module1.exports = getBuiltIn("document", "documentElement");
            /***/ },
            /***/ 4664: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(9781);
                var fails = __webpack_require__(7293);
                var createElement = __webpack_require__(317);
                // Thank's IE8 for his funny defineProperty
                module1.exports = !DESCRIPTORS && !fails(function() {
                    return Object.defineProperty(createElement("div"), "a", {
                        get: function() {
                            return 7;
                        }
                    }).a != 7;
                });
            /***/ },
            /***/ 1179: /***/ function(module1) {
                // IEEE754 conversions based on https://github.com/feross/ieee754
                var abs = Math.abs;
                var pow = Math.pow;
                var floor = Math.floor;
                var log = Math.log;
                var LN2 = Math.LN2;
                var pack = function(number, mantissaLength, bytes) {
                    var buffer = new Array(bytes);
                    var exponentLength = bytes * 8 - mantissaLength - 1;
                    var eMax = (1 << exponentLength) - 1;
                    var eBias = eMax >> 1;
                    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
                    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
                    var index = 0;
                    var exponent, mantissa, c;
                    number = abs(number);
                    // eslint-disable-next-line no-self-compare -- NaN check
                    if (number != number || number === Infinity) {
                        // eslint-disable-next-line no-self-compare -- NaN check
                        mantissa = number != number ? 1 : 0;
                        exponent = eMax;
                    } else {
                        exponent = floor(log(number) / LN2);
                        if (number * (c = pow(2, -exponent)) < 1) {
                            exponent--;
                            c *= 2;
                        }
                        if (exponent + eBias >= 1) number += rt / c;
                        else number += rt * pow(2, 1 - eBias);
                        if (number * c >= 2) {
                            exponent++;
                            c /= 2;
                        }
                        if (exponent + eBias >= eMax) {
                            mantissa = 0;
                            exponent = eMax;
                        } else if (exponent + eBias >= 1) {
                            mantissa = (number * c - 1) * pow(2, mantissaLength);
                            exponent = exponent + eBias;
                        } else {
                            mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
                            exponent = 0;
                        }
                    }
                    for(; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
                    exponent = exponent << mantissaLength | mantissa;
                    exponentLength += mantissaLength;
                    for(; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
                    buffer[--index] |= sign * 128;
                    return buffer;
                };
                var unpack = function(buffer, mantissaLength) {
                    var bytes = buffer.length;
                    var exponentLength = bytes * 8 - mantissaLength - 1;
                    var eMax = (1 << exponentLength) - 1;
                    var eBias = eMax >> 1;
                    var nBits = exponentLength - 7;
                    var index = bytes - 1;
                    var sign = buffer[index--];
                    var exponent = sign & 127;
                    var mantissa;
                    sign >>= 7;
                    for(; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
                    mantissa = exponent & (1 << -nBits) - 1;
                    exponent >>= -nBits;
                    nBits += mantissaLength;
                    for(; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
                    if (exponent === 0) exponent = 1 - eBias;
                    else if (exponent === eMax) return mantissa ? NaN : sign ? -Infinity : Infinity;
                    else {
                        mantissa = mantissa + pow(2, mantissaLength);
                        exponent = exponent - eBias;
                    }
                    return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
                };
                module1.exports = {
                    pack: pack,
                    unpack: unpack
                };
            /***/ },
            /***/ 8361: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                var classof = __webpack_require__(4326);
                var split = "".split;
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                module1.exports = fails(function() {
                    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
                    // eslint-disable-next-line no-prototype-builtins -- safe
                    return !Object("z").propertyIsEnumerable(0);
                }) ? function(it) {
                    return classof(it) == "String" ? split.call(it, "") : Object(it);
                } : Object;
            /***/ },
            /***/ 9587: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var isObject = __webpack_require__(111);
                var setPrototypeOf = __webpack_require__(7674);
                // makes subclassing work correct for wrapped built-ins
                module1.exports = function($this, dummy, Wrapper) {
                    var NewTarget, NewTargetPrototype;
                    if (// it can work only with native `setPrototypeOf`
                    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                    typeof (NewTarget = dummy.constructor) == "function" && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
                    return $this;
                };
            /***/ },
            /***/ 2788: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var store = __webpack_require__(5465);
                var functionToString = Function.toString;
                // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
                if (typeof store.inspectSource != "function") store.inspectSource = function(it) {
                    return functionToString.call(it);
                };
                module1.exports = store.inspectSource;
            /***/ },
            /***/ 9909: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var NATIVE_WEAK_MAP = __webpack_require__(8536);
                var global = __webpack_require__(7854);
                var isObject = __webpack_require__(111);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var objectHas = __webpack_require__(6656);
                var shared = __webpack_require__(5465);
                var sharedKey = __webpack_require__(6200);
                var hiddenKeys = __webpack_require__(3501);
                var WeakMap = global.WeakMap;
                var set, get, has;
                var enforce = function(it) {
                    return has(it) ? get(it) : set(it, {});
                };
                var getterFor = function(TYPE) {
                    return function(it) {
                        var state;
                        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                        return state;
                    };
                };
                if (NATIVE_WEAK_MAP) {
                    var store = shared.state || (shared.state = new WeakMap());
                    var wmget = store.get;
                    var wmhas = store.has;
                    var wmset = store.set;
                    set = function(it, metadata) {
                        metadata.facade = it;
                        wmset.call(store, it, metadata);
                        return metadata;
                    };
                    get = function(it) {
                        return wmget.call(store, it) || {};
                    };
                    has = function(it) {
                        return wmhas.call(store, it);
                    };
                } else {
                    var STATE = sharedKey("state");
                    hiddenKeys[STATE] = true;
                    set = function(it, metadata) {
                        metadata.facade = it;
                        createNonEnumerableProperty(it, STATE, metadata);
                        return metadata;
                    };
                    get = function(it) {
                        return objectHas(it, STATE) ? it[STATE] : {};
                    };
                    has = function(it) {
                        return objectHas(it, STATE);
                    };
                }
                module1.exports = {
                    set: set,
                    get: get,
                    has: has,
                    enforce: enforce,
                    getterFor: getterFor
                };
            /***/ },
            /***/ 7659: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var wellKnownSymbol = __webpack_require__(5112);
                var Iterators = __webpack_require__(7497);
                var ITERATOR = wellKnownSymbol("iterator");
                var ArrayPrototype = Array.prototype;
                // check on default Array iterator
                module1.exports = function(it) {
                    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
                };
            /***/ },
            /***/ 3157: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var classof = __webpack_require__(4326);
                // `IsArray` abstract operation
                // https://tc39.es/ecma262/#sec-isarray
                module1.exports = Array.isArray || function isArray(arg) {
                    return classof(arg) == "Array";
                };
            /***/ },
            /***/ 4705: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                var replacement = /#|\.prototype\./;
                var isForced = function(feature, detection) {
                    var value = data[normalize(feature)];
                    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
                };
                var normalize = isForced.normalize = function(string) {
                    return String(string).replace(replacement, ".").toLowerCase();
                };
                var data = isForced.data = {};
                var NATIVE = isForced.NATIVE = "N";
                var POLYFILL = isForced.POLYFILL = "P";
                module1.exports = isForced;
            /***/ },
            /***/ 111: /***/ function(module1) {
                module1.exports = function(it) {
                    return typeof it === "object" ? it !== null : typeof it === "function";
                };
            /***/ },
            /***/ 1913: /***/ function(module1) {
                module1.exports = false;
            /***/ },
            /***/ 7850: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var isObject = __webpack_require__(111);
                var classof = __webpack_require__(4326);
                var wellKnownSymbol = __webpack_require__(5112);
                var MATCH = wellKnownSymbol("match");
                // `IsRegExp` abstract operation
                // https://tc39.es/ecma262/#sec-isregexp
                module1.exports = function(it) {
                    var isRegExp;
                    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == "RegExp");
                };
            /***/ },
            /***/ 9212: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var anObject = __webpack_require__(9670);
                module1.exports = function(iterator) {
                    var returnMethod = iterator["return"];
                    if (returnMethod !== undefined) return anObject(returnMethod.call(iterator)).value;
                };
            /***/ },
            /***/ 3383: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fails = __webpack_require__(7293);
                var getPrototypeOf = __webpack_require__(9518);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var has = __webpack_require__(6656);
                var wellKnownSymbol = __webpack_require__(5112);
                var IS_PURE = __webpack_require__(1913);
                var ITERATOR = wellKnownSymbol("iterator");
                var BUGGY_SAFARI_ITERATORS = false;
                var returnThis = function() {
                    return this;
                };
                // `%IteratorPrototype%` object
                // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
                var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
                if ([].keys) {
                    arrayIterator = [].keys();
                    // Safari 8 has buggy iterators w/o `next`
                    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
                    else {
                        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                    }
                }
                var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function() {
                    var test = {};
                    // FF44- legacy iterators case
                    return IteratorPrototype[ITERATOR].call(test) !== test;
                });
                if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
                module1.exports = {
                    IteratorPrototype: IteratorPrototype,
                    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
                };
            /***/ },
            /***/ 7497: /***/ function(module1) {
                module1.exports = {};
            /***/ },
            /***/ 133: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                module1.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                    // Chrome 38 Symbol has incorrect toString conversion
                    /* global Symbol -- required for testing */ return !String(Symbol());
                });
            /***/ },
            /***/ 590: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                var wellKnownSymbol = __webpack_require__(5112);
                var IS_PURE = __webpack_require__(1913);
                var ITERATOR = wellKnownSymbol("iterator");
                module1.exports = !fails(function() {
                    var url = new URL("b?a=1&b=2&c=3", "http://a");
                    var searchParams = url.searchParams;
                    var result = "";
                    url.pathname = "c%20d";
                    searchParams.forEach(function(value, key) {
                        searchParams["delete"]("b");
                        result += key + value;
                    });
                    return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== "http://a/c%20d?a=1&c=3" || searchParams.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !searchParams[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || result !== "a1c3" || new URL("http://x", undefined).host !== "x";
                });
            /***/ },
            /***/ 8536: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var inspectSource = __webpack_require__(2788);
                var WeakMap = global.WeakMap;
                module1.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
            /***/ },
            /***/ 1574: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var DESCRIPTORS = __webpack_require__(9781);
                var fails = __webpack_require__(7293);
                var objectKeys = __webpack_require__(1956);
                var getOwnPropertySymbolsModule = __webpack_require__(5181);
                var propertyIsEnumerableModule = __webpack_require__(5296);
                var toObject = __webpack_require__(7908);
                var IndexedObject = __webpack_require__(8361);
                var nativeAssign = Object.assign;
                var defineProperty = Object.defineProperty;
                // `Object.assign` method
                // https://tc39.es/ecma262/#sec-object.assign
                module1.exports = !nativeAssign || fails(function() {
                    // should have correct order of operations (Edge bug)
                    if (DESCRIPTORS && nativeAssign({
                        b: 1
                    }, nativeAssign(defineProperty({}, "a", {
                        enumerable: true,
                        get: function() {
                            defineProperty(this, "b", {
                                value: 3,
                                enumerable: false
                            });
                        }
                    }), {
                        b: 2
                    })).b !== 1) return true;
                    // should work with symbols and should have deterministic property order (V8 bug)
                    var A = {};
                    var B = {};
                    /* global Symbol -- required for testing */ var symbol = Symbol();
                    var alphabet = "abcdefghijklmnopqrst";
                    A[symbol] = 7;
                    alphabet.split("").forEach(function(chr) {
                        B[chr] = chr;
                    });
                    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
                }) ? function assign(target, source) {
                    var T = toObject(target);
                    var argumentsLength = arguments.length;
                    var index = 1;
                    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                    var propertyIsEnumerable = propertyIsEnumerableModule.f;
                    while(argumentsLength > index){
                        var S = IndexedObject(arguments[index++]);
                        var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
                        var length = keys.length;
                        var j = 0;
                        var key;
                        while(length > j){
                            key = keys[j++];
                            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
                        }
                    }
                    return T;
                } : nativeAssign;
            /***/ },
            /***/ 30: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var anObject = __webpack_require__(9670);
                var defineProperties = __webpack_require__(6048);
                var enumBugKeys = __webpack_require__(748);
                var hiddenKeys = __webpack_require__(3501);
                var html = __webpack_require__(490);
                var documentCreateElement = __webpack_require__(317);
                var sharedKey = __webpack_require__(6200);
                var GT = ">";
                var LT = "<";
                var PROTOTYPE = "prototype";
                var SCRIPT = "script";
                var IE_PROTO = sharedKey("IE_PROTO");
                var EmptyConstructor = function() {};
                var scriptTag = function(content) {
                    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
                };
                // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
                var NullProtoObjectViaActiveX = function(activeXDocument) {
                    activeXDocument.write(scriptTag(""));
                    activeXDocument.close();
                    var temp = activeXDocument.parentWindow.Object;
                    activeXDocument = null; // avoid memory leak
                    return temp;
                };
                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var NullProtoObjectViaIFrame = function() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = documentCreateElement("iframe");
                    var JS = "java" + SCRIPT + ":";
                    var iframeDocument;
                    iframe.style.display = "none";
                    html.appendChild(iframe);
                    // https://github.com/zloirock/core-js/issues/475
                    iframe.src = String(JS);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(scriptTag("document.F=Object"));
                    iframeDocument.close();
                    return iframeDocument.F;
                };
                // Check for document.domain and active x support
                // No need to use active x approach when document.domain is not set
                // see https://github.com/es-shims/es5-shim/issues/150
                // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
                // avoid IE GC bug
                var activeXDocument;
                var NullProtoObject = function() {
                    try {
                        /* global ActiveXObject -- old IE */ activeXDocument = document.domain && new ActiveXObject("htmlfile");
                    } catch (error) {}
                    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
                    var length = enumBugKeys.length;
                    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
                    return NullProtoObject();
                };
                hiddenKeys[IE_PROTO] = true;
                // `Object.create` method
                // https://tc39.es/ecma262/#sec-object.create
                module1.exports = Object.create || function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        EmptyConstructor[PROTOTYPE] = anObject(O);
                        result = new EmptyConstructor();
                        EmptyConstructor[PROTOTYPE] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = NullProtoObject();
                    return Properties === undefined ? result : defineProperties(result, Properties);
                };
            /***/ },
            /***/ 6048: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(9781);
                var definePropertyModule = __webpack_require__(3070);
                var anObject = __webpack_require__(9670);
                var objectKeys = __webpack_require__(1956);
                // `Object.defineProperties` method
                // https://tc39.es/ecma262/#sec-object.defineproperties
                module1.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                    anObject(O);
                    var keys = objectKeys(Properties);
                    var length = keys.length;
                    var index = 0;
                    var key;
                    while(length > index)definePropertyModule.f(O, key = keys[index++], Properties[key]);
                    return O;
                };
            /***/ },
            /***/ 3070: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(9781);
                var IE8_DOM_DEFINE = __webpack_require__(4664);
                var anObject = __webpack_require__(9670);
                var toPrimitive = __webpack_require__(7593);
                var nativeDefineProperty = Object.defineProperty;
                // `Object.defineProperty` method
                // https://tc39.es/ecma262/#sec-object.defineproperty
                exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                    anObject(O);
                    P = toPrimitive(P, true);
                    anObject(Attributes);
                    if (IE8_DOM_DEFINE) try {
                        return nativeDefineProperty(O, P, Attributes);
                    } catch (error) {}
                    if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
                    if ("value" in Attributes) O[P] = Attributes.value;
                    return O;
                };
            /***/ },
            /***/ 1236: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(9781);
                var propertyIsEnumerableModule = __webpack_require__(5296);
                var createPropertyDescriptor = __webpack_require__(9114);
                var toIndexedObject = __webpack_require__(5656);
                var toPrimitive = __webpack_require__(7593);
                var has = __webpack_require__(6656);
                var IE8_DOM_DEFINE = __webpack_require__(4664);
                var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
                exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                    O = toIndexedObject(O);
                    P = toPrimitive(P, true);
                    if (IE8_DOM_DEFINE) try {
                        return nativeGetOwnPropertyDescriptor(O, P);
                    } catch (error) {}
                    if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
                };
            /***/ },
            /***/ 8006: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var internalObjectKeys = __webpack_require__(6324);
                var enumBugKeys = __webpack_require__(748);
                var hiddenKeys = enumBugKeys.concat("length", "prototype");
                // `Object.getOwnPropertyNames` method
                // https://tc39.es/ecma262/#sec-object.getownpropertynames
                exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return internalObjectKeys(O, hiddenKeys);
                };
            /***/ },
            /***/ 5181: /***/ function(__unused_webpack_module, exports) {
                exports.f = Object.getOwnPropertySymbols;
            /***/ },
            /***/ 9518: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var has = __webpack_require__(6656);
                var toObject = __webpack_require__(7908);
                var sharedKey = __webpack_require__(6200);
                var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);
                var IE_PROTO = sharedKey("IE_PROTO");
                var ObjectPrototype = Object.prototype;
                // `Object.getPrototypeOf` method
                // https://tc39.es/ecma262/#sec-object.getprototypeof
                module1.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                    O = toObject(O);
                    if (has(O, IE_PROTO)) return O[IE_PROTO];
                    if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
                    return O instanceof Object ? ObjectPrototype : null;
                };
            /***/ },
            /***/ 6324: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var has = __webpack_require__(6656);
                var toIndexedObject = __webpack_require__(5656);
                var indexOf = __webpack_require__(1318).indexOf;
                var hiddenKeys = __webpack_require__(3501);
                module1.exports = function(object, names) {
                    var O = toIndexedObject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
                    // Don't enum bug & hidden keys
                    while(names.length > i)if (has(O, key = names[i++])) ~indexOf(result, key) || result.push(key);
                    return result;
                };
            /***/ },
            /***/ 1956: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var internalObjectKeys = __webpack_require__(6324);
                var enumBugKeys = __webpack_require__(748);
                // `Object.keys` method
                // https://tc39.es/ecma262/#sec-object.keys
                module1.exports = Object.keys || function keys(O) {
                    return internalObjectKeys(O, enumBugKeys);
                };
            /***/ },
            /***/ 5296: /***/ function(__unused_webpack_module, exports) {
                "use strict";
                var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
                var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
                // Nashorn ~ JDK8 bug
                var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
                    1: 2
                }, 1);
                // `Object.prototype.propertyIsEnumerable` method implementation
                // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
                exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                    var descriptor = getOwnPropertyDescriptor(this, V);
                    return !!descriptor && descriptor.enumerable;
                } : nativePropertyIsEnumerable;
            /***/ },
            /***/ 7674: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                /* eslint-disable no-proto -- safe */ var anObject = __webpack_require__(9670);
                var aPossiblePrototype = __webpack_require__(6077);
                // `Object.setPrototypeOf` method
                // https://tc39.es/ecma262/#sec-object.setprototypeof
                // Works with __proto__ only. Old v8 can't work with null proto objects.
                module1.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var CORRECT_SETTER = false;
                    var test = {};
                    var setter;
                    try {
                        setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                        setter.call(test, []);
                        CORRECT_SETTER = test instanceof Array;
                    } catch (error) {}
                    return function setPrototypeOf(O, proto) {
                        anObject(O);
                        aPossiblePrototype(proto);
                        if (CORRECT_SETTER) setter.call(O, proto);
                        else O.__proto__ = proto;
                        return O;
                    };
                }() : undefined);
            /***/ },
            /***/ 288: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
                var classof = __webpack_require__(648);
                // `Object.prototype.toString` method implementation
                // https://tc39.es/ecma262/#sec-object.prototype.tostring
                module1.exports = TO_STRING_TAG_SUPPORT ? ({}).toString : function toString() {
                    return "[object " + classof(this) + "]";
                };
            /***/ },
            /***/ 3887: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var getBuiltIn = __webpack_require__(5005);
                var getOwnPropertyNamesModule = __webpack_require__(8006);
                var getOwnPropertySymbolsModule = __webpack_require__(5181);
                var anObject = __webpack_require__(9670);
                // all object keys, includes non-enumerable and symbols
                module1.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
                    var keys = getOwnPropertyNamesModule.f(anObject(it));
                    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
                };
            /***/ },
            /***/ 857: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                module1.exports = global;
            /***/ },
            /***/ 2248: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var redefine = __webpack_require__(1320);
                module1.exports = function(target, src, options) {
                    for(var key in src)redefine(target, key, src[key], options);
                    return target;
                };
            /***/ },
            /***/ 1320: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var has = __webpack_require__(6656);
                var setGlobal = __webpack_require__(3505);
                var inspectSource = __webpack_require__(2788);
                var InternalStateModule = __webpack_require__(9909);
                var getInternalState = InternalStateModule.get;
                var enforceInternalState = InternalStateModule.enforce;
                var TEMPLATE = String(String).split("String");
                (module1.exports = function(O, key, value, options) {
                    var unsafe = options ? !!options.unsafe : false;
                    var simple = options ? !!options.enumerable : false;
                    var noTargetGet = options ? !!options.noTargetGet : false;
                    var state;
                    if (typeof value == "function") {
                        if (typeof key == "string" && !has(value, "name")) createNonEnumerableProperty(value, "name", key);
                        state = enforceInternalState(value);
                        if (!state.source) state.source = TEMPLATE.join(typeof key == "string" ? key : "");
                    }
                    if (O === global) {
                        if (simple) O[key] = value;
                        else setGlobal(key, value);
                        return;
                    } else if (!unsafe) delete O[key];
                    else if (!noTargetGet && O[key]) simple = true;
                    if (simple) O[key] = value;
                    else createNonEnumerableProperty(O, key, value);
                // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
                })(Function.prototype, "toString", function toString() {
                    return typeof this == "function" && getInternalState(this).source || inspectSource(this);
                });
            /***/ },
            /***/ 7651: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var classof = __webpack_require__(4326);
                var regexpExec = __webpack_require__(2261);
                // `RegExpExec` abstract operation
                // https://tc39.es/ecma262/#sec-regexpexec
                module1.exports = function(R, S) {
                    var exec = R.exec;
                    if (typeof exec === "function") {
                        var result = exec.call(R, S);
                        if (typeof result !== "object") throw TypeError("RegExp exec method returned something other than an Object or null");
                        return result;
                    }
                    if (classof(R) !== "RegExp") throw TypeError("RegExp#exec called on incompatible receiver");
                    return regexpExec.call(R, S);
                };
            /***/ },
            /***/ 2261: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var regexpFlags = __webpack_require__(7066);
                var stickyHelpers = __webpack_require__(2999);
                var nativeExec = RegExp.prototype.exec;
                // This always refers to the native implementation, because the
                // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
                // which loads this file before patching the method.
                var nativeReplace = String.prototype.replace;
                var patchedExec = nativeExec;
                var UPDATES_LAST_INDEX_WRONG = function() {
                    var re1 = /a/;
                    var re2 = /b*/g;
                    nativeExec.call(re1, "a");
                    nativeExec.call(re2, "a");
                    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
                }();
                var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
                // nonparticipating capturing group, copied from es5-shim's String#split patch.
                // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
                var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
                if (PATCH) patchedExec = function exec(str) {
                    var re = this;
                    var lastIndex, reCopy, match, i;
                    var sticky = UNSUPPORTED_Y && re.sticky;
                    var flags = regexpFlags.call(re);
                    var source = re.source;
                    var charsAdded = 0;
                    var strCopy = str;
                    if (sticky) {
                        flags = flags.replace("y", "");
                        if (flags.indexOf("g") === -1) flags += "g";
                        strCopy = String(str).slice(re.lastIndex);
                        // Support anchored sticky behavior.
                        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== "\n")) {
                            source = "(?: " + source + ")";
                            strCopy = " " + strCopy;
                            charsAdded++;
                        }
                        // ^(? + rx + ) is needed, in combination with some str slicing, to
                        // simulate the 'y' flag.
                        reCopy = new RegExp("^(?:" + source + ")", flags);
                    }
                    if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
                    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
                    match = nativeExec.call(sticky ? reCopy : re, strCopy);
                    if (sticky) {
                        if (match) {
                            match.input = match.input.slice(charsAdded);
                            match[0] = match[0].slice(charsAdded);
                            match.index = re.lastIndex;
                            re.lastIndex += match[0].length;
                        } else re.lastIndex = 0;
                    } else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
                    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
                    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                    nativeReplace.call(match[0], reCopy, function() {
                        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
                    });
                    return match;
                };
                module1.exports = patchedExec;
            /***/ },
            /***/ 7066: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var anObject = __webpack_require__(9670);
                // `RegExp.prototype.flags` getter implementation
                // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
                module1.exports = function() {
                    var that = anObject(this);
                    var result = "";
                    if (that.global) result += "g";
                    if (that.ignoreCase) result += "i";
                    if (that.multiline) result += "m";
                    if (that.dotAll) result += "s";
                    if (that.unicode) result += "u";
                    if (that.sticky) result += "y";
                    return result;
                };
            /***/ },
            /***/ 2999: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                var fails = __webpack_require__(7293);
                // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
                // so we use an intermediate function.
                function RE(s, f) {
                    return RegExp(s, f);
                }
                exports.UNSUPPORTED_Y = fails(function() {
                    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
                    var re = RE("a", "y");
                    re.lastIndex = 2;
                    return re.exec("abcd") != null;
                });
                exports.BROKEN_CARET = fails(function() {
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
                    var re = RE("^r", "gy");
                    re.lastIndex = 2;
                    return re.exec("str") != null;
                });
            /***/ },
            /***/ 4488: /***/ function(module1) {
                // `RequireObjectCoercible` abstract operation
                // https://tc39.es/ecma262/#sec-requireobjectcoercible
                module1.exports = function(it) {
                    if (it == undefined) throw TypeError("Can't call method on " + it);
                    return it;
                };
            /***/ },
            /***/ 3505: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var createNonEnumerableProperty = __webpack_require__(8880);
                module1.exports = function(key, value) {
                    try {
                        createNonEnumerableProperty(global, key, value);
                    } catch (error) {
                        global[key] = value;
                    }
                    return value;
                };
            /***/ },
            /***/ 6340: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var getBuiltIn = __webpack_require__(5005);
                var definePropertyModule = __webpack_require__(3070);
                var wellKnownSymbol = __webpack_require__(5112);
                var DESCRIPTORS = __webpack_require__(9781);
                var SPECIES = wellKnownSymbol("species");
                module1.exports = function(CONSTRUCTOR_NAME) {
                    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
                    var defineProperty = definePropertyModule.f;
                    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineProperty(Constructor, SPECIES, {
                        configurable: true,
                        get: function() {
                            return this;
                        }
                    });
                };
            /***/ },
            /***/ 8003: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var defineProperty = __webpack_require__(3070).f;
                var has = __webpack_require__(6656);
                var wellKnownSymbol = __webpack_require__(5112);
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                module1.exports = function(it, TAG, STATIC) {
                    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
                        configurable: true,
                        value: TAG
                    });
                };
            /***/ },
            /***/ 6200: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var shared = __webpack_require__(2309);
                var uid = __webpack_require__(9711);
                var keys = shared("keys");
                module1.exports = function(key) {
                    return keys[key] || (keys[key] = uid(key));
                };
            /***/ },
            /***/ 5465: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var setGlobal = __webpack_require__(3505);
                var SHARED = "__core-js_shared__";
                var store = global[SHARED] || setGlobal(SHARED, {});
                module1.exports = store;
            /***/ },
            /***/ 2309: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var IS_PURE = __webpack_require__(1913);
                var store = __webpack_require__(5465);
                (module1.exports = function(key, value) {
                    return store[key] || (store[key] = value !== undefined ? value : {});
                })("versions", []).push({
                    version: "3.9.0",
                    mode: IS_PURE ? "pure" : "global",
                    copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
                });
            /***/ },
            /***/ 6707: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var anObject = __webpack_require__(9670);
                var aFunction = __webpack_require__(3099);
                var wellKnownSymbol = __webpack_require__(5112);
                var SPECIES = wellKnownSymbol("species");
                // `SpeciesConstructor` abstract operation
                // https://tc39.es/ecma262/#sec-speciesconstructor
                module1.exports = function(O, defaultConstructor) {
                    var C = anObject(O).constructor;
                    var S;
                    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
                };
            /***/ },
            /***/ 8710: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toInteger = __webpack_require__(9958);
                var requireObjectCoercible = __webpack_require__(4488);
                // `String.prototype.{ codePointAt, at }` methods implementation
                var createMethod = function(CONVERT_TO_STRING) {
                    return function($this, pos) {
                        var S = String(requireObjectCoercible($this));
                        var position = toInteger(pos);
                        var size = S.length;
                        var first, second;
                        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
                        first = S.charCodeAt(position);
                        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
                    };
                };
                module1.exports = {
                    // `String.prototype.codePointAt` method
                    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
                    codeAt: createMethod(false),
                    // `String.prototype.at` method
                    // https://github.com/mathiasbynens/String.prototype.at
                    charAt: createMethod(true)
                };
            /***/ },
            /***/ 3197: /***/ function(module1) {
                "use strict";
                // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
                var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
                var base = 36;
                var tMin = 1;
                var tMax = 26;
                var skew = 38;
                var damp = 700;
                var initialBias = 72;
                var initialN = 128; // 0x80
                var delimiter = "-"; // '\x2D'
                var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
                var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
                var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
                var baseMinusTMin = base - tMin;
                var floor = Math.floor;
                var stringFromCharCode = String.fromCharCode;
                /**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */ var ucs2decode = function(string) {
                    var output = [];
                    var counter = 0;
                    var length = string.length;
                    while(counter < length){
                        var value = string.charCodeAt(counter++);
                        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                            // It's a high surrogate, and there is a next character.
                            var extra = string.charCodeAt(counter++);
                            if ((extra & 0xFC00) == 0xDC00) output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                            else {
                                // It's an unmatched surrogate; only append this code unit, in case the
                                // next code unit is the high surrogate of a surrogate pair.
                                output.push(value);
                                counter--;
                            }
                        } else output.push(value);
                    }
                    return output;
                };
                /**
 * Converts a digit/integer into a basic code point.
 */ var digitToBasic = function(digit) {
                    //  0..25 map to ASCII a..z or A..Z
                    // 26..35 map to ASCII 0..9
                    return digit + 22 + 75 * (digit < 26);
                };
                /**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */ var adapt = function(delta, numPoints, firstTime) {
                    var k = 0;
                    delta = firstTime ? floor(delta / damp) : delta >> 1;
                    delta += floor(delta / numPoints);
                    for(; delta > baseMinusTMin * tMax >> 1; k += base)delta = floor(delta / baseMinusTMin);
                    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
                };
                /**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */ // eslint-disable-next-line max-statements -- TODO
                var encode = function(input) {
                    var output = [];
                    // Convert the input in UCS-2 to an array of Unicode code points.
                    input = ucs2decode(input);
                    // Cache the length.
                    var inputLength = input.length;
                    // Initialize the state.
                    var n = initialN;
                    var delta = 0;
                    var bias = initialBias;
                    var i, currentValue;
                    // Handle the basic code points.
                    for(i = 0; i < input.length; i++){
                        currentValue = input[i];
                        if (currentValue < 0x80) output.push(stringFromCharCode(currentValue));
                    }
                    var basicLength = output.length; // number of basic code points.
                    var handledCPCount = basicLength; // number of code points that have been handled;
                    // Finish the basic string with a delimiter unless it's empty.
                    if (basicLength) output.push(delimiter);
                    // Main encoding loop:
                    while(handledCPCount < inputLength){
                        // All non-basic code points < n have been handled already. Find the next larger one:
                        var m = maxInt;
                        for(i = 0; i < input.length; i++){
                            currentValue = input[i];
                            if (currentValue >= n && currentValue < m) m = currentValue;
                        }
                        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
                        var handledCPCountPlusOne = handledCPCount + 1;
                        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) throw RangeError(OVERFLOW_ERROR);
                        delta += (m - n) * handledCPCountPlusOne;
                        n = m;
                        for(i = 0; i < input.length; i++){
                            currentValue = input[i];
                            if (currentValue < n && ++delta > maxInt) throw RangeError(OVERFLOW_ERROR);
                            if (currentValue == n) {
                                // Represent delta as a generalized variable-length integer.
                                var q = delta;
                                for(var k = base;; k += base){
                                    var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                                    if (q < t) break;
                                    var qMinusT = q - t;
                                    var baseMinusT = base - t;
                                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                                    q = floor(qMinusT / baseMinusT);
                                }
                                output.push(stringFromCharCode(digitToBasic(q)));
                                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                                delta = 0;
                                ++handledCPCount;
                            }
                        }
                        ++delta;
                        ++n;
                    }
                    return output.join("");
                };
                module1.exports = function(input) {
                    var encoded = [];
                    var labels = input.toLowerCase().replace(regexSeparators, ".").split(".");
                    var i, label;
                    for(i = 0; i < labels.length; i++){
                        label = labels[i];
                        encoded.push(regexNonASCII.test(label) ? "xn--" + encode(label) : label);
                    }
                    return encoded.join(".");
                };
            /***/ },
            /***/ 6091: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var fails = __webpack_require__(7293);
                var whitespaces = __webpack_require__(1361);
                var non = "​\x85᠎";
                // check that a method works with the correct list
                // of whitespaces and has a correct name
                module1.exports = function(METHOD_NAME) {
                    return fails(function() {
                        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
                    });
                };
            /***/ },
            /***/ 3111: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var requireObjectCoercible = __webpack_require__(4488);
                var whitespaces = __webpack_require__(1361);
                var whitespace = "[" + whitespaces + "]";
                var ltrim = RegExp("^" + whitespace + whitespace + "*");
                var rtrim = RegExp(whitespace + whitespace + "*$");
                // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
                var createMethod = function(TYPE) {
                    return function($this) {
                        var string = String(requireObjectCoercible($this));
                        if (TYPE & 1) string = string.replace(ltrim, "");
                        if (TYPE & 2) string = string.replace(rtrim, "");
                        return string;
                    };
                };
                module1.exports = {
                    // `String.prototype.{ trimLeft, trimStart }` methods
                    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
                    start: createMethod(1),
                    // `String.prototype.{ trimRight, trimEnd }` methods
                    // https://tc39.es/ecma262/#sec-string.prototype.trimend
                    end: createMethod(2),
                    // `String.prototype.trim` method
                    // https://tc39.es/ecma262/#sec-string.prototype.trim
                    trim: createMethod(3)
                };
            /***/ },
            /***/ 1400: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toInteger = __webpack_require__(9958);
                var max = Math.max;
                var min = Math.min;
                // Helper for a popular repeating case of the spec:
                // Let integer be ? ToInteger(index).
                // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
                module1.exports = function(index, length) {
                    var integer = toInteger(index);
                    return integer < 0 ? max(integer + length, 0) : min(integer, length);
                };
            /***/ },
            /***/ 7067: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toInteger = __webpack_require__(9958);
                var toLength = __webpack_require__(7466);
                // `ToIndex` abstract operation
                // https://tc39.es/ecma262/#sec-toindex
                module1.exports = function(it) {
                    if (it === undefined) return 0;
                    var number = toInteger(it);
                    var length = toLength(number);
                    if (number !== length) throw RangeError("Wrong length or index");
                    return length;
                };
            /***/ },
            /***/ 5656: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                // toObject with fallback for non-array-like ES3 strings
                var IndexedObject = __webpack_require__(8361);
                var requireObjectCoercible = __webpack_require__(4488);
                module1.exports = function(it) {
                    return IndexedObject(requireObjectCoercible(it));
                };
            /***/ },
            /***/ 9958: /***/ function(module1) {
                var ceil = Math.ceil;
                var floor = Math.floor;
                // `ToInteger` abstract operation
                // https://tc39.es/ecma262/#sec-tointeger
                module1.exports = function(argument) {
                    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
                };
            /***/ },
            /***/ 7466: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toInteger = __webpack_require__(9958);
                var min = Math.min;
                // `ToLength` abstract operation
                // https://tc39.es/ecma262/#sec-tolength
                module1.exports = function(argument) {
                    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
                };
            /***/ },
            /***/ 7908: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var requireObjectCoercible = __webpack_require__(4488);
                // `ToObject` abstract operation
                // https://tc39.es/ecma262/#sec-toobject
                module1.exports = function(argument) {
                    return Object(requireObjectCoercible(argument));
                };
            /***/ },
            /***/ 4590: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toPositiveInteger = __webpack_require__(3002);
                module1.exports = function(it, BYTES) {
                    var offset = toPositiveInteger(it);
                    if (offset % BYTES) throw RangeError("Wrong offset");
                    return offset;
                };
            /***/ },
            /***/ 3002: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toInteger = __webpack_require__(9958);
                module1.exports = function(it) {
                    var result = toInteger(it);
                    if (result < 0) throw RangeError("The argument can't be less than 0");
                    return result;
                };
            /***/ },
            /***/ 7593: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var isObject = __webpack_require__(111);
                // `ToPrimitive` abstract operation
                // https://tc39.es/ecma262/#sec-toprimitive
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                module1.exports = function(input, PREFERRED_STRING) {
                    if (!isObject(input)) return input;
                    var fn, val;
                    if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
                    if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input))) return val;
                    if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };
            /***/ },
            /***/ 1694: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var wellKnownSymbol = __webpack_require__(5112);
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var test = {};
                test[TO_STRING_TAG] = "z";
                module1.exports = String(test) === "[object z]";
            /***/ },
            /***/ 9843: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var global = __webpack_require__(7854);
                var DESCRIPTORS = __webpack_require__(9781);
                var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(3832);
                var ArrayBufferViewCore = __webpack_require__(260);
                var ArrayBufferModule = __webpack_require__(3331);
                var anInstance = __webpack_require__(5787);
                var createPropertyDescriptor = __webpack_require__(9114);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var toLength = __webpack_require__(7466);
                var toIndex = __webpack_require__(7067);
                var toOffset = __webpack_require__(4590);
                var toPrimitive = __webpack_require__(7593);
                var has = __webpack_require__(6656);
                var classof = __webpack_require__(648);
                var isObject = __webpack_require__(111);
                var create = __webpack_require__(30);
                var setPrototypeOf = __webpack_require__(7674);
                var getOwnPropertyNames = __webpack_require__(8006).f;
                var typedArrayFrom = __webpack_require__(7321);
                var forEach = __webpack_require__(2092).forEach;
                var setSpecies = __webpack_require__(6340);
                var definePropertyModule = __webpack_require__(3070);
                var getOwnPropertyDescriptorModule = __webpack_require__(1236);
                var InternalStateModule = __webpack_require__(9909);
                var inheritIfRequired = __webpack_require__(9587);
                var getInternalState = InternalStateModule.get;
                var setInternalState = InternalStateModule.set;
                var nativeDefineProperty = definePropertyModule.f;
                var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                var round = Math.round;
                var RangeError1 = global.RangeError;
                var ArrayBuffer1 = ArrayBufferModule.ArrayBuffer;
                var DataView1 = ArrayBufferModule.DataView;
                var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
                var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
                var TypedArray = ArrayBufferViewCore.TypedArray;
                var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
                var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
                var isTypedArray = ArrayBufferViewCore.isTypedArray;
                var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
                var WRONG_LENGTH = "Wrong length";
                var fromList = function(C, list) {
                    var index = 0;
                    var length = list.length;
                    var result = new (aTypedArrayConstructor(C))(length);
                    while(length > index)result[index] = list[index++];
                    return result;
                };
                var addGetter = function(it, key) {
                    nativeDefineProperty(it, key, {
                        get: function() {
                            return getInternalState(this)[key];
                        }
                    });
                };
                var isArrayBuffer = function(it) {
                    var klass;
                    return it instanceof ArrayBuffer1 || (klass = classof(it)) == "ArrayBuffer" || klass == "SharedArrayBuffer";
                };
                var isTypedArrayIndex = function(target, key) {
                    return isTypedArray(target) && typeof key != "symbol" && key in target && String(+key) == String(key);
                };
                var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
                    return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
                };
                var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
                    if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, "value") && !has(descriptor, "get") && !has(descriptor, "set") && !descriptor.configurable && (!has(descriptor, "writable") || descriptor.writable) && (!has(descriptor, "enumerable") || descriptor.enumerable)) {
                        target[key] = descriptor.value;
                        return target;
                    }
                    return nativeDefineProperty(target, key, descriptor);
                };
                if (DESCRIPTORS) {
                    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                        getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
                        definePropertyModule.f = wrappedDefineProperty;
                        addGetter(TypedArrayPrototype, "buffer");
                        addGetter(TypedArrayPrototype, "byteOffset");
                        addGetter(TypedArrayPrototype, "byteLength");
                        addGetter(TypedArrayPrototype, "length");
                    }
                    $({
                        target: "Object",
                        stat: true,
                        forced: !NATIVE_ARRAY_BUFFER_VIEWS
                    }, {
                        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
                        defineProperty: wrappedDefineProperty
                    });
                    module1.exports = function(TYPE, wrapper, CLAMPED) {
                        var BYTES = TYPE.match(/\d+$/)[0] / 8;
                        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? "Clamped" : "") + "Array";
                        var GETTER = "get" + TYPE;
                        var SETTER = "set" + TYPE;
                        var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
                        var TypedArrayConstructor = NativeTypedArrayConstructor;
                        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
                        var exported = {};
                        var getter = function(that, index) {
                            var data = getInternalState(that);
                            return data.view[GETTER](index * BYTES + data.byteOffset, true);
                        };
                        var setter = function(that, index, value) {
                            var data = getInternalState(that);
                            if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
                            data.view[SETTER](index * BYTES + data.byteOffset, value, true);
                        };
                        var addElement = function(that, index) {
                            nativeDefineProperty(that, index, {
                                get: function() {
                                    return getter(this, index);
                                },
                                set: function(value) {
                                    return setter(this, index, value);
                                },
                                enumerable: true
                            });
                        };
                        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
                            TypedArrayConstructor = wrapper(function(that, data, offset, $length) {
                                anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                                var index = 0;
                                var byteOffset = 0;
                                var buffer, byteLength, length;
                                if (!isObject(data)) {
                                    length = toIndex(data);
                                    byteLength = length * BYTES;
                                    buffer = new ArrayBuffer1(byteLength);
                                } else if (isArrayBuffer(data)) {
                                    buffer = data;
                                    byteOffset = toOffset(offset, BYTES);
                                    var $len = data.byteLength;
                                    if ($length === undefined) {
                                        if ($len % BYTES) throw RangeError1(WRONG_LENGTH);
                                        byteLength = $len - byteOffset;
                                        if (byteLength < 0) throw RangeError1(WRONG_LENGTH);
                                    } else {
                                        byteLength = toLength($length) * BYTES;
                                        if (byteLength + byteOffset > $len) throw RangeError1(WRONG_LENGTH);
                                    }
                                    length = byteLength / BYTES;
                                } else if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                                else return typedArrayFrom.call(TypedArrayConstructor, data);
                                setInternalState(that, {
                                    buffer: buffer,
                                    byteOffset: byteOffset,
                                    byteLength: byteLength,
                                    length: length,
                                    view: new DataView1(buffer)
                                });
                                while(index < length)addElement(that, index++);
                            });
                            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
                            TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
                        } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
                            TypedArrayConstructor = wrapper(function(dummy, data, typedArrayOffset, $length) {
                                anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                                return inheritIfRequired(function() {
                                    if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                                    if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                                    if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                                    return typedArrayFrom.call(TypedArrayConstructor, data);
                                }(), dummy, TypedArrayConstructor);
                            });
                            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
                            forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function(key) {
                                if (!(key in TypedArrayConstructor)) createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
                            });
                            TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
                        }
                        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) createNonEnumerableProperty(TypedArrayConstructorPrototype, "constructor", TypedArrayConstructor);
                        if (TYPED_ARRAY_TAG) createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
                        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
                        $({
                            global: true,
                            forced: TypedArrayConstructor != NativeTypedArrayConstructor,
                            sham: !NATIVE_ARRAY_BUFFER_VIEWS
                        }, exported);
                        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
                        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
                        setSpecies(CONSTRUCTOR_NAME);
                    };
                } else module1.exports = function() {};
            /***/ },
            /***/ 3832: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                /* eslint-disable no-new -- required for testing */ var global = __webpack_require__(7854);
                var fails = __webpack_require__(7293);
                var checkCorrectnessOfIteration = __webpack_require__(7072);
                var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(260).NATIVE_ARRAY_BUFFER_VIEWS;
                var ArrayBuffer1 = global.ArrayBuffer;
                var Int8Array1 = global.Int8Array;
                module1.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function() {
                    Int8Array1(1);
                }) || !fails(function() {
                    new Int8Array1(-1);
                }) || !checkCorrectnessOfIteration(function(iterable) {
                    new Int8Array1();
                    new Int8Array1(null);
                    new Int8Array1(1.5);
                    new Int8Array1(iterable);
                }, true) || fails(function() {
                    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
                    return new Int8Array1(new ArrayBuffer1(2), 1, undefined).length !== 1;
                });
            /***/ },
            /***/ 3074: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var aTypedArrayConstructor = __webpack_require__(260).aTypedArrayConstructor;
                var speciesConstructor = __webpack_require__(6707);
                module1.exports = function(instance, list) {
                    var C = speciesConstructor(instance, instance.constructor);
                    var index = 0;
                    var length = list.length;
                    var result = new (aTypedArrayConstructor(C))(length);
                    while(length > index)result[index] = list[index++];
                    return result;
                };
            /***/ },
            /***/ 7321: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var toObject = __webpack_require__(7908);
                var toLength = __webpack_require__(7466);
                var getIteratorMethod = __webpack_require__(1246);
                var isArrayIteratorMethod = __webpack_require__(7659);
                var bind = __webpack_require__(9974);
                var aTypedArrayConstructor = __webpack_require__(260).aTypedArrayConstructor;
                module1.exports = function from(source /* , mapfn, thisArg */ ) {
                    var O = toObject(source);
                    var argumentsLength = arguments.length;
                    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                    var mapping = mapfn !== undefined;
                    var iteratorMethod = getIteratorMethod(O);
                    var i, length, result, step, iterator, next;
                    if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
                        iterator = iteratorMethod.call(O);
                        next = iterator.next;
                        O = [];
                        while(!(step = next.call(iterator)).done)O.push(step.value);
                    }
                    if (mapping && argumentsLength > 2) mapfn = bind(mapfn, arguments[2], 2);
                    length = toLength(O.length);
                    result = new (aTypedArrayConstructor(this))(length);
                    for(i = 0; length > i; i++)result[i] = mapping ? mapfn(O[i], i) : O[i];
                    return result;
                };
            /***/ },
            /***/ 9711: /***/ function(module1) {
                var id = 0;
                var postfix = Math.random();
                module1.exports = function(key) {
                    return "Symbol(" + String(key === undefined ? "" : key) + ")_" + (++id + postfix).toString(36);
                };
            /***/ },
            /***/ 3307: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var NATIVE_SYMBOL = __webpack_require__(133);
                module1.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
            /***/ },
            /***/ 5112: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var shared = __webpack_require__(2309);
                var has = __webpack_require__(6656);
                var uid = __webpack_require__(9711);
                var NATIVE_SYMBOL = __webpack_require__(133);
                var USE_SYMBOL_AS_UID = __webpack_require__(3307);
                var WellKnownSymbolsStore = shared("wks");
                var Symbol1 = global.Symbol;
                var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol1 : Symbol1 && Symbol1.withoutSetter || uid;
                module1.exports = function(name) {
                    if (!has(WellKnownSymbolsStore, name)) {
                        if (NATIVE_SYMBOL && has(Symbol1, name)) WellKnownSymbolsStore[name] = Symbol1[name];
                        else WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
                    }
                    return WellKnownSymbolsStore[name];
                };
            /***/ },
            /***/ 1361: /***/ function(module1) {
                // a string of all valid unicode whitespaces
                module1.exports = "	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";
            /***/ },
            /***/ 8264: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var global = __webpack_require__(7854);
                var arrayBufferModule = __webpack_require__(3331);
                var setSpecies = __webpack_require__(6340);
                var ARRAY_BUFFER = "ArrayBuffer";
                var ArrayBuffer1 = arrayBufferModule[ARRAY_BUFFER];
                var NativeArrayBuffer = global[ARRAY_BUFFER];
                // `ArrayBuffer` constructor
                // https://tc39.es/ecma262/#sec-arraybuffer-constructor
                $({
                    global: true,
                    forced: NativeArrayBuffer !== ArrayBuffer1
                }, {
                    ArrayBuffer: ArrayBuffer1
                });
                setSpecies(ARRAY_BUFFER);
            /***/ },
            /***/ 2222: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var fails = __webpack_require__(7293);
                var isArray = __webpack_require__(3157);
                var isObject = __webpack_require__(111);
                var toObject = __webpack_require__(7908);
                var toLength = __webpack_require__(7466);
                var createProperty = __webpack_require__(6135);
                var arraySpeciesCreate = __webpack_require__(5417);
                var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
                var wellKnownSymbol = __webpack_require__(5112);
                var V8_VERSION = __webpack_require__(7392);
                var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
                var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
                var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
                // We can't use this feature detection in V8 since it causes
                // deoptimization and serious performance degradation
                // https://github.com/zloirock/core-js/issues/679
                var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
                    var array = [];
                    array[IS_CONCAT_SPREADABLE] = false;
                    return array.concat()[0] !== array;
                });
                var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
                var isConcatSpreadable = function(O) {
                    if (!isObject(O)) return false;
                    var spreadable = O[IS_CONCAT_SPREADABLE];
                    return spreadable !== undefined ? !!spreadable : isArray(O);
                };
                var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
                // `Array.prototype.concat` method
                // https://tc39.es/ecma262/#sec-array.prototype.concat
                // with adding support of @@isConcatSpreadable and @@species
                $({
                    target: "Array",
                    proto: true,
                    forced: FORCED
                }, {
                    // eslint-disable-next-line no-unused-vars -- required for `.length`
                    concat: function concat(arg) {
                        var O = toObject(this);
                        var A = arraySpeciesCreate(O, 0);
                        var n = 0;
                        var i, k, length, len, E;
                        for(i = -1, length = arguments.length; i < length; i++){
                            E = i === -1 ? O : arguments[i];
                            if (isConcatSpreadable(E)) {
                                len = toLength(E.length);
                                if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                                for(k = 0; k < len; k++, n++)if (k in E) createProperty(A, n, E[k]);
                            } else {
                                if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                                createProperty(A, n++, E);
                            }
                        }
                        A.length = n;
                        return A;
                    }
                });
            /***/ },
            /***/ 7327: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var $filter = __webpack_require__(2092).filter;
                var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
                // `Array.prototype.filter` method
                // https://tc39.es/ecma262/#sec-array.prototype.filter
                // with adding support of @@species
                $({
                    target: "Array",
                    proto: true,
                    forced: !HAS_SPECIES_SUPPORT
                }, {
                    filter: function filter(callbackfn /* , thisArg */ ) {
                        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });
            /***/ },
            /***/ 2772: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var $indexOf = __webpack_require__(1318).indexOf;
                var arrayMethodIsStrict = __webpack_require__(9341);
                var nativeIndexOf = [].indexOf;
                var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [
                    1
                ].indexOf(1, -0) < 0;
                var STRICT_METHOD = arrayMethodIsStrict("indexOf");
                // `Array.prototype.indexOf` method
                // https://tc39.es/ecma262/#sec-array.prototype.indexof
                $({
                    target: "Array",
                    proto: true,
                    forced: NEGATIVE_ZERO || !STRICT_METHOD
                }, {
                    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
                        return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });
            /***/ },
            /***/ 6992: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var toIndexedObject = __webpack_require__(5656);
                var addToUnscopables = __webpack_require__(1223);
                var Iterators = __webpack_require__(7497);
                var InternalStateModule = __webpack_require__(9909);
                var defineIterator = __webpack_require__(654);
                var ARRAY_ITERATOR = "Array Iterator";
                var setInternalState = InternalStateModule.set;
                var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
                // `Array.prototype.entries` method
                // https://tc39.es/ecma262/#sec-array.prototype.entries
                // `Array.prototype.keys` method
                // https://tc39.es/ecma262/#sec-array.prototype.keys
                // `Array.prototype.values` method
                // https://tc39.es/ecma262/#sec-array.prototype.values
                // `Array.prototype[@@iterator]` method
                // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
                // `CreateArrayIterator` internal method
                // https://tc39.es/ecma262/#sec-createarrayiterator
                module1.exports = defineIterator(Array, "Array", function(iterated, kind) {
                    setInternalState(this, {
                        type: ARRAY_ITERATOR,
                        target: toIndexedObject(iterated),
                        index: 0,
                        kind: kind // kind
                    });
                // `%ArrayIteratorPrototype%.next` method
                // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
                }, function() {
                    var state = getInternalState(this);
                    var target = state.target;
                    var kind = state.kind;
                    var index = state.index++;
                    if (!target || index >= target.length) {
                        state.target = undefined;
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                    if (kind == "keys") return {
                        value: index,
                        done: false
                    };
                    if (kind == "values") return {
                        value: target[index],
                        done: false
                    };
                    return {
                        value: [
                            index,
                            target[index]
                        ],
                        done: false
                    };
                }, "values");
                // argumentsList[@@iterator] is %ArrayProto_values%
                // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
                // https://tc39.es/ecma262/#sec-createmappedargumentsobject
                Iterators.Arguments = Iterators.Array;
                // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
                addToUnscopables("keys");
                addToUnscopables("values");
                addToUnscopables("entries");
            /***/ },
            /***/ 1249: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var $map = __webpack_require__(2092).map;
                var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
                // `Array.prototype.map` method
                // https://tc39.es/ecma262/#sec-array.prototype.map
                // with adding support of @@species
                $({
                    target: "Array",
                    proto: true,
                    forced: !HAS_SPECIES_SUPPORT
                }, {
                    map: function map(callbackfn /* , thisArg */ ) {
                        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });
            /***/ },
            /***/ 7042: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var isObject = __webpack_require__(111);
                var isArray = __webpack_require__(3157);
                var toAbsoluteIndex = __webpack_require__(1400);
                var toLength = __webpack_require__(7466);
                var toIndexedObject = __webpack_require__(5656);
                var createProperty = __webpack_require__(6135);
                var wellKnownSymbol = __webpack_require__(5112);
                var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
                var SPECIES = wellKnownSymbol("species");
                var nativeSlice = [].slice;
                var max = Math.max;
                // `Array.prototype.slice` method
                // https://tc39.es/ecma262/#sec-array.prototype.slice
                // fallback for not array-like ES3 strings and DOM objects
                $({
                    target: "Array",
                    proto: true,
                    forced: !HAS_SPECIES_SUPPORT
                }, {
                    slice: function slice(start, end) {
                        var O = toIndexedObject(this);
                        var length = toLength(O.length);
                        var k = toAbsoluteIndex(start, length);
                        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
                        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
                        var Constructor, result, n;
                        if (isArray(O)) {
                            Constructor = O.constructor;
                            // cross-realm fallback
                            if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) Constructor = undefined;
                            else if (isObject(Constructor)) {
                                Constructor = Constructor[SPECIES];
                                if (Constructor === null) Constructor = undefined;
                            }
                            if (Constructor === Array || Constructor === undefined) return nativeSlice.call(O, k, fin);
                        }
                        result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
                        for(n = 0; k < fin; k++, n++)if (k in O) createProperty(result, n, O[k]);
                        result.length = n;
                        return result;
                    }
                });
            /***/ },
            /***/ 561: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var toAbsoluteIndex = __webpack_require__(1400);
                var toInteger = __webpack_require__(9958);
                var toLength = __webpack_require__(7466);
                var toObject = __webpack_require__(7908);
                var arraySpeciesCreate = __webpack_require__(5417);
                var createProperty = __webpack_require__(6135);
                var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
                var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
                var max = Math.max;
                var min = Math.min;
                var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
                var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
                // `Array.prototype.splice` method
                // https://tc39.es/ecma262/#sec-array.prototype.splice
                // with adding support of @@species
                $({
                    target: "Array",
                    proto: true,
                    forced: !HAS_SPECIES_SUPPORT
                }, {
                    splice: function splice(start, deleteCount /* , ...items */ ) {
                        var O = toObject(this);
                        var len = toLength(O.length);
                        var actualStart = toAbsoluteIndex(start, len);
                        var argumentsLength = arguments.length;
                        var insertCount, actualDeleteCount, A, k, from, to;
                        if (argumentsLength === 0) insertCount = actualDeleteCount = 0;
                        else if (argumentsLength === 1) {
                            insertCount = 0;
                            actualDeleteCount = len - actualStart;
                        } else {
                            insertCount = argumentsLength - 2;
                            actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
                        }
                        if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
                        A = arraySpeciesCreate(O, actualDeleteCount);
                        for(k = 0; k < actualDeleteCount; k++){
                            from = actualStart + k;
                            if (from in O) createProperty(A, k, O[from]);
                        }
                        A.length = actualDeleteCount;
                        if (insertCount < actualDeleteCount) {
                            for(k = actualStart; k < len - actualDeleteCount; k++){
                                from = k + actualDeleteCount;
                                to = k + insertCount;
                                if (from in O) O[to] = O[from];
                                else delete O[to];
                            }
                            for(k = len; k > len - actualDeleteCount + insertCount; k--)delete O[k - 1];
                        } else if (insertCount > actualDeleteCount) for(k = len - actualDeleteCount; k > actualStart; k--){
                            from = k + actualDeleteCount - 1;
                            to = k + insertCount - 1;
                            if (from in O) O[to] = O[from];
                            else delete O[to];
                        }
                        for(k = 0; k < insertCount; k++)O[k + actualStart] = arguments[k + 2];
                        O.length = len - actualDeleteCount + insertCount;
                        return A;
                    }
                });
            /***/ },
            /***/ 8309: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var DESCRIPTORS = __webpack_require__(9781);
                var defineProperty = __webpack_require__(3070).f;
                var FunctionPrototype = Function.prototype;
                var FunctionPrototypeToString = FunctionPrototype.toString;
                var nameRE = /^\s*function ([^ (]*)/;
                var NAME = "name";
                // Function instances `.name` property
                // https://tc39.es/ecma262/#sec-function-instances-name
                if (DESCRIPTORS && !(NAME in FunctionPrototype)) defineProperty(FunctionPrototype, NAME, {
                    configurable: true,
                    get: function() {
                        try {
                            return FunctionPrototypeToString.call(this).match(nameRE)[1];
                        } catch (error) {
                            return "";
                        }
                    }
                });
            /***/ },
            /***/ 489: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var $ = __webpack_require__(2109);
                var fails = __webpack_require__(7293);
                var toObject = __webpack_require__(7908);
                var nativeGetPrototypeOf = __webpack_require__(9518);
                var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);
                var FAILS_ON_PRIMITIVES = fails(function() {
                    nativeGetPrototypeOf(1);
                });
                // `Object.getPrototypeOf` method
                // https://tc39.es/ecma262/#sec-object.getprototypeof
                $({
                    target: "Object",
                    stat: true,
                    forced: FAILS_ON_PRIMITIVES,
                    sham: !CORRECT_PROTOTYPE_GETTER
                }, {
                    getPrototypeOf: function getPrototypeOf(it) {
                        return nativeGetPrototypeOf(toObject(it));
                    }
                });
            /***/ },
            /***/ 1539: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
                var redefine = __webpack_require__(1320);
                var toString = __webpack_require__(288);
                // `Object.prototype.toString` method
                // https://tc39.es/ecma262/#sec-object.prototype.tostring
                if (!TO_STRING_TAG_SUPPORT) redefine(Object.prototype, "toString", toString, {
                    unsafe: true
                });
            /***/ },
            /***/ 4916: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var exec = __webpack_require__(2261);
                // `RegExp.prototype.exec` method
                // https://tc39.es/ecma262/#sec-regexp.prototype.exec
                $({
                    target: "RegExp",
                    proto: true,
                    forced: /./.exec !== exec
                }, {
                    exec: exec
                });
            /***/ },
            /***/ 9714: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var redefine = __webpack_require__(1320);
                var anObject = __webpack_require__(9670);
                var fails = __webpack_require__(7293);
                var flags = __webpack_require__(7066);
                var TO_STRING = "toString";
                var RegExpPrototype = RegExp.prototype;
                var nativeToString = RegExpPrototype[TO_STRING];
                var NOT_GENERIC = fails(function() {
                    return nativeToString.call({
                        source: "a",
                        flags: "b"
                    }) != "/a/b";
                });
                // FF44- RegExp#toString has a wrong name
                var INCORRECT_NAME = nativeToString.name != TO_STRING;
                // `RegExp.prototype.toString` method
                // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
                if (NOT_GENERIC || INCORRECT_NAME) redefine(RegExp.prototype, TO_STRING, function toString() {
                    var R = anObject(this);
                    var p = String(R.source);
                    var rf = R.flags;
                    var f = String(rf === undefined && R instanceof RegExp && !("flags" in RegExpPrototype) ? flags.call(R) : rf);
                    return "/" + p + "/" + f;
                }, {
                    unsafe: true
                });
            /***/ },
            /***/ 8783: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var charAt = __webpack_require__(8710).charAt;
                var InternalStateModule = __webpack_require__(9909);
                var defineIterator = __webpack_require__(654);
                var STRING_ITERATOR = "String Iterator";
                var setInternalState = InternalStateModule.set;
                var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
                // `String.prototype[@@iterator]` method
                // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
                defineIterator(String, "String", function(iterated) {
                    setInternalState(this, {
                        type: STRING_ITERATOR,
                        string: String(iterated),
                        index: 0
                    });
                // `%StringIteratorPrototype%.next` method
                // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
                }, function next() {
                    var state = getInternalState(this);
                    var string = state.string;
                    var index = state.index;
                    var point;
                    if (index >= string.length) return {
                        value: undefined,
                        done: true
                    };
                    point = charAt(string, index);
                    state.index += point.length;
                    return {
                        value: point,
                        done: false
                    };
                });
            /***/ },
            /***/ 4723: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
                var anObject = __webpack_require__(9670);
                var toLength = __webpack_require__(7466);
                var requireObjectCoercible = __webpack_require__(4488);
                var advanceStringIndex = __webpack_require__(1530);
                var regExpExec = __webpack_require__(7651);
                // @@match logic
                fixRegExpWellKnownSymbolLogic("match", 1, function(MATCH, nativeMatch, maybeCallNative) {
                    return [
                        // `String.prototype.match` method
                        // https://tc39.es/ecma262/#sec-string.prototype.match
                        function match(regexp) {
                            var O = requireObjectCoercible(this);
                            var matcher = regexp == undefined ? undefined : regexp[MATCH];
                            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                        },
                        // `RegExp.prototype[@@match]` method
                        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
                        function(regexp) {
                            var res = maybeCallNative(nativeMatch, regexp, this);
                            if (res.done) return res.value;
                            var rx = anObject(regexp);
                            var S = String(this);
                            if (!rx.global) return regExpExec(rx, S);
                            var fullUnicode = rx.unicode;
                            rx.lastIndex = 0;
                            var A = [];
                            var n = 0;
                            var result;
                            while((result = regExpExec(rx, S)) !== null){
                                var matchStr = String(result[0]);
                                A[n] = matchStr;
                                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                                n++;
                            }
                            return n === 0 ? null : A;
                        }
                    ];
                });
            /***/ },
            /***/ 5306: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
                var anObject = __webpack_require__(9670);
                var toLength = __webpack_require__(7466);
                var toInteger = __webpack_require__(9958);
                var requireObjectCoercible = __webpack_require__(4488);
                var advanceStringIndex = __webpack_require__(1530);
                var getSubstitution = __webpack_require__(647);
                var regExpExec = __webpack_require__(7651);
                var max = Math.max;
                var min = Math.min;
                var maybeToString = function(it) {
                    return it === undefined ? it : String(it);
                };
                // @@replace logic
                fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
                    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
                    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
                    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
                    return [
                        // `String.prototype.replace` method
                        // https://tc39.es/ecma262/#sec-string.prototype.replace
                        function replace(searchValue, replaceValue) {
                            var O = requireObjectCoercible(this);
                            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
                            return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
                        },
                        // `RegExp.prototype[@@replace]` method
                        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
                        function(regexp, replaceValue) {
                            if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                                if (res.done) return res.value;
                            }
                            var rx = anObject(regexp);
                            var S = String(this);
                            var functionalReplace = typeof replaceValue === "function";
                            if (!functionalReplace) replaceValue = String(replaceValue);
                            var global = rx.global;
                            if (global) {
                                var fullUnicode = rx.unicode;
                                rx.lastIndex = 0;
                            }
                            var results = [];
                            while(true){
                                var result = regExpExec(rx, S);
                                if (result === null) break;
                                results.push(result);
                                if (!global) break;
                                var matchStr = String(result[0]);
                                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                            }
                            var accumulatedResult = "";
                            var nextSourcePosition = 0;
                            for(var i = 0; i < results.length; i++){
                                result = results[i];
                                var matched = String(result[0]);
                                var position = max(min(toInteger(result.index), S.length), 0);
                                var captures = [];
                                // NOTE: This is equivalent to
                                //   captures = result.slice(1).map(maybeToString)
                                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                                for(var j = 1; j < result.length; j++)captures.push(maybeToString(result[j]));
                                var namedCaptures = result.groups;
                                if (functionalReplace) {
                                    var replacerArgs = [
                                        matched
                                    ].concat(captures, position, S);
                                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                                if (position >= nextSourcePosition) {
                                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                    nextSourcePosition = position + matched.length;
                                }
                            }
                            return accumulatedResult + S.slice(nextSourcePosition);
                        }
                    ];
                });
            /***/ },
            /***/ 3123: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
                var isRegExp = __webpack_require__(7850);
                var anObject = __webpack_require__(9670);
                var requireObjectCoercible = __webpack_require__(4488);
                var speciesConstructor = __webpack_require__(6707);
                var advanceStringIndex = __webpack_require__(1530);
                var toLength = __webpack_require__(7466);
                var callRegExpExec = __webpack_require__(7651);
                var regexpExec = __webpack_require__(2261);
                var fails = __webpack_require__(7293);
                var arrayPush = [].push;
                var min = Math.min;
                var MAX_UINT32 = 0xFFFFFFFF;
                // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
                var SUPPORTS_Y = !fails(function() {
                    return !RegExp(MAX_UINT32, "y");
                });
                // @@split logic
                fixRegExpWellKnownSymbolLogic("split", 2, function(SPLIT, nativeSplit, maybeCallNative) {
                    var internalSplit;
                    if ("abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
                    "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
                    ".".split(/()()/).length > 1 || "".split(/.?/).length) // based on es5-shim implementation, need to rework it
                    internalSplit = function(separator, limit) {
                        var string = String(requireObjectCoercible(this));
                        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                        if (lim === 0) return [];
                        if (separator === undefined) return [
                            string
                        ];
                        // If `separator` is not a regex, use native split
                        if (!isRegExp(separator)) return nativeSplit.call(string, separator, lim);
                        var output = [];
                        var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
                        var lastLastIndex = 0;
                        // Make `global` and avoid `lastIndex` issues by working with a copy
                        var separatorCopy = new RegExp(separator.source, flags + "g");
                        var match, lastIndex, lastLength;
                        while(match = regexpExec.call(separatorCopy, string)){
                            lastIndex = separatorCopy.lastIndex;
                            if (lastIndex > lastLastIndex) {
                                output.push(string.slice(lastLastIndex, match.index));
                                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                                lastLength = match[0].length;
                                lastLastIndex = lastIndex;
                                if (output.length >= lim) break;
                            }
                            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
                        }
                        if (lastLastIndex === string.length) {
                            if (lastLength || !separatorCopy.test("")) output.push("");
                        } else output.push(string.slice(lastLastIndex));
                        return output.length > lim ? output.slice(0, lim) : output;
                    };
                    else if ("0".split(undefined, 0).length) internalSplit = function(separator, limit) {
                        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
                    };
                    else internalSplit = nativeSplit;
                    return [
                        // `String.prototype.split` method
                        // https://tc39.es/ecma262/#sec-string.prototype.split
                        function split(separator, limit) {
                            var O = requireObjectCoercible(this);
                            var splitter = separator == undefined ? undefined : separator[SPLIT];
                            return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
                        },
                        // `RegExp.prototype[@@split]` method
                        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
                        //
                        // NOTE: This cannot be properly polyfilled in engines that don't support
                        // the 'y' flag.
                        function(regexp, limit) {
                            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
                            if (res.done) return res.value;
                            var rx = anObject(regexp);
                            var S = String(this);
                            var C = speciesConstructor(rx, RegExp);
                            var unicodeMatching = rx.unicode;
                            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
                            // ^(? + rx + ) is needed, in combination with some S slicing, to
                            // simulate the 'y' flag.
                            var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
                            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            if (lim === 0) return [];
                            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                                S
                            ] : [];
                            var p = 0;
                            var q = 0;
                            var A = [];
                            while(q < S.length){
                                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                                var e;
                                if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                                else {
                                    A.push(S.slice(p, q));
                                    if (A.length === lim) return A;
                                    for(var i = 1; i <= z.length - 1; i++){
                                        A.push(z[i]);
                                        if (A.length === lim) return A;
                                    }
                                    q = p = e;
                                }
                            }
                            A.push(S.slice(p));
                            return A;
                        }
                    ];
                }, !SUPPORTS_Y);
            /***/ },
            /***/ 3210: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var $ = __webpack_require__(2109);
                var $trim = __webpack_require__(3111).trim;
                var forcedStringTrimMethod = __webpack_require__(6091);
                // `String.prototype.trim` method
                // https://tc39.es/ecma262/#sec-string.prototype.trim
                $({
                    target: "String",
                    proto: true,
                    forced: forcedStringTrimMethod("trim")
                }, {
                    trim: function trim() {
                        return $trim(this);
                    }
                });
            /***/ },
            /***/ 2990: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $copyWithin = __webpack_require__(1048);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.copyWithin` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
                exportTypedArrayMethod("copyWithin", function copyWithin(target, start /* , end */ ) {
                    return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
                });
            /***/ },
            /***/ 8927: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $every = __webpack_require__(2092).every;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.every` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
                exportTypedArrayMethod("every", function every(callbackfn /* , thisArg */ ) {
                    return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 3105: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $fill = __webpack_require__(1285);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.fill` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
                // eslint-disable-next-line no-unused-vars -- required for `.length`
                exportTypedArrayMethod("fill", function fill(value /* , start, end */ ) {
                    return $fill.apply(aTypedArray(this), arguments);
                });
            /***/ },
            /***/ 5035: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $filter = __webpack_require__(2092).filter;
                var fromSpeciesAndList = __webpack_require__(3074);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.filter` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
                exportTypedArrayMethod("filter", function filter(callbackfn /* , thisArg */ ) {
                    var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    return fromSpeciesAndList(this, list);
                });
            /***/ },
            /***/ 7174: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $findIndex = __webpack_require__(2092).findIndex;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.findIndex` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
                exportTypedArrayMethod("findIndex", function findIndex(predicate /* , thisArg */ ) {
                    return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 4345: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $find = __webpack_require__(2092).find;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.find` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
                exportTypedArrayMethod("find", function find(predicate /* , thisArg */ ) {
                    return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 2846: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $forEach = __webpack_require__(2092).forEach;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.forEach` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
                exportTypedArrayMethod("forEach", function forEach(callbackfn /* , thisArg */ ) {
                    $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 4731: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $includes = __webpack_require__(1318).includes;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.includes` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
                exportTypedArrayMethod("includes", function includes(searchElement /* , fromIndex */ ) {
                    return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 7209: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $indexOf = __webpack_require__(1318).indexOf;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.indexOf` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
                exportTypedArrayMethod("indexOf", function indexOf(searchElement /* , fromIndex */ ) {
                    return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 6319: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var global = __webpack_require__(7854);
                var ArrayBufferViewCore = __webpack_require__(260);
                var ArrayIterators = __webpack_require__(6992);
                var wellKnownSymbol = __webpack_require__(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                var Uint8Array1 = global.Uint8Array;
                var arrayValues = ArrayIterators.values;
                var arrayKeys = ArrayIterators.keys;
                var arrayEntries = ArrayIterators.entries;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var nativeTypedArrayIterator = Uint8Array1 && Uint8Array1.prototype[ITERATOR];
                var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == "values" || nativeTypedArrayIterator.name == undefined);
                var typedArrayValues = function values() {
                    return arrayValues.call(aTypedArray(this));
                };
                // `%TypedArray%.prototype.entries` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
                exportTypedArrayMethod("entries", function entries() {
                    return arrayEntries.call(aTypedArray(this));
                });
                // `%TypedArray%.prototype.keys` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
                exportTypedArrayMethod("keys", function keys() {
                    return arrayKeys.call(aTypedArray(this));
                });
                // `%TypedArray%.prototype.values` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
                exportTypedArrayMethod("values", typedArrayValues, !CORRECT_ITER_NAME);
                // `%TypedArray%.prototype[@@iterator]` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
                exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);
            /***/ },
            /***/ 8867: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $join = [].join;
                // `%TypedArray%.prototype.join` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
                // eslint-disable-next-line no-unused-vars -- required for `.length`
                exportTypedArrayMethod("join", function join(separator) {
                    return $join.apply(aTypedArray(this), arguments);
                });
            /***/ },
            /***/ 7789: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $lastIndexOf = __webpack_require__(6583);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.lastIndexOf` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
                // eslint-disable-next-line no-unused-vars -- required for `.length`
                exportTypedArrayMethod("lastIndexOf", function lastIndexOf(searchElement /* , fromIndex */ ) {
                    return $lastIndexOf.apply(aTypedArray(this), arguments);
                });
            /***/ },
            /***/ 3739: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $map = __webpack_require__(2092).map;
                var speciesConstructor = __webpack_require__(6707);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.map` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
                exportTypedArrayMethod("map", function map(mapfn /* , thisArg */ ) {
                    return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function(O, length) {
                        return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
                    });
                });
            /***/ },
            /***/ 4483: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $reduceRight = __webpack_require__(3671).right;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.reduceRicht` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
                exportTypedArrayMethod("reduceRight", function reduceRight(callbackfn /* , initialValue */ ) {
                    return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 9368: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $reduce = __webpack_require__(3671).left;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.reduce` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
                exportTypedArrayMethod("reduce", function reduce(callbackfn /* , initialValue */ ) {
                    return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 2056: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var floor = Math.floor;
                // `%TypedArray%.prototype.reverse` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
                exportTypedArrayMethod("reverse", function reverse() {
                    var that = this;
                    var length = aTypedArray(that).length;
                    var middle = floor(length / 2);
                    var index = 0;
                    var value;
                    while(index < middle){
                        value = that[index];
                        that[index++] = that[--length];
                        that[length] = value;
                    }
                    return that;
                });
            /***/ },
            /***/ 3462: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var toLength = __webpack_require__(7466);
                var toOffset = __webpack_require__(4590);
                var toObject = __webpack_require__(7908);
                var fails = __webpack_require__(7293);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var FORCED = fails(function() {
                    /* global Int8Array -- safe */ new Int8Array(1).set({});
                });
                // `%TypedArray%.prototype.set` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
                exportTypedArrayMethod("set", function set(arrayLike /* , offset */ ) {
                    aTypedArray(this);
                    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
                    var length = this.length;
                    var src = toObject(arrayLike);
                    var len = toLength(src.length);
                    var index = 0;
                    if (len + offset > length) throw RangeError("Wrong length");
                    while(index < len)this[offset + index] = src[index++];
                }, FORCED);
            /***/ },
            /***/ 678: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var speciesConstructor = __webpack_require__(6707);
                var fails = __webpack_require__(7293);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $slice = [].slice;
                var FORCED = fails(function() {
                    /* global Int8Array -- safe */ new Int8Array(1).slice();
                });
                // `%TypedArray%.prototype.slice` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
                exportTypedArrayMethod("slice", function slice(start, end) {
                    var list = $slice.call(aTypedArray(this), start, end);
                    var C = speciesConstructor(this, this.constructor);
                    var index = 0;
                    var length = list.length;
                    var result = new (aTypedArrayConstructor(C))(length);
                    while(length > index)result[index] = list[index++];
                    return result;
                }, FORCED);
            /***/ },
            /***/ 7462: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var $some = __webpack_require__(2092).some;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.some` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
                exportTypedArrayMethod("some", function some(callbackfn /* , thisArg */ ) {
                    return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                });
            /***/ },
            /***/ 3824: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $sort = [].sort;
                // `%TypedArray%.prototype.sort` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
                exportTypedArrayMethod("sort", function sort(comparefn) {
                    return $sort.call(aTypedArray(this), comparefn);
                });
            /***/ },
            /***/ 5021: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var ArrayBufferViewCore = __webpack_require__(260);
                var toLength = __webpack_require__(7466);
                var toAbsoluteIndex = __webpack_require__(1400);
                var speciesConstructor = __webpack_require__(6707);
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                // `%TypedArray%.prototype.subarray` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
                exportTypedArrayMethod("subarray", function subarray(begin, end) {
                    var O = aTypedArray(this);
                    var length = O.length;
                    var beginIndex = toAbsoluteIndex(begin, length);
                    return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
                });
            /***/ },
            /***/ 2974: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var global = __webpack_require__(7854);
                var ArrayBufferViewCore = __webpack_require__(260);
                var fails = __webpack_require__(7293);
                var Int8Array1 = global.Int8Array;
                var aTypedArray = ArrayBufferViewCore.aTypedArray;
                var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
                var $toLocaleString = [].toLocaleString;
                var $slice = [].slice;
                // iOS Safari 6.x fails here
                var TO_LOCALE_STRING_BUG = !!Int8Array1 && fails(function() {
                    $toLocaleString.call(new Int8Array1(1));
                });
                var FORCED = fails(function() {
                    return [
                        1,
                        2
                    ].toLocaleString() != new Int8Array1([
                        1,
                        2
                    ]).toLocaleString();
                }) || !fails(function() {
                    Int8Array1.prototype.toLocaleString.call([
                        1,
                        2
                    ]);
                });
                // `%TypedArray%.prototype.toLocaleString` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
                exportTypedArrayMethod("toLocaleString", function toLocaleString() {
                    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
                }, FORCED);
            /***/ },
            /***/ 5016: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var exportTypedArrayMethod = __webpack_require__(260).exportTypedArrayMethod;
                var fails = __webpack_require__(7293);
                var global = __webpack_require__(7854);
                var Uint8Array1 = global.Uint8Array;
                var Uint8ArrayPrototype = Uint8Array1 && Uint8Array1.prototype || {};
                var arrayToString = [].toString;
                var arrayJoin = [].join;
                if (fails(function() {
                    arrayToString.call({});
                })) arrayToString = function toString() {
                    return arrayJoin.call(this);
                };
                var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;
                // `%TypedArray%.prototype.toString` method
                // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
                exportTypedArrayMethod("toString", arrayToString, IS_NOT_ARRAY_METHOD);
            /***/ },
            /***/ 2472: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var createTypedArrayConstructor = __webpack_require__(9843);
                // `Uint8Array` constructor
                // https://tc39.es/ecma262/#sec-typedarray-objects
                createTypedArrayConstructor("Uint8", function(init) {
                    return function Uint8Array1(data, byteOffset, length) {
                        return init(this, data, byteOffset, length);
                    };
                });
            /***/ },
            /***/ 4747: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var DOMIterables = __webpack_require__(8324);
                var forEach = __webpack_require__(8533);
                var createNonEnumerableProperty = __webpack_require__(8880);
                for(var COLLECTION_NAME in DOMIterables){
                    var Collection = global[COLLECTION_NAME];
                    var CollectionPrototype = Collection && Collection.prototype;
                    // some Chrome versions have non-configurable methods on DOMTokenList
                    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
                        createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
                    } catch (error) {
                        CollectionPrototype.forEach = forEach;
                    }
                }
            /***/ },
            /***/ 3948: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var global = __webpack_require__(7854);
                var DOMIterables = __webpack_require__(8324);
                var ArrayIteratorMethods = __webpack_require__(6992);
                var createNonEnumerableProperty = __webpack_require__(8880);
                var wellKnownSymbol = __webpack_require__(5112);
                var ITERATOR = wellKnownSymbol("iterator");
                var TO_STRING_TAG = wellKnownSymbol("toStringTag");
                var ArrayValues = ArrayIteratorMethods.values;
                for(var COLLECTION_NAME in DOMIterables){
                    var Collection = global[COLLECTION_NAME];
                    var CollectionPrototype = Collection && Collection.prototype;
                    if (CollectionPrototype) {
                        // some Chrome versions have non-configurable methods on DOMTokenList
                        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
                            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
                        } catch (error) {
                            CollectionPrototype[ITERATOR] = ArrayValues;
                        }
                        if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
                        if (DOMIterables[COLLECTION_NAME]) for(var METHOD_NAME in ArrayIteratorMethods){
                            // some Chrome versions have non-configurable methods on DOMTokenList
                            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                            } catch (error1) {
                                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                            }
                        }
                    }
                }
            /***/ },
            /***/ 1637: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
                __webpack_require__(6992);
                var $ = __webpack_require__(2109);
                var getBuiltIn = __webpack_require__(5005);
                var USE_NATIVE_URL = __webpack_require__(590);
                var redefine = __webpack_require__(1320);
                var redefineAll = __webpack_require__(2248);
                var setToStringTag = __webpack_require__(8003);
                var createIteratorConstructor = __webpack_require__(4994);
                var InternalStateModule = __webpack_require__(9909);
                var anInstance = __webpack_require__(5787);
                var hasOwn = __webpack_require__(6656);
                var bind = __webpack_require__(9974);
                var classof = __webpack_require__(648);
                var anObject = __webpack_require__(9670);
                var isObject = __webpack_require__(111);
                var create = __webpack_require__(30);
                var createPropertyDescriptor = __webpack_require__(9114);
                var getIterator = __webpack_require__(8554);
                var getIteratorMethod = __webpack_require__(1246);
                var wellKnownSymbol = __webpack_require__(5112);
                var $fetch = getBuiltIn("fetch");
                var Headers = getBuiltIn("Headers");
                var ITERATOR = wellKnownSymbol("iterator");
                var URL_SEARCH_PARAMS = "URLSearchParams";
                var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
                var setInternalState = InternalStateModule.set;
                var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
                var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
                var plus = /\+/g;
                var sequences = Array(4);
                var percentSequence = function(bytes) {
                    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp("((?:%[\\da-f]{2}){" + bytes + "})", "gi"));
                };
                var percentDecode = function(sequence) {
                    try {
                        return decodeURIComponent(sequence);
                    } catch (error) {
                        return sequence;
                    }
                };
                var deserialize = function(it) {
                    var result = it.replace(plus, " ");
                    var bytes = 4;
                    try {
                        return decodeURIComponent(result);
                    } catch (error) {
                        while(bytes)result = result.replace(percentSequence(bytes--), percentDecode);
                        return result;
                    }
                };
                var find = /[!'()~]|%20/g;
                var replace = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+"
                };
                var replacer = function(match) {
                    return replace[match];
                };
                var serialize = function(it) {
                    return encodeURIComponent(it).replace(find, replacer);
                };
                var parseSearchParams = function(result, query) {
                    if (query) {
                        var attributes = query.split("&");
                        var index = 0;
                        var attribute, entry;
                        while(index < attributes.length){
                            attribute = attributes[index++];
                            if (attribute.length) {
                                entry = attribute.split("=");
                                result.push({
                                    key: deserialize(entry.shift()),
                                    value: deserialize(entry.join("="))
                                });
                            }
                        }
                    }
                };
                var updateSearchParams = function(query) {
                    this.entries.length = 0;
                    parseSearchParams(this.entries, query);
                };
                var validateArgumentsLength = function(passed, required) {
                    if (passed < required) throw TypeError("Not enough arguments");
                };
                var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
                    setInternalState(this, {
                        type: URL_SEARCH_PARAMS_ITERATOR,
                        iterator: getIterator(getInternalParamsState(params).entries),
                        kind: kind
                    });
                }, "Iterator", function next() {
                    var state = getInternalIteratorState(this);
                    var kind = state.kind;
                    var step = state.iterator.next();
                    var entry = step.value;
                    if (!step.done) step.value = kind === "keys" ? entry.key : kind === "values" ? entry.value : [
                        entry.key,
                        entry.value
                    ];
                    return step;
                });
                // `URLSearchParams` constructor
                // https://url.spec.whatwg.org/#interface-urlsearchparams
                var URLSearchParamsConstructor = function URLSearchParams1() {
                    anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
                    var init = arguments.length > 0 ? arguments[0] : undefined;
                    var that = this;
                    var entries = [];
                    var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
                    setInternalState(that, {
                        type: URL_SEARCH_PARAMS,
                        entries: entries,
                        updateURL: function() {},
                        updateSearchParams: updateSearchParams
                    });
                    if (init !== undefined) {
                        if (isObject(init)) {
                            iteratorMethod = getIteratorMethod(init);
                            if (typeof iteratorMethod === "function") {
                                iterator = iteratorMethod.call(init);
                                next = iterator.next;
                                while(!(step = next.call(iterator)).done){
                                    entryIterator = getIterator(anObject(step.value));
                                    entryNext = entryIterator.next;
                                    if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError("Expected sequence with length 2");
                                    entries.push({
                                        key: first.value + "",
                                        value: second.value + ""
                                    });
                                }
                            } else for(key in init)if (hasOwn(init, key)) entries.push({
                                key: key,
                                value: init[key] + ""
                            });
                        } else parseSearchParams(entries, typeof init === "string" ? init.charAt(0) === "?" ? init.slice(1) : init : init + "");
                    }
                };
                var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
                redefineAll(URLSearchParamsPrototype, {
                    // `URLSearchParams.prototype.append` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
                    append: function append(name, value) {
                        validateArgumentsLength(arguments.length, 2);
                        var state = getInternalParamsState(this);
                        state.entries.push({
                            key: name + "",
                            value: value + ""
                        });
                        state.updateURL();
                    },
                    // `URLSearchParams.prototype.delete` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
                    "delete": function(name) {
                        validateArgumentsLength(arguments.length, 1);
                        var state = getInternalParamsState(this);
                        var entries = state.entries;
                        var key = name + "";
                        var index = 0;
                        while(index < entries.length)if (entries[index].key === key) entries.splice(index, 1);
                        else index++;
                        state.updateURL();
                    },
                    // `URLSearchParams.prototype.get` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
                    get: function get(name) {
                        validateArgumentsLength(arguments.length, 1);
                        var entries = getInternalParamsState(this).entries;
                        var key = name + "";
                        var index = 0;
                        for(; index < entries.length; index++){
                            if (entries[index].key === key) return entries[index].value;
                        }
                        return null;
                    },
                    // `URLSearchParams.prototype.getAll` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
                    getAll: function getAll(name) {
                        validateArgumentsLength(arguments.length, 1);
                        var entries = getInternalParamsState(this).entries;
                        var key = name + "";
                        var result = [];
                        var index = 0;
                        for(; index < entries.length; index++)if (entries[index].key === key) result.push(entries[index].value);
                        return result;
                    },
                    // `URLSearchParams.prototype.has` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
                    has: function has(name) {
                        validateArgumentsLength(arguments.length, 1);
                        var entries = getInternalParamsState(this).entries;
                        var key = name + "";
                        var index = 0;
                        while(index < entries.length){
                            if (entries[index++].key === key) return true;
                        }
                        return false;
                    },
                    // `URLSearchParams.prototype.set` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
                    set: function set(name, value) {
                        validateArgumentsLength(arguments.length, 1);
                        var state = getInternalParamsState(this);
                        var entries = state.entries;
                        var found = false;
                        var key = name + "";
                        var val = value + "";
                        var index = 0;
                        var entry;
                        for(; index < entries.length; index++){
                            entry = entries[index];
                            if (entry.key === key) {
                                if (found) entries.splice(index--, 1);
                                else {
                                    found = true;
                                    entry.value = val;
                                }
                            }
                        }
                        if (!found) entries.push({
                            key: key,
                            value: val
                        });
                        state.updateURL();
                    },
                    // `URLSearchParams.prototype.sort` method
                    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
                    sort: function sort() {
                        var state = getInternalParamsState(this);
                        var entries = state.entries;
                        // Array#sort is not stable in some engines
                        var slice = entries.slice();
                        var entry, entriesIndex, sliceIndex;
                        entries.length = 0;
                        for(sliceIndex = 0; sliceIndex < slice.length; sliceIndex++){
                            entry = slice[sliceIndex];
                            for(entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++)if (entries[entriesIndex].key > entry.key) {
                                entries.splice(entriesIndex, 0, entry);
                                break;
                            }
                            if (entriesIndex === sliceIndex) entries.push(entry);
                        }
                        state.updateURL();
                    },
                    // `URLSearchParams.prototype.forEach` method
                    forEach: function forEach(callback /* , thisArg */ ) {
                        var entries = getInternalParamsState(this).entries;
                        var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
                        var index = 0;
                        var entry;
                        while(index < entries.length){
                            entry = entries[index++];
                            boundFunction(entry.value, entry.key, this);
                        }
                    },
                    // `URLSearchParams.prototype.keys` method
                    keys: function keys() {
                        return new URLSearchParamsIterator(this, "keys");
                    },
                    // `URLSearchParams.prototype.values` method
                    values: function values() {
                        return new URLSearchParamsIterator(this, "values");
                    },
                    // `URLSearchParams.prototype.entries` method
                    entries: function entries() {
                        return new URLSearchParamsIterator(this, "entries");
                    }
                }, {
                    enumerable: true
                });
                // `URLSearchParams.prototype[@@iterator]` method
                redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);
                // `URLSearchParams.prototype.toString` method
                // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
                redefine(URLSearchParamsPrototype, "toString", function toString() {
                    var entries = getInternalParamsState(this).entries;
                    var result = [];
                    var index = 0;
                    var entry;
                    while(index < entries.length){
                        entry = entries[index++];
                        result.push(serialize(entry.key) + "=" + serialize(entry.value));
                    }
                    return result.join("&");
                }, {
                    enumerable: true
                });
                setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
                $({
                    global: true,
                    forced: !USE_NATIVE_URL
                }, {
                    URLSearchParams: URLSearchParamsConstructor
                });
                // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
                // https://github.com/zloirock/core-js/issues/674
                if (!USE_NATIVE_URL && typeof $fetch == "function" && typeof Headers == "function") $({
                    global: true,
                    enumerable: true,
                    forced: true
                }, {
                    fetch: function fetch(input /* , init */ ) {
                        var args = [
                            input
                        ];
                        var init, body, headers;
                        if (arguments.length > 1) {
                            init = arguments[1];
                            if (isObject(init)) {
                                body = init.body;
                                if (classof(body) === URL_SEARCH_PARAMS) {
                                    headers = init.headers ? new Headers(init.headers) : new Headers();
                                    if (!headers.has("content-type")) headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                                    init = create(init, {
                                        body: createPropertyDescriptor(0, String(body)),
                                        headers: createPropertyDescriptor(0, headers)
                                    });
                                }
                            }
                            args.push(init);
                        }
                        return $fetch.apply(this, args);
                    }
                });
                module1.exports = {
                    URLSearchParams: URLSearchParamsConstructor,
                    getState: getInternalParamsState
                };
            /***/ },
            /***/ 285: /***/ function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
                __webpack_require__(8783);
                var $ = __webpack_require__(2109);
                var DESCRIPTORS = __webpack_require__(9781);
                var USE_NATIVE_URL = __webpack_require__(590);
                var global = __webpack_require__(7854);
                var defineProperties = __webpack_require__(6048);
                var redefine = __webpack_require__(1320);
                var anInstance = __webpack_require__(5787);
                var has = __webpack_require__(6656);
                var assign = __webpack_require__(1574);
                var arrayFrom = __webpack_require__(8457);
                var codeAt = __webpack_require__(8710).codeAt;
                var toASCII = __webpack_require__(3197);
                var setToStringTag = __webpack_require__(8003);
                var URLSearchParamsModule = __webpack_require__(1637);
                var InternalStateModule = __webpack_require__(9909);
                var NativeURL = global.URL;
                var URLSearchParams1 = URLSearchParamsModule.URLSearchParams;
                var getInternalSearchParamsState = URLSearchParamsModule.getState;
                var setInternalState = InternalStateModule.set;
                var getInternalURLState = InternalStateModule.getterFor("URL");
                var floor = Math.floor;
                var pow = Math.pow;
                var INVALID_AUTHORITY = "Invalid authority";
                var INVALID_SCHEME = "Invalid scheme";
                var INVALID_HOST = "Invalid host";
                var INVALID_PORT = "Invalid port";
                var ALPHA = /[A-Za-z]/;
                var ALPHANUMERIC = /[\d+-.A-Za-z]/;
                var DIGIT = /\d/;
                var HEX_START = /^(0x|0X)/;
                var OCT = /^[0-7]+$/;
                var DEC = /^\d+$/;
                var HEX = /^[\dA-Fa-f]+$/;
                /* eslint-disable no-control-regex -- safe */ var FORBIDDEN_HOST_CODE_POINT = /[\u0000\t\u000A\u000D #%/:?@[\\]]/;
                var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\t\u000A\u000D #/:?@[\\]]/;
                var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
                var TAB_AND_NEW_LINE = /[\t\u000A\u000D]/g;
                /* eslint-enable no-control-regex -- safe */ var EOF;
                var parseHost = function(url, input) {
                    var result, codePoints, index;
                    if (input.charAt(0) == "[") {
                        if (input.charAt(input.length - 1) != "]") return INVALID_HOST;
                        result = parseIPv6(input.slice(1, -1));
                        if (!result) return INVALID_HOST;
                        url.host = result;
                    // opaque host
                    } else if (!isSpecial(url)) {
                        if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
                        result = "";
                        codePoints = arrayFrom(input);
                        for(index = 0; index < codePoints.length; index++)result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
                        url.host = result;
                    } else {
                        input = toASCII(input);
                        if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
                        result = parseIPv4(input);
                        if (result === null) return INVALID_HOST;
                        url.host = result;
                    }
                };
                var parseIPv4 = function(input) {
                    var parts = input.split(".");
                    var partsLength, numbers, index, part, radix, number, ipv4;
                    if (parts.length && parts[parts.length - 1] == "") parts.pop();
                    partsLength = parts.length;
                    if (partsLength > 4) return input;
                    numbers = [];
                    for(index = 0; index < partsLength; index++){
                        part = parts[index];
                        if (part == "") return input;
                        radix = 10;
                        if (part.length > 1 && part.charAt(0) == "0") {
                            radix = HEX_START.test(part) ? 16 : 8;
                            part = part.slice(radix == 8 ? 1 : 2);
                        }
                        if (part === "") number = 0;
                        else {
                            if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
                            number = parseInt(part, radix);
                        }
                        numbers.push(number);
                    }
                    for(index = 0; index < partsLength; index++){
                        number = numbers[index];
                        if (index == partsLength - 1) {
                            if (number >= pow(256, 5 - partsLength)) return null;
                        } else if (number > 255) return null;
                    }
                    ipv4 = numbers.pop();
                    for(index = 0; index < numbers.length; index++)ipv4 += numbers[index] * pow(256, 3 - index);
                    return ipv4;
                };
                // eslint-disable-next-line max-statements -- TODO
                var parseIPv6 = function(input) {
                    var address = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                    var pieceIndex = 0;
                    var compress = null;
                    var pointer = 0;
                    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
                    var char = function() {
                        return input.charAt(pointer);
                    };
                    if (char() == ":") {
                        if (input.charAt(1) != ":") return;
                        pointer += 2;
                        pieceIndex++;
                        compress = pieceIndex;
                    }
                    while(char()){
                        if (pieceIndex == 8) return;
                        if (char() == ":") {
                            if (compress !== null) return;
                            pointer++;
                            pieceIndex++;
                            compress = pieceIndex;
                            continue;
                        }
                        value = length = 0;
                        while(length < 4 && HEX.test(char())){
                            value = value * 16 + parseInt(char(), 16);
                            pointer++;
                            length++;
                        }
                        if (char() == ".") {
                            if (length == 0) return;
                            pointer -= length;
                            if (pieceIndex > 6) return;
                            numbersSeen = 0;
                            while(char()){
                                ipv4Piece = null;
                                if (numbersSeen > 0) {
                                    if (char() == "." && numbersSeen < 4) pointer++;
                                    else return;
                                }
                                if (!DIGIT.test(char())) return;
                                while(DIGIT.test(char())){
                                    number = parseInt(char(), 10);
                                    if (ipv4Piece === null) ipv4Piece = number;
                                    else if (ipv4Piece == 0) return;
                                    else ipv4Piece = ipv4Piece * 10 + number;
                                    if (ipv4Piece > 255) return;
                                    pointer++;
                                }
                                address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
                                numbersSeen++;
                                if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
                            }
                            if (numbersSeen != 4) return;
                            break;
                        } else if (char() == ":") {
                            pointer++;
                            if (!char()) return;
                        } else if (char()) return;
                        address[pieceIndex++] = value;
                    }
                    if (compress !== null) {
                        swaps = pieceIndex - compress;
                        pieceIndex = 7;
                        while(pieceIndex != 0 && swaps > 0){
                            swap = address[pieceIndex];
                            address[pieceIndex--] = address[compress + swaps - 1];
                            address[compress + --swaps] = swap;
                        }
                    } else if (pieceIndex != 8) return;
                    return address;
                };
                var findLongestZeroSequence = function(ipv6) {
                    var maxIndex = null;
                    var maxLength = 1;
                    var currStart = null;
                    var currLength = 0;
                    var index = 0;
                    for(; index < 8; index++)if (ipv6[index] !== 0) {
                        if (currLength > maxLength) {
                            maxIndex = currStart;
                            maxLength = currLength;
                        }
                        currStart = null;
                        currLength = 0;
                    } else {
                        if (currStart === null) currStart = index;
                        ++currLength;
                    }
                    if (currLength > maxLength) {
                        maxIndex = currStart;
                        maxLength = currLength;
                    }
                    return maxIndex;
                };
                var serializeHost = function(host) {
                    var result, index, compress, ignore0;
                    // ipv4
                    if (typeof host == "number") {
                        result = [];
                        for(index = 0; index < 4; index++){
                            result.unshift(host % 256);
                            host = floor(host / 256);
                        }
                        return result.join(".");
                    // ipv6
                    } else if (typeof host == "object") {
                        result = "";
                        compress = findLongestZeroSequence(host);
                        for(index = 0; index < 8; index++){
                            if (ignore0 && host[index] === 0) continue;
                            if (ignore0) ignore0 = false;
                            if (compress === index) {
                                result += index ? ":" : "::";
                                ignore0 = true;
                            } else {
                                result += host[index].toString(16);
                                if (index < 7) result += ":";
                            }
                        }
                        return "[" + result + "]";
                    }
                    return host;
                };
                var C0ControlPercentEncodeSet = {};
                var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
                    " ": 1,
                    '"': 1,
                    "<": 1,
                    ">": 1,
                    "`": 1
                });
                var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
                    "#": 1,
                    "?": 1,
                    "{": 1,
                    "}": 1
                });
                var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
                    "/": 1,
                    ":": 1,
                    ";": 1,
                    "=": 1,
                    "@": 1,
                    "[": 1,
                    "\\": 1,
                    "]": 1,
                    "^": 1,
                    "|": 1
                });
                var percentEncode = function(char, set) {
                    var code = codeAt(char, 0);
                    return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
                };
                var specialSchemes = {
                    ftp: 21,
                    file: null,
                    http: 80,
                    https: 443,
                    ws: 80,
                    wss: 443
                };
                var isSpecial = function(url) {
                    return has(specialSchemes, url.scheme);
                };
                var includesCredentials = function(url) {
                    return url.username != "" || url.password != "";
                };
                var cannotHaveUsernamePasswordPort = function(url) {
                    return !url.host || url.cannotBeABaseURL || url.scheme == "file";
                };
                var isWindowsDriveLetter = function(string, normalized) {
                    var second;
                    return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ":" || !normalized && second == "|");
                };
                var startsWithWindowsDriveLetter = function(string) {
                    var third;
                    return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === "/" || third === "\\" || third === "?" || third === "#");
                };
                var shortenURLsPath = function(url) {
                    var path = url.path;
                    var pathSize = path.length;
                    if (pathSize && (url.scheme != "file" || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) path.pop();
                };
                var isSingleDot = function(segment) {
                    return segment === "." || segment.toLowerCase() === "%2e";
                };
                var isDoubleDot = function(segment) {
                    segment = segment.toLowerCase();
                    return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
                };
                // States:
                var SCHEME_START = {};
                var SCHEME = {};
                var NO_SCHEME = {};
                var SPECIAL_RELATIVE_OR_AUTHORITY = {};
                var PATH_OR_AUTHORITY = {};
                var RELATIVE = {};
                var RELATIVE_SLASH = {};
                var SPECIAL_AUTHORITY_SLASHES = {};
                var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
                var AUTHORITY = {};
                var HOST = {};
                var HOSTNAME = {};
                var PORT = {};
                var FILE = {};
                var FILE_SLASH = {};
                var FILE_HOST = {};
                var PATH_START = {};
                var PATH = {};
                var CANNOT_BE_A_BASE_URL_PATH = {};
                var QUERY = {};
                var FRAGMENT = {};
                // eslint-disable-next-line max-statements -- TODO
                var parseURL = function(url, input, stateOverride, base) {
                    var state = stateOverride || SCHEME_START;
                    var pointer = 0;
                    var buffer = "";
                    var seenAt = false;
                    var seenBracket = false;
                    var seenPasswordToken = false;
                    var codePoints, char, bufferCodePoints, failure;
                    if (!stateOverride) {
                        url.scheme = "";
                        url.username = "";
                        url.password = "";
                        url.host = null;
                        url.port = null;
                        url.path = [];
                        url.query = null;
                        url.fragment = null;
                        url.cannotBeABaseURL = false;
                        input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, "");
                    }
                    input = input.replace(TAB_AND_NEW_LINE, "");
                    codePoints = arrayFrom(input);
                    while(pointer <= codePoints.length){
                        char = codePoints[pointer];
                        switch(state){
                            case SCHEME_START:
                                if (char && ALPHA.test(char)) {
                                    buffer += char.toLowerCase();
                                    state = SCHEME;
                                } else if (!stateOverride) {
                                    state = NO_SCHEME;
                                    continue;
                                } else return INVALID_SCHEME;
                                break;
                            case SCHEME:
                                if (char && (ALPHANUMERIC.test(char) || char == "+" || char == "-" || char == ".")) buffer += char.toLowerCase();
                                else if (char == ":") {
                                    if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == "file" && (includesCredentials(url) || url.port !== null) || url.scheme == "file" && !url.host)) return;
                                    url.scheme = buffer;
                                    if (stateOverride) {
                                        if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                                        return;
                                    }
                                    buffer = "";
                                    if (url.scheme == "file") state = FILE;
                                    else if (isSpecial(url) && base && base.scheme == url.scheme) state = SPECIAL_RELATIVE_OR_AUTHORITY;
                                    else if (isSpecial(url)) state = SPECIAL_AUTHORITY_SLASHES;
                                    else if (codePoints[pointer + 1] == "/") {
                                        state = PATH_OR_AUTHORITY;
                                        pointer++;
                                    } else {
                                        url.cannotBeABaseURL = true;
                                        url.path.push("");
                                        state = CANNOT_BE_A_BASE_URL_PATH;
                                    }
                                } else if (!stateOverride) {
                                    buffer = "";
                                    state = NO_SCHEME;
                                    pointer = 0;
                                    continue;
                                } else return INVALID_SCHEME;
                                break;
                            case NO_SCHEME:
                                if (!base || base.cannotBeABaseURL && char != "#") return INVALID_SCHEME;
                                if (base.cannotBeABaseURL && char == "#") {
                                    url.scheme = base.scheme;
                                    url.path = base.path.slice();
                                    url.query = base.query;
                                    url.fragment = "";
                                    url.cannotBeABaseURL = true;
                                    state = FRAGMENT;
                                    break;
                                }
                                state = base.scheme == "file" ? FILE : RELATIVE;
                                continue;
                            case SPECIAL_RELATIVE_OR_AUTHORITY:
                                if (char == "/" && codePoints[pointer + 1] == "/") {
                                    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                                    pointer++;
                                } else {
                                    state = RELATIVE;
                                    continue;
                                }
                                break;
                            case PATH_OR_AUTHORITY:
                                if (char == "/") {
                                    state = AUTHORITY;
                                    break;
                                } else {
                                    state = PATH;
                                    continue;
                                }
                            case RELATIVE:
                                url.scheme = base.scheme;
                                if (char == EOF) {
                                    url.username = base.username;
                                    url.password = base.password;
                                    url.host = base.host;
                                    url.port = base.port;
                                    url.path = base.path.slice();
                                    url.query = base.query;
                                } else if (char == "/" || char == "\\" && isSpecial(url)) state = RELATIVE_SLASH;
                                else if (char == "?") {
                                    url.username = base.username;
                                    url.password = base.password;
                                    url.host = base.host;
                                    url.port = base.port;
                                    url.path = base.path.slice();
                                    url.query = "";
                                    state = QUERY;
                                } else if (char == "#") {
                                    url.username = base.username;
                                    url.password = base.password;
                                    url.host = base.host;
                                    url.port = base.port;
                                    url.path = base.path.slice();
                                    url.query = base.query;
                                    url.fragment = "";
                                    state = FRAGMENT;
                                } else {
                                    url.username = base.username;
                                    url.password = base.password;
                                    url.host = base.host;
                                    url.port = base.port;
                                    url.path = base.path.slice();
                                    url.path.pop();
                                    state = PATH;
                                    continue;
                                }
                                break;
                            case RELATIVE_SLASH:
                                if (isSpecial(url) && (char == "/" || char == "\\")) state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                                else if (char == "/") state = AUTHORITY;
                                else {
                                    url.username = base.username;
                                    url.password = base.password;
                                    url.host = base.host;
                                    url.port = base.port;
                                    state = PATH;
                                    continue;
                                }
                                break;
                            case SPECIAL_AUTHORITY_SLASHES:
                                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                                if (char != "/" || buffer.charAt(pointer + 1) != "/") continue;
                                pointer++;
                                break;
                            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
                                if (char != "/" && char != "\\") {
                                    state = AUTHORITY;
                                    continue;
                                }
                                break;
                            case AUTHORITY:
                                if (char == "@") {
                                    if (seenAt) buffer = "%40" + buffer;
                                    seenAt = true;
                                    bufferCodePoints = arrayFrom(buffer);
                                    for(var i = 0; i < bufferCodePoints.length; i++){
                                        var codePoint = bufferCodePoints[i];
                                        if (codePoint == ":" && !seenPasswordToken) {
                                            seenPasswordToken = true;
                                            continue;
                                        }
                                        var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                                        if (seenPasswordToken) url.password += encodedCodePoints;
                                        else url.username += encodedCodePoints;
                                    }
                                    buffer = "";
                                } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url)) {
                                    if (seenAt && buffer == "") return INVALID_AUTHORITY;
                                    pointer -= arrayFrom(buffer).length + 1;
                                    buffer = "";
                                    state = HOST;
                                } else buffer += char;
                                break;
                            case HOST:
                            case HOSTNAME:
                                if (stateOverride && url.scheme == "file") {
                                    state = FILE_HOST;
                                    continue;
                                } else if (char == ":" && !seenBracket) {
                                    if (buffer == "") return INVALID_HOST;
                                    failure = parseHost(url, buffer);
                                    if (failure) return failure;
                                    buffer = "";
                                    state = PORT;
                                    if (stateOverride == HOSTNAME) return;
                                } else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url)) {
                                    if (isSpecial(url) && buffer == "") return INVALID_HOST;
                                    if (stateOverride && buffer == "" && (includesCredentials(url) || url.port !== null)) return;
                                    failure = parseHost(url, buffer);
                                    if (failure) return failure;
                                    buffer = "";
                                    state = PATH_START;
                                    if (stateOverride) return;
                                    continue;
                                } else {
                                    if (char == "[") seenBracket = true;
                                    else if (char == "]") seenBracket = false;
                                    buffer += char;
                                }
                                break;
                            case PORT:
                                if (DIGIT.test(char)) buffer += char;
                                else if (char == EOF || char == "/" || char == "?" || char == "#" || char == "\\" && isSpecial(url) || stateOverride) {
                                    if (buffer != "") {
                                        var port = parseInt(buffer, 10);
                                        if (port > 0xFFFF) return INVALID_PORT;
                                        url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                                        buffer = "";
                                    }
                                    if (stateOverride) return;
                                    state = PATH_START;
                                    continue;
                                } else return INVALID_PORT;
                                break;
                            case FILE:
                                url.scheme = "file";
                                if (char == "/" || char == "\\") state = FILE_SLASH;
                                else if (base && base.scheme == "file") {
                                    if (char == EOF) {
                                        url.host = base.host;
                                        url.path = base.path.slice();
                                        url.query = base.query;
                                    } else if (char == "?") {
                                        url.host = base.host;
                                        url.path = base.path.slice();
                                        url.query = "";
                                        state = QUERY;
                                    } else if (char == "#") {
                                        url.host = base.host;
                                        url.path = base.path.slice();
                                        url.query = base.query;
                                        url.fragment = "";
                                        state = FRAGMENT;
                                    } else {
                                        if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(""))) {
                                            url.host = base.host;
                                            url.path = base.path.slice();
                                            shortenURLsPath(url);
                                        }
                                        state = PATH;
                                        continue;
                                    }
                                } else {
                                    state = PATH;
                                    continue;
                                }
                                break;
                            case FILE_SLASH:
                                if (char == "/" || char == "\\") {
                                    state = FILE_HOST;
                                    break;
                                }
                                if (base && base.scheme == "file" && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(""))) {
                                    if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
                                    else url.host = base.host;
                                }
                                state = PATH;
                                continue;
                            case FILE_HOST:
                                if (char == EOF || char == "/" || char == "\\" || char == "?" || char == "#") {
                                    if (!stateOverride && isWindowsDriveLetter(buffer)) state = PATH;
                                    else if (buffer == "") {
                                        url.host = "";
                                        if (stateOverride) return;
                                        state = PATH_START;
                                    } else {
                                        failure = parseHost(url, buffer);
                                        if (failure) return failure;
                                        if (url.host == "localhost") url.host = "";
                                        if (stateOverride) return;
                                        buffer = "";
                                        state = PATH_START;
                                    }
                                    continue;
                                } else buffer += char;
                                break;
                            case PATH_START:
                                if (isSpecial(url)) {
                                    state = PATH;
                                    if (char != "/" && char != "\\") continue;
                                } else if (!stateOverride && char == "?") {
                                    url.query = "";
                                    state = QUERY;
                                } else if (!stateOverride && char == "#") {
                                    url.fragment = "";
                                    state = FRAGMENT;
                                } else if (char != EOF) {
                                    state = PATH;
                                    if (char != "/") continue;
                                }
                                break;
                            case PATH:
                                if (char == EOF || char == "/" || char == "\\" && isSpecial(url) || !stateOverride && (char == "?" || char == "#")) {
                                    if (isDoubleDot(buffer)) {
                                        shortenURLsPath(url);
                                        if (char != "/" && !(char == "\\" && isSpecial(url))) url.path.push("");
                                    } else if (isSingleDot(buffer)) {
                                        if (char != "/" && !(char == "\\" && isSpecial(url))) url.path.push("");
                                    } else {
                                        if (url.scheme == "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                                            if (url.host) url.host = "";
                                            buffer = buffer.charAt(0) + ":"; // normalize windows drive letter
                                        }
                                        url.path.push(buffer);
                                    }
                                    buffer = "";
                                    if (url.scheme == "file" && (char == EOF || char == "?" || char == "#")) while(url.path.length > 1 && url.path[0] === "")url.path.shift();
                                    if (char == "?") {
                                        url.query = "";
                                        state = QUERY;
                                    } else if (char == "#") {
                                        url.fragment = "";
                                        state = FRAGMENT;
                                    }
                                } else buffer += percentEncode(char, pathPercentEncodeSet);
                                break;
                            case CANNOT_BE_A_BASE_URL_PATH:
                                if (char == "?") {
                                    url.query = "";
                                    state = QUERY;
                                } else if (char == "#") {
                                    url.fragment = "";
                                    state = FRAGMENT;
                                } else if (char != EOF) url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
                                break;
                            case QUERY:
                                if (!stateOverride && char == "#") {
                                    url.fragment = "";
                                    state = FRAGMENT;
                                } else if (char != EOF) {
                                    if (char == "'" && isSpecial(url)) url.query += "%27";
                                    else if (char == "#") url.query += "%23";
                                    else url.query += percentEncode(char, C0ControlPercentEncodeSet);
                                }
                                break;
                            case FRAGMENT:
                                if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
                                break;
                        }
                        pointer++;
                    }
                };
                // `URL` constructor
                // https://url.spec.whatwg.org/#url-class
                var URLConstructor = function URL1(url /* , base */ ) {
                    var that = anInstance(this, URLConstructor, "URL");
                    var base = arguments.length > 1 ? arguments[1] : undefined;
                    var urlString = String(url);
                    var state = setInternalState(that, {
                        type: "URL"
                    });
                    var baseState, failure;
                    if (base !== undefined) {
                        if (base instanceof URLConstructor) baseState = getInternalURLState(base);
                        else {
                            failure = parseURL(baseState = {}, String(base));
                            if (failure) throw TypeError(failure);
                        }
                    }
                    failure = parseURL(state, urlString, null, baseState);
                    if (failure) throw TypeError(failure);
                    var searchParams = state.searchParams = new URLSearchParams1();
                    var searchParamsState = getInternalSearchParamsState(searchParams);
                    searchParamsState.updateSearchParams(state.query);
                    searchParamsState.updateURL = function() {
                        state.query = String(searchParams) || null;
                    };
                    if (!DESCRIPTORS) {
                        that.href = serializeURL.call(that);
                        that.origin = getOrigin.call(that);
                        that.protocol = getProtocol.call(that);
                        that.username = getUsername.call(that);
                        that.password = getPassword.call(that);
                        that.host = getHost.call(that);
                        that.hostname = getHostname.call(that);
                        that.port = getPort.call(that);
                        that.pathname = getPathname.call(that);
                        that.search = getSearch.call(that);
                        that.searchParams = getSearchParams.call(that);
                        that.hash = getHash.call(that);
                    }
                };
                var URLPrototype = URLConstructor.prototype;
                var serializeURL = function() {
                    var url = getInternalURLState(this);
                    var scheme = url.scheme;
                    var username = url.username;
                    var password = url.password;
                    var host = url.host;
                    var port = url.port;
                    var path = url.path;
                    var query = url.query;
                    var fragment = url.fragment;
                    var output = scheme + ":";
                    if (host !== null) {
                        output += "//";
                        if (includesCredentials(url)) output += username + (password ? ":" + password : "") + "@";
                        output += serializeHost(host);
                        if (port !== null) output += ":" + port;
                    } else if (scheme == "file") output += "//";
                    output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "";
                    if (query !== null) output += "?" + query;
                    if (fragment !== null) output += "#" + fragment;
                    return output;
                };
                var getOrigin = function() {
                    var url = getInternalURLState(this);
                    var scheme = url.scheme;
                    var port = url.port;
                    if (scheme == "blob") try {
                        return new URL(scheme.path[0]).origin;
                    } catch (error) {
                        return "null";
                    }
                    if (scheme == "file" || !isSpecial(url)) return "null";
                    return scheme + "://" + serializeHost(url.host) + (port !== null ? ":" + port : "");
                };
                var getProtocol = function() {
                    return getInternalURLState(this).scheme + ":";
                };
                var getUsername = function() {
                    return getInternalURLState(this).username;
                };
                var getPassword = function() {
                    return getInternalURLState(this).password;
                };
                var getHost = function() {
                    var url = getInternalURLState(this);
                    var host = url.host;
                    var port = url.port;
                    return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
                };
                var getHostname = function() {
                    var host = getInternalURLState(this).host;
                    return host === null ? "" : serializeHost(host);
                };
                var getPort = function() {
                    var port = getInternalURLState(this).port;
                    return port === null ? "" : String(port);
                };
                var getPathname = function() {
                    var url = getInternalURLState(this);
                    var path = url.path;
                    return url.cannotBeABaseURL ? path[0] : path.length ? "/" + path.join("/") : "";
                };
                var getSearch = function() {
                    var query = getInternalURLState(this).query;
                    return query ? "?" + query : "";
                };
                var getSearchParams = function() {
                    return getInternalURLState(this).searchParams;
                };
                var getHash = function() {
                    var fragment = getInternalURLState(this).fragment;
                    return fragment ? "#" + fragment : "";
                };
                var accessorDescriptor = function(getter, setter) {
                    return {
                        get: getter,
                        set: setter,
                        configurable: true,
                        enumerable: true
                    };
                };
                if (DESCRIPTORS) defineProperties(URLPrototype, {
                    // `URL.prototype.href` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-href
                    href: accessorDescriptor(serializeURL, function(href) {
                        var url = getInternalURLState(this);
                        var urlString = String(href);
                        var failure = parseURL(url, urlString);
                        if (failure) throw TypeError(failure);
                        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
                    }),
                    // `URL.prototype.origin` getter
                    // https://url.spec.whatwg.org/#dom-url-origin
                    origin: accessorDescriptor(getOrigin),
                    // `URL.prototype.protocol` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-protocol
                    protocol: accessorDescriptor(getProtocol, function(protocol) {
                        var url = getInternalURLState(this);
                        parseURL(url, String(protocol) + ":", SCHEME_START);
                    }),
                    // `URL.prototype.username` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-username
                    username: accessorDescriptor(getUsername, function(username) {
                        var url = getInternalURLState(this);
                        var codePoints = arrayFrom(String(username));
                        if (cannotHaveUsernamePasswordPort(url)) return;
                        url.username = "";
                        for(var i = 0; i < codePoints.length; i++)url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                    }),
                    // `URL.prototype.password` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-password
                    password: accessorDescriptor(getPassword, function(password) {
                        var url = getInternalURLState(this);
                        var codePoints = arrayFrom(String(password));
                        if (cannotHaveUsernamePasswordPort(url)) return;
                        url.password = "";
                        for(var i = 0; i < codePoints.length; i++)url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
                    }),
                    // `URL.prototype.host` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-host
                    host: accessorDescriptor(getHost, function(host) {
                        var url = getInternalURLState(this);
                        if (url.cannotBeABaseURL) return;
                        parseURL(url, String(host), HOST);
                    }),
                    // `URL.prototype.hostname` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-hostname
                    hostname: accessorDescriptor(getHostname, function(hostname) {
                        var url = getInternalURLState(this);
                        if (url.cannotBeABaseURL) return;
                        parseURL(url, String(hostname), HOSTNAME);
                    }),
                    // `URL.prototype.port` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-port
                    port: accessorDescriptor(getPort, function(port) {
                        var url = getInternalURLState(this);
                        if (cannotHaveUsernamePasswordPort(url)) return;
                        port = String(port);
                        if (port == "") url.port = null;
                        else parseURL(url, port, PORT);
                    }),
                    // `URL.prototype.pathname` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-pathname
                    pathname: accessorDescriptor(getPathname, function(pathname) {
                        var url = getInternalURLState(this);
                        if (url.cannotBeABaseURL) return;
                        url.path = [];
                        parseURL(url, pathname + "", PATH_START);
                    }),
                    // `URL.prototype.search` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-search
                    search: accessorDescriptor(getSearch, function(search) {
                        var url = getInternalURLState(this);
                        search = String(search);
                        if (search == "") url.query = null;
                        else {
                            if ("?" == search.charAt(0)) search = search.slice(1);
                            url.query = "";
                            parseURL(url, search, QUERY);
                        }
                        getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
                    }),
                    // `URL.prototype.searchParams` getter
                    // https://url.spec.whatwg.org/#dom-url-searchparams
                    searchParams: accessorDescriptor(getSearchParams),
                    // `URL.prototype.hash` accessors pair
                    // https://url.spec.whatwg.org/#dom-url-hash
                    hash: accessorDescriptor(getHash, function(hash) {
                        var url = getInternalURLState(this);
                        hash = String(hash);
                        if (hash == "") {
                            url.fragment = null;
                            return;
                        }
                        if ("#" == hash.charAt(0)) hash = hash.slice(1);
                        url.fragment = "";
                        parseURL(url, hash, FRAGMENT);
                    })
                });
                // `URL.prototype.toJSON` method
                // https://url.spec.whatwg.org/#dom-url-tojson
                redefine(URLPrototype, "toJSON", function toJSON() {
                    return serializeURL.call(this);
                }, {
                    enumerable: true
                });
                // `URL.prototype.toString` method
                // https://url.spec.whatwg.org/#URL-stringification-behavior
                redefine(URLPrototype, "toString", function toString() {
                    return serializeURL.call(this);
                }, {
                    enumerable: true
                });
                if (NativeURL) {
                    var nativeCreateObjectURL = NativeURL.createObjectURL;
                    var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
                    // `URL.createObjectURL` method
                    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
                    // eslint-disable-next-line no-unused-vars -- required for `.length`
                    if (nativeCreateObjectURL) redefine(URLConstructor, "createObjectURL", function createObjectURL(blob) {
                        return nativeCreateObjectURL.apply(NativeURL, arguments);
                    });
                    // `URL.revokeObjectURL` method
                    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
                    // eslint-disable-next-line no-unused-vars -- required for `.length`
                    if (nativeRevokeObjectURL) redefine(URLConstructor, "revokeObjectURL", function revokeObjectURL(url) {
                        return nativeRevokeObjectURL.apply(NativeURL, arguments);
                    });
                }
                setToStringTag(URLConstructor, "URL");
                $({
                    global: true,
                    forced: !USE_NATIVE_URL,
                    sham: !DESCRIPTORS
                }, {
                    URL: URLConstructor
                });
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (__webpack_module_cache__[moduleId]) /******/ return __webpack_module_cache__[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = function(exports, definition) {
                /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/global */ /******/ !function() {
            /******/ __webpack_require__.g = function() {
                /******/ if (typeof globalThis === "object") return globalThis;
                /******/ try {
                    /******/ return this || new Function("return this")();
                /******/ } catch (e) {
                    /******/ if (typeof window === "object") return window;
                /******/ }
            /******/ }();
        /******/ }();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
            /******/ __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        /******/ }();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function(exports) {
                /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                /******/ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /******/ };
        /******/ }();
        /******/ /************************************************************************/ var __webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be in strict mode.
        !function() {
            "use strict";
            // ESM COMPAT FLAG
            __webpack_require__.r(__webpack_exports__);
            // EXPORTS
            __webpack_require__.d(__webpack_exports__, {
                "Dropzone": function() {
                    return /* reexport */ Dropzone;
                },
                "default": function() {
                    return /* binding */ dropzone_dist;
                }
            });
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
            var es_array_concat = __webpack_require__(2222);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
            var es_array_filter = __webpack_require__(7327);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
            var es_array_index_of = __webpack_require__(2772);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
            var es_array_iterator = __webpack_require__(6992);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
            var es_array_map = __webpack_require__(1249);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
            var es_array_slice = __webpack_require__(7042);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
            var es_array_splice = __webpack_require__(561);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.constructor.js
            var es_array_buffer_constructor = __webpack_require__(8264);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
            var es_function_name = __webpack_require__(8309);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
            var es_object_get_prototype_of = __webpack_require__(489);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
            var es_object_to_string = __webpack_require__(1539);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
            var es_regexp_exec = __webpack_require__(4916);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
            var es_regexp_to_string = __webpack_require__(9714);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
            var es_string_iterator = __webpack_require__(8783);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
            var es_string_match = __webpack_require__(4723);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
            var es_string_replace = __webpack_require__(5306);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
            var es_string_split = __webpack_require__(3123);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
            var es_string_trim = __webpack_require__(3210);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
            var es_typed_array_uint8_array = __webpack_require__(2472);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
            var es_typed_array_copy_within = __webpack_require__(2990);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
            var es_typed_array_every = __webpack_require__(8927);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
            var es_typed_array_fill = __webpack_require__(3105);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
            var es_typed_array_filter = __webpack_require__(5035);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
            var es_typed_array_find = __webpack_require__(4345);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
            var es_typed_array_find_index = __webpack_require__(7174);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
            var es_typed_array_for_each = __webpack_require__(2846);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
            var es_typed_array_includes = __webpack_require__(4731);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
            var es_typed_array_index_of = __webpack_require__(7209);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
            var es_typed_array_iterator = __webpack_require__(6319);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
            var es_typed_array_join = __webpack_require__(8867);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
            var es_typed_array_last_index_of = __webpack_require__(7789);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
            var es_typed_array_map = __webpack_require__(3739);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
            var es_typed_array_reduce = __webpack_require__(9368);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
            var es_typed_array_reduce_right = __webpack_require__(4483);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
            var es_typed_array_reverse = __webpack_require__(2056);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
            var es_typed_array_set = __webpack_require__(3462);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
            var es_typed_array_slice = __webpack_require__(678);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
            var es_typed_array_some = __webpack_require__(7462);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
            var es_typed_array_sort = __webpack_require__(3824);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
            var es_typed_array_subarray = __webpack_require__(5021);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
            var es_typed_array_to_locale_string = __webpack_require__(2974);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
            var es_typed_array_to_string = __webpack_require__(5016);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
            var web_dom_collections_for_each = __webpack_require__(4747);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
            var web_dom_collections_iterator = __webpack_require__(3948);
            // EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
            var web_url = __webpack_require__(285);
            function _createForOfIteratorHelper(o, allowArrayLike) {
                var it;
                if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                        if (it) o = it;
                        var i = 0;
                        var F = function F() {};
                        return {
                            s: F,
                            n: function n() {
                                if (i >= o.length) return {
                                    done: true
                                };
                                return {
                                    done: false,
                                    value: o[i++]
                                };
                            },
                            e: function e(_e) {
                                throw _e;
                            },
                            f: F
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var normalCompletion = true, didErr = false, err;
                return {
                    s: function s() {
                        it = o[Symbol.iterator]();
                    },
                    n: function n() {
                        var step = it.next();
                        normalCompletion = step.done;
                        return step;
                    },
                    e: function e(_e2) {
                        didErr = true;
                        err = _e2;
                    },
                    f: function f() {
                        try {
                            if (!normalCompletion && it.return != null) it.return();
                        } finally{
                            if (didErr) throw err;
                        }
                    }
                };
            }
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            // The Emitter class provides the ability to call `.on()` on Dropzone to listen
            // to events.
            // It is strongly based on component's emitter class, and I removed the
            // functionality because of the dependency hell with different frameworks.
            var Emitter = /*#__PURE__*/ function() {
                function Emitter() {
                    _classCallCheck(this, Emitter);
                }
                _createClass(Emitter, [
                    {
                        key: "on",
                        value: function on(event, fn) {
                            this._callbacks = this._callbacks || {}; // Create namespace for this event
                            if (!this._callbacks[event]) this._callbacks[event] = [];
                            this._callbacks[event].push(fn);
                            return this;
                        }
                    },
                    {
                        key: "emit",
                        value: function emit(event) {
                            this._callbacks = this._callbacks || {};
                            var callbacks = this._callbacks[event];
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                            if (callbacks) {
                                var _iterator = _createForOfIteratorHelper(callbacks, true), _step;
                                try {
                                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                                        var callback = _step.value;
                                        callback.apply(this, args);
                                    }
                                } catch (err) {
                                    _iterator.e(err);
                                } finally{
                                    _iterator.f();
                                }
                            } // trigger a corresponding DOM event
                            if (this.element) this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
                                args: args
                            }));
                            return this;
                        }
                    },
                    {
                        key: "makeEvent",
                        value: function makeEvent(eventName, detail) {
                            var params = {
                                bubbles: true,
                                cancelable: true,
                                detail: detail
                            };
                            if (typeof window.CustomEvent === "function") return new CustomEvent(eventName, params);
                            else {
                                // IE 11 support
                                // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
                                var evt = document.createEvent("CustomEvent");
                                evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
                                return evt;
                            }
                        } // Remove event listener for given event. If fn is not provided, all event
                    },
                    {
                        key: "off",
                        value: function off(event, fn) {
                            if (!this._callbacks || arguments.length === 0) {
                                this._callbacks = {};
                                return this;
                            } // specific event
                            var callbacks = this._callbacks[event];
                            if (!callbacks) return this;
                             // remove all handlers
                            if (arguments.length === 1) {
                                delete this._callbacks[event];
                                return this;
                            } // remove specific handler
                            for(var i = 0; i < callbacks.length; i++){
                                var callback = callbacks[i];
                                if (callback === fn) {
                                    callbacks.splice(i, 1);
                                    break;
                                }
                            }
                            return this;
                        }
                    }
                ]);
                return Emitter;
            }();
            // Module
            var code = '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ';
            // Exports
            /* harmony default export */ var preview_template = code;
            function options_createForOfIteratorHelper(o, allowArrayLike) {
                var it;
                if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                    if (Array.isArray(o) || (it = options_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                        if (it) o = it;
                        var i = 0;
                        var F = function F() {};
                        return {
                            s: F,
                            n: function n() {
                                if (i >= o.length) return {
                                    done: true
                                };
                                return {
                                    done: false,
                                    value: o[i++]
                                };
                            },
                            e: function e(_e) {
                                throw _e;
                            },
                            f: F
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var normalCompletion = true, didErr = false, err;
                return {
                    s: function s() {
                        it = o[Symbol.iterator]();
                    },
                    n: function n() {
                        var step = it.next();
                        normalCompletion = step.done;
                        return step;
                    },
                    e: function e(_e2) {
                        didErr = true;
                        err = _e2;
                    },
                    f: function f() {
                        try {
                            if (!normalCompletion && it.return != null) it.return();
                        } finally{
                            if (didErr) throw err;
                        }
                    }
                };
            }
            function options_unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return options_arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return options_arrayLikeToArray(o, minLen);
            }
            function options_arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            var defaultOptions = {
                /**
   * Has to be specified on elements other than form (or when the form
   * doesn't have an `action` attribute). You can also
   * provide a function that will be called with `files` and
   * must return the url (since `v3.12.0`)
   */ url: null,
                /**
   * Can be changed to `"put"` if necessary. You can also provide a function
   * that will be called with `files` and must return the method (since `v3.12.0`).
   */ method: "post",
                /**
   * Will be set on the XHRequest.
   */ withCredentials: false,
                /**
   * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
   * If set to null or 0, no timeout is going to be set.
   */ timeout: null,
                /**
   * How many file uploads to process in parallel (See the
   * Enqueuing file uploads documentation section for more info)
   */ parallelUploads: 2,
                /**
   * Whether to send multiple files in one request. If
   * this it set to true, then the fallback file input element will
   * have the `multiple` attribute as well. This option will
   * also trigger additional events (like `processingmultiple`). See the events
   * documentation section for more information.
   */ uploadMultiple: false,
                /**
   * Whether you want files to be uploaded in chunks to your server. This can't be
   * used in combination with `uploadMultiple`.
   *
   * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
   */ chunking: false,
                /**
   * If `chunking` is enabled, this defines whether **every** file should be chunked,
   * even if the file size is below chunkSize. This means, that the additional chunk
   * form data will be submitted and the `chunksUploaded` callback will be invoked.
   */ forceChunking: false,
                /**
   * If `chunking` is `true`, then this defines the chunk size in bytes.
   */ chunkSize: 2000000,
                /**
   * If `true`, the individual chunks of a file are being uploaded simultaneously.
   */ parallelChunkUploads: false,
                /**
   * Whether a chunk should be retried if it fails.
   */ retryChunks: false,
                /**
   * If `retryChunks` is true, how many times should it be retried.
   */ retryChunksLimit: 3,
                /**
   * The maximum filesize (in bytes) that is allowed to be uploaded.
   */ maxFilesize: 256,
                /**
   * The name of the file param that gets transferred.
   * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
   * Dropzone will append `[]` to the name.
   */ paramName: "file",
                /**
   * Whether thumbnails for images should be generated
   */ createImageThumbnails: true,
                /**
   * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
   */ maxThumbnailFilesize: 10,
                /**
   * If `null`, the ratio of the image will be used to calculate it.
   */ thumbnailWidth: 120,
                /**
   * The same as `thumbnailWidth`. If both are null, images will not be resized.
   */ thumbnailHeight: 120,
                /**
   * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
   * Can be either `contain` or `crop`.
   */ thumbnailMethod: "crop",
                /**
   * If set, images will be resized to these dimensions before being **uploaded**.
   * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
   * ratio of the file will be preserved.
   *
   * The `options.transformFile` function uses these options, so if the `transformFile` function
   * is overridden, these options don't do anything.
   */ resizeWidth: null,
                /**
   * See `resizeWidth`.
   */ resizeHeight: null,
                /**
   * The mime type of the resized image (before it gets uploaded to the server).
   * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
   * See `resizeWidth` for more information.
   */ resizeMimeType: null,
                /**
   * The quality of the resized images. See `resizeWidth`.
   */ resizeQuality: 0.8,
                /**
   * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
   * Can be either `contain` or `crop`.
   */ resizeMethod: "contain",
                /**
   * The base that is used to calculate the **displayed** filesize. You can
   * change this to 1024 if you would rather display kibibytes, mebibytes,
   * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
   * not `1 kilobyte`. You can change this to `1024` if you don't care about
   * validity.
   */ filesizeBase: 1000,
                /**
   * If not `null` defines how many files this Dropzone handles. If it exceeds,
   * the event `maxfilesexceeded` will be called. The dropzone element gets the
   * class `dz-max-files-reached` accordingly so you can provide visual
   * feedback.
   */ maxFiles: null,
                /**
   * An optional object to send additional headers to the server. Eg:
   * `{ "My-Awesome-Header": "header value" }`
   */ headers: null,
                /**
   * If `true`, the dropzone element itself will be clickable, if `false`
   * nothing will be clickable.
   *
   * You can also pass an HTML element, a CSS selector (for multiple elements)
   * or an array of those. In that case, all of those elements will trigger an
   * upload when clicked.
   */ clickable: true,
                /**
   * Whether hidden files in directories should be ignored.
   */ ignoreHiddenFiles: true,
                /**
   * The default implementation of `accept` checks the file's mime type or
   * extension against this list. This is a comma separated list of mime
   * types or file extensions.
   *
   * Eg.: `image/*,application/pdf,.psd`
   *
   * If the Dropzone is `clickable` this option will also be used as
   * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
   * parameter on the hidden file input as well.
   */ acceptedFiles: null,
                /**
   * **Deprecated!**
   * Use acceptedFiles instead.
   */ acceptedMimeTypes: null,
                /**
   * If false, files will be added to the queue but the queue will not be
   * processed automatically.
   * This can be useful if you need some additional user input before sending
   * files (or if you want want all files sent at once).
   * If you're ready to send the file simply call `myDropzone.processQueue()`.
   *
   * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
   * section for more information.
   */ autoProcessQueue: true,
                /**
   * If false, files added to the dropzone will not be queued by default.
   * You'll have to call `enqueueFile(file)` manually.
   */ autoQueue: true,
                /**
   * If `true`, this will add a link to every file preview to remove or cancel (if
   * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
   * and `dictRemoveFile` options are used for the wording.
   */ addRemoveLinks: false,
                /**
   * Defines where to display the file previews – if `null` the
   * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
   * selector. The element should have the `dropzone-previews` class so
   * the previews are displayed properly.
   */ previewsContainer: null,
                /**
   * Set this to `true` if you don't want previews to be shown.
   */ disablePreviews: false,
                /**
   * This is the element the hidden input field (which is used when clicking on the
   * dropzone to trigger file selection) will be appended to. This might
   * be important in case you use frameworks to switch the content of your page.
   *
   * Can be a selector string, or an element directly.
   */ hiddenInputContainer: "body",
                /**
   * If null, no capture type will be specified
   * If camera, mobile devices will skip the file selection and choose camera
   * If microphone, mobile devices will skip the file selection and choose the microphone
   * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
   * On apple devices multiple must be set to false.  AcceptedFiles may need to
   * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
   */ capture: null,
                /**
   * **Deprecated**. Use `renameFile` instead.
   */ renameFilename: null,
                /**
   * A function that is invoked before the file is uploaded to the server and renames the file.
   * This function gets the `File` as argument and can use the `file.name`. The actual name of the
   * file that gets used during the upload can be accessed through `file.upload.filename`.
   */ renameFile: null,
                /**
   * If `true` the fallback will be forced. This is very useful to test your server
   * implementations first and make sure that everything works as
   * expected without dropzone if you experience problems, and to test
   * how your fallbacks will look.
   */ forceFallback: false,
                /**
   * The text used before any files are dropped.
   */ dictDefaultMessage: "Drop files here to upload",
                /**
   * The text that replaces the default message text it the browser is not supported.
   */ dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                /**
   * The text that will be added before the fallback form.
   * If you provide a  fallback element yourself, or if this option is `null` this will
   * be ignored.
   */ dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                /**
   * If the filesize is too big.
   * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
   */ dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                /**
   * If the file doesn't match the file type.
   */ dictInvalidFileType: "You can't upload files of this type.",
                /**
   * If the server response was invalid.
   * `{{statusCode}}` will be replaced with the servers status code.
   */ dictResponseError: "Server responded with {{statusCode}} code.",
                /**
   * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
   */ dictCancelUpload: "Cancel upload",
                /**
   * The text that is displayed if an upload was manually canceled
   */ dictUploadCanceled: "Upload canceled.",
                /**
   * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
   */ dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                /**
   * If `addRemoveLinks` is true, the text to be used to remove a file.
   */ dictRemoveFile: "Remove file",
                /**
   * If this is not null, then the user will be prompted before removing a file.
   */ dictRemoveFileConfirmation: null,
                /**
   * Displayed if `maxFiles` is st and exceeded.
   * The string `{{maxFiles}}` will be replaced by the configuration value.
   */ dictMaxFilesExceeded: "You can not upload any more files.",
                /**
   * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
   * `b` for bytes.
   */ dictFileSizeUnits: {
                    tb: "TB",
                    gb: "GB",
                    mb: "MB",
                    kb: "KB",
                    b: "b"
                },
                /**
   * Called when dropzone initialized
   * You can add event listeners here
   */ init: function init() {},
                /**
   * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
   * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
   * of a function, this needs to return a map.
   *
   * The default implementation does nothing for normal uploads, but adds relevant information for
   * chunked uploads.
   *
   * This is the same as adding hidden input fields in the form element.
   */ params: function params(files, xhr, chunk) {
                    if (chunk) return {
                        dzuuid: chunk.file.upload.uuid,
                        dzchunkindex: chunk.index,
                        dztotalfilesize: chunk.file.size,
                        dzchunksize: this.options.chunkSize,
                        dztotalchunkcount: chunk.file.upload.totalChunkCount,
                        dzchunkbyteoffset: chunk.index * this.options.chunkSize
                    };
                },
                /**
   * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
   * and a `done` function as parameters.
   *
   * If the done function is invoked without arguments, the file is "accepted" and will
   * be processed. If you pass an error message, the file is rejected, and the error
   * message will be displayed.
   * This function will not be called if the file is too big or doesn't match the mime types.
   */ accept: function accept(file, done) {
                    return done();
                },
                /**
   * The callback that will be invoked when all chunks have been uploaded for a file.
   * It gets the file for which the chunks have been uploaded as the first parameter,
   * and the `done` function as second. `done()` needs to be invoked when everything
   * needed to finish the upload process is done.
   */ chunksUploaded: function chunksUploaded(file, done) {
                    done();
                },
                /**
   * Gets called when the browser is not supported.
   * The default implementation shows the fallback input field and adds
   * a text.
   */ fallback: function fallback() {
                    // This code should pass in IE7... :(
                    var messageElement;
                    this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                    var _iterator = options_createForOfIteratorHelper(this.element.getElementsByTagName("div"), true), _step;
                    try {
                        for(_iterator.s(); !(_step = _iterator.n()).done;){
                            var child = _step.value;
                            if (/(^| )dz-message($| )/.test(child.className)) {
                                messageElement = child;
                                child.className = "dz-message"; // Removes the 'dz-default' class
                                break;
                            }
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally{
                        _iterator.f();
                    }
                    if (!messageElement) {
                        messageElement = Dropzone.createElement('<div class="dz-message"><span></span></div>');
                        this.element.appendChild(messageElement);
                    }
                    var span = messageElement.getElementsByTagName("span")[0];
                    if (span) {
                        if (span.textContent != null) span.textContent = this.options.dictFallbackMessage;
                        else if (span.innerText != null) span.innerText = this.options.dictFallbackMessage;
                    }
                    return this.element.appendChild(this.getFallbackForm());
                },
                /**
   * Gets called to calculate the thumbnail dimensions.
   *
   * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
   *
   *  - `srcWidth` & `srcHeight` (required)
   *  - `trgWidth` & `trgHeight` (required)
   *  - `srcX` & `srcY` (optional, default `0`)
   *  - `trgX` & `trgY` (optional, default `0`)
   *
   * Those values are going to be used by `ctx.drawImage()`.
   */ resize: function resize(file, width, height, resizeMethod) {
                    var info = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: file.width,
                        srcHeight: file.height
                    };
                    var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified
                    if (width == null && height == null) {
                        width = info.srcWidth;
                        height = info.srcHeight;
                    } else if (width == null) width = height * srcRatio;
                    else if (height == null) height = width / srcRatio;
                     // Make sure images aren't upscaled
                    width = Math.min(width, info.srcWidth);
                    height = Math.min(height, info.srcHeight);
                    var trgRatio = width / height;
                    if (info.srcWidth > width || info.srcHeight > height) {
                        // Image is bigger and needs rescaling
                        if (resizeMethod === "crop") {
                            if (srcRatio > trgRatio) {
                                info.srcHeight = file.height;
                                info.srcWidth = info.srcHeight * trgRatio;
                            } else {
                                info.srcWidth = file.width;
                                info.srcHeight = info.srcWidth / trgRatio;
                            }
                        } else if (resizeMethod === "contain") {
                            // Method 'contain'
                            if (srcRatio > trgRatio) height = width / srcRatio;
                            else width = height * srcRatio;
                        } else throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
                    }
                    info.srcX = (file.width - info.srcWidth) / 2;
                    info.srcY = (file.height - info.srcHeight) / 2;
                    info.trgWidth = width;
                    info.trgHeight = height;
                    return info;
                },
                /**
   * Can be used to transform the file (for example, resize an image if necessary).
   *
   * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
   * images according to those dimensions.
   *
   * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
   * to be invoked with the file when the transformation is done.
   */ transformFile: function transformFile(file, done) {
                    if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
                    else return done(file);
                },
                /**
   * A string that contains the template used for each dropped
   * file. Change it to fulfill your needs but make sure to properly
   * provide all elements.
   *
   * If you want to use an actual HTML element instead of providing a String
   * as a config option, you could create a div with the id `tpl`,
   * put the template inside it and provide the element like this:
   *
   *     document
   *       .querySelector('#tpl')
   *       .innerHTML
   *
   */ previewTemplate: preview_template,
                /*
   Those functions register themselves to the events on init and handle all
   the user interface specific stuff. Overwriting them won't break the upload
   but can break the way it's displayed.
   You can overwrite them if you don't like the default behavior. If you just
   want to add an additional event handler, register it on the dropzone object
   and don't overwrite those options.
   */ // Those are self explanatory and simply concern the DragnDrop.
                drop: function drop(e) {
                    return this.element.classList.remove("dz-drag-hover");
                },
                dragstart: function dragstart(e) {},
                dragend: function dragend(e) {
                    return this.element.classList.remove("dz-drag-hover");
                },
                dragenter: function dragenter(e) {
                    return this.element.classList.add("dz-drag-hover");
                },
                dragover: function dragover(e) {
                    return this.element.classList.add("dz-drag-hover");
                },
                dragleave: function dragleave(e) {
                    return this.element.classList.remove("dz-drag-hover");
                },
                paste: function paste(e) {},
                // Called whenever there are no files left in the dropzone anymore, and the
                // dropzone should be displayed as if in the initial state.
                reset: function reset() {
                    return this.element.classList.remove("dz-started");
                },
                // Called when a file is added to the queue
                // Receives `file`
                addedfile: function addedfile(file) {
                    var _this = this;
                    if (this.element === this.previewsContainer) this.element.classList.add("dz-started");
                    if (this.previewsContainer && !this.options.disablePreviews) {
                        file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                        file.previewTemplate = file.previewElement; // Backwards compatibility
                        this.previewsContainer.appendChild(file.previewElement);
                        var _iterator2 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]"), true), _step2;
                        try {
                            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                var node = _step2.value;
                                node.textContent = file.name;
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally{
                            _iterator2.f();
                        }
                        var _iterator3 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]"), true), _step3;
                        try {
                            for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                                node = _step3.value;
                                node.innerHTML = this.filesize(file.size);
                            }
                        } catch (err1) {
                            _iterator3.e(err1);
                        } finally{
                            _iterator3.f();
                        }
                        if (this.options.addRemoveLinks) {
                            file._removeLink = Dropzone.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>"));
                            file.previewElement.appendChild(file._removeLink);
                        }
                        var removeFileEvent = function removeFileEvent(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (file.status === Dropzone.UPLOADING) return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                                return _this.removeFile(file);
                            });
                            else {
                                if (_this.options.dictRemoveFileConfirmation) return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                                    return _this.removeFile(file);
                                });
                                else return _this.removeFile(file);
                            }
                        };
                        var _iterator4 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]"), true), _step4;
                        try {
                            for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                                var removeLink = _step4.value;
                                removeLink.addEventListener("click", removeFileEvent);
                            }
                        } catch (err2) {
                            _iterator4.e(err2);
                        } finally{
                            _iterator4.f();
                        }
                    }
                },
                // Called whenever a file is removed.
                removedfile: function removedfile(file) {
                    if (file.previewElement != null && file.previewElement.parentNode != null) file.previewElement.parentNode.removeChild(file.previewElement);
                    return this._updateMaxFilesReachedClass();
                },
                // Called when a thumbnail has been generated
                // Receives `file` and `dataUrl`
                thumbnail: function thumbnail(file, dataUrl) {
                    if (file.previewElement) {
                        file.previewElement.classList.remove("dz-file-preview");
                        var _iterator5 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]"), true), _step5;
                        try {
                            for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                                var thumbnailElement = _step5.value;
                                thumbnailElement.alt = file.name;
                                thumbnailElement.src = dataUrl;
                            }
                        } catch (err) {
                            _iterator5.e(err);
                        } finally{
                            _iterator5.f();
                        }
                        return setTimeout(function() {
                            return file.previewElement.classList.add("dz-image-preview");
                        }, 1);
                    }
                },
                // Called whenever an error occurs
                // Receives `file` and `message`
                error: function error(file, message) {
                    if (file.previewElement) {
                        file.previewElement.classList.add("dz-error");
                        if (typeof message !== "string" && message.error) message = message.error;
                        var _iterator6 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]"), true), _step6;
                        try {
                            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                var node = _step6.value;
                                node.textContent = message;
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally{
                            _iterator6.f();
                        }
                    }
                },
                errormultiple: function errormultiple() {},
                // Called when a file gets processed. Since there is a cue, not all added
                // files are processed immediately.
                // Receives `file`
                processing: function processing(file) {
                    if (file.previewElement) {
                        file.previewElement.classList.add("dz-processing");
                        if (file._removeLink) return file._removeLink.innerHTML = this.options.dictCancelUpload;
                    }
                },
                processingmultiple: function processingmultiple() {},
                // Called whenever the upload progress gets updated.
                // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
                // To get the total number of bytes of the file, use `file.size`
                uploadprogress: function uploadprogress(file, progress, bytesSent) {
                    if (file.previewElement) {
                        var _iterator7 = options_createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), true), _step7;
                        try {
                            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                                var node = _step7.value;
                                node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = "".concat(progress, "%");
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally{
                            _iterator7.f();
                        }
                    }
                },
                // Called whenever the total upload progress gets updated.
                // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
                totaluploadprogress: function totaluploadprogress() {},
                // Called just before the file is sent. Gets the `xhr` object as second
                // parameter, so you can modify it (for example to add a CSRF token) and a
                // `formData` object to add additional information.
                sending: function sending() {},
                sendingmultiple: function sendingmultiple() {},
                // When the complete upload is finished and successful
                // Receives `file`
                success: function success(file) {
                    if (file.previewElement) return file.previewElement.classList.add("dz-success");
                },
                successmultiple: function successmultiple() {},
                // When the upload is canceled.
                canceled: function canceled(file) {
                    return this.emit("error", file, this.options.dictUploadCanceled);
                },
                canceledmultiple: function canceledmultiple() {},
                // When the upload is finished, either with success or an error.
                // Receives `file`
                complete: function complete(file) {
                    if (file._removeLink) file._removeLink.innerHTML = this.options.dictRemoveFile;
                    if (file.previewElement) return file.previewElement.classList.add("dz-complete");
                },
                completemultiple: function completemultiple() {},
                maxfilesexceeded: function maxfilesexceeded() {},
                maxfilesreached: function maxfilesreached() {},
                queuecomplete: function queuecomplete() {},
                addedfiles: function addedfiles() {}
            };
            /* harmony default export */ var src_options = defaultOptions;
            function _typeof(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                    return typeof obj;
                };
                else _typeof = function _typeof(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            function dropzone_createForOfIteratorHelper(o, allowArrayLike) {
                var it;
                if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                    if (Array.isArray(o) || (it = dropzone_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                        if (it) o = it;
                        var i = 0;
                        var F = function F() {};
                        return {
                            s: F,
                            n: function n() {
                                if (i >= o.length) return {
                                    done: true
                                };
                                return {
                                    done: false,
                                    value: o[i++]
                                };
                            },
                            e: function e(_e) {
                                throw _e;
                            },
                            f: F
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var normalCompletion = true, didErr = false, err;
                return {
                    s: function s() {
                        it = o[Symbol.iterator]();
                    },
                    n: function n() {
                        var step = it.next();
                        normalCompletion = step.done;
                        return step;
                    },
                    e: function e(_e2) {
                        didErr = true;
                        err = _e2;
                    },
                    f: function f() {
                        try {
                            if (!normalCompletion && it.return != null) it.return();
                        } finally{
                            if (didErr) throw err;
                        }
                    }
                };
            }
            function dropzone_unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return dropzone_arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropzone_arrayLikeToArray(o, minLen);
            }
            function dropzone_arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
                return arr2;
            }
            function dropzone_classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function dropzone_defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function dropzone_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) dropzone_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) dropzone_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self1, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                return _assertThisInitialized(self1);
            }
            function _assertThisInitialized(self1) {
                if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self1;
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var Dropzone = /*#__PURE__*/ function(_Emitter) {
                _inherits(Dropzone, _Emitter);
                var _super = _createSuper(Dropzone);
                function Dropzone(el, options) {
                    var _this;
                    dropzone_classCallCheck(this, Dropzone);
                    _this = _super.call(this);
                    var fallback, left;
                    _this.element = el; // For backwards compatibility since the version was in the prototype previously
                    _this.version = Dropzone.version;
                    _this.clickableElements = [];
                    _this.listeners = [];
                    _this.files = []; // All files
                    if (typeof _this.element === "string") _this.element = document.querySelector(_this.element);
                     // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
                    if (!_this.element || _this.element.nodeType == null) throw new Error("Invalid dropzone element.");
                    if (_this.element.dropzone) throw new Error("Dropzone already attached.");
                     // Now add this dropzone to the instances.
                    Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.
                    _this.element.dropzone = _assertThisInitialized(_this);
                    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
                    _this.options = Dropzone.extend({}, src_options, elementOptions, options != null ? options : {});
                    _this.options.previewTemplate = _this.options.previewTemplate.replace(/\n*/g, ""); // If the browser failed, just call the fallback and leave
                    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
                     // @options.url = @element.getAttribute "action" unless @options.url?
                    if (_this.options.url == null) _this.options.url = _this.element.getAttribute("action");
                    if (!_this.options.url) throw new Error("No URL provided.");
                    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    if (_this.options.uploadMultiple && _this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
                     // Backwards compatibility
                    if (_this.options.acceptedMimeTypes) {
                        _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
                        delete _this.options.acceptedMimeTypes;
                    } // Backwards compatibility
                    if (_this.options.renameFilename != null) _this.options.renameFile = function(file) {
                        return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
                    };
                    if (typeof _this.options.method === "string") _this.options.method = _this.options.method.toUpperCase();
                    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) // Remove the fallback
                    fallback.parentNode.removeChild(fallback);
                     // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
                    if (_this.options.previewsContainer !== false) {
                        if (_this.options.previewsContainer) _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
                        else _this.previewsContainer = _this.element;
                    }
                    if (_this.options.clickable) {
                        if (_this.options.clickable === true) _this.clickableElements = [
                            _this.element
                        ];
                        else _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
                    }
                    _this.init();
                    return _this;
                } // Returns all files that have been accepted
                dropzone_createClass(Dropzone, [
                    {
                        key: "getAcceptedFiles",
                        value: function getAcceptedFiles() {
                            return this.files.filter(function(file) {
                                return file.accepted;
                            }).map(function(file) {
                                return file;
                            });
                        } // Returns all files that have been rejected
                    },
                    {
                        key: "getRejectedFiles",
                        value: function getRejectedFiles() {
                            return this.files.filter(function(file) {
                                return !file.accepted;
                            }).map(function(file) {
                                return file;
                            });
                        }
                    },
                    {
                        key: "getFilesWithStatus",
                        value: function getFilesWithStatus(status) {
                            return this.files.filter(function(file) {
                                return file.status === status;
                            }).map(function(file) {
                                return file;
                            });
                        } // Returns all files that are in the queue
                    },
                    {
                        key: "getQueuedFiles",
                        value: function getQueuedFiles() {
                            return this.getFilesWithStatus(Dropzone.QUEUED);
                        }
                    },
                    {
                        key: "getUploadingFiles",
                        value: function getUploadingFiles() {
                            return this.getFilesWithStatus(Dropzone.UPLOADING);
                        }
                    },
                    {
                        key: "getAddedFiles",
                        value: function getAddedFiles() {
                            return this.getFilesWithStatus(Dropzone.ADDED);
                        } // Files that are either queued or uploading
                    },
                    {
                        key: "getActiveFiles",
                        value: function getActiveFiles() {
                            return this.files.filter(function(file) {
                                return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
                            }).map(function(file) {
                                return file;
                            });
                        } // The function that gets called when Dropzone is initialized. You
                    },
                    {
                        key: "init",
                        value: function init() {
                            var _this2 = this;
                            // In case it isn't set already
                            if (this.element.tagName === "form") this.element.setAttribute("enctype", "multipart/form-data");
                            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) this.element.appendChild(Dropzone.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>")));
                            if (this.clickableElements.length) {
                                var setupHiddenFileInput = function setupHiddenFileInput() {
                                    if (_this2.hiddenFileInput) _this2.hiddenFileInput.parentNode.removeChild(_this2.hiddenFileInput);
                                    _this2.hiddenFileInput = document.createElement("input");
                                    _this2.hiddenFileInput.setAttribute("type", "file");
                                    if (_this2.options.maxFiles === null || _this2.options.maxFiles > 1) _this2.hiddenFileInput.setAttribute("multiple", "multiple");
                                    _this2.hiddenFileInput.className = "dz-hidden-input";
                                    if (_this2.options.acceptedFiles !== null) _this2.hiddenFileInput.setAttribute("accept", _this2.options.acceptedFiles);
                                    if (_this2.options.capture !== null) _this2.hiddenFileInput.setAttribute("capture", _this2.options.capture);
                                     // Making sure that no one can "tab" into this field.
                                    _this2.hiddenFileInput.setAttribute("tabindex", "-1"); // Not setting `display="none"` because some browsers don't accept clicks
                                    // on elements that aren't displayed.
                                    _this2.hiddenFileInput.style.visibility = "hidden";
                                    _this2.hiddenFileInput.style.position = "absolute";
                                    _this2.hiddenFileInput.style.top = "0";
                                    _this2.hiddenFileInput.style.left = "0";
                                    _this2.hiddenFileInput.style.height = "0";
                                    _this2.hiddenFileInput.style.width = "0";
                                    Dropzone.getElement(_this2.options.hiddenInputContainer, "hiddenInputContainer").appendChild(_this2.hiddenFileInput);
                                    _this2.hiddenFileInput.addEventListener("change", function() {
                                        var files = _this2.hiddenFileInput.files;
                                        if (files.length) {
                                            var _iterator = dropzone_createForOfIteratorHelper(files, true), _step;
                                            try {
                                                for(_iterator.s(); !(_step = _iterator.n()).done;){
                                                    var file = _step.value;
                                                    _this2.addFile(file);
                                                }
                                            } catch (err) {
                                                _iterator.e(err);
                                            } finally{
                                                _iterator.f();
                                            }
                                        }
                                        _this2.emit("addedfiles", files);
                                        setupHiddenFileInput();
                                    });
                                };
                                setupHiddenFileInput();
                            }
                            this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
                            // They're not in @setupEventListeners() because they shouldn't be removed
                            // again when the dropzone gets disabled.
                            var _iterator2 = dropzone_createForOfIteratorHelper(this.events, true), _step2;
                            try {
                                for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                    var eventName = _step2.value;
                                    this.on(eventName, this.options[eventName]);
                                }
                            } catch (err) {
                                _iterator2.e(err);
                            } finally{
                                _iterator2.f();
                            }
                            this.on("uploadprogress", function() {
                                return _this2.updateTotalUploadProgress();
                            });
                            this.on("removedfile", function() {
                                return _this2.updateTotalUploadProgress();
                            });
                            this.on("canceled", function(file) {
                                return _this2.emit("complete", file);
                            }); // Emit a `queuecomplete` event if all files finished uploading.
                            this.on("complete", function(file) {
                                if (_this2.getAddedFiles().length === 0 && _this2.getUploadingFiles().length === 0 && _this2.getQueuedFiles().length === 0) // This needs to be deferred so that `queuecomplete` really triggers after `complete`
                                return setTimeout(function() {
                                    return _this2.emit("queuecomplete");
                                }, 0);
                            });
                            var containsFiles = function containsFiles(e) {
                                if (e.dataTransfer.types) // Because e.dataTransfer.types is an Object in
                                // IE, we need to iterate like this instead of
                                // using e.dataTransfer.types.some()
                                for(var i = 0; i < e.dataTransfer.types.length; i++){
                                    if (e.dataTransfer.types[i] === "Files") return true;
                                }
                                return false;
                            };
                            var noPropagation = function noPropagation(e) {
                                // If there are no files, we don't want to stop
                                // propagation so we don't interfere with other
                                // drag and drop behaviour.
                                if (!containsFiles(e)) return;
                                e.stopPropagation();
                                if (e.preventDefault) return e.preventDefault();
                                else return e.returnValue = false;
                            }; // Create the listeners
                            this.listeners = [
                                {
                                    element: this.element,
                                    events: {
                                        dragstart: function dragstart(e) {
                                            return _this2.emit("dragstart", e);
                                        },
                                        dragenter: function dragenter(e) {
                                            noPropagation(e);
                                            return _this2.emit("dragenter", e);
                                        },
                                        dragover: function dragover(e) {
                                            // Makes it possible to drag files from chrome's download bar
                                            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                                            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                                            var efct;
                                            try {
                                                efct = e.dataTransfer.effectAllowed;
                                            } catch (error) {}
                                            e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                                            noPropagation(e);
                                            return _this2.emit("dragover", e);
                                        },
                                        dragleave: function dragleave(e) {
                                            return _this2.emit("dragleave", e);
                                        },
                                        drop: function drop(e) {
                                            noPropagation(e);
                                            return _this2.drop(e);
                                        },
                                        dragend: function dragend(e) {
                                            return _this2.emit("dragend", e);
                                        }
                                    } // This is disabled right now, because the browsers don't implement it properly.
                                }
                            ];
                            this.clickableElements.forEach(function(clickableElement) {
                                return _this2.listeners.push({
                                    element: clickableElement,
                                    events: {
                                        click: function click(evt) {
                                            // Only the actual dropzone or the message element should trigger file selection
                                            if (clickableElement !== _this2.element || evt.target === _this2.element || Dropzone.elementInside(evt.target, _this2.element.querySelector(".dz-message"))) _this2.hiddenFileInput.click(); // Forward the click
                                            return true;
                                        }
                                    }
                                });
                            });
                            this.enable();
                            return this.options.init.call(this);
                        } // Not fully tested yet
                    },
                    {
                        key: "destroy",
                        value: function destroy() {
                            this.disable();
                            this.removeAllFiles(true);
                            if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
                                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                                this.hiddenFileInput = null;
                            }
                            delete this.element.dropzone;
                            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
                        }
                    },
                    {
                        key: "updateTotalUploadProgress",
                        value: function updateTotalUploadProgress() {
                            var totalUploadProgress;
                            var totalBytesSent = 0;
                            var totalBytes = 0;
                            var activeFiles = this.getActiveFiles();
                            if (activeFiles.length) {
                                var _iterator3 = dropzone_createForOfIteratorHelper(this.getActiveFiles(), true), _step3;
                                try {
                                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                                        var file = _step3.value;
                                        totalBytesSent += file.upload.bytesSent;
                                        totalBytes += file.upload.total;
                                    }
                                } catch (err) {
                                    _iterator3.e(err);
                                } finally{
                                    _iterator3.f();
                                }
                                totalUploadProgress = 100 * totalBytesSent / totalBytes;
                            } else totalUploadProgress = 100;
                            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
                        } // @options.paramName can be a function taking one parameter rather than a string.
                    },
                    {
                        key: "_getParamName",
                        value: function _getParamName(n) {
                            if (typeof this.options.paramName === "function") return this.options.paramName(n);
                            else return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
                        } // If @options.renameFile is a function,
                    },
                    {
                        key: "_renameFile",
                        value: function _renameFile(file) {
                            if (typeof this.options.renameFile !== "function") return file.name;
                            return this.options.renameFile(file);
                        } // Returns a form that can be used as fallback if the browser does not support DragnDrop
                    },
                    {
                        key: "getFallbackForm",
                        value: function getFallbackForm() {
                            var existingFallback, form;
                            if (existingFallback = this.getExistingFallback()) return existingFallback;
                            var fieldsString = '<div class="dz-fallback">';
                            if (this.options.dictFallbackText) fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
                            fieldsString += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, ' /><input type="submit" value="Upload!"></div>');
                            var fields = Dropzone.createElement(fieldsString);
                            if (this.element.tagName !== "FORM") {
                                form = Dropzone.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'));
                                form.appendChild(fields);
                            } else {
                                // Make sure that the enctype and method attributes are set properly
                                this.element.setAttribute("enctype", "multipart/form-data");
                                this.element.setAttribute("method", this.options.method);
                            }
                            return form != null ? form : fields;
                        } // Returns the fallback elements if they exist already
                    },
                    {
                        key: "getExistingFallback",
                        value: function getExistingFallback() {
                            var getFallback = function getFallback(elements) {
                                var _iterator4 = dropzone_createForOfIteratorHelper(elements, true), _step4;
                                try {
                                    for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                                        var el = _step4.value;
                                        if (/(^| )fallback($| )/.test(el.className)) return el;
                                    }
                                } catch (err) {
                                    _iterator4.e(err);
                                } finally{
                                    _iterator4.f();
                                }
                            };
                            for(var _i = 0, _arr = [
                                "div",
                                "form"
                            ]; _i < _arr.length; _i++){
                                var tagName = _arr[_i];
                                var fallback;
                                if (fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
                            }
                        } // Activates all listeners stored in @listeners
                    },
                    {
                        key: "setupEventListeners",
                        value: function setupEventListeners() {
                            return this.listeners.map(function(elementListeners) {
                                return function() {
                                    var result = [];
                                    for(var event in elementListeners.events){
                                        var listener = elementListeners.events[event];
                                        result.push(elementListeners.element.addEventListener(event, listener, false));
                                    }
                                    return result;
                                }();
                            });
                        } // Deactivates all listeners stored in @listeners
                    },
                    {
                        key: "removeEventListeners",
                        value: function removeEventListeners() {
                            return this.listeners.map(function(elementListeners) {
                                return function() {
                                    var result = [];
                                    for(var event in elementListeners.events){
                                        var listener = elementListeners.events[event];
                                        result.push(elementListeners.element.removeEventListener(event, listener, false));
                                    }
                                    return result;
                                }();
                            });
                        } // Removes all event listeners and cancels all files in the queue or being processed.
                    },
                    {
                        key: "disable",
                        value: function disable() {
                            var _this3 = this;
                            this.clickableElements.forEach(function(element) {
                                return element.classList.remove("dz-clickable");
                            });
                            this.removeEventListeners();
                            this.disabled = true;
                            return this.files.map(function(file) {
                                return _this3.cancelUpload(file);
                            });
                        }
                    },
                    {
                        key: "enable",
                        value: function enable() {
                            delete this.disabled;
                            this.clickableElements.forEach(function(element) {
                                return element.classList.add("dz-clickable");
                            });
                            return this.setupEventListeners();
                        } // Returns a nicely formatted filesize
                    },
                    {
                        key: "filesize",
                        value: function filesize(size) {
                            var selectedSize = 0;
                            var selectedUnit = "b";
                            if (size > 0) {
                                var units = [
                                    "tb",
                                    "gb",
                                    "mb",
                                    "kb",
                                    "b"
                                ];
                                for(var i = 0; i < units.length; i++){
                                    var unit = units[i];
                                    var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                                    if (size >= cutoff) {
                                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                                        selectedUnit = unit;
                                        break;
                                    }
                                }
                                selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
                            }
                            return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
                        } // Adds or removes the `dz-max-files-reached` class from the form.
                    },
                    {
                        key: "_updateMaxFilesReachedClass",
                        value: function _updateMaxFilesReachedClass() {
                            if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                                if (this.getAcceptedFiles().length === this.options.maxFiles) this.emit("maxfilesreached", this.files);
                                return this.element.classList.add("dz-max-files-reached");
                            } else return this.element.classList.remove("dz-max-files-reached");
                        }
                    },
                    {
                        key: "drop",
                        value: function drop(e) {
                            if (!e.dataTransfer) return;
                            this.emit("drop", e); // Convert the FileList to an Array
                            // This is necessary for IE11
                            var files = [];
                            for(var i = 0; i < e.dataTransfer.files.length; i++)files[i] = e.dataTransfer.files[i];
                             // Even if it's a folder, files.length will contain the folders.
                            if (files.length) {
                                var items = e.dataTransfer.items;
                                if (items && items.length && items[0].webkitGetAsEntry != null) // The browser supports dropping of folders, so handle items instead of files
                                this._addFilesFromItems(items);
                                else this.handleFiles(files);
                            }
                            this.emit("addedfiles", files);
                        }
                    },
                    {
                        key: "paste",
                        value: function paste(e) {
                            if (__guard__(e != null ? e.clipboardData : undefined, function(x) {
                                return x.items;
                            }) == null) return;
                            this.emit("paste", e);
                            var items = e.clipboardData.items;
                            if (items.length) return this._addFilesFromItems(items);
                        }
                    },
                    {
                        key: "handleFiles",
                        value: function handleFiles(files) {
                            var _iterator5 = dropzone_createForOfIteratorHelper(files, true), _step5;
                            try {
                                for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                                    var file = _step5.value;
                                    this.addFile(file);
                                }
                            } catch (err) {
                                _iterator5.e(err);
                            } finally{
                                _iterator5.f();
                            }
                        } // When a folder is dropped (or files are pasted), items must be handled
                    },
                    {
                        key: "_addFilesFromItems",
                        value: function _addFilesFromItems(items) {
                            var _this4 = this;
                            return function() {
                                var result = [];
                                var _iterator6 = dropzone_createForOfIteratorHelper(items, true), _step6;
                                try {
                                    for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                        var item = _step6.value;
                                        var entry;
                                        if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                                            if (entry.isFile) result.push(_this4.addFile(item.getAsFile()));
                                            else if (entry.isDirectory) // Append all files from that directory to files
                                            result.push(_this4._addFilesFromDirectory(entry, entry.name));
                                            else result.push(undefined);
                                        } else if (item.getAsFile != null) {
                                            if (item.kind == null || item.kind === "file") result.push(_this4.addFile(item.getAsFile()));
                                            else result.push(undefined);
                                        } else result.push(undefined);
                                    }
                                } catch (err) {
                                    _iterator6.e(err);
                                } finally{
                                    _iterator6.f();
                                }
                                return result;
                            }();
                        } // Goes through the directory, and adds each file it finds recursively
                    },
                    {
                        key: "_addFilesFromDirectory",
                        value: function _addFilesFromDirectory(directory, path) {
                            var _this5 = this;
                            var dirReader = directory.createReader();
                            var errorHandler = function errorHandler(error) {
                                return __guardMethod__(console, "log", function(o) {
                                    return o.log(error);
                                });
                            };
                            var readEntries = function readEntries() {
                                return dirReader.readEntries(function(entries) {
                                    if (entries.length > 0) {
                                        var _iterator7 = dropzone_createForOfIteratorHelper(entries, true), _step7;
                                        try {
                                            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                                                var entry = _step7.value;
                                                if (entry.isFile) entry.file(function(file) {
                                                    if (_this5.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") return;
                                                    file.fullPath = "".concat(path, "/").concat(file.name);
                                                    return _this5.addFile(file);
                                                });
                                                else if (entry.isDirectory) _this5._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                                            } // Recursively call readEntries() again, since browser only handle
                                        // the first 100 entries.
                                        // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
                                        } catch (err) {
                                            _iterator7.e(err);
                                        } finally{
                                            _iterator7.f();
                                        }
                                        readEntries();
                                    }
                                    return null;
                                }, errorHandler);
                            };
                            return readEntries();
                        } // If `done()` is called without argument the file is accepted
                    },
                    {
                        key: "accept",
                        value: function accept(file, done) {
                            if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1048576) done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
                            else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) done(this.options.dictInvalidFileType);
                            else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
                                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                                this.emit("maxfilesexceeded", file);
                            } else this.options.accept.call(this, file, done);
                        }
                    },
                    {
                        key: "addFile",
                        value: function addFile(file) {
                            var _this6 = this;
                            file.upload = {
                                uuid: Dropzone.uuidv4(),
                                progress: 0,
                                // Setting the total upload size to file.size for the beginning
                                // It's actual different than the size to be transmitted.
                                total: file.size,
                                bytesSent: 0,
                                filename: this._renameFile(file) // Not setting chunking information here, because the acutal data — and
                            };
                            this.files.push(file);
                            file.status = Dropzone.ADDED;
                            this.emit("addedfile", file);
                            this._enqueueThumbnail(file);
                            this.accept(file, function(error) {
                                if (error) {
                                    file.accepted = false;
                                    _this6._errorProcessing([
                                        file
                                    ], error); // Will set the file.status
                                } else {
                                    file.accepted = true;
                                    if (_this6.options.autoQueue) _this6.enqueueFile(file);
                                     // Will set .accepted = true
                                }
                                _this6._updateMaxFilesReachedClass();
                            });
                        } // Wrapper for enqueueFile
                    },
                    {
                        key: "enqueueFiles",
                        value: function enqueueFiles(files) {
                            var _iterator8 = dropzone_createForOfIteratorHelper(files, true), _step8;
                            try {
                                for(_iterator8.s(); !(_step8 = _iterator8.n()).done;){
                                    var file = _step8.value;
                                    this.enqueueFile(file);
                                }
                            } catch (err) {
                                _iterator8.e(err);
                            } finally{
                                _iterator8.f();
                            }
                            return null;
                        }
                    },
                    {
                        key: "enqueueFile",
                        value: function enqueueFile(file) {
                            var _this7 = this;
                            if (file.status === Dropzone.ADDED && file.accepted === true) {
                                file.status = Dropzone.QUEUED;
                                if (this.options.autoProcessQueue) return setTimeout(function() {
                                    return _this7.processQueue();
                                }, 0); // Deferring the call
                            } else throw new Error("This file can't be queued because it has already been processed or was rejected.");
                        }
                    },
                    {
                        key: "_enqueueThumbnail",
                        value: function _enqueueThumbnail(file) {
                            var _this8 = this;
                            if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1048576) {
                                this._thumbnailQueue.push(file);
                                return setTimeout(function() {
                                    return _this8._processThumbnailQueue();
                                }, 0); // Deferring the call
                            }
                        }
                    },
                    {
                        key: "_processThumbnailQueue",
                        value: function _processThumbnailQueue() {
                            var _this9 = this;
                            if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
                            this._processingThumbnail = true;
                            var file = this._thumbnailQueue.shift();
                            return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function(dataUrl) {
                                _this9.emit("thumbnail", file, dataUrl);
                                _this9._processingThumbnail = false;
                                return _this9._processThumbnailQueue();
                            });
                        } // Can be called by the user to remove a file
                    },
                    {
                        key: "removeFile",
                        value: function removeFile(file) {
                            if (file.status === Dropzone.UPLOADING) this.cancelUpload(file);
                            this.files = without(this.files, file);
                            this.emit("removedfile", file);
                            if (this.files.length === 0) return this.emit("reset");
                        } // Removes all files that aren't currently processed from the list
                    },
                    {
                        key: "removeAllFiles",
                        value: function removeAllFiles(cancelIfNecessary) {
                            // Create a copy of files since removeFile() changes the @files array.
                            if (cancelIfNecessary == null) cancelIfNecessary = false;
                            var _iterator9 = dropzone_createForOfIteratorHelper(this.files.slice(), true), _step9;
                            try {
                                for(_iterator9.s(); !(_step9 = _iterator9.n()).done;){
                                    var file = _step9.value;
                                    if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) this.removeFile(file);
                                }
                            } catch (err) {
                                _iterator9.e(err);
                            } finally{
                                _iterator9.f();
                            }
                            return null;
                        } // Resizes an image before it gets sent to the server. This function is the default behavior of
                    },
                    {
                        key: "resizeImage",
                        value: function resizeImage(file, width, height, resizeMethod, callback) {
                            var _this10 = this;
                            return this.createThumbnail(file, width, height, resizeMethod, true, function(dataUrl, canvas) {
                                if (canvas == null) // The image has not been resized
                                return callback(file);
                                else {
                                    var resizeMimeType = _this10.options.resizeMimeType;
                                    if (resizeMimeType == null) resizeMimeType = file.type;
                                    var resizedDataURL = canvas.toDataURL(resizeMimeType, _this10.options.resizeQuality);
                                    if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") // Now add the original EXIF information
                                    resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
                                    return callback(Dropzone.dataURItoBlob(resizedDataURL));
                                }
                            });
                        }
                    },
                    {
                        key: "createThumbnail",
                        value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
                            var _this11 = this;
                            var fileReader = new FileReader();
                            fileReader.onload = function() {
                                file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector
                                if (file.type === "image/svg+xml") {
                                    if (callback != null) callback(fileReader.result);
                                    return;
                                }
                                _this11.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
                            };
                            fileReader.readAsDataURL(file);
                        } // `mockFile` needs to have these attributes:
                    },
                    {
                        key: "displayExistingFile",
                        value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
                            var _this12 = this;
                            var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                            this.emit("addedfile", mockFile);
                            this.emit("complete", mockFile);
                            if (!resizeThumbnail) {
                                this.emit("thumbnail", mockFile, imageUrl);
                                if (callback) callback();
                            } else {
                                var onDone = function onDone(thumbnail) {
                                    _this12.emit("thumbnail", mockFile, thumbnail);
                                    if (callback) callback();
                                };
                                mockFile.dataURL = imageUrl;
                                this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
                            }
                        }
                    },
                    {
                        key: "createThumbnailFromUrl",
                        value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
                            var _this13 = this;
                            // Not using `new Image` here because of a bug in latest Chrome versions.
                            // See https://github.com/enyo/dropzone/pull/226
                            var img = document.createElement("img");
                            if (crossOrigin) img.crossOrigin = crossOrigin;
                             // fixOrientation is not needed anymore with browsers handling imageOrientation
                            fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
                            img.onload = function() {
                                var loadExif = function loadExif(callback) {
                                    return callback(1);
                                };
                                if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) loadExif = function loadExif(callback) {
                                    return EXIF.getData(img, function() {
                                        return callback(EXIF.getTag(this, "Orientation"));
                                    });
                                };
                                return loadExif(function(orientation) {
                                    file.width = img.width;
                                    file.height = img.height;
                                    var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);
                                    var canvas = document.createElement("canvas");
                                    var ctx = canvas.getContext("2d");
                                    canvas.width = resizeInfo.trgWidth;
                                    canvas.height = resizeInfo.trgHeight;
                                    if (orientation > 4) {
                                        canvas.width = resizeInfo.trgHeight;
                                        canvas.height = resizeInfo.trgWidth;
                                    }
                                    switch(orientation){
                                        case 2:
                                            // horizontal flip
                                            ctx.translate(canvas.width, 0);
                                            ctx.scale(-1, 1);
                                            break;
                                        case 3:
                                            // 180° rotate left
                                            ctx.translate(canvas.width, canvas.height);
                                            ctx.rotate(Math.PI);
                                            break;
                                        case 4:
                                            // vertical flip
                                            ctx.translate(0, canvas.height);
                                            ctx.scale(1, -1);
                                            break;
                                        case 5:
                                            // vertical flip + 90 rotate right
                                            ctx.rotate(0.5 * Math.PI);
                                            ctx.scale(1, -1);
                                            break;
                                        case 6:
                                            // 90° rotate right
                                            ctx.rotate(0.5 * Math.PI);
                                            ctx.translate(0, -canvas.width);
                                            break;
                                        case 7:
                                            // horizontal flip + 90 rotate right
                                            ctx.rotate(0.5 * Math.PI);
                                            ctx.translate(canvas.height, -canvas.width);
                                            ctx.scale(-1, 1);
                                            break;
                                        case 8:
                                            // 90° rotate left
                                            ctx.rotate(-0.5 * Math.PI);
                                            ctx.translate(-canvas.height, 0);
                                            break;
                                    } // This is a bugfix for iOS' scaling bug.
                                    drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                                    var thumbnail = canvas.toDataURL("image/png");
                                    if (callback != null) return callback(thumbnail, canvas);
                                });
                            };
                            if (callback != null) img.onerror = callback;
                            return img.src = file.dataURL;
                        } // Goes through the queue and processes files if there aren't too many already.
                    },
                    {
                        key: "processQueue",
                        value: function processQueue() {
                            var parallelUploads = this.options.parallelUploads;
                            var processingLength = this.getUploadingFiles().length;
                            var i = processingLength; // There are already at least as many files uploading than should be
                            if (processingLength >= parallelUploads) return;
                            var queuedFiles = this.getQueuedFiles();
                            if (!(queuedFiles.length > 0)) return;
                            if (this.options.uploadMultiple) // The files should be uploaded in one request
                            return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
                            else while(i < parallelUploads){
                                if (!queuedFiles.length) return;
                                 // Nothing left to process
                                this.processFile(queuedFiles.shift());
                                i++;
                            }
                        } // Wrapper for `processFiles`
                    },
                    {
                        key: "processFile",
                        value: function processFile(file) {
                            return this.processFiles([
                                file
                            ]);
                        } // Loads the file, then calls finishedLoading()
                    },
                    {
                        key: "processFiles",
                        value: function processFiles(files) {
                            var _iterator10 = dropzone_createForOfIteratorHelper(files, true), _step10;
                            try {
                                for(_iterator10.s(); !(_step10 = _iterator10.n()).done;){
                                    var file = _step10.value;
                                    file.processing = true; // Backwards compatibility
                                    file.status = Dropzone.UPLOADING;
                                    this.emit("processing", file);
                                }
                            } catch (err) {
                                _iterator10.e(err);
                            } finally{
                                _iterator10.f();
                            }
                            if (this.options.uploadMultiple) this.emit("processingmultiple", files);
                            return this.uploadFiles(files);
                        }
                    },
                    {
                        key: "_getFilesWithXhr",
                        value: function _getFilesWithXhr(xhr) {
                            var files;
                            return files = this.files.filter(function(file) {
                                return file.xhr === xhr;
                            }).map(function(file) {
                                return file;
                            });
                        } // Cancels the file upload and sets the status to CANCELED
                    },
                    {
                        key: "cancelUpload",
                        value: function cancelUpload(file) {
                            if (file.status === Dropzone.UPLOADING) {
                                var groupedFiles = this._getFilesWithXhr(file.xhr);
                                var _iterator11 = dropzone_createForOfIteratorHelper(groupedFiles, true), _step11;
                                try {
                                    for(_iterator11.s(); !(_step11 = _iterator11.n()).done;){
                                        var groupedFile = _step11.value;
                                        groupedFile.status = Dropzone.CANCELED;
                                    }
                                } catch (err) {
                                    _iterator11.e(err);
                                } finally{
                                    _iterator11.f();
                                }
                                if (typeof file.xhr !== "undefined") file.xhr.abort();
                                var _iterator12 = dropzone_createForOfIteratorHelper(groupedFiles, true), _step12;
                                try {
                                    for(_iterator12.s(); !(_step12 = _iterator12.n()).done;){
                                        var _groupedFile = _step12.value;
                                        this.emit("canceled", _groupedFile);
                                    }
                                } catch (err1) {
                                    _iterator12.e(err1);
                                } finally{
                                    _iterator12.f();
                                }
                                if (this.options.uploadMultiple) this.emit("canceledmultiple", groupedFiles);
                            } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
                                file.status = Dropzone.CANCELED;
                                this.emit("canceled", file);
                                if (this.options.uploadMultiple) this.emit("canceledmultiple", [
                                    file
                                ]);
                            }
                            if (this.options.autoProcessQueue) return this.processQueue();
                        }
                    },
                    {
                        key: "resolveOption",
                        value: function resolveOption(option) {
                            if (typeof option === "function") {
                                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                                return option.apply(this, args);
                            }
                            return option;
                        }
                    },
                    {
                        key: "uploadFile",
                        value: function uploadFile(file) {
                            return this.uploadFiles([
                                file
                            ]);
                        }
                    },
                    {
                        key: "uploadFiles",
                        value: function uploadFiles(files) {
                            var _this14 = this;
                            this._transformFiles(files, function(transformedFiles) {
                                if (_this14.options.chunking) {
                                    // Chunking is not allowed to be used with `uploadMultiple` so we know
                                    // that there is only __one__file.
                                    var transformedFile = transformedFiles[0];
                                    files[0].upload.chunked = _this14.options.chunking && (_this14.options.forceChunking || transformedFile.size > _this14.options.chunkSize);
                                    files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this14.options.chunkSize);
                                }
                                if (files[0].upload.chunked) {
                                    // This file should be sent in chunks!
                                    // If the chunking option is set, we **know** that there can only be **one** file, since
                                    // uploadMultiple is not allowed with this option.
                                    var file = files[0];
                                    var _transformedFile = transformedFiles[0];
                                    var startedChunkCount = 0;
                                    file.upload.chunks = [];
                                    var handleNextChunk = function handleNextChunk() {
                                        var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.
                                        while(file.upload.chunks[chunkIndex] !== undefined)chunkIndex++;
                                         // This means, that all chunks have already been started.
                                        if (chunkIndex >= file.upload.totalChunkCount) return;
                                        startedChunkCount++;
                                        var start = chunkIndex * _this14.options.chunkSize;
                                        var end = Math.min(start + _this14.options.chunkSize, _transformedFile.size);
                                        var dataBlock = {
                                            name: _this14._getParamName(0),
                                            data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
                                            filename: file.upload.filename,
                                            chunkIndex: chunkIndex
                                        };
                                        file.upload.chunks[chunkIndex] = {
                                            file: file,
                                            index: chunkIndex,
                                            dataBlock: dataBlock,
                                            // In case we want to retry.
                                            status: Dropzone.UPLOADING,
                                            progress: 0,
                                            retries: 0 // The number of times this block has been retried.
                                        };
                                        _this14._uploadData(files, [
                                            dataBlock
                                        ]);
                                    };
                                    file.upload.finishedChunkUpload = function(chunk, response) {
                                        var allFinished = true;
                                        chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk
                                        chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers
                                        chunk.xhr = null;
                                        for(var i = 0; i < file.upload.totalChunkCount; i++){
                                            if (file.upload.chunks[i] === undefined) return handleNextChunk();
                                            if (file.upload.chunks[i].status !== Dropzone.SUCCESS) allFinished = false;
                                        }
                                        if (allFinished) _this14.options.chunksUploaded(file, function() {
                                            _this14._finished(files, response, null);
                                        });
                                    };
                                    if (_this14.options.parallelChunkUploads) for(var i = 0; i < file.upload.totalChunkCount; i++)handleNextChunk();
                                    else handleNextChunk();
                                } else {
                                    var dataBlocks = [];
                                    for(var _i2 = 0; _i2 < files.length; _i2++)dataBlocks[_i2] = {
                                        name: _this14._getParamName(_i2),
                                        data: transformedFiles[_i2],
                                        filename: files[_i2].upload.filename
                                    };
                                    _this14._uploadData(files, dataBlocks);
                                }
                            });
                        } /// Returns the right chunk for given file and xhr
                    },
                    {
                        key: "_getChunk",
                        value: function _getChunk(file, xhr) {
                            for(var i = 0; i < file.upload.totalChunkCount; i++){
                                if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) return file.upload.chunks[i];
                            }
                        } // This function actually uploads the file(s) to the server.
                    },
                    {
                        key: "_uploadData",
                        value: function _uploadData(files, dataBlocks) {
                            var _this15 = this;
                            var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.
                            var _iterator13 = dropzone_createForOfIteratorHelper(files, true), _step13;
                            try {
                                for(_iterator13.s(); !(_step13 = _iterator13.n()).done;){
                                    var file = _step13.value;
                                    file.xhr = xhr;
                                }
                            } catch (err) {
                                _iterator13.e(err);
                            } finally{
                                _iterator13.f();
                            }
                            if (files[0].upload.chunked) // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
                            files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
                            var method = this.resolveOption(this.options.method, files);
                            var url = this.resolveOption(this.options.url, files);
                            xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
                            var timeout = this.resolveOption(this.options.timeout, files);
                            if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
                            xhr.withCredentials = !!this.options.withCredentials;
                            xhr.onload = function(e) {
                                _this15._finishedUploading(files, xhr, e);
                            };
                            xhr.ontimeout = function() {
                                _this15._handleUploadError(files, xhr, "Request timedout after ".concat(_this15.options.timeout / 1000, " seconds"));
                            };
                            xhr.onerror = function() {
                                _this15._handleUploadError(files, xhr);
                            }; // Some browsers do not have the .upload property
                            var progressObj = xhr.upload != null ? xhr.upload : xhr;
                            progressObj.onprogress = function(e) {
                                return _this15._updateFilesUploadProgress(files, xhr, e);
                            };
                            var headers = {
                                Accept: "application/json",
                                "Cache-Control": "no-cache",
                                "X-Requested-With": "XMLHttpRequest"
                            };
                            if (this.options.headers) Dropzone.extend(headers, this.options.headers);
                            for(var headerName in headers){
                                var headerValue = headers[headerName];
                                if (headerValue) xhr.setRequestHeader(headerName, headerValue);
                            }
                            var formData = new FormData(); // Adding all @options parameters
                            if (this.options.params) {
                                var additionalParams = this.options.params;
                                if (typeof additionalParams === "function") additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                                for(var key in additionalParams){
                                    var value = additionalParams[key];
                                    if (Array.isArray(value)) // The additional parameter contains an array,
                                    // so lets iterate over it to attach each value
                                    // individually.
                                    for(var i = 0; i < value.length; i++)formData.append(key, value[i]);
                                    else formData.append(key, value);
                                }
                            } // Let the user add additional data if necessary
                            var _iterator14 = dropzone_createForOfIteratorHelper(files, true), _step14;
                            try {
                                for(_iterator14.s(); !(_step14 = _iterator14.n()).done;){
                                    var _file = _step14.value;
                                    this.emit("sending", _file, xhr, formData);
                                }
                            } catch (err1) {
                                _iterator14.e(err1);
                            } finally{
                                _iterator14.f();
                            }
                            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr, formData);
                            this._addFormElementData(formData); // Finally add the files
                            // Has to be last because some servers (eg: S3) expect the file to be the last parameter
                            for(var _i3 = 0; _i3 < dataBlocks.length; _i3++){
                                var dataBlock = dataBlocks[_i3];
                                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
                            }
                            this.submitRequest(xhr, formData, files);
                        } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
                    },
                    {
                        key: "_transformFiles",
                        value: function _transformFiles(files, done) {
                            var _this16 = this;
                            var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
                            var doneCounter = 0;
                            var _loop = function _loop(i) {
                                _this16.options.transformFile.call(_this16, files[i], function(transformedFile) {
                                    transformedFiles[i] = transformedFile;
                                    if (++doneCounter === files.length) done(transformedFiles);
                                });
                            };
                            for(var i = 0; i < files.length; i++)_loop(i);
                        } // Takes care of adding other input elements of the form to the AJAX request
                    },
                    {
                        key: "_addFormElementData",
                        value: function _addFormElementData(formData) {
                            // Take care of other input elements
                            if (this.element.tagName === "FORM") {
                                var _iterator15 = dropzone_createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button"), true), _step15;
                                try {
                                    for(_iterator15.s(); !(_step15 = _iterator15.n()).done;){
                                        var input = _step15.value;
                                        var inputName = input.getAttribute("name");
                                        var inputType = input.getAttribute("type");
                                        if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.
                                        if (typeof inputName === "undefined" || inputName === null) continue;
                                        if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                                            // Possibly multiple values
                                            var _iterator16 = dropzone_createForOfIteratorHelper(input.options, true), _step16;
                                            try {
                                                for(_iterator16.s(); !(_step16 = _iterator16.n()).done;){
                                                    var option = _step16.value;
                                                    if (option.selected) formData.append(inputName, option.value);
                                                }
                                            } catch (err) {
                                                _iterator16.e(err);
                                            } finally{
                                                _iterator16.f();
                                            }
                                        } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) formData.append(inputName, input.value);
                                    }
                                } catch (err1) {
                                    _iterator15.e(err1);
                                } finally{
                                    _iterator15.f();
                                }
                            }
                        } // Invoked when there is new progress information about given files.
                    },
                    {
                        key: "_updateFilesUploadProgress",
                        value: function _updateFilesUploadProgress(files, xhr, e) {
                            if (!files[0].upload.chunked) {
                                // Handle file uploads without chunking
                                var _iterator17 = dropzone_createForOfIteratorHelper(files, true), _step17;
                                try {
                                    for(_iterator17.s(); !(_step17 = _iterator17.n()).done;){
                                        var file = _step17.value;
                                        if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) continue;
                                        if (e) {
                                            file.upload.progress = 100 * e.loaded / e.total;
                                            file.upload.total = e.total;
                                            file.upload.bytesSent = e.loaded;
                                        } else {
                                            // No event, so we're at 100%
                                            file.upload.progress = 100;
                                            file.upload.bytesSent = file.upload.total;
                                        }
                                        this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
                                    }
                                } catch (err) {
                                    _iterator17.e(err);
                                } finally{
                                    _iterator17.f();
                                }
                            } else {
                                // Handle chunked file uploads
                                // Chunked upload is not compatible with uploading multiple files in one
                                // request, so we know there's only one file.
                                var _file2 = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk
                                // progress.
                                var chunk = this._getChunk(_file2, xhr);
                                if (e) {
                                    chunk.progress = 100 * e.loaded / e.total;
                                    chunk.total = e.total;
                                    chunk.bytesSent = e.loaded;
                                } else {
                                    // No event, so we're at 100%
                                    chunk.progress = 100;
                                    chunk.bytesSent = chunk.total;
                                } // Now tally the *file* upload progress from its individual chunks
                                _file2.upload.progress = 0;
                                _file2.upload.total = 0;
                                _file2.upload.bytesSent = 0;
                                for(var i = 0; i < _file2.upload.totalChunkCount; i++)if (_file2.upload.chunks[i] && typeof _file2.upload.chunks[i].progress !== "undefined") {
                                    _file2.upload.progress += _file2.upload.chunks[i].progress;
                                    _file2.upload.total += _file2.upload.chunks[i].total;
                                    _file2.upload.bytesSent += _file2.upload.chunks[i].bytesSent;
                                }
                                 // Since the process is a percentage, we need to divide by the amount of
                                // chunks we've used.
                                _file2.upload.progress = _file2.upload.progress / _file2.upload.totalChunkCount;
                                this.emit("uploadprogress", _file2, _file2.upload.progress, _file2.upload.bytesSent);
                            }
                        }
                    },
                    {
                        key: "_finishedUploading",
                        value: function _finishedUploading(files, xhr, e) {
                            var response;
                            if (files[0].status === Dropzone.CANCELED) return;
                            if (xhr.readyState !== 4) return;
                            if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
                                response = xhr.responseText;
                                if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
                                    response = JSON.parse(response);
                                } catch (error) {
                                    e = error;
                                    response = "Invalid JSON response from server.";
                                }
                            }
                            this._updateFilesUploadProgress(files, xhr);
                            if (!(200 <= xhr.status && xhr.status < 300)) this._handleUploadError(files, xhr, response);
                            else if (files[0].upload.chunked) files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
                            else this._finished(files, response, e);
                        }
                    },
                    {
                        key: "_handleUploadError",
                        value: function _handleUploadError(files, xhr, response) {
                            if (files[0].status === Dropzone.CANCELED) return;
                            if (files[0].upload.chunked && this.options.retryChunks) {
                                var chunk = this._getChunk(files[0], xhr);
                                if (chunk.retries++ < this.options.retryChunksLimit) {
                                    this._uploadData(files, [
                                        chunk.dataBlock
                                    ]);
                                    return;
                                } else console.warn("Retried this chunk too often. Giving up.");
                            }
                            this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
                        }
                    },
                    {
                        key: "submitRequest",
                        value: function submitRequest(xhr, formData, files) {
                            if (xhr.readyState != 1) {
                                console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
                                return;
                            }
                            xhr.send(formData);
                        } // Called internally when processing is finished.
                    },
                    {
                        key: "_finished",
                        value: function _finished(files, responseText, e) {
                            var _iterator18 = dropzone_createForOfIteratorHelper(files, true), _step18;
                            try {
                                for(_iterator18.s(); !(_step18 = _iterator18.n()).done;){
                                    var file = _step18.value;
                                    file.status = Dropzone.SUCCESS;
                                    this.emit("success", file, responseText, e);
                                    this.emit("complete", file);
                                }
                            } catch (err) {
                                _iterator18.e(err);
                            } finally{
                                _iterator18.f();
                            }
                            if (this.options.uploadMultiple) {
                                this.emit("successmultiple", files, responseText, e);
                                this.emit("completemultiple", files);
                            }
                            if (this.options.autoProcessQueue) return this.processQueue();
                        } // Called internally when processing is finished.
                    },
                    {
                        key: "_errorProcessing",
                        value: function _errorProcessing(files, message, xhr) {
                            var _iterator19 = dropzone_createForOfIteratorHelper(files, true), _step19;
                            try {
                                for(_iterator19.s(); !(_step19 = _iterator19.n()).done;){
                                    var file = _step19.value;
                                    file.status = Dropzone.ERROR;
                                    this.emit("error", file, message, xhr);
                                    this.emit("complete", file);
                                }
                            } catch (err) {
                                _iterator19.e(err);
                            } finally{
                                _iterator19.f();
                            }
                            if (this.options.uploadMultiple) {
                                this.emit("errormultiple", files, message, xhr);
                                this.emit("completemultiple", files);
                            }
                            if (this.options.autoProcessQueue) return this.processQueue();
                        }
                    }
                ], [
                    {
                        key: "initClass",
                        value: function initClass() {
                            // Exposing the emitter class, mainly for tests
                            this.prototype.Emitter = Emitter;
                            /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */ this.prototype.events = [
                                "drop",
                                "dragstart",
                                "dragend",
                                "dragenter",
                                "dragover",
                                "dragleave",
                                "addedfile",
                                "addedfiles",
                                "removedfile",
                                "thumbnail",
                                "error",
                                "errormultiple",
                                "processing",
                                "processingmultiple",
                                "uploadprogress",
                                "totaluploadprogress",
                                "sending",
                                "sendingmultiple",
                                "success",
                                "successmultiple",
                                "canceled",
                                "canceledmultiple",
                                "complete",
                                "completemultiple",
                                "reset",
                                "maxfilesexceeded",
                                "maxfilesreached",
                                "queuecomplete"
                            ];
                            this.prototype._thumbnailQueue = [];
                            this.prototype._processingThumbnail = false;
                        } // global utility
                    },
                    {
                        key: "extend",
                        value: function extend(target) {
                            for(var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)objects[_key2 - 1] = arguments[_key2];
                            for(var _i4 = 0, _objects = objects; _i4 < _objects.length; _i4++){
                                var object = _objects[_i4];
                                for(var key in object){
                                    var val = object[key];
                                    target[key] = val;
                                }
                            }
                            return target;
                        }
                    },
                    {
                        key: "uuidv4",
                        value: function uuidv4() {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                                var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 0x3 | 0x8;
                                return v.toString(16);
                            });
                        }
                    }
                ]);
                return Dropzone;
            }(Emitter);
            Dropzone.initClass();
            Dropzone.version = "5.9.3"; // This is a map of options for your different dropzones. Add configurations
            // to this object for your different dropzone elemens.
            //
            // Example:
            //
            //     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
            //
            // To disable autoDiscover for a specific element, you can set `false` as an option:
            //
            //     Dropzone.options.myDisabledElementId = false;
            //
            // And in html:
            //
            //     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
            Dropzone.options = {}; // Returns the options for an element or undefined if none available.
            Dropzone.optionsForElement = function(element) {
                // Get the `Dropzone.options.elementId` for this element if it exists
                if (element.getAttribute("id")) return Dropzone.options[camelize(element.getAttribute("id"))];
                else return undefined;
            }; // Holds a list of all dropzone instances
            Dropzone.instances = []; // Returns the dropzone for given element if any
            Dropzone.forElement = function(element) {
                if (typeof element === "string") element = document.querySelector(element);
                if ((element != null ? element.dropzone : undefined) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return element.dropzone;
            }; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.
            Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them
            Dropzone.discover = function() {
                var dropzones;
                if (document.querySelectorAll) dropzones = document.querySelectorAll(".dropzone");
                else {
                    dropzones = []; // IE :(
                    var checkElements = function checkElements(elements) {
                        return function() {
                            var result = [];
                            var _iterator20 = dropzone_createForOfIteratorHelper(elements, true), _step20;
                            try {
                                for(_iterator20.s(); !(_step20 = _iterator20.n()).done;){
                                    var el = _step20.value;
                                    if (/(^| )dropzone($| )/.test(el.className)) result.push(dropzones.push(el));
                                    else result.push(undefined);
                                }
                            } catch (err) {
                                _iterator20.e(err);
                            } finally{
                                _iterator20.f();
                            }
                            return result;
                        }();
                    };
                    checkElements(document.getElementsByTagName("div"));
                    checkElements(document.getElementsByTagName("form"));
                }
                return function() {
                    var result = [];
                    var _iterator21 = dropzone_createForOfIteratorHelper(dropzones, true), _step21;
                    try {
                        for(_iterator21.s(); !(_step21 = _iterator21.n()).done;){
                            var dropzone = _step21.value;
                            // Create a dropzone unless auto discover has been disabled for specific element
                            if (Dropzone.optionsForElement(dropzone) !== false) result.push(new Dropzone(dropzone));
                            else result.push(undefined);
                        }
                    } catch (err) {
                        _iterator21.e(err);
                    } finally{
                        _iterator21.f();
                    }
                    return result;
                }();
            }; // Some browsers support drag and drog functionality, but not correctly.
            //
            // So I created a blocklist of userAgents. Yes, yes. Browser sniffing, I know.
            // But what to do when browsers *theoretically* support an API, but crash
            // when using it.
            //
            // This is a list of regular expressions tested against navigator.userAgent
            //
            // ** It should only be used on browser that *do* support the API, but
            // incorrectly **
            Dropzone.blockedBrowsers = [
                /opera.*(Macintosh|Windows Phone).*version\/12/i
            ]; // Checks if the browser is supported
            Dropzone.isBrowserSupported = function() {
                var capableBrowser = true;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
                    if (!("classList" in document.createElement("a"))) capableBrowser = false;
                    else {
                        if (Dropzone.blacklistedBrowsers !== undefined) // Since this has been renamed, this makes sure we don't break older
                        // configuration.
                        Dropzone.blockedBrowsers = Dropzone.blacklistedBrowsers;
                         // The browser supports the API, but may be blocked.
                        var _iterator22 = dropzone_createForOfIteratorHelper(Dropzone.blockedBrowsers, true), _step22;
                        try {
                            for(_iterator22.s(); !(_step22 = _iterator22.n()).done;){
                                var regex = _step22.value;
                                if (regex.test(navigator.userAgent)) {
                                    capableBrowser = false;
                                    continue;
                                }
                            }
                        } catch (err) {
                            _iterator22.e(err);
                        } finally{
                            _iterator22.f();
                        }
                    }
                } else capableBrowser = false;
                return capableBrowser;
            };
            Dropzone.dataURItoBlob = function(dataURI) {
                // convert base64 to raw binary data held in a string
                // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                var byteString = atob(dataURI.split(",")[1]); // separate out the mime component
                var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // write the bytes of the string to an ArrayBuffer
                var ab = new ArrayBuffer(byteString.length);
                var ia = new Uint8Array(ab);
                for(var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--)ia[i] = byteString.charCodeAt(i);
                 // write the ArrayBuffer to a blob
                return new Blob([
                    ab
                ], {
                    type: mimeString
                });
            }; // Returns an array without the rejected item
            var without = function without(list, rejectedItem) {
                return list.filter(function(item) {
                    return item !== rejectedItem;
                }).map(function(item) {
                    return item;
                });
            }; // abc-def_ghi -> abcDefGhi
            var camelize = function camelize(str) {
                return str.replace(/[\-_](\w)/g, function(match) {
                    return match.charAt(1).toUpperCase();
                });
            }; // Creates an element from string
            Dropzone.createElement = function(string) {
                var div = document.createElement("div");
                div.innerHTML = string;
                return div.childNodes[0];
            }; // Tests if given element is inside (or simply is) the container
            Dropzone.elementInside = function(element, container) {
                if (element === container) return true;
                 // Coffeescript doesn't support do/while loops
                while(element = element.parentNode){
                    if (element === container) return true;
                }
                return false;
            };
            Dropzone.getElement = function(el, name) {
                var element;
                if (typeof el === "string") element = document.querySelector(el);
                else if (el.nodeType != null) element = el;
                if (element == null) throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
                return element;
            };
            Dropzone.getElements = function(els, name) {
                var el, elements;
                if (els instanceof Array) {
                    elements = [];
                    try {
                        var _iterator23 = dropzone_createForOfIteratorHelper(els, true), _step23;
                        try {
                            for(_iterator23.s(); !(_step23 = _iterator23.n()).done;){
                                el = _step23.value;
                                elements.push(this.getElement(el, name));
                            }
                        } catch (err) {
                            _iterator23.e(err);
                        } finally{
                            _iterator23.f();
                        }
                    } catch (e) {
                        elements = null;
                    }
                } else if (typeof els === "string") {
                    elements = [];
                    var _iterator24 = dropzone_createForOfIteratorHelper(document.querySelectorAll(els), true), _step24;
                    try {
                        for(_iterator24.s(); !(_step24 = _iterator24.n()).done;){
                            el = _step24.value;
                            elements.push(el);
                        }
                    } catch (err1) {
                        _iterator24.e(err1);
                    } finally{
                        _iterator24.f();
                    }
                } else if (els.nodeType != null) elements = [
                    els
                ];
                if (elements == null || !elements.length) throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
                return elements;
            }; // Asks the user the question and calls accepted or rejected accordingly
            //
            // The default implementation just uses `window.confirm` and then calls the
            // appropriate callback.
            Dropzone.confirm = function(question, accepted, rejected) {
                if (window.confirm(question)) return accepted();
                else if (rejected != null) return rejected();
            }; // Validates the mime type like this:
            //
            // https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
            Dropzone.isValidFile = function(file, acceptedFiles) {
                if (!acceptedFiles) return true;
                 // If there are no accepted mime types, it's OK
                acceptedFiles = acceptedFiles.split(",");
                var mimeType = file.type;
                var baseMimeType = mimeType.replace(/\/.*$/, "");
                var _iterator25 = dropzone_createForOfIteratorHelper(acceptedFiles, true), _step25;
                try {
                    for(_iterator25.s(); !(_step25 = _iterator25.n()).done;){
                        var validType = _step25.value;
                        validType = validType.trim();
                        if (validType.charAt(0) === ".") {
                            if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return true;
                        } else if (/\/\*$/.test(validType)) {
                            // This is something like a image/* mime type
                            if (baseMimeType === validType.replace(/\/.*$/, "")) return true;
                        } else {
                            if (mimeType === validType) return true;
                        }
                    }
                } catch (err) {
                    _iterator25.e(err);
                } finally{
                    _iterator25.f();
                }
                return false;
            }; // Augment jQuery
            if (typeof jQuery !== "undefined" && jQuery !== null) jQuery.fn.dropzone = function(options) {
                return this.each(function() {
                    return new Dropzone(this, options);
                });
            };
             // Dropzone file status codes
            Dropzone.ADDED = "added";
            Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
            // or uploading.
            Dropzone.ACCEPTED = Dropzone.QUEUED;
            Dropzone.UPLOADING = "uploading";
            Dropzone.PROCESSING = Dropzone.UPLOADING; // alias
            Dropzone.CANCELED = "canceled";
            Dropzone.ERROR = "error";
            Dropzone.SUCCESS = "success";
            /*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */ // Detecting vertical squash in loaded image.
            // Fixes a bug which squash image vertically while drawing into canvas for some images.
            // This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
            var detectVerticalSquash = function detectVerticalSquash(img) {
                var iw = img.naturalWidth;
                var ih = img.naturalHeight;
                var canvas = document.createElement("canvas");
                canvas.width = 1;
                canvas.height = ih;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih), data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.
                var sy = 0;
                var ey = ih;
                var py = ih;
                while(py > sy){
                    var alpha = data[(py - 1) * 4 + 3];
                    if (alpha === 0) ey = py;
                    else sy = py;
                    py = ey + sy >> 1;
                }
                var ratio = py / ih;
                if (ratio === 0) return 1;
                else return ratio;
            }; // A replacement for context.drawImage
            // (args are for source and destination).
            var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
                var vertSquashRatio = detectVerticalSquash(img);
                return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
            }; // Based on MinifyJpeg
            // Source: http://www.perry.cz/files/ExifRestorer.js
            // http://elicon.blog57.fc2.com/blog-entry-206.html
            var ExifRestore = /*#__PURE__*/ function() {
                function ExifRestore() {
                    dropzone_classCallCheck(this, ExifRestore);
                }
                dropzone_createClass(ExifRestore, null, [
                    {
                        key: "initClass",
                        value: function initClass() {
                            this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        }
                    },
                    {
                        key: "encode64",
                        value: function encode64(input) {
                            var output = "";
                            var chr1 = undefined;
                            var chr2 = undefined;
                            var chr3 = "";
                            var enc1 = undefined;
                            var enc2 = undefined;
                            var enc3 = undefined;
                            var enc4 = "";
                            var i = 0;
                            while(true){
                                chr1 = input[i++];
                                chr2 = input[i++];
                                chr3 = input[i++];
                                enc1 = chr1 >> 2;
                                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                                enc4 = chr3 & 63;
                                if (isNaN(chr2)) enc3 = enc4 = 64;
                                else if (isNaN(chr3)) enc4 = 64;
                                output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                                chr1 = chr2 = chr3 = "";
                                enc1 = enc2 = enc3 = enc4 = "";
                                if (!(i < input.length)) break;
                            }
                            return output;
                        }
                    },
                    {
                        key: "restore",
                        value: function restore(origFileBase64, resizedFileBase64) {
                            if (!origFileBase64.match("data:image/jpeg;base64,")) return resizedFileBase64;
                            var rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
                            var segments = this.slice2Segments(rawImage);
                            var image = this.exifManipulation(resizedFileBase64, segments);
                            return "data:image/jpeg;base64,".concat(this.encode64(image));
                        }
                    },
                    {
                        key: "exifManipulation",
                        value: function exifManipulation(resizedFileBase64, segments) {
                            var exifArray = this.getExifArray(segments);
                            var newImageArray = this.insertExif(resizedFileBase64, exifArray);
                            var aBuffer = new Uint8Array(newImageArray);
                            return aBuffer;
                        }
                    },
                    {
                        key: "getExifArray",
                        value: function getExifArray(segments) {
                            var seg = undefined;
                            var x = 0;
                            while(x < segments.length){
                                seg = segments[x];
                                if (seg[0] === 255 & seg[1] === 225) return seg;
                                x++;
                            }
                            return [];
                        }
                    },
                    {
                        key: "insertExif",
                        value: function insertExif(resizedFileBase64, exifArray) {
                            var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
                            var buf = this.decode64(imageData);
                            var separatePoint = buf.indexOf(255, 3);
                            var mae = buf.slice(0, separatePoint);
                            var ato = buf.slice(separatePoint);
                            var array = mae;
                            array = array.concat(exifArray);
                            array = array.concat(ato);
                            return array;
                        }
                    },
                    {
                        key: "slice2Segments",
                        value: function slice2Segments(rawImageArray) {
                            var head = 0;
                            var segments = [];
                            while(true){
                                var length;
                                if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) break;
                                if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) head += 2;
                                else {
                                    length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                                    var endPoint = head + length + 2;
                                    var seg = rawImageArray.slice(head, endPoint);
                                    segments.push(seg);
                                    head = endPoint;
                                }
                                if (head > rawImageArray.length) break;
                            }
                            return segments;
                        }
                    },
                    {
                        key: "decode64",
                        value: function decode64(input) {
                            var output = "";
                            var chr1 = undefined;
                            var chr2 = undefined;
                            var chr3 = "";
                            var enc1 = undefined;
                            var enc2 = undefined;
                            var enc3 = undefined;
                            var enc4 = "";
                            var i = 0;
                            var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                            var base64test = /[^A-Za-z0-9\+\/\=]/g;
                            if (base64test.exec(input)) console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
                            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                            while(true){
                                enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                                enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                                enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                                enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                                chr1 = enc1 << 2 | enc2 >> 4;
                                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                                chr3 = (enc3 & 3) << 6 | enc4;
                                buf.push(chr1);
                                if (enc3 !== 64) buf.push(chr2);
                                if (enc4 !== 64) buf.push(chr3);
                                chr1 = chr2 = chr3 = "";
                                enc1 = enc2 = enc3 = enc4 = "";
                                if (!(i < input.length)) break;
                            }
                            return buf;
                        }
                    }
                ]);
                return ExifRestore;
            }();
            ExifRestore.initClass();
            /*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */ // @win window reference
            // @fn function reference
            var contentLoaded = function contentLoaded(win, fn) {
                var done = false;
                var top = true;
                var doc = win.document;
                var root = doc.documentElement;
                var add = doc.addEventListener ? "addEventListener" : "attachEvent";
                var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
                var pre = doc.addEventListener ? "" : "on";
                var init = function init(e) {
                    if (e.type === "readystatechange" && doc.readyState !== "complete") return;
                    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
                    if (!done && (done = true)) return fn.call(win, e.type || e);
                };
                var poll = function poll() {
                    try {
                        root.doScroll("left");
                    } catch (e) {
                        setTimeout(poll, 50);
                        return;
                    }
                    return init("poll");
                };
                if (doc.readyState !== "complete") {
                    if (doc.createEventObject && root.doScroll) {
                        try {
                            top = !win.frameElement;
                        } catch (error) {}
                        if (top) poll();
                    }
                    doc[add](pre + "DOMContentLoaded", init, false);
                    doc[add](pre + "readystatechange", init, false);
                    return win[add](pre + "load", init, false);
                }
            }; // As a single function to be able to write tests.
            Dropzone._autoDiscoverFunction = function() {
                if (Dropzone.autoDiscover) return Dropzone.discover();
            };
            contentLoaded(window, Dropzone._autoDiscoverFunction);
            function __guard__(value, transform) {
                return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
            }
            function __guardMethod__(obj, methodName, transform) {
                if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") return transform(obj, methodName);
                else return undefined;
            }
            /// Make Dropzone a global variable.
            window.Dropzone = Dropzone;
            /* harmony default export */ var dropzone_dist = Dropzone;
        }();
        /******/ return __webpack_exports__;
    /******/ }();
});

},{}],"4D1jM":[function(require,module,exports) {
/* global interpolate, gettext, ngettext */ var _utils = require("./utils");
var _dialog = require("./dialog");
var _mql = require("./mql");
function entryAction(type, pk, redirect = false) {
    return (0, _utils.gqlc)({
        query: `mutation{entry{${type}(pk:"${pk}"){feedback ${redirect ? "redirect" : ""}}}}`
    });
}
(0, _utils.Handler)("a.favorite[role='button']", "click", function() {
    const pk = this.closest(".entry-full").getAttribute("data-id");
    (0, _utils.gqlc)({
        query: `mutation{entry{favorite(pk:"${pk}"){feedback count}}}`
    }).then((response)=>{
        const count = response.data.entry.favorite.count;
        const countHolder = this.nextElementSibling;
        this.classList.toggle("active");
        if (count === 0) {
            countHolder.textContent = "";
            countHolder.setAttribute("tabindex", "-1");
        } else {
            countHolder.textContent = count;
            countHolder.setAttribute("tabindex", "0");
        }
        this.parentNode.querySelector("span.favorites-list").setAttribute("data-loaded", "false");
    });
});
(0, _utils.Handler)("a.fav-count[role='button']", "click", function() {
    const favoritesList = this.nextElementSibling;
    if (favoritesList.getAttribute("data-loaded") === "true") return;
    favoritesList.innerHTML = "<div class='px-3 py-1'><div class='spinning'><span style='font-size: 1.25em'>&orarr;</span></div></div>";
    const pk = this.closest(".entry-full").getAttribute("data-id");
    (0, _utils.gqlc)({
        query: `{entry{favoriters(pk:${pk}){username slug isNovice}}}`
    }).then((response)=>{
        const allUsers = response.data.entry.favoriters;
        const authors = allUsers.filter((user)=>user.isNovice === false);
        const novices = allUsers.filter((user)=>user.isNovice === true);
        favoritesList.innerHTML = "";
        favoritesList.setAttribute("data-loaded", "true");
        if (!allUsers.length) {
            favoritesList.innerHTML = `<span class='p-2'>${gettext("actually, nothing here.")}</span>`;
            return;
        }
        let favList = "";
        if (authors.length > 0) {
            authors.forEach((author)=>{
                favList += `<a class="author" href="/author/${author.slug}/">@${author.username}</a>`;
            });
            favoritesList.innerHTML = favList;
        }
        if (novices.length > 0) {
            const noviceString = interpolate(ngettext("... %(count)s novice", "... %(count)s novices", novices.length), {
                count: novices.length
            }, true);
            const noviceToggle = (0, _utils.template)(`<a role="button" tabindex="0">${noviceString}</a>`);
            const noviceList = (0, _utils.template)(`<span class="dj-hidden"></span>`);
            favoritesList.append(noviceToggle);
            noviceToggle.addEventListener("click", ()=>{
                noviceList.classList.toggle("dj-hidden");
            });
            favList = "";
            novices.forEach((novice)=>{
                favList += `<a class="novice" href="/author/${novice.slug}/">@${novice.username}</a>`;
            });
            noviceList.innerHTML = favList;
            favoritesList.append(noviceList);
        }
    });
});
(0, _utils.Handler)("a.twitter[role='button'], a.facebook[role='button']", "click", function() {
    const base = this.classList.contains("twitter") ? "https://twitter.com/intent/tweet?text=" : "https://www.facebook.com/sharer/sharer.php?u=";
    const entry = this.closest(".entry-footer").querySelector(".meta .permalink").getAttribute("href");
    const windowReference = window.open();
    windowReference.opener = null;
    windowReference.location = `${base}${window.location.origin}${entry}`;
});
(0, _utils.Handler)(".entry-vote .vote", "click", function() {
    const type = this.classList.contains("upvote") ? "upvote" : "downvote";
    const entryId = this.closest(".entry-full").getAttribute("data-id");
    entryAction(type, entryId).then((response)=>{
        const feedback = response.data.entry[type].feedback;
        if (feedback == null) {
            const sibling = this.nextElementSibling || this.previousElementSibling;
            sibling.classList.remove("active");
            this.classList.toggle("active");
        } else (0, _utils.notify)(feedback, "error", 4000);
    });
});
(0, _utils.Handler)(".comment-vote .vote", "click", function() {
    const action = this.classList.contains("upvote") ? "upvote" : "downvote";
    const pk = this.parentNode.getAttribute("data-id");
    (0, _utils.gqlc)({
        query: "mutation($pk:ID!,$action:String!){entry{votecomment(pk:$pk,action:$action){count}}}",
        variables: {
            pk,
            action
        }
    }).then((response)=>{
        if (response.errors) {
            response.errors.forEach((error)=>{
                (0, _utils.notify)(error.message, "error");
            });
            return;
        }
        this.parentNode.querySelectorAll(".vote").forEach((el)=>{
            el !== this && el.classList.remove("active");
        });
        this.classList.toggle("active");
        this.parentNode.querySelector(".rating").textContent = response.data.entry.votecomment.count;
    });
});
(0, _utils.Handler)(".entry-actions", "click", function(event) {
    const target = event.target.closest(".dropdown-item");
    const [action] = [
        "message",
        "pin",
        "block",
        "delete",
        "copy",
        "share"
    ].filter((action)=>target.classList.contains(action));
    switch(action){
        case "message":
            {
                const recipient = this.parentNode.querySelector(".username").textContent;
                const entryInQuestion = this.closest(".entry-full").getAttribute("data-id");
                (0, _dialog.showMessageDialog)(recipient, `\`#${entryInQuestion}\`:\n`, this.previousElementSibling);
                break;
            }
        case "pin":
            {
                const entryID = this.closest(".entry-full").getAttribute("data-id");
                const body = (0, _utils.one)("body");
                entryAction("pin", entryID).then((response)=>{
                    (0, _utils.many)("a.action[role='button']").forEach((action)=>{
                        action.classList.remove("loaded");
                    });
                    if (body.getAttribute("data-pin") === entryID) body.removeAttribute("data-pin");
                    else body.setAttribute("data-pin", entryID);
                    (0, _utils.notify)(response.data.entry.pin.feedback);
                });
                break;
            }
        case "block":
            {
                const target1 = this.parentNode.querySelector(".username").textContent;
                const profile = (0, _utils.one)(".profile-username");
                const re = profile && profile.textContent === target1;
                (0, _dialog.showBlockDialog)(target1, re, this.previousElementSibling);
                break;
            }
        case "delete":
            if (confirm(gettext("are you sure to delete?"))) {
                const entry = this.closest(".entry-full");
                const redirect = (0, _utils.many)("ul.topic-view-entries li.entry-full").length === 1;
                entryAction("delete", entry.getAttribute("data-id"), redirect).then((response)=>{
                    const data = response.data.entry.delete;
                    if (redirect) window.location = data.redirect;
                    else {
                        entry.remove();
                        (0, _utils.notify)(data.feedback);
                    }
                });
            }
            break;
        case "copy":
            {
                const link = this.parentNode.querySelector(".permalink").href;
                navigator.clipboard.writeText(link).then(()=>{
                    (0, _utils.notify)(gettext("link copied to clipboard."), "info");
                });
                break;
            }
        case "share":
            {
                const url = this.parentNode.querySelector(".permalink").href;
                navigator.share({
                    url
                });
                break;
            }
    }
});
// Render actions
const icon = (name, a = 16, b = 16)=>`<svg fill="currentColor" viewBox="0 0 ${a} ${b}"><use href="#${name}"></use></svg>`;
(0, _utils.Handler)(".entry-full a.action[role='button']", "click", function() {
    if (this.classList.contains("loaded")) return;
    const entry = this.closest(".entry-full");
    const entryID = entry.getAttribute("data-id");
    const topicTitle = encodeURIComponent(entry.closest("[data-topic]").getAttribute("data-topic"));
    const actions = this.parentNode.querySelector(".entry-actions");
    const pinLabel = entryID === (0, _utils.one)("body").getAttribute("data-pin") ? gettext("unpin from profile") : gettext("pin to profile");
    actions.innerHTML = "";
    let menuItems = "";
    if (0, _utils.userIsAuthenticated) {
        if (entry.classList.contains("commentable")) menuItems += `<a target="_blank" href="/entry/${entryID}/comment/" class="dropdown-item">${icon("comment")}${gettext("comment")}</a>`;
        if (entry.classList.contains("owner")) {
            menuItems += `<a role="button" tabindex="0" class="dropdown-item pin">${icon("pin")}${pinLabel}</a>`;
            menuItems += `<a role="button" tabindex="0" class="dropdown-item delete">${icon("trash")}${gettext("delete")}</a>`;
            menuItems += `<a href="/entry/update/${entryID}/" class="dropdown-item">${icon("edit", 44, 44)}${gettext("edit")}</a>`;
        } else if (!entry.classList.contains("private")) {
            menuItems += `<a role="button" tabindex="0" class="dropdown-item message">${icon("message")}${gettext("message")}</a>`;
            menuItems += `<a role="button" tabindex="0" class="dropdown-item block">${icon("block")}${gettext("block")}</a>`;
        }
    }
    if ((0, _mql.isTouchDevice) && !navigator.share) menuItems += `<a role="button" tabindex="0" class="dropdown-item copy">${icon("link")}${gettext("copy link")}</a>`;
    if (navigator.share) menuItems += `<a role="button" tabindex="0" class="dropdown-item share">${icon("share")}${gettext("share")}</a>`;
    menuItems += `<a class="dropdown-item" href="/contact/?referrer_entry=${entryID}&referrer_topic=${topicTitle}">${icon("flag")}${gettext("report")}</a>`;
    actions.innerHTML = menuItems;
    this.classList.add("loaded");
});
// External entry actions
(0, _utils.Handle)(".delete-entry-redirect", "click", function() {
    if (confirm(gettext("are you sure to delete?"))) entryAction("delete", this.getAttribute("data-target-entry"), true).then((response)=>{
        window.location = response.data.entry.delete.redirect;
    });
});
(0, _utils.Handle)(".pin-sync", "click", function() {
    entryAction("pin", this.getAttribute("data-id")).then((response)=>{
        (0, _utils.notify)(response.data.entry.pin.feedback);
        window.location = location;
    });
});
// Read more functionality
function truncateEntryText() {
    const overflown = (el)=>el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
    (0, _utils.many)("article.entry p").forEach((el)=>{
        if (overflown(el)) {
            const readMore = (0, _utils.template)(`<div role="button" tabindex="0" class="read_more">${gettext("continue reading")}</div>`);
            el.parentNode.append(readMore);
            (0, _utils.Handle)(readMore, "click", function() {
                el.style.maxHeight = "none";
                this.style.display = "none";
            });
        }
    });
}
window.onload = ()=>{
    if ((0, _utils.one)("body").classList.contains("has-entries")) truncateEntryText();
};
// Async draft
function draftEntry(content, pk = null, title = null) {
    return (0, _utils.gqlc)({
        query: "mutation($content:String!,$pk:ID,$title:String){entry{edit(content:$content,pk:$pk,title:$title){pk,content,feedback}}}",
        variables: {
            content,
            title,
            pk
        }
    }).then((response)=>{
        if (response.errors) response.errors.forEach((error)=>{
            (0, _utils.notify)(error.message, "error");
        });
        else {
            const btn = (0, _utils.one)("button.draft-async");
            btn.textContent = gettext("save changes");
            if (!btn.hasAttribute("data-pk")) // ^^ Only render delete button once.
            btn.after((0, _utils.template)(`<button type="button" class="btn btn-django-link fs-90 ml-3 draft-del">${gettext("delete")}</button>`));
            window.onbeforeunload = null;
            (0, _utils.notify)(response.data.entry.edit.feedback, "info");
            return response;
        }
    });
}
const titleInput = (0, _utils.one)("#user_title_edit");
(0, _utils.Handle)("button.draft-async", "click", function() {
    const title = this.getAttribute("data-title") || titleInput && titleInput.value;
    const pk = this.getAttribute("data-pk");
    const content = (0, _utils.one)("#user_content_edit").value;
    if (!content.trim() || title !== null && !title.trim()) {
        // Check if content is not empty, also check title (if provided).
        (0, _utils.notify)(gettext("if only you could write down something"), "error");
        return;
    }
    if (pk) {
        draftEntry(content, pk).then((response)=>{
            if (response) (0, _utils.one)("p.pw-text").innerHTML = response.data.entry.edit.content;
        });
        return; // Don't check title.
    }
    if (title) draftEntry(content, null, title).then((response)=>{
        if (response) {
            (0, _utils.one)(".user-content").prepend((0, _utils.template)(`<section class="pw-area"><h2 class="h5 text-muted">${gettext("preview")}</h2><p class="text-formatted pw-text">${response.data.entry.edit.content}</p></section>`));
            const pk = response.data.entry.edit.pk;
            this.setAttribute("data-pk", pk);
            (0, _utils.one)("#content-form").prepend((0, _utils.template)(`<input type="hidden" name="pub_draft_pk" value="${pk}" />`));
            if (titleInput) {
                titleInput.disabled = true;
                titleInput.classList.add("highlighted");
            }
        }
    });
});
(0, _utils.Handle)(document, "click", (event)=>{
    if (event.target.matches("button.draft-del") && confirm(gettext("Are you sure?"))) {
        const btn = (0, _utils.one)("button.draft-async");
        entryAction("delete", btn.getAttribute("data-pk")).then((response)=>{
            (0, _utils.one)("section.pw-area").remove();
            (0, _utils.one)("#user_content_edit").value = "";
            (0, _utils.one)("[name=pub_draft_pk]").remove();
            btn.textContent = gettext("keep this as draft");
            btn.removeAttribute("data-pk");
            event.target.remove();
            if (titleInput) {
                titleInput.disabled = false;
                titleInput.classList.remove("highlighted");
            }
            (0, _utils.notify)(response.data.entry.delete.feedback, "info");
        });
    }
});
(0, _utils.Handle)(".allowsave", "keydown", (event)=>{
    if (event.ctrlKey || event.metaKey) {
        if (String.fromCharCode(event.which).toLowerCase() === "s") {
            event.preventDefault();
            (0, _utils.one)("button.draft-async").dispatchEvent(new Event("click"));
        }
    }
});

},{"./utils":"1KXHS","./dialog":"gxVme","./mql":"hAKy1"}],"gxVme":[function(require,module,exports) {
/* global gettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showBlockDialog", ()=>showBlockDialog);
parcelHelpers.export(exports, "showMessageDialog", ()=>showMessageDialog);
var _utils = require("./utils");
var _user = require("./user");
function showBlockDialog(recipient, redirect = true, returnTo = null) {
    const button = (0, _utils.one)("#block_user");
    button.setAttribute("data-username", recipient);
    button.setAttribute("data-re", redirect);
    (0, _utils.one)("#username-holder").textContent = recipient;
    const modal = (0, _utils.one)("#blockUserModal");
    modal._modalInstance.show(returnTo);
}
(0, _utils.Handle)("#block_user", "click", function() {
    // Modal button click event
    const targetUser = this.getAttribute("data-username");
    const re = this.getAttribute("data-re") === "true";
    if (!re) (0, _utils.many)(".entry-full").forEach((entry)=>{
        if (entry.querySelector(".meta .username").textContent === targetUser) entry.remove();
    });
    (0, _user.userAction)("block", targetUser, null, re);
});
function showMessageDialog(recipient, extraContent, returnTo = null) {
    const msgModal = (0, _utils.one)("#sendMessageModal");
    (0, _utils.one)("#sendMessageModal span.username").textContent = recipient;
    if (extraContent) (0, _utils.one)("#sendMessageModal textarea#message_body").value = extraContent;
    msgModal.setAttribute("data-for", recipient);
    msgModal._modalInstance.show(returnTo);
}
function composeMessage(recipient, body) {
    const variables = {
        recipient,
        body
    };
    const query = `mutation compose($body:String!,$recipient:String!){message{compose(body:$body,recipient:$recipient){feedback}}}`;
    return (0, _utils.gqlc)({
        query,
        variables
    }).then(function(response) {
        (0, _utils.notify)(response.data.message.compose.feedback);
    });
}
(0, _utils.Handle)("#send_message_btn", "click", function() {
    const textarea = (0, _utils.one)("#sendMessageModal textarea");
    const msgModal = (0, _utils.one)("#sendMessageModal");
    const body = textarea.value;
    if (body.length < 3) {
        // not strictly needed but written so as to reduce api calls.
        (0, _utils.notify)(gettext("keşke bir şeyler yazsaydın"), "error");
        return;
    }
    if (!(0, _utils.isValidText)(body)) {
        (0, _utils.notify)(gettext("yasaklı karakterler mevcut."), "error");
        return;
    }
    this.disabled = true;
    composeMessage(msgModal.getAttribute("data-for"), body).then(()=>{
        msgModal._modalInstance.hide();
        textarea.value = "";
    }).finally(()=>{
        this.disabled = false;
    });
});

},{"./utils":"1KXHS","./user":"fRc8P","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"fRc8P":[function(require,module,exports) {
/* global gettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAction", ()=>userAction);
var _utils = require("./utils");
var _dialog = require("./dialog");
function userAction(type, recipient, loc = null, re = true) {
    return (0, _utils.gqlc)({
        query: `mutation{user{${type}(username:"${recipient}"){feedback redirect}}}`
    }).then(function(response) {
        const info = response.data.user[type];
        if (re && (loc || info.redirect)) window.location = loc || info.redirect;
        else (0, _utils.notify)(info.feedback);
    });
}
(0, _utils.Handler)(".block-user-trigger", "click", function() {
    const sync = this.classList.contains("sync");
    const recipient = this.getAttribute("data-username");
    if (sync) return userAction("block", recipient, location);
    userAction("block", recipient, null, false).then((function() {
        (0, _utils.toggleText)(this, gettext("remove block"), gettext("block this guy"));
    }).bind(this));
});
(0, _utils.Handler)(".follow-user-trigger", "click", function() {
    const targetUser = this.parentNode.getAttribute("data-username");
    userAction("follow", targetUser);
    (0, _utils.toggleText)(this.querySelector("a"), gettext("follow"), gettext("unfollow"));
});
(0, _utils.Handle)("ul.user-links", "click", function(event) {
    const recipient = this.getAttribute("data-username");
    if (event.target.matches("li.block-user a")) (0, _dialog.showBlockDialog)(recipient, true, event.target);
    else if (event.target.matches("li.send-message a")) (0, _dialog.showMessageDialog)(recipient, null, event.target);
});

},{"./utils":"1KXHS","./dialog":"gxVme","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"jfIzP":[function(require,module,exports) {
var _mql = require("./mql");
var _leftFrame = require("./left-frame");
var _utils = require("./utils");
function dictToParameters(dict) {
    const str = [];
    for(const key in dict)// a. check if the property/key is defined in the object itself, not in parent
    // b. check if the key is not empty
    if (Object.prototype.hasOwnProperty.call(dict, key) && dict[key]) str.push(encodeURIComponent(key) + "=" + encodeURIComponent(dict[key]));
    return str.join("&");
}
function populateSearchResults(searchParameters) {
    if (!searchParameters) return;
    const slug = "search";
    if (0, _mql.userIsMobile) window.location = `/threads/${slug}/?${searchParameters}`;
    (0, _leftFrame.LeftFrame).populate(slug, 1, null, searchParameters);
}
(0, _utils.Handle)("button#perform_advanced_search", "click", ()=>{
    const favoritesElement = (0, _utils.one)("input#in_favorites_dropdown");
    const keywords = (0, _utils.one)("input#keywords_dropdown").value;
    const authorNick = (0, _utils.one)("input#author_nick_dropdown").value;
    const isNiceOnes = (0, _utils.one)("input#nice_ones_dropdown").checked;
    const isFavorites = favoritesElement && favoritesElement.checked;
    const fromDate = (0, _utils.one)("input#date_from_dropdown").value;
    const toDate = (0, _utils.one)("input#date_to_dropdown").value;
    const ordering = (0, _utils.one)("select#ordering_dropdown").value;
    const keys = {
        keywords,
        author_nick: authorNick,
        is_nice_ones: isNiceOnes,
        is_in_favorites: isFavorites,
        from_date: fromDate,
        to_date: toDate,
        ordering
    };
    populateSearchResults(dictToParameters(keys));
});
(0, _utils.Handler)("body", "click", (event)=>{
    if (event.target.matches("a[role=button].quicksearch")) {
        const term = event.target.getAttribute("data-keywords");
        let parameter;
        if (term.startsWith("@") && term.substr(1)) parameter = `author_nick=${term.substr(1)}`;
        else parameter = `keywords=${term}`;
        const searchParameters = parameter + "&ordering=newer";
        populateSearchResults(searchParameters);
    }
});

},{"./mql":"hAKy1","./left-frame":"3yfAd","./utils":"1KXHS"}],"3yfAd":[function(require,module,exports) {
/* global gettext */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LeftFrame", ()=>LeftFrame);
var _utils = require("./utils");
var _mql = require("./mql");
function setExclusions(exclusions) {
    const cookieExclusions = JSON.parse((0, _utils.cookies).get("lfex") || "null");
    if (exclusions) {
        if (cookieExclusions) exclusions.forEach((exclusion)=>{
            if (cookieExclusions.includes(exclusion)) exclusions = cookieExclusions.filter((item)=>item !== exclusion);
            else {
                cookieExclusions.push(exclusion);
                exclusions = cookieExclusions;
            }
        });
        (0, _utils.cookies).set("lfex", JSON.stringify(exclusions), {
            expires: 90
        });
        return exclusions;
    } else return cookieExclusions;
}
class LeftFrame {
    setCookies() {
        (0, _utils.cookies).set("lfac", this.slug);
        (0, _utils.cookies).set("lfnp", this.page);
        if (this.tab) (0, _utils.cookies).set("lfat", this.tab);
        else this.tab = (0, _utils.cookies).get("lfat") || null;
        if (this.extra) (0, _utils.cookies).set("lfea", this.extra);
        else this.extra = (0, _utils.cookies).get("lfea") || null;
        if (this.slug === "today-in-history") {
            const cookieYear = (0, _utils.cookies).get("lfsy");
            if (!this.year) this.year = cookieYear || null;
            else (0, _utils.cookies).set("lfsy", this.year);
        } else if (this.slug === "search") {
            const cookieSearchKeys = (0, _utils.cookies).get("lfsp");
            if (!this.searchKeys) this.searchKeys = cookieSearchKeys || null;
            else (0, _utils.cookies).set("lfsp", this.searchKeys);
        } else if (this.slug === "popular") this.exclusions = setExclusions(this.exclusions);
    }
    call() {
        this.loadIndicator.style.display = "inline";
        const variables = {
            slug: this.slug,
            year: this.year,
            page: this.page,
            searchKeys: this.searchKeys,
            refresh: this.refresh,
            tab: this.tab,
            exclusions: this.exclusions,
            extra: this.extra
        };
        const query = `query($slug: String!,$year:Int,$page:Int,$searchKeys:String,$refresh:Boolean,$tab:String,
            $exclusions:[String],$extra:JSONString){topics(slug:$slug,year:$year,page:$page,searchKeys:$searchKeys,
            refresh:$refresh,tab:$tab,exclusions:$exclusions,extra:$extra){
                safename refreshCount year yearRange slugIdentifier parameters
                page { objectList { slug title count } paginator { pageRange numPages } number hasOtherPages hasNext }
                tabs{current available{name, safename}}
                exclusions{active, available{name, slug, description}}
            }}`;
        (0, _utils.gqlc)({
            query,
            variables
        }, true).then((response)=>{
            if (response.errors) {
                this.loadIndicator.style.display = "none";
                (0, _utils.notify)(gettext("something went wrong"), "error");
            } else this.render(response.data.topics);
        });
    }
    render(data) {
        (0, _utils.one)("#left-frame-nav").scroll({
            top: 0,
            behavior: "smooth"
        });
        (0, _utils.one)("#current_category_name").textContent = data.safename;
        this.renderRefreshButton(data.refreshCount);
        this.renderYearSelector(data.year, data.yearRange);
        this.renderPagination(data.page.hasOtherPages, data.page.paginator.pageRange, data.page.paginator.numPages, data.page.number, data.page.hasNext);
        this.renderTopicList(data.page.objectList, data.slugIdentifier, data.parameters);
        this.renderShowMoreButton(data.page.number, data.page.hasOtherPages);
        this.renderTabs(data.tabs);
        this.renderExclusions(data.exclusions);
        this.loadIndicator.style.display = "none";
    }
    renderRefreshButton(count) {
        const refreshButton = (0, _utils.one)("#refresh_bugun");
        if (count) {
            refreshButton.classList.remove("dj-hidden");
            (0, _utils.one)("span#new_content_count").textContent = `(${count})`;
        } else refreshButton.classList.add("dj-hidden");
    }
    renderShowMoreButton(currentPage, isPaginated) {
        const showMoreButton = (0, _utils.one)("a#show_more");
        if (currentPage !== 1 || !isPaginated) showMoreButton.classList.add("d-none");
        else showMoreButton.classList.remove("d-none");
    }
    renderTabs(tabData) {
        const tabHolder = (0, _utils.one)("ul#left-frame-tabs");
        if (tabData) {
            tabHolder.innerHTML = "";
            tabData.available.forEach((tab)=>{
                tabHolder.innerHTML += `<li class="nav-item"><a role="button" tabindex="0" data-lf-slug="${this.slug}" data-tab="${tab.name}" class="nav-link${tabData.current === tab.name ? " active" : ""}">${tab.safename}</a></li>`;
            });
            tabHolder.classList.remove("dj-hidden");
        } else tabHolder.classList.add("dj-hidden");
    }
    renderExclusions(exclusions) {
        const toggler = (0, _utils.one)("#popular_excluder");
        const categoryHolder = (0, _utils.one)("#exclusion-choices");
        const categoryList = categoryHolder.querySelector("ul.exclusion-choices");
        if (exclusions) {
            categoryList.innerHTML = "";
            toggler.classList.remove("dj-hidden");
            exclusions.available.forEach((category)=>{
                const isActive = exclusions.active.includes(category.slug);
                categoryList.innerHTML += `<li><a role="button" title="${category.description}" ${isActive ? `class="active"` : ""} tabindex="0" data-slug="${category.slug}">#${category.name}</a></li>`;
            });
            if (exclusions.active.length) toggler.classList.add("active");
            else toggler.classList.remove("active");
        } else {
            toggler.classList.add("dj-hidden");
            categoryHolder.classList.add("dj-hidden");
        }
    }
    renderYearSelector(currentYear, yearRange) {
        const yearSelect = (0, _utils.one)("#year_select");
        yearSelect.innerHTML = "";
        if (this.slug === "today-in-history") {
            yearSelect.style.display = "block";
            yearRange.forEach((year)=>{
                yearSelect.innerHTML += `<option ${year === currentYear ? "selected" : ""} id="${year}">${year}</option>`;
            });
        } else yearSelect.style.display = "none";
    }
    renderTopicList(objectList, slugIdentifier, parameters) {
        const topicList = (0, _utils.one)("ul#topic-list");
        if (objectList.length === 0) topicList.innerHTML = `<small>${gettext("nothing here")}</small>`;
        else {
            topicList.innerHTML = "";
            const params = parameters || "";
            let topics = "";
            objectList.forEach((topic)=>{
                if (topic.title.slice(-1) === "?") topics += `<li class="sorulu girdi"><a href="${slugIdentifier}${topic.slug}/${params}">${(0, _utils.notSafe)(topic.title)}<small class="total_entries">${topic.count && topic.count !== "0" ? topic.count : ""}</small></a></li>`;
                else if (topic.title.charAt(0) === "!") topics += `<li class="unlemli girdi"><a href="${slugIdentifier}${topic.slug}/${params}">${(0, _utils.notSafe)(topic.title)}<small class="total_entries">${topic.count && topic.count !== "0" ? topic.count : ""}</small></a></li>`;
                else topics += `<li class="list-group-item girdi"><a href="${slugIdentifier}${topic.slug}/${params}">${(0, _utils.notSafe)(topic.title)}<small class="total_entries">${topic.count && topic.count !== "0" ? topic.count : ""}</small></a></li>`;
            });
            if (topics) topicList.innerHTML = topics;
        }
    }
    renderPagination(isPaginated, pageRange, totalPages, currentPage, hasNext) {
        // Pagination related selectors
        const paginationWrapper = (0, _utils.one)("#lf_pagination_wrapper");
        const pageSelector = (0, _utils.one)("select#left_frame_paginator");
        const totalPagesButton = (0, _utils.one)("#lf_total_pages");
        const nextPageButton = (0, _utils.one)("#lf_navigate_after");
        // Render pagination
        if (isPaginated && currentPage !== 1) {
            // Render Page selector
            pageSelector.innerHTML = "";
            let options = "";
            pageRange.forEach((page)=>{
                options += `<option ${page === currentPage ? "selected" : ""} value="${page}">${page}</option>`;
            });
            pageSelector.innerHTML += options;
            totalPagesButton.textContent = totalPages;
            nextPageButton.classList[hasNext ? "remove" : "add"]("d-none");
            paginationWrapper.classList.remove("dj-hidden");
        } else paginationWrapper.classList.add("dj-hidden");
    }
    static populate(slug, page = 1, ...args) {
        if (0, _mql.userIsMobile) return;
        const leftFrame = new LeftFrame(slug, page, ...args);
        leftFrame.call();
    }
    static refreshPopulate() {
        LeftFrame.populate("today", 1, null, null, true);
    }
    constructor(slug, page = 1, year = null, searchKeys = null, refresh = false, tab = null, exclusions = null, extra = null){
        this.slug = slug;
        this.page = page;
        this.year = year;
        this.refresh = refresh;
        this.searchKeys = searchKeys;
        this.tab = tab;
        this.exclusions = exclusions;
        this.extra = extra;
        this.setCookies();
        this.loadIndicator = (0, _utils.one)("#load_indicator");
    }
}
(0, _utils.Handle)("body", "click", (event)=>{
    // Regular, slug-only
    const delegated = event.target.closest("[data-lf-slug]");
    if (delegated && !(0, _mql.userIsMobile)) {
        const slug = delegated.getAttribute("data-lf-slug");
        const tab = delegated.getAttribute("data-tab") || null;
        const extra = delegated.getAttribute("data-lf-extra") || null;
        LeftFrame.populate(slug, 1, null, null, false, tab, null, extra);
        if (delegated.classList.contains("dropdown-item")) // Prevents dropdown collapsing, good for accessibility.
        event.stopPropagation();
        event.preventDefault();
    }
});
(0, _utils.Handle)("#year_select", "change", function() {
    const selectedYear = this.value;
    LeftFrame.populate("today-in-history", 1, selectedYear);
});
(0, _utils.Handle)("select#left_frame_paginator", "change", function() {
    LeftFrame.populate((0, _utils.cookies).get("lfac"), this.value);
});
const selector = (0, _utils.one)("select#left_frame_paginator");
const totalPagesElement = (0, _utils.one)("#lf_total_pages");
const changeEvent = new Event("change");
(0, _utils.Handle)(totalPagesElement, "click", function() {
    // Navigated to last page
    if (selector.value === this.textContent) return;
    selector.value = this.textContent;
    selector.dispatchEvent(changeEvent);
});
(0, _utils.Handle)("#lf_navigate_before", "click", ()=>{
    // Previous page
    const selected = parseInt(selector.value, 10);
    if (selected - 1 > 0) {
        selector.value = selected - 1;
        selector.dispatchEvent(changeEvent);
    }
});
(0, _utils.Handle)("#lf_navigate_after", "click", ()=>{
    // Subsequent page
    const selected = parseInt(selector.value, 10);
    const max = parseInt(totalPagesElement.textContent, 10);
    if (selected + 1 <= max) {
        selector.value = selected + 1;
        selector.dispatchEvent(changeEvent);
    }
});
(0, _utils.Handle)("a#show_more", "click", function() {
    // Show more button event
    const slug = (0, _utils.cookies).get("lfac");
    if (slug) {
        LeftFrame.populate(slug, 2);
        (0, _utils.one)("#left-frame-nav").scroll(0, 0);
    }
    this.classList.add("d-none");
});
(0, _utils.Handle)("#refresh_bugun", "click", LeftFrame.refreshPopulate);
(0, _utils.Handler)(".exclusion-button", "click", function() {
    this.closest("div").parentNode.querySelector(".exclusion-settings").classList.toggle("dj-hidden");
});
(0, _utils.Handle)("#exclusion-choices", "click", (event)=>{
    if (event.target.tagName === "A") {
        event.target.classList.toggle("active");
        LeftFrame.populate("popular", 1, null, null, null, null, [
            event.target.getAttribute("data-slug")
        ]);
    }
});
(0, _utils.Handle)("#exclusion-settings-mobile", "click", (event)=>{
    if (event.target.tagName === "A") {
        setExclusions([
            event.target.getAttribute("data-slug")
        ]);
        window.location = location;
    }
});
(0, _utils.Handler)("[data-lf-slug]", "click", function() {
    (0, _utils.many)("[data-lf-slug]").forEach((el)=>el.classList.remove("active"));
    (0, _utils.many)(`[data-lf-slug=${this.getAttribute("data-lf-slug")}]`).forEach((el)=>el.classList.add("active"));
});
(0, _utils.Handle)("select#mobile_year_changer", "change", function() {
    window.location = (0, _utils.updateQueryStringParameter)(location.href, "year", this.value);
});
(0, _utils.Handle)("#left-frame-nav", "scroll", function() {
    localStorage.setItem("where", this.scrollTop);
});

},{"./utils":"1KXHS","./mql":"hAKy1","@parcel/transformer-js/src/esmodule-helpers.js":"6ZdKi"}],"gseqk":[function(require,module,exports) {
/* global gettext */ var _utils = require("./utils");
function topicAction(type, pk) {
    return (0, _utils.gqlc)({
        query: `mutation{topic{${type}(pk:"${pk}"){feedback}}}`
    }).then((response)=>{
        (0, _utils.notify)(response.data.topic[type].feedback);
    });
}
(0, _utils.Handle)(".follow-topic-trigger", "click", function() {
    (0, _utils.toggleText)(this, gettext("unfollow"), gettext("follow"));
    topicAction("follow", this.getAttribute("data-topic-id"));
});
// Category suggestion
(0, _utils.Handler)(".suggestion-vote button", "click", function() {
    const direction = this.classList.contains("up") ? 1 : -1;
    const topic = this.parentNode.getAttribute("data-topic");
    const category = this.parentNode.getAttribute("data-category");
    (0, _utils.gqlc)({
        query: "mutation($category:String!,$topic:String!,$direction:Int!){category{suggest(category:$category,topic:$topic,direction:$direction){feedback}}}",
        variables: {
            category,
            topic,
            direction
        }
    }).then((response)=>{
        if (response.errors) response.errors.forEach((error)=>{
            (0, _utils.notify)(error.message, "error");
        });
        else {
            this.classList.toggle("btn-django-link");
            const sibling = this.nextElementSibling || this.previousElementSibling;
            sibling.classList.remove("btn-django-link");
        }
    });
});
// Wish
function wishTopic(title, hint = null) {
    const query = `mutation wish($title:String!,$hint:String){topic{wish(title:$title,hint:$hint){feedback hint}}}`;
    const variables = {
        title,
        hint
    };
    return (0, _utils.gqlc)({
        query,
        variables
    });
}
(0, _utils.Handle)("a.wish-prepare[role=button]", "click", function() {
    this.parentNode.querySelectorAll(":not(.wish-purge):not(.wish-prepare)").forEach((el)=>{
        el.classList.toggle("dj-hidden");
    });
    (0, _utils.toggleText)(this, gettext("someone should populate this"), gettext("nevermind"));
});
(0, _utils.Handle)("a.wish-send[role=button]", "click", function() {
    const textarea = this.parentNode.querySelector("textarea");
    const hint = textarea.value;
    if (hint && !(0, _utils.isValidText)(hint)) {
        (0, _utils.notify)(gettext("this content includes forbidden characters."), "error");
        return;
    }
    const title = this.parentNode.getAttribute("data-topic");
    wishTopic(title, hint).then((response)=>{
        if (response.errors) {
            response.errors.forEach((error)=>{
                (0, _utils.notify)(error.message, "error");
            });
            return;
        }
        textarea.value = "";
        Array.from(this.parentNode.children).forEach((child)=>{
            child.classList.toggle("dj-hidden");
        });
        const hintFormatted = response.data.topic.wish.hint;
        const wishList = (0, _utils.one)("ul#wish-list");
        wishList.classList.remove("dj-hidden");
        wishList.prepend((0, _utils.template)(`<li class="list-group-item owner">${gettext("you just wished for this topic.")} ${hintFormatted ? `${gettext("your hint:")} <p class="m-0 text-formatted"><i>${hintFormatted}</i></p>` : ""}</li>`));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        (0, _utils.notify)(response.data.topic.wish.feedback);
    });
});
(0, _utils.Handle)("a.wish-purge[role=button]", "click", function() {
    const title = this.parentNode.getAttribute("data-topic");
    if (confirm(gettext("are you sure to delete?"))) wishTopic(title).then((response)=>{
        this.classList.toggle("dj-hidden");
        const wishList = (0, _utils.one)("ul#wish-list");
        const popButton = this.parentNode.querySelector(".wish-prepare");
        popButton.textContent = gettext("someone should populate this");
        popButton.classList.toggle("dj-hidden");
        wishList.querySelector("li.owner").remove();
        if (!wishList.children.length) wishList.classList.add("dj-hidden");
        (0, _utils.notify)(response.data.topic.wish.feedback);
    });
});
(0, _utils.Handle)(".snap-user-content", "click", ()=>{
    (0, _utils.one)("#user_content_edit").focus();
});
const topicView = (0, _utils.one)(".topic-view-entries");
const pagination = (0, _utils.one)(".pagination");
if (topicView && pagination) {
    const paginationClone = pagination.cloneNode(true);
    paginationClone.style.justifyContent = "flex-end";
    paginationClone.classList.add("mt-2");
    topicView.after(paginationClone);
}

},{"./utils":"1KXHS"}]},["iXoUH","hYGZz"], "hYGZz", "parcelRequire53a9")

//# sourceMappingURL=index.js.map
