# Grid Example

```typescript

export default class GridSample extends AtomXFContentPage {

    public create() {

        this.render(
            <XF.ContentPage>
                <XF.Grid>

                    {/** Row Definitions */}

                    <XF.Grid.RowDefinitions>
                        <XF.RowDefinition height="auto"/>
                        <XF.RowDefinition/>
                    </XF.Grid.RowDefinitions>

                    <XF.SearchBar/>

                    <XF.CollectionView
                        { ... XF.Grid.Row(1) }>
                    </XF.CollectionView>
                </XF.Grid>
            </XF.ContentPage>
        );
    }

}

```