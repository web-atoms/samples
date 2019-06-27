import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { UMD } from "web-atoms-core/dist/core/types";
import DISingleton from "web-atoms-core/dist/di/DISingleton";
import { BaseService } from "web-atoms-core/dist/services/http/RestService";
import { AtomControl } from "web-atoms-core/dist/web/controls/AtomControl";

@DISingleton()
class MDService extends BaseService {

    public async getUrl(url: string): Promise<string> {
        const a = await this.ajax(url, { method: "GET" });
        return a.responseText;
    }

}

export default class CodeView extends AtomControl {

    private mSrc: string = null;
    public get src(): string {
        return this.mSrc;
    }
    public set src(value: string) {
        this.mSrc = value;
        this.app.runAsync(() => this.generate(value));
    }

    private async generate(src: string): Promise<void> {
        this.removeAllChildren(this.element);
        const highlight = await UMD.import("web-atoms-samples/scripts/highlight/highlight.pack.js");

        const md = this.app.resolve(MDService) as MDService;

        src = UMD.resolvePath(src);

        const text = await md.getUrl(src);

        const e = document.createElement("code");
        e.innerText = text;

        this.element.appendChild(e);

        highlight.highlightBlock(e);
    }

}
