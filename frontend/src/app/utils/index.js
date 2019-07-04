import { Statuses } from '../config';

export default class Utils {
  static truncate(string, maxLength, separator = '...', position = 'right') {
    if (string === null) {
      return null;
    }

    if (string.length <= maxLength) {
      return string;
    }

    const charsToShow = maxLength;
    let frontChars = '';
    let backChars = '';

    switch (position) {
      case 'center':
        frontChars = Math.ceil(charsToShow / 2);
        backChars = Math.floor(charsToShow / 2);
        break;
      case 'left':
        backChars = Math.floor(charsToShow);
        break;
      case 'right':
      default:
        frontChars = Math.ceil(charsToShow);
        break;
    }

    return string.substr(0, frontChars) + separator + string.substr(string.length - backChars);
  }

  static getVehiclesStatus(status) {
    return Statuses.filter(defaultStatus => defaultStatus.value === status)[0].label;
  }
}
