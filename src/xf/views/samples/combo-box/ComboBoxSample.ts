	// tslint:disable
	import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
	import ComboBoxSampleViewModel from "../../../../view-models/combo-box/ComboBoxSampleViewModel";
	import AtomComboBox from "@web-atoms/xf-controls/dist/AtomComboBox";
	export default class Root extends AtomXFControl {
		
		public mAtomComboBox;
		protected create(): void  {
			
			super.create();
			
			this.element = this.createControl("Xamarin.Forms.ContentPage");
			
			const mAtomComboBox = new AtomComboBox(this.app);
			this.mAtomComboBox = mAtomComboBox.element;
			
			this.loadXaml(`	<ContentPage xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" xmlns:atom="clr-namespace:WebAtoms;assembly=WebAtoms" x:Name="e1">
				  
				  <StackLayout>
				    
				    <atom:AtomObjectInjector Name="mAtomComboBox">
				      
				      
				    </atom:AtomObjectInjector>
				    
				    <Label Text="One Time Binding"/>
				    
				  </StackLayout>
				  
				</ContentPage>`);
			
			const e1 = this.find("e1");
			this.setLocalValue(e1, "viewModel",  this.resolve(ComboBoxSampleViewModel) );
			
			mAtomComboBox.setLocalValue(this.mAtomComboBox, "itemTemplate", () => new (Root_mAtomComboBox_Creator(this))(this.app));
			mAtomComboBox.setPrimitiveValue(this.mAtomComboBox, "itemsSource",  (fe) => this.viewModel.search(fe) );
			mAtomComboBox.setPrimitiveValue(this.mAtomComboBox, "valueFunc",  (item) => item.value );
		}
	}
	function Root_mAtomComboBox_Creator(__creator: any): any {
		return class Root_mAtomComboBox extends AtomXFControl {
			protected create(): void  {
				
				super.create();
				
				this.element = this.createControl("Xamarin.Forms.Label");
				
				this.loadXaml(`	<Label xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" xmlns:atom="clr-namespace:WebAtoms;assembly=WebAtoms" x:Name="e1"/>`);
				
				const e1 = this.find("e1");
				this.bind(e1, "Text",  [["data","label"]], false , null );
			}
		}
		;
	}