import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ButtonGroup, ListItem } from 'react-native-elements';
import theme from '../../../../theme';
import { HeaderView } from '../../../widget';
import { OnlyLoading } from '../../../hoc';
import { forecastActions } from '../../../redux/modules/actions';
import { isEmpty } from '../../../utils';

const OverlayOnlyLoading = OnlyLoading(View);
type Props = {};
class OverlayComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.getForecastWeather();
  }

  updateIndex = (index) => {
    this.setState({ index }, () => {
      this.getForecastWeather(index === 0 ? 'imperial' : 'metric');
    });
  };

  getForecastWeather = (units = 'imperial') => {
    const { coordinate: { latitude: lat, longitude: lon } } = this.props;
    this.props.forecastActions.getForecastWeatherRequest({ lat, lon, units });
  };

  rowRenderer = ({ item }) => (
    <ListItem
      bottomDivider
      topDivider
      title={item.date}
      titleStyle={styles.title}
      subtitle={`${item.main.temp}`}
      subtitleStyle={styles.subtitle}
    />
  );

  keyExtractor = (item, index) => `${index}_${item.weather[0].id}`;

  render() {
    const { index } = this.state;
    const { title, onClose, forecastData } = this.props;
    const buttons = ['\u2109', '\u2103'];
    return (
      <View style={styles.container}>
        <HeaderView
          centerComponent={{ text: title }}
          leftComponent={{ icon: 'close', onPress: () => onClose(undefined) }}
          rightComponent={(
            <ButtonGroup
              buttons={buttons}
              selectedIndex={index}
              onPress={this.updateIndex}
            />
          )}
        />
        <OverlayOnlyLoading loading={forecastData.loading} message={forecastData.message}>
          {
            !isEmpty(forecastData.data) && (
              <FlatList
                data={forecastData.data}
                renderItem={this.rowRenderer}
                keyExtractor={this.keyExtractor}
              />
            )
          }
        </OverlayOnlyLoading>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    backgroundColor: theme.color.backgroundPrimary
  },
  title: {
    fontFamily: theme.font.bold,
    color: theme.color.primary,
    fontSize: theme.size.text_size_medium,
  },
  subtitle: {
    fontFamily: theme.font.semiBold,
    color: theme.color.textLoginSecondary,
    fontSize: theme.size.text_size_v_medium,
  }
});

function mapStateToProps(state) {
  return {
    forecastData: state.forecastReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    forecastActions: bindActionCreators(forecastActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayComponent);
