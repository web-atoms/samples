// tslint:disable
            import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
                

        import BindingViewModel from "../../../../view-models/samples/bindings/BindingViewModel";

        export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.element = this.createControl("Xamarin.Forms.ContentPage");

                    

                    this.loadXaml(`	<ContentPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" x:Name="e1">
	  
	  <StackLayout></StackLayout>
	  
	</ContentPage>`);

                    
            const e1 = this.find("e1");
            
                this.setLocalValue(e1, "viewModel",  this.resolve(BindingViewModel) );

                }
            }

            
        