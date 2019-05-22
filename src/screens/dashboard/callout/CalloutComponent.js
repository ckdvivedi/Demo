import React, { Component, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import theme from '../../../../theme';
import { OnlyMessage } from '../../../hoc';
import { TextView } from '../../../widget';
import { weatherActions } from '../../../redux/modules/actions';
import { fahrenheit2Celsius } from '../../../utils';

const CalloutOnlyMessage = OnlyMessage(View);
type Props = {};
class CalloutComponent extends Component<Props> {
  componentDidMount() {
    const { coordinate: { latitude: lat, longitude: lon } } = this.props;
    this.props.weatherActions.getCurrentWeatherRequest({ lat, lon, units: 'imperial' });
  }

  render() {
    const { title, weatherData } = this.props;
    return (
      <Fragment>
        <TextView
          style={styles.title}
          translate={false}
        >
          {title}
        </TextView>
        <CalloutOnlyMessage loading={weatherData.loading} message={weatherData.message}>
          {
            weatherData.data && (
            <Fragment>
              <TextView style={styles.subtitle}>current_weather</TextView>
              <TextView
                style={styles.temperature}
                value={` ${weatherData.data.main.temp} \u2109`}
              >
                fahrenheit
              </TextView>
              <TextView
                style={styles.temperature}
                value={` ${fahrenheit2Celsius(weatherData.data.main.temp)} \u2103`}
              >
                celsius
              </TextView>
              <TextView
                style={styles.forecast}
              >
                weather_forecast
              </TextView>
            </Fragment>
            )
          }
        </CalloutOnlyMessage>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.font.bold,
    color: theme.color.primary,
    fontSize: theme.size.text_size_v_large,
  },
  subtitle: {
    fontFamily: theme.font.bold,
    color: theme.color.textLoginSecondary,
    fontSize: theme.size.text_size_medium,
  },
  temperature: {
    fontFamily: theme.font.semiBold,
    color: theme.color.textLoginSecondary,
    fontSize: theme.size.text_size_v_medium,
  },
  forecast: {
    fontFamily: theme.font.bold,
    color: theme.color.error,
    fontSize: theme.size.text_size_medium,
    textDecorationLine: 'underline'
  }
});

function mapStateToProps(state) {
  return {
    weatherData: state.weatherReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalloutComponent);
