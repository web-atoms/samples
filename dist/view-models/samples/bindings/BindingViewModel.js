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
        define(["require", "exports", "web-atoms-core/dist/view-model/AtomViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomViewModel_1 = require("web-atoms-core/dist/view-model/AtomViewModel");
    var BindingViewModel = /** @class */ (function (_super) {
        __extends(BindingViewModel, _super);
        function BindingViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.title = "Binding";
            return _this;
        }
        return BindingViewModel;
    }(AtomViewModel_1.AtomViewModel));
    exports.default = BindingViewModel;
});
//# sourceMappingURL=BindingViewModel.js.map