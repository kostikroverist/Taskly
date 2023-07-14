import { Settings, DateTime } from 'luxon';
import './week-table.css'
Settings.defaultLocale = "en";


const WeekTable = () => {
    const datanow = DateTime.now();
    const startOfWeek = DateTime.now().startOf('week');
    console.log()
    const daysOfWeek = [];
    const daysOfMonth = [];
    for (let i = 0; i < 7; i++) {
        const currentDay = startOfWeek.plus({ days: i });
        daysOfWeek.push(currentDay);
    }
    for (let i = 0; i < 28; i++) {
        const currentMonth = datanow.plus({ day: i })
        daysOfMonth.push(currentMonth);
    }

    return (
        <div className="week-table">
            <div className="bg-thead">
                {daysOfWeek.map((day) => (
                    <div className="day-week" key={day.toISODate()}>
                        {day.toLocaleString({ weekday: 'long' })}
                    </div>
                ))}
            </div>

            <div className="days-of-month">
                {daysOfMonth.map((day) => (
                    <div className="day-of-month" key={day.toISODate()}>
                        {day.day}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WeekTable
