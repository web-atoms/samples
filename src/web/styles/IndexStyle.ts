import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { AtomTheme } from "@web-atoms/core/dist/web/styles/AtomTheme";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class IndexStyle extends AtomStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get root(): IStyleDeclaration {
        return {
            fontFamily: "'Merriweather Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
            subclasses:  {
                " #header": {
                    height: "72px",
                    zIndex: "997",
                    transition: "all 0.5s",
                    padding: "15px 0",
                    background: "#fff",
                    boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
                    subclasses: {
                        " .logo h1": {
                            fontSize: "30px",
                            margin: "0",
                            padding: "6px 0",
                            lineHeight: "1",
                            fontWeight: "400",
                            letterSpacing: "2px"
                        },
                        " .logo h1 a, #header .logo h1 a:hover": {
                            color: "#242424",
                            textDecoration: "none"
                        },
                        " .logo img": {
                            padding: "0",
                            margin: "0",
                            maxHeight: "40px"
                        }
                    }
                },
                " .nav-menu": {
                    margin: "0",
                    padding: "0",
                    listStyle: "none",
                    subclasses: {
                        " *": {
                            margin: "0",
                            padding: "0",
                            listStyle: "none"
                        },
                        " ul > li": {
                            position: "relative",
                            whiteSpace: "nowrap",
                            float: "left"
                        },
                        " a": {
                            display: "block",
                            position: "relative",
                            color: "#242424",
                            padding: "10px 15px",
                            transition: "0.3s",
                            fontSize: "15px",
                            fontFamily: "'Open Sans', sans-serif"
                        },
                        " a:hover,  .active > a,  li:hover > a": {
                            color: "#eb5d1e",
                            textDecoration: "none"
                        },
                        " .get-started a": {
                            background: "#eb5d1e",
                            color: "#fff",
                            borderRadius: "50px",
                            margin: "0 15px",
                            padding: "10px 25px"
                        },
                        " .get-started a:hover": {
                            background: "#ee7843",
                            color: "#fff"
                        },
                        " .drop-down ul": {
                            display: "block",
                            position: "absolute",
                            left: "0",
                            top: "calc(100% - 30px)",
                            zIndex: "99",
                            opacity: "0",
                            visibility: "hidden",
                            padding: "10px 0",
                            background: "#fff",
                            boxShadow: "0px 0px 30px rgba(127, 137, 161, 0.25)",
                            transition: "ease all 0.3s"
                        },
                        " .drop-down:hover > ul": {
                            opacity: "1",
                            top: "100%",
                            visibility: "visible"
                        },
                        " .drop-down li": {
                            minWidth: "180px",
                            position: "relative"
                        },
                        " .drop-down ul a": {
                            padding: "10px 20px",
                            fontSize: "14px",
                            fontWeight: "500",
                            textTransform: "none",
                            color: "#3c1300"
                        },
                        " .drop-down ul a:hover,  .drop-down ul .active > a,  .drop-down ul li:hover > a": {
                            color: "#eb5d1e"
                        },
                        " .drop-down > a:after": {
                            content: "'\ea99'",
                            fontFamily: "IcoFont",
                            paddingLeft: "5px"
                        },
                        " .drop-down .drop-down ul": {
                            top: "0",
                            left: "calc(100% - 30px)"
                        },
                        " .drop-down .drop-down:hover > ul": {
                            opacity: "1",
                            top: "0",
                            left: "100%"
                        },
                          " .drop-down .drop-down > a": {
                            paddingRight: "35px"
                        },
                        " .drop-down .drop-down > a:after": {
                            content: "'\eaa0'",
                            fontFamily: "IcoFont",
                            position: "absolute",
                            right: "15px"
                        }
                    }
                },
                " #hero": {
                    width: "100%",
                    height: this.screen.screenType === "mobile" ? "auto" : "70vh",
                    background: "#fef8f5",
                    borderBottom: "2px solid #fcebe3",
                    margin: "72px 0 -72px 0",
                    backgroundAttachment: this.screen.screenType === "mobile" ? "fixed" : "",
                    subclasses: {
                        " h1": {
                            margin: "0 0 10px 0",
                            fontSize: this.screen.screenType === "mobile" ? "28px" :"45px",
                            fontWeight: "700",
                            lineHeight: this.screen.screenType === "mobile" ? "36px" :"56px",
                            color: "#242424"
                        },
                        " h2": {
                            color: "#242424",
                            marginBottom: this.screen.screenType === "mobile" ? "30px" :"50px",
                            lineHeight: this.screen.screenType === "mobile" ? "24px" :"1.2",
                            fontSize: this.screen.screenType === "mobile" ? "18px" :"24px",
                        },
                        " .btn-get-started": {
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: "500",
                            fontSize: "16px",
                            letterSpacing: "1px",
                            display: "inline-block",
                            padding: "8px 28px",
                            borderRadius: "3px",
                            transition: "0.5s",
                            margin: "10px",
                            color: "#fff",
                            background: "#eb5d1e"
                        },
                        " .btn-get-started:hover": {
                            background: "#ef7f4d"
                        },
                        " .animated": {
                            animation: "up-down 2s ease-in-out infinite alternate-reverse both"
                        },
                        " .hero-img": {
                            textAlign: this.screen.screenType === "mobile" ? "center" : ""
                          },
                        " .hero-img img": {
                            width: this.screen.screenType === "mobile" ? "70%" : ""
                        }
                    }
                },
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
