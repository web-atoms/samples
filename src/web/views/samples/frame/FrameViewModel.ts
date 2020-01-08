import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default class FrameViewModel extends AtomViewModel {

    public url: any = null;

    public openPage1(): void {
        this.url = Page1;
    }

    public openPage2(): void {
        this.url = Page2;
    }

}
