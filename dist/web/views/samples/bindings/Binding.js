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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomControl", "../../../../view-models/samples/bindings/BindingViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var BindingViewModel_1 = require("../../../../view-models/samples/bindings/BindingViewModel");
    var Binding = /** @class */ (function (_super) {
        __extends(Binding, _super);
        function Binding() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Binding.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            var __creator = this;
            this.element = document.createElement("div");
            this.viewModel = this.resolve(BindingViewModel_1.default);
            var e1 = document.createTextNode("\r\n    \r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createElement("div");
            this.append(e2);
            var e3 = document.createTextNode("One Time Binding");
            e2.appendChild(e3);
            var e4 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e4);
            var e5 = document.createElement("div");
            this.append(e5);
            this.runAfterInit(function () {
                return _this.setLocalValue(e5, "text", (_this.viewModel.title));
            });
            var e6 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e6);
            var e7 = document.createElement("div");
            this.append(e7);
            var e8 = document.createTextNode("One Way Binding - if you modify anything in following box, \r\n        it will not update anywhere");
            e7.appendChild(e8);
            var e9 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e9);
            var e10 = document.createElement("input");
            this.append(e10);
            this.bind(e10, "value", [["viewModel", "title"]], false, function (v1) { return (v1); });
            var e11 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e11);
            var e12 = document.createElement("div");
            this.append(e12);
            var e13 = document.createTextNode("Two Way Binding - if you modify anything here, it will \r\n        also update on one way binding but not one time binding");
            e12.appendChild(e13);
            var e14 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e14);
            var e15 = document.createElement("input");
            this.append(e15);
            this.bind(e15, "value", [["viewModel", "title"]], true);
            var e16 = document.createTextNode("\r\n\r\n");
            this.element.appendChild(e16);
        };
        return Binding;
    }(AtomControl_1.AtomControl));
    exports.default = Binding;
});
//# sourceMappingURL=Binding.js.map