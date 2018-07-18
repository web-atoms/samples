var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/bin/Atom", "web-atoms-core/bin/web/WebApp", "./views/AppHost"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Atom_1 = require("web-atoms-core/bin/Atom");
    var WebApp_1 = require("web-atoms-core/bin/web/WebApp");
    var AppHost_1 = require("./views/AppHost");
    var DemoApp = /** @class */ (function (_super) {
        __extends(DemoApp, _super);
        function DemoApp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DemoApp.prototype.main = function () {
            Atom_1.Atom.designMode = true;
            this.root = new AppHost_1.default(this);
        };
        return DemoApp;
    }(WebApp_1.default));
    exports.default = DemoApp;
});
//# sourceMappingURL=DemoApp.js.map