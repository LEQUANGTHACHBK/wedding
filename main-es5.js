function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ps": "./node_modules/moment/locale/ar-ps.js",
      "./ar-ps.js": "./node_modules/moment/locale/ar-ps.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku-kmr": "./node_modules/moment/locale/ku-kmr.js",
      "./ku-kmr.js": "./node_modules/moment/locale/ku-kmr.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lightgallery/plugins/zoom */
    "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment-timezone */
    "./node_modules/moment-timezone/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var flipclock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! flipclock */
    "./node_modules/flipclock/dist/flipclock.js");
    /* harmony import */


    var flipclock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flipclock__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lightgallery/angular/9 */
    "./node_modules/lightgallery/angular/9/fesm2015/lightgallery-angular-9.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'wedding';
        this.settings = {
          counter: false,
          plugins: [lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]],
          thumbnail: true
        };

        this.onBeforeSlide = function (detail) {
          var index = detail.index,
              prevIndex = detail.prevIndex;
        };
      } //   onInit = (detail: InitDetail): void => {
      //     detail.instance.openGallery();
      // };


      return _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var clock; // Grab the current date

          var currentDate = new Date(); // Target future date/24 hour time/Timezone

          var targetDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2__["tz"]("2024-07-13 19:00", "Asia/Ho_Chi_Minh"); // Calculate the difference in seconds between the future and current date

          var diff = targetDate.valueOf() / 1000 - currentDate.getTime() / 1000;

          if (diff <= 0) {
            // If remaining countdown is 0
            clock = $(".clock").FlipClock(0, {
              clockFace: "DailyCounter",
              countdown: true,
              autostart: false
            });
            console.log("Date has already passed!");
          } else {
            // Run countdown timer
            clock = $(".clock").FlipClock(diff, {
              clockFace: "DailyCounter",
              countdown: true,
              callbacks: {
                stop: function stop() {
                  console.log("Timer has ended!");
                }
              }
            }); // Check when timer reaches 0, then stop at 0

            this.checkTime(clock);
          }
        }
      }, {
        key: "checkTime",
        value: function checkTime(clock) {
          var _this = this;

          var t = clock.getTime();

          if (t <= 0) {
            clock.setTime(0);
          } else {
            setTimeout(function () {
              _this.checkTime(clock);
            }, 1000);
          }
        }
      }]);
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 119,
      vars: 2,
      consts: [["id", "page"], ["role", "navigation", 1, "fh5co-nav"], [1, "container"], [1, "row"], [1, "col-xs-10", "text-right", "menu-1"], [1, "active"], ["href", "index.html"], ["href", "#fh5co-event1"], ["href", "#fh5co-gallery"], ["href", "#fh5co-services"], ["id", "fh5co-header", "role", "banner", 1, "fh5co-cover", 2, "background-image", "url(https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/bg.JPG)"], [1, "overlay"], [1, "col-md-8", "col-md-offset-2", "text-center"], [1, "display-t"], [1, "display-tc"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/fprint.png", "alt", "Thach+Linh"], [1, "flipTimebox"], [1, "clock", "clock-fix"], ["href", "#fh5co-event1", 1, "btn", "btn-default", "btn-sm"], ["id", "fh5co-event1", 1, "fh5co-section-gray"], [1, "col-md-8", "col-md-offset-2", "text-center", "fh5co-heading"], [2, "margin-top", "1em"], [1, "image-container-card"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/t1.png", "alt", "QR payment"], ["id", "fh5co-gallery", 1, "fh5co-section-gray"], [3, "settings", "onBeforeSlide"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00196.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00196.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00056.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00056.JPG", 1, "img-2"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00074.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00074.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00341.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00341.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09330.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09330.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09631.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09631.JPG", 1, "img-2"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00200.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00200.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00328.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00328.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00223.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00223.JPG", 1, "img-2"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00446.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00446.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00230.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00230.JPG", 1, "img-2"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00408.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00408.JPG", 1, "img-2"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09259.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09259.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09272.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09272.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09686.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09686.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09482.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09482.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00434.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO00434.JPG", 1, "img-2"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09901.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09901.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09595.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09595.JPG", 1, "img-1"], ["data-src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09670.JPG", "data-sub-html", "", 1, "gallery-item"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/SMO09670.JPG", 1, "img-2"], ["id", "fh5co-services", 1, "fh5co-section-gray"], [1, "video-container"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/QVvoPyXBxGg", "title", "", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], [1, "image-container"], ["src", "https://ecom-stag-public.s3.ap-southeast-1.amazonaws.com/QR.jpg", "alt", "QR payment"], [2, "font-size", "20px"], [1, "gototop", "js-top"], ["href", "#", 1, "js-gotop"], [1, "icon-arrow-up"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Party");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Highlights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Thach & Linh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "13.07.2024");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\"Two lives, one love, let the adventure begin\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save our date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Our Party");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Photo Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "lightgallery", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Highlights");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "iframe", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Honeymoon Fund");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Thank you for celebrating with us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
        }
      },
      directives: [lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_4__["LightgalleryComponent"]],
      styles: ["@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');\n@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');\n@font-face {\n  font-family: 'lg';\n  src: url('lg.woff2?io9a6k') format(\"woff2\"), url('lg.ttf?io9a6k') format(\"truetype\"), url('lg.woff?io9a6k') format(\"woff\"), url('lg.svg?io9a6k#lg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n.lg-icon[_ngcontent-%COMP%] {\n  \n  font-family: 'lg' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.lg-container[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n.lg-next[_ngcontent-%COMP%], .lg-prev[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.45);\n  border-radius: 2px;\n  color: #999;\n  cursor: pointer;\n  display: block;\n  font-size: 22px;\n  margin-top: -10px;\n  padding: 8px 10px 9px;\n  position: absolute;\n  top: 50%;\n  z-index: 1084;\n  outline: none;\n  border: none;\n}\n.lg-next.disabled[_ngcontent-%COMP%], .lg-prev.disabled[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n  cursor: default;\n}\n.lg-next[_ngcontent-%COMP%]:hover:not(.disabled), .lg-prev[_ngcontent-%COMP%]:hover:not(.disabled) {\n  color: #fff;\n}\n.lg-single-item[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%], .lg-single-item\n.lg-prev[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.lg-next[_ngcontent-%COMP%]:before {\n  content: '\\e095';\n}\n.lg-prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.lg-prev[_ngcontent-%COMP%]:after {\n  content: '\\e094';\n}\n@keyframes lg-right-end {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: -30px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes lg-left-end {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 30px;\n  }\n  100% {\n    left: 0;\n  }\n}\n.lg-outer.lg-right-end[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  animation: lg-right-end 0.3s;\n  position: relative;\n}\n.lg-outer.lg-left-end[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  animation: lg-left-end 0.3s;\n  position: relative;\n}\n.lg-toolbar[_ngcontent-%COMP%] {\n  z-index: 1082;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.lg-media-overlap[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n  float: right;\n  font-size: 24px;\n  height: 47px;\n  line-height: 27px;\n  padding: 10px 0;\n  text-align: center;\n  width: 50px;\n  text-decoration: none !important;\n  outline: medium none;\n  will-change: color;\n  transition: color 0.2s linear;\n  background: none;\n  border: none;\n  box-shadow: none;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon.lg-icon-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-close[_ngcontent-%COMP%]:after {\n  content: '\\e070';\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-maximize[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-maximize[_ngcontent-%COMP%]:after {\n  content: '\\e90a';\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-download[_ngcontent-%COMP%]:after {\n  content: '\\e0f2';\n}\n.lg-sub-html[_ngcontent-%COMP%] {\n  color: #eee;\n  font-size: 16px;\n  padding: 10px 40px;\n  text-align: center;\n  z-index: 1080;\n  opacity: 0;\n  transition: opacity 0.2s ease-out 0s;\n}\n.lg-sub-html[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: bold;\n}\n.lg-sub-html[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 5px 0 0;\n}\n.lg-sub-html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.lg-sub-html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lg-media-overlap[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\n}\n.lg-item[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.lg-error-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n}\n.lg-counter[_ngcontent-%COMP%] {\n  color: #999;\n  display: inline-block;\n  font-size: 16px;\n  padding-left: 20px;\n  padding-top: 12px;\n  height: 47px;\n  vertical-align: middle;\n}\n.lg-closing[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%], .lg-closing[_ngcontent-%COMP%]   .lg-prev[_ngcontent-%COMP%], .lg-closing[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%], .lg-closing[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: transform 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, color 0.08 linear;\n}\nbody[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable)   .lg-img-wrap[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable)   .lg-video-cont[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale3d(0.5, 0.5, 0.5);\n  will-change: transform, opacity;\n  transition: transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;\n}\nbody[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable).lg-complete   .lg-img-wrap[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable).lg-complete   .lg-video-cont[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale3d(1, 1, 1);\n}\n.lg-icon[_ngcontent-%COMP%]:focus-visible {\n  color: #fff;\n  border-radius: 3px;\n  outline: 1px dashed rgba(255, 255, 255, 0.6);\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:focus-visible {\n  border-radius: 8px;\n  outline-offset: -5px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer[_ngcontent-%COMP%] {\n  background-color: #0d0a0a;\n  width: 100%;\n  max-height: 350px;\n  overflow: hidden;\n  float: left;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-grab[_ngcontent-%COMP%]   .lg-thumb-item[_ngcontent-%COMP%] {\n  cursor: -o-grab;\n  cursor: -ms-grab;\n  cursor: grab;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-grabbing[_ngcontent-%COMP%]   .lg-thumb-item[_ngcontent-%COMP%] {\n  cursor: move;\n  cursor: -o-grabbing;\n  cursor: -ms-grabbing;\n  cursor: grabbing;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-dragging[_ngcontent-%COMP%]   .lg-thumb[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-rebuilding-thumbnails[_ngcontent-%COMP%]   .lg-thumb[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-thumb-align-middle[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-thumb-align-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-outer.lg-thumb-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lg-outer.lg-single-item[_ngcontent-%COMP%]   .lg-thumb-outer[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  height: 100%;\n  margin-bottom: -5px;\n  display: inline-block;\n  vertical-align: middle;\n}\n@media (min-width: 768px) {\n  .lg-outer[_ngcontent-%COMP%]   .lg-thumb[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: left;\n  overflow: hidden;\n  height: 100%;\n  border-radius: 2px;\n  margin-bottom: 5px;\n  will-change: border-color;\n}\n@media (min-width: 768px) {\n  .lg-outer[_ngcontent-%COMP%]   .lg-thumb-item[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 2px solid #fff;\n    transition: border-color 0.25s ease;\n  }\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-item.active[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-thumb-item[_ngcontent-%COMP%]:hover {\n  border-color: #a90707;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n}\n.lg-outer.lg-can-toggle[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-toggle-thumb[_ngcontent-%COMP%]:after {\n  content: '\\e1ff';\n}\n.lg-outer.lg-animate-thumb[_ngcontent-%COMP%]   .lg-thumb[_ngcontent-%COMP%] {\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-video-cont[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-video-cont[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-has-iframe[_ngcontent-%COMP%]   .lg-video-cont[_ngcontent-%COMP%] {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-video-object[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-video-poster[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-has-video[_ngcontent-%COMP%]   .lg-video-object[_ngcontent-%COMP%] {\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.3s ease-in;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-has-video.lg-video-loaded[_ngcontent-%COMP%]   .lg-video-poster[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-has-video.lg-video-loaded[_ngcontent-%COMP%]   .lg-video-play-button[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-has-video.lg-video-loaded[_ngcontent-%COMP%]   .lg-video-object[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@keyframes lg-play-stroke {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@keyframes lg-play-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.lg-video-play-button[_ngcontent-%COMP%] {\n  width: 18%;\n  max-width: 140px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  cursor: pointer;\n  transform: translate(-50%, -50%) scale(1);\n  will-change: opacity, transform;\n  transition: transform 0.25s cubic-bezier(0.17, 0.88, 0.32, 1.28), opacity 0.1s;\n}\n.lg-video-play-button[_ngcontent-%COMP%]:hover   .lg-video-play-icon-bg[_ngcontent-%COMP%], .lg-video-play-button[_ngcontent-%COMP%]:hover   .lg-video-play-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-video-play-icon-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3%;\n  stroke: #fcfcfc;\n  opacity: 0.6;\n  will-change: opacity;\n  transition: opacity 0.12s ease-in;\n}\n.lg-video-play-icon-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  fill: none;\n  stroke-width: 3%;\n  stroke: rgba(30, 30, 30, 0.9);\n  stroke-opacity: 1;\n  stroke-linecap: round;\n  stroke-dasharray: 200;\n  stroke-dashoffset: 200;\n}\n.lg-video-play-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 25%;\n  max-width: 120px;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  opacity: 0.6;\n  will-change: opacity;\n  transition: opacity 0.12s ease-in;\n}\n.lg-video-play-icon[_ngcontent-%COMP%]   .lg-video-play-icon-inner[_ngcontent-%COMP%] {\n  fill: #fcfcfc;\n}\n.lg-video-loading[_ngcontent-%COMP%]   .lg-video-play-icon-circle[_ngcontent-%COMP%] {\n  animation: lg-play-rotate 2s linear 0.25s infinite, lg-play-stroke 1.5s ease-in-out 0.25s infinite;\n}\n.lg-video-loaded[_ngcontent-%COMP%]   .lg-video-play-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(0.7);\n}\n.lg-progress-bar[_ngcontent-%COMP%] {\n  background-color: #333;\n  height: 5px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1083;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.08s ease 0s;\n}\n.lg-progress-bar[_ngcontent-%COMP%]   .lg-progress[_ngcontent-%COMP%] {\n  background-color: #a90707;\n  height: 5px;\n  width: 0;\n}\n.lg-progress-bar.lg-start[_ngcontent-%COMP%]   .lg-progress[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.lg-show-autoplay[_ngcontent-%COMP%]   .lg-progress-bar[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-autoplay-button[_ngcontent-%COMP%]:after {\n  content: '\\e01d';\n}\n.lg-show-autoplay[_ngcontent-%COMP%]   .lg-autoplay-button[_ngcontent-%COMP%]:after {\n  content: '\\e01a';\n}\n.lg-single-item[_ngcontent-%COMP%]   .lg-autoplay-button[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n.lg-outer.lg-css3.lg-zoom-dragging[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%], .lg-outer.lg-css3.lg-zoom-dragging[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-image[_ngcontent-%COMP%] {\n  transition-duration: 0ms !important;\n}\n.lg-outer.lg-use-transition-for-zoom[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  will-change: transform;\n  transition: transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s;\n}\n.lg-outer.lg-use-transition-for-zoom.lg-zoom-drag-transition[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  will-change: transform;\n  transition: transform 0.8s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n  backface-visibility: hidden;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-image[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-dummy-img[_ngcontent-%COMP%] {\n  transform: scale3d(1, 1, 1);\n  transition: transform 0.5s cubic-bezier(0.12, 0.415, 0.01, 1.19) 0s, opacity 0.15s !important;\n  backface-visibility: hidden;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-image.no-transition[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-dummy-img.no-transition[_ngcontent-%COMP%] {\n  transition: none !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-image.reset-transition[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-dummy-img.reset-transition[_ngcontent-%COMP%] {\n  transform: scale3d(1, 1, 1) translate3d(-50%, -50%, 0px) !important;\n  max-width: none !important;\n  max-height: none !important;\n  top: 50% !important;\n  left: 50% !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-image.reset-transition-x[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-dummy-img.reset-transition-x[_ngcontent-%COMP%] {\n  transform: scale3d(1, 1, 1) translate3d(-50%, 0, 0px) !important;\n  top: 0 !important;\n  left: 50% !important;\n  max-width: none !important;\n  max-height: none !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-image.reset-transition-y[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete.lg-zoomable[_ngcontent-%COMP%]   .lg-dummy-img.reset-transition-y[_ngcontent-%COMP%] {\n  transform: scale3d(1, 1, 1) translate3d(0, -50%, 0px) !important;\n  top: 50% !important;\n  left: 0% !important;\n  max-width: none !important;\n  max-height: none !important;\n}\n.lg-icon.lg-zoom-in[_ngcontent-%COMP%]:after {\n  content: '\\e311';\n}\n.lg-actual-size[_ngcontent-%COMP%]   .lg-icon.lg-zoom-in[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.lg-icon.lg-actual-size[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.lg-icon.lg-actual-size[_ngcontent-%COMP%]:after {\n  content: '\\e033';\n}\n.lg-icon.lg-zoom-out[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.lg-icon.lg-zoom-out[_ngcontent-%COMP%]:after {\n  content: '\\e312';\n}\n.lg-zoomed[_ngcontent-%COMP%]   .lg-icon.lg-zoom-out[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-zoom-in[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-actual-size[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-zoom-out[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-zoom-in[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-actual-size[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-zoom-out[_ngcontent-%COMP%], .lg-outer.lg-first-slide-loading[_ngcontent-%COMP%]   .lg-zoom-in[_ngcontent-%COMP%], .lg-outer.lg-first-slide-loading[_ngcontent-%COMP%]   .lg-actual-size[_ngcontent-%COMP%], .lg-outer.lg-first-slide-loading[_ngcontent-%COMP%]   .lg-zoom-out[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-outer[_ngcontent-%COMP%] {\n  text-align: center;\n  z-index: 1080;\n  height: 10px;\n  margin-bottom: 10px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-outer.lg-pager-hover[_ngcontent-%COMP%]   .lg-pager-cont[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.lg-outer.lg-single-item[_ngcontent-%COMP%]   .lg-pager-outer[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-cont[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  margin: 0 5px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-cont[_ngcontent-%COMP%]:hover   .lg-pager-thumb-cont[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-cont.lg-pager-active[_ngcontent-%COMP%]   .lg-pager[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 2px white inset;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-thumb-cont[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #fff;\n  bottom: 100%;\n  height: 83px;\n  left: 0;\n  margin-bottom: 20px;\n  margin-left: -60px;\n  opacity: 0;\n  padding: 5px;\n  position: absolute;\n  width: 120px;\n  border-radius: 3px;\n  will-change: transform, opacity;\n  transition: opacity 0.15s ease 0s, transform 0.15s ease 0s;\n  transform: translate3d(0, 5px, 0);\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager-thumb-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.7) inset;\n  display: block;\n  height: 12px;\n  transition: box-shadow 0.3s ease 0s;\n  width: 12px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-pager[_ngcontent-%COMP%]:hover, .lg-outer[_ngcontent-%COMP%]   .lg-pager[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 8px white inset;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-caret[_ngcontent-%COMP%] {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px dashed;\n  bottom: -10px;\n  display: inline-block;\n  height: 0;\n  left: 50%;\n  margin-left: -5px;\n  position: absolute;\n  vertical-align: middle;\n  width: 0;\n}\n.lg-fullscreen[_ngcontent-%COMP%]:after {\n  content: \"\\e20c\";\n}\n.lg-fullscreen-on[_ngcontent-%COMP%]   .lg-fullscreen[_ngcontent-%COMP%]:after {\n  content: \"\\e20d\";\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.25);\n  bottom: 0;\n  cursor: default;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1081;\n  opacity: 0;\n  visibility: hidden;\n  will-change: visibility, opacity;\n  transition: visibility 0s linear 0.18s, opacity 0.18s linear 0s;\n}\n.lg-outer.lg-dropdown-active[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%], .lg-outer.lg-dropdown-active[_ngcontent-%COMP%]   .lg-dropdown-overlay[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n  transform: translate3d(0, 0px, 0);\n  opacity: 1;\n  visibility: visible;\n}\n.lg-outer.lg-dropdown-active[_ngcontent-%COMP%]   .lg-share[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 2px;\n  font-size: 14px;\n  list-style-type: none;\n  margin: 0;\n  padding: 10px 0;\n  position: absolute;\n  right: 0;\n  text-align: left;\n  top: 50px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translate3d(0, 5px, 0);\n  will-change: visibility, opacity, transform;\n  transition: transform 0.18s linear 0s, visibility 0s linear 0.5s, opacity 0.18s linear 0s;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  height: 0;\n  width: 0;\n  position: absolute;\n  border: 8px solid transparent;\n  border-bottom-color: #fff;\n  right: 16px;\n  top: -16px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #333;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  display: block;\n  white-space: pre;\n  padding: 4px 12px;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 12px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.07);\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]   .lg-dropdown-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1;\n  margin-top: -3px;\n  vertical-align: middle;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-dropdown[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%] {\n  color: #333;\n  display: inline-block;\n  float: none;\n  font-size: 20px;\n  height: auto;\n  line-height: 1;\n  margin-right: 8px;\n  padding: 0;\n  vertical-align: middle;\n  width: auto;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share[_ngcontent-%COMP%] {\n  position: relative;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share[_ngcontent-%COMP%]:after {\n  content: '\\e80d';\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share-facebook[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share-facebook[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:after {\n  content: '\\e904';\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share-twitter[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%] {\n  color: #00aced;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share-twitter[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:after {\n  content: '\\e907';\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share-pinterest[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%] {\n  color: #cb2027;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-share-pinterest[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:after {\n  content: '\\e906';\n}\n.lg-comment-box[_ngcontent-%COMP%] {\n  width: 420px;\n  max-width: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background-color: #fff;\n  will-change: transform;\n  transform: translate3d(100%, 0, 0);\n  transition: transform 0.4s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .lg-comment-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .lg-comment-header[_ngcontent-%COMP%] {\n  background-color: #000;\n  padding: 12px 20px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .lg-comment-body[_ngcontent-%COMP%] {\n  height: 100% !important;\n  padding-top: 43px !important;\n  width: 100% !important;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .fb-comments[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: url('loading.gif') no-repeat scroll center center #fff;\n  overflow-y: auto;\n  display: inline-block;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .fb-comments[fb-xfbml-state='rendered'][_ngcontent-%COMP%] {\n  background-image: none;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .fb-comments[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .lg-comment-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 12px;\n  cursor: pointer;\n  font-size: 20px;\n  color: #999;\n  will-change: color;\n  transition: color 0.2s linear;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .lg-comment-close[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.lg-comment-box[_ngcontent-%COMP%]   .lg-comment-close[_ngcontent-%COMP%]:after {\n  content: '\\e070';\n}\n.lg-comment-box[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  width: 100% !important;\n}\n.lg-comment-box[_ngcontent-%COMP%]   #disqus_thread[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-comment-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.25);\n  bottom: 0;\n  cursor: default;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1081;\n  opacity: 0;\n  visibility: hidden;\n  will-change: visibility, opacity;\n  transition: visibility 0s linear 0.18s, opacity 0.18s linear 0s;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-comment-toggle[_ngcontent-%COMP%]:after {\n  content: '\\e908';\n}\n.lg-outer.lg-comment-active[_ngcontent-%COMP%]   .lg-comment-overlay[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n  transform: translate3d(0, 0px, 0);\n  opacity: 1;\n  visibility: visible;\n}\n.lg-outer.lg-comment-active[_ngcontent-%COMP%]   .lg-comment-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.lg-outer.lg-comment-active[_ngcontent-%COMP%]   .lg-comment-box[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-img-rotate[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transition: transform 0.4s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-rotate-left[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-rotate-right[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-flip-ver[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='video'][_ngcontent-%COMP%]   .lg-flip-hor[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-rotate-left[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-rotate-right[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-flip-ver[_ngcontent-%COMP%], .lg-outer[data-lg-slide-type='iframe'][_ngcontent-%COMP%]   .lg-flip-hor[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-img-rotate[_ngcontent-%COMP%]:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.lg-rotate-left[_ngcontent-%COMP%]:after {\n  content: '\\e900';\n}\n.lg-rotate-right[_ngcontent-%COMP%]:after {\n  content: '\\e901';\n}\n.lg-icon.lg-flip-hor[_ngcontent-%COMP%], .lg-icon.lg-flip-ver[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.lg-flip-ver[_ngcontent-%COMP%]:after {\n  content: '\\e903';\n}\n.lg-flip-hor[_ngcontent-%COMP%]:after {\n  content: '\\e902';\n}\n.lg-medium-zoom-item[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n}\n.lg-medium-zoom[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%] {\n  cursor: zoom-out;\n}\n.lg-medium-zoom[_ngcontent-%COMP%]   .lg-outer.lg-grab[_ngcontent-%COMP%]   img.lg-object[_ngcontent-%COMP%] {\n  cursor: zoom-out;\n}\n.lg-medium-zoom[_ngcontent-%COMP%]   .lg-outer.lg-grabbing[_ngcontent-%COMP%]   img.lg-object[_ngcontent-%COMP%] {\n  cursor: zoom-out;\n}\n.lg-relative-caption[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  white-space: normal;\n  bottom: auto;\n  padding: 0;\n  background-image: none;\n}\n.lg-relative-caption[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%]   .lg-relative-caption-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  padding: 16px 0;\n  transition: 0.5s opacity ease;\n}\n.lg-relative-caption[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%]   .lg-show-caption[_ngcontent-%COMP%]   .lg-relative-caption-item[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-group[_ngcontent-%COMP%]:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.lg-container[_ngcontent-%COMP%] {\n  display: none;\n  outline: none;\n}\n.lg-container.lg-show[_ngcontent-%COMP%] {\n  display: block;\n}\n.lg-on[_ngcontent-%COMP%] {\n  scroll-behavior: unset;\n}\n.lg-overlay-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lg-toolbar[_ngcontent-%COMP%], .lg-prev[_ngcontent-%COMP%], .lg-next[_ngcontent-%COMP%], .lg-pager-outer[_ngcontent-%COMP%], .lg-hide-sub-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 0;\n  will-change: transform, opacity;\n  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%], .lg-show-in[_ngcontent-%COMP%]   .lg-prev[_ngcontent-%COMP%], .lg-show-in[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%], .lg-show-in[_ngcontent-%COMP%]   .lg-pager-outer[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-show-in.lg-hide-sub-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items[_ngcontent-%COMP%]   .lg-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(-10px, 0, 0);\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(10px, 0, 0);\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items.lg-hide-sub-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(0, 20px, 0);\n}\n.lg-outer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  text-align: left;\n  opacity: 0.001;\n  outline: none;\n  will-change: auto;\n  overflow: hidden;\n  transition: opacity 0.15s ease 0s;\n}\n.lg-outer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.lg-outer.lg-zoom-from-image[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-outer.lg-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress).lg-prev-slide, .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress).lg-next-slide, .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress).lg-current {\n  transition-duration: inherit !important;\n  transition-timing-function: inherit !important;\n}\n.lg-outer.lg-css3.lg-dragging[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%], .lg-outer.lg-css3.lg-dragging[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%], .lg-outer.lg-css3.lg-dragging[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n  opacity: 1;\n}\n.lg-outer.lg-grab[_ngcontent-%COMP%]   img.lg-object[_ngcontent-%COMP%] {\n  cursor: -o-grab;\n  cursor: -ms-grab;\n  cursor: grab;\n}\n.lg-outer.lg-grabbing[_ngcontent-%COMP%]   img.lg-object[_ngcontent-%COMP%] {\n  cursor: move;\n  cursor: -o-grabbing;\n  cursor: -ms-grabbing;\n  cursor: grabbing;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  transition: opacity 0s;\n  white-space: nowrap;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress) {\n  background: url('loading.gif') no-repeat scroll center center transparent;\n}\n.lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-prev-slide[_ngcontent-%COMP%], .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-current[_ngcontent-%COMP%], .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-next-slide[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.lg-outer.lg-css[_ngcontent-%COMP%]   .lg-current[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:before, .lg-outer[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%]:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  white-space: nowrap;\n  font-size: 0;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete[_ngcontent-%COMP%] {\n  background-image: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  z-index: 1060;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  position: relative;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-empty-html.lg-sub-html[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-empty-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-outer.lg-hide-download[_ngcontent-%COMP%]   .lg-download[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-first-slide[_ngcontent-%COMP%]   .lg-dummy-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.lg-outer.lg-components-open[_ngcontent-%COMP%]:not(.lg-zoomed)   .lg-components[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0%, 0);\n  opacity: 1;\n}\n.lg-outer.lg-components-open[_ngcontent-%COMP%]:not(.lg-zoomed)   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.2s ease-out 0.15s;\n}\n.lg-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1040;\n  background-color: #000;\n  opacity: 0;\n  will-change: auto;\n  transition: opacity 333ms ease-in 0s;\n}\n.lg-backdrop.in[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-css3.lg-no-trans[_ngcontent-%COMP%]   .lg-prev-slide[_ngcontent-%COMP%], .lg-css3.lg-no-trans[_ngcontent-%COMP%]   .lg-next-slide[_ngcontent-%COMP%], .lg-css3.lg-no-trans[_ngcontent-%COMP%]   .lg-current[_ngcontent-%COMP%] {\n  transition: none 0s ease 0s !important;\n}\n.lg-css3.lg-use-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  backface-visibility: hidden;\n}\n.lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%], .lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%], .lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition: opacity 0.1s ease 0s;\n}\n.lg-css3.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-start-progress[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;\n}\n.lg-css3.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-start-end-progress[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%] {\n  transform: translate3d(-100%, 0, 0);\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%] {\n  transform: translate3d(100%, 0, 0);\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%], .lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%], .lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;\n}\n.lg-container[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-container.lg-show[_ngcontent-%COMP%] {\n  display: block;\n}\n.lg-container.lg-dragging-vertical[_ngcontent-%COMP%]   .lg-backdrop[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n}\n.lg-container.lg-dragging-vertical[_ngcontent-%COMP%]   .lg-css3[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n  opacity: 1;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-backdrop[_ngcontent-%COMP%], .lg-inline[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-backdrop[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-maximize[_ngcontent-%COMP%]:after {\n  content: '\\e909';\n}\n.lg-components[_ngcontent-%COMP%] {\n  transform: translate3d(0, 100%, 0);\n  will-change: transform;\n  transition: transform 0.35s ease-out 0s;\n  z-index: 1080;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n@font-face {\n  font-family: 'lg';\n  src: url('lg.woff2?io9a6k') format(\"woff2\"), url('lg.ttf?io9a6k') format(\"truetype\"), url('lg.woff?io9a6k') format(\"woff\"), url('lg.svg?io9a6k#lg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n.lg-icon[_ngcontent-%COMP%] {\n  \n  font-family: 'lg' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.lg-container[_ngcontent-%COMP%] {\n  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n}\n.lg-next[_ngcontent-%COMP%], .lg-prev[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.45);\n  border-radius: 2px;\n  color: #999;\n  cursor: pointer;\n  display: block;\n  font-size: 22px;\n  margin-top: -10px;\n  padding: 8px 10px 9px;\n  position: absolute;\n  top: 50%;\n  z-index: 1084;\n  outline: none;\n  border: none;\n}\n.lg-next.disabled[_ngcontent-%COMP%], .lg-prev.disabled[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n  cursor: default;\n}\n.lg-next[_ngcontent-%COMP%]:hover:not(.disabled), .lg-prev[_ngcontent-%COMP%]:hover:not(.disabled) {\n  color: #fff;\n}\n.lg-single-item[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%], .lg-single-item\n.lg-prev[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n.lg-next[_ngcontent-%COMP%]:before {\n  content: '\\e095';\n}\n.lg-prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.lg-prev[_ngcontent-%COMP%]:after {\n  content: '\\e094';\n}\n@keyframes lg-right-end {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: -30px;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes lg-left-end {\n  0% {\n    left: 0;\n  }\n  50% {\n    left: 30px;\n  }\n  100% {\n    left: 0;\n  }\n}\n.lg-outer.lg-right-end[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  animation: lg-right-end 0.3s;\n  position: relative;\n}\n.lg-outer.lg-left-end[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  animation: lg-left-end 0.3s;\n  position: relative;\n}\n.lg-toolbar[_ngcontent-%COMP%] {\n  z-index: 1082;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.lg-media-overlap[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n  float: right;\n  font-size: 24px;\n  height: 47px;\n  line-height: 27px;\n  padding: 10px 0;\n  text-align: center;\n  width: 50px;\n  text-decoration: none !important;\n  outline: medium none;\n  will-change: color;\n  transition: color 0.2s linear;\n  background: none;\n  border: none;\n  box-shadow: none;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon.lg-icon-18[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-close[_ngcontent-%COMP%]:after {\n  content: '\\e070';\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-maximize[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-maximize[_ngcontent-%COMP%]:after {\n  content: '\\e90a';\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-download[_ngcontent-%COMP%]:after {\n  content: '\\e0f2';\n}\n.lg-sub-html[_ngcontent-%COMP%] {\n  color: #eee;\n  font-size: 16px;\n  padding: 10px 40px;\n  text-align: center;\n  z-index: 1080;\n  opacity: 0;\n  transition: opacity 0.2s ease-out 0s;\n}\n.lg-sub-html[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: bold;\n}\n.lg-sub-html[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 5px 0 0;\n}\n.lg-sub-html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.lg-sub-html[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lg-media-overlap[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\n}\n.lg-item[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n.lg-error-msg[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n}\n.lg-counter[_ngcontent-%COMP%] {\n  color: #999;\n  display: inline-block;\n  font-size: 16px;\n  padding-left: 20px;\n  padding-top: 12px;\n  height: 47px;\n  vertical-align: middle;\n}\n.lg-closing[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%], .lg-closing[_ngcontent-%COMP%]   .lg-prev[_ngcontent-%COMP%], .lg-closing[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%], .lg-closing[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: transform 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.08 cubic-bezier(0, 0, 0.25, 1) 0s, color 0.08 linear;\n}\nbody[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable)   .lg-img-wrap[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable)   .lg-video-cont[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale3d(0.5, 0.5, 0.5);\n  will-change: transform, opacity;\n  transition: transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;\n}\nbody[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable).lg-complete   .lg-img-wrap[_ngcontent-%COMP%], body[_ngcontent-%COMP%]:not(.lg-from-hash)   .lg-outer.lg-start-zoom[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-zoomable).lg-complete   .lg-video-cont[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale3d(1, 1, 1);\n}\n.lg-icon[_ngcontent-%COMP%]:focus-visible {\n  color: #fff;\n  border-radius: 3px;\n  outline: 1px dashed rgba(255, 255, 255, 0.6);\n}\n.lg-toolbar[_ngcontent-%COMP%]   .lg-icon[_ngcontent-%COMP%]:focus-visible {\n  border-radius: 8px;\n  outline-offset: -5px;\n}\n.lg-group[_ngcontent-%COMP%]:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.lg-container[_ngcontent-%COMP%] {\n  display: none;\n  outline: none;\n}\n.lg-container.lg-show[_ngcontent-%COMP%] {\n  display: block;\n}\n.lg-on[_ngcontent-%COMP%] {\n  scroll-behavior: unset;\n}\n.lg-overlay-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lg-toolbar[_ngcontent-%COMP%], .lg-prev[_ngcontent-%COMP%], .lg-next[_ngcontent-%COMP%], .lg-pager-outer[_ngcontent-%COMP%], .lg-hide-sub-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 0;\n  will-change: transform, opacity;\n  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%], .lg-show-in[_ngcontent-%COMP%]   .lg-prev[_ngcontent-%COMP%], .lg-show-in[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%], .lg-show-in[_ngcontent-%COMP%]   .lg-pager-outer[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-show-in.lg-hide-sub-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items[_ngcontent-%COMP%]   .lg-prev[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(-10px, 0, 0);\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items[_ngcontent-%COMP%]   .lg-next[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(10px, 0, 0);\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items[_ngcontent-%COMP%]   .lg-toolbar[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n.lg-show-in[_ngcontent-%COMP%]   .lg-hide-items.lg-hide-sub-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translate3d(0, 20px, 0);\n}\n.lg-outer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  text-align: left;\n  opacity: 0.001;\n  outline: none;\n  will-change: auto;\n  overflow: hidden;\n  transition: opacity 0.15s ease 0s;\n}\n.lg-outer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.lg-outer.lg-zoom-from-image[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-outer.lg-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress).lg-prev-slide, .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress).lg-next-slide, .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress).lg-current {\n  transition-duration: inherit !important;\n  transition-timing-function: inherit !important;\n}\n.lg-outer.lg-css3.lg-dragging[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%], .lg-outer.lg-css3.lg-dragging[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%], .lg-outer.lg-css3.lg-dragging[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n  opacity: 1;\n}\n.lg-outer.lg-grab[_ngcontent-%COMP%]   img.lg-object[_ngcontent-%COMP%] {\n  cursor: -o-grab;\n  cursor: -ms-grab;\n  cursor: grab;\n}\n.lg-outer.lg-grabbing[_ngcontent-%COMP%]   img.lg-object[_ngcontent-%COMP%] {\n  cursor: move;\n  cursor: -o-grabbing;\n  cursor: -ms-grabbing;\n  cursor: grabbing;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  transition: opacity 0s;\n  white-space: nowrap;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:not(.lg-start-end-progress) {\n  background: url('loading.gif') no-repeat scroll center center transparent;\n}\n.lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-prev-slide[_ngcontent-%COMP%], .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-current[_ngcontent-%COMP%], .lg-outer.lg-css3[_ngcontent-%COMP%]   .lg-next-slide[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.lg-outer.lg-css[_ngcontent-%COMP%]   .lg-current[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%]:before, .lg-outer[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%]:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-img-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  white-space: nowrap;\n  font-size: 0;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-complete[_ngcontent-%COMP%] {\n  background-image: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  z-index: 1060;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-object[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  position: relative;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-empty-html.lg-sub-html[_ngcontent-%COMP%], .lg-outer[_ngcontent-%COMP%]   .lg-empty-html[_ngcontent-%COMP%]   .lg-sub-html[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-outer.lg-hide-download[_ngcontent-%COMP%]   .lg-download[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  pointer-events: none;\n}\n.lg-outer[_ngcontent-%COMP%]   .lg-first-slide[_ngcontent-%COMP%]   .lg-dummy-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.lg-outer.lg-components-open[_ngcontent-%COMP%]:not(.lg-zoomed)   .lg-components[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0%, 0);\n  opacity: 1;\n}\n.lg-outer.lg-components-open[_ngcontent-%COMP%]:not(.lg-zoomed)   .lg-sub-html[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.2s ease-out 0.15s;\n}\n.lg-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1040;\n  background-color: #000;\n  opacity: 0;\n  will-change: auto;\n  transition: opacity 333ms ease-in 0s;\n}\n.lg-backdrop.in[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-css3.lg-no-trans[_ngcontent-%COMP%]   .lg-prev-slide[_ngcontent-%COMP%], .lg-css3.lg-no-trans[_ngcontent-%COMP%]   .lg-next-slide[_ngcontent-%COMP%], .lg-css3.lg-no-trans[_ngcontent-%COMP%]   .lg-current[_ngcontent-%COMP%] {\n  transition: none 0s ease 0s !important;\n}\n.lg-css3.lg-use-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  backface-visibility: hidden;\n}\n.lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%], .lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%], .lg-css3.lg-fade[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition: opacity 0.1s ease 0s;\n}\n.lg-css3.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-start-progress[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;\n}\n.lg-css3.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-start-end-progress[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s;\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%] {\n  transform: translate3d(-100%, 0, 0);\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%] {\n  transform: translate3d(100%, 0, 0);\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n.lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-prev-slide[_ngcontent-%COMP%], .lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-next-slide[_ngcontent-%COMP%], .lg-css3.lg-slide.lg-use-css3[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;\n}\n.lg-container[_ngcontent-%COMP%] {\n  display: none;\n}\n.lg-container.lg-show[_ngcontent-%COMP%] {\n  display: block;\n}\n.lg-container.lg-dragging-vertical[_ngcontent-%COMP%]   .lg-backdrop[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n}\n.lg-container.lg-dragging-vertical[_ngcontent-%COMP%]   .lg-css3[_ngcontent-%COMP%]   .lg-item.lg-current[_ngcontent-%COMP%] {\n  transition-duration: 0s !important;\n  opacity: 1;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-backdrop[_ngcontent-%COMP%], .lg-inline[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-backdrop[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-outer[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.lg-inline[_ngcontent-%COMP%]   .lg-maximize[_ngcontent-%COMP%]:after {\n  content: '\\e909';\n}\n.lg-components[_ngcontent-%COMP%] {\n  transform: translate3d(0, 100%, 0);\n  will-change: transform;\n  transition: transform 0.35s ease-out 0s;\n  z-index: 1080;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.gallery-item[_ngcontent-%COMP%] {\n    \n}\n.gallery-item[_ngcontent-%COMP%] {\n    margin: 2px !important;\n  }\n.img-1[_ngcontent-%COMP%]{\n    height: 165px;\n    width: 110px;\n  }\n.img-2[_ngcontent-%COMP%]{\n    height: 165px;\n    width: 220px;\n  }\n\n.thumbnail-img[_ngcontent-%COMP%] {\n    width: 150px; \n    height: auto; \n    -o-object-fit: cover;\n       object-fit: cover; \n    margin: 5px; \n  }\n.header[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n    max-width: 620px;\n  }\n\n\n.video-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    padding-bottom: 56.25%; \n    overflow: hidden;\n}\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.image-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    \n    \n   \n  }\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 250px;\n    height: auto;\n    display: block;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  }\n.image-container-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 340px;\n    height: auto;\n    display: block;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    margin: 0px auto;\n  }\n.gallery-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 1200px;\n    padding: 20px;\n  }\n.gallery-item[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 10px;\n  }\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    \n    display: block;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Nzcy9saWdodGdhbGxlcnktYnVuZGxlLmNzcyIsIm5vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvY3NzL2xpZ2h0Z2FsbGVyeS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGLHFGQUFxRjtBQ0RyRjtFQUNFLGlCQUFpQjtFQUNqQixpS0FBcU07RUFDck0sbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLCtFQUErRTtFQUMvRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLDRNQUE0TTtBQUM5TTtBQUVBOztFQUVFLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsV0FBVztBQUNiO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFzQ0E7RUFDRTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7QUFDRjtBQXNDQTtFQUNFO0lBQ0UsT0FBTztFQUNUO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLE9B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QjtJQUNsQixXQUFXO0lBQ1gsc0JBQXNCLEVBQUUsMkNBQTJDO0lBQ25FLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFJQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDRCQUE0Qjs7RUFFOUI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLHdDQUF3QztFQUMxQztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLGdCQUFnQjtFQUNsQjtBQUdBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3Q0FBd0M7RUFDMUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xpZ2h0Z2FsbGVyeUAyLjAuMC1iZXRhLjQvY3NzL2xpZ2h0Z2FsbGVyeS5jc3MnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xpZ2h0Z2FsbGVyeUAyLjAuMC1iZXRhLjQvY3NzL2xnLXpvb20uY3NzJyk7XG5AaW1wb3J0ICd+bGlnaHRnYWxsZXJ5L2Nzcy9saWdodGdhbGxlcnktYnVuZGxlLmNzcyc7XG5cbkBpbXBvcnQgJ35saWdodGdhbGxlcnkvY3NzL2xpZ2h0Z2FsbGVyeSc7XG4vKiBAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2ZsaXBjbG9jay9jb21waWxlZC9mbGlwY2xvY2suY3NzXCI7ICovXG5cbi5nYWxsZXJ5LWl0ZW0ge1xuICAgIC8qIHdpZHRoOiAxMDBweDsgKi9cbn1cblxuXG4uZ2FsbGVyeS1pdGVtIHtcbiAgICBtYXJnaW46IDJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy0xe1xuICAgIGhlaWdodDogMTY1cHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICB9XG5cbiAgLmltZy0ye1xuICAgIGhlaWdodDogMTY1cHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG5cbiAgLyogQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmdhbGxlcnktaXRlbTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSAqL1xuXG4gIC50aHVtYm5haWwtaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7IC8qIFNldCB5b3VyIGRlc2lyZWQgd2lkdGggKi9cbiAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBPcHRpb25hbGx5IGNvdmVyIHRvIG1haW50YWluIGFzcGVjdCByYXRpbyB3aXRoaW4gZ2l2ZW4gZGltZW5zaW9ucyAqL1xuICAgIG1hcmdpbjogNXB4OyAvKiBTcGFjZSBiZXR3ZWVuIHRodW1ibmFpbHMgKi9cbiAgfVxuXG4gIC5oZWFkZXIgLmxlYWQge1xuICAgIG1heC13aWR0aDogNjIwcHg7XG4gIH1cbiAgXG4gIC8qKiBCZWxvdyBDU1MgaXMgY29tcGxldGVseSBvcHRpb25hbCAqKi9cbiAgXG4gIC8qIC5nYWxsZXJ5LWl0ZW0ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH0gKi9cblxuICAudmlkZW8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSBhc3BlY3QgcmF0aW8gKGhlaWdodC93aWR0aCAqIDEwMCkgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlkZW8tY29udGFpbmVyIGlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xuICAgXG4gIH1cbiAgXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lci1jYXJkIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG5cblxuICAuZ2FsbGVyeS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmdhbGxlcnktaXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICAuZ2FsbGVyeS1pdGVtIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8qIGhlaWdodDogYXV0bzsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuXG4gIFxuICAiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdsZyc7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvbGcud29mZjI/aW85YTZrXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9sZy50dGY/aW85YTZrXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi9mb250cy9sZy53b2ZmP2lvOWE2a1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi9mb250cy9sZy5zdmc/aW85YTZrI2xnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGctaWNvbiB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiAnbGcnICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBuZXZlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5sZy1jb250YWluZXIge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgJ0xpYmVyYXRpb24gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG59XG5cbi5sZy1uZXh0LFxuLmxnLXByZXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nOiA4cHggMTBweCA5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDEwODQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxnLW5leHQuZGlzYWJsZWQsXG4ubGctcHJldi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubGctbmV4dDpob3Zlcjpub3QoLmRpc2FibGVkKSxcbi5sZy1wcmV2OmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sZy1zaW5nbGUtaXRlbSAubGctbmV4dCwgLmxnLXNpbmdsZS1pdGVtXG4ubGctcHJldiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZy1uZXh0IHtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5sZy1uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXGUwOTUnO1xufVxuXG4ubGctcHJldiB7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5sZy1wcmV2OmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTA5NCc7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsZy1yaWdodC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGxnLXJpZ2h0LWVuZCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogLTMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBsZy1yaWdodC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsZy1yaWdodC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxnLWxlZnQtZW5kIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGxnLWxlZnQtZW5kIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC1tcy1rZXlmcmFtZXMgbGctbGVmdC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxnLWxlZnQtZW5kIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuLmxnLW91dGVyLmxnLXJpZ2h0LWVuZCAubGctb2JqZWN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxnLXJpZ2h0LWVuZCAwLjNzO1xuICAtby1hbmltYXRpb246IGxnLXJpZ2h0LWVuZCAwLjNzO1xuICBhbmltYXRpb246IGxnLXJpZ2h0LWVuZCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZy1vdXRlci5sZy1sZWZ0LWVuZCAubGctb2JqZWN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxnLWxlZnQtZW5kIDAuM3M7XG4gIC1vLWFuaW1hdGlvbjogbGctbGVmdC1lbmQgMC4zcztcbiAgYW5pbWF0aW9uOiBsZy1sZWZ0LWVuZCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZy10b29sYmFyIHtcbiAgei1pbmRleDogMTA4MjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGctbWVkaWEtb3ZlcmxhcCAubGctdG9vbGJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuXG4ubGctdG9vbGJhciAubGctaWNvbiB7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBtZWRpdW0gbm9uZTtcbiAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLWljb24ubGctaWNvbi0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLWljb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLWNsb3NlOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTA3MCc7XG59XG5cbi5sZy10b29sYmFyIC5sZy1tYXhpbWl6ZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLW1heGltaXplOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTkwYSc7XG59XG5cbi5sZy10b29sYmFyIC5sZy1kb3dubG9hZDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGUwZjInO1xufVxuXG4ubGctc3ViLWh0bWwge1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTA4MDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0IDBzO1xufVxuXG4ubGctc3ViLWh0bWwgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sZy1zdWItaHRtbCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDVweCAwIDA7XG59XG5cbi5sZy1zdWItaHRtbCBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5sZy1zdWItaHRtbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5sZy1tZWRpYS1vdmVybGFwIC5sZy1zdWItaHRtbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC42KSk7XG59XG5cbi5sZy1pdGVtIC5sZy1zdWItaHRtbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmxnLWVycm9yLW1zZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5sZy1jb3VudGVyIHtcbiAgY29sb3I6ICM5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sZy1jbG9zaW5nIC5sZy10b29sYmFyLFxuLmxnLWNsb3NpbmcgLmxnLXByZXYsXG4ubGctY2xvc2luZyAubGctbmV4dCxcbi5sZy1jbG9zaW5nIC5sZy1zdWItaHRtbCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4wOCBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4wOCBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIGNvbG9yIDAuMDggbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBjb2xvciAwLjA4IGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBjb2xvciAwLjA4IGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBjb2xvciAwLjA4IGxpbmVhcjtcbn1cblxuYm9keTpub3QoLmxnLWZyb20taGFzaCkgLmxnLW91dGVyLmxnLXN0YXJ0LXpvb20gLmxnLWl0ZW06bm90KC5sZy16b29tYWJsZSkgLmxnLWltZy13cmFwLFxuYm9keTpub3QoLmxnLWZyb20taGFzaCkgLmxnLW91dGVyLmxnLXN0YXJ0LXpvb20gLmxnLWl0ZW06bm90KC5sZy16b29tYWJsZSkgLmxnLXZpZGVvLWNvbnQge1xuICBvcGFjaXR5OiAwO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUzZCgwLjUsIDAuNSwgMC41KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjUsIDAuNSwgMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbmJvZHk6bm90KC5sZy1mcm9tLWhhc2gpIC5sZy1vdXRlci5sZy1zdGFydC16b29tIC5sZy1pdGVtOm5vdCgubGctem9vbWFibGUpLmxnLWNvbXBsZXRlIC5sZy1pbWctd3JhcCxcbmJvZHk6bm90KC5sZy1mcm9tLWhhc2gpIC5sZy1vdXRlci5sZy1zdGFydC16b29tIC5sZy1pdGVtOm5vdCgubGctem9vbWFibGUpLmxnLWNvbXBsZXRlIC5sZy12aWRlby1jb250IHtcbiAgb3BhY2l0eTogMTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbn1cblxuLmxnLWljb246Zm9jdXMtdmlzaWJsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4ubGctdG9vbGJhciAubGctaWNvbjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdXRsaW5lLW9mZnNldDogLTVweDtcbn1cblxuLmxnLW91dGVyIC5sZy10aHVtYi1vdXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDBhMGE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctZ3JhYiAubGctdGh1bWItaXRlbSB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtby1ncmFiO1xuICBjdXJzb3I6IC1tcy1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctZ3JhYmJpbmcgLmxnLXRodW1iLWl0ZW0ge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IC1vLWdyYWJiaW5nO1xuICBjdXJzb3I6IC1tcy1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuLmxnLW91dGVyIC5sZy10aHVtYi1vdXRlci5sZy1kcmFnZ2luZyAubGctdGh1bWIge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctcmVidWlsZGluZy10aHVtYm5haWxzIC5sZy10aHVtYiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbn1cblxuLmxnLW91dGVyIC5sZy10aHVtYi1vdXRlci5sZy10aHVtYi1hbGlnbi1taWRkbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctdGh1bWItYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctdGh1bWItYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxnLW91dGVyLmxnLXNpbmdsZS1pdGVtIC5sZy10aHVtYi1vdXRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWIge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubGctb3V0ZXIgLmxnLXRodW1iIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn1cblxuLmxnLW91dGVyIC5sZy10aHVtYi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lsbC1jaGFuZ2U6IGJvcmRlci1jb2xvcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5sZy1vdXRlciAubGctdGh1bWItaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcbiAgfVxufVxuXG4ubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW0uYWN0aXZlLCAubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNhOTA3MDc7XG59XG5cbi5sZy1vdXRlciAubGctdGh1bWItaXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sZy1vdXRlci5sZy1jYW4tdG9nZ2xlIC5sZy1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5sZy1vdXRlciAubGctdG9nZ2xlLXRodW1iOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTFmZic7XG59XG5cbi5sZy1vdXRlci5sZy1hbmltYXRlLXRodW1iIC5sZy10aHVtYiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG59XG5cbi5sZy1vdXRlciAubGctdmlkZW8tY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZy1vdXRlciAubGctdmlkZW8tY29udCAubGctb2JqZWN0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlciAubGctaGFzLWlmcmFtZSAubGctdmlkZW8tY29udCB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sZy1vdXRlciAubGctdmlkZW8tb2JqZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5sZy1vdXRlciAubGctdmlkZW8tcG9zdGVyIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxnLW91dGVyIC5sZy1oYXMtdmlkZW8gLmxnLXZpZGVvLW9iamVjdCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XG59XG5cbi5sZy1vdXRlciAubGctaGFzLXZpZGVvLmxnLXZpZGVvLWxvYWRlZCAubGctdmlkZW8tcG9zdGVyLFxuLmxnLW91dGVyIC5sZy1oYXMtdmlkZW8ubGctdmlkZW8tbG9hZGVkIC5sZy12aWRlby1wbGF5LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbn1cblxuLmxnLW91dGVyIC5sZy1oYXMtdmlkZW8ubGctdmlkZW8tbG9hZGVkIC5sZy12aWRlby1vYmplY3Qge1xuICBvcGFjaXR5OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIGxnLXBsYXktc3Ryb2tlIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxnLXBsYXktcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmxnLXZpZGVvLXBsYXktYnV0dG9uIHtcbiAgd2lkdGg6IDE4JTtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg4LCAwLjMyLCAxLjI4KSwgb3BhY2l0eSAwLjFzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLjE3LCAwLjg4LCAwLjMyLCAxLjI4KSwgb3BhY2l0eSAwLjFzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODgsIDAuMzIsIDEuMjgpLCBvcGFjaXR5IDAuMXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNywgMC44OCwgMC4zMiwgMS4yOCksIG9wYWNpdHkgMC4xcztcbn1cblxuLmxnLXZpZGVvLXBsYXktYnV0dG9uOmhvdmVyIC5sZy12aWRlby1wbGF5LWljb24tYmcsXG4ubGctdmlkZW8tcGxheS1idXR0b246aG92ZXIgLmxnLXZpZGVvLXBsYXktaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy12aWRlby1wbGF5LWljb24tYmcge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDMlO1xuICBzdHJva2U6ICNmY2ZjZmM7XG4gIG9wYWNpdHk6IDAuNjtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEycyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTJzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMnMgZWFzZS1pbjtcbn1cblxuLmxnLXZpZGVvLXBsYXktaWNvbi1jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAzJTtcbiAgc3Ryb2tlOiByZ2JhKDMwLCAzMCwgMzAsIDAuOSk7XG4gIHN0cm9rZS1vcGFjaXR5OiAxO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIwMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbn1cblxuLmxnLXZpZGVvLXBsYXktaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1JTtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcbiAgb3BhY2l0eTogMC42O1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTJzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xMnMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjEycyBlYXNlLWluO1xufVxuXG4ubGctdmlkZW8tcGxheS1pY29uIC5sZy12aWRlby1wbGF5LWljb24taW5uZXIge1xuICBmaWxsOiAjZmNmY2ZjO1xufVxuXG4ubGctdmlkZW8tbG9hZGluZyAubGctdmlkZW8tcGxheS1pY29uLWNpcmNsZSB7XG4gIGFuaW1hdGlvbjogbGctcGxheS1yb3RhdGUgMnMgbGluZWFyIDAuMjVzIGluZmluaXRlLCBsZy1wbGF5LXN0cm9rZSAxLjVzIGVhc2UtaW4tb3V0IDAuMjVzIGluZmluaXRlO1xufVxuXG4ubGctdmlkZW8tbG9hZGVkIC5sZy12aWRlby1wbGF5LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNyk7XG59XG5cbi5sZy1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDgzO1xuICBvcGFjaXR5OiAwO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDhzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA4cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDhzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wOHMgZWFzZSAwcztcbn1cblxuLmxnLXByb2dyZXNzLWJhciAubGctcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTkwNzA3O1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDA7XG59XG5cbi5sZy1wcm9ncmVzcy1iYXIubGctc3RhcnQgLmxnLXByb2dyZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZy1zaG93LWF1dG9wbGF5IC5sZy1wcm9ncmVzcy1iYXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGctYXV0b3BsYXktYnV0dG9uOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTAxZCc7XG59XG5cbi5sZy1zaG93LWF1dG9wbGF5IC5sZy1hdXRvcGxheS1idXR0b246YWZ0ZXIge1xuICBjb250ZW50OiAnXFxlMDFhJztcbn1cblxuLmxnLXNpbmdsZS1pdGVtIC5sZy1hdXRvcGxheS1idXR0b24ge1xuICBvcGFjaXR5OiAwLjc1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmxnLW91dGVyLmxnLWNzczMubGctem9vbS1kcmFnZ2luZyAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1nLXdyYXAsXG4ubGctb3V0ZXIubGctY3NzMy5sZy16b29tLWRyYWdnaW5nIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWFnZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMG1zICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBtcyAhaW1wb3J0YW50O1xufVxuXG4ubGctb3V0ZXIubGctdXNlLXRyYW5zaXRpb24tZm9yLXpvb20gLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltZy13cmFwIHtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjEyLCAwLjQxNSwgMC4wMSwgMS4xOSkgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4xMiwgMC40MTUsIDAuMDEsIDEuMTkpIDBzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4xMiwgMC40MTUsIDAuMDEsIDEuMTkpIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4xMiwgMC40MTUsIDAuMDEsIDEuMTkpIDBzO1xufVxuXG4ubGctb3V0ZXIubGctdXNlLXRyYW5zaXRpb24tZm9yLXpvb20ubGctem9vbS1kcmFnLXRyYW5zaXRpb24gLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltZy13cmFwIHtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuOHMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1nLXdyYXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltYWdlLFxuLmxnLW91dGVyIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1kdW1teS1pbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNDE1LCAwLjAxLCAxLjE5KSAwcywgb3BhY2l0eSAwLjE1cyAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNDE1LCAwLjAxLCAxLjE5KSAwcywgb3BhY2l0eSAwLjE1cyAhaW1wb3J0YW50O1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4xMiwgMC40MTUsIDAuMDEsIDEuMTkpIDBzLCBvcGFjaXR5IDAuMTVzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjEyLCAwLjQxNSwgMC4wMSwgMS4xOSkgMHMsIG9wYWNpdHkgMC4xNXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1hZ2Uubm8tdHJhbnNpdGlvbixcbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctZHVtbXktaW1nLm5vLXRyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1hZ2UucmVzZXQtdHJhbnNpdGlvbixcbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctZHVtbXktaW1nLnJlc2V0LXRyYW5zaXRpb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMHB4KSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmxnLW91dGVyIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWFnZS5yZXNldC10cmFuc2l0aW9uLXgsXG4ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWR1bW15LWltZy5yZXNldC10cmFuc2l0aW9uLXgge1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoLTUwJSwgMCwgMHB4KSAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1hZ2UucmVzZXQtdHJhbnNpdGlvbi15LFxuLmxnLW91dGVyIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1kdW1teS1pbWcucmVzZXQtdHJhbnNpdGlvbi15IHtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIC01MCUsIDBweCkgIWltcG9ydGFudDtcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgbGVmdDogMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxnLWljb24ubGctem9vbS1pbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGUzMTEnO1xufVxuXG4ubGctYWN0dWFsLXNpemUgLmxnLWljb24ubGctem9vbS1pbiB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5sZy1pY29uLmxnLWFjdHVhbC1zaXplIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubGctaWNvbi5sZy1hY3R1YWwtc2l6ZTphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGUwMzMnO1xufVxuXG4ubGctaWNvbi5sZy16b29tLW91dCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5sZy1pY29uLmxnLXpvb20tb3V0OmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTMxMic7XG59XG5cbi5sZy16b29tZWQgLmxnLWljb24ubGctem9vbS1vdXQge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0ndmlkZW8nXSAubGctem9vbS1pbixcbi5sZy1vdXRlcltkYXRhLWxnLXNsaWRlLXR5cGU9J3ZpZGVvJ10gLmxnLWFjdHVhbC1zaXplLFxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0ndmlkZW8nXSAubGctem9vbS1vdXQsIC5sZy1vdXRlcltkYXRhLWxnLXNsaWRlLXR5cGU9J2lmcmFtZSddIC5sZy16b29tLWluLFxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0naWZyYW1lJ10gLmxnLWFjdHVhbC1zaXplLFxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0naWZyYW1lJ10gLmxnLXpvb20tb3V0LCAubGctb3V0ZXIubGctZmlyc3Qtc2xpZGUtbG9hZGluZyAubGctem9vbS1pbixcbi5sZy1vdXRlci5sZy1maXJzdC1zbGlkZS1sb2FkaW5nIC5sZy1hY3R1YWwtc2l6ZSxcbi5sZy1vdXRlci5sZy1maXJzdC1zbGlkZS1sb2FkaW5nIC5sZy16b29tLW91dCB7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubGctb3V0ZXIgLmxnLXBhZ2VyLW91dGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDgwO1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sZy1vdXRlciAubGctcGFnZXItb3V0ZXIubGctcGFnZXItaG92ZXIgLmxnLXBhZ2VyLWNvbnQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmxnLW91dGVyLmxnLXNpbmdsZS1pdGVtIC5sZy1wYWdlci1vdXRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZy1vdXRlciAubGctcGFnZXItY29udCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5sZy1vdXRlciAubGctcGFnZXItY29udDpob3ZlciAubGctcGFnZXItdGh1bWItY29udCB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmxnLW91dGVyIC5sZy1wYWdlci1jb250LmxnLXBhZ2VyLWFjdGl2ZSAubGctcGFnZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggd2hpdGUgaW5zZXQ7XG59XG5cbi5sZy1vdXRlciAubGctcGFnZXItdGh1bWItY29udCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDEwMCU7XG4gIGhlaWdodDogODNweDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlIDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZSAwcywgLW1vei10cmFuc2Zvcm0gMC4xNXMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlIDBzLCAtby10cmFuc2Zvcm0gMC4xNXMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlIDBzLCB0cmFuc2Zvcm0gMC4xNXMgZWFzZSAwcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNXB4LCAwKTtcbn1cblxuLmxnLW91dGVyIC5sZy1wYWdlci10aHVtYi1jb250IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZy1vdXRlciAubGctcGFnZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAgOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSBpbnNldDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlIDBzO1xuICB3aWR0aDogMTJweDtcbn1cblxuLmxnLW91dGVyIC5sZy1wYWdlcjpob3ZlciwgLmxnLW91dGVyIC5sZy1wYWdlcjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDhweCB3aGl0ZSBpbnNldDtcbn1cblxuLmxnLW91dGVyIC5sZy1jYXJldCB7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDEwcHggZGFzaGVkO1xuICBib3R0b206IC0xMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMDtcbn1cblxuLmxnLWZ1bGxzY3JlZW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZTIwY1wiO1xufVxuXG4ubGctZnVsbHNjcmVlbi1vbiAubGctZnVsbHNjcmVlbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxlMjBkXCI7XG59XG5cbi5sZy1vdXRlciAubGctZHJvcGRvd24tb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvdHRvbTogMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwODE7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IHZpc2liaWxpdHksIG9wYWNpdHk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4xOHMsIG9wYWNpdHkgMC4xOHMgbGluZWFyIDBzO1xuICAtby10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjE4cywgb3BhY2l0eSAwLjE4cyBsaW5lYXIgMHM7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMThzLCBvcGFjaXR5IDAuMThzIGxpbmVhciAwcztcbn1cblxuLmxnLW91dGVyLmxnLWRyb3Bkb3duLWFjdGl2ZSAubGctZHJvcGRvd24sXG4ubGctb3V0ZXIubGctZHJvcGRvd24tYWN0aXZlIC5sZy1kcm9wZG93bi1vdmVybGF5IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5sZy1vdXRlci5sZy1kcm9wZG93bi1hY3RpdmUgLmxnLXNoYXJlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sZy1vdXRlciAubGctZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdG9wOiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XG4gIHdpbGwtY2hhbmdlOiB2aXNpYmlsaXR5LCBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xOHMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjVzLCBvcGFjaXR5IDAuMThzIGxpbmVhciAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjE4cyBsaW5lYXIgMHMsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuNXMsIG9wYWNpdHkgMC4xOHMgbGluZWFyIDBzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4xOHMgbGluZWFyIDBzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjVzLCBvcGFjaXR5IDAuMThzIGxpbmVhciAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMThzIGxpbmVhciAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC41cywgb3BhY2l0eSAwLjE4cyBsaW5lYXIgMHM7XG59XG5cbi5sZy1vdXRlciAubGctZHJvcGRvd246YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IC0xNnB4O1xufVxuXG4ubGctb3V0ZXIgLmxnLWRyb3Bkb3duID4gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmxnLW91dGVyIC5sZy1kcm9wZG93biA+IGxpOmhvdmVyIGEge1xuICBjb2xvcjogIzMzMztcbn1cblxuLmxnLW91dGVyIC5sZy1kcm9wZG93biBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sZy1vdXRlciAubGctZHJvcGRvd24gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG59XG5cbi5sZy1vdXRlciAubGctZHJvcGRvd24gLmxnLWRyb3Bkb3duLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGctb3V0ZXIgLmxnLWRyb3Bkb3duIC5sZy1pY29uIHtcbiAgY29sb3I6ICMzMzM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ubGctb3V0ZXIgLmxnLXNoYXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGctb3V0ZXIgLmxnLXNoYXJlOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTgwZCc7XG59XG5cbi5sZy1vdXRlciAubGctc2hhcmUtZmFjZWJvb2sgLmxnLWljb24ge1xuICBjb2xvcjogIzNiNTk5ODtcbn1cblxuLmxnLW91dGVyIC5sZy1zaGFyZS1mYWNlYm9vayAubGctaWNvbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGU5MDQnO1xufVxuXG4ubGctb3V0ZXIgLmxnLXNoYXJlLXR3aXR0ZXIgLmxnLWljb24ge1xuICBjb2xvcjogIzAwYWNlZDtcbn1cblxuLmxnLW91dGVyIC5sZy1zaGFyZS10d2l0dGVyIC5sZy1pY29uOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTkwNyc7XG59XG5cbi5sZy1vdXRlciAubGctc2hhcmUtcGludGVyZXN0IC5sZy1pY29uIHtcbiAgY29sb3I6ICNjYjIwMjc7XG59XG5cbi5sZy1vdXRlciAubGctc2hhcmUtcGludGVyZXN0IC5sZy1pY29uOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTkwNic7XG59XG5cbi5sZy1jb21tZW50LWJveCB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbn1cblxuLmxnLWNvbW1lbnQtYm94IC5sZy1jb21tZW50LXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubGctY29tbWVudC1ib3ggLmxnLWNvbW1lbnQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5sZy1jb21tZW50LWJveCAubGctY29tbWVudC1ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA0M3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1jb21tZW50LWJveCAuZmItY29tbWVudHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvbG9hZGluZy5naWZcIikgbm8tcmVwZWF0IHNjcm9sbCBjZW50ZXIgY2VudGVyICNmZmY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxnLWNvbW1lbnQtYm94IC5mYi1jb21tZW50c1tmYi14ZmJtbC1zdGF0ZT0ncmVuZGVyZWQnXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5sZy1jb21tZW50LWJveCAuZmItY29tbWVudHMgPiBzcGFuIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubGctY29tbWVudC1ib3ggLmxnLWNvbW1lbnQtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjOTk5O1xuICB3aWxsLWNoYW5nZTogY29sb3I7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGxpbmVhcjtcbn1cblxuLmxnLWNvbW1lbnQtYm94IC5sZy1jb21tZW50LWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sZy1jb21tZW50LWJveCAubGctY29tbWVudC1jbG9zZTphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGUwNzAnO1xufVxuXG4ubGctY29tbWVudC1ib3ggaWZyYW1lIHtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1jb21tZW50LWJveCAjZGlzcXVzX3RocmVhZCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmxnLW91dGVyIC5sZy1jb21tZW50LW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3R0b206IDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDgxO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiB2aXNpYmlsaXR5LCBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMThzLCBvcGFjaXR5IDAuMThzIGxpbmVhciAwcztcbiAgLW8tdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4xOHMsIG9wYWNpdHkgMC4xOHMgbGluZWFyIDBzO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjE4cywgb3BhY2l0eSAwLjE4cyBsaW5lYXIgMHM7XG59XG5cbi5sZy1vdXRlciAubGctY29tbWVudC10b2dnbGU6YWZ0ZXIge1xuICBjb250ZW50OiAnXFxlOTA4Jztcbn1cblxuLmxnLW91dGVyLmxnLWNvbW1lbnQtYWN0aXZlIC5sZy1jb21tZW50LW92ZXJsYXkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMHB4LCAwKTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmxnLW91dGVyLmxnLWNvbW1lbnQtYWN0aXZlIC5sZy1jb21tZW50LXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGctb3V0ZXIubGctY29tbWVudC1hY3RpdmUgLmxnLWNvbW1lbnQtYm94IHtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ubGctb3V0ZXIgLmxnLWltZy1yb3RhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG59XG5cbi5sZy1vdXRlcltkYXRhLWxnLXNsaWRlLXR5cGU9J3ZpZGVvJ10gLmxnLXJvdGF0ZS1sZWZ0LFxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0ndmlkZW8nXSAubGctcm90YXRlLXJpZ2h0LFxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0ndmlkZW8nXSAubGctZmxpcC12ZXIsXG4ubGctb3V0ZXJbZGF0YS1sZy1zbGlkZS10eXBlPSd2aWRlbyddIC5sZy1mbGlwLWhvciwgLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0naWZyYW1lJ10gLmxnLXJvdGF0ZS1sZWZ0LFxuLmxnLW91dGVyW2RhdGEtbGctc2xpZGUtdHlwZT0naWZyYW1lJ10gLmxnLXJvdGF0ZS1yaWdodCxcbi5sZy1vdXRlcltkYXRhLWxnLXNsaWRlLXR5cGU9J2lmcmFtZSddIC5sZy1mbGlwLXZlcixcbi5sZy1vdXRlcltkYXRhLWxnLXNsaWRlLXR5cGU9J2lmcmFtZSddIC5sZy1mbGlwLWhvciB7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubGctb3V0ZXIgLmxnLWltZy1yb3RhdGU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGctcm90YXRlLWxlZnQ6YWZ0ZXIge1xuICBjb250ZW50OiAnXFxlOTAwJztcbn1cblxuLmxnLXJvdGF0ZS1yaWdodDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGU5MDEnO1xufVxuXG4ubGctaWNvbi5sZy1mbGlwLWhvciwgLmxnLWljb24ubGctZmxpcC12ZXIge1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5sZy1mbGlwLXZlcjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGU5MDMnO1xufVxuXG4ubGctZmxpcC1ob3I6YWZ0ZXIge1xuICBjb250ZW50OiAnXFxlOTAyJztcbn1cblxuLmxnLW1lZGl1bS16b29tLWl0ZW0ge1xuICBjdXJzb3I6IHpvb20taW47XG59XG5cbi5sZy1tZWRpdW0tem9vbSAubGctb3V0ZXIge1xuICBjdXJzb3I6IHpvb20tb3V0O1xufVxuXG4ubGctbWVkaXVtLXpvb20gLmxnLW91dGVyLmxnLWdyYWIgaW1nLmxnLW9iamVjdCB7XG4gIGN1cnNvcjogem9vbS1vdXQ7XG59XG5cbi5sZy1tZWRpdW0tem9vbSAubGctb3V0ZXIubGctZ3JhYmJpbmcgaW1nLmxnLW9iamVjdCB7XG4gIGN1cnNvcjogem9vbS1vdXQ7XG59XG5cbi5sZy1yZWxhdGl2ZS1jYXB0aW9uIC5sZy1vdXRlciAubGctc3ViLWh0bWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5sZy1yZWxhdGl2ZS1jYXB0aW9uIC5sZy1vdXRlciAubGctcmVsYXRpdmUtY2FwdGlvbi1pdGVtIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogMTZweCAwO1xuICB0cmFuc2l0aW9uOiAwLjVzIG9wYWNpdHkgZWFzZTtcbn1cblxuLmxnLXJlbGF0aXZlLWNhcHRpb24gLmxnLW91dGVyIC5sZy1zaG93LWNhcHRpb24gLmxnLXJlbGF0aXZlLWNhcHRpb24taXRlbSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1ncm91cDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5sZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGctY29udGFpbmVyLmxnLXNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxnLW9uIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiB1bnNldDtcbn1cblxuLmxnLW92ZXJsYXktb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sZy10b29sYmFyLFxuLmxnLXByZXYsXG4ubGctbmV4dCxcbi5sZy1wYWdlci1vdXRlcixcbi5sZy1oaWRlLXN1Yi1odG1sIC5sZy1zdWItaHRtbCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMjVzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMjVzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAwLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG59XG5cbi5sZy1zaG93LWluIC5sZy10b29sYmFyLFxuLmxnLXNob3ctaW4gLmxnLXByZXYsXG4ubGctc2hvdy1pbiAubGctbmV4dCxcbi5sZy1zaG93LWluIC5sZy1wYWdlci1vdXRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1zaG93LWluLmxnLWhpZGUtc3ViLWh0bWwgLmxnLXN1Yi1odG1sIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLXNob3ctaW4gLmxnLWhpZGUtaXRlbXMgLmxnLXByZXYge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbn1cblxuLmxnLXNob3ctaW4gLmxnLWhpZGUtaXRlbXMgLmxnLW5leHQge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG59XG5cbi5sZy1zaG93LWluIC5sZy1oaWRlLWl0ZW1zIC5sZy10b29sYmFyIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG59XG5cbi5sZy1zaG93LWluIC5sZy1oaWRlLWl0ZW1zLmxnLWhpZGUtc3ViLWh0bWwgLmxnLXN1Yi1odG1sIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xufVxuXG4ubGctb3V0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3BhY2l0eTogMC4wMDE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpbGwtY2hhbmdlOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UgMHM7XG59XG5cbi5sZy1vdXRlciAqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5sZy1vdXRlci5sZy16b29tLWZyb20taW1hZ2Uge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGctb3V0ZXIubGctdmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1vdXRlci5sZy1jc3MzIC5sZy1pdGVtOm5vdCgubGctc3RhcnQtZW5kLXByb2dyZXNzKS5sZy1wcmV2LXNsaWRlLCAubGctb3V0ZXIubGctY3NzMyAubGctaXRlbTpub3QoLmxnLXN0YXJ0LWVuZC1wcm9ncmVzcykubGctbmV4dC1zbGlkZSwgLmxnLW91dGVyLmxnLWNzczMgLmxnLWl0ZW06bm90KC5sZy1zdGFydC1lbmQtcHJvZ3Jlc3MpLmxnLWN1cnJlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlci5sZy1jc3MzLmxnLWRyYWdnaW5nIC5sZy1pdGVtLmxnLXByZXYtc2xpZGUsIC5sZy1vdXRlci5sZy1jc3MzLmxnLWRyYWdnaW5nIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsIC5sZy1vdXRlci5sZy1jc3MzLmxnLWRyYWdnaW5nIC5sZy1pdGVtLmxnLWN1cnJlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1vdXRlci5sZy1ncmFiIGltZy5sZy1vYmplY3Qge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogLW8tZ3JhYjtcbiAgY3Vyc29yOiAtbXMtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4ubGctb3V0ZXIubGctZ3JhYmJpbmcgaW1nLmxnLW9iamVjdCB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW8tZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1zLWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4ubGctb3V0ZXIgLmxnLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmxnLW91dGVyIC5sZy1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMHM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxnLW91dGVyIC5sZy1pdGVtOm5vdCgubGctc3RhcnQtZW5kLXByb2dyZXNzKSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy9sb2FkaW5nLmdpZlwiKSBuby1yZXBlYXQgc2Nyb2xsIGNlbnRlciBjZW50ZXIgdHJhbnNwYXJlbnQ7XG59XG5cbi5sZy1vdXRlci5sZy1jc3MzIC5sZy1wcmV2LXNsaWRlLFxuLmxnLW91dGVyLmxnLWNzczMgLmxnLWN1cnJlbnQsXG4ubGctb3V0ZXIubGctY3NzMyAubGctbmV4dC1zbGlkZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubGctb3V0ZXIubGctY3NzIC5sZy1jdXJyZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbSxcbi5sZy1vdXRlciAubGctaW1nLXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGctb3V0ZXIgLmxnLWl0ZW06YmVmb3JlLFxuLmxnLW91dGVyIC5sZy1pbWctd3JhcDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sZy1vdXRlciAubGctaW1nLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY3VycmVudCB7XG4gIHotaW5kZXg6IDEwNjA7XG59XG5cbi5sZy1vdXRlciAubGctb2JqZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxnLW91dGVyIC5sZy1lbXB0eS1odG1sLmxnLXN1Yi1odG1sLFxuLmxnLW91dGVyIC5sZy1lbXB0eS1odG1sIC5sZy1zdWItaHRtbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZy1vdXRlci5sZy1oaWRlLWRvd25sb2FkIC5sZy1kb3dubG9hZCB7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubGctb3V0ZXIgLmxnLWZpcnN0LXNsaWRlIC5sZy1kdW1teS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5sZy1vdXRlci5sZy1jb21wb25lbnRzLW9wZW46bm90KC5sZy16b29tZWQpIC5sZy1jb21wb25lbnRzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwJSwgMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1vdXRlci5sZy1jb21wb25lbnRzLW9wZW46bm90KC5sZy16b29tZWQpIC5sZy1zdWItaHRtbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCAwLjE1cztcbn1cblxuLmxnLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwNDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHdpbGwtY2hhbmdlOiBhdXRvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgZWFzZS1pbiAwcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGVhc2UtaW4gMHM7XG59XG5cbi5sZy1iYWNrZHJvcC5pbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1jc3MzLmxnLW5vLXRyYW5zIC5sZy1wcmV2LXNsaWRlLFxuLmxnLWNzczMubGctbm8tdHJhbnMgLmxnLW5leHQtc2xpZGUsXG4ubGctY3NzMy5sZy1uby10cmFucyAubGctY3VycmVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzICFpbXBvcnRhbnQ7XG4gIC1vLXRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcyAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHMgIWltcG9ydGFudDtcbn1cblxuLmxnLWNzczMubGctdXNlLWNzczMgLmxnLWl0ZW0ge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxnLWNzczMubGctZmFkZSAubGctaXRlbSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctY3VycmVudCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctcHJldi1zbGlkZSwgLmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLCAubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtLmxnLWN1cnJlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMHM7XG59XG5cbi5sZy1jc3MzLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLXN0YXJ0LXByb2dyZXNzIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDBzO1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpIDBzO1xufVxuXG4ubGctY3NzMy5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1zdGFydC1lbmQtcHJvZ3Jlc3Mge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG59XG5cbi5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctcHJldi1zbGlkZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xufVxuXG4ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1uZXh0LXNsaWRlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xufVxuXG4ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1jdXJyZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1wcmV2LXNsaWRlLCAubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLCAubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1jdXJyZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4xcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAwLjFzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4xcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMXMgZWFzZSAwcztcbn1cblxuLmxnLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZy1jb250YWluZXIubGctc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGctY29udGFpbmVyLmxnLWRyYWdnaW5nLXZlcnRpY2FsIC5sZy1iYWNrZHJvcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbn1cblxuLmxnLWNvbnRhaW5lci5sZy1kcmFnZ2luZy12ZXJ0aWNhbCAubGctY3NzMyAubGctaXRlbS5sZy1jdXJyZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGctaW5saW5lIC5sZy1iYWNrZHJvcCxcbi5sZy1pbmxpbmUgLmxnLW91dGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGctaW5saW5lIC5sZy1iYWNrZHJvcCB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sZy1pbmxpbmUgLmxnLW91dGVyIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmxnLWlubGluZSAubGctbWF4aW1pemU6YWZ0ZXIge1xuICBjb250ZW50OiAnXFxlOTA5Jztcbn1cblxuLmxnLWNvbXBvbmVudHMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXMgZWFzZS1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zNXMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjM1cyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGVhc2Utb3V0IDBzO1xuICB6LWluZGV4OiAxMDgwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdsZyc7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvbGcud29mZjI/aW85YTZrXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9sZy50dGY/aW85YTZrXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi9mb250cy9sZy53b2ZmP2lvOWE2a1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi9mb250cy9sZy5zdmc/aW85YTZrI2xnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGctaWNvbiB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiAnbGcnICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBuZXZlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5sZy1jb250YWluZXIge1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCAnTm90byBTYW5zJywgJ0xpYmVyYXRpb24gU2FucycsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG59XG5cbi5sZy1uZXh0LFxuLmxnLXByZXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nOiA4cHggMTBweCA5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDEwODQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxnLW5leHQuZGlzYWJsZWQsXG4ubGctcHJldi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubGctbmV4dDpob3Zlcjpub3QoLmRpc2FibGVkKSxcbi5sZy1wcmV2OmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sZy1zaW5nbGUtaXRlbSAubGctbmV4dCwgLmxnLXNpbmdsZS1pdGVtXG4ubGctcHJldiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZy1uZXh0IHtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5sZy1uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXGUwOTUnO1xufVxuXG4ubGctcHJldiB7XG4gIGxlZnQ6IDIwcHg7XG59XG5cbi5sZy1wcmV2OmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTA5NCc7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsZy1yaWdodC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGxnLXJpZ2h0LWVuZCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgbGVmdDogLTMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBsZy1yaWdodC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsZy1yaWdodC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxnLWxlZnQtZW5kIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGxnLWxlZnQtZW5kIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQC1tcy1rZXlmcmFtZXMgbGctbGVmdC1lbmQge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDMwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxnLWxlZnQtZW5kIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuLmxnLW91dGVyLmxnLXJpZ2h0LWVuZCAubGctb2JqZWN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxnLXJpZ2h0LWVuZCAwLjNzO1xuICAtby1hbmltYXRpb246IGxnLXJpZ2h0LWVuZCAwLjNzO1xuICBhbmltYXRpb246IGxnLXJpZ2h0LWVuZCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZy1vdXRlci5sZy1sZWZ0LWVuZCAubGctb2JqZWN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxnLWxlZnQtZW5kIDAuM3M7XG4gIC1vLWFuaW1hdGlvbjogbGctbGVmdC1lbmQgMC4zcztcbiAgYW5pbWF0aW9uOiBsZy1sZWZ0LWVuZCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZy10b29sYmFyIHtcbiAgei1pbmRleDogMTA4MjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGctbWVkaWEtb3ZlcmxhcCAubGctdG9vbGJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xufVxuXG4ubGctdG9vbGJhciAubGctaWNvbiB7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBtZWRpdW0gbm9uZTtcbiAgd2lsbC1jaGFuZ2U6IGNvbG9yO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLWljb24ubGctaWNvbi0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLWljb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLWNsb3NlOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTA3MCc7XG59XG5cbi5sZy10b29sYmFyIC5sZy1tYXhpbWl6ZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxnLXRvb2xiYXIgLmxnLW1heGltaXplOmFmdGVyIHtcbiAgY29udGVudDogJ1xcZTkwYSc7XG59XG5cbi5sZy10b29sYmFyIC5sZy1kb3dubG9hZDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGUwZjInO1xufVxuXG4ubGctc3ViLWh0bWwge1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTA4MDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0IDBzO1xufVxuXG4ubGctc3ViLWh0bWwgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sZy1zdWItaHRtbCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDVweCAwIDA7XG59XG5cbi5sZy1zdWItaHRtbCBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5sZy1zdWItaHRtbCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5sZy1tZWRpYS1vdmVybGFwIC5sZy1zdWItaHRtbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC42KSk7XG59XG5cbi5sZy1pdGVtIC5sZy1zdWItaHRtbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmxnLWVycm9yLW1zZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5sZy1jb3VudGVyIHtcbiAgY29sb3I6ICM5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sZy1jbG9zaW5nIC5sZy10b29sYmFyLFxuLmxnLWNsb3NpbmcgLmxnLXByZXYsXG4ubGctY2xvc2luZyAubGctbmV4dCxcbi5sZy1jbG9zaW5nIC5sZy1zdWItaHRtbCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4wOCBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4wOCBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIGNvbG9yIDAuMDggbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBjb2xvciAwLjA4IGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBjb2xvciAwLjA4IGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMDggY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBjb2xvciAwLjA4IGxpbmVhcjtcbn1cblxuYm9keTpub3QoLmxnLWZyb20taGFzaCkgLmxnLW91dGVyLmxnLXN0YXJ0LXpvb20gLmxnLWl0ZW06bm90KC5sZy16b29tYWJsZSkgLmxnLWltZy13cmFwLFxuYm9keTpub3QoLmxnLWZyb20taGFzaCkgLmxnLW91dGVyLmxnLXN0YXJ0LXpvb20gLmxnLWl0ZW06bm90KC5sZy16b29tYWJsZSkgLmxnLXZpZGVvLWNvbnQge1xuICBvcGFjaXR5OiAwO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUzZCgwLjUsIDAuNSwgMC41KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjUsIDAuNSwgMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNSwgMC41LCAwLjUpO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbmJvZHk6bm90KC5sZy1mcm9tLWhhc2gpIC5sZy1vdXRlci5sZy1zdGFydC16b29tIC5sZy1pdGVtOm5vdCgubGctem9vbWFibGUpLmxnLWNvbXBsZXRlIC5sZy1pbWctd3JhcCxcbmJvZHk6bm90KC5sZy1mcm9tLWhhc2gpIC5sZy1vdXRlci5sZy1zdGFydC16b29tIC5sZy1pdGVtOm5vdCgubGctem9vbWFibGUpLmxnLWNvbXBsZXRlIC5sZy12aWRlby1jb250IHtcbiAgb3BhY2l0eTogMTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbn1cblxuLmxnLWljb246Zm9jdXMtdmlzaWJsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4ubGctdG9vbGJhciAubGctaWNvbjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdXRsaW5lLW9mZnNldDogLTVweDtcbn1cblxuLmxnLWdyb3VwOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmxnLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sZy1jb250YWluZXIubGctc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubGctb24ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHVuc2V0O1xufVxuXG4ubGctb3ZlcmxheS1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxnLXRvb2xiYXIsXG4ubGctcHJldixcbi5sZy1uZXh0LFxuLmxnLXBhZ2VyLW91dGVyLFxuLmxnLWhpZGUtc3ViLWh0bWwgLmxnLXN1Yi1odG1sIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAwLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMjVzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbn1cblxuLmxnLXNob3ctaW4gLmxnLXRvb2xiYXIsXG4ubGctc2hvdy1pbiAubGctcHJldixcbi5sZy1zaG93LWluIC5sZy1uZXh0LFxuLmxnLXNob3ctaW4gLmxnLXBhZ2VyLW91dGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLXNob3ctaW4ubGctaGlkZS1zdWItaHRtbCAubGctc3ViLWh0bWwge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGctc2hvdy1pbiAubGctaGlkZS1pdGVtcyAubGctcHJldiB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xufVxuXG4ubGctc2hvdy1pbiAubGctaGlkZS1pdGVtcyAubGctbmV4dCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbn1cblxuLmxnLXNob3ctaW4gLmxnLWhpZGUtaXRlbXMgLmxnLXRvb2xiYXIge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbn1cblxuLmxnLXNob3ctaW4gLmxnLWhpZGUtaXRlbXMubGctaGlkZS1zdWItaHRtbCAubGctc3ViLWh0bWwge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG59XG5cbi5sZy1vdXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvcGFjaXR5OiAwLjAwMTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lsbC1jaGFuZ2U6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlIDBzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZSAwcztcbn1cblxuLmxnLW91dGVyICoge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxnLW91dGVyLmxnLXpvb20tZnJvbS1pbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1vdXRlci5sZy12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLW91dGVyLmxnLWNzczMgLmxnLWl0ZW06bm90KC5sZy1zdGFydC1lbmQtcHJvZ3Jlc3MpLmxnLXByZXYtc2xpZGUsIC5sZy1vdXRlci5sZy1jc3MzIC5sZy1pdGVtOm5vdCgubGctc3RhcnQtZW5kLXByb2dyZXNzKS5sZy1uZXh0LXNsaWRlLCAubGctb3V0ZXIubGctY3NzMyAubGctaXRlbTpub3QoLmxnLXN0YXJ0LWVuZC1wcm9ncmVzcykubGctY3VycmVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmxnLW91dGVyLmxnLWNzczMubGctZHJhZ2dpbmcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZSwgLmxnLW91dGVyLmxnLWNzczMubGctZHJhZ2dpbmcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwgLmxnLW91dGVyLmxnLWNzczMubGctZHJhZ2dpbmcgLmxnLWl0ZW0ubGctY3VycmVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLW91dGVyLmxnLWdyYWIgaW1nLmxnLW9iamVjdCB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtby1ncmFiO1xuICBjdXJzb3I6IC1tcy1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5sZy1vdXRlci5sZy1ncmFiYmluZyBpbWcubGctb2JqZWN0IHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiAtby1ncmFiYmluZztcbiAgY3Vyc29yOiAtbXMtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbi5sZy1vdXRlciAubGctY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4ubGctb3V0ZXIgLmxnLWlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxnLW91dGVyIC5sZy1pdGVtIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGctb3V0ZXIgLmxnLWl0ZW06bm90KC5sZy1zdGFydC1lbmQtcHJvZ3Jlc3MpIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL2xvYWRpbmcuZ2lmXCIpIG5vLXJlcGVhdCBzY3JvbGwgY2VudGVyIGNlbnRlciB0cmFuc3BhcmVudDtcbn1cblxuLmxnLW91dGVyLmxnLWNzczMgLmxnLXByZXYtc2xpZGUsXG4ubGctb3V0ZXIubGctY3NzMyAubGctY3VycmVudCxcbi5sZy1vdXRlci5sZy1jc3MzIC5sZy1uZXh0LXNsaWRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5sZy1vdXRlci5sZy1jc3MgLmxnLWN1cnJlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmxnLW91dGVyIC5sZy1pdGVtLFxuLmxnLW91dGVyIC5sZy1pbWctd3JhcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbTpiZWZvcmUsXG4ubGctb3V0ZXIgLmxnLWltZy13cmFwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxnLW91dGVyIC5sZy1pbWctd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDA7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5sZy1vdXRlciAubGctaXRlbS5sZy1jdXJyZW50IHtcbiAgei1pbmRleDogMTA2MDtcbn1cblxuLmxnLW91dGVyIC5sZy1vYmplY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGctb3V0ZXIgLmxnLWVtcHR5LWh0bWwubGctc3ViLWh0bWwsXG4ubGctb3V0ZXIgLmxnLWVtcHR5LWh0bWwgLmxnLXN1Yi1odG1sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxnLW91dGVyLmxnLWhpZGUtZG93bmxvYWQgLmxnLWRvd25sb2FkIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5sZy1vdXRlciAubGctZmlyc3Qtc2xpZGUgLmxnLWR1bW15LWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmxnLW91dGVyLmxnLWNvbXBvbmVudHMtb3Blbjpub3QoLmxnLXpvb21lZCkgLmxnLWNvbXBvbmVudHMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAlLCAwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLW91dGVyLmxnLWNvbXBvbmVudHMtb3Blbjpub3QoLmxnLXpvb21lZCkgLmxnLXN1Yi1odG1sIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0IDAuMTVzO1xufVxuXG4ubGctYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTA0MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMDtcbiAgd2lsbC1jaGFuZ2U6IGF1dG87XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBlYXNlLWluIDBzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGVhc2UtaW4gMHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgZWFzZS1pbiAwcztcbn1cblxuLmxnLWJhY2tkcm9wLmluIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLWNzczMubGctbm8tdHJhbnMgLmxnLXByZXYtc2xpZGUsXG4ubGctY3NzMy5sZy1uby10cmFucyAubGctbmV4dC1zbGlkZSxcbi5sZy1jc3MzLmxnLW5vLXRyYW5zIC5sZy1jdXJyZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHMgIWltcG9ydGFudDtcbiAgLW1vei10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHMgIWltcG9ydGFudDtcbiAgLW8tdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcyAhaW1wb3J0YW50O1xufVxuXG4ubGctY3NzMy5sZy11c2UtY3NzMyAubGctaXRlbSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1jdXJyZW50IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1wcmV2LXNsaWRlLCAubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsIC5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctY3VycmVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwcztcbn1cblxuLmxnLWNzczMubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctc3RhcnQtcHJvZ3Jlc3Mge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSkgMHM7XG59XG5cbi5sZy1jc3MzLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLXN0YXJ0LWVuZC1wcm9ncmVzcyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcztcbn1cblxuLmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1wcmV2LXNsaWRlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG59XG5cbi5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG59XG5cbi5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLWN1cnJlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGUsIC5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsIC5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLWN1cnJlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAwLjFzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMjUsIDEpIDBzLCBvcGFjaXR5IDAuMXMgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjI1LCAxKSAwcywgb3BhY2l0eSAwLjFzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yNSwgMSkgMHMsIG9wYWNpdHkgMC4xcyBlYXNlIDBzO1xufVxuXG4ubGctY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxnLWNvbnRhaW5lci5sZy1zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sZy1jb250YWluZXIubGctZHJhZ2dpbmctdmVydGljYWwgLmxnLWJhY2tkcm9wIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50O1xufVxuXG4ubGctY29udGFpbmVyLmxnLWRyYWdnaW5nLXZlcnRpY2FsIC5sZy1jc3MzIC5sZy1pdGVtLmxnLWN1cnJlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sZy1pbmxpbmUgLmxnLWJhY2tkcm9wLFxuLmxnLWlubGluZSAubGctb3V0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sZy1pbmxpbmUgLmxnLWJhY2tkcm9wIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxnLWlubGluZSAubGctb3V0ZXIge1xuICB6LWluZGV4OiAyO1xufVxuXG4ubGctaW5saW5lIC5sZy1tYXhpbWl6ZTphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXGU5MDknO1xufVxuXG4ubGctY29tcG9uZW50cyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjM1cyBlYXNlLW91dCAwcztcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuMzVzIGVhc2Utb3V0IDBzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgZWFzZS1vdXQgMHM7XG4gIHotaW5kZXg6IDEwODA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lightgallery/angular/9 */
    "./node_modules/lightgallery/angular/9/fesm2015/lightgallery-angular-9.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__["LightgalleryModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__["LightgalleryModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], lightgallery_angular_9__WEBPACK_IMPORTED_MODULE_3__["LightgalleryModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/thach/Desktop/wedding/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map