	// tslint:disable
	import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
	export default class Root extends AtomXFControl {
		protected create(): void  {
			
			super.create();
			
			this.element = this.createControl("Xamarin.Forms.ContentPage");
			
			this.loadXaml(`	<ContentPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" Title="Test">
				  
				  <Grid>
				    
				    <Grid.RowDefinitions>
				      
				      <RowDefinition/>
				      
				      <RowDefinition Height="Auto"/>
				      
				      <RowDefinition/>
				      
				    </Grid.RowDefinitions>
				    
				    <Grid.ColumnDefinitions>
				      
				      <ColumnDefinition/>
				      
				      <ColumnDefinition Width="Auto"/>
				      
				      <ColumnDefinition/>
				      
				    </Grid.ColumnDefinitions>
				    
				    <Label Grid.Row="1" Grid.Column="1" TextColor="#ff0000" Text="Sample Start..."/>
				    
				  </Grid>
				  
				</ContentPage>`);
		}
	}