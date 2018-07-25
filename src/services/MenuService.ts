import { App } from "web-atoms-core/dist/App";
import { AtomList } from "web-atoms-core/dist/core/AtomList";
import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { INameValuePairs } from "web-atoms-core/dist/core/types";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { RegisterSingleton } from "web-atoms-core/dist/di/RegisterSingleton";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import MenuItem from "../models/MenuItem";

@RegisterSingleton
export default class MenuService {

    @BindableProperty
    public menus: AtomList<MenuItem>;

    constructor(
        @Inject public readonly app: App
    ) {
        this.menus = new AtomList();
    }

    public add(label: string, action: () => any, icon?: string): MenuItem {
        const m = this.create(label, action, icon);
        this.menus.add(m);
        return m;
    }

    public addGroup(label: string, icon?: string): MenuItem {
        const m = this.createGroup(label, icon);
        this.menus.add(m);
        return m;
    }

    public addLink(label: string, pageSrc: string, pageParameters?: INameValuePairs, icon?: string): MenuItem {
        const m = this.createLink(label, pageSrc, pageParameters, icon);
        this.menus.add(m);
        return m;
    }

    public createLink(label: string, pageSrc: string, pageParameters?: INameValuePairs, icon?: string): MenuItem {
        const nav: NavigationService = this.app.resolve(NavigationService);
        const p = pageParameters || {};
        p.title = p.title || label;
        const m = this.create(label, () => nav.openPage(pageSrc, p), icon);
        return m;
    }

    public createGroup(label: string, icon?: string): MenuItem {
        return this.create(label, (m) => m.expand = !m.expand, icon);
    }

    public create(label: string, action: (m: MenuItem) => any, icon?: string): MenuItem {
        const menu = new MenuItem(this.app, this);
        menu.label = label;
        menu.action = action;
        if (menu.icon) {
            menu.icon = icon;
        }
        return menu;
    }
}
