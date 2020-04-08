import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { AtomTheme } from "@web-atoms/core/dist/web/styles/AtomTheme";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class IndexStyle extends AtomStyle {

    public screen = (this.styleSheet as AtomTheme).app.screen;

    public get root(): IStyleDeclaration {
        return {
        };
    }
}
