// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
// tslint:disable

export default class Page2 extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		
		this.render(
		<div>

			    Page 2
					</div>
		);	}}
