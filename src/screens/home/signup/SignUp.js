import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import { ButtonView, InputView } from '../../../widget';
import { validate, validatePassword } from '../../../utils';

type Props = {};
class SignUp extends Component<Props> {
  doValidate = ({
    name, email, password, confirmPassword
  }) => {
    const errors = {};
    const nameError = validate('name', name);
    const emailError = validate('email', email);
    const passwordError = validate('password', password);
    const confirmPasswordError = validatePassword('password', 'confirmPassword', password, confirmPassword);
    if (nameError) errors.name = nameError;
    if (emailError) errors.email = emailError;
    if (passwordError) errors.password = passwordError;
    if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;
    return errors;
  };

  doSignUp = (values) => {
    this.props.authActions.doSignUpRequest(values);
  };

  render() {
    const { authData } = this.props;
    return (
      <Formik
        initialValues={{
          name: '', email: '', password: '', confirmPassword: ''
        }}
        validate={this.doValidate}
        onSubmit={this.doSignUp}
      >
        {
          ({
            values, errors, handleChange, handleSubmit
          }) => (
            <Fragment>
              <InputView
                ref={(ref) => { this.mobile = ref; }}
                leftIcon={{ name: 'android' }}
                placeholder="full_name"
                value={values.name}
                errorMessage={errors.name}
                onChangeText={handleChange('name')}
                editable={!authData.loading}
                onSubmitEditing={() => this.email.focus()}
              />
              <InputView
                ref={(ref) => { this.email = ref; }}
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
                secureTextEntry
                leftIcon={{ name: 'lock' }}
                placeholder="password"
                value={values.password}
                errorMessage={errors.password}
                onChangeText={handleChange('password')}
                editable={!authData.loading}
                onSubmitEditing={() => this.confirmPassword.focus()}
              />
              <InputView
                ref={(ref) => { this.confirmPassword = ref; }}
                secureTextEntry
                leftIcon={{ name: 'lock' }}
                placeholder="confirm_password"
                returnKeyType="done"
                value={values.confirmPassword}
                errorMessage={errors.confirmPassword}
                editable={!authData.loading}
                onChangeText={handleChange('confirmPassword')}
              />
              <ButtonView
                title="sign_up"
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


export default SignUp;
