import { AtomPopupStyle } from "@web-atoms/core/dist/web/styles/AtomPopupStyle";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class MenuPopupStyle extends AtomStyle {
    public get root(): IStyleDeclaration {
        return {
            left: "0px !important",
            top: "48px  !important",
            height: "100%  !important",
            width: "52%  !important",
            color: "white",
            backgroundColor: "#242424"
        };
    }
}
