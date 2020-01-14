import { App } from "@web-atoms/core/dist/App";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { addBindingSamples } from "../samples/web/bindings/BindingSamples";
import { addCalendarSamples } from "../samples/web/calendar/CalendarSamples";
import addContainerSamples from "../samples/web/containers/ContainerSamples";
import { addDateFields } from "../samples/web/date-field/DateFieldSamples";
import { addFormSamples } from "../samples/web/form/FormSamples";
import addListSamples from "../samples/web/list/ListSamples";
import addHttpServiceSamples from "../samples/web/services/http/HttpServices";
import addStyleSamples from "../samples/web/styles/StyleSamples";
import { addValidationSamples } from "../samples/web/validations/ValidationSamples";
import addWindowSamples from "../samples/web/window/WindowSamples";
import MenuService from "../services/MenuService";
import MDHost from "../web/views/MDHost";

declare var UMD: any;

export default class AppHostViewModel extends AtomViewModel {

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

        addBindingSamples(ms);

        addValidationSamples(ms);

        // const validations = ms.addGroup("Validations");
        // validations.addTabLink("Simple", samples.validation.SimpleValidation);
        // validations.addTabLink("Custom", samples.validation.CustomValidation);
        // validations.addTabLink("Multi VM", samples.validation.multiViewModel.Insurance);

        addHttpServiceSamples(ms);

        addContainerSamples(ms);

        addListSamples(ms);

        addFormSamples(ms);

        addCalendarSamples(ms);

        addDateFields(ms);

        // const containers = ms.addGroup("Containers");
        // containers.addTabLink("View Pager", samples.viewPager.ViewPager);
        // containers.addTabLink("View Stack", samples.viewStack.ViewStack);

        addWindowSamples(ms);

        addStyleSamples(ms);

        // const styles = ms.addGroup("Styles");
        // styles.addTabLink("Panel", samples.styles.Panel);
        // styles.addTabLink("List Box", samples.styles.ListBox);
        // styles.addTabLink("External", samples.styles.FontAwesome);

        // const controls = ms.addGroup("Controls");
        // controls.addTabLink("Combo Box", samples.basicControls.AtomComboBoxSample);
        // controls.addTabLink("Items Control", samples.basicControls.AtomItemsControlSample);
        // controls.addTabLink("List Box",  samples.basicControls.AtomListBoxSample);
        // controls.addTabLink("Toggle Button Bar",  samples.basicControls.AtomToggleButtonBarSample);
        // controls.addTabLink("Grid View",  samples.basicControls.AtomGridViewSample);
        // controls.addTabLink("Window",  samples.basicControls.ButtonSample);
        // controls.addTabLink("Frame",  samples.frame.FrameSample);

        this.app.callLater(async () => {
            await this.navigationService.openPage(MDHost, {
                url: UMD.resolvePath("@web-atoms/samples/docs/general/introduction.md"),
                title: "Introduction"
            }, {
                target: "app"
            });
        });
    }

}
