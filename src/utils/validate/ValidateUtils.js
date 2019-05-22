import { validation } from './Validate';
import theme from '../../../theme';
import { isNull } from '..';

const validateJS = require('validate.js');

function validate(fieldName, value) {
  const formValues = {};
  formValues[fieldName] = isNull(value) ? undefined : value;

  const formFields = {};
  formFields[fieldName] = validation[fieldName];

  const result = validateJS(formValues, formFields);

  if (result) {
    return theme.string.translate([result[fieldName][0]]);
  }
  return null;
}

function validatePassword(fieldName1, fieldName2, value1, value2) {
  const formValues = {};
  formValues[fieldName1] = value1;
  formValues[fieldName2] = value2;

  const formFields = {};
  formFields[fieldName2] = validation[fieldName2];

  const result = validateJS(formValues, formFields);

  if (result) {
    return theme.string.translate([result[fieldName2][0]]);
  }
  return null;
}

export {
  validate,
  validatePassword
};
