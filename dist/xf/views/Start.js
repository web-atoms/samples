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
            _super.prototype.create.call(this);
            this.element = this.createControl("Xamarin.Forms.ContentPage");
            this.loadXaml("\t<ContentPage xmlns:x=\"http://schemas.microsoft.com/winfx/2009/xaml\" xmlns=\"http://xamarin.com/schemas/2014/forms\" Title=\"Test\">\n\t  \n\t  <Grid>\n\t    \n\t    <Grid.RowDefinitions>\n\t      \n\t      <RowDefinition/>\n\t      \n\t      <RowDefinition Height=\"Auto\"/>\n\t      \n\t      <RowDefinition/>\n\t      \n\t    </Grid.RowDefinitions>\n\t    \n\t    <Grid.ColumnDefinitions>\n\t      \n\t      <ColumnDefinition/>\n\t      \n\t      <ColumnDefinition Width=\"Auto\"/>\n\t      \n\t      <ColumnDefinition/>\n\t      \n\t    </Grid.ColumnDefinitions>\n\t    \n\t    <Label Grid.Row=\"1\" Grid.Column=\"1\" Text=\"Sample Start\"/>\n\t    \n\t  </Grid>\n\t  \n\t</ContentPage>");
        };
        return Root;
    }(AtomXFControl_1.AtomXFControl));
    exports.default = Root;
});
//# sourceMappingURL=Start.js.map