import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class MenuItemStyle extends AtomStyle {
    public get root(): IStyleDeclaration {
        return {
            padding: "4px",
            borderRadius: "0px",
            cursor: "pointer",
            fontSize: "14px",
            subclasses: {
                " span": {
                    cursor: "pointer"
                },
                " .icon": {
                    marginRight: "5px"
                },
                " > * > .group-icon": {
                    display: "none"
                },
                " > * > .title": {
                    fontWeight: "400"
                },
                ".group": {
                    subclasses: {
                        " > * > .title": {
                            fontWeight: "500"
                        },
                        " > * > .group-icon": {
                            display: "inline-block",
                            height: "15px",
                            position: "absolute",
                            paddingTop: "4px",
                            right: "20px"
                        }
                    }
                }
            }
        };
    }

}
