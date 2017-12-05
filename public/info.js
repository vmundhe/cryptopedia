webpackJsonp([1],{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(47)
/* template */
var __vue_template__ = __webpack_require__(48)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Coins/CoinDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4902a146", Component.options)
  } else {
    hotAPI.reload("data-v-4902a146", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ViewInfo = function ViewInfo() {
    return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 50));
};
var ViewMarket = function ViewMarket() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 51));
};
var ViewHistory = function ViewHistory() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 52));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ViewInfo: ViewInfo,
        ViewMarket: ViewMarket,
        ViewHistory: ViewHistory
    },

    data: function data() {
        return {
            tabs: [{
                name: 'info',
                displayName: 'Info'
            }, {
                name: 'markets',
                displayName: 'Market'
            }, {
                name: 'history',
                displayName: 'Historical Data'
            }],
            activeTabName: 'info',
            coinInfo: '',
            exchanges: [],
            history: []
        };
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('api/' + this.$route.params.symbol + '/' + this.$route.params.id).then(function (response) {
            _this.coinInfo = response.data.additional_info;
            _this.exchanges = response.data.exchanges;
            _this.history = response.data.history;
        });
    },


    methods: {
        displayContents: function displayContents(name) {
            return this.activeTabName === name;
        }
    }
});

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "tabs is-boxed" }, [
      _c(
        "ul",
        { staticClass: "coin-detail-tabs" },
        _vm._l(_vm.tabs, function(tab) {
          return _c("li", [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    _vm.activeTabName = tab.name
                  }
                }
              },
              [_vm._v(_vm._s(tab.displayName))]
            )
          ])
        })
      )
    ]),
    _vm._v(" "),
    _vm.displayContents("info")
      ? _c(
          "div",
          [_c("view-info", { attrs: { "coin-info": _vm.coinInfo } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.displayContents("markets")
      ? _c(
          "div",
          [_c("view-market", { attrs: { exchanges: _vm.exchanges } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.displayContents("history")
      ? _c("div", [_c("view-history", { attrs: { history: _vm.history } })], 1)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4902a146", module.exports)
  }
}

/***/ })

});