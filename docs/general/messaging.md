# Messaging

In order to communicate effectively between multiple components, Web Atoms provides simple messaging via `app` which acts as broadcaster.

## How to broadcast

Assume you have two different components, one has list view and other component has detail view and whenever user makes changes selection in list view, you want to update detail view. Both list and detail views are separate and have separate view models.

So in `ListViewModel` we will decorate property with `BindableBroadcast` and set a unique channel name.

```typescript
public class ListViewModel extends AtomViewModel {

    @BindableBroadcast("selected-message")
    public message: IMessage;

}
```

## How to receive

Now in detail view model, we have to simply decorate property with `BindableReceive` with same channel name.

```typescript
public class DetailViewModel extends AtomViewModel {

    @BindableReceive("selected-message")
    public message: IMessage;
}
```

## Receive Annotation

In order to retrieve message in a method, you can decorate it with `@Receive` decorator.

```typescript
public class DetailViewModel extends AtomViewModel {

    @Receive("selected-message")
    public onMessage(channel: string, msg: IMessage): void {

    }

}
```

## Broadcast message in a method

```typescript
public void broadcast(): void {
    this.app.broadcast("channelName", msg);
}
```
