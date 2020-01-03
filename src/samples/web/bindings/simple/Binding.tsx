// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import BindingViewModel from "../BindingViewModel";


export default class Binding extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(BindingViewModel) ;

		this.render(
		<div>
			<div>
				One Time Binding			</div>
			<div
				text={Bind.oneTime((x) => x.viewModel.title)}>			</div>
			<div>
				One Way Binding - if you modify anything in following box, 
				        it will not update anywhere			</div>
			<input
				value={Bind.oneWay((x) => x.viewModel.title)}>			</input>
			<div>
				Two Way Binding - if you modify anything here, it will 
				        also update on one way binding but not one time binding			</div>
			<input
				value={Bind.twoWays((x) => x.viewModel.title)}>			</input>		</div>
		);	}}
