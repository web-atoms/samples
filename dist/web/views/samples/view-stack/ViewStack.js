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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomToggleButtonBar", "web-atoms-core/dist/web/controls/AtomViewStack", "web-atoms-core/dist/web/controls/AtomGridView", "./ViewStackViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomToggleButtonBar_1 = require("web-atoms-core/dist/web/controls/AtomToggleButtonBar");
    var AtomViewStack_1 = require("web-atoms-core/dist/web/controls/AtomViewStack");
    var AtomGridView_1 = require("web-atoms-core/dist/web/controls/AtomGridView");
    var ViewStackViewModel_1 = require("./ViewStackViewModel");
    var ViewStack = /** @class */ (function (_super) {
        __extends(ViewStack, _super);
        function ViewStack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ViewStack.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            this.viewModel = this.resolve(ViewStackViewModel_1.ViewStackViewModel);
            this.setPrimitiveValue(this.element, "columns", "*");
            this.setPrimitiveValue(this.element, "rows", "50, *");
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createElement("div");
            this.append(e2);
            var e3 = document.createTextNode("\r\n        ");
            e2.appendChild(e3);
            var e4 = new AtomToggleButtonBar_1.AtomToggleButtonBar(this.app);
            e4.runAfterInit(function () {
                return e4.setLocalValue(e4.element, "items", (_this.viewModel.items));
            });
            e4.bind(e4.element, "value", [["viewModel", "index"]], true);
            e2.appendChild(e4.element);
            var e5 = document.createTextNode("\r\n    ");
            e2.appendChild(e5);
            var e6 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e6);
            var e7 = new AtomViewStack_1.AtomViewStack(this.app);
            var e8 = document.createTextNode("\r\n        ");
            e7.element.appendChild(e8);
            var e9 = document.createElement("div");
            e7.append(e9);
            var e10 = document.createTextNode("View 1");
            e9.appendChild(e10);
            var e11 = document.createTextNode("\r\n        ");
            e7.element.appendChild(e11);
            var e12 = document.createElement("div");
            e7.append(e12);
            var e13 = document.createTextNode("View 2");
            e12.appendChild(e13);
            var e14 = document.createTextNode("  \r\n        ");
            e7.element.appendChild(e14);
            var e15 = document.createElement("div");
            e7.append(e15);
            var e16 = document.createTextNode("View 3");
            e15.appendChild(e16);
            var e17 = document.createTextNode("        \r\n    ");
            e7.element.appendChild(e17);
            e7.setPrimitiveValue(e7.element, "row", "1");
            e7.bind(e7.element, "selectedIndex", [["viewModel", "index"]], false, function (v1) { return (v1); });
            this.append(e7);
            var e18 = document.createTextNode("\r\n");
            this.element.appendChild(e18);
        };
        return ViewStack;
    }(AtomGridView_1.AtomGridView));
    exports.default = ViewStack;
});
//# sourceMappingURL=ViewStack.js.map