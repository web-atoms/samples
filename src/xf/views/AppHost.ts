// tslint:disable
        import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
            export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.loadXaml(`	<ContentPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms">
	  
	  <Grid>
	    
	    <Grid.RowDefinitions>
	      
	      <RowDefinition/>
	      
	      <RowDefinition/>
	      
	      <RowDefinition/>
	      
	    </Grid.RowDefinitions>
	    
	    <Grid.ColumnDefinitions>
	      
	      <ColumnDefinition/>
	      
	      <ColumnDefinition/>
	      
	      <ColumnDefinition/>
	      
	    </Grid.ColumnDefinitions>
	    
	    <Label Text="Sample"/>
	    
	    <Label Grid.Row="1" Grid.Column="1" x:Name="e1"/>
	    
	  </Grid>
	  
	</ContentPage>`);

                    
            const e1 = this.find("e1");
            
            this.runAfterInit( () =>
            this.setLocalValue(e1, "Text", (this.viewModel.title)) );

                }
            }

            
        