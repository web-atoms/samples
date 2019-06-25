import Colors from "web-atoms-core/dist/core/Colors";
import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";
import IndiaFlagIcon32 from "../../images/IndiaFlagIcon32";

export default class IndexStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            fontFamily: "Arial",
            subclasses: {
                " header": {
                    backgroundColor: Colors.orange.withAlphaPercent(0.6),
                    padding: "5px",
                    subclasses: {
                        " h3": {
                            margin: 0,
                            padding: "5px"
                        }
                    }
                },
                " section": {
                    subclasses: {
                        " button": {
                            padding: "10px",
                            borderRadius: "5px"
                        }
                    }
                },
                " img.flag": {
                    maxHeight: "15px"
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
