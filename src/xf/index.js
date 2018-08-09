/// <reference path="../../node_modules/web-atoms-amd-loader/umd.js"/>

UMD.map("reflect-metadata","https://cdn.jsdelivr.net/npm/reflect-metadata@0.1.12/Reflect.js");
UMD.map("web-atoms-core","https://cdn.jsdelivr.net/npm/web-atoms-core@1.0.301/");
UMD.map("web-atoms-samples","/");
UMD.loadView(
    "web-atoms-samples/dist/xf/views/AppHost",
    true,
    "web-atoms-core/dist/xf/XFApp")
    .then(function() {})
    .catch(function(e) {
        console.error(e);
    });