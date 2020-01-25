# ToolbarItem Example

```typescript

export default class GridSample extends AtomXFContentPage {

    public create() {

        this.render(
            <XF.ContentPage>
                <XF.ContentPage.ToolbarItems>
                    <WA.AtomToolBarItem
                        text="Add"
                        isVisible={Bind.oneWay(() => this.viewModel.showAdd)}
                        command={Bind.event(() => this.viewModel.addItem())}
                        />
                </XF.ContentPage.ToolbarItems>
                <XF.Grid>

                </XF.Grid>
            </XF.ContentPage>
        );
    }

}

```