# Validation

Data validation in User Interface is crucial for every application and Web Atoms makes it very easy to write.

## Simple Validation

Validation accessor is decorated with `@Validate` decorator and it is prefixed with the word `error`. You can bind these accessor in UI to display errors.

For example,

```typescript

export default SignupViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model = {
        firstName: null,
        lastName: null
    };

    // both validate properties will return undefined value
    // unless `this.isValid` is referenced.

    @Validate
    public get errorFirstName(): string {
        return this.model.firstName ? "" : "First name is required";
    }

    @Validate
    public get errorLastName(): string {
        return this.model.firstName ? "" : "Last name is required";
    }

    public signup(): Promise<void> {

        // as soon as this property is called first time
        // validation decorator will update and error will be displayed
        if (!this.isValid) {
            await this.navigationService.alert(`Please enter required fields`);
            return;
        }

        // optional, if you want to reuse same form
        // you can call resetValidations to remove all errors
        this.resetValidations();
    }

}

```
HTML
```html
<div view-model="{ this.resolve(SignupViewModel) }">

    <input placeholder="First name:" value="$[viewModel.model.firstName]">
    <span class="error" text="[$viewModel.errorFirstName]"></span>

    <input placeholder="Last name:" value="$[viewModel.model.lastName]">
    <span class="error" text="[$viewModel.errorLastName]"></span>

    ...

    <button event-click="{ () => $viewModel.signup() }">Signup</button>

</div>
```

XAML
```xml

    <Entry 
        Placeholder="First name:" 
        Text="$[viewModel.model.firstName]"/>
    <Label
        Style="Error" 
        Text="[$viewModel.errorFirstName]"/>

    <Entry 
        Placeholder="Last name:" 
        Text="$[viewModel.model.lastName]"/>
    <Label
        Style="Error" 
        Text="[$viewModel.errorLastName]"/>

    ...

    <Button Command="{ () => $viewModel.signup() }">Signup</Button>

```

In above example, when page is loaded, error spans will not display anything. Even if `firstName` and `lastName` both are empty. As soon as user clicks `Signup` button, `this.isValid` get method will start watching for changes in all `@Validate` decorator methods and user interface will start displaying error message.

## Custom Validation

Let's review, little complicated setup. We want user to add couple of email addresses while signing up.

For example,

```typescript
interface IModel {
    name: string;
    emails: IEmailModel[];
}

interface IEmailModel {
    email: string;
    type?: string;
    error?: string;
}

export default class CustomValidationViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model: IModel = {
        name: "",
        emails: [
            {
                email: "",
                type: "Default"
            }
        ]
    };

    @Validate
    public get errorName(): string {
        return this.model.name ? "" : "Name cannot be empty";
    }

    public addEmail(): void {
        this.model.emails.add({
            email: ""
        });
    }

    public async signup(): Promise<void> {
        let isValid = this.isValid;

        for (const email of this.model.emails) {
            if (!email.email) {
                isValid = false;
                if (email.error === undefined) {
                    this.bind(email, "error", email, [["email"]], (v) => this.getEmailError(email));
                }
            }
        }

        if (!isValid) {
            await this.navigationService.alert("Please complete all required fields");
        }
    }

    private getEmailError(email: IEmailModel): string {
        if (!email.email) {
            return "Email cannot be empty";
        }
        if (!/[^\@]+\@[^\@]+/.test(email.email)) {
            return "Invalid email";
        }
        return "";
    }
}
```

HTML
```html
<div view-model="{ this.resolve(SignupViewModel) }">

    <input placeholder="Name:" value="$[viewModel.model.name]">
    <span class="error" text="[$viewModel.errorName]"></span>

    <AtomItemsControl>
        <div template="itemTemplate">
            <input value="$[data.email]" />
            <span style="color: red" text="[data.error]"></span>
        </div>
    </AtomItemsControl>
    <button event-click="{ () => $viewModel.addEmail() }">Add Email</button>
    ...

    <button event-click="{ () => $viewModel.signup() }">Signup</button>

</div>
```

In above example, when page is loaded, a default email address is already added in the list. And when someone tries to signup, it will raise an error if email address is empty. The `bind` will force error to automatically go away as soon as email types something.

## Multi View Model Validation

### Root Insurance View
```typescript
interface IInsurance  {
    id?: number;
    date?: Date;
    broker: string;
    type: string;
    applicants: IApplicant[];
}

export interface IApplicant {
    name: string;
    type: string;
    address?: string;
    city?: string;
}

export default class InsuranceViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model: IInsurance = {
        broker: "",
        type: "General",
        applicants: [
            {
                name: "",
                type: "Primary"
            }
        ]
    };

    @Validate
    public get errorBroker(): string {
        return this.model.broker ? "" : "Broker cannot be empty";
    }

    public addApplicant(): void {
        this.model.applicants.add({
            name: "",
            type: "Dependent"
        });
    }

    public async save(): Promise<void> {
        if (!this.isValid) {
            await this.navigationService.alert("Please fix all errors", "Error");
            return;
        }
        await this.navigationService.alert("Save Successful", "Success");
    }

}
```
#### Insurance.html
```html
<div view-model="{ this.resolve(InsuranceViewModel) }">
    <div>
        <input placeholder="Name" value="$[viewModel.model.broker]"/>
        <span style="color: red" text="[$viewModel.errorBroker]"></span>
    </div>

    <AtomItemsControl items="{ $viewModel.model.applicants }">
        <Applicant template="itemTemplate">
        </Applicant>    
    </AtomItemsControl>
    <button event-click="{ () => $viewModel.addApplicant() }">Add Applicant</button>

    <div>
        Other fields...
    </div>

    <button event-click="{ () => $viewModel.save() }">Save</button>
</div>
```

### Nested Applicant View
Typescript
```typescript
export default class ApplicantViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model: IApplicant;

    @Validate
    public get errorName(): string {
        return this.model.name ? "" : "Name cannot be empty";
    }

    @Validate
    public get errorAddress(): string {
        return this.model.address ? "" : "Address cannot be empty";
    }

    public async delete(): Promise<void> {
        if (!( await this.navigationService.confirm("Are you sure you want to delete this?") )) {
            return;
        }
        (this.parent as InsuranceViewModel).model.applicants.remove(this.model);
    }
}
```
#### Applicant.html
```html
<div 
    view-model="{ this.resolve(ApplicantViewModel, () => ({ model: this.data, parent: this.parent.viewModel })) }"
    style="margin: 5px; padding: 5px; border: solid 1px lightgray; border-radius: 5px">
    <div>
        <input placeholder="Name" value="$[viewModel.model.name]"/>
        <span style="color: red" text="[$viewModel.errorName]"></span>
    </div>
    <div>
        <input placeholder="Address" value="$[viewModel.model.address]"/>
        <span style="color: red" text="[$viewModel.errorAddress]"></span>
    </div>

    <button event-click="{ () => $viewModel.delete() }">Delete</button>
</div>
```

> You can initialize view model with additional properties.


