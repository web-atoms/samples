import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomComboBox from "@web-atoms/xf-controls/dist/combo-box/AtomComboBox";
import WA from "@web-atoms/xf-controls/dist/controls/WA";
import XF from "@web-atoms/xf-controls/dist/controls/XF";
import AtomContentPage from "@web-atoms/xf-controls/dist/pages/AtomContentPage";
import SimpleViewModel from "./SimpleViewModel";

/**
 * Xamarin Forms Sample
 */
export default class SimpleFormXF extends AtomContentPage {

    public viewModel: SimpleViewModel;

    public create() {

        this.viewModel = this.resolve(SimpleViewModel);

        this.render(<XF.ContentPage>
            <WA.AtomForm>
                <WA.AtomField
                    label="First name:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorFirstName)}>
                    <XF.Entry text={Bind.twoWays(() => this.viewModel.model.firstName)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Last name:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorLastName)}>
                    <XF.Entry text={Bind.twoWays(() => this.viewModel.model.lastName)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Email Address:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorEmailAddress)}>
                    <XF.Entry text={Bind.twoWays(() => this.viewModel.model.emailAddress)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Country:">
                    <AtomComboBox
                        label="label"
                        selectedItem={Bind.twoWays(() => this.viewModel.model.country)}
                        items={Bind.oneWay(() => this.viewModel.countryList)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="State:">
                    <AtomComboBox
                        label="label"
                        selectedItem={Bind.twoWays(() => this.viewModel.model.state)}
                        items={Bind.oneWay(() => this.viewModel.stateList)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Password:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorPassword)}>
                    <XF.Entry
                        isPassword={true}
                        text={Bind.twoWays(() => this.viewModel.model.password)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Password Again:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorPasswordAgain)}>
                    <XF.Entry
                        isPassword={true}
                        text={Bind.twoWays(() => this.viewModel.model.passwordAgain)}/>
                </WA.AtomField>
            </WA.AtomForm>
        </XF.ContentPage>);

    }

}
