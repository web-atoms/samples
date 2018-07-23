import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";

export class ViewStackViewModel extends AtomViewModel {

    public items = [
        { label: "View 1", value: 0 },
        { label: "View 2", value: 1 },
        { label: "View 3", value: 2 }
    ];

    public index: number = 0;
}
