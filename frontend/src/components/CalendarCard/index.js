import React, { useState } from 'react';
import Calendar, { DatePicker } from 'react-calendar';
let today = new Date()

export default function CalendarMonth(month) {

    const today = new Date();
    const time = today.getTime();
    let nextmonth = new Date(today.setMonth(today.getMonth() + 1))
    let thismonth = new Date(time)

    let year1 = thismonth.getFullYear()
    let month1 = thismonth.getFullYear()
    let dat1 = thismonth.getDate()


    const [value, onChange] = useState(thismonth)
    const [value2, onChange2] = useState(nextmonth);
    // console.log(thismonth, nextmonth);
    return (
        <div id='calcont'>
            <Calendar
                selectRange={true}
                onChange={onChange}
                value={value}
            />
            <Calendar
                // activeStartDate
                selectRange={true}
                onChange={onChange2}
                value={value2}
            />
        </div>
    );
}