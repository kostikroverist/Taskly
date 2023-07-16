import { Day, ITask } from "../../types/Task"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tasklist.css'
import { Settings, DateTime } from 'luxon';


const TaskList = () => {
    const initialDate = DateTime.now();
    const [dataDays, setDataDays] = useState<DateTime>(initialDate);
    const [day, setDay] = useState<Day[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Day[]>(`http://localhost:3004/calendarTask`);
                setDay(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().catch((error) => {
            console.error('Unhandled promise rejection:', error);
        });
    }, [dataDays]);
    const hours = [
        "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ];

    const addDay = (): void => {
        setDataDays(prevDate => prevDate.plus({ days: 1 }))
    }
    const backDay = (): void => {
        setDataDays(prevDate => prevDate.minus({ days: 1 }))
    }
    return (
        <>
            <ul className="tasklist-hours">
                <div className="flex-center">
                    <button className="increment-button" onClick={() => backDay()}>-</button>
                    <h2>{`${dataDays?.day} ${dataDays.monthLong ? dataDays.monthLong : ''}`}</h2>
                    <button className="decrement-button" onClick={() => addDay()}>+</button>
                </div>
                {hours.map((hour) => (
                    <li className="time-work" key={hour}>
                        <p>{hour}</p>
                        <div className="block-task">
                            {day.filter((daytask) => daytask.day === dataDays.day)
                                .flatMap((daytask) =>
                                    daytask.tasks
                                        .filter((task) => task.time === hour)
                                        .map((task) => (
                                            <p key={task.id} className={`${task.importance === 'low' ? 'low' : task.importance === 'hide' ? 'hide' : 'average'}`}>
                                                {task.title}<span className="duration-style">{(hour.replace('00', task.duration))}</span></p>

                                        ))
                                )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );

}

export default TaskList
