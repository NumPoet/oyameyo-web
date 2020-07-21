function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
  /***/
  "./node_modules/gl-ionic-background-video/dist/esm/es5/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/gl-ionic-background-video/dist/esm/es5/index.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesGlIonicBackgroundVideoDistEsmEs5IndexJs(module, exports) {// GlBackgroundVideo: ES Module

    /***/
  },

  /***/
  "./node_modules/gl-ionic-background-video/dist/esm/index.js":
  /*!******************************************************************!*\
    !*** ./node_modules/gl-ionic-background-video/dist/esm/index.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesGlIonicBackgroundVideoDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _es5_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./es5/index.js */
    "./node_modules/gl-ionic-background-video/dist/esm/es5/index.js");
    /* harmony import */


    var _es5_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_es5_index_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _es5_index_js__WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _es5_index_js__WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\" >\n      <ion-menu-button ></ion-menu-button>\n    </ion-buttons>\n   <!-- <ion-title>{{ folder }}</ion-title>-->\n    <ion-title size=\"large\"> \n        <ion-thumbnail class=\"logo\">\n          <ion-img src=\"./assets/oyameyo_logo-sinfondo_(1).png\" class=\" ion-margin\" ></ion-img>\n        </ion-thumbnail> \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content \n    [scrollEvents]=\"true\"\n    (ionScrollStart)=\"logScrollStart()\"\n    (ionScroll)=\"logScrolling($event)\"\n    (ionScrollEnd)=\"logScrollEnd()\"\n    [fullscreen]=\"true\"\n   >\n\n  <div id=\"container\" class=\"banner\">\n    <section>\n      <gl-background-video id=\"section-video\" src=\"../../assets/smoke.mp4\" mute=\"true\"></gl-background-video>\n      <!-- <video id=\"section-video\"  src=\"../../assets/smoke.mp4\" muted autoplay loop controls  type='video/mp4; codecs=\"h.264\"' > </video>-->\n      <!--\n      <ion-grid>\n        <ion-row class=\"\">\n          <ion-col size=\"2\" size-sm=\"12\">\n            <div>\n              <h2 class=\"texto-landing ion-text-uppercase\">Oyameyo</h2>          \n            </div>\n            \n          </ion-col>\n        \n        </ion-row>\n      </ion-grid>\n      -->\n      <div class=\"textBox\">\n        <h2>Oyameyo</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.</p>\n        <a href=\"#\">Ver productos</a>\n      </div>\n     \n      <div class=\"imgBx\">\n        <!--\n          <img src=\"../../assets/man.png\">\n           <h2 class=\"texto-landing ion-text-uppercase\">Oyameyo</h2> \n        -->\n      </div>\n      \n      \n    </section>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/folder/folder-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");
    /* harmony import */


    var gl_ionic_background_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! gl-ionic-background-video */
    "./node_modules/gl-ionic-background-video/dist/esm/index.js");

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-success);\n  padding-top: 18px;\n}\n\nion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n\n#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n/*\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.logo {\n  width: 9em;\n  padding-left: 1px;\n  //margin-top: -17px;\n  //margin-bottom: -2px;\n  height: 3em;\n}\n*/\n\n.logo {\n  position: relative;\n  width: 9em;\n  padding-left: 1px;\n  height: 3em;\n}\n\n@media (max-width: 991px) {\n  header {\n    padding: 20px 50px;\n  }\n\n  .banner {\n    padding: 150px 50px 0;\n    flex-direction: column;\n    overflow: hidden;\n  }\n\n  .banner:before {\n    width: 300px;\n    transform: translateX(50%) skewX(-25deg);\n  }\n\n  .banner .textBox {\n    max-width: 100%;\n  }\n\n  .banner .textBox h2 {\n    font-size: 2.5em;\n  }\n\n  .sci {\n    left: initial;\n    flex-direction: column;\n    right: 20px;\n    z-index: 10;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0M6XFxVc2Vyc1xcYm9uZWtcXE9uZURyaXZlXFxEb2N1bWVudHNcXDA0LW51bXBvZXRcXG95YW1leW8tYXBwL3NyY1xcYXBwXFxmb2xkZXJcXGZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREdBO0VBRUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RGOztBREdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUF5QkE7RUFFRSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxpQkFBQTtFQUdBLFdBQUE7QUNKRjs7QURPQTtFQUVFO0lBRUUsa0JBQUE7RUNORjs7RURRQTtJQUVFLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQ05GOztFRFFBO0lBRUUsWUFBQTtJQUNBLHdDQUFBO0VDTkY7O0VEUUE7SUFFRSxlQUFBO0VDTkY7O0VEUUE7SUFFRSxnQkFBQTtFQ05GOztFRFFBO0lBRUUsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBcbn1cblxuI2NvbnRhaW5lciB7XG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLypcbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA5ZW07XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICAvL21hcmdpbi10b3A6IC0xN3B4O1xuICAvL21hcmdpbi1ib3R0b206IC0ycHg7XG4gIGhlaWdodDogM2VtO1xufVxuKi9cbi5sb2dvXG57XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB3aWR0aDogOWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgLy9tYXJnaW4tdG9wOiAtMTdweDtcbiAgLy9tYXJnaW4tYm90dG9tOiAtMnB4O1xuICBoZWlnaHQ6IDNlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KVxue1xuICBoZWFkZXJcbiAge1xuICAgIHBhZGRpbmc6IDIwcHggNTBweFxuICB9XG4gIC5iYW5uZXJcbiAge1xuICAgIHBhZGRpbmc6IDE1MHB4IDUwcHggMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmJhbm5lcjpiZWZvcmVcbiAge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSBza2V3WCgtMjVkZWcpO1xuICB9XG4gIC5iYW5uZXIgLnRleHRCb3hcbiAge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuYmFubmVyIC50ZXh0Qm94IGgyXG4gIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG4gIC5zY2lcbiAge1xuICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByaWdodDogMjBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxufSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4vKlxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDllbTtcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gIC8vbWFyZ2luLXRvcDogLTE3cHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgaGVpZ2h0OiAzZW07XG59XG4qL1xuLmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5ZW07XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICBoZWlnaHQ6IDNlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xuICB9XG5cbiAgLmJhbm5lciB7XG4gICAgcGFkZGluZzogMTUwcHggNTBweCAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5iYW5uZXI6YmVmb3JlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSkgc2tld1goLTI1ZGVnKTtcbiAgfVxuXG4gIC5iYW5uZXIgLnRleHRCb3gge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5iYW5uZXIgLnRleHRCb3ggaDIge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cblxuICAuc2NpIHtcbiAgICBsZWZ0OiBpbml0aWFsO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/folder.page.ts":
  /*!***************************************!*\
    !*** ./src/app/folder/folder.page.ts ***!
    \***************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FolderPage = /*#__PURE__*/function () {
      function FolderPage(activatedRoute) {
        _classCallCheck(this, FolderPage);

        this.activatedRoute = activatedRoute;
      }

      _createClass(FolderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "logScrollStart",
        value: function logScrollStart() {}
      }, {
        key: "logScrolling",
        value: function logScrolling(event) {//console.log(event);
        }
      }, {
        key: "logScrollEnd",
        value: function logScrollEnd() {}
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/folder/folder.page.scss"))["default"]]
    })], FolderPage);
    /***/
  }
}]);
//# sourceMappingURL=folder-folder-module-es5.js.map