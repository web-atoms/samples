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
        define(["require", "exports", "web-atoms-core/dist/xf/controls/AtomXFControl", "../../view-models/AppHostViewModel", "./MenuPage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable
    var AtomXFControl_1 = require("web-atoms-core/dist/xf/controls/AtomXFControl");
    var AppHostViewModel_1 = require("../../view-models/AppHostViewModel");
    var MenuPage_1 = require("./MenuPage");
    var Root = /** @class */ (function (_super) {
        __extends(Root, _super);
        function Root() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Root.prototype.create = function () {
            var _this = this;
            _super.prototype.create.call(this);
            this.element = this.createControl("Xamarin.Forms.MasterDetailPage");
            this.setImport(this.element, "MenuPage", function () { return new MenuPage_1.default(_this.app); });
            this.loadXaml("\t<MasterDetailPage xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns=\"http://xamarin.com/schemas/2014/forms\" xmlns:atom=\"clr-namespace:WebAtoms;assembly=WebAtoms\" x:Name=\"e1\">\n\t  \n\t  <MasterDetailPage.Master>\n\t    \n\t    <atom:JSObjectCreator Type=\"MenuPage\"/>\n\t    \n\t  </MasterDetailPage.Master>\n\t  \n\t  <MasterDetailPage.Detail>\n\t    \n\t    <ContentPage Title=\"Test Detail\">\n\t      \n\t      <Label Text=\"Loading...\"/>\n\t      \n\t    </ContentPage>\n\t    \n\t  </MasterDetailPage.Detail>\n\t  \n\t</MasterDetailPage>");
            var e1 = this.find("e1");
            this.setLocalValue(e1, "viewModel", this.resolve(AppHostViewModel_1.AppHostViewModel));
        };
        return Root;
    }(AtomXFControl_1.AtomXFControl));
    exports.default = Root;
});
//# sourceMappingURL=AppHost.js.map