import React, { useState } from 'react';
import Calendar from 'react-calendar';
let today = new Date()

export default function CalendarMonth() {

    const [value, onChange] = useState(today);
    return (
        <div>
            <Calendar
                selectRange={true}
                onChange={onChange}
                value={value}
            />

        </div>
    );
}