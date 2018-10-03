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
            "MenuList": "web-atoms-samples/dist/{platform}/views/MenuList",
            "samples": {
                "bindings": {
                    "Binding": "web-atoms-samples/dist/{platform}/views/samples/bindings/Binding"
                },
                "viewPager": {
                    "Page1": "web-atoms-samples/dist/{platform}/views/samples/view-pager/Page1",
                    "Page2": "web-atoms-samples/dist/{platform}/views/samples/view-pager/Page2",
                    "ViewPager": "web-atoms-samples/dist/{platform}/views/samples/view-pager/ViewPager"
                },
                "viewStack": {
                    "ViewStack": "web-atoms-samples/dist/{platform}/views/samples/view-stack/ViewStack"
                },
                "http": {
                    "Movies": "web-atoms-samples/dist/{platform}/views/samples/http/Movies"
                }
            },
            "AppHost": "web-atoms-samples/dist/{platform}/views/AppHost",
            "MenuPage": "web-atoms-samples/dist/{platform}/views/MenuPage",
            "Start": "web-atoms-samples/dist/{platform}/views/Start"
        }
    };
});
//# sourceMappingURL=ModuleFiles.js.map