import AppHost from "../web/views/AppHost";
import XFAppHostViewModel from "./view-models/XFAppHostViewModel";

export default class XFAppHost extends AppHost {

    public createViewModel() {
        this.viewModel = this.resolve(XFAppHostViewModel);
    }

}
