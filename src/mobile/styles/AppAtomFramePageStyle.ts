
import Colors from "@web-atoms/core/dist/core/Colors";
import AtomFrameStyle from "@web-atoms/core/dist/web/styles/AtomFrameStyle";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import AtomPageFrameStyle from "@web-atoms/web-controls/dist/mobile/pages/AtomPageFrameStyle";
const iconStyle: IStyleDeclaration = {
    float: "left",
    padding: "15.5% 49.5%",
    position: "absolute",
  };
export default class AppHostStyle extends AtomStyle {
    public get root(): IStyleDeclaration {
        return {
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans," +
            "Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            fontSize: "12px",
            color: "#3c4144",
            subclasses: {
                " header": {
                    paddingLeft: "12px",
                    paddingTop: "12px",
                    background: "red",
                    color: "white",
                    fontWeight: "bold",
                    height: "100%"
                },
                " footer": {
                    background: "green",
                },
                " .img": {
                    marginRight: "15px",
                    fontSize: "25px"
                },
                " .page-name": {
                    verticalAlign: "super",
                    fontSize: "15px"
                }
            }
        };
    }
}

export class AppAtomFrameStyle extends AtomFrameStyle {
    public get root(): IStyleDeclaration {
        return {
            height: "100%",
            backgroundColor: "#f3f4f7",
            overflow: "auto"
        };
    }
}

export  class AppAtomFramePageStyle  extends AtomPageFrameStyle  {

    public get root(): IStyleDeclaration {
        return {
            subclasses : {
                " div > .title-bar": {
                    backgroundColor: "#fcfcfc",
                    height : "48px",
                    color: Colors.white,
                    padding: "10px",
                    fontFamily: "Muli , sans-serif",
                    zIndex: "2",
                    transition: "all 0.5s",
                    boxShadow: "0px 2px 15px rgb(0 0 0 / 18%)",
                    subclasses: {
                        " .icon": {
                            display: "inline-block",
                            marginRight: "10px",
                            verticalAlign: "top",
                            paddingTop: "3.5px",
                            color: "rgb(122, 105, 96)",
                            fontSize: "20px"
                        },
                        " .title": {
                            display: "inline-block",
                            width: "47%",
                            subclasses: {
                                " span": {
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    width: "100%",
                                    display: "inline-block"
                                },
                                " .text-light": {
                                    fontSize: "30px",
                                    margin: "0",
                                    padding: "6px 0",
                                    lineHeight: "1",
                                    fontWeight: "400",
                                    letterSpacing: "2px",
                                    marginTop: "3px",
                                    subclasses: {
                                        " a": {
                                            color: "#242424"
                                        },
                                        " img": {
                                            marginTop: "-5px",
                                            height: "40px",
                                            width: "40px"
                                        }
                                    }
                                }
                            }
                        },
                        " .commands": {
                            subclasses: {
                                " div": {
                                    subclasses: {
                                        " *": {
                                            margin: "0 0 0 20px"
                                        },
                                        " *:first-child": {
                                            padding: "0px"
                                        },
                                        " img": {
                                            height: "20px",
                                            width: "20px"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                " div > .page-presenter": {
                    marginTop: "42px",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans," +
                    "Ubuntu, Cantarell, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', " +
                    "'Segoe UI Emoji', 'Segoe UI Symbol'",
                    fontSize: "12px",
                    color: Colors.rgba(46, 46, 46),
                    lineHeight: "1.428571429",
                    zIndex: "1",
                    subclasses: {
                        // to solve zoom in issue in i-phone, font-size given to 16px
                        " input, select, textarea": {
                            fontSize: "14px"
                        },
                        " label": {
                            marginBottom: "0",
                            fontSize: "14px"
                        }
                    }
                }
            }
        };
    }

}
