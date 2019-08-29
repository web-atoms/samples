# Binding

Web Atoms uses property binding syntax to bind view properties to data or view model properties.

## One Time Binding

Binding expression within curly braces are evaluated at time of initialization of control. You can consider them as simple eval expression which will be instantly evaluated at time of building of page. These expressions are compiled so they are evaluated at runtime using `eval`. Web Atoms do not use `eval` anywhere.

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

### Expression

One time binding can be any valid TypeScript expression. You can call any method. Make sure you import corresponding module in start of the file.

HTML
```html
    <span text="{ `${ $viewModel.model.firstName } ${ $viewModel.model.lastName }` }"></span>
```

XAML
```xml
    <Label Text="${ `${ $viewModel.model.firstName } ${ $viewModel.model.lastName }` }"/>
```

Ideally you must avoid custom expressions and must always create custom get properties on your view model and bind it.

## One Way Binding

Building data aware application requires updating UI automatically when data changes. One way binding refreshes element automatically when data is modified by any one. To make it simpler, you have to write your binding expressions in square brackets []

```typescript
    export default class TimerViewModel extends AtomViewModel {

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

> Internally, whenever any thing that is inside property path gets updated, expression is evaluated and property is set. If anything is evaluated as `undefined`, update is skipped. If anything is `null`, entire expression is evaluated as `null` and no error is reported.


### Expression

One way binding can be any valid TypeScript expression. You can call any method. Make sure you import corresponding module in start of the file.

HTML
```html
    <span text="[ `${ $viewModel.model.firstName } ${ $viewModel.model.lastName }` ]"></span>
```

XAML
```xml
    <Label Text="[ `${ $viewModel.model.firstName } ${ $viewModel.model.lastName }` ]"/>
```

Ideally you must avoid custom expressions and must always create custom get properties on your view model and bind it.

```typescript
    @Watch
    public get fullName(): string {
        return `${this.model.firstName} ${this.model.lastName}`;
    }
```

You must bind UI to `fullName`, instead of writing custom expressions. Benefit is, you can unit test it, you do not have to repeat expressions for different platform and you can perform formatting inside view model that is consistent for different platforms.

## Two Way Binding

Two way binding is created by prefixing $ before square brackets. This will update value inside model whenever it is changed in UI by user.

HTML
```html
    
    <input
        type="text"
        placeholder="Username"
        value="$[viewModel.username]" />

    <input 
        type="password"
        placeholder="Password"
        value="$[viewModel.username]" />

    <input type="checkbox" checked="$[viewModel.remember]" />
```

This will update username inside model whenever user modifies text inside edit. You can also bind `checked` property of checkbox. 

For input element in HTML, binding is only updated on `change` event. If you want to update binding every time a key is pressed. You can use carat `^` instead of `$`.

HTML
```html
    <input 
        type="search"
        value="^[viewModel.search]"/>
```

In above example, search property in `viewModel` is set every time a key is pressed.

You can bind properties of AtomControl derived control.
HTML
```html
    <AtomComboBox
        selectedIndex="$[viewModel.selectedIndex]"
        />
```

XAML
```xml
    <Entry
        Text="$[viewModel.username]"/>
```

### HTML Binding Extensions

Following additional style and event binding extensions are available for binding. 

## Style

Style extension can be used in one time/one way binding. It cannot be used for two way binding.

### Literal binding
Literal binding helps in breaking down long style expressions into individual attributes;
HTML
```html
    <div
        style-display="block"
        style-position="absolute"
    />

    <!-- It will be transformed in runtime as -->
    <div style="display: block; position: absolute" />
```

### Expression binding
Expression binding can be either one time or one way. It helps in separating style attributes.

HTML
```html
    <div
        style-position="absolute"
        style-width="{ `${ $viewModel.width }px` }"
        style-height="[ $viewModel.vertical ? '500px' : '200px' ]"
        />
```
Here `position` is set as `absolute`, `width` is calculated by whatever was set on view model's `width` property. And `height` will update whenever `vertical` is modified on view model.

## Event
Event binding extension allows you to subscribe events. This extension also safely unsubscribes automatically when component is disposed.

HTML
```html
    <button event-click="{ (e) => $viewModel.signup(e) }"></button>
```

## Event TapGesture

Event TapGesture is special event associated with Xaml UI View to get notified of tap gesture.

XAML
```xml
    <Label eventTapGesture="{ () => $viewModel.signup() }" />
```

# How Web Atoms manages bindings?

We wanted to make binding extremely easy without having to code too much, so we created a Binder that creates additional fields in an object and manages refresh callbacks. The reason we did not use `Object.watch` is, it does not support refreshing a readonly property. Binder allows refreshing property of any object, so anyone is watching for any change, their callback is invoked by Binding. Binding does not maintain central repository, this makes updates very fast, with little overhead in memory as every refresh handle exists inside the target object, it is also easy to debug and visualize binding.

Also, you do not need to explicitly create getter and setter to support binding, whenever Binder tries to watch an object, if object has getter and setter, it assumes that creator will refresh property. If object is a plain object without any prototype, Binder will convert members to getter/setter and inject code to refresh property inside setter.

This is the reason, you will not see any `watch` being explicitly called to watch an object, in fact, you will never need to worry about how to refresh the UI. If UI has one way binding, it will refresh automatically when it is updated. Attributes `@Watch` and `@Validate` works magically.

You never have to think, what to observe, when to observe and where to observe.