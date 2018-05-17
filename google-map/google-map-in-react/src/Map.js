import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 24.80361,
      lng: 120.96861,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAcuwtxRrGnd5FE7QJ6Fa98VwfX4DyzHto' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <div lat={24.786603} lng={120.997942} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
