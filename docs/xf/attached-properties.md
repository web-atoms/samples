# Attached Properties

Setting Attached BindableProperty is little tricky, it is done as shown below.

## Grid
```typescript

    <XF.Label
        { ... XF.Grid.row(1) }
        { ... XF.Grid.column(1) }
        { ... XF.Grid.rowSpan(2) }
        { ... XF.Grid.columnSpan(2) }
        />

```

## Bindable Layout
```typescript

    const BindItem = Bind.forData<Item>();

    <XF.StackLayout
        { ... XF.BindableLayout.itemsSource(Bind.oneWay(() => this.viewModel.items)) }
        >
        <XF.BindableLayout.itemTemplate>
            <XF.DataTemplate>
                <Label
                    text={BindItem.oneWay((x) => x.data.label)}/>
            </XF.DataTemplate>
        </XF.BindableLayout.itemTemplate>
    </XF.StackLayout>

```