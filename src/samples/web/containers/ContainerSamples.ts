import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import Page1 from "./view-pager/Page1";
import Page2 from "./view-pager/Page2";
import ViewPager from "./view-pager/ViewPager";
import { ViewPagerViewModel } from "./view-pager/ViewPagerViewModel";
import ViewStack from "./view-stack/ViewStack";
import { ViewStackViewModel } from "./view-stack/ViewStackViewModel";

declare var require: any;

export default function addContainerSamples(ms: MenuService) {

    ms.addSamples(require, "Containers", [
        {
            label: "View Pager",
            demo: ViewPager,
            files: [
                asView(ViewPager),
                asClass(ViewPagerViewModel),
                asView(Page1),
                asView(Page2)
            ]
        },
        {
            label: "View Stack",
            demo: ViewStack,
            files: [
                asView(ViewStack),
                asClass(ViewStackViewModel)
            ]
        }
    ]);

}
