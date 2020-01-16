// tslint:disable
	import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
	import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
	import * as XF from "@web-atoms/xf-controls/dist/controls/XF";
	import * as WA from "@web-atoms/xf-controls/dist/controls/WA";
	import XNode from "@web-atoms/core/dist/core/XNode";
	import Bind from "@web-atoms/core/dist/core/Bind";
	declare var bridge: any;
	export default class Root extends AtomXFControl {
		
		constructor(app: any, e?: any) {
			super(app, e || bridge.create(XF.ContentPage));
		}
		protected create(): void  {
			
			super.create();

			this.render(	<XF.ContentPage title="Test">

				  <XF.ListView itemsSource={Bind.oneWay((x) => x.viewModel.menuService.menus)}>

				    <XF.ListView.ItemTemplate>

				      <XF.Label text={Bind.oneTime((x) => {x.data.label})} eventTapGesture={Bind.event((x) => this.data.click())}/>

				    </XF.ListView.ItemTemplate>

				  </XF.ListView>

				</XF.ContentPage>);
		}
	}
