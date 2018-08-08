// tslint:disable
        import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
            

        import {AppHostViewModel} from "../../view-models/AppHostViewModel";
import MenuPage from "./MenuPage";

        export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.element = this.createControl("Xamarin.Forms.MasterDetailPage");

                    this.setImport(this.element,"MenuPage",() => new MenuPage(this.app));

                    this.loadXaml(`	<MasterDetailPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" xmlns:atom="clr-namespace:WebAtoms;assembly=WebAtoms" x:Name="e1">
	  
	  <MasterDetailPage.Master>
	    
	    <atom:JSObjectCreator Type="MenuPage"/>
	    
	  </MasterDetailPage.Master>
	  
	  <MasterDetailPage.Detail>
	    
	    <ContentPage Title="Test Detail">
	      
	      <Label Text="Loading..."/>
	      
	    </ContentPage>
	    
	  </MasterDetailPage.Detail>
	  
	</MasterDetailPage>`);

                    
            const e1 = this.find("e1");
            
                this.setLocalValue(e1, "viewModel",  this.resolve(AppHostViewModel) );

                }
            }

            
        