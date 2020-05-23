import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomListBox} from "@web-atoms/core/dist/web/controls/AtomListBox";

import AppListBoxStyle from "./AppListBoxStyle";

import MovieViewModel from "./MovieViewModel";

export default class ListBox extends AtomControl {

	public viewModel: MovieViewModel;

	public create(): void {
		this.viewModel =  this.resolve(MovieViewModel) ;

		this.render(
		<div>
			<AtomListBox
				items={Bind.oneWay(() => this.viewModel.movies.value)}>
				<AtomListBox.itemTemplate>
					<div>
						<span
							text={Bind.oneTime((x) => x.data.name)}>
						</span>
					</div>
				</AtomListBox.itemTemplate>
			</AtomListBox>
		</div>
		);
	}
}
