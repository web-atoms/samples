import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
export declare class ViewStackViewModel extends AtomViewModel {
    items: {
        label: string;
        value: number;
    }[];
    index: number;
}
