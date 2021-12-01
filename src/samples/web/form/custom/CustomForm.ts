import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import CustomFormStyle from "./CustomFormStyle";

export default class CustomForm extends AtomForm {

    protected preCreate(): void {
        super.preCreate();
        this.defaultControlStyle = CustomFormStyle;
    }
}
