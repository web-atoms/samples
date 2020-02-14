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

        const stackLayout = "@web-atoms/xf-samples/src/samples/layout/multiple-content/stack-layout";
        this.menuService.addSamples(require, "Layouts", [
            {
                label: "Stack Layout",
                // tslint:disable-next-line: max-line-length
                demo: `${stackLayout}/stack-layout.png`,
                files: [
                    `${stackLayout}/StackLayoutView.tsx`
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
