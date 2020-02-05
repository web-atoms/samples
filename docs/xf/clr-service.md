# Expose CLR Service to JavaScript

Exposing CLR service is very easy, all you have to do is implement an empty interface `IJSService` and write methods with basic types such as `string`, `long`, `boolean` etc, in order to pass and retrieve custom objects, you can use `IJSValue.Unwrap<T>`.

## Examples

### Custom Navigation Service

> Parameter sequence, first parameter should be IJSContext as every IJSService class is essentially a singleton.

### Custom File Service

```c#

    public class FileService: IJSService {

        public async Task<IJSValue> IsStorageAvailableAsync(IJSContext context) {
            bool result = await storageService.IsAvailableAsync();
            return context.Convert(result);
        }

        public async Task<IJSValue> SearchFiles(IJSContext context, string pattern) {

            var list = await localFileService.SearchAsync(pattern);

            // this creates JSON styled objects that be accessed in JavaScript, note
            // only properties are deeply copied
            var copy = context.CopyObject(list);

            return copy;

        }

    }

```