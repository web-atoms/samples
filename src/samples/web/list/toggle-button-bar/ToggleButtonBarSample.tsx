// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "@web-atoms/core/dist/web/controls/AtomToggleButtonBar";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import ViewModel from "./ViewModel";
    import ToggleBarSampleStyle from "./ToggleBarSampleStyle";


export default class ToggleButtonBarSample extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(ViewModel) ;

		this.render(
		<div
			style="padding: 10px;">
			<AtomToggleButtonBar
				controlStyle={Bind.oneTime(() => ToggleBarSampleStyle)}
				labelPath="label"
				valuePath="value"
				items={Bind.oneTime((x) => x.viewModel.genderList)}
				value={Bind.twoWays((x) => x.viewModel.gender, ["change", "keyup", "keydown", "blur"])}
				style="height:33px;">			</AtomToggleButtonBar>
			<div
				style="font-size: 15px;
                 margin-top: 20px;
                 font-weight: 600"
				text={Bind.oneWay((x) => 'Selected Movie: ' + x.viewModel.gender)}>			</div>		</div>
		);	}}
