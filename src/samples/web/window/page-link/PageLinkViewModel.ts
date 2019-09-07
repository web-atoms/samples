import { Inject } from "web-atoms-core/dist/di/Inject";
import { JsonService } from "web-atoms-core/dist/services/JsonService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import { IMovie } from "../../services/http/simple/MovieService";

export default class PageLinkViewModel extends AtomViewModel {

    public result: any;

    public error: any;

    @Inject
    private jsonService: JsonService;

    public onResult(detail: IMovie) {
        this.result = this.jsonService.stringify(detail, {
            indent: 2
        });
        this.error = null;
    }

    public onError(detail: Error | any) {
        this.result = null;
        this.error = detail.message || detail;
    }

}
