import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem, { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import CustomCalendar from "./custom-template/CustomCalendar";
import CustomCalendarViewModel from "./custom-template/CustomCalendarViewModel";
import Calendar from "./simple/Calendar";
import CalendarViewModel from "./simple/CalendarViewModel";

declare var require: { resolve: (a) => string };

export function addCalendarSamples(ms: MenuService) {
    ms.addSamples(require, "Calendar", [
        {
            label: "Simple",
            demo: Calendar,
            files: [
                asView(Calendar),
                asClass(CalendarViewModel)
            ]
        },
        {
            label: "Custom",
            demo: CustomCalendar,
            files: [
                asView(CustomCalendar),
                asClass(CustomCalendarViewModel)
            ]
        }
    ]);
}
