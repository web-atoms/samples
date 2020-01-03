import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export interface IConfigItem {
    label: string;
    value: string;
}

export default class VirtualListViewModel extends AtomViewModel {

    public get items(): IConfigItem[] {
        const items = [];
        for (let index = 0; index < 1000; index++) {
            items.push({ label: `Item (${index + 1})`, value: index });
        }
        return items;
    }

}
