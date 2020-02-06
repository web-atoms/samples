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
        public string GetVersion(IJSContext context) {
            return context.Convert("current version");
        }


        ///<summary>
        /// Asynchronous method, tasks are converted to promises
        ///</summary>
        public async Task<IJSValue> IsStorageAvailable(IJSContext context) {
            bool result = await storageService.IsAvailableAsync();
            return context.Convert(result);
        }

        ///<summary>
        /// In order to send/receive JavaScript objects, you need to serialize Custom Objects.
        /// `context.Convert` only converts values, strings ,Tasks and wraps the object. 
        /// You cannot read/write properties of wrapped objects. In order to do that, you need to serialize object.
        ///</summary>
        public async Task<IJSValue> SearchFiles(IJSContext context, string pattern) {

            var list = await localFileService.SearchAsync(pattern);

            // this creates JSON styled objects that be accessed in JavaScript, note
            // only properties are deeply copied
            var copy = context.Serialize(list, SerializationMode.Copy);

            return copy;

        }

    }


    // register inside a static initializer

    public class AppBridge: AtomBridge {
        static AppBridge() {
            RegisterService("fileService", DependencyService.Get<FileService>());

            // OR 

            RegisterService("fileService", new FileService());
        }
    }

```

```typescript

    @DISingleton({
        // registered service...
        global: "bridge.fileService"
    })
    export default class FileService {

        /**
        * This is first synchronous method, naming convetion should be
        * as per JavaScript, camel case.
        */
        public getVersion(): string {
            return null;
        }

        /**
        * Asynchronous method should return a promise
        */
        public isStorageAvailable(): Promise<boolean> {
            return null;
        }

        /**
        * Do not specify first parameter as context
        */
        public searchFiles(pattern: string): Promise<any[]> {
            // dummy return, this will never be executed
            // this class is only a placeholder for intellisense
            return null;
        }
        
    }

```

## Serialization Modes

### Copy

This method will create a deep copy of CLR Object as dictionary which you can easily access inside JavaScript code. This method will fail if there are self referencing objects in the object graph. This limitation may be removed in future, but right now it will throw an exception.

This method is also very slow as deep copy operation will take more time.

Deserialization will also be slow as it will completey construct new object with all properties.

### Reference
Keeps reference along with serialization, every property is serialized as getter/setter, upon deserialization, same object will be returned.

This method is useful for self referencing objects, but this may cause memory leak if you keep reference in JavaScript and JavaScript garbage collector fails to dispose object.

This method is faster at time of deserialization as it simply returns referenced object.