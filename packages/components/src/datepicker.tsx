import C from "./_datepicker.module.css";
import { Calendar } from "./calendar";

type DatepickerProps = {};

export function Datepicker(props: DatepickerProps) {
    return (
        <div className={C.datepicker}>
            <Calendar />
        </div>
    );
}
