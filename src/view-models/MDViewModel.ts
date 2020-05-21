import { Atom } from "@web-atoms/core/dist/Atom";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { RegisterSingleton } from "@web-atoms/core/dist/di/RegisterSingleton";
import { BaseService, Get } from "@web-atoms/core/dist/services/http/RestService";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

declare var UMD;

UMD.map("showdown", "https://cdn.jsdelivr.net/npm/showdown@1.9.0/");

let styleSheetAdded: boolean = false;

@RegisterSingleton
class MDService extends BaseService {

    public async getUrl(url: string): Promise<string> {
        const a = await this.ajax(url, { method: "GET" });
        return a.responseText;
    }

}

export default class MDViewModel extends AtomViewModel {

    public url: string;

    public owner: any;

    public headers: any[] = [];

    @Inject
    private mdService: MDService;

    public async init(): Promise<void> {

        if (!styleSheetAdded) {
            styleSheetAdded = true;
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = UMD.resolvePath("@web-atoms/samples/scripts/highlight/styles/light.css");
            document.head.appendChild(link);
        }

        // tslint:disable-next-line:no-string-literal
        const showdown = await UMD.import("showdown/dist/showdown.js");

        const text = await this.mdService.getUrl(this.url);

        const converter = new showdown.Converter();

        const element = this.owner.element as HTMLElement;

        const mdRoot = (element?.firstElementChild?.firstElementChild) as HTMLElement;

        if (!mdRoot) {
            return;
        }

        const md = document.createElement("div");

        md.innerHTML = converter.makeHtml(text);
        md.style.width = "100%";
        md.style.height = "100%";
        md.className = "page";

        mdRoot.appendChild(md);

        setTimeout(() => {
            this.findHeader(md);
        }, 100);

        const highlight = await UMD.import("@web-atoms/samples/scripts/highlight/highlight.pack.js");

        const all = document.querySelectorAll("pre > code");
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < all.length; index++) {
            const e = all[index];
            highlight.highlightBlock(e);
        }

    }

    public show(h: any): void {
        const e = h.value as HTMLHeadingElement;
        e.scrollIntoView();
    }

    private findHeader(e: HTMLElement): void {
        if (!e) {
            return;
        }
        let ce = e.firstElementChild as HTMLElement;
        while (ce) {
            if ( /h[0-9]/i.test(ce.tagName)) {
                this.headers.add({
                    label: (ce as HTMLHeadingElement ).innerText,
                    pad: parseFloat(ce.tagName.substr(1)) * 5,
                    value: ce
                });
            }
            this.findHeader(ce);
            ce = ce.nextElementSibling as HTMLElement;
        }
    }

}
