# Dependency Injection

Web Atoms provides simple dependency injection with constructor and property injection.

## Registration

To register dependency can decorate class with following attributes.
* RegisterSingleton or DISingleton
* RegisterScoped
* Register or DITransient

### RegisterSingleton
Decorator `@RegisterSingleton` provides simple registration for singleton dependency.

```typescript
@RegisterSingleton
export default class TaskService extends BaseService {
    ... 
}
```

### DISingleton
Decorator `@DISingleton` provides abstract class registration and mock registration.

#### Mock
Dependency specified in `mock` will be injected in design time instead of registered class. 
```typescript
@DISingleton({ mock: "./mocks/MockTaskService" })
export default class TaskService extends BaseService {
    ... 
}
```

File MockTaskService.ts
```typescript
export default class MockTaskService extends TaskService {
    // ... logic used in unit testing and design time
} 
```
#### Abstract Class
In the following example, we want to inject class based on the current selected language by user.

```typescript
@DISingleton({ inject: "./{lang}/StringResource" })
export abstract class BaseStringResource {
    public abstract get username(): string;
}
```

>/en-us/StringResource class
```typescript
export default class StringResource extends BaseStringResource {
    public username = "Username";
} 
```

>/hi/StringResource class
```typescript
export default class StringResource extends BaseStringResource {
    public username = "यूज़र नेम";
} 
```

UMD loader can expand variable when dependencies are loaded and DI will correctly inject dependency.

## Constructor Injection

```typescript
export default class TaskListViewModel extends AtomViewModel {

    // constructor injection..
    constructor(
        @Inject app: App,
        @Inject private taskService: TaskService,
        @Inject private stringResource: StringResource)
    {
        super(app);
    }
}
```

## Property Injection
```typescript
export default class TaskListViewModel extends AtomViewModel {

    @Inject
    public taskService: TaskService;

    @Inject
    public stringResource: StringResource;

}
```

> Though property injection is very convenient, only drawback is you cannot use these properties in constructor. This is why we added `init` method in AtomViewModel to access all dependencies.

## App
App class is derived from ServiceProvider and it acts as a service container. Every control and every view model must receive `app` in construction injection for web atoms to function correctly.

## NavigationService
NavigationService is singleton dependency which is injected by web atoms automatically in App. NavigationService class provides methods to `openPage` and display `alert` and `confirm` dialogs.

```typescript
    // opens or hosts given page and returns result
    // returned by the page's view model
    public openPage<T>(
        url: string,
        params: { [key: string]: any }): Promise<T>;

    public alert(
        message: string,
        title: string): Promise<void>; 
    
    // returns true if yes was selected by user
    public confirm(
        message: string,
        title: string): Promise<bool>;
```