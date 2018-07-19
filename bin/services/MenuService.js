var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/bin/App", "web-atoms-core/bin/core/AtomList", "web-atoms-core/bin/core/BindableProperty", "web-atoms-core/bin/di/Inject", "web-atoms-core/bin/di/RegisterSingleton", "web-atoms-core/bin/services/NavigationService", "../models/MenuItem"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App_1 = require("web-atoms-core/bin/App");
    var AtomList_1 = require("web-atoms-core/bin/core/AtomList");
    var BindableProperty_1 = require("web-atoms-core/bin/core/BindableProperty");
    var Inject_1 = require("web-atoms-core/bin/di/Inject");
    var RegisterSingleton_1 = require("web-atoms-core/bin/di/RegisterSingleton");
    var NavigationService_1 = require("web-atoms-core/bin/services/NavigationService");
    var MenuItem_1 = require("../models/MenuItem");
    var MenuService = /** @class */ (function () {
        function MenuService(app) {
            this.app = app;
            this.menus = new AtomList_1.AtomList();
        }
        MenuService.prototype.add = function (label, action, icon) {
            var m = this.create(label, action, icon);
            this.menus.add(m);
            return m;
        };
        MenuService.prototype.addGroup = function (label, icon) {
            var m = this.createGroup(label, icon);
            this.menus.add(m);
            return m;
        };
        MenuService.prototype.addLink = function (label, pageSrc, pageParameters, icon) {
            var m = this.createLink(label, pageSrc, pageParameters, icon);
            this.menus.add(m);
            return m;
        };
        MenuService.prototype.createLink = function (label, pageSrc, pageParameters, icon) {
            var nav = this.app.resolve(NavigationService_1.NavigationService);
            var p = pageParameters || {};
            p.title = p.title || label;
            var m = this.create(label, function () { return nav.openPage(pageSrc, p); }, icon);
            return m;
        };
        MenuService.prototype.createGroup = function (label, icon) {
            return this.create(label, function (m) { return m.expand = !m.expand; }, icon);
        };
        MenuService.prototype.create = function (label, action, icon) {
            var menu = new MenuItem_1.default(this.app, this);
            menu.label = label;
            menu.action = action;
            if (menu.icon) {
                menu.icon = icon;
            }
            return menu;
        };
        __decorate([
            BindableProperty_1.BindableProperty,
            __metadata("design:type", AtomList_1.AtomList)
        ], MenuService.prototype, "menus", void 0);
        MenuService = __decorate([
            RegisterSingleton_1.RegisterSingleton,
            __param(0, Inject_1.Inject),
            __metadata("design:paramtypes", [App_1.App])
        ], MenuService);
        return MenuService;
    }());
    exports.default = MenuService;
});
//# sourceMappingURL=MenuService.js.map