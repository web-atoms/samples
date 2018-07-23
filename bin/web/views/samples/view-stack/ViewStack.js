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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web-atoms-core/bin/core/BindableProperty", "web-atoms-core/bin/web/controls/AtomViewStack", "web-atoms-core/bin/web/controls/AtomGridView"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var BindableProperty_1 = require("web-atoms-core/bin/core/BindableProperty");
    var AtomViewStack_1 = require("web-atoms-core/bin/web/controls/AtomViewStack");
    var AtomGridView_1 = require("web-atoms-core/bin/web/controls/AtomGridView");
    var ViewStack = /** @class */ (function (_super) {
        __extends(ViewStack, _super);
        function ViewStack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ViewStack.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            this.index = 0;
            this.setPrimitiveValue(this.element, "columns", "*");
            this.setPrimitiveValue(this.element, "rows", "50, *");
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createElement("div");
            this.append(e2);
            var e3 = document.createTextNode("\r\n        ");
            e2.appendChild(e3);
            var e4 = document.createElement("button");
            e2.appendChild(e4);
            this.bind(e4, "enabled", [["this", "index"]], false, function (v1) { return (v1); }, __creator);
            this.setPrimitiveValue(e4, "eventClick", function () { return _this.index = Math.max(0, _this.index - 1); });
            var e5 = document.createTextNode("Previous");
            e4.appendChild(e5);
            var e6 = document.createTextNode("\r\n        ");
            e2.appendChild(e6);
            var e7 = document.createElement("button");
            e2.appendChild(e7);
            this.setPrimitiveValue(e7, "eventClick", function () { return _this.index = Math.min(1, _this.index + 1); });
            var e8 = document.createTextNode("Next");
            e7.appendChild(e8);
            var e9 = document.createTextNode("\r\n    ");
            e2.appendChild(e9);
            var e10 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e10);
            var e11 = new AtomViewStack_1.AtomViewStack(this.app);
            var e12 = document.createTextNode("\r\n        ");
            e11.element.appendChild(e12);
            var e13 = document.createElement("div");
            e11.append(e13);
            var e14 = document.createTextNode("View 1");
            e13.appendChild(e14);
            var e15 = document.createTextNode("\r\n        ");
            e11.element.appendChild(e15);
            var e16 = document.createElement("div");
            e11.append(e16);
            var e17 = document.createTextNode("View 2");
            e16.appendChild(e17);
            var e18 = document.createTextNode("        \r\n    ");
            e11.element.appendChild(e18);
            e11.setPrimitiveValue(e11.element, "row", "1");
            e11.bind(e11.element, "selectedIndex", [["this", "index"]], false, function (v1) { return (v1); }, __creator);
            this.append(e11);
            var e19 = document.createTextNode("\r\n");
            this.element.appendChild(e19);
        };
        __decorate([
            BindableProperty_1.BindableProperty,
            __metadata("design:type", Object)
        ], ViewStack.prototype, "index", void 0);
        return ViewStack;
    }(AtomGridView_1.AtomGridView));
    exports.default = ViewStack;
});
//# sourceMappingURL=ViewStack.js.map