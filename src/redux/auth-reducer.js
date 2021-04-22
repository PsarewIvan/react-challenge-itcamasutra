const initialState = {
  emailAriaText: 'Please type your email',
  emailPlaceholder: 'Email',
  passwordAriaText: 'Please type your password',
  buttonSubmitText: 'Log into your account',
  passwordPlaceholder: 'Password',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { authReducer };
