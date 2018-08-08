// tslint:disable
        import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
            

        import {AppHostViewModel} from "../../view-models/AppHostViewModel";

        export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.loadXaml(`	<MasterDetailPage xmlns="http://xamarin.com/schemas/2014/forms" x:Name="e2">
	  
	  <MasterDetailPage.Master>
	    
	    <ContentPage>
	      
	      <ListView x:Name="e1">
	        
	        
	      </ListView>
	      
	    </ContentPage>
	    
	  </MasterDetailPage.Master>
	  
	  <MasterDetailPage.Detail>
	    
	    <ContentPage>
	      
	      <Label Text="Loading..."/>
	      
	    </ContentPage>
	    
	  </MasterDetailPage.Detail>
	  
	</MasterDetailPage>`);

                    
            const e1 = this.find("e1");
            
            this.setTemplate(e1, "ItemTemplate", () => new (Root_e1_Creator(this))(this.app));
            

            this.bind(e1, "ItemsSource",  [["viewModel","menuService","menus"]], false , (v1) => (v1) );


            const e2 = this.find("e2");
            
                this.setLocalValue(e2, "viewModel",  this.resolve(AppHostViewModel) );

                }
            }

            
// template
function Root_e1_Creator(__creator: any): any {
    return class Root_e1 extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.loadXaml(`	<Label x:Name="e1"/>`);

                    
            const e1 = this.find("e1");
            
            this.runAfterInit( () =>
            this.setLocalValue(e1, "Text", (this.data.label)) );

                }
            }

            
        ;
}
        