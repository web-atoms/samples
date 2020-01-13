import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { ModuleFiles } from "../../../../ModuleFiles";

export default class FrameViewModel extends AtomViewModel {

    public url: string = null;

    public openPage1(): void {
        this.url = ModuleFiles.views.samples.frame.Page1;
    }

    public openPage2(): void {
        this.url = ModuleFiles.views.samples.frame.Page2;
    }

}
