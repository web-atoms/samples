import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";
import IndiaFlagIcon32 from "../../images/IndiaFlagIcon32";

export default class IndexStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            fontFamily: "Arial",
            subclasses: {
                " header": {

                },
                " footer": {
                    textAlign: "right",
                    padding: "5px",
                    subclasses: {
                        " .made-in-india": {
                            backgroundImage: IndiaFlagIcon32
                        }
                    }
                }
            }
        };
    }

}
