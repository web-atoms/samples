# Rich View Model

## Watch Decorator

Watching property is super easy with Web Atoms. You can simply create a readonly accessor and mark it is `@Watch`.

```typescript
export default class EditorViewModel extends AtomViewModel {

    public model: CustomerModel = {
        firstName: "",
        lastName: ""
    };

    @Watch
    public get fullName() {
        const firstName = this.model.firstName;
        const lastName = this.model.lastName;
        return firstName + " " + lastName;
    }
}
```
Usage
```typescript
    this.render(<WA.AtomForm>
        <WA.AtomField>
            <XF.Entry text={Bind.twoWays(() =>
                this.viewModel.model.firstName)}>
        </WA.AtomField>
        <WA.AtomField>
            <XF.Entry text={Bind.twoWays(() =>
                this.viewModel.model.lastName)}>
        </WA.AtomField>
        <WA.AtomField>
            <XF.Label text={Bind.oneWay(() => this.viewModel.fullName)}>
        </WA.AtomField>
    </WA.AtomForm>);
```

# Validate Decorator

Validate is special type of watch, which gets activate only if validation was requested.

```typescript
export default class SignupViewModel extends AtomViewModel {
    public model: CustomerModel = {
        firstName: "",
        lastName: "",
        emailAddress: ""
    };

    @Validate
    public get errorFirstName() {
        if (!this.model.firstName) {
            return "First name is required";
        }
        return "";
    }

    @Validate
    public get errorEmailAddress() {
        const email = this.model.emailAddress;
        if (!email) {
            return "Email is required"; 
        }
        if (!emailRegEx.test(email)) {
            return "Invalid email";
        }
        return "";
    }

    @Action({ validate: true })
    public async actionSignup() {
        // only when this was invoked
        // in UI, validation occurs
    }
}
```

```typescript
export default class Signup extends AtomXFContentPage {

    public viewModel: SignupViewModel;
    
    public create() {
        
        this.viewModel = this.resolve(SignupViewModel);

        this.render(<WA.AtomForm>
            <WA.AtomField>
                <XF.Entry text={Bind.twoWays(() =>
                    this.viewModel.model.firstName)}>
            </WA.AtomField>
            <WA.AtomField>
                <XF.Entry text={Bind.twoWays(() =>
                    this.viewModel.model.emailAddress)}>
            </WA.AtomField>
            <WA.AtomField>
                <XF.Button
                    command={Bind.event(() => this.viewModel.actionSignup())}
                    text="Signup">
            </WA.AtomField>
        </WA.AtomForm>);
    }
}    
```

# Load Decorator

Load decorator makes loading of async data very easy. Let's assume that we want to load countries and then selected state. It reports exceptions and cancels previous
operation.

```typescript
export default class SignupViewModel extends AtomViewModel {

    /** This gets called on initialization */
    @Load({ init: true })
    public async loadCountries() {
        this.countries = 
            await this.restService.getCountries();
        this.selectedCountry = this.countries
            .find((x) => x.value === "IN").value;
    }

    /** This gets called when `this.selectedCountry` changes */
    @Load({ watch: true /* watch */ })
    public async loadStates(ct: CancelToken) {
        const country = this.selectedCountry;
        // pass cancel token
        // to automatically cancel previous
        // incomplete request
        this.states = 
            await this.restService.getStates(country, ct);
    }

}
```

# Debouncing

```typescript

export default class SignupViewModel extends AtomViewModel {

    @Load({
        /** watch for changes */
        watch: true,
        /** wait as user might still be typing */
        watchDelayInMS: 500
    })
    public async loadCities(ct: CancelToken) {
        const search = this.search;

        /** cancellation of previous request is tracked here */
        this.cities = await
            this.restService.searchCities(search, ct);
    }

}

```

# Action

`@Action` decorator can be applied on a method which will automatically display an alert if there was any error. And it will invoke validation before executing the method. Display an success alert after completion if configured. You can also configure `confirm` to request confirmation (e.g. for delete operations).

```typescript
export default class SignupViewModel extends AtomViewModel {

    /** This decorator will handle validation, display error
     * and will display an alert for success
     */
    @Action({
        validate: true,
        success: "Signup successful",
        confirm: false,
    })
    public async signup() {
        ....
    }

}
```
```typescript
    <XF.Button
        command={Bind.event((e) =>
            this.viewModel.signup())}
        text="Signup"
        />
```


