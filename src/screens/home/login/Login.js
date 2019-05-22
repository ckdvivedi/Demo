import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import { ButtonView, InputView } from '../../../widget';
import { validate } from '../../../utils';

type Props = {};
class Login extends Component<Props> {
  doValidate = ({ email, password }) => {
    const errors = {};
    const emailError = validate('email', email);
    const passwordError = validate('password', password);
    if (emailError) errors.email = emailError;
    if (passwordError) errors.password = passwordError;
    return errors;
  };

  doLogin = (values) => {
    this.props.authActions.doLoginRequest(values);
  };

  render() {
    const { authData } = this.props;
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={this.doValidate}
        onSubmit={this.doLogin}
      >
        {
          ({
            values, errors, handleChange, handleSubmit
          }) => (
            <Fragment>
              <InputView
                ref={(ref) => { this.mobile = ref; }}
                leftIcon={{ name: 'email' }}
                placeholder="email"
                keyboardType="email-address"
                value={values.email}
                errorMessage={errors.email}
                onChangeText={handleChange('email')}
                editable={!authData.loading}
                onSubmitEditing={() => this.password.focus()}
              />
              <InputView
                ref={(ref) => { this.password = ref; }}
                leftIcon={{ name: 'lock' }}
                secureTextEntry
                placeholder="password"
                returnKeyType="done"
                value={values.password}
                errorMessage={errors.password}
                onChangeText={handleChange('password')}
                editable={!authData.loading}
              />
              <ButtonView
                title="sign_in"
                onPress={handleSubmit}
                disabled={authData.loading}
                loading={authData.loading}
              />
            </Fragment>
          )
        }
      </Formik>
    );
  }
}

export default Login;
