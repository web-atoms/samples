# Rest Service
Web Atoms provides convenient method to interact with REST API similar to RetroFit.

## Methods

```typescript
public class TaskService extends BaseService {

    @Get("/user")
    public getUser(): Promise<IUser>;

    @Get("/tasks")
    public getTasks(
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]>

    @Get("/tasks/{id}/attachments")
    public getAttachments(
        @Path("id") id: number
    ): Promise<ITaskAttachment>;

    @Put("/tasks")
    public createTask(@Body task: ITask): Promise<ITask>;

    @Post("/tasks/{id}/attachments")
    public uploadAttachment(
        @Path("id") id: number,
        @Body att: IAttachment,
        cancelToken: CancelToken): Promise<void>;
}
```

## CancelToken

You can create an cancellation token of type `CancelToken` and send it as parameter. When you want to cancel the operation, you can call `cancel` method on the token.