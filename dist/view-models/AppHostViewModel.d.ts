import { App } from "web-atoms-core/dist/App";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import MenuService from "../services/MenuService";
export declare class AppHostViewModel extends AtomViewModel {
    readonly menuService: MenuService;
    readonly navigationService: NavigationService;
    constructor(app: App, menuService: MenuService, navigationService: NavigationService);
    init(): Promise<any>;
}
