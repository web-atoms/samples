import { AtomTabbedPageStyle } from "@web-atoms/core/dist/web/styles/AtomTabbedPageStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class AppTabStyle extends AtomTabbedPageStyle {

    public get root(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(AppTabStyle, "root"),
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: this.theme.hoverColor,
            subclasses: {
                ... this.getBaseProperty(AppTabStyle, "root").subclasses,
                " > * > .presenter": {
                    backgroundColor: this.theme.bgColor,
                    width: "100%",
                    height: "100%",
                    subclasses: {
                        " > *": {
                            margin: "10px"
                        }
                    }
                }
            }
        };
    }

    public get tabItem(): IStyleDeclaration {
        return {
            display: "inline-block",
            // borderTopLeftRadius: (this.padding || this.theme.padding) + "px",
            // borderTopRightRadius: (this.padding || this.theme.padding) + "px",
            // marginLeft: "2px",
            borderLeft: "solid 1px darkgray",
            padding: 0,
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "lightgray",
            minWidth: "120px",
            minHeight: "30px",
            cursor: "default",
            position: "relative",
            subclasses: {
                ":hover": {
                    backgroundColor: this.theme.bgColor.withAlphaPercent(0.5),
                    borderTopLeftRadius: (this.padding || this.theme.padding) + "px",
                    borderTopRightRadius: (this.padding || this.theme.padding) + "px",
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
            ... this.tabItem,
            borderTopLeftRadius: (this.padding || this.theme.padding) + "px",
            borderTopRightRadius: (this.padding || this.theme.padding) + "px",
            borderColor: this.theme.bgColor,
            backgroundColor: this.theme.bgColor,
            marginTop: "2px",
            marginLeft: "2px",
            marginRight: "2px",
            color: this.theme.color,
            subclasses: {
                ":hover": {
                    // backgroundColor: this.theme.,
                    color: this.theme.hoverColor
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

}
