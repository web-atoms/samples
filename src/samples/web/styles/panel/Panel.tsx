// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import AppPanelStyle from "./AppPanelStyle";


export default class Panel extends AtomControl {
	constructor(app: any, e?: any) {

	public create(): void {

		this.render(
		<div
			style="padding:10px">
			<div
				styleClass={Bind.oneWay(() => this.controlStyle.root)}>
				<header>
					Header
				<section>
					Panel Text
		);