import Bind from "@web-atoms/core/dist/core/Bind"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode"
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import { IMovie } from "@web-atoms/samples/src/services/http/MovieService";
import ItemsControlViewModel from "./ItemsControlViewModel";

const BindMovie = Bind.forData<IMovie>();

export default class ItemsControlSample extends AtomControl {

	public viewModel: ItemsControlViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ItemsControlViewModel) ;

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
							text={BindMovie.oneTime((x) => x.data.name)}>
						</span>
						<span
							style="font-size: 15px;
                                font-weight: 400;
                                padding-left: 15px"
							text={BindMovie.oneTime((x) => `( ${x.data.genre} )`)}>
						</span>
					</li>
				</AtomItemsControl.itemTemplate>
			</AtomItemsControl>
		</div>
		);
	}
}
