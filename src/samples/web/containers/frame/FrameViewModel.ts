import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import FramePage1 from "./FramePage1";
import FramePage2 from "./FramePage2";
import Start from "./Start";

declare var require: any;

export default class FrameViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public async init(): Promise<void> {
        this.back();
    }

    public back(): void {
        this.app.runAsync(() => this.navigationService.openPage(Start, null, {
            target: "sample"
        }));
    }

    /**
     * runAsync is necessary because Promise will block for the event handler, same event handler
     * will not invoke unless previous promise was either rejected or finished.
     *
     * You can create event handler that returns a Promise, rejection will be handled and reported in console
     */
    public async openPage1(): Promise<void> {
        this.app.runAsync(() =>
            this.navigationService.openPage(FramePage1, null, {
                // target is the name of AtomFrame
                target: "sample"
            }));
    }

    public async openPage2(): Promise<void> {
        this.app.runAsync(() =>
            this.navigationService.openPage(FramePage2, null, {
                // target is the name of AtomFrame
                target: "sample"
            }));
    }
}
