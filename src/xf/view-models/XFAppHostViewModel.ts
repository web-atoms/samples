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
        home.addTabLink("Localization", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/localization.md"),
            title: "Localization"
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
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/styles.md"),
            title: "Styles"
        });
        home.addTabLink("Components", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/components.md"),
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
        xf.addTabLink("Third Party Controls", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/third-party.md"),
            title: "Third Party Controls"
        });
        xf.addTabLink("Font Awesome", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/font-awesome.md"),
            title: "Font Awesome"
        });

        const form = "@web-atoms/xf-samples/src/samples";

        this.menuService.addSamples(require, "Form", [
            {
                label: "Simple Form",
                demo: `${form}/form/simple/simple-form.PNG`,
                files: [
                    `${form}/form/simple/SimpleForm.tsx`,
                    `${form}/form/simple/SimpleFormViewModel.ts`
                ]
            },
            {
                label: "Custom Template",
                demo: `${form}/form/simple/simple-form.PNG`,
                files: [
                    `${form}/form/custom/CustomForm.tsx`,
                    `${form}/form/simple/SimpleFormViewModel.ts`
                ]
            }
        ]);

        this.menuService.addSamples(require, "Form Elements", [
            {
                label: "Label",
                demo: `${form}/label/label.PNG`,
                files: [
                    `${form}/label/LabelView.tsx`,
                    `${form}/label/LabelViewModel.ts`
                ]
            },
            {
                label: "CheckBox",
                demo: `${form}/check-box/check-box.PNG`,
                files: [
                    `${form}/check-box/CheckBoxView.tsx`,
                    `${form}/check-box/CheckBoxSampleViewModel.ts`
                ]
            },
            {
                label: "Entry",
                demo: `${form}/entry/entry.PNG`,
                files: [
                    `${form}/entry/EntryView.tsx`,
                    `${form}/entry/EntryViewModel.ts`
                ]
            },
            {
                label: "Image",
                demo: `${form}/image/image.PNG`,
                files: [
                    `${form}/image/ImageView.tsx`
                ]
            },
            {
                label: "Button",
                demo: `${form}/button/button.PNG`,
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
                demo: `${form}/search-bar/search-bar.PNG`,
                files: [
                    `${form}/search-bar/SearchBarView.tsx`,
                    `${form}/search-bar/SearchBarViewModel.ts`
                ]
            },
            {
                label: "Date Picker",
                demo: `${form}/date-picker/date-picker.PNG`,
                files: [
                    `${form}/date-picker/DatePickerView.tsx`,
                    `${form}/date-picker/DatePickerViewModel.ts`
                ]
            },
            {
                label: "Time Picker",
                demo: `${form}/time-picker/time-picker.PNG`,
                files: [
                    `${form}/time-picker/TimePickerSample.tsx`,
                    `${form}/time-picker/TimePickerViewModel.ts`
                ]
            },
            {
                label: "Slider",
                demo: `${form}/slider/slider.PNG`,
                files: [
                    `${form}/slider/SliderView.tsx`,
                    `${form}/slider/SliderViewModel.ts`
                ]
            },
            {
                label: "Stepper",
                demo: `${form}/stepper/stepper.PNG`,
                files: [
                    `${form}/stepper/StepperView.tsx`,
                    `${form}/stepper/StepperViewModel.ts`
                ]
            }
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
                demo: `${samples}/tabbed-page/tabbed-page.PNG`,
                files: [
                    `${samples}/tabbed-page/TabbedPageVIew.tsx`
                ]
            },
            {
                label: "Carousel Page",
                demo: `${samples}/carousel/carousel-page/carousel-page.PNG`,
                files: [
                    `${samples}/carousel/carousel-page/CarouselPageView.tsx`
                ]
            },
        ]);

        this.menuService.addSamples(require, "View", [
            {
                label: "List View",
                demo: `${samples}/list/list-view/list.PNG`,
                files: [
                    `${samples}/list/list-view/List.tsx`,
                    `${samples}/list/list-view/ListViewModel.ts`
                ]
            },
            {
                label: "List Template Selector",
                demo: `${samples}/list/template-selector/list-with-template.PNG`,
                files: [
                    `${samples}/list/template-selector/ListWithTemplates.tsx`,
                    `${samples}/list/list-view/ListViewModel.ts`
                ]
            },
            {
                label: "Carousel View",
                demo: `${samples}/carousel/carousel-view/carousel-view.PNG`,
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
                demo: `${samples}/web-view/web-view.PNG`,
                files: [
                    `${samples}/web-view/WebView.tsx`
                ]
            },
            {
                label: "Content View",
                demo: `${samples}/layout/single-content/content-view/content-view.PNG`,
                files: [
                    `${samples}/layout/single-content/content-view/ContentView.tsx`
                ]
            }
        ]);

        this.menuService.addSamples(require, "Box View", [
            {
                label: "Box View",
                demo: `${form}/box/box-view.PNG`,
                files: [
                    `${form}/box/BoxView.tsx`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Toggle Button", [
            {
                label: "Toggle Button",
                demo: `${form}/toggle-button-bar/simple/toggle-button-bar.PNG`,
                files: [
                    `${form}/toggle-button-bar/simple/ToggleButtonBar.tsx`,
                    `${form}/toggle-button-bar/simple/ToggleButtonBarViewModel.ts`
                ]
            },
            {
                label: "Custom Toggle Button",
                demo: `${form}/toggle-button-bar/custom/custom-toggle-button-bar.PNG`,
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
                    `${form}/combo-box/ComboBoxSampleViewModel.ts`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Toolbar Item", [
            {
                label: "Toolbar Item",
                demo: `${samples}/toolbar-item/toolbar-item.PNG`,
                files: [
                    `${samples}/toolbar-item/ToolbarItemView.tsx`,
                    `${samples}/toolbar-item/ToolbarItemViewModel.ts`
                ]
            },
        ]);

        this.menuService.addSamples(require, "Menu Item", [
            {
                label: "Menu Item",
                demo: `${form}/menu-item/menu-item.PNG`,
                files: [
                    `${form}/menu-item/MenuItemView.tsx`,
                    `${form}/menu-item/MenuItemViewModel.ts`
                ]
            },
        ]);

        const view = "@web-atoms/xf-samples/src/samples/collection-view";
        this.menuService.addSamples(require, "Collection View", [
            {
                label: "Vertical List",
                demo: `${view}/vertical-list/vertical-list-sample.png`,
                files: [
                    `${view}/vertical-list/VerticalListSample.tsx`,
                    `${view}/vertical-list/VerticalListViewModel.ts`
                ]
            },
            {
                label: "Horizontal List",
                demo: `${view}/horizontal-list/horizontal-list-sample.png`,
                files: [
                    `${view}/horizontal-list/HorizontalListSample.tsx`,
                    `${view}/horizontal-list/HorizontalListViewModel.ts`
                ]
            },
            {
                label: "Vertical Grid",
                demo: `${view}/vertical-grid/vertical-grid-sample.png`,
                files: [
                    `${view}/vertical-grid/VerticalGridSample.tsx`,
                    `${view}/vertical-grid/VerticalGridViewModel.ts`
                ]
            },
            {
                label: "Horizontal Grid",
                demo: `${view}/horizontal-grid/horizontal-grid-sample.png`,
                files: [
                    `${view}/horizontal-grid/HorizontalGridSample.tsx`,
                    `${view}/horizontal-grid/HorizontalGridViewModel.ts`
                ]
            },
            {
                label: "Header Footer",
                demo: `${view}/header-footer/header-footer-sample.PNG`,
                files: [
                    `${view}/header-footer/HeaderFooterSample.tsx`,
                    `${view}/header-footer/HeaderFooterViewModel.ts`
                ]
            },
            {
                label: "Swipe",
                demo: `${view}/swipe/SwipeViewSample.PNG`,
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
