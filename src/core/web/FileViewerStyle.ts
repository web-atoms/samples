import Colors from "@web-atoms/core/dist/core/Colors";
import { UMD } from "@web-atoms/core/dist/core/types";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { AtomTheme } from "@web-atoms/core/dist/web/styles/AtomTheme";
import { AtomToggleButtonBarStyle } from "@web-atoms/core/dist/web/styles/AtomToggleButtonBarStyle";
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
                    margin: "5px",
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

export class MobileFileViewerStyle extends AtomStyle {

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
export class FileBarStyle extends AtomToggleButtonBarStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get item(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(FileBarStyle , "item"),
            marginRight: "1px",
            marginBottom: "1px",
            padding: this.screen.screenType === "mobile" ? "8px 0 8px 5px" : "8px 16px",
            minWidth: "50px",
            width: this.screen.screenType === "mobile" ? "49%" :  "auto",
            background: Colors.gray,
            border: "none",
            borderTop: "1px solid #444857",
            boxSizing: "border-box",
            borderRadius: 0,
            display: "inline-block",
            color: Colors.lightGray,
            fontSize: "11pt",
            fontFamily: "'Muli', sans-serif",
            subclasses: {
                ":first-child": {
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0;",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                },
                ":last-child": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0"
                }
            }
        };
    }

    public get selectedItem(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(FileBarStyle, "selectedItem"),
            marginRight: "1px",
            padding: this.screen.screenType === "mobile" ? "8px 0 8px 5px" : "8px 16px",
            minWidth: "50px",
            background: "#2c303a",
            border: "none",
            borderTop: "1px solid #d5d7de",
            boxSizing: "border-box",
            borderRadius: 0,
            display: "inline-block",
            color: "white",
            fontSize: "11pt",
            fontFamily: "'Muli', sans-serif",
            subclasses: {
                ":first-child": {
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0;",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                },
                ":last-child": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0"
                }
            }
        };
    }
}
