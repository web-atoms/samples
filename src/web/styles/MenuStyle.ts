import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class MenuStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            height: "100%",
            width: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            color: "#000!important",
            backgroundColor: "#f1f1f1!important",
            padding: "5px",
            paddingTop: "10px",
            subclasses: {
                " > div span": {
                    fontSize: "21px",
                    margin: "-4px 0 4px 0",
                    width: "204px",
                    color: "#0e0e0e",
                    paddingLeft: "5px",
                },
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
                            color: "#333",
                            margin: "4px",
                            paddingLeft: "2px",
                            fontSize: "15px",
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
