import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomComboBox from "@web-atoms/xf-controls/dist/AtomComboBox";
import AtomContentPage from "@web-atoms/xf-controls/dist/controls/atom/AtomContentPage";
import { ContentPage, Label, ListView, StackLayout } from "@web-atoms/xf-controls/dist/controls/XF";
import ComboBoxSampleViewModel from "../../../../view-models/combo-box/ComboBoxSampleViewModel";

export default class ComboBoxSample extends AtomContentPage {

    public create() {

        this.viewModel = this.resolve(ComboBoxSampleViewModel);

        this.render(
            <ContentPage>

                <StackLayout>

                    <AtomComboBox
                        itemsSource={() => (se) => this.viewModel.search(se)}
                        valueFunc={(item) => item.value }>
                        <AtomComboBox.itemTemplate>
                                <Label text={Bind.oneWay((x) => x.data.label)}/>
                        </AtomComboBox.itemTemplate>
                    </AtomComboBox>

                    <Label Text="One Time Binding" />

                </StackLayout>

            </ContentPage>);
    }
}
