import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export default class FontAwesomeStyle extends AtomStyle {

    public init(): void {
        this.registerExternalStyleSheet({
            href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
            crossOrigin: "anonymous",
            integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        });
    }

    public get root(): IStyleDeclaration {
        return {};
    }

}
