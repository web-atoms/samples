import Colors from "web-atoms-core/dist/core/Colors";
import { AtomStyle } from "web-atoms-core/dist/web/styles/AtomStyle";
import { AtomTheme } from "web-atoms-core/dist/web/styles/AtomTheme";
import { IStyleDeclaration } from "web-atoms-core/dist/web/styles/IStyleDeclaration";
import StyleBuilder from "web-atoms-core/dist/web/styles/StyleBuilder";

export default class ResponsiveStyle extends AtomStyle {

    public theme = this.styleSheet as AtomTheme;

    protected app = this.styleSheet.app;

    public get root(): IStyleDeclaration {
        return {
            backgroundColor: this.app.screen.width > 1024 ? Colors.white : Colors.lightBlue,
            minWidth: "200px",
            minHeight: "200px"
        };
    }

}
