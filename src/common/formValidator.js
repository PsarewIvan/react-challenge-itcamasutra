const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const required = (value) => {
  return value ? undefined : 'Required';
};

const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

const maxValue = (max) => (value) =>
  isNaN(value) || value <= max ? undefined : `Should be greater than ${max}`;

export { composeValidators, required, minValue, maxValue };
