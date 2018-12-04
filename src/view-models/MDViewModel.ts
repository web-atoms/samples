import { Atom } from "web-atoms-core/dist/Atom";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { RegisterSingleton } from "web-atoms-core/dist/di/RegisterSingleton";
import { BaseService, Get } from "web-atoms-core/dist/services/http/RestService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";

declare var UMD;

UMD.map("showdown", "https://cdn.jsdelivr.net/npm/showdown@1.9.0/");

@RegisterSingleton
class MDService extends BaseService {

    public async getUrl(url: string): Promise<string> {
        const a = await this.ajax(url, {});
        return a.responseText;
    }

}

export default class MDViewModel extends AtomViewModel {

    public url: string;

    public owner: any;

    @Inject
    public mdService: MDService;

    public async init(): Promise<void> {

        // tslint:disable-next-line:no-string-literal
        const showdown = await UMD.load("showdown/dist/showdown.js");

        const text = await this.mdService.getUrl(this.url);

        const converter = new showdown.Converter();

        this.owner.innerHTML = converter.makeHtml(text);

    }

}
