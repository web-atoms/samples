import { Atom } from "@web-atoms/core/dist/Atom";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import { UMD } from "@web-atoms/core/dist/core/types";
import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { BaseService } from "@web-atoms/core/dist/services/http/RestService";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import WebApp from "@web-atoms/core/dist/web/WebApp";

@DISingleton()
class MDService extends BaseService {

    public async getUrl(url: string): Promise<string> {
        const b = this.app.createBusyIndicator();
        try {
            const a = await this.ajax(url, { method: "GET" });
            return a.responseText;
        } finally {
            b.dispose();
        }
    }

}

export default class CodeView extends AtomControl {

    public require: any;

    private mSrc: string = null;
    public get src(): string {
        return this.mSrc;
    }
    public set src(value: string) {
        this.mSrc = value;
        this.app.runAsync(() => this.generate(value));
    }

    protected preCreate(): void {
        this.require = null;
    }

    private async generate(src: string): Promise<void> {
        if (!src) {
            return;
        }

        const last = src;

        await Atom.delay(1);

        if (/^\./.test(src)) {
            src = this.require.resolve(src);
            src = src.replace("/dist/", "/src/");
        }

        const ss = UMD.resolvePath("@web-atoms/samples/scripts/highlight/styles/vs.css");
        const app = this.app as WebApp;
        app.installStyleSheet(ss);

        const highlight = await UMD.import("@web-atoms/samples/scripts/highlight/highlight.pack.js");

        const md = this.app.resolve(MDService) as MDService;

        src = UMD.resolvePath(src);

        const text = await md.getUrl(src);

        if (last !== this.src) {
            return;
        }

        this.removeAllChildren(this.element);
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = text
            .split("\n")
            .map((s) => {
                while (s.endsWith("\r")) {
                    s = s.substr(0, s.length - 1);
                }
                s = s.replace(/\t/g, "   ");
                return s;
            })
            .join("\n");

        const language = this.getLanguage(src);

        pre.classList.add(language);
        pre.classList.add(`language-${language}`);
        pre.appendChild(code);

        highlight.highlightBlock(pre);
        this.element.appendChild(pre);
    }

    private getLanguage(path: string): string {
        if (/\.tsx$/gi.test(path)) {
            return "typescript";
        }
        if (/\.ts$/gi.test(path)) {
            return "typescript";
        }
        if (/\.js$/gi.test(path)) {
            return "javascript";
        }
        if (/\.json$/gi.test(path)) {
            return "json";
        }
        return "plain";
    }

}
