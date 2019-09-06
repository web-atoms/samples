import { AtomListBoxStyle } from "web-atoms-core/dist/web/styles/AtomListBoxStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export default class ListBoxSampleStyle extends AtomListBoxStyle {

    public get labelText(): IStyleDeclaration {
        return {
            fontSize: "15px",
            fontWeight: "600"
        };
    }

    public get valueText(): IStyleDeclaration {
        return {
            fontSize: "15px",
            fontWeight: "400",
            paddingLeft: "15px"
        };
    }
}
