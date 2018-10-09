import Colors from "web-atoms-core/dist/core/Colors";
import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";

export default class MenuStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            subclasses: {
                " > *": {
                    padding: "5px",
                    subclasses: {
                        ":hover": {
                            backgroundColor: Colors.lightSteelBlue
                        }
                    }
                }
            }
        };
    }

}
