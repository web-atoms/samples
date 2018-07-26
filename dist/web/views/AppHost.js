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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomTabbedPage", "web-atoms-core/dist/web/controls/AtomGridView", "../../view-models/AppHostViewModel", "./MenuList"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomTabbedPage_1 = require("web-atoms-core/dist/web/controls/AtomTabbedPage");
    var AtomGridView_1 = require("web-atoms-core/dist/web/controls/AtomGridView");
    var AppHostViewModel_1 = require("../../view-models/AppHostViewModel");
    var MenuList_1 = require("./MenuList");
    var AppHost = /** @class */ (function (_super) {
        __extends(AppHost, _super);
        function AppHost() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppHost.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.viewModel = this.resolve(AppHostViewModel_1.AppHostViewModel);
            this.setPrimitiveValue(this.element, "columns", "200, *");
            this.setPrimitiveValue(this.element, "rows", "*");
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e1);
            var e2 = new MenuList_1.default(this.app);
            this.append(e2);
            var e3 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e3);
            var e4 = new AtomTabbedPage_1.AtomTabbedPage(this.app);
            e4.setPrimitiveValue(e4.element, "row", "0");
            e4.setPrimitiveValue(e4.element, "column", "1");
            this.append(e4);
            var e5 = document.createTextNode("\r\n\r\n");
            this.element.appendChild(e5);
        };
        return AppHost;
    }(AtomGridView_1.AtomGridView));
    exports.default = AppHost;
});
//# sourceMappingURL=AppHost.js.map