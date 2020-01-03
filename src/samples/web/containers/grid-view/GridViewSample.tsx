// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
// tslint:disable

export default class GridViewSample extends AtomGridView {	
	public create(): void {		
		this.render(
		<div
			columns="200, *"
			rows="50, 50, *, 50, 50"
			style="width: 800px; height: 800px; margin: 10px;">
			<div
				row="0"
				column="0:2"
				style="background-color: lightgreen;
                height: 100%;">

				        Header
				    			</div>
			<div
				row="1:3"
				column="0"
				style="background-color: lightgrey;
        height: 100%;">

				        TreeView
				    			</div>
			<div
				row="1"
				column="1"
				style="background-color: lightblue;
        height: 100%;">

				        Nested DockPanel Header
				    			</div>
			<div
				row="2"
				column="1"
				style="background-color: white;
        height: 100%;">

				        Nested Fill Element
				    			</div>
			<div
				row="3"
				column="1"
				style="background-color: lightseagreen;
        height: 100%;">

				        Nested DockPanel Footer
				    			</div>
			<div
				row="4"
				column="0:2"
				style="background-color: lightslategray;
        height: 100%;">

				        Footer
				    			</div>		</div>
		);	}}
