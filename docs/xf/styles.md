# Stylesheets in Code

To style the components, we can use `AtomStyle` class. Since these are pure TypeScript classes, you can use any TypeScript expression to compose your style. `AtomStyle` exposes `name` property which contains uniquely generated class name to avoid conflicts.

```typescript
class ListStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            color: Colors.gray,
            backgroundColor: Colors.white,
            subclasses: {
                " .name": {
                    color: Colors.blue,
                },
                " .email": {
                    color: Colors.green,
                }
            }
        };
    }
}
```

### ItemList.tsx

```typescript
export default class ItemList extends AtomXFContentPage {

    public create() {
        // we only set JavaScript class here
        this.defaultControlStyle = ListStyle;

        this.render(<XF.ContentPage 
            // set the name of generated style
            class={this.controlStyle.name}>
            <XF.StackLayout>
                <XF.Label class="name"
                    text={Bind.oneWay(() => this.viewModel.name)}/>
                <XF.Label class="email"
                    text={Bind.oneWay(() => this.viewModel.email)}/>
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
```

## Override Style

When we want to reuse a component and we want to style it differently we can override an existing style.

> Please note, you can only override style when you reuse them, but you cannot change classes, you can only override style class.

### ItemListEditor.tsx
```typescript

   // setting control style here will
   // override existing default style
   <ItemList controlStyle={EditorListStyle} />

```

```typescript
class EditorListStyle extends ListStyle {

    public get baseRoot(): IStyleDeclaration {
        return this.getBaseProperty(EditorListStyle , "root");
    }

    public get root(): IStyleDeclaration {
        return {
            ... this.baseRoot,
            color: Colors.cyan,

            // if you do not provide subclasses here,
            // all subclasses will be inherited automatically
            subclasses: {
                // if you want to override subclasses as well
                ... this.baseRoot.subclasses,
                " .name" : {
                    paddingLeft: "20px"
                }
            }
        }
    }
}
```

### Mobile Styles

You can detect presence of mobile and compute style accordingly.

```typescript
class ListStyle extends AtomStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get root(): IStyleDeclaration {
        return {
            width: this.screen.screenType === "mobile" ? "250px" : "900px"
        };
    }
}
```

## Composite classes

When you want to apply multiple classes together with some conditions, you can apply them in object notation with square brackets with reference to className of style. This is required to provide correct class name as class names are dynamically applied in runtime to avoid conflicts.

### Composite Style one time binding

```typescript

    function join(kvp) {
        const classes = [];
        for(const key in kvp) {
            if (kvp.hasOwnProperty(key)){
                const v = kvp[key];
                if (v) { classes.push(key); }
            }
        }
        // Xamarin Forms needs comma separated classes
        return classes.join(",");
    }

    <XF.Label
        class={Bind.oneWay(() => join({
            name: this.viewModel.model.name,
            email: this.viewModel.model.email
        }))}
        text="..."/>

```