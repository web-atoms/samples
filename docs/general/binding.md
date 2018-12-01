# Binding

Web Atoms uses property binding syntax to bind view properties to data or view model properties.

## One Time Binding

Binding expression within curly braces are evaluated at time of initialization of control. You can consider them as simple eval expression which will be instantly evaluated at time of building of page.

All expressions in following sample are one time binding expressions.

HTML
```html
    <span text="{ this.viewModel.model.label }"></span>

    <span text="{ $viewModel.model.label }"></span>
```

XAML
```xml
    <Label Text="${ this.viewModel.model.label }"/>

    <Label Text="${ $viewModel.model.label }"/>
```

There are two ways you can write one time bindings. First is a simple TypeScript expression that is evaluated at time of initialization and property is set. However, if model is `null` or `undefined`, it will lead to errors.

So when you use `$viewModel.model.label`, entire expression is broken down in conditional if and in case of `null` or `undefined`, evaluation is skipped.

> For one time binding in Xaml, you need to put $ before curly braces as single curly brace is reserved for Xaml binding.

## One Way Binding

Building data aware application requires updating UI automatically when data changes. One way binding refreshes element automatically when data is modified by any one. To make it simpler, you have to write your binding expressions in square brackets []

```typescript
    public class TimerViewModel extends AtomViewModel {

        public time: Date;

        public async init(): Promise<void> {
            const timer = setInterval(() => {
                this.time = new Date();
            }, 1000);

            this.registerDisposable({
                dispose() {
                    clearInterval(timer);
                }
            });
        }

    }
```

HTML
```html
    <span text="[$viewModel.time]"></span>
```
XAML
```xml
    <Label Text="[$viewModel.time]"/>
```

> Internally, whenever any UI view is bound by one way or two way