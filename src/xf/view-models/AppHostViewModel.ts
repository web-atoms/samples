import { App } from "web-atoms-core/dist/App";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import { ModuleFiles } from "../../ModuleFiles";
import MenuService from "../../services/MenuService";

declare var bridge: any;

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
        const home = ms.addGroup("Home");
        home.addTabLink("Home", ModuleFiles.views.Start);

        const binding = ms.addGroup("Binding");
        binding.addTabLink("Bindings", ModuleFiles.views.samples.bindings.Binding);

        const services = ms.addGroup("Services");
        services.addTabLink("Http", ModuleFiles.views.samples.http.Movies);

        const containers = ms.addGroup("Containers");
        containers.addTabLink("View Pager", ModuleFiles.views.samples.viewPager.ViewPager);
        containers.addTabLink("View Stack", ModuleFiles.views.samples.viewStack.ViewStack);

        const a = this.navigationService.location.query.platform;
        // tslint:disable-next-line:no-console
        console.log(`platform = ${a};`);
    }

    public openGithub(): void {
        bridge.urlService.open("https://github.com/neurospeech/web-atoms-core");
    }
}
