import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomComboBox from "@web-atoms/xf-controls/dist/AtomComboBox";
import AtomContentPage from "@web-atoms/xf-controls/dist/controls/atom/AtomContentPage";
import { ContentPage, Label, ListView, StackLayout, Entry } from "@web-atoms/xf-controls/dist/controls/XF";
import BindingViewModel from "../../../../view-models/samples/bindings/BindingViewModel";

export default class Binding extends AtomContentPage {

    public create() {

        this.viewModel = this.resolve(BindingViewModel)

        this.render(
            <ContentPage>

                <StackLayout>
                    <Label text="One Time Binding" />
                    <Label text={Bind.oneTime(() => this.viewModel.title )}/>

                    <Label text="One Way Binding" />
                    <Entry text={Bind.oneWay(() => this.viewModel.title )}/>

                    <Label text="Two way Binding" />
                    <Entry text={Bind.twoWays(() => this.viewModel.title)}/>

                </StackLayout>

            </ContentPage>
        );
    }

}
