import { Fragment, useEffect, useState } from "react";
import C from "./_calendar.module.css";

type CalendarProps = {};

const days = ["일", "월", "화", "수", "목", "금", "토"];

const space = ["one", "two", "three", "four", "five", "six"] as const;

export function Calendar(props: CalendarProps) {
    const currentDate = new Date();
    const [year, setYear] = useState(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth() + 1);
    const [day, setDay] = useState(currentDate.getDate());

    const [firstDayOfMonth, setFirstDayOfMonth] = useState<number>(
        new Date(year, month - 1, 1).getDay()
    );
    const [lastDayOfMonth, setLastDayOfMonth] = useState<number>(
        new Date(year, month, 0).getDate()
    );

    useEffect(() => {
        setFirstDayOfMonth(new Date(year, month - 1, 1).getDay());
        setLastDayOfMonth(new Date(year, month, 0).getDate());
        if (month < 1) {
            setMonth(12);
            setYear(year - 1);
        } else if (month > 12) {
            setMonth(1);
            setYear(year + 1);
        }

        if (day < 1) {
            setDay(new Date(year, month - 1, 0).getDate());
            setMonth(month - 1);
        } else if (day > new Date(year, month, 0).getDate()) {
            setDay(1);
            setMonth(month + 1);
        }
    }, [month, year, day]);

    return (
        <div>
            {year + " " + month + " " + day}
            <div></div>
            <button type={"button"} onClick={() => setYear(year - 1)}>
                {"◁"}
            </button>
            {year}
            <button type={"button"} onClick={() => setYear(year + 1)}>
                {"▷"}
            </button>
            <button type={"button"} onClick={() => setMonth(month - 1)}>
                {"◁"}
            </button>
            {month}
            <button type={"button"} onClick={() => setMonth(month + 1)}>
                {"▷"}
            </button>
            <button type={"button"} onClick={() => setDay(day - 1)}>
                {"◁"}
            </button>
            {day}
            <button type={"button"} onClick={() => setDay(day + 1)}>
                {"▷"}
            </button>

            <div className={C.calendar__wrapper}>
                <div className={C.calendar__body}>
                    {days.map((day) => {
                        return <div key={day}>{day}</div>;
                    })}
                </div>
                <div className={C.calendar__body}>
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => {
                        return <div></div>;
                    })}
                    {Array.from({ length: lastDayOfMonth }).map((_, i) => {
                        return (
                            <div
                                key={i}
                                className={day === i + 1 ? C.today : ""}
                            >
                                {i + 1}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
