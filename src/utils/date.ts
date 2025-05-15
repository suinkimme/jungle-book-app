export const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const formatDateWithWeekday = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();
  return `${month}월 ${day}일 (${WEEKDAYS[weekday]})`;
};
