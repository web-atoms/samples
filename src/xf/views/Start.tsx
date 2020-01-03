import XNode from "@web-atoms/core/dist/core/XNode";
import AtomContentPage from "@web-atoms/xf-controls/dist/controls/atom/AtomContentPage";
import { ColumnDefinition, ContentPage, Grid, Label, RowDefinition } from "@web-atoms/xf-controls/dist/controls/XF";

// tslint:disable
	
export default class Root extends AtomContentPage {

	protected create(): void  {
		
		super.create();

		this.render(
		<ContentPage
			title="Test">
			<Grid>

				<Grid.RowDefinitions>
					<RowDefinition/>
					<RowDefinition weight="Auto"/>
					<RowDefinition/>
				</Grid.RowDefinitions>

				<Grid.ColumnDefinitions>
					<ColumnDefinition/>
					<ColumnDefinition width="Auto"/>
					<ColumnDefinition/>
				</Grid.ColumnDefinitions>

				<Label
					{ ... Grid.Row(1) }
					{ ... Grid.Column(1) }
					textColor="#ff0000" text="Sample Start..."/>

				</Grid>

			</ContentPage>);
	}
}
