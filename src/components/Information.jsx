import { motion } from "framer-motion";

function Information({ info, timeDate }) {
  const timezone = timeDate.local().zoneName;
  const dayYear = timeDate.local().daysInYear;
  const weekDay = timeDate.local().localWeekday;
  const weekNumber = timeDate.local().localWeekNumber;

  return (
    <motion.div
      animate={{
        y: info ? 0 : 500,
      }}
      className="information-component"
      style={{ display: info ? "flex" : "none" }}
    >
      <div className="left-side">
        <div className="time-zone">
          current timezone
          <h2>{timezone}</h2>
        </div>
        <div className="year-days">
          day of the year
          <h2>{dayYear}</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="week-days">
          day of the week
          <h2>{weekDay}</h2>
        </div>
        <div className="week-number">
          week number
          <h2>{weekNumber}</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Information;
