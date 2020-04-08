import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { AtomTheme } from "@web-atoms/core/dist/web/styles/AtomTheme";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class IndexStyle extends AtomStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get root(): IStyleDeclaration {
        return {
            fontFamily: "'Merriweather Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
            subclasses:  {
                " .team": {
                    subclasses: {
                        " table":  {
                            overflow: "hidden",
                            width: "100%",
                            margin: "0 auto",
                            backgroundColor: "#fff",
                            border: "1px solid #000000",
                            marginBottom: "3em",
                            borderRadius: "5px",
                            padding: "0"
                        },
                        " table > thead > tr": {
                            backgroundColor: "#270c00"
                        },
                        " table.tr.td.a":  {
                            maxWidth: "180px"
                        },
                        " table > tbody > tr:nth-child(even)": {
                            backgroundColor: "#f5f5f5"
                        },
                       " td, th": {
                            padding: this.screen.screenType === "mobile" ? "0.3em" : "0.75em",
                            fontSize: this.screen.screenType === "mobile" ? "13px" : "inherit"
                        },
                           " td.err": {
                            backgroundColor: "#e992b9 ",
                                color: "#fff",
                                fontSize: "0.75em",
                                textAlign: "center",
                                lineHeight: "0",
                            },
                        "tbody tr:nth-child(2n-1)":  {
                            backgroundColor: "#f5f5f5",
                        },
                       " tbody tr:hover": {
                            backgroundColor: "rgba(255,209,202,.3)",
                        },
                       " th": {
                            fontWeight: "500",
                            color: "#fff",
                            whiteSpace: "no",
                        },
                        " .btn-primary": {
                            color: "#fff",
                            backgroundColor: "#eb5d1e",
                            borderColor: "#eb5d1e",
                            width: "140px"
                        }

                    }
                }
            }
        };
    }
}
