// tslint:disable
        import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
            

        

        export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    

                    this.loadXaml(`	<ContentPage xmlns="http://xamarin.com/schemas/2014/forms">
	  
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

                    

                    this.loadXaml(`	<Label x:Name="e1"/>`);

                    
            const e1 = this.find("e1");
            
            this.runAfterInit( () =>
            this.setLocalValue(e1, "Text", (this.data.label)) );

                }
            }

            
        ;
}
        