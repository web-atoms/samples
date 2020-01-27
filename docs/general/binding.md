# Binding

Web Atoms uses property binding syntax to bind view properties to data or view model properties.

## Simple Expression

HTML
```typescript
    <span text={this.viewModel.model.label}/>
```

Xamarin.Forms
```typescript
    <XF.Label
        text={this.viewModel.model.label}
        />
```

## One Time Binding

Binding expression within curly braces are evaluated at time of initialization of control. One Time binding differs from simple expression in a way that one time binding has little delay and is executed after control's constructor is successfully completed.

All expressions in following sample are one time binding expressions.

HTML
```typescript
    <span text={Bind.oneTime(() => this.viewModel.model.label)}/>
```

Xamarin.Forms
```typescript
    <XF.Label
        text={Bind.oneTime(() => this.viewModel.model.label)}/>
```

There are two ways you can write one time bindings. First is a simple TypeScript expression that is evaluated at time of initialization and property is set. However, if model is `null` or `undefined`, it will lead to errors.

So when you use `$viewModel.model.label`, entire expression is broken down in conditional if and in case of `null` or `undefined`, evaluation is skipped.

### Expression

One time binding can be any valid TypeScript expression. You can call any method. Make sure you import corresponding module in start of the file.

HTML
```typescript
    <span
        text={Bind.oneTime(() =>
            `${this.viewModel.model.firstName} `${this.viewModel.model.lastName}`)}></span>
```

Xamarin.Forms
```typescript
    <XF.Label
        text={Bind.oneTime(() =>
            `${this.viewModel.model.firstName} `${this.viewModel.model.lastName}`)}></span>
```
Ideally you must avoid custom expressions and must always create custom get properties on your view model and bind it.

### Items Control

For control that has multiple items, in item template, `Bind.oneTime` method will pass a parameter to nearest `AtomControl` parent whose' data property will be available as individual item of array.

HTML
```typescript
    <AtomItemsControl
        items={Bind.oneTime(() => this.viewModel.items )}>
        <AtomItemsControl.itemTemplate>
            <div>
                <span text={Bind.oneTime((x) => x.data.label)}/>
            </div>
        </AtomItemsControl.itemTemplate>
    </AtomItemsControl>
```

> For Xamarin.Forms, inside ItemTemplate, it is recommended to use only `OneWay` binding, because data is not available when the component is created.

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
```typescript
    <span
        text={Bind.oneWay(() => this.viewModel.time)}/>
```
Xamarin.Forms
```xml
    <XF.Label
        text={Bind.oneWay(() => this.viewModel.time)}/>
```

> Internally, whenever any thing that is inside property path gets updated, expression is evaluated and property is set. If anything is evaluated as `undefined`, update is skipped. If anything is `null`, entire expression is evaluated as `null` and no error is reported.


### Expression

One way binding can be any valid TypeScript expression. You can call any method. Make sure you import corresponding module in start of the file.

```typescript
    <span
        text={Bind.oneWay(() =>
            `${this.viewModel.model.firstName} `${this.viewModel.model.lastName}`)}></span>
