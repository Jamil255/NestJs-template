// messages.ts

// Define the type for the messages object
export interface Messages {
  success: string;
  login: {
    successful: string;
  };
  logout: {
    successful: string;
  };
  passwordReset: {
    success: string;
    set: string;
    valid: string;
    reset: string;
  };
  sendVerificationCode: {
    success: string;
    resend: string;
  };
  contact: {
    success: string;
  };
  signup: {
    success: string;
  };
  subscription: {
    success: string;
  };
}

// Create the constants object
const messages: Messages = {
  success: ':attribute been :action successfully.',
  login: {
    successful: 'You have signed in successfully.',
  },
  logout: {
    successful: 'You have signed out successfully.',
  },
  passwordReset: {
    success:
      'We have sent an email containing instructions on how to change your password.',
    set: 'Your password has been created successfully.',
    valid: 'Password token is valid.',
    reset:
      'Your password has been updated successfully! You can now continue to login.',
  },
  sendVerificationCode: {
    success:
      'Verification code has been sent successfully. Please check your inbox for the verification code.',
    resend: 'Verification code has been resent successfully.',
  },
  contact: {
    success:
      'Thank you for contacting us. Our team will reach you out shortly.',
  },
  signup: {
    success: 'Verification code has been sent to your mobile number and email.',
  },
  subscription: {
    success: 'You have subscribed successfully',
  },
};

// Export the constants object as default
export default messages;
