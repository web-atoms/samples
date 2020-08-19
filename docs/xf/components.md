# Functional Component

We can also easily create functional JSX which can act as lightweight macro.

```typescript

function CommandButton({ text, command, icon, font
    }: {text: string, command: any, icon: any, font?: any}) {
    return <XF.Button>    
        <XF.Button.imageSource>
            <XF.FontImageSource
                fontFamily={font || FontAwesomeRegular}
                glyph={icon}
                />
        </XF.Button.imageSource>
    </XF.Button>;
}


// usage...

    <XF.ContentPage>
        <CommandButton
            text="Login",
            icon={FontAwesomeRegular.lock}
            command={Bind.event((s, e) => this.viewModel.login())}
            />
        <CommandButton
            text="Signup",
            icon={FontAwesomeRegular.userCircle}
            command={Bind.event((s, e) => this.viewModel.signup())}
            />
    </XF.ContentPage>

```

You can notice that entire ImageSource and its children can be moved into function to avoid repetition. VS Code offers excellent intellisense for Functional Component. We only recommend using Functional Component to avoid repetition, for more complex logic, we should use Custom Components described in next section.


# Custom Components

You can easily create and reuse your components. To make binding easy and sharing of logic, we have created an extra property called `LocalViewModel` which you can use specifically for custom reusable components. Local view model allows end users to change Visual Appearance with same logic.

## Simple control

### Timer.html

```typescript
export default class Timer extends AtomXFContentView {

    public localViewModel: TimerViewModel;

    public create() {
        // Lets initialize local view model here
        this.localViewModel = this.resolve(TimerViewModel);

        this.render(<XF.ContentView>
            <XF.Label text={Bind.oneWay(() => this.localViewModel.time)}/>
        </XF.ContentView>);
    }
}
```

### TimerViewModel.ts

```typescript
export default class TimerViewModel extends AtomViewModel {

    public time: string;

    public async init(): Promise<void> {
        const id = setInterval(() => {
            this.time = (new Date()).toString();
        }, 1000);

        // this will ensure that
        // interval will be cleared
        // when component is disposed
        this.registerDisposable({
            dispose() {
                clearInterval(id);
            }
        });
    }

}
```

## Custom Control Properties

You can create new properties on custom control by specifying it in properties attribute. You can set owner property of view model by initializing it in resolve method as shown below.

### DateSelector.html

```typescript
export default class DateSelector extends AtomXFContentView {

    public localViewModel: DateSelectorViewModel;

    /** Do not initialize properties here*/
    public startYear: number;
    public endYear: number;

    /** By convention, preCreate should always call super,
     * and all default property initialization must occur here,
     * as descendants of this component can override `create` method
     * to change look and feel
     */
    public preCreate() {

        super.preCreate();

        /** Initialize all properties here, the must be initialized to null
         * or default, otherwise binding will not work.
         * 
         * The reason behind this is, if property is undefined on the current AtomComponent, it is assumed that binding should be set to same name property on the element.
         */

        this.startYear = -10;
        this.endYear = 10;
        this.selectedDate = null;

        /**
         * Second parameter of resolve method accepts a function that
         * returns key/value pair that will be set on ViewModel after
         * creation
         */
        this.localViewModel = this.resolve(DateSelectorViewModel,
            () => ({ owner: this }));
    }

    public create() {
        this.render(<XF.ContentView>
            <XF.StackLayout orientation="horizontal">
                <AtomXFComboBox
                    value={Bind.twoWays(() => this.localViewModel.day)}
                    items={Bind.oneWay(() => this.localViewModel.dayList)}/>
                <AtomXFComboBox
                    value={Bind.twoWays(() => this.localViewModel.month)}
                    items={Bind.oneWay(() => this.localViewModel.monthList)}/>
                <AtomXFComboBox
                    value={Bind.twoWays(() => this.localViewModel.year)}
                    items={Bind.oneWay(() => this.localViewModel.yearList)}/>
            </XF.StackLayout>
        </XF.ContentView>);

    }

}
```

```typescript
export default class DateSelectorViewModel extends AtomViewModel {

    public owner: any;

    public day: number;
    public month: number;
    public year: number;

    public get monthList() {
        return [
            { label: "January", 0 },
            ...
            { label: "December", 11 },
        ]
    }    

    @Watch
    public get dayList() {
        const a = [];
        // dayList will refresh when this.month will change !!
        const m = this.month + 1;
        let days = 30;
        switch(m) {
            case 1: // Jan
            case 3: // Mar
            case 5: // May
            case 7: // Jul
            case 8: // Aug
            case 10: // Oct
            case 12: // Dec
                days = 31;
                break;
            case 2: // Feb
                days = 28;
                if (this.year % 4 === 0) {
                    days = 29;
                }
                break;
        }
        for(let i=1; i <= days; i++) {
            a.push({ label: i, value: i });
        }
        return a;
    }

    @Watch
    public get yearList() {
        // yearList will refresh when this.owner.startYear or this.owner.endYear will change !!
        const now = new Date();
        const s = now.getFullYear() + this.owner.startYear;
        const e = now.getFullYear() + this.owner.endYear;
        const a = [];
        for(let i=s; i<e; i++) {
            a.push({ label: i, value: i });
        }
        return a;
    }

    @Watch
    public watchDayMonthYear() {
        this.owner.selectedDate = new Date( this.year, this.month, this.day );
    }
}
```

### Usage
```typescript
export default class Date extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.StackLayout>
                <DateSelector
                    selectedDate={Bind.twoWays(() => this.viewModel.startDate)}
                    />
                <DateSelector
                    selectedDate={Bind.twoWays(() => this.viewModel.endDate)}
                    />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }

}
```
