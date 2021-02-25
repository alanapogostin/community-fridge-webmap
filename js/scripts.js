mapboxgl.accessToken = 'pk.eyJ1IjoiYXNwOTA4OSIsImEiOiJja2xrMHk3ZW01Mmk2MnZucmFrM3podmh3In0.qZ1N12EiB17J56BQ5Oy5QQ'

var options = {
  container: 'map-container', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [-73.9665, 40.7812], // starting position [lng, lat]
  zoom: 10 // starting zoom
}


var map = new mapboxgl.Map(options);
