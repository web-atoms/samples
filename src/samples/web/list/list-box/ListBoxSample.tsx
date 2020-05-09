import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomListBox} from "@web-atoms/core/dist/web/controls/AtomListBox";
import { IMovie } from "@web-atoms/samples/src/services/http/MovieService";
import ListBoxSampleStyle from "./ListBoxSampleStyle";
import ListBoxStyle from "./ListBoxStyle";
import ListBoxViewModel from "./ListBoxViewModel";

const BindMovie = Bind.forData<IMovie>();

export default class ListBoxSample extends AtomControl {

	public viewModel: ListBoxViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ListBoxViewModel) ;
		this.defaultControlStyle = ListBoxSampleStyle;

		this.render(
		<div
			style="padding: 10px;">
			<AtomListBox
				allowSelectFirst="true"
				items={Bind.oneWay(() => this.viewModel.movies.value)}
				controlStyle={Bind.oneTime(() => ListBoxStyle)}
				selectedItem={Bind.twoWays(() => this.viewModel.movie)}
				style=" color:#7e7e7e;
                width: 610px;
                margin-top: 10px;
                border: 1px solid #ccc; "
				for="div">
				<AtomListBox.itemTemplate>
					<div
						style=" border-bottom: 1px solid #ccc;
                         border-radius: 0px;
                         padding: 10px">
						<div>
							<span
								style="font-size: 15px;
                                font-weight: 600"
								text={BindMovie.oneTime((x) => `${x.data.name} ( ${x.data.genre} )`)}>
							</span>
						</div>
						<div
							style="font-size: 15px;
                            font-weight: 400;
                            padding-left: 15px;
                            padding-top: 5px"
							text={BindMovie.oneTime((x) => x.data.description)}>
						</div>
					</div>
				</AtomListBox.itemTemplate>
			</AtomListBox>
			<div
				style="font-size: 15px;
                margin-top: 20px;
                font-weight: 600"
				text={Bind.oneWay(() => "Selected Item: " + this.viewModel.movie.name)}>
			</div>
		</div>
		);
	}
}
