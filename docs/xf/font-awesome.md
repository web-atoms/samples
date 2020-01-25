# Font Awesome

It is very easy to use Font Awesome in Web Atoms for Xamarin.Forms. You can use everything within TypeScript with very little setup inside the Application.

## Assets/Resources

Add Font Awesome fonts from their respective website. And follow setup to include them in Android/iOS apps.

## Label
```typescript

import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";

export default class Sample extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.StackLayout>

                    {/** Label Example */}
                    <XF.Label
                        text={FontAwesomeRegular.smiley}
                        fontFamily={FontAwesomeRegular} />

                    {/** ImageSource */}
                    <XF.ImageButton>
                        <XF.ImageButton.Source>
                            <XF.FontImageSource
                                glyph={FontAwesomeRegular.smiley}
                                fontFamily={FontAwesomeRegular} />
                        </XF.ImageButton.Source>
                    </XF.ImageButton>

                </XF.StackLayout>
            </XF.ContentPage>
        );
    }

}

```
