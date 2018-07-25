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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomListBox", "web-atoms-core/dist/web/controls/AtomViewPager", "web-atoms-core/dist/web/controls/AtomGridView", "web-atoms-core/dist/web/controls/AtomControl", "./ViewPagerViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomListBox_1 = require("web-atoms-core/dist/web/controls/AtomListBox");
    var AtomViewPager_1 = require("web-atoms-core/dist/web/controls/AtomViewPager");
    var AtomGridView_1 = require("web-atoms-core/dist/web/controls/AtomGridView");
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var ViewPagerViewModel_1 = require("./ViewPagerViewModel");
    var ViewPager = /** @class */ (function (_super) {
        __extends(ViewPager, _super);
        function ViewPager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ViewPager.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.setPrimitiveValue(this.element, "columns", "*");
            this.setPrimitiveValue(this.element, "rows", "50, *");
            this.setPrimitiveValue(this.element, "viewModel", this.resolve(ViewPagerViewModel_1.ViewPagerViewModel));
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e1);
            var e2 = new AtomListBox_1.AtomListBox(this.app, document.createElement("div"));
            var e3 = document.createTextNode("\r\n        ");
            e2.element.appendChild(e3);
            var e4 = document.createTextNode("\r\n    ");
            e2.element.appendChild(e4);
            e2.bind(e2.element, "items", [["viewModel", "pages"]], false, function (v1) { return (v1); });
            e2.bind(e2.element, "value", [["viewModel", "currentPage"]], true);
            e2.itemTemplate = ViewPager_itemTemplate_1Creator(this);
            this.append(e2);
            var e5 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e5);
            var e6 = new AtomViewPager_1.AtomViewPager(this.app);
            e6.setPrimitiveValue(e6.element, "row", "1");
            e6.bind(e6.element, "items", [["viewModel", "pages"]], false, function (v1) { return (v1); });
            e6.bind(e6.element, "value", [["viewModel", "currentPage"]], false, function (v1) { return (v1); });
            this.append(e6);
            var e7 = document.createTextNode("\r\n");
            this.element.appendChild(e7);
        };
        return ViewPager;
    }(AtomGridView_1.AtomGridView));
    exports.default = ViewPager;
    function ViewPager_itemTemplate_1Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(ViewPager_itemTemplate_1, _super);
            function ViewPager_itemTemplate_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ViewPager_itemTemplate_1.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                ;
                this.element = document.createElement("span");
                this.runAfterInit(function () {
                    return _this.setLocalValue(_this.element, "text", (_this.data.label));
                });
            };
            return ViewPager_itemTemplate_1;
        }(AtomControl_1.AtomControl));
    }
});
//# sourceMappingURL=ViewPager.js.map