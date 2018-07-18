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
        define(["require", "exports", "web-atoms-core/bin/core/BindableProperty", "web-atoms-core/bin/view-model/AtomViewModel", "../../../../ModuleFiles"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BindableProperty_1 = require("web-atoms-core/bin/core/BindableProperty");
    var AtomViewModel_1 = require("web-atoms-core/bin/view-model/AtomViewModel");
    var ModuleFiles_1 = require("../../../../ModuleFiles");
    var ViewPagerViewModel = /** @class */ (function (_super) {
        __extends(ViewPagerViewModel, _super);
        function ViewPagerViewModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.pages = [
                { label: "Page 1", value: ModuleFiles_1.ModuleFiles.views.samples.viewPager.Page1 },
                { label: "Page 2", value: ModuleFiles_1.ModuleFiles.views.samples.viewPager.Page2 }
            ];
            _this.currentPage = _this.pages[0].value;
            return _this;
        }
        __decorate([
            BindableProperty_1.BindableProperty,
            __metadata("design:type", String)
        ], ViewPagerViewModel.prototype, "currentPage", void 0);
        return ViewPagerViewModel;
    }(AtomViewModel_1.AtomViewModel));
    exports.ViewPagerViewModel = ViewPagerViewModel;
});
//# sourceMappingURL=ViewPagerViewModel.js.map