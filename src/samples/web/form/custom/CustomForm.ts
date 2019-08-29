import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import CustomFormStyle from "./CustomFormStyle";
import CustomTemplate from "./CustomTemplate";

export default class CustomForm extends AtomForm {

    protected preCreate(): void {
        super.preCreate();
        this.fieldTemplate = CustomTemplate;
        this.defaultControlStyle = CustomFormStyle;
    }
}
