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
        define(["require", "exports", "web-atoms-core/dist/xf/controls/AtomXFControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var AtomXFControl_1 = require("web-atoms-core/dist/xf/controls/AtomXFControl");
    var Root = /** @class */ (function (_super) {
        __extends(Root, _super);
        function Root() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Root.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            this.element = this.createControl("Xamarin.Forms.ContentPage");
            this.loadXaml("\t<ContentPage xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns=\"http://xamarin.com/schemas/2014/forms\" Title=\"Test\">\n\t  \n\t  <ListView x:Name=\"e1\">\n\t    \n\t    \n\t  </ListView>\n\t  \n\t</ContentPage>");
            var e1 = this.find("e1");
            this.setTemplate(e1, "ItemTemplate", function () { return new (Root_e1_Creator(_this))(_this.app); });
            this.bind(e1, "ItemsSource", [["viewModel", "menuService", "menus"]], false, function (v1) { return (v1); });
        };
        return Root;
    }(AtomXFControl_1.AtomXFControl));
    exports.default = Root;
    // template
    function Root_e1_Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(Root_e1, _super);
            function Root_e1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Root_e1.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                this.element = this.createControl("Xamarin.Forms.Label");
                this.loadXaml("\t<Label xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns=\"http://xamarin.com/schemas/2014/forms\" x:Name=\"e1\"/>");
                var e1 = this.find("e1");
                this.runAfterInit(function () {
                    return _this.setLocalValue(e1, "Text", (_this.data.label));
                });
                this.setPrimitiveValue(e1, "eventTapGesture", function () { return _this.data.click(); });
            };
            return Root_e1;
        }(AtomXFControl_1.AtomXFControl));
    }
});
//# sourceMappingURL=MenuPage.js.map