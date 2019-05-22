function isNull(data) {
  return data === 'null' || data === null || data === undefined || data === '';
}

function isEmpty(array) {
  return array === null || array === undefined || array.length === 0;
}

function getLength(array) {
  return isEmpty(array) ? 0 : array.length;
}

function isEqualLengh(array1, array2) {
  return getLength(array1) === getLength(array2);
}

function stripHtml(html) {
  try {
    let str = html.toString();
    str = str.replace(/<(?:.|\s)*?>|(?:&nbsp;)/g, '');
    return str || '';
  } catch (err) {
    console.log('err', err);
    return '';
  }
}

function formatPhoneNumber(phoneNumberString) {
  const cleaned = (`${phoneNumberString}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumberString;
}

function formatPostalCode(postalCodeString) {
  const cleaned = (`${postalCodeString}`).replace(/^\s+|\s+$/g, '');
  const match = cleaned.match(/^(.{3})(.{3})$/);
  if (match) {
    return `${match[1]} ${match[2].replace(/^\s+|\s+$/g, '')}`.toLocaleUpperCase();
  }
  return cleaned;
}

function isArray(a) {
  return (!!a) && (a.constructor === Array);
}

function isObject(a) {
  return (!!a) && (a.constructor === Object);
}

function convertObjectToArray(object) {
  return isObject(object) ? [object] : object;
}

export {
  isNull,
  isEmpty,
  getLength,
  isEqualLengh,
  stripHtml,
  formatPhoneNumber,
  formatPostalCode,
  convertObjectToArray,
  isArray,
  isObject
};