```

Xamarin.Forms
```typescript
    <XF.Label
        text={Bind.oneWay(() =>
            `${this.viewModel.model.firstName} `${this.viewModel.model.lastName}`)}></span>
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
```typescript
export default class Signup extends AtomControl {

    /** This enables intellisense, do not initialize this*/
    public viewModel: SignupViewModel;

    public create() {
        this.viewModel = this.resolve(SignupViewModel);

        this.render(<div>
        <AtomForm>
            <AtomField
                label="Username"
                error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                <input
                    value={Bind.twoWays(() => this.viewModel.model.firstName)}/>
            </AtomField>
            <AtomField
                label="Password"
                error={Bind.oneWay(() => this.viewModel.errorPassword)}>
                <input
                    type="password"
                    value={Bind.twoWays(() => this.viewModel.model.password)}/>
            </AtomField>
            <AtomField>
                <button
                    eventClick={Bind.event(() => this.viewModel.signup())} 
                    text="Signup"/>
            </AtomField>
        </AtomForm>
        </div>);
    }
}
```

Xamarin.Forms
```typescript
export default class Signup extends AtomXFContentPage {

    /** This enables intellisense, do not initialize this*/
    public viewModel: SignupViewModel;

    public create() {
        this.viewModel = this.resolve(SignupViewModel);

        this.render(<XF.ContentPage>
        <AtomForm>
            <AtomField
                label="Username"
                error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                <Entry
                    text={Bind.twoWays(() => this.viewModel.model.firstName)}/>
            </AtomField>
            <AtomField
                label="Password"
                error={Bind.oneWay(() => this.viewModel.errorPassword)}>
                <Entry
                    isPassword={true}
                    text={Bind.twoWays(() => this.viewModel.model.password)}/>
            </AtomField>
            <AtomField>
                <button
                    eventClick={Bind.event(() => this.viewModel.signup())} 
                    text="Signup"/>
            </AtomField>
        </AtomForm>
        </XF.ContentPage>);
    }

}
```

This will update username inside model whenever user modifies text inside edit. You can also bind `checked` property of checkbox. 

For input element in HTML, binding is only updated on `change` event. If you want to update binding every time a key is pressed. You can use specify name of events to update bindings on as shown below.

HTML
```typescript
    <input 
        type="search"
        value={Bind.twoWays(() => this.viewModel.search), ["keyup", "keypress", "blur"])}/>
```

In above example, search property in `viewModel` is set every time a key is pressed.

You can bind properties of AtomControl derived control.
HTML
```typescript
    <AtomComboBox
        selectedIndex={Bind.twoWays(() => this.viewModel.selectedIndex)}
        />
```

XAML
```typescript
    <XF.Entry
        text={Bind.twoWays(() => this.viewModel.search)}/>
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
```typescript
    <div
        style-position="absolute"
        style-width={`${ this.viewModel.width }px` }
        style-height={Bind.oneWay(() => this.viewModel.vertical ? '500px' : '200px' )}
        />
```
Here `position` is set as `absolute`, `width` is calculated by whatever was set on view model's `width` property. And `height` will update whenever `vertical` is modified on view model.

## Event Binding
Event binding extension allows you to subscribe events. This extension also safely unsubscribes automatically when component is disposed.

HTML
```typescript
    <button
        eventClick={ (e) => this.viewModel.signup() }/>
    <button
        eventClick={ Bind.event((s, e) => this.viewModel.signup()) }/>
```

The difference between two syntax is, in first example, first argument is the event object. But for element inside item template, to access data, second syntax is recommended where first parameter is nearest `AtomControl` parent and second argument is event object.

For AtomItemsControl/AtomComboBox/AtomListBox in HTML
```typescript
    <AtomItemsControl
        items={Bind.oneWay(() => this.viewModel.items)}>
        <AtomItemsControl.itemTemplate>
            <div>
                <span
                    text={Bind.oneTime((s) => s.data.label)}/>
                <button
                    eventClick={Bind.event((s, e) => this.viewModel.delete(s.data))}
                    text="Delete"/>
            </div>
        </AtomItemsControl.itemTemplate>
    </AtomItemsControl>
```

Xamarin.Forms with GestureRecognizer
```typescript
    <XF.Label text="Open">
        <XF.Label.gestureRecognizers>
            <TapGestureRecognizer
                command={Bind.event((s, e) => this.viewModel.open())}
                />
        </XF.Label.gestureRecognizers>
    </XF.Label>
```
Xamarin.Forms
ListView/CollectionView with GestureRecognizer
```typescript
    <XF.CollectionView
        itemsSource={Bind.oneWay(() => this.viewModel.items)}>
        <XF.CollectionView.ItemTemplate>
            <XF.DataTemplate>
                <XF.Label>
                    <XF.Label.gestureRecognizers>
                        <TapGestureRecognizer
                            command={Bind.event((s, e) => this.viewModel.delete(s.data))}
                            />
                    </XF.Label.gestureRecognizers>
                </XF.Label>
            </XF.DataTemplate>
        </XF.CollectionView.ItemTemplate>
    </XF.CollectionView>
```

In above example, first parameter is nearest `AtomXFControl` whose `data` property is item of the array set to `itemsSource` property

# How Web Atoms manages bindings?

We wanted to make binding extremely easy without having to code too much, so we created a Binder that creates additional fields in an object and manages refresh callbacks. The reason we did not use `Object.watch` is, it does not support refreshing a readonly property. Binder allows refreshing property of any object, so anyone is watching for any change, their callback is invoked by Binding. Binding does not maintain central repository, this makes updates very fast, with little overhead in memory as every refresh handle exists inside the target object, it is also easy to debug and visualize binding.

Also, you do not need to explicitly create getter and setter to support binding, whenever Binder tries to watch an object, if object has getter and setter, it assumes that creator will refresh property. If object is a plain object without any prototype, Binder will convert members to getter/setter and inject code to refresh property inside setter.

This is the reason, you will not see any `watch` being explicitly called to watch an object, in fact, you will never need to worry about how to refresh the UI. If UI has one way binding, it will refresh automatically when it is updated. Attributes `@Watch` and `@Validate` works magically.

You never have to think, what to observe, when to observe and where to observe.