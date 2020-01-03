// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

        import ItemsControlViewModel from "./ItemsControlViewModel";


export default class ItemsControlSample extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(ItemsControlViewModel) ;

		this.render(
		<div
			style="padding-left: 25px; padding-top: 5px">
			<div
				style="font-size: 15px;
                 color: maroon;
                 font-weight: 600">

				                 Upcoming Movies:
				    			</div>
			<AtomItemsControl
				items={Bind.oneWay((x) => x.viewModel.movies.value)}
				for="ol">
				<AtomItemsControl.itemTemplate>
					<li>
						<span
							style="font-size: 15px;
                                font-weight: 600"
							text={Bind.oneTime((x) => x.data.name)}>						</span>
						<span
							style="font-size: 15px; 
                                font-weight: 400; 
                                padding-left: 15px"
							text={Bind.oneTime((x) => '( '+x.data.genre+' )')}>						</span>					</li>				</AtomItemsControl.itemTemplate>			</AtomItemsControl>		</div>
		);	}}
