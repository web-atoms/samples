// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomListBox} from "@web-atoms/core/dist/web/controls/AtomListBox";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import AppListBoxStyle from "./AppListBoxStyle";
    import MovieViewModel from "./MovieViewModel";


export default class ListBox extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public viewModel: MovieViewModel;

	public create(): void {		this.viewModel =  this.resolve(MovieViewModel) ;

		this.render(
		<div>
			<AtomListBox
				items={Bind.oneWay((x) => x.viewModel.movies.value)}>
				<AtomListBox.itemTemplate>
					<div>
						<span
							text={Bind.oneTime((x) => x.data.name)}>						</span>					</div>				</AtomListBox.itemTemplate>			</AtomListBox>		</div>
		);	}}
