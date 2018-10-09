import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import { IConfigItem } from "../../models/IConfigItem";

export default class AtomToggleButtonBarSampleViewModel extends AtomViewModel {

    @BindableProperty
    public genderList: IConfigItem[] = [
        {
            label: "Male",
            value: "Male"
        },
        {
            label: "Female",
            value: "Female"
        },
        {
            label: "Others",
            value: "Others"
        }];

    @BindableProperty
    public gender: string = "Male";

}
