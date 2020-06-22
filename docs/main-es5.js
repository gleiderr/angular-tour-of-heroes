function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./heroes/heroes.component */
    "./src/app/heroes/heroes.component.ts");
    /* harmony import */


    var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hero-detail/hero-detail.component */
    "./src/app/hero-detail/hero-detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'detail/:id',
      component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"]
    }, {
      path: 'heroes',
      component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Tour of Heroes';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 1,
      consts: [["routerLink", "/dashboard"], ["routerLink", "/heroes"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-messages");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"]],
      styles: ["h1[_ngcontent-%COMP%] {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\r\n  color: #334953;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  color: #039be5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbm5hdiBhIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxubmF2IGE6dmlzaXRlZCxcclxuYTpsaW5rIHtcclxuICBjb2xvcjogIzMzNDk1MztcclxufVxyXG5uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5uYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG59XHJcbiJdfQ== */"]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hero-detail/hero-detail.component */
    "./src/app/hero-detail/hero-detail.component.ts");
    /* harmony import */


    var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./heroes/heroes.component */
    "./src/app/heroes/heroes.component.ts");
    /* harmony import */


    var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hero-search/hero-search.component */
    "./src/app/hero-search/hero-search.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], {
        dataEncapsulation: false
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__["HeroesComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__["HeroDetailComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__["HeroSearchComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
          // and returns simulated server responses.
          // Remove it when a real server is ready to receive requests.
          angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], {
            dataEncapsulation: false
          })],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__["HeroesComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__["HeroDetailComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__["HeroSearchComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../hero-search/hero-search.component */
    "./src/app/hero-search/hero-search.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DashboardComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hero_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r1.name);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(heroService) {
        _classCallCheck(this, DashboardComponent);

        this.heroService = heroService;
        this.heroes = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHeroes();
        }
      }, {
        key: "getHeroes",
        value: function getHeroes() {
          var _this = this;

          this.heroService.getHeroes().subscribe(function (heroes) {
            return _this.heroes = heroes.slice(1, 5);
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 5,
      vars: 1,
      consts: [[1, "grid", "grid-pad"], ["class", "col-1-4", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-1-4", 3, "routerLink"], [1, "module", "hero"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_a_3_Template, 4, 2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-hero-search");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_3__["HeroSearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["[class*='col-'][_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\r\n  padding-right: 0;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 0;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.col-1-4[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n}\r\n.module[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #3f525c;\r\n  border-radius: 2px;\r\n}\r\n.module[_ngcontent-%COMP%]:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    max-height: 75px;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  .module[_ngcontent-%COMP%] {\r\n    min-width: 60px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOzs7RUFLRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4qLFxyXG4qOmFmdGVyLFxyXG4qOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5oNCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ncmlkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbC0xLTQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLm1vZHVsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4ubW9kdWxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzYwN2Q4YjtcclxufVxyXG4uZ3JpZC1wYWQge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tb2R1bGUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm1vZHVsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hero-detail/hero-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hero-detail/hero-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: HeroDetailComponent */

  /***/
  function srcAppHeroDetailHeroDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function () {
      return HeroDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HeroDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "id: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.hero.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "go back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.hero.name), " Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hero.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.hero.name);
      }
    }

    var HeroDetailComponent = /*#__PURE__*/function () {
      function HeroDetailComponent(route, heroService, location) {
        _classCallCheck(this, HeroDetailComponent);

        this.route = route;
        this.heroService = heroService;
        this.location = location;
      }

      _createClass(HeroDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHero();
        }
      }, {
        key: "getHero",
        value: function getHero() {
          var _this2 = this;

          var id = +this.route.snapshot.paramMap.get('id');
          this.heroService.getHero(id).subscribe(function (hero) {
            return _this2.hero = hero;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          this.heroService.updateHero(this.hero).subscribe(function () {
            return _this3.goBack();
          });
        }
      }]);

      return HeroDetailComponent;
    }();

    HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
      return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroDetailComponent,
      selectors: [["app-hero-detail"]],
      inputs: {
        hero: "hero"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["placeholder", "name", 3, "ngModel", "ngModelChange"], [3, "click"]],
      template: function HeroDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 16, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]],
      styles: ["label[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: 0.5em 0;\r\n  color: #607d8b;\r\n  font-weight: bold;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: 0.4em;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0M7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC40ZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero-detail',
          templateUrl: './hero-detail.component.html',
          styleUrls: ['./hero-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, {
        hero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/hero-search/hero-search.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/hero-search/hero-search.component.ts ***!
    \******************************************************/

  /*! exports provided: HeroSearchComponent */

  /***/
  function srcAppHeroSearchHeroSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function () {
      return HeroSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeroSearchComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hero_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
      }
    }

    var HeroSearchComponent = /*#__PURE__*/function () {
      function HeroSearchComponent(heroService) {
        _classCallCheck(this, HeroSearchComponent);

        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      } // Push a search term into the observable stream.


      _createClass(HeroSearchComponent, [{
        key: "search",
        value: function search(term) {
          this.searchTerms.next(term);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.heroes$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), // ignore new term if same as previous term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // switch to new search observable each time the term changes
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this4.heroService.searchHeroes(term);
          }));
        }
      }]);

      return HeroSearchComponent;
    }();

    HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) {
      return new (t || HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]));
    };

    HeroSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroSearchComponent,
      selectors: [["app-hero-search"]],
      decls: 9,
      vars: 3,
      consts: [["id", "search-component"], ["for", "search-box"], ["id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function HeroSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hero Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.search(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeroSearchComponent_li_7_Template, 3, 2, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.heroes$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 195px;\r\n  height: 16px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #607d8b;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  color: white;\r\n}\r\n#search-box[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 20px;\r\n}\r\nul.search-result[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUI7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIHdpZHRoOiAxOTVweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICBjb2xvcjogIzg4ODtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNzZWFyY2gtYm94IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG51bC5zZWFyY2gtcmVzdWx0IHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero-search',
          templateUrl: './hero-search.component.html',
          styleUrls: ['./hero-search.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hero.service.ts":
  /*!*********************************!*\
    !*** ./src/app/hero.service.ts ***!
    \*********************************/

  /*! exports provided: HeroService */

  /***/
  function srcAppHeroServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroService", function () {
      return HeroService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./message.service */
    "./src/app/message.service.ts");

    var HeroService = /*#__PURE__*/function () {
      function HeroService(http, messageService) {
        _classCallCheck(this, HeroService);

        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes'; // URL to web api

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }
      /** GET heroes from the server */


      _createClass(HeroService, [{
        key: "getHeroes",
        value: function getHeroes() {
          var _this5 = this;

          return this.http.get(this.heroesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this5.log('fetched heroes');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
        }
        /** GET hero by id. Return `undefined` when id not found */

      }, {
        key: "getHeroNo404",
        value: function getHeroNo404(id) {
          var _this6 = this;

          var url = "".concat(this.heroesUrl, "/?id=").concat(id);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (heroes) {
            return heroes[0];
          }), // returns a {0|1} element array
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";

            _this6.log("".concat(outcome, " hero id=").concat(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getHero id=".concat(id))));
        }
        /** GET hero by id. Will 404 if id not found */

      }, {
        key: "getHero",
        value: function getHero(id) {
          var _this7 = this;

          var url = "".concat(this.heroesUrl, "/").concat(id);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this7.log("fetched hero id=".concat(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getHero id=".concat(id))));
        }
        /* GET heroes whose name contains search term */

      }, {
        key: "searchHeroes",
        value: function searchHeroes(term) {
          var _this8 = this;

          if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
          }

          return this.http.get("".concat(this.heroesUrl, "/?name=").concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            return x.length ? _this8.log("found heroes matching \"".concat(term, "\"")) : _this8.log("no heroes matching \"".concat(term, "\""));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchHeroes', [])));
        } //////// Save methods //////////

        /** POST: add a new hero to the server */

      }, {
        key: "addHero",
        value: function addHero(hero) {
          var _this9 = this;

          return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newHero) {
            return _this9.log("added hero w/ id=".concat(newHero.id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
        }
        /** DELETE: delete the hero from the server */

      }, {
        key: "deleteHero",
        value: function deleteHero(hero) {
          var _this10 = this;

          var id = typeof hero === 'number' ? hero : hero.id;
          var url = "".concat(this.heroesUrl, "/").concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this10.log("deleted hero id=".concat(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteHero')));
        }
        /** PUT: update the hero on the server */

      }, {
        key: "updateHero",
        value: function updateHero(hero) {
          var _this11 = this;

          return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return _this11.log("updated hero id=".concat(hero.id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateHero')));
        }
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var _this12 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            _this12.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
        /** Log a HeroService message with the MessageService */

      }, {
        key: "log",
        value: function log(message) {
          this.messageService.add("HeroService: ".concat(message));
        }
      }]);

      return HeroService;
    }();

    HeroService.ɵfac = function HeroService_Factory(t) {
      return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
    };

    HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeroService,
      factory: HeroService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/heroes/heroes.component.ts":
  /*!********************************************!*\
    !*** ./src/app/heroes/heroes.component.ts ***!
    \********************************************/

  /*! exports provided: HeroesComponent */

  /***/
  function srcAppHeroesHeroesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroesComponent", function () {
      return HeroesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../hero.service */
    "./src/app/hero.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeroesComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_li_10_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var hero_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3["delete"](hero_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hero_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
      }
    }

    var HeroesComponent = /*#__PURE__*/function () {
      function HeroesComponent(heroService) {
        _classCallCheck(this, HeroesComponent);

        this.heroService = heroService;
      }

      _createClass(HeroesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHeroes();
        }
      }, {
        key: "getHeroes",
        value: function getHeroes() {
          var _this13 = this;

          this.heroService.getHeroes().subscribe(function (heroes) {
            return _this13.heroes = heroes;
          });
        }
      }, {
        key: "add",
        value: function add(name) {
          var _this14 = this;

          name = name.trim();

          if (!name) {
            return;
          }

          this.heroService.addHero({
            name: name
          }).subscribe(function (hero) {
            _this14.heroes.push(hero);
          });
        }
      }, {
        key: "delete",
        value: function _delete(hero) {
          this.heroes = this.heroes.filter(function (h) {
            return h !== hero;
          });
          this.heroService.deleteHero(hero).subscribe();
        }
      }]);

      return HeroesComponent;
    }();

    HeroesComponent.ɵfac = function HeroesComponent_Factory(t) {
      return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]));
    };

    HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroesComponent,
      selectors: [["app-heroes"]],
      decls: 11,
      vars: 1,
      consts: [["heroName", ""], [3, "click"], [1, "heroes"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], ["title", "delete hero", 1, "delete", 3, "click"]],
      template: function HeroesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Heroes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hero name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            ctx.add(_r0.value);
            return _r0.value = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeroesComponent_li_10_Template, 7, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".heroes[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #eee;\r\n  margin: 0.5em;\r\n  padding: 0.3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  color: #607d8b;\r\n  background-color: #ddd;\r\n  left: 0.1em;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #607d8b;\r\n}\r\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #405061;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: 0.8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuLmhlcm9lcyB7XHJcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDE1ZW07XHJcbn1cclxuLmhlcm9lcyBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbiAgcGFkZGluZzogMC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhlcm9lcyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBsZWZ0OiAwLjFlbTtcclxufVxyXG5cclxuLmhlcm9lcyBhIHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmhlcm9lcyBhOmhvdmVyIHtcclxuICBjb2xvcjogIzYwN2Q4YjtcclxufVxyXG5cclxuLmhlcm9lcyAuYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDUwNjE7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDE5NHB4O1xyXG4gIHRvcDogLTMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-heroes',
          templateUrl: './heroes.component.html',
          styleUrls: ['./heroes.component.css']
        }]
      }], function () {
        return [{
          type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var heroes = [{
            id: 11,
            name: 'Dr Nice'
          }, {
            id: 12,
            name: 'Narco'
          }, {
            id: 13,
            name: 'Bombasto'
          }, {
            id: 14,
            name: 'Celeritas'
          }, {
            id: 15,
            name: 'Magneta'
          }, {
            id: 16,
            name: 'RubberMan'
          }, {
            id: 17,
            name: 'Dynama'
          }, {
            id: 18,
            name: 'Dr IQ'
          }, {
            id: 19,
            name: 'Magma'
          }, {
            id: 20,
            name: 'Tornado'
          }];
          return {
            heroes: heroes
          };
        } // Overrides the genId method to ensure that a hero always has an id.
        // If the heroes array is empty,
        // the method below returns the initial number (11).
        // if the heroes array is not empty, the method below returns the highest
        // hero id + 1.

      }, {
        key: "genId",
        value: function genId(heroes) {
          return heroes.length > 0 ? Math.max.apply(Math, _toConsumableArray(heroes.map(function (hero) {
            return hero.id;
          }))) + 1 : 11;
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
      return new (t || InMemoryDataService)();
    };

    InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InMemoryDataService,
      factory: InMemoryDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/message.service.ts":
  /*!************************************!*\
    !*** ./src/app/message.service.ts ***!
    \************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messages = [];
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          this.messages.push(message);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messages = [];
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/messages/messages.component.ts":
  /*!************************************************!*\
    !*** ./src/app/messages/messages.component.ts ***!
    \************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/message.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MessagesComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
      }
    }

    function MessagesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.messageService.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
      }
    }

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(messageService) {
        _classCallCheck(this, MessagesComponent);

        this.messageService = messageService;
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["h2[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 2em;\r\n}\r\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin-bottom: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7RUFDRSxVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7OztFQUdFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5ib2R5LFxyXG5pbnB1dFt0ZXh0XSxcclxuYnV0dG9uIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2FhYTtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuYnV0dG9uLmNsZWFyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-messages',
          templateUrl: './messages.component.html',
          styleUrls: ['./messages.component.css']
        }]
      }], function () {
        return [{
          type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
        }];
      }, null);
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
    /*! C:\Users\gleider.costa\Documents\piloto\angular-tour-of-heroes\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map