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

				  <XF.Grid>

				    <XF.Grid.RowDefinitions>

				      <XF.RowDefinition/>

				      <XF.RowDefinition height="Auto"/>

				      <XF.RowDefinition/>

				    </XF.Grid.RowDefinitions>

				    <XF.Grid.ColumnDefinitions>

				      <XF.ColumnDefinition/>

				      <XF.ColumnDefinition width="Auto"/>

				      <XF.ColumnDefinition/>

				    </XF.Grid.ColumnDefinitions>

				    <XF.Label Row="1" Column="1" textColor="#ff0000" text="Sample Start..."/>

				  </XF.Grid>

				</XF.ContentPage>);
		}
	}
