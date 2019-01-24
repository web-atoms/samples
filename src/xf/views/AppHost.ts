// tslint:disable
            import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
                

        import AppHostViewModel from "../view-models/AppHostViewModel";
import MenuPage from "./MenuPage";
import GithubIcon from "../../images/github/GitHubMark32px";

        export default class Root extends AtomXFControl {

                public mMenuPage;

                

                protected create(): void {
                    super.create();

                    this.element = this.createControl("Xamarin.Forms.MasterDetailPage");

                    const mMenuPage = new MenuPage(this.app);
            this.mMenuPage = mMenuPage.element;


                    this.loadXaml(`	<MasterDetailPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" xmlns:wa="clr-namespace:WebAtoms;assembly=WebAtoms" xmlns:atom="clr-namespace:WebAtoms;assembly=WebAtoms" x:Name="e2">
	  
	  <MasterDetailPage.ToolbarItems>
	    
	    <wa:AtomToolbarItem x:Name="e1"/>
	    
	  </MasterDetailPage.ToolbarItems>
	  
	  <MasterDetailPage.Master>
	    
	    <atom:AtomObjectInjector Name="mMenuPage"/>
	    
	  </MasterDetailPage.Master>
	  
	  <MasterDetailPage.Detail>
	    
	    <ContentPage Title="Web Atoms Demo">
	      
	      <Label Text="Click on hamburger icon on left to get started..."/>
	      
	    </ContentPage>
	    
	  </MasterDetailPage.Detail>
	  
	</MasterDetailPage>`);

                    
            const e1 = this.find("e1");
            
                this.setPrimitiveValue(e1, "IconUrl", GithubIcon);

                this.setPrimitiveValue(e1, "Command",  () => this.viewModel.openGithub() );


            const e2 = this.find("e2");
            
                this.setLocalValue(e2, "viewModel",  this.resolve(AppHostViewModel) );

                }
            }

            
        