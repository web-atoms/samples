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
                    `${form}/label/LabelView.tsx`,
                    `${form}/label/LabelViewModel.ts`
                ]
            },
            {
                label: "CheckBox",
                demo: `${form}/check-box/check-box.png`,
                files: [
                    `${form}/check-box/CheckBoxView.tsx`,
                    `${form}/check-box/CheckBoxSampleViewModel.ts`
                ]
            },
            {
                label: "Entry",
                demo: `${form}/entry/entry.png`,
                files: [
                    `${form}/entry/EntryView.tsx`,
                    `${form}/entry/EntryViewModel.ts`
                ]
            },
            {
                label: "Image",
                demo: `${form}/image/image.png`,
                files: [
                    `${form}/image/ImageView.tsx`
                ]
            },
            {
                label: "Button",
                demo: `${form}/button/button.png`,
                files: [
                    `${form}/button/ButtonView.tsx`,
                    `${form}/button/ButtonViewModel.ts`
                ]
            },
            {
                label: "Image Button",
                demo: `${form}/button/image-button/image-button.png`,
                files: [
                    `${form}/button/image-button/ImageButtonView.tsx`,
                    `${form}/button/ButtonViewModel.ts`
                ]
            },
            {
                label: "Search Bar",
                demo: `${form}/search-bar/search-bar.png`,
                files: [
                    `${form}/search-bar/SearchBarView.tsx`,
                    `${form}/search-bar/SearchBarViewModel.ts`
                ]
            },
            {
                label: "Date Picker",
                demo: `${form}/date-picker/date-picker.png`,
                files: [
                    `${form}/date-picker/DatePickerView.tsx`,
                    `${form}/date-picker/DatePickerViewModel.ts`
                ]
            },
            {
                label: "Slider",
                demo: `${form}/slider/slider.png`,
                files: [
                    `${form}/slider/SliderView.tsx`,
                    `${form}/slider/SliderViewModel.ts`
                ]
            },
            {
                label: "Stepper",
                demo: `${form}/stepper/stepper.png`,
                files: [
                    `${form}/stepper/StepperView.tsx`,
                    `${form}/stepper/StepperViewModel.ts`
                ]
            },
            {
                label: "Simple Form",
                demo: `${form}/form/simple/simple-form.png`,
                files: [
                    `${form}/form/simple/SimpleForm.tsx`,
                    `${form}/form/simple/SimpleFormViewModel.ts`
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
                    `${layout}/grid-layout/GridView.tsx`
                ]
            },
        ]);

        const samples = "@web-atoms/xf-samples/src/samples";
        this.menuService.addSamples(require, "Pages", [
            {
                label: "Tabbed Page",
                demo: `${samples}/tabbed-page/tabbed-page.png`,
                files: [
                    `${samples}/tabbed-page/TabbedPageView.tsx`
                ]
            },
            {
                label: "Carousel Page",
                demo: `${samples}/carousel/carousel-page/carousel-page.png`,
                files: [
                    `${samples}/carousel/carousel-page/CarouselPageView.tsx`
                ]
            },
        ]);

        this.menuService.addSamples(require, "View", [
            {
                label: "List View",
                demo: `${samples}/list/list-view/list.png`,
                files: [
                    `${samples}/list/list-view/List.tsx`,
                    `${samples}/list/list-view/ListViewModel.ts`
                ]
            },
            {
                label: "List Template Selector",
                demo: `${samples}/list/template-selector/list-with-template.png`,
                files: [
                    `${samples}/list/template-selector/ListWithTemplates.tsx`,
                    `${samples}/list/list-view/ListViewModel.ts`
                ]
            },
            {
                label: "Carousel View",
                demo: `${samples}/carousel/carousel-view/carousel-page.png`,
                files: [
                    `${samples}/carousel/carousel-view/CarouselView.tsx`,
                    `${samples}/carousel/carousel-view/CarouselViewModel.ts`
                ]
            },
            {
                label: "Refresh View",
                demo: `${samples}/refresh-view/refresh-view.png`,
                files: [
                    `${samples}/refresh-view/RefreshView.tsx`,
                    `${samples}/refresh-view/RefreshViewModel.ts`
                ]
            },
            {
                label: "Web View",
                demo: `${samples}/web-view/web-view.png`,
                files: [
                    `${samples}/web-view/WebView.tsx`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Box View", [
            {
                label: "Box View",
                demo: `${form}/box/BoxView.png`,
                files: [
                    `${form}/box/BoxView.tsx`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Toggle Button", [
            {
                label: "Toggle Button",
                demo: `${form}/toggle-button-bar/simple/toggle-button-bar.png`,
                files: [
                    `${form}/toggle-button-bar/simple/ToggleButtonBar.tsx`,
                    `${form}/toggle-button-bar/simple/ToggleButtonBarViewModel.ts`
                ]
            },
            {
                label: "Custom Toggle Button",
                demo: `${form}/toggle-button-bar/custom/custom-toggle-button-bar.png`,
                files: [
                    `${form}/toggle-button-bar/custom/CustomToggleButtonBar.tsx`,
                    `${form}/toggle-button-bar/simple/ToggleButtonBarViewModel.ts`
                ]
            },
        ]);

        this.menuService.addSamples(require, "ComboBox", [
            {
                label: "ComboBox",
                demo: `${form}/combo-box/combo-box.png`,
                files: [
                    `${form}/combo-box/ComboBoxSample.tsx`,
                    `${form}/toggle-button-bar/simple/ToggleButtonBarViewModel.ts`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Toolbar Item", [
            {
                label: "Toolbar Item",
                demo: `${samples}/toolbar-item/toolbar-item.png`,
                files: [
                    `${samples}/toolbar-item/ToolbarItemView.tsx`,
                    `${samples}/toolbar-item/ToolbarItemViewModel.ts`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Menu Item", [
            {
                label: "Menu Item",
                demo: `${form}/menu-item/menu-item.png`,
                files: [
                    `${form}/menu-item/MenuItemView.tsx`,
                    `${form}/menu-item/MenuItemViewModel.ts`
                ]
            },
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
