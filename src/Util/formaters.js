/**  Third party components or libs */
import moment from "moment";
/**  Aria references */
import { timeFormat } from "../Constants/timeFormat"  

/**
 * Method to apply the default currency format (USD).
 * @param {Number} number The number
 * @return {String} The formatted currency
 */
export const toDisplayCurrency = (number, currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency
  }).format(number);

/**
 * Method to apply the default number format (999,999.99).
 * @param {Number} number The number
 * @return {String} The formatted currency
 */
export const toDisplayNumber = number =>
  new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
    number
  );


/**
 * Method to get the current Date in Stringr
 * @return {String} The date string
 */
export const toStringCurrentDate = () => {
  return moment().format("L");
};

/**
 * Method to get the current Date in String
 * @param {Object} date The number
 * @return {String} The date string
 */
export const toStringDate = date => {
  return date.format("L");
};

/**
 * Method to get the display string LOCAL date according to the project format (This functions does not convert to UTC time)
 * @param {Object} date The string date
 * @param {Object} dateFormat The format type
 * @return {String} The date formatted
 */
export const toDisplayLocalDate = (date, dateFormat) => {
  let defaultDate = "0001-01-01T00:00:00";
  if (date === defaultDate) return "";

  return (
    moment(date).isValid() &&
    dateFormat &&
    moment(date, moment.ISO_8601, true)
      .local()
      .format(dateFormat.format.toUpperCase())
  );
};

/**
 * Method to get the display string date according to the project format
 * besides a default formatted time
 * @param {Object} date The string date
 * @return {String} The date formatted
 */
export const dateAndDefaultTimeFormat = (date) => {
  const fd = `dd/MM/yy ${timeFormat.LOCAL_TIME}`;
  return (
    moment(date).isValid() &&
    moment
      .utc(date, moment.ISO_8601)
      .local()
      .format(fd.toUpperCase())
  );
};

/**
 * Method to get the current Date in String
 * @param {String} date The number
 * @return {String} The date string
 */
export const formatterDate = date => {
  if (date === null) return "-";
  return moment(date).format("L");
};
