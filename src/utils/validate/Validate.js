const validation = {
  name: {
    presence: {
      message: '^error_name'
    }
  },
  email: {
    presence: {
      message: '^error_email'
    },
    format: {
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '^error_valid_email'
    }
  },
  password: {
    presence: {
      message: '^error_password'
    },
    length: {
      minimum: 6,
      message: '^error_valid_password'
    }
  },
  confirmPassword: {
    presence: {
      message: '^error_confirm_password'
    },
    equality: {
      attribute: 'password',
      message: '^error_valid_confirm_password'
    }
  }
};

export { validation };
