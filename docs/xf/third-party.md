As you have seen in previous article on how to use TypeScript with TSX (JSX) for Xamarin.Forms, it describes usage of default Xamarin.Forms controls.

However, using third party control is super easy, you can either use reflection to generate the class definitions or you can write them easily.

# How it works?

`bridge.getClass(assemblyQualifiedName: string)` returns a .Net Type proxy which you can use to create object.

# Sample

Just by looking at definition, you will understand how to create one...

## Define a class

```typescript

declare class FormField extends RootObject {

   // static field lets you define inline templates
   public static fieldTemplate: NodeFactory;

   public label: string;

   public required: boolean;

   public error: string;

   public errorColor: ColorItem;

   public errorBackgroundColor: ColorItem;

}

const ThirdParty = {
    FormField: bridge.getClass("Namespace.FormField, AssemblyName")
        as typeof FormField
};
```

You may not need to create exact same hierarchy, as creating extra abstract classes do not serve any purpose unless they have some properties.

## How to use?

Once all classes are defined, you can import and use them as shown below.

```typescript
// this imports all default controls of Xamarin.Forms
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import ThirdParty from "../clr/ThirdParty";

export default class MyFormPage extends AtomXFContentPage {
   public create() {
      this.render(
          <XF.ContentPage>
             <XF.StackLayout>
                 // This is typescript component
                 <MyPageHeader/>
                 // this is how you can use your
                 // third party control
                 <ThirdParty.FormField
                     label="Username:"
                     error={Bind.oneWay(() =>
                        this.viewModel.errorUsername)}>
                     <XF.Entry
                        text={Bind.twoWays(() =>
                            this.viewModel.model.username)}
                        />
                 </ThirdParty.FormField>
             </XF.StackLayout>
          </XF.ContentPage>
      );
   }
}
```
> The only reason we include all classes inside a default declaration is, while creating JSX, we can visually distinguish between CLR classes and TypeScript components. So all elements without `.` (Dot) are TypeScript components and all elements with `.` are CLR classes.

## Defining Expandable Properties

This is little hacky, but simple one. Let's see how can we write `MasterDetailPage` in TSX.

```typescript
    <XF.MasterDetailPage>
       <XF.MasterDetailPage.Header>
           <XF.ContentPage ....
           </XF.ContentPage>
       </XF.MasterDetailPage.Header>
    </XF.MasterDetailPage>
```

Definition of MasterDetailPage is as follow,

```typepscript

class MasterDetailPage extends ContentPage {

   // this hacks is required to create expandable property
   public static header = XNode.property();

   public header: any;

}
```

## Defining Attached Property

Control such as `Grid` has attached properties, which we can define and use as follow.

This is how grid is defined...

```typescript
class Grid extends RootObject {

   // following are attached properties
   public static row = AttachedNode;

   public static column = AttachedNode;

   public static rowSpan = AttachedNode;

   public static columnSpan = AttachedNode;

   // following are expandable
   public static rowDefinitions = NodeFactory;

   public static columnDefinitions = NodeFactory;

}
```

### Usage

```typescript

   <XF.Grid>
       <XF.Grid.rowDefinitions>
           <XF.RowDefinition height="Auto"/>
           <XF.RowDefinition/>
       </XF.Grid.rowDefinitions>
       <XF.ListView
           // this is how attached property is used
           { ... XF.Grid.row(1) }
           { ... XF.Grid.columnSpan(2) }
           />
   </XF.Grid>

```

This way, you can define any third party components and you can use them inside TSX.
