import React, { Component } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import OverlayComponentContainer from './overlay';
import theme from '../../../theme';
import { getRegionForCoordinates } from '../../utils';
import CalloutComponentContainer from './callout';
import { pushLoginScreen } from '../../navigation';

const { markers } = theme.raw;

type Props = {};
class Dashboard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      markerData: undefined,
      overlayVisible: false,
      region: getRegionForCoordinates(markers.map(({ coordinate }) => coordinate))
    };
    this.markerRefs = [];
    Navigation.events().bindComponent(this);
  }

  setOverlayVisibility=(markerData, index) => {
    const overlayVisible = !!markerData;
    this.setState({
      markerData,
      overlayVisible
    }, () => {
      if (overlayVisible) this.markerRefs[index].hideCallout();
    });
  };

  setMarkerRef = (ref) => {
    this.markerRefs.push(ref);
  };

  navigationButtonPressed({ buttonId }) {
    switch (buttonId) {
      case 'logout':
        pushLoginScreen(true);
        break;
      default:
        break;
    }
  }

  render() {
    const { region, overlayVisible, markerData } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}
        >
          {
            markers.map((marker, index) => {
              const { id, coordinate, title } = marker;
              return (
                <Marker
                  ref={this.setMarkerRef}
                  key={`${id}`}
                  coordinate={coordinate}
                  title={title}
                  onPress={() => this.setOverlayVisibility(undefined, index)}
                  onCalloutPress={() => this.setOverlayVisibility(marker, index)}
                >
                  <Callout>
                    <CalloutComponentContainer {...marker} />
                  </Callout>
                </Marker>
              );
            })
          }
        </MapView>
        {overlayVisible && (
          <OverlayComponentContainer
            onClose={this.setOverlayVisibility}
            {...markerData}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Dashboard;
