import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import AddDataUrl from "../images/AddDataUrl";

export class ButtonSampleStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
    return {
        background: `url(${AddDataUrl}) no-repeat 5px center, #1ccacc`,
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
