import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
export declare class ViewStackViewModel extends AtomViewModel {
    items: {
        label: string;
        value: number;
    }[];
    index: number;
}
