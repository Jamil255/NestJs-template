// validation.ts

// Define the type for the validation messages object
export interface PasswordMessages {
  length: string;
  password: string;
  currentPassword: string;
  confirmPassword: string;
  mismatch: string;
  same: string;
  invalid: string;
  allFields: string;
  characters: string;
}

export interface Validations {
  valid: string;
  required: string;
  float: string;
  length: string;
  validLength: string;
  boolean: string;
  string: string;
  numeric: string;
  numberBetween: string;
  charactersBetween: string;
  validOptions: string;
  greaterThan: string;
  maxLength: string;
  array: string;
  arrayLength: string;
  arrayMaxLength: string;
  arrayMinLength: string;
  object: string;
  validURL: string;
  validKEY: string;
  validURI: string;
  dateBeforeNow: string;
  invalidDate: string;
  unique: string;
  notFound: string;
  fileSize: string;
  validPhoneNumber: string;
  validSlug: string;
  minimum: string;
  duration: string;
  invalidEnum: string;
  integer: string;
  password: PasswordMessages;
  alreadyExists: string;
  notAllowed: string;
  arrayEachValue: string;
  decimalPlaces: string;
}

// Create the validation messages object
const validations: Validations = {
  valid: 'Please enter a valid :attribute.',
  required: ':attribute field is required.',
  float: ':attribute field should be float.',
  length: ':attribute field must be between :min to :max characters.',
  validLength: ':attribute field must be :length characters.',
  boolean: ':attribute field should be boolean.',
  string: ':attribute field should be string.',
  numeric: 'Please enter a valid number in :attribute field.',
  numberBetween: ':attribute must be between :min and :max.',
  charactersBetween: ':attribute must be between :min and :max characters.',
  validOptions: 'Please enter a valid :attribute. Valid options are: :options.',
  greaterThan: ':attribute should be greater than :compareWith.',
  maxLength: ':attribute must be :max characters.',
  array: ':attribute field should be array.',
  arrayLength: ':attribute must be array with length between :min and :max.',
  arrayMaxLength: ':attribute can have atmost :max elements.',
  arrayMinLength: ':attribute must have atleast :min elements.',
  object: ':attribute field should be object.',
  validURL: ':attribute must be a valid URL.',
  validKEY: ':attribute must be a valid key.',
  validURI: ':attribute must be a valid Uri e.g. https:xyz.com:443',
  dateBeforeNow: ':attribute should be less than current date.',
  invalidDate: ":attribute valid format is 'YYYY-MM-DD'.",
  unique: ':attribute already exists.',
  notFound: 'This :attribute does not exist.',
  fileSize: 'Max allowed file size is :sizeMB.',
  validPhoneNumber: 'Please enter a valid :attribute e.g. +1 (925) 292-6688.',
  validSlug: 'Please enter a valid slug e.g. abc or abc_',
  minimum: ':attribute should not be less than :min',
  duration: ':attribute must be between :min and :max secs.',
  invalidEnum: 'Invalid :attribute, valid values are :values.',
  integer: ':attribute field should be integer.',
  password: {
    length: ':attribute field must be between 8 to 50 characters.',
    password: 'Password field is required.',
    currentPassword: 'Current password field is required.',
    confirmPassword: 'Confirm password field is required.',
    mismatch: 'The passwords you entered do not match',
    same: 'New password cannot be same as current password.',
    invalid: 'The :field you have entered is incorrect.',
    allFields: 'Please fill all of the required password fields',
    characters: ':attribute must contain atleast one number.',
  },
  alreadyExists: ':attribute already exists.',
  notAllowed: 'You are not allowed to perform this action.',
  arrayEachValue: 'Each value in :attribute must be :type.',
  decimalPlaces: ':attribute must have up to two decimal places.',
};

// Export the validation messages object as default
export default validations;
