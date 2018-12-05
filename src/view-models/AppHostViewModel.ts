import { App } from "web-atoms-core/dist/App";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import { ModuleFiles } from "../ModuleFiles";
import MenuService from "../services/MenuService";

declare var UMD: any;

export default class AppHostViewModel extends AtomViewModel {

    constructor(
        @Inject app: App,
        @Inject public readonly menuService: MenuService,
        @Inject public readonly navigationService: NavigationService
    ) {
        super(app);
    }

    public async init(): Promise<any> {
        const ms = this.menuService;
        const home = ms.addGroup("Docs");

        home.addTabLink("Introduction", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/introduction.md"),
            title: "Introduction"
        });
        home.addTabLink("Dependency Injection", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/dependency-injection.md"),
            title: "Dependency Injection"
        });
        home.addTabLink("Binding", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/binding.md"),
            title: "Binding"
        });
        home.addTabLink("Ajax", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/ajax.md"),
            title: "Ajax"
        });
        home.addTabLink("Validation", ModuleFiles.views.MDHost, {
            url: UMD.resolvePath("web-atoms-samples/docs/general/validation.md"),
            title: "Validation"
        });

        const binding = ms.addGroup("Binding");
        binding.addTabLink("Bindings", ModuleFiles.views.samples.bindings.Binding);

        const validations = ms.addGroup("Validations");
        validations.addTabLink("Simple", ModuleFiles.views.samples.validation.SimpleValidation);
        validations.addTabLink("Custom", ModuleFiles.views.samples.validation.CustomValidation);
        validations.addTabLink("Multi VM", ModuleFiles.views.samples.validation.multiViewModel.Insurance);

        const services = ms.addGroup("Services");
        services.addTabLink("Http", ModuleFiles.views.samples.http.Movies);

        const containers = ms.addGroup("Containers");
        containers.addTabLink("View Pager", ModuleFiles.views.samples.viewPager.ViewPager);
        containers.addTabLink("View Stack", ModuleFiles.views.samples.viewStack.ViewStack);

        const styles = ms.addGroup("Styles");
        styles.addTabLink("Panel", ModuleFiles.views.samples.styles.Panel);
        styles.addTabLink("List Box", ModuleFiles.views.samples.styles.ListBox);

        const controls = ms.addGroup("Controls");
        controls.addTabLink("Combo Box", ModuleFiles.views.samples.basicControls.AtomComboBoxSample);
        controls.addTabLink("Items Control", ModuleFiles.views.samples.basicControls.AtomItemsControlSample);
        controls.addTabLink("List Box",  ModuleFiles.views.samples.basicControls.AtomListBoxSample);
        controls.addTabLink("Toggle Button Bar",  ModuleFiles.views.samples.basicControls.AtomToggleButtonBarSample);
        controls.addTabLink("Grid View",  ModuleFiles.views.samples.basicControls.AtomGridViewSample);
        controls.addTabLink("Window",  ModuleFiles.views.samples.basicControls.ButtonSample);

        this.app.callLater(async () => {
            await this.navigationService.openPage(`tab://app/${ModuleFiles.views.MDHost}`, {
                url: UMD.resolvePath("web-atoms-samples/docs/general/introduction.md"),
                title: "Introduction"
            });
        });
    }
}
