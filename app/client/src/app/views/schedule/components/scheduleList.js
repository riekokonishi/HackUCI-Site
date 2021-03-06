import React from "react";
import ScheduleEventCard from "./scheduleEventCard";

const DAYS = ["Friday", "Saturday", "Sunday"];

function ScheduleList({ now, scheduleEvents }) {
  return (
    <div className="schedule-list">
      {DAYS.map(day => (
        <section id={day.toLowerCase()} key={day}>
          <h3 className="schedule-heading">~ {day} ~</h3>
          <ul>
            {scheduleEvents[day.toLowerCase()].map(event => (
              <li key={event.title}>
                <ScheduleEventCard now={now} {...event} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default ScheduleList;
