// tslint:disable
			declare var UMD: any;
			UMD = UMD || { resolvePath: (v) => v };
			export const ModuleFiles =
				{
  "src": {
    "web": {
      "images": {
        "add_png": UMD.resolvePath("web-atoms-samples/src/web/images/add.png")
      }
    }
  },
  "Index": "web-atoms-samples/dist/{platform}/Index",
  "views": {
    "MenuList": "web-atoms-samples/dist/{platform}/views/MenuList",
    "samples": {
      "basicControls": {
        "AtomComboBoxSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/AtomComboBoxSample",
        "AtomGridViewSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/AtomGridViewSample",
        "AtomItemsControlSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/AtomItemsControlSample",
        "AtomListBoxSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/AtomListBoxSample",
        "AtomToggleButtonBarSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/AtomToggleButtonBarSample",
        "AtomWindowSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/AtomWindowSample",
        "ButtonSample": "web-atoms-samples/dist/{platform}/views/samples/basic-controls/ButtonSample"
      },
      "bindings": {
        "Binding": "web-atoms-samples/dist/{platform}/views/samples/bindings/Binding"
      },
      "http": {
        "Movies": "web-atoms-samples/dist/{platform}/views/samples/http/Movies"
      },
      "styles": {
        "ListBox": "web-atoms-samples/dist/{platform}/views/samples/styles/ListBox",
        "Panel": "web-atoms-samples/dist/{platform}/views/samples/styles/Panel"
      },
      "viewPager": {
        "Page1": "web-atoms-samples/dist/{platform}/views/samples/view-pager/Page1",
        "Page2": "web-atoms-samples/dist/{platform}/views/samples/view-pager/Page2",
        "ViewPager": "web-atoms-samples/dist/{platform}/views/samples/view-pager/ViewPager"
      },
      "viewStack": {
        "ViewStack": "web-atoms-samples/dist/{platform}/views/samples/view-stack/ViewStack"
      }
    },
    "AppHost": "web-atoms-samples/dist/{platform}/views/AppHost",
    "MenuPage": "web-atoms-samples/dist/{platform}/views/MenuPage",
    "Start": "web-atoms-samples/dist/{platform}/views/Start"
  }
}
