import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";

export default class ImageView extends AtomControl {

    public image: string;

    public preCreate() {
        this.image = null;
    }

    public create() {
        this.render(<div>
            <img src={Bind.oneWay(() => this.image)}/>
        </div>);
    }

}
