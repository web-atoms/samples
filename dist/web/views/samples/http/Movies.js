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
        define(["require", "exports", "web-atoms-core/dist/web/controls/AtomListBox", "web-atoms-core/dist/web/controls/AtomGridView", "web-atoms-core/dist/web/controls/AtomControl", "../../../../view-models/http/MovieViewModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtomListBox_1 = require("web-atoms-core/dist/web/controls/AtomListBox");
    var AtomGridView_1 = require("web-atoms-core/dist/web/controls/AtomGridView");
    var AtomControl_1 = require("web-atoms-core/dist/web/controls/AtomControl");
    var MovieViewModel_1 = require("../../../../view-models/http/MovieViewModel");
    var Movies = /** @class */ (function (_super) {
        __extends(Movies, _super);
        function Movies() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Movies.prototype.create = function () {
            _super.prototype.create.call(this);
            var __creator = this;
            this.setPrimitiveValue(this.element, "rows", "5, *, 5");
            this.setPrimitiveValue(this.element, "columns", "5, *, 5");
            this.viewModel = this.resolve(MovieViewModel_1.default);
            var e1 = document.createTextNode("\r\n\r\n    ");
            this.element.appendChild(e1);
            var e2 = new AtomListBox_1.AtomListBox(this.app, document.createElement("div"));
            var e3 = document.createTextNode("\r\n        ");
            e2.element.appendChild(e3);
            var e4 = document.createTextNode("\r\n    ");
            e2.element.appendChild(e4);
            e2.setPrimitiveValue(e2.element, "row", "1");
            e2.setPrimitiveValue(e2.element, "column", "1");
            e2.bind(e2.element, "items", [["viewModel", "movies", "value"]], false, function (v1) { return (v1); });
            e2.itemTemplate = Movies_itemTemplate_1_2Creator(this);
            this.append(e2);
            var e5 = document.createTextNode("\r\n\r\n");
            this.element.appendChild(e5);
        };
        return Movies;
    }(AtomGridView_1.AtomGridView));
    exports.default = Movies;
    function Movies_itemTemplate_1_2Creator(__creator) {
        return /** @class */ (function (_super) {
            __extends(Movies_itemTemplate_1_2, _super);
            function Movies_itemTemplate_1_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Movies_itemTemplate_1_2.prototype.create = function () {
                var _this = this;
                _super.prototype.create.call(this);
                ;
                this.element = document.createElement("div");
                var e1 = document.createTextNode("\r\n            ");
                this.element.appendChild(e1);
                var e2 = document.createElement("span");
                this.append(e2);
                this.runAfterInit(function () {
                    return _this.setLocalValue(e2, "text", (_this.data.name));
                });
                var e3 = document.createTextNode("\r\n        ");
                this.element.appendChild(e3);
            };
            return Movies_itemTemplate_1_2;
        }(AtomControl_1.AtomControl));
    }
});
//# sourceMappingURL=Movies.js.map