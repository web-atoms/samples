import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";
import { ModuleFiles } from "../../ModuleFiles";

export class ButtonSampleStyle extends AtomStyle {

    public get addButton(): IStyleDeclaration {
        return {
            background: `url(${ModuleFiles.src.web.images.add_png}) no-repeat 5px center, #1ccacc`,
            backgroundSize: "16px 16px",
            margin: "10px",
            borderRadius: "5px",
            border: "1px solid #1ccacc",
            padding: "5px",
            paddingLeft: "24px",
            height: "35px",
            color: "white"
            };
    }
}
