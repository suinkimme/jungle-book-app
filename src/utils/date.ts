import dayjs from 'dayjs';

export const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const formatDateWithWeekday = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();
  return `${month}월 ${day}일 (${WEEKDAYS[weekday]})`;
};

export const generateTimeSlots = (startHour = 10, endHour = 22) => {
  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    const start = formatHour(hour);
    const end = formatHour(hour + 1);
    slots.push([start, end]);
  }
  return slots;
};

export const formatHour = (hour: number) => {
  if (hour === 0) {
    return '오전 12:00';
  } else if (hour < 12) {
    return `오전 ${hour}:00`;
  } else if (hour === 12) {
    return '오후 12:00';
  } else {
    return `오후 ${hour - 12}:00`;
  }
};

export const isPast = (date: Date) => {
  return dayjs(date).isBefore(dayjs());
};
