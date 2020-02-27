# Grid Example

```typescript

export default class GridSample extends AtomXFContentPage {

    public create() {

        this.render(
            <XF.ContentPage>
                <XF.Grid>

                    {/** Row Definitions */}

                    <XF.Grid.rowDefinitions>
                        <XF.RowDefinition height="auto"/>
                        <XF.RowDefinition/>
                    </XF.Grid.rowDefinitions>

                    <XF.SearchBar/>

                    <XF.CollectionView
                        { ... XF.Grid.row(1) }>
                    </XF.CollectionView>
                </XF.Grid>
            </XF.ContentPage>
        );
    }

}

```