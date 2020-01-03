import AtomFormStyle from "@web-atoms/web-controls/dist/form/AtomFormStyle";
import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class CustomFormStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            width: "500px",
            subclasses: {
                " > .form-field": this.field
            }
        };
    }

    public get field(): IStyleDeclaration {
        return {
            display: "block",
            width: "98%",
            verticalAlign: "top",
            subclasses: {
                ".small": {
                    display: "inline-block",
                    width: "45%"
                },
                ".has-error": {
                    backgroundColor: Colors.red.withAlphaPercent(0.1)
                },
                " > .help": {
                    marginLeft: "5px",
                    borderRadius: "50%",
                    marginRight: "5px",
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    padding: "3px",
                    textAlign: "center",
                    color: Colors.white,
                    backgroundColor: Colors.limeGreen,
                    cursor: "pointer",
                    fontSize: "70%"
                },
                " > .label": {
                    fontSize: "70%"
                },
                " > .required": {
                    fontSize: "70%",
                    color: Colors.red
                },
                " > .presenter": {
                    display: "block",
                    clear: "both",
                    subclasses: {
                        " > * > *": {
                            width: "95%"
                        }
                    }
                },
                " > .error": {
                    display: "inline-block",
                    clear: "both",
                    color: Colors.white,
                    backgroundColor: Colors.red,
                    fontWeight: "bold",
                    padding: "3px",
                    borderRadius: "3px",
                    marginLeft: "5px",
                    fontSize: "70%"
                }
            }
        };
    }
}
