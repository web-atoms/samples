// tslint:disable
	import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
	import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
	import * as XF from "@web-atoms/xf-controls/dist/controls/XF";
	import * as WA from "@web-atoms/xf-controls/dist/controls/WA";
	import XNode from "@web-atoms/core/dist/core/XNode";
	import Bind from "@web-atoms/core/dist/core/Bind";
	declare var bridge: any;
	import ComboBoxSampleViewModel from "../../../../view-models/combo-box/ComboBoxSampleViewModel";
	import AtomComboBox from "@web-atoms/xf-controls/dist/AtomComboBox";
	export default class Root extends AtomXFControl {
		
		public viewModel: ComboBoxSampleViewModel;

		constructor(app: any, e?: any) {
			super(app, e || bridge.create(XF.ContentPage));
		}
		protected create(): void  {
			
			super.create();

			this.viewModel = this.resolve(ComboBoxSampleViewModel);

			this.render(	<XF.ContentPage>

				  <XF.StackLayout>

				    <AtomComboBox 
					itemsSource={Bind.oneTime(() => (fe) => this.viewModel.search(fe))} 
					valueFunc={Bind.oneTime(() => (item) => item.value)}>

				      <AtomComboBox.itemTemplate>

				        <XF.Label text={Bind.oneWay((x) => x.data.label)}/>

				      </AtomComboBox.itemTemplate>

				    </AtomComboBox>

				    <XF.Label text="One Time Binding"/>

				  </XF.StackLayout>

				</XF.ContentPage>);
		}
	}
