import { AtomListBoxStyle } from "web-atoms-core/dist/web/styles/AtomListBoxStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export default class ListBoxStyle extends AtomListBoxStyle {

    public get item(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(ListBoxStyle , "item"),
            fontFamily: "'Muli', sans-serif",
            color: "#2e2e2e"
        };
    }

    public get selectedItem(): IStyleDeclaration {
        return {
        // tslint:disable-next-line:no-string-literal
            ... this.getBaseProperty(ListBoxStyle, "selectedItem"),
            backgroundColor: "maroon",
            color: "White",
            borderRadius: "0px",
            fontFamily: "'Muli', sans-serif"
        };
    }
}
