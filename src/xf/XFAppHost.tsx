import AppHost from "../web/views/AppHost";
import XFAppHostViewModel from "./view-models/XFAppHostViewModel";

// @web-atoms-pack: true
/** XF Samples */
export default class XFAppHost extends AppHost {

    public createViewModel() {
        this.viewModel = this.resolve(XFAppHostViewModel);
    }

}
