import { App } from "web-atoms-core/bin/App";
import { AtomList } from "web-atoms-core/bin/core/AtomList";
import { INameValuePairs } from "web-atoms-core/bin/core/types";
import MenuService from "../services/MenuService";
export default class MenuItem {
    readonly app: App;
    readonly menuService: MenuService;
    enabled: boolean;
    expand: boolean;
    label: string;
    icon: string;
    children: AtomList<MenuItem>;
    action: (menuItem: MenuItem) => any;
    constructor(app: App, menuService: MenuService);
    click(): any;
    add(label: string, action: () => any, icon?: string): MenuItem;
    addGroup(label: string, icon?: string): MenuItem;
    addLink(label: string, pageSrc: string, pageParameters?: INameValuePairs, icon?: string): MenuItem;
}
