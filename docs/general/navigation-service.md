# Navigation Service

To open popup and window, you can use `NavigationService` which is an abstract navigation service, with platform specific injected service available at runtime.

> For Web Atoms, popup and window both are same, they just have different template. Window template contains title bar, close button etc and it can be dragged around. Popup template is simple and it disappears if you click outside the popup.

## Open a Window

### OpenWindow method

```typescript
    this.navigationService.openWindow(url, {
        param1: value1,
        param2: value2
    });
```
You can use this method to create a window. If you do not create view model in your window view, then a new view model will be created and it will be attached automatically to newly created window.

## Access Parent View Model

Since each window will have its own `ViewModel`, you must either pass data separately in the url as parameters in the open method, or you can access `parent` property and access view model of the UI element that lead to creation of the window. For example, if you click a button to open a window, `parent` of view model will be the view model of the button.

### Pass parameters to Window View Model

#### Alert.html
```html
<script>
    import AlertViewModel from "./AlertViewModel";
</script>
<AtomWindow.div>
    <div template="windowTemplate">
        <div text="{ $viewModel.message }"></div>
    </div>
    <div template="commandTemplate">
        <button 
            event-click="{ () => this.viewModel.cancel() }"
            >Cancel</button>
    </div>
</AtomWindow.div>
```

#### AlertViewModel.ts
```typescript
export default class AlertViewModel extends AtomWindowViewModel {
    public message: string;
}
```

#### Usage
```typescript
    await this.navigationService.openWindow(
        "@package/id/dist/Alert", {
            message: "Demo"
        });
```
The url is the package relative url of the view, which uses node style resolution to resolve view. Parameters passed to `openWindow` method will be set to property with same name on view model of the view.

Unless you want to create methods on view model, you can omit view model class creation and you can still access properties as they will be created at runtime.

### Returning value from the Window

#### LoginWindowViewModel.ts
```typescript

export default class LoginWindowViewModel extends AtomWindowViewModel {


    public async login(): Promise<void> {
        const userInfo = await this.userService.doLogin(this.user);

        // whatever you return here
        // you will receive it on await of openWindow
        this.close(userInfo);


        // this will throw an exception `cancelled` on
        // await of openWindow
        this.cancel();
    }

}

```
#### LoginWindow.html
```html
<script>
    import LoginWindowViewModel from "./LoginWindowViewModel";
</script>
<AtomWindow.div>
    <div template="windowTemplate">
        ... login user interface
    </div>
    <div template="commandTemplate">
        <button 
            event-click="{ () => this.viewModel.login() }"
            >Login</button>
    </div>
</AtomWindow.div>
```

#### Caller

```typescript

    const l = await this.openWindow(
        "@package/id/dist/LoginWindow"
    );

```

### Parent View Model

Lets say you have a filter option and you want to display a popup, and as you make changes to filter, your screen should refresh.

#### List.html

```html
<script>
    import AtomPopupButton from "@web-atoms/web-controls/dist/buttons/AtomPopupButton";
    import ListViewModel from "./ListViewModel";
</script>
<div>

    <AtomPopupButton>
        <div template="popupTemplate">
            <!-- Created window/popup can access parent view model as `viewModel.parent` -->
            <input 
                type="search"
                value="$[viewModel.parent.search]"/>
        </div>
    </AtomPopupButton>

    <AtomListBox items="[$viewModel.items]">
        ...
    </AtomListBox>

</div>

```

#### ListViewMode.ts

```typescript

export default class ListViewModel extends AtomViewModel {

    public search: string = null;

    public items: ITaskItem[] = null;

    @Inject
    private taskService: TaskService;

    @Load({ init: true, watch: true })
    public async loadItems(ct: CancelToken): Promise<void> {
        this.items = 
            await this.taskService.list( this.search, ct);
    }

}

```

In above example, popup button will create a popup that will host search input, and it is bound to parent's search property.

Please note, only in case of AtomPopupButton or similar templated controls that will create a window or popup can access parent property.