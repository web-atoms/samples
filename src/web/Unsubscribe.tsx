import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import Pack from "@web-atoms/core/dist/Pack";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import IndexViewModel from "../view-models/IndexViewModel";
import Footer from "./Footer";
import Header from "./Header";
import IndexStyle from "./styles/IndexStyle";

declare var alreadyUnsubscribed: boolean;

@Pack
export default class Unsubscribe extends AtomControl {
	public viewModel: IndexViewModel;

	public create(): void {
		this.defaultControlStyle = IndexStyle;
		this.viewModel = this.resolve(IndexViewModel);

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			id="page-top">
            <Header/>
            <main id="main">
				<div class="container">
					<div class="row">
						<h1>Unsubscribe from Web Atoms Blog</h1>
					</div>
					<div class="row">
                        {alreadyUnsubscribed
                        ?
                            <div>
                                You have successfully unsubscribed from our blog.
                                You will not receive any email from our blog.
                            </div>
                        :
                            <div>
                                Are you sure you want to Unsubscribe from our blog?
                                <form>
                                    <input type="submit" value="Yes"/>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </div>);
    }

}
