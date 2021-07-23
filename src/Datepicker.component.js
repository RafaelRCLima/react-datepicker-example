import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    dateFormat="MMMM dd, yyyy"
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    todayButton="Today"
    />
  )
}

export const Yearpicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
    />
  )
}

export const Monthpicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM"
      showMonthYearPicker
    />
  )
}