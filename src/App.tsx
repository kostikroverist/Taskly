
import './App.css'

// import { DateTime } from 'luxon';
import WeekTable from './components/WeekTable/WeekTable';
function App() {
  // const startOfWeek = DateTime.now().startOf('week');
  // const daysOfWeek = [];
  // for (let i = 0; i < 7; i++) {
  //   const currentDay = startOfWeek.plus({ days: i });
  //   daysOfWeek.push(currentDay);
  // }

  // daysOfWeek.forEach((day) => {
  //   console.log(day.toISODate());
  // });
  return (
    <>
      <WeekTable />
    </>
  )
}

export default App
