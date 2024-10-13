import { MouseEvent, useEffect, useState } from "react";
import C from "./_calendar.module.css";

type CalendarProps = {
    isShow: boolean;
};

const days = ["일", "월", "화", "수", "목", "금", "토"];

export function Calendar(props: CalendarProps) {
    const currentDate = new Date();
    const [year, setYear] = useState<string>(
        currentDate.getFullYear().toString()
    );
    const [month, setMonth] = useState<string>(
        (currentDate.getMonth() + 1).toString().padStart(2, "0")
    );
    const [day, setDay] = useState<string>(
        currentDate.getDate().toString().padStart(2, "0")
    );

    const [startDate, setStartDate] = useState<string>();
    const [endDate, setEndDate] = useState<string>();

    const [firstDayOfMonth, setFirstDayOfMonth] = useState<string>(
        new Date(Number(year), Number(month) - 1, 1).getDay().toString()
    );
    const [lastDateOfMonth, setLastDateOfMonth] = useState<string>(
        new Date(Number(year), Number(month), 0).getDate().toString()
    );

    useEffect(() => {
        setFirstDayOfMonth(
            new Date(Number(year), Number(month) - 1, 1).getDay().toString()
        );
        setLastDateOfMonth(
            new Date(Number(year), Number(month), 0).getDate().toString()
        );

        if (Number(month) < 1) {
            setMonth("12");
            setYear((Number(year) - 1).toString());
        } else if (Number(month) > 12) {
            setMonth("1");
            setYear((Number(year) + 1).toString());
        }

        if (Number(day) < 1) {
            setDay(
                new Date(Number(year), Number(month) - 1, 0)
                    .getDate()
                    .toString()
            );
            setMonth((Number(month) - 1).toString().padStart(2, "0"));
        } else if (
            Number(day) > new Date(Number(year), Number(month), 0).getDate()
        ) {
            setDay("01");
            setMonth((Number(month) + 1).toString().padStart(2, "0"));
        }
    }, [month, year, day]);

    const onSelectDate = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        const attributes = target.attributes as any;
        const clickDate = attributes["data-currentdate"].value;

        if (!startDate || endDate) {
            setStartDate(clickDate);
            setEndDate(undefined);
        } else if (startDate && !endDate) {
            setEndDate(clickDate);
        }
    };

    return (
        <div
            className={`${C.calender__wrapper} ${
                props.isShow === true && C["calender__wrapper--show"]
            }`}
        >
            {year + " " + month + " " + day}
            <div></div>
            <button
                type={"button"}
                onClick={() => setYear((Number(year) - 1).toString())}
            >
                {"◁"}
            </button>
            {year}
            <button
                type={"button"}
                onClick={() => setYear((Number(year) + 1).toString())}
            >
                {"▷"}
            </button>
            <button
                type={"button"}
                onClick={() =>
                    setMonth((Number(month) - 1).toString().padStart(2, "0"))
                }
            >
                {"◁"}
            </button>
            {month}
            <button
                type={"button"}
                onClick={() =>
                    setMonth((Number(month) + 1).toString().padStart(2, "0"))
                }
            >
                {"▷"}
            </button>
            <button
                type={"button"}
                onClick={() =>
                    setDay((Number(day) - 1).toString().padStart(2, "0"))
                }
            >
                {"◁"}
            </button>
            {day}
            <button
                type={"button"}
                onClick={() =>
                    setDay((Number(day) + 1).toString().padStart(2, "0"))
                }
            >
                {"▷"}
            </button>

            <div className={C.calendar__body}>
                {days.map((day) => {
                    return <div key={day}>{day}</div>;
                })}
            </div>
            <div className={C.calendar__body}>
                {Array.from({ length: Number(firstDayOfMonth) }).map((_, i) => {
                    return <div key={i}></div>;
                })}
                {Array.from({ length: Number(lastDateOfMonth) }).map((_, i) => {
                    return (
                        <div
                            key={i}
                            data-currentdate={`${year}${month}${i + 1}`}
                            className={`${C.calender__day} ${
                                Number(day) === i + 1 && C.calender__today
                            } ${
                                startDate === `${year}${month}${i + 1}` &&
                                C["calender__day--selected"]
                            } ${
                                endDate === `${year}${month}${i + 1}` &&
                                C["calender__day--selected"]
                            } ${
                                Number(startDate) <=
                                    Number(`${year}${month}${i + 1}`) &&
                                Number(endDate) >=
                                    Number(`${year}${month}${i + 1}`) &&
                                C["calender__day--selected"]
                            }`}
                            onClick={(e: any) => onSelectDate(e)}
                        >
                            {i + 1}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
