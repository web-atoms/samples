# Custom Components

You can easily create and reuse your components. Every html file is transpiled to a control derived from either `AtomControl` or any other root control specified on root element.

## Simple control

### Timer.html

```html
<div local-view-model="{ this.resolve(TimerViewModel) }">
    <span text="[ $viewModel.time ]" ></span>
</div>
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

```html
<script>
    // full path from the package folder beginning with ~
    import DateSelectorViewModel from "~src/view-models/DateSelectorViewModel";
</script>
<div
    properties=" startYear: -10, endYear: 10, selectedDate: undefined "
    local-view-model="{ this.resolve(DateSelectorViewModel, () => ({ owner: this }) }">
    <AtomComboBox items="{ $localViewModel.dayList }" value="$[localViewModel.day]" ></AtomComboBox>
    <AtomComboBox items="{ $localViewModel.monthList }" value="$[localViewModel.month]" ></AtomComboBox>
    <AtomComboBox items="{ $localViewModel.yearList }" value="$[localViewModel.year]" ></AtomComboBox>
</div>
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
```html
<script>
    // full path from the package folder beginning with ~
    import DateSelector from "~src/web/views/DateSelector";
</script>
<div>
    <DateSelector 
        selected-date="$[viewModel.startDate]" ></DateSelector>
    <DateSelector 
        year-end="[$viewModel.startYear]"
        selected-date="$[viewModel.endDate]" ></DateSelector>
</div>
```

### Referencing component from different package
```html
<script>
    import DateSelector from "@private/package/dist/web/DateSelector";
</script>
<div>
    <DateSelector 
        selected-date="$[viewModel.startDate]" ></DateSelector>
    <DateSelector 
        year-end="[$viewModel.startYear]"
        selected-date="$[viewModel.endDate]" ></DateSelector>
</div>
```

### Passing DOM native methods to View Model

As we do not want to reference any HTML native methods in View Model as we may execute view model on any platform. We will instead initialize view model and pass methods that can be executed on view model without referencing DOM.

#### DomHelper
```typescript
export default class DomHelper {
    public static focus(ctrl: AtomControl, className: string): (() => void) {
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
```html
<script>
    // full path from the package folder beginning with ~
    import DateSelectorViewModel from "~src/view-models/DateSelectorViewModel";
    import DomHelper from "~src/web/core/DomHelper";
</script>

<div
    properties=" startYear: -10, endYear: 10, selectedDate: undefined "
    local-view-model="{ this.resolve(DateSelectorViewModel, () => ({ focus: DomHelper.focus(this) })) }">
    ...
</div>
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