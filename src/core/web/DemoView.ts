import Colors from "web-atoms-core/dist/core/Colors";
import { AtomControl } from "web-atoms-core/dist/web/controls/AtomControl";
import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export class DemoViewStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            verticalAlign: "top",
            display: "inline-block",
            borderColor: Colors.lightGray,
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "5px",
            margin: "5px",
            minWidth: "300px",
            minHeight: "400px"
        };
    }
}

export default class DemoView extends AtomControl {

    protected preCreate(): void {
        this.defaultControlStyle = DemoViewStyle;
        this.element.classList.add(this.controlStyle.root.className);
    }

}
