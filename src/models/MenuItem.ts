import { App } from "web-atoms-core/dist/App";
import { AtomList } from "web-atoms-core/dist/core/AtomList";
import { INameValuePairs } from "web-atoms-core/dist/core/types";
import FileViewer from "../core/web/FileViewer";
import resolveModulePath from "../core/web/resolveModulePath";
import MenuService from "../services/MenuService";

export interface IType {
    class: any;
    extension: string;
}

export function asView(a: any): IType {
    return {
        class: a,
        extension: ".html"
    };
}

export function asClass(a: any): IType {
    return {
        class: a,
        extension: ".ts"
    };
}

export default class MenuItem {

    public enabled: boolean;

    public expand: boolean;

    public label: string;

    public icon: string;

    public children: AtomList<MenuItem>;

    public action: (menuItem: MenuItem) => any;

    public require: any = null;

    constructor(
        public readonly app: App,
        public readonly menuService: MenuService
    ) {
        this.enabled = true;
        this.children = new AtomList();
    }

    public click(): any {
        return this.action(this);
    }

    public add(label: string, action: () => any, icon?: string): MenuItem {
        const m = this.menuService.create(label, action, icon);
        this.children.add(m);
        return m;
    }

    public addGroup(
        label: string,
        icon?: string,
        require?: any): MenuItem {
        const m = this.menuService.createGroup(label, icon);
        m.require = require;
        this.children.add(m);
        return m;
    }

    public addLink(label: string, pageSrc: string, pageParameters?: INameValuePairs, icon?: string): MenuItem {
        const m = this.menuService.createLink(label, pageSrc, pageParameters, icon);
        this.children.add(m);
        return m;
    }

    public addTabLink(
        label: string,
        pageSrc: string | any,
        pageParameters?: INameValuePairs,
        icon?: string): MenuItem {
        const m = this.menuService.createLink(label, pageSrc, pageParameters, icon, { target: "app" });
        this.children.add(m);
        return m;
    }

    public addSample(
        label: string,
        demo: any,
        files: IType[],
        icon?: string): MenuItem {
        const require = this.require;

        const fs = files.map((f) => {
            const path = resolveModulePath(require, f.class);
            return path.replace("/dist/", "/src/") + f.extension;
        });

        const c = class CFV extends FileViewer {
            public create(): void {
                super.create();
                this.require = require;
                this.files = fs;
                this.demo = demo;
            }
        };

        const m = this.menuService.createLink(label, c, null, icon, { target: "app" });
        this.children.add(m);
        return m;
    }

}
