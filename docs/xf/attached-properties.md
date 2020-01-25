# Attached Properties

Setting Attached BindableProperty is little tricky, it is done as shown below.

## Grid
```typescript

    <XF.Label
        { ... XF.Grid.Row(1) }
        { ... XF.Grid.Column(1) }
        { ... XF.Grid.RowSpan(2) }
        { ... XF.Grid.ColumnSpan(2) }
        />

```

## Bindable Layout
```typescript

    <XF.StackLayout
        { ... XF.BindableLayout.ItemsSource(Bind.oneWay(() => this.viewModel.items)) }
        >
        <XF.BindableLayout.ItemTemplate>
            <XF.DataTemplate>
                <Label
                    text={Bind.oneWay((x) => x.data.label)}/>
            </XF.DataTemplate>
        </XF.BindableLayout.ItemTemplate>
    </XF.StackLayout>

```