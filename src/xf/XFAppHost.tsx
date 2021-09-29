import Pack from "@web-atoms/core/dist/Pack";
import AppHost from "../web/views/AppHost";
import XFAppHostViewModel from "./view-models/XFAppHostViewModel";

@Pack
export default class XFAppHost extends AppHost {

    public createViewModel() {
        this.viewModel = this.resolve(XFAppHostViewModel);
    }

}
