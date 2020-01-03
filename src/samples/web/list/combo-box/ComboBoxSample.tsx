// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomComboBox} from "@web-atoms/core/dist/web/controls/AtomComboBox";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import ComboBoxViewModel from "./ComboBoxViewModel";


export default class ComboBoxSample extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(ComboBoxViewModel) ;

		this.render(
		<div
			style="padding: 10px;">
			<AtomComboBox
				labelPath="name"
				valuePath="name"
				items={Bind.oneWay((x) => x.viewModel.movies.value)}
				value={Bind.twoWays((x) => x.viewModel.name, ["change", "keyup", "keydown", "blur"])}
				style="width:200px;height:33px;margin-bottom:10px;"
				for="select">			</AtomComboBox>
			<div
				text={Bind.oneWay((x) => 'Selected Movie: ' + x.viewModel.name)}>			</div>		</div>
		);	}}
