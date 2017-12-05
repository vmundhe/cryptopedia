webpackJsonp([5],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(53)
/* template */
var __vue_template__ = __webpack_require__(54)
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
Component.options.__file = "resources/assets/js/components/Coins/ViewInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15a47b12", Component.options)
  } else {
    hotAPI.reload("data-v-15a47b12", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 53:
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['coinInfo'],

    data: function data() {
        return {
            activeTabName: 'Description',
            tabs: [{
                name: 'Description'
            }, {
                name: 'Features'
            }, {
                name: 'Technology'
            }]
        };
    },


    computed: {
        getCardData: function getCardData() {
            return $(".card-content").html(this.coinInfo[this.activeTabName]);
        }
    }
});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "tile is-ancestor" }, [
      _c("div", { staticClass: "tile is-vertical is-8" }, [
        _c("div", { staticClass: "tile is-parent" }, [
          _c("article", { staticClass: "tile is-child notification" }, [
            _c("div", { staticClass: "content" }, [
              _c(
                "nav",
                {
                  staticClass: "navbar coin-info-navbar",
                  attrs: { role: "navigation", "aria-label": "main navigation" }
                },
                [
                  _c("div", { staticClass: "navbar-menu is-active" }, [
                    _c(
                      "div",
                      { staticClass: "navbar-start" },
                      _vm._l(_vm.tabs, function(tab) {
                        return _c(
                          "a",
                          {
                            staticClass: "navbar-item",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                _vm.activeTabName = tab.name
                              }
                            }
                          },
                          [_vm._v(_vm._s(tab.name))]
                        )
                      })
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.getCardData) +
                    "\n                        "
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar tile is-child is-vertical is-4" }, [
        _c("article", { staticClass: "tile is-child notification coin-info" }, [
          _c("p", { staticClass: "title sidebar-header" }, [
            _c("img", {
              staticClass: "coin-img",
              attrs: {
                src: "https://www.cryptocompare.com" + _vm.coinInfo.ImageUrl,
                width: "35px",
                height: "35px"
              }
            }),
            _vm._v(" " + _vm._s(_vm.coinInfo.H1Text))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "content" }, [
            _c("div", { staticClass: "table coin-info-table" }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Total Supply:")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.coinInfo.TotalCoinSupply))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Algorithm:")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.coinInfo.Algorithm))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Proof Type:")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.coinInfo.ProofType))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Start Date:")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.coinInfo.StartDate))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Twitter:")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.coinInfo.Twitter))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Website:")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "https:/" + _vm.coinInfo.website,
                          target: "_blank"
                        }
                      },
                      [_vm._v(_vm._s(_vm.coinInfo.website))]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15a47b12", module.exports)
  }
}

/***/ })

});