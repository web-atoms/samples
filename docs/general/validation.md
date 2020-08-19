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

    @Action({ validate: true })
    public async signup() {
        // optional, if you want to reuse same form
        // you can call resetValidations to remove all errors
        this.resetValidations();
    }

}

```
HTML
```typescript
export default class Signup extends AtomControl {

    /** This enables intellisense, do not initialize this*/
    public viewModel: SignupViewModel;

    public create() {
        this.viewModel = this.resolve(SignupViewModel);

        this.render(<div>
        <AtomForm>
            <AtomField
                label="Username"
                error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                <input
                    value={Bind.twoWays(() => this.viewModel.model.firstName)}/>
            </AtomField>
            <AtomField
                label="Password"
                error={Bind.oneWay(() => this.viewModel.errorPassword)}>
                <input
                    type="password"
                    value={Bind.twoWays(() => this.viewModel.model.password)}/>
            </AtomField>
            <AtomField>
                <button
                    eventClick={Bind.event(() => this.viewModel.signup())} 
                    text="Signup"/>
            </AtomField>
        </AtomForm>
        </div>);
    }

}
```

Xamarin.Forms
```typescript

export default class Signup extends AtomXFContentPage {

    /** This enables intellisense, do not initialize this*/
    public viewModel: SignupViewModel;

    public create() {
        this.viewModel = this.resolve(SignupViewModel);

        this.render(<XF.ContentPage>
        <AtomForm>
            <AtomField
                label="Username"
                error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                <Entry
                    text={Bind.twoWays(() => this.viewModel.model.firstName)}/>
            </AtomField>
            <AtomField
                label="Password"
                error={Bind.oneWay(() => this.viewModel.errorPassword)}>
                <Entry
                    isPassword={true}
                    text={Bind.twoWays(() => this.viewModel.model.password)}/>
            </AtomField>
            <AtomField>
                <button
                    eventClick={Bind.event(() => this.viewModel.signup())} 
                    text="Signup"/>
            </AtomField>
        </AtomForm>
        </XF.ContentPage>);
    }

}
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

    @Action({ validate: true })
    public async signup(): Promise<void> {
        let isValid = false;

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
```typescript

const BindEmail = Bind.forData<Email>();

export default class CustomValidation extends AtomControl {

   // this line enables intellisense
   public viewModel: CustomValidationViewModel;

   public create(): void {
      this.viewModel =  this.resolve(CustomValidationViewModel) ;

      this.render(
      <div>
         <div>
            <input
               placeholder="Name"
               value={Bind.twoWays(() => this.viewModel.model.name)}>
            </input>
            <span
               style="color: red"
               text={Bind.oneWay(() => this.viewModel.errorName)}>
            </span>
         </div>
         <AtomItemsControl
            items={Bind.oneTime(() => this.viewModel.model.emails)}>
            <AtomItemsControl.itemTemplate>
               <div>
                  <input
                     placeholder="Email"
                     value={BindEmail.twoWays((x) => x.data.email)}>
                  </input>
                  <span
                     style="color: red"
                     text={BindEmail.oneWay((x) => x.data.error)}>
                  </span>
               </div>
            </AtomItemsControl.itemTemplate>
         </AtomItemsControl>
         <button
            eventClick={Bind.event(() => this.viewModel.addEmail())}>
            Add Email
         </button>
         <div>Other fields...</div>
         <button
            eventClick={Bind.event(() => this.viewModel.signup())}>
            Signup
         </button>
      </div>
      );
   }
}
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

    @Action({ validate: true })
    public async save(): Promise<void> {
        await this.navigationService.alert("Save Successful", "Success");
    }

}
```
#### Insurance.html
```typescript

export default class Insurance extends AtomControl {

   // enable intellisense
   public viewModel: InsuranceViewModel;

   public create(): void {
      this.viewModel =  this.resolve(InsuranceViewModel) ;

      this.render(
      <div>
         <div>
            <input
               placeholder="Name"
               value={Bind.twoWays(() => this.viewModel.model.broker)}>
            </input>
            <span
               style="color: red"
               text={Bind.oneWay(() => this.viewModel.errorBroker)}>
            </span>
         </div>
         <AtomItemsControl
            items={Bind.oneTime(() => this.viewModel.model.applicants)}>
            <AtomItemsControl.itemTemplate>
               <Applicant>
               </Applicant>
            </AtomItemsControl.itemTemplate>
         </AtomItemsControl>
         <button
            eventClick={Bind.event(() => this.viewModel.addApplicant())}>
            Add Applicant
         </button>
         <div>Other fields...</div>
         <button
            eventClick={Bind.event(() => this.viewModel.save())}>
            Save
         </button>
      </div>
      );
   }
}
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
```typescript
export default class Applicant extends AtomControl {

   public viewModel: ApplicantViewModel;
   
   public create(): void {

       /** Following method will initialize and bind parent property of
        * ApplicantViewModel to InsuranceViewModel, this is specified in the form
        * of lambda so it will bind correctly after the control has been created
        * successfully.
        *
        * After parent is attached, parent view model will include all children validations
        * and will fail to validate if any of child is invalid
        */
      this.viewModel =  this.resolve(ApplicantViewModel, () => ({ model: this.data, parent: this.parent.viewModel })) ;

      this.render(
      <div
         style="margin: 5px; padding: 5px; border: solid 1px lightgray; border-radius: 5px">
         <div>
            <input
               placeholder="Name"
               value={Bind.twoWays(() => this.viewModel.model.name)}>
            </input>
            <span
               style="color: red"
               text={Bind.oneWay(() => this.viewModel.errorName)}>
            </span>
         </div>
         <div>
            <input
               placeholder="Address"
               value={Bind.twoWays(() => this.viewModel.model.address)}>
            </input>
            <span
               style="color: red"
               text={Bind.oneWay(() => this.viewModel.errorAddress)}>
            </span>
         </div>
         <button
            eventClick={Bind.event(() => this.viewModel.delete())}>
            Delete
         </button>
      </div>
      );
   }
}
```

> You can initialize view model with additional properties.


