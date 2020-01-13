import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import FramePage1 from "./frame/FramePage1";
import FramePage2 from "./frame/FramePage2";
import FrameSample from "./frame/FrameSample";
import FrameViewModel from "./frame/FrameViewModel";
import Start from "./frame/Start";
import GridViewSample from "./grid-view/GridViewSample";
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
            label: "Frame",
            demo: FrameSample,
            files: [
                asView(FrameSample),
                asClass(FrameViewModel),
                asView(Start),
                asView(FramePage1),
                asView(FramePage2)
            ]
        },
        {
            label: "Grid View",
            demo: GridViewSample,
            files: [
                asView(GridViewSample)
            ]
        },
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
