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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomListBox", "web-atoms-core/dist/web/controls/AtomItemsControl", "web-atoms-core/dist/web/controls/AtomControl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomListBox_1 = require("web-atoms-core/dist/web/controls/AtomListBox");
    var AtomItemsControl_1 = require("web-atoms-core/dist/web/controls/AtomItemsControl");
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var MenuList = /** @class */ (function (_super) {
        __extends(MenuList, _super);
        function MenuList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuList.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.element = document.createElement("div");
            this.bind(this.element, "items", [["viewModel", "menuService", "menus"]], false, function (v1) { return (v1); });
            this.itemTemplate = MenuList_itemTemplate_1Creator(this);
            var e1 = document.createTextNode("\r\n    ");
            this.element.appendChild(e1);
            var e2 = document.createTextNode("\r\n");
            this.element.appendChild(e2);
        };
        return MenuList;
    }(AtomListBox_1.AtomListBox));
    exports.default = MenuList;
    function MenuList_itemTemplate_1Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(MenuList_itemTemplate_1, _super);
            function MenuList_itemTemplate_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MenuList_itemTemplate_1.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                ;
                this.element = document.createElement("div");
                this.setPrimitiveValue(this.element, "eventClick", function () { return _this.data.click(); });
                var e1 = document.createTextNode("\r\n        ");
                this.element.appendChild(e1);
                var e2 = document.createElement("span");
                this.append(e2);
                this.bind(e2, "text", [["data", "label"]], false, function (v1) { return (v1); });
                var e3 = document.createTextNode("\r\n        ");
                this.element.appendChild(e3);
                var e4 = new AtomItemsControl_1.AtomItemsControl(this.app);
                e4.bind(e4.element, "styleDisplay", [["data", "expand"]], false, function (v1) { return (v1) ? '' : 'none'; });
                e4.bind(e4.element, "items", [["data", "expand"], ["data", "children"]], false, function (v1, v2) { return (v1) ? (v2) : []; });
                e4.setPrimitiveValue(e4.element, "itemTemplate", __creator.itemTemplate);
                this.append(e4);
                var e5 = document.createTextNode("\r\n    ");
                this.element.appendChild(e5);
            };
            return MenuList_itemTemplate_1;
        }(AtomControl_1.AtomControl));
    }
});
//# sourceMappingURL=MenuList.js.map