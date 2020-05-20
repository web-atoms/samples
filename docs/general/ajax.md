# Service Declaration

```typescript
@DISingleton()
@BaseUrl("/api/v2020/app/")
export default class TaskService extends BaseService {

    @Get("user")
    public getUser(): Promise<IUser> { return null; }

    @Get("tasks")
    public getTasks(
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]> { return null; }

    /**
    * `@Queries` (plural) will accept an object with key value pairs
    */
    @Get("tasks")
    public getTasksAdvanced(
        @Queries queries: {
            search?: string,
            status?: "open" | "closed",
            start?: number,
            size?: number
        }
    ): Promise<ITask[]> { return null; }

    @Get("tasks/{id}/attachments")
    public getAttachments(
        @Path("id") id: number
    ): Promise<ITaskAttachment[]> { return null; }

    @Put("tasks")
    public createTask(@Body task: ITask): Promise<ITask> { return null; }

    @Post("tasks/{id}/attachments")
    public uploadAttachment(
        @Path("id") id: number,
        @Body att: IAttachment,
        cancelToken: CancelToken): Promise<void> { return null; }
}
```

As easy as it looks, its very easy to configure REST service.

## Caching

```typescript
    @Get("tasks", { jsCacheSeconds: 900 })
    public getTasks(
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]>
```

Caches response in JavaScript for 900 seconds.

## Caching based on result

```typescript
    @Get("tasks", { jsCacheSeconds: (r) => r.length ? 900 : 0 })
    public getTasks(
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]>
```

Cache response only if returned array has any items.

## Fixed Headers

```typescript
    @Get("tasks", {
            headers: {
               "x-cache": "none",
               "accept": "application/json"
            }
    })
    public getTasks(
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]>
```

## Header in Parameters


```typescript
    @Get("tasks")
    public getTasks(
        @Header("x-auth") auth: string,
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]>
```

## Json Parsing Options

```typescript
    @Get("tasks", { 
       jsonOptions: {
          namingStrategy: "underscore",
          indent: 2,
          dateConverter: {
             regex: dateFormatRegex,
             valueConverter: {
                fromSource:(v: string) => Date,
                fromTarget:(date: Date) => string
             }
          }
       }
    })
    public getTasks(
        @Header("x-auth") auth: string,
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<ITask[]>
```

# Returning Headers !!


```typescript
    @Get("tasks", { 
       returnHeaders: true
    })
    public getTasks(
        @Header("x-auth") auth: string,
        @Query("search") search: string,
        // default value should be specified in
        // decorator and not in argument declaration
        @Query("status", "open") status?: string
    ): Promise<IApiResponse<ITask[]>>
```

The only difference is, result type is always `IApiResponse<T>`, which contains `headers` and `value`.

# Mocking

Mocking services makes unit testing and design time development very easy.

```typescript
@DISingleton({ mock: "./mocks/MockTaskService" })
@BaseUrl("/api/v2020/app/")
export default class TaskService extends BaseService {
...
```

Now you can keep `MockTaskService` inside `mocks` folder. And override every method to return design time data. 

