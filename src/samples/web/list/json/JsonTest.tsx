import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import { AtomItemsControl } from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import * as movies from "./movies.json";

export default class JsonTest extends AtomControl {

    public create() {

        this.render(<div>

            <AtomItemsControl items={movies}>
                <AtomItemsControl.itemTemplate>
                    <div text={Bind.oneTime((x) => x.data.label)}></div>
                </AtomItemsControl.itemTemplate>
            </AtomItemsControl>

        </div>);
    }

}
