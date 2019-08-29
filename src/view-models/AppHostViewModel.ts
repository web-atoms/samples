import { App } from "web-atoms-core/dist/App";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import { ModuleFiles } from "../ModuleFiles";
import { addCalendarSamples } from "../samples/web/calendar/CalendarSamples";
import { addDateFields } from "../samples/web/date-field/DateFieldSamples";
import { addFormSamples } from "../samples/web/form/FormSamples";
import MenuService from "../services/MenuService";
import { addBindingSamples } from "../samples/web/bindings/BindingSamples";

declare var UMD: any;

export default class AppHostViewModel extends AtomViewModel {

    @Inject public readonly menuService: MenuService;

    @Inject public readonly navigationService: NavigationService;

    public async init(): Promise<any> {
        const ms = this.menuService;
        const home = ms.addGroup("Docs");

        home.addTabLink("Introduction", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/introduction.md"),
            title: "Introduction"
        });
        home.addTabLink("Packer", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/packer.md"),
            title: "Packer"
        });
        home.addTabLink("Dependency Injection", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/dependency-injection.md"),
            title: "Dependency Injection"
        });
        home.addTabLink("Messaging", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/messaging.md"),
            title: "Messaging"
        });
        home.addTabLink("Binding", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/binding.md"),
            title: "Binding"
        });
        // home.addTabLink("Binding Properties", ModuleFiles.views.MDHost, {
        //     url: UMD.resolvePath("web-atoms-samples/docs/general/binding-properties.md"),
        //     title: "Binding"
        // });
        home.addTabLink("Ajax", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/ajax.md"),
            title: "Ajax"
        });
        home.addTabLink("Validation", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/validation.md"),
            title: "Validation"
        });
        home.addTabLink("Navigation Service", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/navigation-service.md"),
            title: "Navigation Service"
        });
        home.addTabLink("Styles", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/web/styles.md"),
            title: "Styles"
        });
        home.addTabLink("External Styles", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/web/external-styles.md"),
            title: "External Styles"
        });
        home.addTabLink("Components", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/web/components.md"),
            title: "Components"
        });

        addBindingSamples(ms);

        const validations = ms.addGroup("Validations");
        validations.addTabLink("Simple", ModuleFiles.views.samples.validation.SimpleValidation);
        validations.addTabLink("Custom", ModuleFiles.views.samples.validation.CustomValidation);
        validations.addTabLink("Multi VM", ModuleFiles.views.samples.validation.multiViewModel.Insurance);

        const services = ms.addGroup("Services");
        services.addTabLink("Http", ModuleFiles.views.samples.http.Movies);

        addCalendarSamples(ms);

        addDateFields(ms);

        const containers = ms.addGroup("Containers");
        containers.addTabLink("View Pager", ModuleFiles.views.samples.viewPager.ViewPager);
        containers.addTabLink("View Stack", ModuleFiles.views.samples.viewStack.ViewStack);

        addFormSamples(ms);

        const styles = ms.addGroup("Styles");
        styles.addTabLink("Panel", ModuleFiles.views.samples.styles.Panel);
        styles.addTabLink("List Box", ModuleFiles.views.samples.styles.ListBox);
        styles.addTabLink("External", ModuleFiles.views.samples.styles.FontAwesome);

        const controls = ms.addGroup("Controls");
        controls.addTabLink("Combo Box", ModuleFiles.views.samples.basicControls.AtomComboBoxSample);
        controls.addTabLink("Items Control", ModuleFiles.views.samples.basicControls.AtomItemsControlSample);
        controls.addTabLink("List Box",  ModuleFiles.views.samples.basicControls.AtomListBoxSample);
        controls.addTabLink("Toggle Button Bar",  ModuleFiles.views.samples.basicControls.AtomToggleButtonBarSample);
        controls.addTabLink("Grid View",  ModuleFiles.views.samples.basicControls.AtomGridViewSample);
        controls.addTabLink("Window",  ModuleFiles.views.samples.basicControls.ButtonSample);
        controls.addTabLink("Frame",  ModuleFiles.views.samples.frame.FrameSample);

        this.app.callLater(async () => {
            await this.navigationService.openPage(`tab://app/${ModuleFiles.views.MDHost}`, {
                url: UMD.resolvePath("web-atoms-samples/docs/general/introduction.md"),
                title: "Introduction"
            });
        });
    }

}
