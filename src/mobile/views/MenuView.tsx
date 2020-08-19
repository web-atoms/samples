// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import MenuItemTemplate from "./MenuItemTemplate";
import MenuPopupStyle from "../styles/MenuPopupStyle";
import MenuService from "../../services/MenuService";



export default class MenuView extends AtomItemsControl {
	
	public create(): void {
		this.defaultControlStyle = MenuPopupStyle;
		
		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			items={Bind.oneTime(() => this.resolve(MenuService).menus)}
			itemTemplate={Bind.oneTime(() => MenuItemTemplate)}>
		</div>
		);
	}
}
