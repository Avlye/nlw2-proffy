export function convertHourToMinutes (times: string) {
  // 8:00

  const [hour, minutes] = times.split(':').map(Number)
  const timeInMinutes = (hour * 60) + minutes

  return timeInMinutes
}
