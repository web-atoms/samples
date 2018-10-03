(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/dist/core/AtomList"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomList_1 = require("web-atoms-core/dist/core/AtomList");
    var MenuItem = /** @class */ (function () {
        function MenuItem(app, menuService) {
            this.app = app;
            this.menuService = menuService;
            this.enabled = true;
            this.children = new AtomList_1.AtomList();
        }
        MenuItem.prototype.click = function () {
            return this.action(this);
        };
        MenuItem.prototype.add = function (label, action, icon) {
            var m = this.menuService.create(label, action, icon);
            this.children.add(m);
            return m;
        };
        MenuItem.prototype.addGroup = function (label, icon) {
            var m = this.menuService.createGroup(label, icon);
            this.children.add(m);
            return m;
        };
        MenuItem.prototype.addLink = function (label, pageSrc, pageParameters, icon) {
            var m = this.menuService.createLink(label, pageSrc, pageParameters, icon);
            this.children.add(m);
            return m;
        };
        MenuItem.prototype.addTabLink = function (label, pageSrc, pageParameters, icon) {
            return this.addLink(label, "tab://app/" + pageSrc, pageParameters, icon);
        };
        return MenuItem;
    }());
    exports.default = MenuItem;
});
//# sourceMappingURL=MenuItem.js.map