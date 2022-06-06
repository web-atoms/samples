import { App } from "@web-atoms/core/dist/App";
import { AtomList } from "@web-atoms/core/dist/core/AtomList";
import { INameValuePairs, UMD } from "@web-atoms/core/dist/core/types";
import { IPageOptions } from "@web-atoms/core/dist/services/NavigationService";
import FileViewer from "../core/web/FileViewer";
import ImageView from "../core/web/ImageView";
import resolveModulePath from "../core/web/resolveModulePath";
import MenuService from "../services/MenuService";
import { isControl } from "@web-atoms/core/dist/core/XNode";

export type IType = string | {
    class: any;
    extension: string;
};

export function asView(a: any): IType {
    return {
        class: a,
        extension: ".tsx"
    };
}

export function asClass(a: any): IType {
    return {
        class: a,
        extension: ".ts"
    };
}

export default class MenuItem {
    public static selectedMenu: MenuItem;

    public enabled: boolean;

    public expand: boolean;

    public isGroup: boolean = false;

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
        this.menuService.isOpen = true;
        const r = this.action(this);
        if (this.children.length <= 0) {
            MenuItem.selectedMenu = this;
        }
        this.menuService.isOpen = false;
        return r;
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

    public addLink(
        label: string,
        pageSrc: string | any,
        pageParameters?: INameValuePairs,
        icon?: string,
        options?: IPageOptions): MenuItem {
        const m = this.menuService.createLink(label, pageSrc, pageParameters, icon, options);
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
        designMode: boolean = true,
        icon?: string): MenuItem {
        const require = this.require;

        const fs = files.map((f) => {
            if (typeof f === "object" && f.class) {
                const path = resolveModulePath(require, f.class);
                return path.replace("/dist/", "/src/") + f.extension;
            }
            return f.toString();
        });

        if (!demo[isControl]) {
            const src = UMD.resolvePath(demo);
            demo = class ImageViewEx extends ImageView {
                public create() {
                    this.image = src;
                    super.create();
                }
            };
        }

        const c = class CFV extends FileViewer {
            public create(): void {
                this.designMode = designMode;
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
