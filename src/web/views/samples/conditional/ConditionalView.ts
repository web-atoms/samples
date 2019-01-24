// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import DesktopView from "./DesktopView";
    import MobileView from "./MobileView";

export default  class ConditionalView extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                    
        const e1 = document.createTextNode("\r\n    Following view will load conditionally based on screen type\r\n\r\n    ");
        
        this.element.appendChild(e1);

    if ( this.app.screen.screenType == 'mobile' ) {
        
            const e2 = new MobileView(this.app);
            
            
            
            this.append(e2);

    }

    if ( this.app.screen.screenType !== 'mobile' ) {
        
            const e3 = new DesktopView(this.app);
            
            
            
            this.append(e3);

    }
                }
            }

            

            