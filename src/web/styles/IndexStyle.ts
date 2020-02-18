import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { AtomTheme } from "@web-atoms/core/dist/web/styles/AtomTheme";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import BgMasthead from "@web-atoms/samples/src/web/images/bg-masthead.jpg";
import IndiaFlagIcon32 from "../../images/IndiaFlagIcon32";

export default class IndexStyle extends AtomStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get root(): IStyleDeclaration {
        return {
            fontFamily: "'Merriweather Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
            subclasses: {
                " header": {
                    backgroundColor: Colors.orange.withAlphaPercent(0.6),
                    padding: "5px",
                    subclasses: {
                        " h3": {
                            margin: 0,
                            padding: "5px"
                        }
                    }
                },
                " .md-host": {
                    subclasses: {
                        " .page": {
                            lineHeight: "1.5",
                            letterSpacing: "0.04rem",
                            height: "100%",
                            width: "100%",
                            subclasses: {
                                " h1": {
                                    fontSize: "42px",
                                    fontWeight: "400",
                                    color: "#0e0e0e",
                                    marginBottom: "20px"
                                },
                                " h2": {
                                    fontSize: "32px",
                                    fontWeight: "400",
                                    color: "#0e0e0e",
                                    margin: "10px 0"
                                },
                                " h3": {
                                    fontSize: "25px",
                                    fontWeight: "400",
                                    color: "#0e0e0e",
                                    margin: "10px 0"
                                },
                                " p": {
                                    fontSize: "15px",
                                    letterSpacing: "0.05rem",
                                    lineHeight: "1.6"
                                },
                                " pre": {
                                    padding: "40px 20px",
                                    background: "#ffffff",
                                    border: "solid 1px lightgray",
                                    borderRadius: "20px",
                                    subclasses: {
                                        " code": {
                                            borderLeft: "4px solid #f58d70",
                                            backgroundColor: "white",
                                            color: "black",
                                            subclasses: {
                                                " .hljs-keyword, .hljs-selector-tag, .hljs-literal, .hljs-section, .hljs-link": {
                                                    color: "#9C27B0"
                                                },
                                                " .hljs-quote, .hljs-deletion, .hljs-meta": {
                                                    color: "#3F51B5 !important"
                                                },
                                                " .hljs-title, .hljs-type, .hljs-attribute, .hljs-symbol, .hljs-bullet, .hljs-addition, .hljs-variable, .hljs-template-tag, .hljs-template-variable": {
                                                    color: "#ec4c00"
                                                },
                                                " .hljs-built_in": {
                                                    color: "#00927c"
                                                },
                                                " .hljs-comment": {
                                                    color: "#008000"
                                                },
                                                " .hljs-name": {
                                                    color: "#A52A2A"
                                                },
                                                " .hljs-attr": {
                                                    color: "#FF0000"
                                                },
                                                " .hljs-string": {
                                                    color: "#0000CD"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                " .masthead": {
                    height: this.screen.screenType === "mobile" ? "auto" :  "100vh",
                    minHeight: "40rem",
                    paddingTop: this.screen.screenType === "mobile" ? "110px" :  "72px",
                    paddingBottom: this.screen.screenType === "mobile" ? "30px" :  "0",
                    background: "linear-gradient(to bottom,rgba(92,77,66,.8) 0,rgba(92,77,66,.8) 100%),url("
                    + BgMasthead + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                    backgroundSize: "cover",
                    subclasses: {
                        " h1": {
                            fontSize: this.screen.screenType === "mobile" ? "1.7rem" : "3.5rem",
                            color: "#fff",
                            textTransform: "uppercase",
                            marginBottom: ".5rem",
                            lineHeight: "1.2",
                            textAlign: "center"
                        },
                        " .divider": {
                            maxWidth: "3.25rem",
                            borderWidth: ".2rem",
                            borderColor: "#f4623a"
                        },
                        " p": {
                            fontSize: "1.15rem",
                            color: "white",
                            fontWeight: "300",
                            marginBottom: "3rem"
                        },
                        " .btn-primary": {
                            color: "#fff",
                            backgroundColor: "#f4623a",
                            borderColor: "#f4623a",

                            subclasses: {
                                ":hover": {
                                    color: "#fff",
                                    backgroundColor: "#f24516",
                                    borderColor: "#ee3e0d"
                                }
                            }
                        }
                    }
                },
                " nav": {
                    background: "white",
                    boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
                    transition: "background-color .2s ease",
                    subclasses: {
                        " .navbar-scrolled": {
                            boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
                            backgroundColor: "#fff"
                        },
                        " .navbar-brand": {
                            color: "#212529",
                            fontWeight: "700",
                            subclasses: {
                                " img": {
                                    height: "50px",
                                    width: "50px"
                                },
                                ":hover": {
                                    color: "#f4623a"
                                }
                            }
                        },
                        " .navbar-nav .nav-item .nav-link": {
                            fontWeight: "700",
                            color: "#212529",
                            fontSize: ".9rem;",
                            subclasses: {
                                ":hover": {
                                    color: "#f4623a"
                                }
                            }
                        }
                    }
                },
                " .bg-primary": {
                    backgroundColor: "#f4623a !important",
                    subclasses: {
                        " .btn-light": {
                            color: "#212529",
                            backgroundColor: "#f8f9fa",
                            borderColor: "#f8f9fa",

                            subclasses: {
                                ":hover": {
                                    color: "#212529",
                                    backgroundColor: "#e2e6ea",
                                    borderColor: "#dae0e5"
                                }
                            }
                        },
                        " .divider": {
                            maxWidth: "3.25rem",
                            borderWidth: ".2rem",
                            borderColor: "white !important"
                        },

                    }
                },
                " .btn-xl": {
                    padding: "1.25rem 2.25rem",
                    fontSize: ".85rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    border: "none",
                    transition: "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                    borderRadius: "10rem"
                },
                " .page-section": {
                    padding: "8rem 0",
                    subclasses: {
                        " .divider": {
                            maxWidth: "3.25rem",
                            borderWidth: ".2rem",
                            borderColor: "#f4623a"
                        },
                        " .text-primary": {
                            color: "#f4623a !important"
                        },
                        " .pricing": {
                            subclasses: {
                                " .card": {
                                    border: "none",
                                    borderRadius: "1rem",
                                    transition: "all 0.2s",
                                    boxShadow: "0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)",
                                    subclasses: {
                                        " .card-body": {
                                            flex: "1 1 auto",
                                            padding: "1.25rem"
                                        }
                                    }
                                },
                                " .text-muted": {
                                    opacity: "0.7",
                                    color: "#6c757d !important"
                                },
                                " .card-title": {
                                    margin: "0.5rem 0",
                                    fontSize: "0.9rem",
                                    letterSpacing: ".1rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    textTransform: "uppercase"
                                },
                                " .card-price": {
                                    fontSize: "3rem",
                                    margin: "0",
                                    fontWeight: "500",
                                    textAlign: "center",
                                    subclasses: {
                                        " .period": {
                                            fontSize: "0.8rem",
                                            border: "0",
                                            borderTop: "1px solid rgba(0,0,0,.1)"
                                        }
                                    }
                                },
                                " hr": {
                                    margin: "1.5rem 0"
                                },
                                " ul li": {
                                    marginBottom: "1rem"
                                },
                                " .btn": {
                                    fontSize: "80%",
                                    borderRadius: "5rem",
                                    letterSpacing: ".1rem",
                                    fontWeight: "bold",
                                    padding: "1rem",
                                    transition: "all 0.2s"
                                },
                                " .btn-primary": {
                                    color: "#fff",
                                    backgroundColor: "#f4623a",
                                    maxWidth: "180px",
                                    borderColor: "#f4623a"
                                }
                            }
                        }
                    }
                },
                " section": {
                    subclasses: {
                        " button": {
                            padding: "10px",
                            borderRadius: "5px"
                        }
                    }
                },
                " img.flag": {
                    maxHeight: "15px"
                },

                " table":  {
                    width: "100%",
                    backgroundColor: "#fff",
                    marginBottom: "3em",

                },

                " table.tr.td.a":  {
                    maxWidth: "180px",

                },
               " td, th": {
                    padding: this.screen.screenType === "mobile" ? "0.3em" : "0.75em",
                    border: "1px solid #f4623a",
                    fontSize: this.screen.screenType === "mobile" ? "13px" : "inherit"
                },
                   " td.err": {
                    backgroundColor: "#e992b9 ",
                        color: "#fff",
                        fontSize: "0.75em",
                        textAlign: "center",
                        lineHeight: "0",
                    },

                "th ": {
                    backgroundColor: "#4b423b",
                    fontWeight: "bold",
                    color: "#fff",

                },

                "tbody th": {
                    backgroundColor: "#4b423b",
                },

                "tbody tr:nth-child(2n-1)":  {
                    backgroundColor: "#f5f5f5",

                },
               " tbody tr:hover": {
                    backgroundColor: "rgba(255,209,202,.3)",
                },

               " th": {
                    backgroundColor: "#4b423b",
                    fontWeight: "Bold",
                   color: "#fff",
                    whiteSpace: "no",
                },

                " component": {
                    lineHeight: "1.5em",
                    margin: "auto",
                    padding: "2em 0 3em",
                    width: "90%",
                    maxWidth: " 1000px",
                    overflow: " hidden",
                },
                " footer": {
                    color: "#fff",
                    backgroundAttachment: "fixed",
                    backgroundColor: "#4b423b",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    paddingTop: "3rem !important",
                    paddingBottom: "1.5rem !important",
                    subclasses: {
                        " .made-in-india": {
                            backgroundImage: IndiaFlagIcon32
                        },
                        " .f-address li i": {
                            color: "#ea7225",
                            fontSize: "18px"
                        },
                        " .f-address": {
                           listStyleType: "none",
                           paddingLeft: "0"
                        },
                        " .f-address li a": {
                            color: "#ccc"
                        },
                        " .recent-post li": {
                                    display: "block",
                                    color: "#ccc",
                                    marginBottom: "25px",
                                    subclasses: {
                                        " label": {
                                            float: "left",
                                            border: "2px solid #ea7225",
                                            padding: "1px 7px",
                                            textAlign: "center",
                                            marginRight: "1rem !important",
                                            marginBottom: ".5rem",
                                            subclasses: {
                                                " span": {
                                                    color: "#fff"
                                                }
                                            }
                                        }
                                    }
                        },
                        " .social-pet li": {
                            display: "inline-block",
                            marginRight: "10px",
                            subclasses: {
                                " a": {
                                    height: "35px",
                                    width: "35px",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                    display: "block",
                                    lineHeight: "35px",
                                    backgroundColor: "#3a5a95",
                                    color: "#fff"
                                },
                                ":nth-child(2) a": {
                                    backgroundColor: "#57aced"
                                },
                                ":nth-child(3) a": {
                                    backgroundColor: "#dd4f43"
                                },
                                ":nth-child(4) a": {
                                    backgroundColor: "#6b27b2"
                                }
                            }
                        }
                    }
                },

                " .copyright": {
                    backgroundColor: "#111",
                    padding: "12px 0",
                    fontSize: "14px",
                    fontWeight: "500"
                }
            }
        };
    }

}
