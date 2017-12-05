webpackJsonp([2],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
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
Component.options.__file = "resources/assets/js/components/Coins/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6123517e", Component.options)
  } else {
    hotAPI.reload("data-v-6123517e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
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
    data: function data() {
        return {
            search: '',
            labels: ['#', 'Name', 'Symbol', 'Price (USD)', 'Market Cap', 'Change(24h)'],
            coins: [],
            totalMarketCap: ''
        };
    },
    created: function created() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('api').then(function (response) {
            _this.coins = response.data.coins;
            _this.totalMarketCap = response.data.total_market_cap;
        });
    },


    methods: {
        getColor: function getColor(num) {
            return num > 0 ? "color:green;" : "color:red;";
        }
    },

    computed: {
        filteredCoins: function filteredCoins() {
            var self = this;
            return this.coins.filter(function (coin) {
                return coin.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
        }
    }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }
        ],
        staticClass: "coin-search",
        attrs: { type: "text", placeholder: "Search by name..." },
        domProps: { value: _vm.search },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.search = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "tag is-info is-rounded" }, [
        _vm._v(
          "Market Cap: " +
            _vm._s(_vm._f("currency")(_vm.totalMarketCap, "$", 0))
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table is-striped is-fullwidth is-hoverable" }, [
      _c("thead", [
        _c(
          "tr",
          _vm._l(_vm.labels, function(label) {
            return _c("th", [
              _vm._v(
                "\n                    " + _vm._s(label) + "\n                "
              )
            ])
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.filteredCoins, function(coin) {
          return _c(
            "router-link",
            {
              staticClass: "coin-list",
              attrs: { to: "/" + coin.symbol + "/" + coin.coin_id, tag: "tr" }
            },
            [
              _c("td", [_vm._v(_vm._s(coin.rank))]),
              _vm._v(" "),
              _c("td", [
                _c("img", {
                  staticClass: "coin-img",
                  attrs: { src: coin.logo, width: "25px", height: "25px" }
                }),
                _vm._v(" " + _vm._s(coin.name))
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(coin.symbol))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(_vm._f("currency")(coin.price_usd)))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(_vm._f("currency")(coin.market_cap_usd, "$", 0)))
              ]),
              _vm._v(" "),
              _c("td", { style: _vm.getColor(coin.percent_change_24h) }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(coin.percent_change_24h) +
                    "%\n                "
                )
              ])
            ]
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-6123517e", module.exports)
  }
}

/***/ })

});