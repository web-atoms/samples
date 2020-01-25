# Navigation Service

To open popup and window, you can use `NavigationService` which is an abstract navigation service, with platform specific injected service available at runtime.

> For Web Atoms, popup and window both are same, they just have different template. Window template contains title bar, close button etc and it can be dragged around. Popup template is simple and it disappears if you click outside the popup.

## Open a Window

### OpenWindow method

```typescript
    this.navigationService.openWindow(url or AtomComponent, {
        param1: value1,
        param2: value2
    }, {
        clearHistory?: boolean,
        target?: string,
        cancelToken?: CancelToken
    });
```
You can use this method to create a window. If you do not create view model in your window view, then a new view model will be created and it will be attached automatically to newly created window.

## Access Parent View Model

Since each window will have its own `ViewModel`, you must either pass data separately in the url as parameters in the open method, or you can access `parent` property and access view model of the UI element that lead to creation of the window. For example, if you click a button to open a window, `parent` of view model will be the view model of the button.

### Pass parameters to Window View Model

#### Alert.html
```typescript
export default class Alert extends AtomWindow {

    public viewModel: AlertViewModel;

    public create() {
        this.viewModel = this.resolve(AlertViewModel);

        this.render(<div>
            {/** Contents of the Window */}
            <AtomWindow.windowTemplate>
                <div
                    text={Bind.oneWay(() => this.viewModel.message)}/>
            </AtomWindow.windowTemplate>
            {/** Command bar displayed at bottom of the window */}
            <AtomWindow.commandTemplate>
                <button
                    text="Ok"
                    eventClick={() => this.viewModel.cancel()}
                    />
            </AtomWindow.commandTemplate>
        </div>);
    }
}
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
```typescript
export default class LoginWindow extends AtomWindow {

    public viewModel: LoginWindowViewModel;

    public create() {
        this.viewModel = this.resolve(LoginWindowViewModel);
        this.render(<div>
            <AtomWindow.windowTemplate>
                <div>
                    ... other login ui elements
                </div>
            </AtomWindow.windowTemplate>
            <AtomWindow.commandTemplate>
                <button
                    text="Login"
                    eventClick={() => this.viewModel.login()}
                    />
            </AtomWindow.commandTemplate>
        </div>);
    }

}
```

#### Caller

```typescript

    const l = await this.navigationService.openWindow(
        "@package/id/dist/LoginWindow"
    );

```

### Parent View Model

Lets say you have a filter option and you want to display a popup, and as you make changes to filter, your screen should refresh.

#### List.html

```typescript
export default class List extends AtomControl {

    public viewModel: ListViewModel;

    public create() {
        this.render(<div>
            <AtomPopupButton>
                <AtomPopupButton.page>
                    {/** Since this is a popup page, it will have its own
                    view model, but that can be accessed via parameter
                    passed in binding method.
                    
                    For this case, `s.viewModel.parent.search` and `this.viewModel.search` both are same*/}
                    <input
                        type="search"
                        value={Bind.twoWays((s) => s.viewModel.parent.search)}
                        />
                </AtomPopupButton.page>
            </AtomPopupButton>

            <AtomListBox items={Bind.oneWay(() => this.viewModel.items)}>
                ...
            </AtomListBox>            
        </div>);
    }

}
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