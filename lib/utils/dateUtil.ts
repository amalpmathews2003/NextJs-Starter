export default function dateUtil(value: string | number | Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const date = new Date(value);
  if (isNaN(date.getDate())) throw Error("invalid date");

  const hours = date.getHours() % 12 || 12;
  const amPm = hours >= 12 ? "PM" : "AM";
  const minutes = date.getMinutes();
  const day = date.getDay();
  const dayShort = days[day].slice(0, 3);
  const dayLong = days[day];
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const monthShort = months[month - 1].slice(0, 3);
  const monthLong = months[month - 1];
  const dateStringShort = `${day} ${monthShort} ${year}`;
  const dateStringLong = `${day} ${monthLong} ${year}`;

  return {
    hours,
    amPm,
    minutes,
    day,
    dayShort,
    dayLong,
    month,
    year,
    monthShort,
    monthLong,
    dateStringShort,
    dateStringLong,
    date:value
  };
}

