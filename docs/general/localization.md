# Localization

Localizing application in Web Atoms is very easy with help of dynamic and remote dependency injection.

## Default String Resource

Let's create a default string resource class.

```typescript

@DISingleton({ inject: "./{lang}/StringResource" })
export default abstract class StringResource {

    // let us create a property
    public username = "Username";

    // this is better than string format placeholders
    // as caller knows that parameter is expected here
    public userNameIsAlreadyRegistered(username: string) {
        return `${username} is already registered`;
    }
}
```

## Specific Language String Resource

Now let us create a folder in same directory and name it that can be substituted in `{lang}`, 

Following class is located at `./hi/StringResource.ts`,

```typescript
export default class HindiStringResource extends StringResource {

    // this is overridden name
    public username = "यूज़र नेम";

    public userNameIsAlreadyRegistered(username: string) {
        return `यह नाम ${username} उपलब्ध नहीं है`;
    }
}
```
## Usage in View
```typescript

export default class SignupView extends AtomXFContentPage {

   public create() {

       // inject Default abstract String Resource
       // DI Container will substitute lang and will resolve
       // correct string resource
       const sr = this.resolve(StringResource);

       this.render(<XF.ContentPage>
         <WA.AtomForm>
            <WA.AtomField
                label={sr.username}
                error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                <Entry
                    text={Bind.twoWays(() => this.viewModel.model.username)}/>
            </WA.AtomField>
            ...
            ...
         </WA.AtomForm>
       </XF.ContentPage>);
   }

}

```

## Usage via ViewModel

Advanced usage to display formatted error messages.

```typescript

export default class SignupViewModel extends AtomViewModel {

    public model: IUser = {};

    public errorUsername: string;

    @Inject
    private stringResource: StringResource;

    @Inject
    private userService: UserService;

    @Load({ watch: true })
    public async checkUsername(ct: CancelToken) {
        const name = this.model.username;
        const result = await this.userService.checkUsername(name, ct);
        this.errorUsername = result.isAvailable
            ? null
            : this.stringResource.userNameIsAlreadyRegistered(name);
    }

}

```

