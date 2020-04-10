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
                " section": {
                    padding: "60px 0"
                },
                " .section-bg": {
                    backgroundColor: "#f9e8df",
                },
                " .section-title": {
                    textAlign: "center",
                    paddingBottom: "30px"
                },
                " .section-title h2": {
                    fontSize: "24px",
                    fontWeight: "700",
                    paddingBottom: "0",
                    lineHeight: "1px",
                    marginBottom: "15px",
                    color: "#c2b7b1",
                  },
                 " .section-title p": {
                    paddingBottom: "15px",
                    marginBottom: "15px",
                    position: "relative",
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#242424",
                },
                " .section-title p::after": {
                    content: "",
                    position: "absolute",
                    display: "block",
                    width: "60px",
                    height: "2px",
                    background: "#eb5d1e",
                    bottom: "0",
                    left: "calc(50% - 30px)",
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
                " #main": {
                    marginTop: "72px"
                },
                " .about": {
                    subclasses: {
                        " h3": {
                            fontWeight: "700",
                            fontSize: "34px",
                            color: "#242424",
                        },
                        " h4": {
                            fontSize: "20px",
                            fontWeight: "700",
                            marginTop: "5px",
                            color: "#7a6960",
                        },
                        " i": {
                            fontSize: "48px",
                            marginTop: "15px",
                            color: "#f39e7a",
                        },
                        " p": {
                            fontSize: "15px",
                            color: "#5a6570"
                        },
                        " .about-img img": {
                            maxWidth: this.screen.screenType === "mobile" ? "70%" : ""
                        }
                    }
                },
                " .services": {
                    subclasses: {
                        " .icon-box": {
                            padding: "30px",
                            position: "relative",
                            overflow: "hidden",
                            margin: "0  0 40px 0",
                            background: "#fff",
                            boxShadow: "0 10px 29px 0 rgba(68, 88, 144, 0.1)",
                            transition: "all 0.3s ease-in-out",
                            borderRadius: "15px",
                            textAlign: "center",
                            borderBottom: "3px solid #fff",
                        },
                        " .icon-box:hover": {
                            transform: "translateY(-5px)",
                            borderColor: "#ef7f4d",
                        },
                        " .icon i": {
                            fontSize: "48px",
                            lineHeight: "1",
                            marginBottom: "15px",
                            color: "#ef7f4d",
                        },
                        " .title": {
                            fontWeight: "700",
                            marginBottom: "15px",
                            fontSize: "18px",
                        },
                        " .title a": {
                            color: "#111",
                        },
                        " .description": {
                            fontSize: "15px",
                            lineHeight: "28px",
                            marginBottom: "0"
                        }
                    }
                },
                " .team": {
                    background: "#f9e8df",
                    padding: "60px 0",
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
                },
                " .contact": {
                    subclasses: {
                      " .info": {
                            borderTop: "3px solid #eb5d1e",
                            borderBottom: "3px solid #eb5d1e",
                            padding: "30px",
                            background: "#fff",
                            width: "100%",
                            boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                        },
                        " .info i": {
                            fontSize: "20px",
                            color: "#eb5d1e",
                            float: "left",
                            width: "44px",
                            height: "44px",
                            background: "#fdf1ec",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50px",
                            transition: "all 0.3s ease-in-out"
                        },
                        " .info h4": {
                            padding: "0 0 0 60px",
                            fontSize: "22px",
                            fontWeight: "600",
                            marginBottom: "5px",
                            color: "#7a6960",
                        },
                        " .info p": {
                            padding: "0 0 10px 60px",
                            marginBottom: "20px",
                            fontSize: "14px",
                            color: "#ab9d95"
                        },
                        " .info .email p": {
                            paddingTop: "5px",
                        },
                        " .info .social-links": {
                            paddingLeft: "60px",
                          },
                        " .info .social-links a": {
                            fontSize: "18px",
                            display: "inline-block",
                            background: "#333",
                            color: "#fff",
                            lineHeight: "1",
                            padding: "8px 0",
                            borderRadius: "50%",
                            textAlign: "center",
                            width: "36px",
                            height: "36px",
                            transition: "0.3s",
                            marginRight: "10px",
                          },
                        " .info .social-links a:hover": {
                            background: "#eb5d1e",
                            color: "#fff",
                          },
                        " .info .email:hover i,.info .address:hover i,.info .phone:hover i": {
                            background: "#eb5d1e",
                            color: "#fff",
                        },
                        " .php-email-form": {
                            width: "100%",
                            borderTop: "3px solid #eb5d1e",
                            borderBottom: "3px solid #eb5d1e",
                            padding: "30px",
                            background: "#fff",
                            boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                          },
                        " .php-email-form .form-group": {
                            paddingBottom: "8px",
                          },
                        " .php-email-form .validate": {
                            display: "none",
                            color: "red",
                            margin: "0",
                            fontWeight: "400",
                            fontSize: "13px",
                          },
                        " .php-email-form .error-message": {
                            display: "none",
                            color: "#fff",
                            background: "#ed3c0d",
                            textAlign: "center",
                            padding: "15px",
                            fontWeight: "600",
                          },
                        " .php-email-form .sent-message": {
                            display: "none",
                            color: "#fff",
                            background: "#18d26e",
                            textAlign: "center",
                            padding: "15px",
                            fontWeight: "600",
                          },
                        " .php-email-form .loading": {
                            display: "none",
                            background: "#fff",
                            textAlign: "center",
                            padding: "15px",
                          },
                        " .php-email-form .loading:before": {
                            content: "",
                            display: "inline-block",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            margin: "0 10px -6px 0",
                            border: "3px solid #18d26e",
                            borderTopColor: "#eee",
                            animation: "animate-loading 1s linear infinite",
                          },
                        " .php-email-form input,.php-email-form textarea": {
                            borderRadius: "0",
                            boxShadow: "none",
                            fontSize: "14px",
                          },
                        " .php-email-form input": {
                            height: "44px",
                          },
                        " .php-email-form textarea": {
                            padding: "10px 12px",
                          },
                        " .php-email-form button[type='submit'] ": {
                            background: "#eb5d1e",
                            border: "0",
                            padding: "10px 24px",
                            color: "#fff",
                            transition: "0.4s",
                            borderRadius: "4px",
                          },
                       " .php-email-form button[type='submit']:hover": {
                            background: "#ef7f4d"
                          }
                    }
                },
                " #footer": {
                    padding: "0 0 30px 0",
                    color: "#212529",
                    fontSize: "14px",
                    background: "#f9e8df",
                    subclasses: {
                        " .footer-newsletter": {
                            padding: "50px 0",
                            background: "#f9e8df",
                            textAlign: "center",
                            fontSize: "15px",
                          },
                          " .footer-newsletter h4": {
                            fontSize: "24px",
                            margin: "0 0 20px 0",
                            padding: "0",
                            lineHeight: "1",
                            fontWeight: "600",
                            color: "#242424",
                          },
                          " .footer-newsletter form": {
                            marginTop: "30px",
                            background: "#fff",
                            padding: "6px 10px",
                            position: "relative",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
                            textAlign: "left",
                          },
                        " .footer-newsletter form input[type='email']": {
                            border: "0",
                            padding: "4px 4px",
                            width: "calc(100% - 100px)",
                          },
                          " .footer-newsletter form input[type='submit']": {
                            position: "absolute",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            border: "0",
                            fontSize: "16px",
                            padding: "0 20px",
                            background: "#eb5d1e",
                            color: "#fff",
                            transition: "0.3s",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
                          },
                          " .footer-newsletter form input[type='submit']:hover": {
                            background: "#c54811",
                          },
                          " .footer-top": {
                            padding: "60px 0 30px 0",
                            background: "#fff",
                          },
                          " .footer-top .footer-contact": {
                            marginBottom: "30px",
                          },
                          " .footer-top .footer-contact h4": {
                            fontSize: "22px",
                            margin: "0 0 30px 0",
                            padding: "2px 0 2px 0",
                            lineHeight: "1",
                            fontWeight: "700",
                          },
                          " .footer-top .footer-contact p": {
                            fontSize: "14px",
                            lineHeight: "24px",
                            marginBottom: "0",
                            fontFamily: "'Raleway', sans-serif",
                            color: "#5c5c5c",
                          },
                          " .footer-top h4": {
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#212529",
                            position: "relative",
                            paddingBottom: "12px",
                          },
                          " .footer-top .footer-links": {
                            marginBottom: "30px",
                          },
                          " .footer-top .footer-links ul": {
                            listStyle: "none",
                            padding: "0",
                            margin: "0",
                          },
                          " .footer-top .footer-links ul i": {
                            paddingRight: "2px",
                            color: "#f39e7a",
                            fontSize: "18px",
                            lineHeight: "1",
                          },
                          " .footer-top .footer-links ul li": {
                            padding: "10px 0",
                            display: "flex",
                            alignItems: "center",
                          },
                          " .footer-top .footer-links ul li:first-child": {
                            paddingTop: "0",
                          },
                          " .footer-top .footer-links ul a": {
                            color: "#5c5c5c",
                            transition: "0.3s",
                            display: "inline-block",
                            lineHeight: "1",
                          },
                          " .footer-top .footer-links ul a:hover": {
                            textDecoration: "none",
                            color: "#eb5d1e",
                          },
                          " .footer-top .social-links a": {
                            fontSize: "18px",
                            display: "inline-block",
                            background: "#eb5d1e",
                            color: "#fff",
                            lineHeight: "1",
                            padding: "8px 0",
                            marginRight: "4px",
                            borderRadius: "50%",
                            textAlign: "center",
                            width: "36px",
                            height: "36px",
                            transition: "0.3s",
                          },
                          " .footer-top .social-links a:hover": {
                            background: "#ef7f4d",
                            color: "#fff",
                            textDecoration: "none",
                          },
                          " .copyright": {
                            textAlign: "center",
                            float: "left",
                          },
                          " .credits": {
                            float: "right",
                            textAlign: "center",
                            fontSize: "13px",
                            color: "#212529",
                          },
                          " .credits a": {
                            color: "#eb5d1e",
                          }
                    }
                },
                " .back-to-top": {
                    position: "fixed",
                    display: "none",
                    width: "40px",
                    height: "40px",
                    borderRadius: "3px",
                    right: "15px",
                    bottom: "15px",
                    background: "#eb5d1e",
                    color: "#fff",
                    transition: "display 0.5s ease-in-out",
                    zIndex: "99999",
                    subclasses: {
                        " i": {
                            fontSize: "30px",
                            position: "absolute",
                            top: "5px",
                            left: "11px",
                          },
                        ":hover": {
                            color: "#fff",
                            background: "#ee7843",
                            transition: "background 0.2s ease-in-out",
                        }
                    }
                },
                " .mobile-nav": {
                    position: "fixed",
                    top: "0",
                    bottom: "0",
                    zIndex: "9999",
                    overflowY: "auto",
                    left: "-260px",
                    width: "260px",
                    paddingTop: "18px",
                    background: "#242424",
                    transition: "0.4s",
                    subclasses: {
                        " *": {
                            margin: "0",
                            padding: "0",
                            listStyle: "none",
                          },
                          " a": {
                            display: "block",
                            position: "relative",
                            color: "#f9d1c0",
                            padding: "10px 20px",
                            fontWeight: "500",
                            transition: "0.3s",
                          },
                          " a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a": {
                            color: "#f39e7a",
                            textDecoration: "none",
                          },
                          " .get-started a": {
                            background: "#eb5d1e",
                            color: "#fff",
                            borderRadius: "50px",
                            margin: "15px",
                            padding: "10px 25px",
                          },
                          " .get-started a:hover": {
                            background: "#ee7843",
                            color: "#fff",
                          },
                          " .drop-down > a:after": {
                            content: "'\ea99'",
                            fontFamily: "IcoFont",
                            paddingLeft: "10px",
                            position: "absolute",
                            right: "15px",
                          },
                          " .active.drop-down > a:after": {
                            content: "'\eaa0'",
                          },
                          " .drop-down > a": {
                            paddingRight: "35px",
                          },
                          " .drop-down ul": {
                            display: "none",
                            overflow: "hidden",
                          },
                          " .drop-down li": {
                            paddingLeft: "20px",
                          }
                    }
                },
                " .mobile-nav-toggle": {
                  position: "fixed",
                  right: "15px",
                  top: "22px",
                  zIndex: "9998",
                  border: "0",
                  background: "none",
                  fontSize: "24px",
                  transition: "all 0.4s",
                  outline: "none !important",
                  lineHeight: "1",
                  cursor: "pointer",
                  textAlign: "right",
                },
                " .mobile-nav-toggle i": {
                  color: "#7a6960",
                },
                " .mobile-nav-overly": {
                  width: "100%",
                  height: "100%",
                  zIndex: "9997",
                  top: "0",
                  left: "0",
                  position: "fixed",
                  background: "rgba(78, 64, 57, 0.9)",
                  overflow: "hidden",
                  display: "none",
                },
                " .mobile-nav-active": {
                  overflow: "hidden",
                },
                " .mobile-nav-active  .mobile-nav": {
                  left: "0",
                },
                " .mobile-nav-active  .mobile-nav-toggle i": {
                  color: "#fff",
                },
                " a": {
                    color: "#007bff",
                },
                " a:hover": {
                    color: "#0b6bd3",
                    textDecoration: "none"
                },
                " h1, h2, h3, h4, h5, h6, .font-primary": {
                    fontFamily: "'Raleway', sans-serif"
                }
            }
        };
    }
}
