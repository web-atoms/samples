(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    UMD = UMD || { resolvePath: function (v) { return v; } };
    exports.ModuleFiles = {
        "views": {
            "AppHost": "web-atoms-samples/bin/{platform}/views/AppHost",
            "MenuList": "web-atoms-samples/bin/{platform}/views/MenuList",
            "samples": {
                "viewPager": {
                    "Page1": "web-atoms-samples/bin/{platform}/views/samples/view-pager/Page1",
                    "Page2": "web-atoms-samples/bin/{platform}/views/samples/view-pager/Page2",
                    "ViewPager": "web-atoms-samples/bin/{platform}/views/samples/view-pager/ViewPager"
                },
                "viewStack": {
                    "ViewStack": "web-atoms-samples/bin/{platform}/views/samples/view-stack/ViewStack"
                }
            }
        }
    };
});
//# sourceMappingURL=ModuleFiles.js.map