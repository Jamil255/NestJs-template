/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import errors from './en/errors';
import messages from './en/messages';
import validations from './en/validations';

export interface Constants {
  errors: typeof errors;
  messages: typeof messages;
  validations: typeof validations;
}

const constants: Constants = {
  errors,
  messages,
  validations,
};

export default constants;
