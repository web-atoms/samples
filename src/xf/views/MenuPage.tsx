import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomContentPage from "@web-atoms/xf-controls/dist/controls/atom/AtomContentPage";
import { ContentPage, Label, ListView } from "@web-atoms/xf-controls/dist/controls/XF";

export default class MenuPage extends AtomContentPage {

    public create() {
        this.render(
        <ContentPage
                title="Test">
            <ListView
                itemsSource={Bind.oneWay(() => this.viewModel.menuService.menus)}>
                <ListView.ItemTemplate>
                    <Label
                        text={Bind.oneTime((x) => x.data.label)}
                        eventTapGesture={Bind.event(() => this.data.click())}
                        />
                </ListView.ItemTemplate>
            </ListView>
        </ContentPage>);
    }
}
