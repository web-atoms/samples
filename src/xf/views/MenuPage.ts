// tslint:disable
            import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
                

        

        export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.element = this.createControl("Xamarin.Forms.ContentPage");

                    

                    this.loadXaml(`	<ContentPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" Title="Test">
	  
	  <ListView x:Name="e1">
	    
	    
	  </ListView>
	  
	</ContentPage>`);

                    
            const e1 = this.find("e1");
            
            this.setTemplate(e1, "ItemTemplate", () => new (Root_e1_Creator(this))(this.app));
            

            this.bind(e1, "ItemsSource",  [["viewModel","menuService","menus"]], false , (v1) => (v1) );

                }
            }

            
// template
function Root_e1_Creator(__creator: any): any {
    return class Root_e1 extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.element = this.createControl("Xamarin.Forms.Label");

                    

                    this.loadXaml(`	<Label xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" x:Name="e1"/>`);

                    
            const e1 = this.find("e1");
            
            this.runAfterInit( () =>
            this.setLocalValue(e1, "Text", ((this.data) ? this.data.label : undefined)) );

                this.setPrimitiveValue(e1, "eventTapGesture",  () => this.data.click() );

                }
            }

            
        ;
}
        