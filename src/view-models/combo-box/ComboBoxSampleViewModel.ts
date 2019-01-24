import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";

import IFetchEvent from "web-atoms-core/dist/core/IFetchEvent";

function country(label: string, value: string) {
    return { label, value };
}

export default class ComboBoxSampleViewModel extends AtomViewModel {

    public countries = [
        country("India", "IN"),
        country("United States", "US"),
        country("United Kingdom", "UK"),
        country("Australia", "AU"),
        country("Canada", "CA")
    ];

    public search(fe: IFetchEvent): any[] {
        if (fe.cancel && fe.cancel.cancelled) {
            return;
        }
        return this.countries.filter((x) => {
            if (fe.search) {
                return x.label.includes(fe.search) || x.value.includes(fe.search);
            }
            if (fe.value) {
                return x.value === fe.value;
            }
            return true;
        });
    }

}
