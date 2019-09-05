// tslint:disable
		declare var UMD: any;
		UMD = UMD || { resolvePath: (v) => v };
		export const ModuleFiles =
			{
  "src": {
    "images": {
      "github": {
        "GitHubMark120pxPlus_png": UMD.resolvePath("web-atoms-samples/src/images/github/GitHub-Mark-120px-plus.png"),
        "GitHubMark32px_png": UMD.resolvePath("web-atoms-samples/src/images/github/GitHub-Mark-32px.png"),
        "GitHubMark64px_png": UMD.resolvePath("web-atoms-samples/src/images/github/GitHub-Mark-64px.png"),
        "GitHubMarkLight120pxPlus_png": UMD.resolvePath("web-atoms-samples/src/images/github/GitHub-Mark-Light-120px-plus.png"),
        "GitHubMarkLight32px_png": UMD.resolvePath("web-atoms-samples/src/images/github/GitHub-Mark-Light-32px.png"),
        "GitHubMarkLight64px_png": UMD.resolvePath("web-atoms-samples/src/images/github/GitHub-Mark-Light-64px.png")
      },
      "indiaFlagIcon32_png": UMD.resolvePath("web-atoms-samples/src/images/india-flag-icon-32.png")
    },
    "web": {
      "images": {
        "add_png": UMD.resolvePath("web-atoms-samples/src/web/images/add.png")
      }
    }
  },
  "core": {
    "web": {
      "FileViewer": "web-atoms-samples/dist/core/web/FileViewer"
    }
  },
  "samples": {
    "web": {
      "bindings": {
        "simple": {
          "Binding": "web-atoms-samples/dist/samples/web/bindings/simple/Binding"
        }
      },
      "calendar": {
        "customTemplate": {
          "CustomCalendar": "web-atoms-samples/dist/samples/web/calendar/custom-template/CustomCalendar"
        },
        "simple": {
          "Calendar": "web-atoms-samples/dist/samples/web/calendar/simple/Calendar"
        }
      },
      "dateField": {
        "customTemplate": {
          "CustomDateField": "web-atoms-samples/dist/samples/web/date-field/custom-template/CustomDateField"
        },
        "simple": {
          "DateField": "web-atoms-samples/dist/samples/web/date-field/simple/DateField"
        }
      },
      "form": {
        "autoFocus": {
          "AutoFocusNext": "web-atoms-samples/dist/samples/web/form/auto-focus/AutoFocusNext"
        },
        "custom": {
          "CustomFormSample": "web-atoms-samples/dist/samples/web/form/custom/CustomFormSample",
          "CustomTemplate": "web-atoms-samples/dist/samples/web/form/custom/CustomTemplate"
        },
        "sideBySide": {
          "SideBySideForm": "web-atoms-samples/dist/samples/web/form/side-by-side/SideBySideForm"
        },
        "simple": {
          "SimpleForm": "web-atoms-samples/dist/samples/web/form/simple/SimpleForm"
        }
      },
      "validations": {
        "custom": {
          "CustomValidation": "web-atoms-samples/dist/samples/web/validations/custom/CustomValidation"
        },
        "multiViewModel": {
          "Applicant": "web-atoms-samples/dist/samples/web/validations/multi-view-model/Applicant",
          "Insurance": "web-atoms-samples/dist/samples/web/validations/multi-view-model/Insurance"
        },
        "simple": {
          "SimpleValidation": "web-atoms-samples/dist/samples/web/validations/simple/SimpleValidation"
        }
      },
      "services": {
        "http": {
          "simple": {
            "Movies": "web-atoms-samples/dist/samples/web/services/http/simple/Movies"
          }
        }
      },
      "containers": {
        "viewPager": {
          "Page1": "web-atoms-samples/dist/samples/web/containers/view-pager/Page1",
          "Page2": "web-atoms-samples/dist/samples/web/containers/view-pager/Page2",
          "ViewPager": "web-atoms-samples/dist/samples/web/containers/view-pager/ViewPager"
        },
        "viewStack": {
          "ViewStack": "web-atoms-samples/dist/samples/web/containers/view-stack/ViewStack"
        }
      }
    }
  },
  "Index": "web-atoms-samples/dist/{platform}/Index",
  "views": {
    "MDHost": "web-atoms-samples/dist/{platform}/views/MDHost",
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
      "conditional": {
        "ConditionalView": "web-atoms-samples/dist/{platform}/views/samples/conditional/ConditionalView",
        "DesktopView": "web-atoms-samples/dist/{platform}/views/samples/conditional/DesktopView",
        "MobileView": "web-atoms-samples/dist/{platform}/views/samples/conditional/MobileView"
      },
      "frame": {
        "FrameSample": "web-atoms-samples/dist/{platform}/views/samples/frame/FrameSample",
        "Page1": "web-atoms-samples/dist/{platform}/views/samples/frame/Page1",
        "Page2": "web-atoms-samples/dist/{platform}/views/samples/frame/Page2"
      },
      "http": {
        "Movies": "web-atoms-samples/dist/{platform}/views/samples/http/Movies"
      },
      "responsive": {
        "Responsive": "web-atoms-samples/dist/{platform}/views/samples/responsive/Responsive"
      },
      "styles": {
        "FontAwesome": "web-atoms-samples/dist/{platform}/views/samples/styles/FontAwesome",
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
      },
      "virtualListBox": {
        "VirtualListBoxSample": "web-atoms-samples/dist/{platform}/views/samples/virtual-list-box/VirtualListBoxSample"
      },
      "bindings": {
        "Binding": "web-atoms-samples/dist/{platform}/views/samples/bindings/Binding"
      },
      "comboBox": {
        "ComboBoxSample": "web-atoms-samples/dist/{platform}/views/samples/combo-box/ComboBoxSample"
      }
    },
    "AppHost": "web-atoms-samples/dist/{platform}/views/AppHost",
    "MenuPage": "web-atoms-samples/dist/{platform}/views/MenuPage",
    "Start": "web-atoms-samples/dist/{platform}/views/Start"
  }
}
