// Define the type for the Errors object
export interface Errors {
  default: string;
  notFound: string;
  invalidScope: string;
  account: {
    inactive: string;
    expired: string;
    invalidCode: string;
    emailExists: string;
    invalid: string;
    confirmPasswordNotMatch: string;
    unsubscribed: string;
  };
  user: {
    notExists: string;
  };
  reset: {
    invalid: string;
    error: string;
    expired: string;
  };
  credentials: {
    invalid: string;
  };
  login: {
    loginRequirment: string;
  };
}

// Create the constants object
const errors: Errors = {
  default: 'Whoops, looks like something went wrong.',
  notFound: 'The :attribute does not exist.',
  invalidScope: 'You are not allowed to :attribute.',
  account: {
    inactive:
      'Your account is currently inactive. Please reach out to the administrator for assistance.',
    expired: 'This account has been used before, please contact administrator.',
    invalidCode: ':attribute is invalid or expired.',
    emailExists: 'Email address already exists.',
    invalid: 'You have entered an invalid :attribute! Please try again.',
    confirmPasswordNotMatch:
      'New password and confirm password must be exactly the same.',
    unsubscribed: `You are not subscribed to the platform. If you wish to subscribe, please visit our website or contact support for assistance :link`,
  },
  user: {
    notExists:
      'Your provided email address is not valid. Please contact the administrator.',
  },
  reset: {
    invalid:
      'Sorry, you have entered an invalid email. Please enter valid email to reset your password.',
    error: 'Whoops. Something went wrong!.',
    expired: 'Please reset your password again because your link has expired.',
  },
  credentials: {
    invalid: 'You have entered invalid credentials! Please try again.',
  },
  login: {
    loginRequirment: 'Must enter email or phone number.',
  },
};

// Export the constants object as default
export default errors;
