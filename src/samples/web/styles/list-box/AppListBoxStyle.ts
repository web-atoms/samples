import Colors from "web-atoms-core/dist/core/Colors";
import { AtomListBoxStyle } from "web-atoms-core/dist/web/styles/AtomListBoxStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export default class AppListBoxStyle extends AtomListBoxStyle {

    public get item(): IStyleDeclaration {
        const existing = this.getBaseProperty(AppListBoxStyle, "item") as IStyleDeclaration;
        return {
            // copy all existing styles from base class
            ... existing,

            // override colors...
            color: Colors.darkBlue,
            backgroundColor: Colors.lightGreen,

            subclasses: {

                // important, copy existing subclasses as well...
                ... existing.subclasses,

                ":hover": {
                    backgroundColor: Colors.greenYellow,
                    color: Colors.white
                }
            }
        };
    }

    public get selectedItem(): IStyleDeclaration {
        const existing = this.getBaseProperty(AppListBoxStyle, "selectedItem") as IStyleDeclaration;
        return {
            ... existing,
            color: Colors.white,
            backgroundColor: Colors.indianRed,
            subclasses: {
                ... existing.subclasses,

                ":hover": {
                    backgroundColor: Colors.greenYellow
                }
            }
        };
    }

}
