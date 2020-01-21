import Colors from "@web-atoms/core/dist/core/Colors";
import { UMD } from "@web-atoms/core/dist/core/types";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class FileViewerStyle extends AtomStyle {

    public init(): void {
        this.registerExternalStyleSheet(UMD.resolvePath("@web-atoms/samples/scripts/highlight/styles/vs.css"));
    }

    public get root(): IStyleDeclaration {
        return {
            position: "relative",
            display: "inline-block",
            backgroundColor: Colors.whiteSmoke,
            borderColor: Colors.lightGray,
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "5px",
            margin: "5px",
            minHeight: "600px",
            minWidth: "90%",
            subclasses: {
                " > ul": {
                    position: "absolute",
                    margin: 0,
                    padding: 0
                },
                " > * > .code": {
                    position: "absolute",
                    backgroundColor: Colors.white,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "auto",
                    borderTop: "solid 1px lightgray",
                    subclasses: {
                        " > *": {
                            width: "max-content",
                            subclasses: {
                                "> pre": {
                                    margin: 0
                                }
                            }
                        }
                    }
                }
            }
        };
    }

}
