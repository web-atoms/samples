import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { AtomTheme } from "@web-atoms/core/dist/web/styles/AtomTheme";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class AppPanelStyle extends AtomStyle {

    public get theme(): AtomTheme {
        return this.styleSheet as AtomTheme;
    }

    public get root(): IStyleDeclaration {
        return {
            color: "blue",
            backgroundColor: "#ffffff",
            padding: `${this.theme.padding || 5}px`,
            borderRadius: `${this.theme.padding || 5}px`,
            borderColor: "#c0c0c0",
            borderWidth: "1px",
            borderStyle: "solid",
            subclasses: {
                // inline style for subclass
                // key for subclasss is css selector which is automatically
                // postfixed to parent name
                " > header": {
                    backgroundColor: "blue",
                    color: "white",
                    fontWeight: "bold",
                    padding: `${this.theme.padding || 5}px`,
                    borderRadius: `${this.theme.padding || 5}px`,
                },
                // inline style from a static method
                // it is important to not write any instance method on style for
                // better performance
                " > section": AppPanelStyle.panelStyle(this)
            }
        };
    }

    public static panelStyle(style: AppPanelStyle): IStyleDeclaration {
        return {
            backgroundColor: "white",
            color: "gray",
            fontWeight: "normal",
            padding: `${style.theme.padding || 5}px`
        };
    }

}
