import { Atom } from "web-atoms-core/bin/Atom";
import WebApp from "web-atoms-core/bin/web/WebApp";
import AppHost from "./views/AppHost";

export default class DemoApp extends WebApp {

    public main(): void {
        Atom.designMode = true;

        this.root = new AppHost(this);

    }
}
