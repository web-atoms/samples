import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class IndexFormStyle extends AtomStyle {
    public get root(): IStyleDeclaration {
        return {
            subclasses: {
                " > .form-field": this.field,
                " > .form-field:nth-child(1)": {
                    display: "inline-block",
                    width: "50%",
                    paddingRight: "15px"
                },
                " > .form-field:nth-child(2)": {
                    display: "inline-block",
                    width: "50%"
                }
            }
        };
    }

    public get field(): IStyleDeclaration {
        return {
            display: "block",
            width: "100%",
            verticalAlign: "top",
            textAlign: "start",
            subclasses: {
                ".small": {
                    display: "inline-block",
                    width: "45%"
                },
                " input": {
                    width: "100%",
                    height: "34px",
                    padding: "6px 12px",
                    fontSize: "14px",
                    color: "#555",
                    backgroundColor: "#fff",
                    border: "1px solid #cbd5dd",
                    borderRadius: "2px"
                },
                " textarea": {
                    width: "100%",
                    height: "75px",
                    padding: "6px 12px",
                    fontSize: "14px",
                    color: "#555",
                    backgroundColor: "#fff",
                    border: "1px solid #cbd5dd",
                    borderRadius: "2px"
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
                    fontSize: "13px",
                    color: "#788288",
                    paddingRight: "5px"
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
                    fontSize: "70%"
                }
            }
        };
    }
}
