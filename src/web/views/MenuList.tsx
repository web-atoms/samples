// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";

    import MenuStyle from "../styles/MenuStyle";



export default class MenuList extends AtomItemsControl {
	
	public create(): void {
		this.defaultControlStyle = MenuStyle;

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			items={Bind.oneWay((x) => x.viewModel.menuService.menus)}
			for="div">
			<AtomItemsControl.itemTemplate>
				<div eventClick={Bind.event((x) => (x.data).click())}>
					<span 
						text={Bind.oneWay((x) => x.data.label)}>
					</span>
					<AtomItemsControl
						styleDisplay={Bind.oneWay((x) => x.data.children ? '' : 'none')}
						items={Bind.oneWay((x) => x.data.children)}
						itemTemplate={Bind.oneTime(() => this.itemTemplate)}
						for="div">
					</AtomItemsControl>
				</div>
			</AtomItemsControl.itemTemplate>
		</div>
		);
	}
}
