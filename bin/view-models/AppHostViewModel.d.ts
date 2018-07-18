import { App } from "web-atoms-core/bin/App";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
import MenuService from "../services/MenuService";
export declare class AppHostViewModel extends AtomViewModel {
    readonly menuService: MenuService;
    constructor(app: App, menuService: MenuService);
    init(): Promise<any>;
}
