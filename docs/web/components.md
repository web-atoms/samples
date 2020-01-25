# Custom Components

You can easily create and reuse your components. Every html file is transpiled to a control derived from either `AtomControl` or any other root control specified on root element.

## Simple control

### Timer.html

```typescript
export default class Timer extends AtomControl {

    public localViewModel: TimerViewModel;

    public create() {
        this.localViewModel = this.resolve(TimerViewModel);
        this.render(<div>
            <span text={Bind.oneWay(() => this.localViewModel.time)}/>
        </div>);
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
export default class DateSelector extends AtomControl {

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

        this.localViewModel = this.resolve(DateSelectorViewModel,
            () => ({ owner: this }));
    }

    public create() {
        this.render(<div>
            <AtomComboBox
                value={Bind.twoWays(() => this.localViewModel.day)}
                items={Bind.oneWay(() => this.localViewModel.dayList)}/>
            <AtomComboBox
                value={Bind.twoWays(() => this.localViewModel.month)}
                items={Bind.oneWay(() => this.localViewModel.monthList)}/>
            <AtomComboBox
                value={Bind.twoWays(() => this.localViewModel.year)}
                items={Bind.oneWay(() => this.localViewModel.yearList)}/>
        </div>);

    }

}
<script>
    // full path from the package folder beginning with ~
    import DateSelectorViewModel from "~src/view-models/DateSelectorViewModel";
</script>
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
export default class Date extends AtomControl {

    public create() {
        this.render(
            <div>
                <DateSelector
                    selectedDate={Bind.twoWays(() => this.viewModel.startDate)}
                    />
                <DateSelector
                    selectedDate={Bind.twoWays(() => this.viewModel.endDate)}
                    />
            </div>
        );
    }

}
```

### Passing DOM native methods to View Model

As we do not want to reference any HTML native methods in View Model as we may execute view model on any platform. We will instead initialize view model and pass methods that can be executed on view model without referencing DOM.

#### DomHelper
```typescript
export default class DomHelper {
    public static focus(ctrl: AtomControl, className?: string): (() => void) {
        return () => {
            const input = ctrl.element.getElementsByTagName("input")[0] as HTMLInputElement;
            if (input) {
                input.focus();
            }
        };
    }
}
```

#### HTML
```typescript
    this.localViewModel = this.resolve(DateSelectorViewModel,
        () => ({
            focus: DomHelper.focus(this)
        }));
```

#### TypeScript
```typescript
export default class DateSelectorViewModel extends AtomViewModel {

    // this will be set by initializer in View
    // this method should not have any input/output parameter of native platform type
    public focus: (() => void);

    public async init(): Promise<void> {

        // wait for 10 milliseconds for all initialization to finish
        await Atom.delay(10);

        this.focus();
    }

}
```

## Custom Control Inject

You can resolve dependencies in Custom Control as shown below. `@Inject` does not work in Custom UI Component because resolving them is costly operation and can slow down initialization, as usually single `ViewModel` is used for many UI elements, it is convenient to initialize dependencies in ViewModel with `@Inject`. 

```typescript
export default class Custom extends AtomControl {

    public srDate: SRDate;

    public preCreate() {
        this.srDate = this.resolve(SRDate);
    }

    public create() {
        this.render(<div>
            <AtomComboBox
                items={this.srDate.monthList}
                />
        </div>);
    }

}
```

> You must use injection in view only for single property access that is independent of the logic. For complex logic, please continue to write logic in view model so it can be unit tested without UI.