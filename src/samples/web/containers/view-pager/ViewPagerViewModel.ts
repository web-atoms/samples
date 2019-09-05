import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import resolveModulePath from "../../../../core/web/resolveModulePath";
import { ModuleFiles } from "../../../../ModuleFiles";
import Page1 from "./Page1";
import Page2 from "./Page2";

declare var require: any;

export class ViewPagerViewModel extends AtomViewModel {

    public pages: any[] = [
        { label: "Page 1", value: resolveModulePath(require, Page1) },
        { label: "Page 2", value: resolveModulePath(require, Page2) }
    ] ;

    @BindableProperty
    public currentPage: string = this.pages[0].value;

}
