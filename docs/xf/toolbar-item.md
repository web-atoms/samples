# ToolbarItem Example

```typescript

export default class GridSample extends AtomXFContentPage {

    public create() {

        this.render(
            <XF.ContentPage>
                <XF.ContentPage.toolbarItems>
                    <WA.AtomToolBarItem
                        text="Add"
                        isVisible={Bind.oneWay(() => this.viewModel.showAdd)}
                        command={Bind.event(() => this.viewModel.addItem())}
                        />
                </XF.ContentPage.toolbarItems>
                <XF.Grid>

                </XF.Grid>
            </XF.ContentPage>
        );
    }

}

```