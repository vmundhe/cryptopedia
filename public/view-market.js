webpackJsonp([4],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(55)
/* template */
var __vue_template__ = __webpack_require__(56)
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
Component.options.__file = "resources/assets/js/components/Coins/ViewMarket.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1306b2c5", Component.options)
  } else {
    hotAPI.reload("data-v-1306b2c5", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['exchanges'],

    data: function data() {
        return {
            labels: ['#', 'Source', 'Volume (24h)', 'Price']
        };
    }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "table is-striped market-history-table" }, [
      _c("thead", [
        _c(
          "tr",
          _vm._l(_vm.labels, function(label) {
            return _c("th", [
              _vm._v("\n                " + _vm._s(label) + "\n            ")
            ])
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.exchanges, function(exchange, key) {
          return _c("tr", [
            _c("td", [_vm._v(_vm._s(key))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(exchange.MARKET))]),
            _vm._v(" "),
            _c("td", [
              _vm._v(_vm._s(_vm._f("currency")(exchange.VOLUME24HOUR)))
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm._f("currency")(exchange.PRICE)))])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1306b2c5", module.exports)
  }
}

/***/ })

});