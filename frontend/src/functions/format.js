/**
 * Format Day
 * Allows you to format dates by letter
 * For example Lundi in 'L'
 * @param { Number } day weekday date from on range 1-7
 * @returns { String } dates by letter 'L' for 1 | 'M' for 2  ...
 */
export function formatDay(day) {
  switch (day) {
    case 1:
      return 'L';
    case 2:
      return 'M';
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
    default:
      return '?';
  }
}

export default formatDay;
