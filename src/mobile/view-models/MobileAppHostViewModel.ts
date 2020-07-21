import { App } from "@web-atoms/core/dist/App";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { addBindingSamples } from "../../samples/web/bindings/BindingSamples";
import { addCalendarSamples } from "../../samples/web/calendar/CalendarSamples";
import addContainerSamples from "../../samples/web/containers/ContainerSamples";
import { addDateFields } from "../../samples/web/date-field/DateFieldSamples";
import { addFormSamples } from "../../samples/web/form/FormSamples";
import addListSamples from "../../samples/web/list/ListSamples";
import addHttpServiceSamples from "../../samples/web/services/http/HttpServices";
import addStyleSamples from "../../samples/web/styles/StyleSamples";
import { addValidationSamples } from "../../samples/web/validations/ValidationSamples";
import addWindowSamples from "../../samples/web/window/WindowSamples";
import MenuService from "../../services/MenuService";
import MDHost from "../../web/views/MDHost";

declare var UMD: any;

export default class MobileAppHostViewModel extends AtomViewModel {

    @Inject public readonly menuService: MenuService;

    @Inject public readonly navigationService: NavigationService;

    public async init(): Promise<any> {
        const ms = this.menuService;
        const home = ms.addGroup("Docs");

        home.addLink("Introduction", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/introduction.md"),
            title: "Introduction"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Getting Started", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/getting-started.md"),
            title: "Getting Started"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Packer", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/packer.md"),
            title: "Packer"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Dependency Injection", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/dependency-injection.md"),
            title: "Dependency Injection"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Localization", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/localization.md"),
            title: "Localization"
        },
        null,
        { target: "root", clearHistory: true});

        home.addLink("Messaging", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/messaging.md"),
            title: "Messaging"
        },
        null,
        { target: "root", clearHistory: true});

        home.addLink("Binding", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/binding.md"),
            title: "Binding"
        },
        null,
        { target: "root", clearHistory: true});
        // home.addLink("Binding Properties", MDHost, {
        //     url: UMD.resolvePath("@web-atoms/samples/docs/general/binding-properties.md"),
        //     title: "Binding"
        // },
        // null,
        // { target: "root", clearHistory: true});
        home.addLink("Ajax", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/ajax.md"),
            title: "Ajax"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Validation", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/validation.md"),
            title: "Validation"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Navigation Service", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/general/navigation-service.md"),
            title: "Navigation Service"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Styles", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/web/styles.md"),
            title: "Styles"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("External Styles", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/web/external-styles.md"),
            title: "External Styles"
        },
        null,
        { target: "root", clearHistory: true});
        home.addLink("Components", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/web/components.md"),
            title: "Components"
        },
        null,
        { target: "root", clearHistory: true});

        const xf = ms.addGroup("Xamarin.Forms");

        xf.addLink("CLR Interop", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/clr-service.md"),
            title: "CLR Interop"
        },
        null,
        { target: "root", clearHistory: true});

        xf.addLink("Attached Properties", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/attached-properties.md"),
            title: "Attached Properties"
        },
        null,
        { target: "root", clearHistory: true});
        xf.addLink("Grid", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/grid.md"),
            title: "Grid Example"
        },
        null,
        { target: "root", clearHistory: true});
        xf.addLink("Toolbar Item", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/toolbar-item.md"),
            title: "Toolbar Item"
        },
        null,
        { target: "root", clearHistory: true});
        xf.addLink("Font Awesome", MDHost, {
            url: UMD.resolvePath("@web-atoms/samples/docs/xf/font-awesome.md"),
            title: "Font Awesome"
        },
        null,
        { target: "root", clearHistory: true});

        addBindingSamples(ms);

        addValidationSamples(ms);

        // const validations = ms.addGroup("Validations");
        // validations.addLink("Simple", samples.validation.SimpleValidation);
        // validations.addLink("Custom", samples.validation.CustomValidation);
        // validations.addLink("Multi VM", samples.validation.multiViewModel.Insurance);

        addHttpServiceSamples(ms);

        addContainerSamples(ms);

        addListSamples(ms);

        addFormSamples(ms);

        addCalendarSamples(ms);

        addDateFields(ms);

        // const containers = ms.addGroup("Containers");
        // containers.addLink("View Pager", samples.viewPager.ViewPager);
        // containers.addLink("View Stack", samples.viewStack.ViewStack);

        addWindowSamples(ms);

        addStyleSamples(ms);

        // const styles = ms.addGroup("Styles");
        // styles.addLink("Panel", samples.styles.Panel);
        // styles.addLink("List Box", samples.styles.ListBox);
        // styles.addLink("External", samples.styles.FontAwesome);

        // const controls = ms.addGroup("Controls");
        // controls.addLink("Combo Box", samples.basicControls.AtomComboBoxSample);
        // controls.addLink("Items Control", samples.basicControls.AtomItemsControlSample);
        // controls.addLink("List Box",  samples.basicControls.AtomListBoxSample);
        // controls.addLink("Toggle Button Bar",  samples.basicControls.AtomToggleButtonBarSample);
        // controls.addLink("Grid View",  samples.basicControls.AtomGridViewSample);
        // controls.addLink("Window",  samples.basicControls.ButtonSample);
        // controls.addLink("Frame",  samples.frame.FrameSample);
    }

}
