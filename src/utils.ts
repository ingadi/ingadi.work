const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getYearMonthDay(date: Date) {
  const [year, month, day] = date.toISOString().substring(0, 10).split("-");

  return [year, month, day] as const;
}

export function formatDate(date: Date) {
  const [year, month, day] = getYearMonthDay(date);
  return `${monthNames[Number(month) - 1]} ${day}, ${year}`;
}

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
