# External Stylesheets in Code

To use external stylesheet such as Font Awesome library, you can create an empty style and attach it to control. In empty style, you can initialize an external style sheet in init method as shown below.

```typescript
export default class FontAwesomeStyle extends AtomStyle {

    public init(): void {
        this.registerExternalStyleSheet({
            href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
            crossOrigin: "anonymous",
            integrity: ".................................."
        });
    }

    public get root(): IStyleDeclaration {
        return {};
    }

}
```

### HTML
```html
<script>
    import FontAwesomeStyle from "./FontAwesomeStyle";
</script>
<div
    default-style="{ FontAwesomeStyle }"
    style-class="{ this.controlStyle.root }">
    
    <button>
        <i class="far fa-arrow-alt-circle-left"></i>
        Back</button>

    <button>
        <i class="far fa-arrow-alt-circle-right"></i>
        Back</button>

</div>
```

Once external style sheet is attached, you can use its classes anywhere in the page, if multiple registration are performed for same url, only first style sheet will be attached to the page, all subsequent calls will be ignored.

The reason we allow declaring external style sheet in individual style of component is, we want developer to fully experience runtime styles even at design time for even single component.

> This is just an example, by default FontAwesome is already included on the page when Web Atoms is initialized.