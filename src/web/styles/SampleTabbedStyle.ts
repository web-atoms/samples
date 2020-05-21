import { AtomTabbedPageStyle } from "@web-atoms/core/dist/web/styles/AtomTabbedPageStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import CloseButtonHoverDataUrl from "../images/CloseButtonHoverDataUrl";
export class SampleTabbedStyle extends AtomTabbedPageStyle {

    public get root(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(SampleTabbedStyle, "root"),
            marginTop: "5px",
            subclasses: {
                ... this.getBaseProperty(SampleTabbedStyle, "root").subclasses,
                " .page-host": {
                    overflow: "auto",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    subclasses: {
                        " section:nth-child(1)": {
                            backgroundColor: "White",
                            height: "100% !important"
                        }
                    }
                },
                " section:nth-child(1)": {
                    backgroundColor: "#eee",
                    height: "35px !important"
                },
                " section:nth-child(2)": {
                    top: "35px !important"
                },
            }
        };
    }

    public get tabViewStyle(): IStyleDeclaration {
        return {
            position: "absolute",
            bottom: "0px",
            right: "0px",
            top: "50px",
            left: "0px"
        };
    }
    public get tabItem(): IStyleDeclaration {
        return {
        // tslint:disable-next-line:no-string-literal
            ... this.getBaseProperty(SampleTabbedStyle, "tabItem"),
            backgroundColor: "#888 !important",
            border: "none",
            marginTop: "2px",
            marginRight: "2px",
            paddingBottom: "3px",
            color: "White",
            minHeight: "40px",
            subclasses: {
                ":hover": {
                    backgroundColor: "#555 !important",
                    color: "White"
                },
                "> div": {
                    display: "inline-block",
                    padding: (this.padding || this.theme.padding) + "px",
                    paddingRight: ((this.padding || this.theme.padding) + 23) + "px",
                    right: "22px"
                }
            }
        };
    }

    public get selectedTabItem(): IStyleDeclaration {
        return {
        // tslint:disable-next-line:no-string-literal
            ... this.getBaseProperty(SampleTabbedStyle, "selectedTabItem"),
            backgroundColor: "White !important",
            color: "#2e2e2e",
            minHeight: "40px",
            marginRight: "2px",
            subclasses: {
                ":hover": {
                    backgroundColor: "#555",
                    color: "white"
                },
                "> div": {
                    display: "inline-block",
                    padding: (this.padding || this.theme.padding) + "px",
                    paddingRight: ((this.padding || this.theme.padding) + 23) + "px",
                    right: "22px"
                }
            }
        };
    }

    public get closeButton(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(SampleTabbedStyle, "closeButton"),
            backgroundImage: CloseButtonHoverDataUrl,
            top: "9px !important",
            subclasses: {
                ":hover": {
                    backgroundImage: CloseButtonHoverDataUrl
                }
            }
        };
    }
}
