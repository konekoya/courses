import axios from 'axios';
import { $ } from './bling';

const mapOptions = {
  center: { lat: 43.2, lng: -79.8 },
  zoom: 10,
};

function loadPlaces(map, lat = 43.2, lng = -79.8) {
  axios.get(`/api/stores/near?lat=${lat}&lng=${lng}`).then(res => {
    const places = res.data;

    if (!places.length) {
      alert('No places found!');
      return;
    }

    const markers = places.map(place => {
      const [placeLng, placeLat] = place.location.coordinates;
      const position = {
        lat: placeLat,
        lng: placeLng,
      };
      const marker = new google.maps.Marker({
        map,
        position,
      });
      marker.place = place;
      return marker;
    });

    console.log(markers);
  });
}

function makeMap(mapDiv) {
  if (!mapDiv) return;
  console.log(mapDiv);
  const map = new google.maps.Map(mapDiv, mapOptions);
  loadPlaces(map);
  const input = $('[name="geolocate"]');
  const autocomplete = new google.maps.places.Autocomplete(input);
}

export default makeMap;
