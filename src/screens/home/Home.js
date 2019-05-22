import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { ButtonGroup, Image } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import theme from '../../../theme';
import LoginContainer from './login';
import SignUpContainer from './signup';
import { authActions } from '../../redux/modules/actions';
import { isNull, showMessage } from '../../utils';
import { pushDashboardScreen } from '../../navigation';

type Props = {};
class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    const { logout, authData, componentId } = this.props;
    const { data } = authData;
    if (data && !logout) pushDashboardScreen(componentId, data.user.email);
    if (logout) this.props.authActions.reset();
  }

  componentDidUpdate(prevProps) {
    const { authData, componentId } = this.props;
    const { authData: prevAuthData } = prevProps;
    if (authData !== prevAuthData) {
      const { message, data } = authData;
      if (!isNull(message)) showMessage(message);
      if (data) pushDashboardScreen(componentId, data.user.email);
    }
  }

  updateIndex = (index) => {
    this.setState({ index });
  };


  render() {
    const { index } = this.state;
    const buttons = [theme.string.translate('sign_in'), theme.string.translate('sign_up')];
    const isLogin = index === 0;
    return (
      <ImageBackground
        style={styles.container}
        source={theme.image.background}
      >
        <Image />
        <ButtonGroup
          buttons={buttons}
          selectedIndex={index}
          onPress={this.updateIndex}
        />

        {
          isLogin ? <LoginContainer {...this.props} /> : <SignUpContainer {...this.props} />
        }

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


function mapStateToProps(state) {
  return {
    authData: state.authReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
