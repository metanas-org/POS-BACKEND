/**
 * A function that returns the current date and time or the current Unix timestamp.
 *
 * @param {string} type - An optional parameter specifying the type of the timestamp. Defaults to undefined.
 * @return {Date | number} - Returns a Date object if the type is not "unix", otherwise returns the current Unix timestamp.
 */
function now(type?: string) {
  return type !== "unix" ? new Date() : Date.now;
}

/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @return {number} The number of days between the two dates.
 */
function getDaysBetweenDates(date1: Date, date2: Date): number {
  const oneDay: number = 1000 * 60 * 60 * 24; // Milliseconds in one day
  const timeDiff: number = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(timeDiff / oneDay);
}
/**
 * Generates a string representation of the time based on the given date.
 *
 * @param {Date} date - The date object to generate the time string from.
 * @return {string} - The formatted time string in the format HH:MM:SS.
 */
function getTimeString(date: Date): string {
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const seconds: number = date.getSeconds();
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
/**
 * Returns a short date string representation of the given date.
 *
 * @param {Date} date - The date to convert.
 * @return {string} The short date string representation.
 */
function getShortDateString(date: Date): string {
  return date.toDateString();
}
/**
 * Returns the ISO 8601 formatted string representation of the given date.
 *
 * @param {Date} date - The date object to convert.
 * @return {string} The ISO 8601 formatted string representation of the given date.
 */
function getISODateString(date: Date): string {
  return date.toISOString();
}

export default {
  now,
  getDaysBetweenDates,
  getTimeString,
  getShortDateString,
  getISODateString,
};
