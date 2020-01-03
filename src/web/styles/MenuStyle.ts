import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class MenuStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            height: "100%",
            overflowY: "auto",
            subclasses: {
                " > *": {
                    padding: "5px",
                    color: Colors.gray,
                    subclasses: {
                        ":hover": {
                            borderColor: Colors.lightSteelBlue,
                            borderStyle: "solid",
                            borderWidth: "1px",
                            padding: "4px",
                            borderRadius: "4px"
                        },
                        " > div > div span": {
                            display: "inline-block",
                            color: Colors.darkSlateBlue,
                            margin: "4px",
                            paddingLeft: "10px",
                            subclasses: {
                                ":hover": {
                                    cursor: "pointer",
                                    color: Colors.blue,
                                    textDecoration: "underline"
                                }
                            }
                        }
                    }
                }
            }
        };
    }

}
