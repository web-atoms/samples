import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";

export default class CustomCalendarViewModel extends AtomViewModel {

    public log: string = "";

    public dateClicked(d: { value: Date }): void {
        this.log += `\r\n${d.value.toLocaleDateString()}`;
    }

    public isOdd(d: { value: Date}): boolean {
        return d.value.getDate() % 2 !== 0;
    }
}
