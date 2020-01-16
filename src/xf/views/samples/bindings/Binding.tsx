// tslint:disable
	import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
	import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
	import * as XF from "@web-atoms/xf-controls/dist/controls/XF";
	import * as WA from "@web-atoms/xf-controls/dist/controls/WA";
	import XNode from "@web-atoms/core/dist/core/XNode";
	import Bind from "@web-atoms/core/dist/core/Bind";
	declare var bridge: any;
	import BindingViewModel from "../../../../view-models/samples/bindings/BindingViewModel";
	export default class Root extends AtomXFControl {		
		public viewModel: BindingViewModel;

		constructor(app: any, e?: any) {			super(app, e || bridge.create(XF.ContentPage));		}
		protected create(): void  {			
			super.create();

			this.viewModel = this.resolve(BindingViewModel);

			this.render(	<XF.ContentPage>

				  <XF.StackLayout>

				    <XF.Label text="One Time Binding"/>

				    <XF.Label text={Bind.oneTime((x) => x.viewModel.title)}/>

				    <XF.Label text="One Way Binding"/>

				    <XF.Entry text={Bind.oneWay((x) => x.viewModel.title)}/>

				    <XF.Label text="One Time Binding"/>

				    <XF.Entry text={Bind.twoWays((x) => x.viewModel.title)}/>

				  </XF.StackLayout>

				</XF.ContentPage>);		}	}
