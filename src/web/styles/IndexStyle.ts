import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import BgMasthead from "@web-atoms/samples/src/web/images/bg-masthead.jpg";
import IndiaFlagIcon32 from "../../images/IndiaFlagIcon32";

export default class IndexStyle extends AtomStyle {

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
                " .masthead": {
                    height: "100vh",
                    minHeight: "40rem",
                    paddingTop: "72px",
                    paddingBottom: "0",
                    background: "linear-gradient(to bottom,rgba(92,77,66,.8) 0,rgba(92,77,66,.8) 100%),url("
                    + BgMasthead + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                    backgroundSize: "cover",
                    subclasses: {
                        " h1": {
                            fontSize: "3.5rem",
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
                            color: "#2995de",
                            fontSize: "18px"
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
                                            border: "2px solid #ccc",
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
