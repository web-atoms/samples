// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";

        import AtomFieldTemplate from "@web-atoms/web-controls/dist/form/AtomFieldTemplate";


export default class CustomTemplate extends AtomFieldTemplate {	
	public create(): void {		
		this.render(
		<div
			class={Bind.oneWay(() => ({
            'form-field': 1,
            [this.field.fieldClass] : this.field.fieldClass,
            'has-error': this.field.hasError,
            'field-hidden': !this.field.visible
        }))}
			for="div">
			<span
				class="help"
				eventClick={Bind.event((x) => this.field.openHelp())}
				styleDisplay={Bind.oneWay(() => this.field.hasHelp ? '' : 'none')}>
				?			</span>
			<label
				class="label"
				presenter={Bind.presenter("labelPresenter")}
				styleColor={Bind.oneWay(() => this.field.required ? 'red' : 'black')}
				text={Bind.oneWay(() => this.field.label)}>			</label>
			<span
				class="error"
				styleDisplay={Bind.oneWay(() => this.field.hasError ? '' : 'none')}
				text={Bind.oneWay(() => this.field.error)}>			</span>
			<div
				class="presenter"
				presenter={Bind.presenter("contentPresenter")}>			</div>		</div>
		);	}}
