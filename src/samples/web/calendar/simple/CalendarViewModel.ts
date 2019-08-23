import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";

export default class CalendarViewModel extends AtomViewModel {

    public log: string = "";

    public dateClicked(d: { value: Date }): void {
        this.log += `\r\n${d.value.toLocaleDateString()}`;
    }
}
