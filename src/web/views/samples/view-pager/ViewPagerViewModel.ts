import { BindableProperty } from "web-atoms-core/bin/core/BindableProperty";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
import { ModuleFiles } from "../../../../ModuleFiles";

export class ViewPagerViewModel extends AtomViewModel {

    public pages: any[] = [
        { label: "Page 1", value: ModuleFiles.views.samples.viewPager.Page1 },
        { label: "Page 2", value: ModuleFiles.views.samples.viewPager.Page2 }
    ] ;

    @BindableProperty
    public currentPage: string = this.pages[0].value;

}
