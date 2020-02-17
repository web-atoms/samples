import { App } from "@web-atoms/core/dist/App";
import { UMD } from "@web-atoms/core/dist/core/types";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import VM from "@web-atoms/xf-samples/dist/samples/form/simple/SimpleFormViewModel";
import { ModuleFiles } from "../../ModuleFiles";
import MenuService from "../../services/MenuService";
import MDHost from "../../web/views/MDHost";

export class A extends VM {}

declare var bridge: any;
declare var require: any;

export default class XFAppHostViewModel extends AtomViewModel {

    @Inject public readonly menuService: MenuService;
    @Inject public readonly navigationService: NavigationService;

    public async init(): Promise<any> {
        const ms = this.menuService;
        const home = ms.addGroup("Docs");

        home.addTabLink("Introduction", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/introduction.md"),
            title: "Introduction"
        });
        home.addTabLink("Getting Started", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/getting-started.md"),
            title: "Getting Started"
        });
        home.addTabLink("Packer", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/packer.md"),
            title: "Packer"
        });
        home.addTabLink("Dependency Injection", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/dependency-injection.md"),
            title: "Dependency Injection"
        });
        home.addTabLink("Messaging", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/messaging.md"),
            title: "Messaging"
        });
        home.addTabLink("Binding", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/binding.md"),
            title: "Binding"
        });
        // home.addTabLink("Binding Properties", MDHost, {
        //     url: UMD.resolvePath("@web-atoms/samples/docs/general/binding-properties.md"),
        //     title: "Binding"
        // });
        home.addTabLink("Ajax", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/ajax.md"),
            title: "Ajax"
        });
        home.addTabLink("Validation", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/validation.md"),
            title: "Validation"
        });
        home.addTabLink("Navigation Service", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/navigation-service.md"),
            title: "Navigation Service"
        });
        home.addTabLink("Styles", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/web/styles.md"),
            title: "Styles"
        });
        home.addTabLink("External Styles", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/web/external-styles.md"),
            title: "External Styles"
        });
        home.addTabLink("Components", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/web/components.md"),
            title: "Components"
        });

        const xf = ms.addGroup("Xamarin.Forms");

        xf.addTabLink("CLR Interop", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/clr-service.md"),
            title: "CLR Interop"
        });

        xf.addTabLink("Attached Properties", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/attached-properties.md"),
            title: "Attached Properties"
        });
        xf.addTabLink("Grid", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/grid.md"),
            title: "Grid Example"
        });
        xf.addTabLink("Toolbar Item", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/toolbar-item.md"),
            title: "Toolbar Item"
        });
        xf.addTabLink("Font Awesome", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/font-awesome.md"),
            title: "Font Awesome"
        });

        const form = "@web-atoms/xf-samples/src/samples";
        this.menuService.addSamples(require, "Form", [
            {
                label: "Label",
                demo: `${form}/label/label.png`,
                files: [
                    `${form}/label/LabelView.tsx`
                ]
            },
            {
                label: "CheckBox",
                demo: `${form}/check-box/check-box.png`,
                files: [
                    `${form}/check-box/CheckBoxView.tsx`,
                    `${form}/check-box/CheckBoxSampleViewModel.tsx`
                ]
            },
            {
                label: "Entry",
                demo: `${form}/entry/entry.png`,
                files: [
                    `${form}/entry/EntryView.tsx`,
                    `${form}/entry/EntryViewModel.tsx`
                ]
            },
            {
                label: "Button",
                demo: `${form}/button/button.png`,
                files: [
                    `${form}/button/ButtonView.tsx`,
                    `${form}/button/ButtonViewModel.tsx`
                ]
            },
            {
                label: "Image Button",
                demo: `${form}/button/image-button/image-button.png`,
                files: [
                    `${form}/button/image-button/ImageButtonView.tsx`,
                    `${form}/button/ButtonViewModel.tsx`
                ]
            },
            {
                label: "Search Bar",
                demo: `${form}/search-bar/search-bar.png`,
                files: [
                    `${form}/search-bar/SearchBarView.tsx`,
                    `${form}/search-bar/SearchBarViewModel.tsx`
                ]
            },
            {
                label: "Date Picker",
                demo: `${form}/date-picker/date-picker.png`,
                files: [
                    `${form}/date-picker/DatePickerView.tsx`,
                    `${form}/date-picker/DatePickerViewModel.tsx`
                ]
            },
            {
                label: "Slider",
                demo: `${form}/slider/slider.png`,
                files: [
                    `${form}/slider/SliderView.tsx`,
                    `${form}/slider/SliderViewModel.tsx`
                ]
            },
            {
                label: "Stepper",
                demo: `${form}/stepper/stepper.png`,
                files: [
                    `${form}/stepper/StepperView.tsx`,
                    `${form}/stepper/StepperViewModel.tsx`
                ]
            },
        ]);

        const layout = "@web-atoms/xf-samples/src/samples/layout/multiple-content";
        this.menuService.addSamples(require, "Layouts", [
            {
                label: "Stack Layout",
                demo: `${layout}/stack-layout/stack-layout.png`,
                files: [
                    `${layout}/stack-layout/StackLayoutView.tsx`
                ]
            },
            {
                label: "Absolute Layout",
                demo: `${layout}/absolute-layout/absolute-layout.png`,
                files: [
                    `${layout}/absolute-layout/AbsoluteLayoutView.tsx`
                ]
            },
            {
                label: "Flex Layout",
                demo: `${layout}/flex-layout/flex-layout.png`,
                files: [
                    `${layout}/flex-layout/FlexLayoutView.tsx`
                ]
            },
            {
                label: "Grid Layout",
                demo: `${layout}/grid-layout/grid-layout.png`,
                files: [
                    `${layout}/grid-layout/GridLayoutView.tsx`
                ]
            },
        ]);

        const view = "@web-atoms/xf-samples/src/samples/collection-view";
        this.menuService.addSamples(require, "Collection View", [
            {
                label: "Vertical List",
                demo: `${view}/vertical-list/vertical-list.png`,
                files: [
                    `${view}/vertical-list/VerticalListSample.tsx`
                ]
            },
            {
                label: "Horizontal List",
                demo: `${view}/horizontal-list/horizontal-list.png`,
                files: [
                    `${view}/horizontal-list/HorizontalListSample.tsx`
                ]
            },
            {
                label: "Vertical Grid",
                demo: `${view}/vertical-grid/vertical-grid.png`,
                files: [
                    `${view}/vertical-grid/VerticalGridSample.tsx`
                ]
            },
            {
                label: "Horizontal Grid",
                demo: `${view}/horizontal-grid/horizontal-grid.png`,
                files: [
                    `${view}/horizontal-grid/HorizontalGridSample.tsx`
                ]
            },
            {
                label: "Header Footer",
                demo: `${view}/header-footer/header-footer.png`,
                files: [
                    `${view}/header-footer/HeaderFooterSample.tsx`
                ]
            },
            {
                label: "Swipe",
                demo: `${view}/swipe/swipe.png`,
                files: [
                    `${view}/swipe/SwipeCollectionViewSample.tsx`
                ]
            }
        ]);

        this.app.callLater(async () => {
            await this.navigationService.openPage(MDHost, {
                url: UMD.resolvePath("@web-atoms/samples/docs/general/introduction.md"),
                title: "Introduction"
            }, {
                target: "app"
            });
        });
    }

    public openGithub(): void {
        bridge.urlService.open("https://github.com/neurospeech/web-atoms-core");
    }
}
