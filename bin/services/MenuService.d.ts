import { App } from "web-atoms-core/bin/App";
import { AtomList } from "web-atoms-core/bin/core/AtomList";
import { INameValuePairs } from "web-atoms-core/bin/core/types";
import MenuItem from "../models/MenuItem";
export default class MenuService {
    readonly app: App;
    menus: AtomList<MenuItem>;
    constructor(app: App);
    add(label: string, action: () => any, icon?: string): MenuItem;
    addGroup(label: string, icon?: string): MenuItem;
    addLink(label: string, pageSrc: string, pageParameters?: INameValuePairs, icon?: string): MenuItem;
    createLink(label: string, pageSrc: string, pageParameters?: INameValuePairs, icon?: string): MenuItem;
    createGroup(label: string, icon?: string): MenuItem;
    create(label: string, action: (m: MenuItem) => any, icon?: string): MenuItem;
}
