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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var Page1 = /** @class */ (function (_super) {
        __extends(Page1, _super);
        function Page1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Page1.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.element = document.createElement("div");
            var e1 = document.createTextNode("\r\n    Page 1\r\n");
            this.element.appendChild(e1);
        };
        return Page1;
    }(AtomControl_1.AtomControl));
    exports.default = Page1;
});
//# sourceMappingURL=Page1.js.map