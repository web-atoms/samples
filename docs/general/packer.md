# Web Atoms Packer

Web Atoms comes with its own `Packer` module to combine all modules in one single JavaScript file. You cannot use `web-pack` because it does not support web atoms' dynamic dependency injection.

## Requirements

1. All modules must be bundled so all dependencies can be resolved via node_modules folder
2. List all generated module path in `waconfig.json` file as shown below
3. After compilation, `@web-atoms/pack/index.js` must be executed in node with root folder of developed package
5. All Web Atoms Component needed to be packed must have comment `// @web-atoms-pack: true` followed by an empty line

### waconfig.json

```json
{
    "srcFolder":"src",
    "mode": "core",
    "pack": []
}
```

Please note, you must add generated JavaScript file path in pack config.

## Load packed Module

```html
<script>
    (function (url, success, error) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        var s = script;
        script.onload = s.onreadystatechange = function () {
            if ((s.readyState && s.readyState !== "complete" && s.readyState !== "loaded")) {
                if (error) error(); else console.error("error loading " + url);
                return;
            }
            script.onload = s.onreadystatechange = null;
            success();
        };
        document.body.appendChild(script);
    }) (
        /** Absolute or Page relative url to packed JavaScript **/
        "https://cdn.jsdelivr.net/npm/@web-atoms/samples@1.0.129/dist/web/Index.pack.min.js",
        function () {
            /** Setup name of Root Package with a URL to folder that contains node_modules **/
            UMD.setupRoot("@web-atoms/samples", "https://cdn.jsdelivr.net/npm/@web-atoms/samples@1.0.129");
            UMD.lang = "en-US";
            /** Load absolute module path, it must start with package name **/
            UMD.loadView("@web-atoms/samples/dist/web/Index", /* designMode */ 0);
        });
</script>
```

This script is completely asynchronous, you can display some animation while its loading entire JavaScript and after it has resolved all modules, it will load specified view.
