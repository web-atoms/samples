import { AtomToggleButtonBarStyle } from "@web-atoms/core/dist/web/styles/AtomToggleButtonBarStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
export default class ToggleBarSampleStyle extends AtomToggleButtonBarStyle {

    public get item(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(ToggleBarSampleStyle , "item"),
            borderRadius: 0,
            display: "inline-block",
            border: "2px solid",
            borderLeft: "none",
            color: "#0099cc",
            borderColor: "#0099cc",
            paddingRight: "20px",
            paddingLeft: "20px",
            height: "20px",
            fontSize: "11pt",
            paddingTop: "8px",
            fontFamily: "'Muli', sans-serif",
            subclasses: {
                ":first-child": {
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px;",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderLeft: "2px solid",
                    borderColor: "#0099cc"
                },
                ":last-child": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px"
                }
            }
        };
    }

    public get selectedItem(): IStyleDeclaration {
        return {
            ... this.getBaseProperty(ToggleBarSampleStyle, "selectedItem"),
            borderRadius: 0,
            display: "inline-block",
            border: "2px solid",
            borderLeft: "none",
            color: "#fff",
            backgroundColor: "#0099cc",
            borderColor: "#0099cc",
            paddingRight: "20px",
            paddingLeft: "20px",
            height: "20px",
            fontSize: "11pt",
            paddingTop: "8px",
            fontFamily: "'Muli', sans-serif",
            subclasses: {
                ":first-child": {
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderLeft: "2px solid",
                    borderColor: "#0099cc"
                },
                ":last-child": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px"
                }
            }
        };
    }
}
