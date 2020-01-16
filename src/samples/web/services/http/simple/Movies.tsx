// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomListBox} from "@web-atoms/core/dist/web/controls/AtomListBox";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

import MovieViewModel from "./MovieViewModel";



export default class Movies extends AtomGridView {
	
	public create(): void {
		this.viewModel =  this.resolve(MovieViewModel) ;

		this.render(
		<div
			rows="5, *, 5"
			columns="5, *, 5">
			<AtomListBox
				row="1"
				column="1"
				items={Bind.oneWay((x) => x.viewModel.movies.value)}
				for="div">
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
