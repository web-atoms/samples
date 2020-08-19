# Expose CLR Service to JavaScript

Exposing CLR service is very easy, all you have to do is implement an empty interface `IJSService` and write methods with basic types such as `string`, `long`, `boolean` etc, in order to pass and retrieve custom objects, you can use `IJSValue.Unwrap<T>`.

## Examples

### Custom Navigation Service

> Parameter sequence, first parameter should be IJSContext as every IJSService class is essentially a singleton.

### Custom File Service

```c#
    public class FileService: IJSService {

        ///<summary>
        /// Synchronous method
        ///</summary>
        public IJSValue GetVersion(IJSContext context) {
            // since JavaScript has different types, and
            // underlying JavaScript engine could be different on different
            // platforms, you have to create native representation before
            // passing it to JavaScript
            return context.CreateString("current version");
        }

        ///<summary>
        /// Asynchronous method, tasks are converted to promises
        ///</summary>
        public async Task<IJSValue> IsStorageAvailable(IJSContext context) {
            bool result = await storageService.IsAvailableAsync();
            return result ? context.True : context.False;
        }

        ///<summary>
        /// In order to send/receive JavaScript objects,
        /// you need to serialize Custom Objects.
        /// You cannot read/write properties of wrapped objects. 
        /// In order to do that, you need to serialize object.
        ///</summary>
        public async Task<IJSValue> SearchFiles(IJSContext context, string pattern) {

            var list = await localFileService.SearchAsync(pattern);

            // this creates JSON styled objects that be accessed in JavaScript, note
            // only properties are deeply copied
            var copy = context.Marshal(list, SerializationMode.Copy);

            return jsArray;
        }
    }

    // register inside a static initializer
    public class AppBridge: AtomBridge {
        public FileService FileService => DependencyService.Get<FileService>();
    }
```

```typescript
    @DISingleton({
        // registered service...
        global: "bridge.fileService",

        // optional for mocking
        mock: "./mocks/FileService"
    })
    export default abstract class FileService {

        /**
        * This is first synchronous method, naming convention should be
        * as per JavaScript, camel case.
        */
        public abstract getVersion(): string;

        /**
        * Asynchronous method should return a promise
        */
        public abstract isStorageAvailable(): Promise<boolean>;

        /**
        * Do not specify first parameter as context
        */
        public abstract searchFiles(pattern: string): Promise<any[]>;
        
    }
```

### Why do we have to declare class in TypeScript
The way dependency injection works, decorators cannot be declared on interfaces as in C# and Java. TypeScript decorators can only be applied on classes.

You can also create mock which will be available in design time and unit tests.

## Serialization Modes

### Copy

This method will create a deep copy of CLR Object as dictionary which you can easily access inside JavaScript code. This method will fail if there are self referencing objects in the object graph. This limitation may be removed in future, but right now it will throw an exception.

This method is also very slow as deep copy operation will take more time.

Deserialization will also be slow as it will completely construct new object with all properties.

### Reference
Keeps reference along with serialization, every property is serialized as getter/setter, upon deserialization, same object will be returned.

This method is useful for self referencing objects, but this may cause memory leak if you keep reference in JavaScript and JavaScript garbage collector fails to dispose object.

Deserialization is faster as it simply returns referenced object.

### WeakReference
Same as `Reference` but it only keeps weak reference, you will get object disposed if you try to access object in JavaScript and it is disposed in CLR. CLR is very aggressive while disposing objects, so this may not work if you do not keep reference in CLR. This is also recommended method as it will avoid memory leaks.

### Wrap
This is default serialization method for any object. Object will simply be wrapped and no methods/properties are exposed.