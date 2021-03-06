import React, { useState, useEffect } from "react";
import moment from "moment";

import { hackingStart, hackingEnd } from "assets/data/schedule-data";

const intervals = [];

// will keep days if > 2 else have up to 48 hours
const _parseDuration = duration => {
  const D = duration.asDays() > 2 ? Math.trunc(duration.asDays()) : 0;
  const HH = (D === 0 ? Math.trunc(duration.asHours()) : duration.hours())
    .toString()
    .padStart(2, "0");
  const mm = duration
    .minutes()
    .toString()
    .padStart(2, "0");
  const ss = duration
    .seconds()
    .toString()
    .padStart(2, "0");
  return [D, HH, mm, ss];
};

function Countdown() {
  const [now, setNow] = useState(moment());

  useEffect(() => {
    const updateCountdown = () => {
      setNow(moment());
    };

    intervals.push(setInterval(updateCountdown, 1000));

    return () => {
      // remove interval on cleanup
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  if (now.isAfter(hackingEnd)) {
    return (
      <div className="countdown" style={{ "--cell-stretch": 2 }}>
        <CountdownClock days={0} hours={0} minutes={0} seconds={0} />
        <h3>Devpost submissions have closed</h3>
      </div>
    );
  }

  const target = now.isAfter(hackingStart) ? hackingEnd : hackingStart;

  const diff = moment.duration(target.diff(now));
  const countdownTime = _parseDuration(diff);

  const targetMessage =
    target === hackingStart ? (
      <>Until Opening Ceremony</>
    ) : (
      <>
        Until{" "}
        <a href="https://hackuci-2021.devpost.com/">Devpost Submissions</a>{" "}
        Close
      </>
    );

  return (
    <div
      className="countdown"
      id={target === hackingStart ? "current" : null}
      style={{ "--cell-stretch": countdownTime.length[0] > 0 ? 1 : 2 }}
    >
      <CountdownClock
        days={countdownTime[0]}
        hours={countdownTime[1]}
        minutes={countdownTime[2]}
        seconds={countdownTime[3]}
      />
      <div className="h3">{targetMessage}</div>
    </div>
  );
}

const CountdownClock = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown-clock">
      {days > 0 ? (
        <div className="d-flex flex-column">
          <span className="digit">{days}</span>
          <span className="time-label">{`day${days > 1 ? "s" : ""}`}</span>
        </div>
      ) : null}
      <div className="d-flex flex-column">
        <span className="digit">{hours}</span>
        <span className="time-label" aria-label="hours">
          hrs
        </span>
      </div>
      <div className="d-flex flex-column">
        <span className="digit">{minutes}</span>
        <span className="time-label" aria-label="minutes">
          min
        </span>
      </div>
      <div className="d-flex flex-column">
        <span className="digit">{seconds}</span>
        <span className="time-label" aria-label="seconds">
          sec
        </span>
      </div>
    </div>
  );
};

export default Countdown;
