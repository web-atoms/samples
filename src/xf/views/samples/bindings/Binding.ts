	// tslint:disable
	import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
	import { AtomBridge } from "web-atoms-core/dist/core/AtomBridge";
	import BindingViewModel from "../../../../view-models/samples/bindings/BindingViewModel";
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class Root extends AtomXFControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || AtomBridge.instance.create("Xamarin.Forms.ContentPage"));
		}
		protected create(): void  {
			
			super.create();
			
			this.loadXaml(`	<ContentPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" x:Name="e4">
				  
				  <StackLayout>
				    
				    <Label Text="One Time Binding"/>
				    
				    <Label x:Name="e1"/>
				    
				    <Label Text="One Way Binding"/>
				    
				    <Entry x:Name="e2"/>
				    
				    <Label Text="One Time Binding"/>
				    
				    <Entry x:Name="e3"/>
				    
				  </StackLayout>
				  
				</ContentPage>`);
			
			const e1 = this.find("e1");
			this.runAfterInit( () => this.setLocalValue(e1, "Text",  ((this.viewModel) ? this.viewModel.title : undefined) ) );
			
			const e2 = this.find("e2");
			this.bind(e2, "Text",  [["viewModel","title"]], false , null );
			
			const e3 = this.find("e3");
			this.bind(e3, "Text",  [["viewModel","title"]], true  );
			
			const e4 = this.find("e4");
			this.setLocalValue(e4, "viewModel",  this.resolve(BindingViewModel) );
		}
	}