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

    // Create a bound
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();

    const markers = places.map(place => {
      const [placeLng, placeLat] = place.location.coordinates;
      const position = {
        lat: placeLat,
        lng: placeLng,
      };

      bounds.extend(position);

      const marker = new google.maps.Marker({
        map,
        position,
      });
      marker.place = place;
      return marker;
    });

    // When someone clicks on a marker, show the details of that place
    markers.forEach(marker =>
      marker.addListener('click', function() {
        const html = `
          <div className="popup">
            <a href="/store/${this.place.slug}">
              <img src="/uploads/${this.place.photo ||
                'store.png'}" width="300" height="auto" alt="${
          this.place.name
        }"/>
            <p>${this.place.name} - ${this.place.location.address}</p>
            </a>
          </div>
        `;

        infoWindow.setContent(html);
        infoWindow.open(map, this);
        console.log(this);
      }),
    );

    // then zoom the map to fix all the bounds
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
  });
}

function makeMap(mapDiv) {
  if (!mapDiv) return;
  console.log(mapDiv);
  const map = new google.maps.Map(mapDiv, mapOptions);
  loadPlaces(map);
  const input = $('[name="geolocate"]');
  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    loadPlaces(
      map,
      place.geometry.location.lat(),
      place.geometry.location.lng(),
    );
  });
}

export default makeMap;