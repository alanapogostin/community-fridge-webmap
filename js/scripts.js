mapboxgl.accessToken = 'pk.eyJ1IjoiYXNwOTA4OSIsImEiOiJja2xrMHk3ZW01Mmk2MnZucmFrM3podmh3In0.qZ1N12EiB17J56BQ5Oy5QQ'

var options = {
  container: 'map-container', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [-73.9665, 40.7812], // starting position [lng, lat]
  zoom: 9 // starting zoom
}
var map = new mapboxgl.Map(options);

//adding navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// //adding a single marker to the map
// var marker = new mapboxgl.Marker({
//   color: "#FFFFFG",
//   draggable: true
//   }).setLngLat([-73.9665, 40.7812])
//   .addTo(map);

  // //Adding in data
  //   //create the array
  // var fridge = [
  //   {
  //   name: 'North Brooklyn Mutual Aid',
  //   point: [-73.953951, 40.722761]
  //   },
  //   {
  //   name: 'The Friendly Fridge',
  //   point: [-73.9294158, 40.7036455]
  //   }
  // ]



  //create the array
  $.getJSON('./data/community-fridges.json', function(fridges){
    console.log(fridges)

  //looping it all to make points

fridges.forEach(function(fridgerow){
  console.log(fridgerow.organization, fridgerow.location_type, fridgerow.instagram, fridgerow.url)

//defining color of point based on location host type
var html = `
  <h2>${fridgerow.organization}<h2/>
  <h4>
  <div> Host Type: ${fridgerow.location_type} <div/>
  <div> Instagram: @${fridgerow.instagram} <div/>
  <h4/>
`
var color = 'black'

          if (fridgerow.location_type == 'bodega'){
            color = 'yellow'
          }
          if (fridgerow.location_type == 'bar'){
            color = 'blue'
          }
          if (fridgerow.location_type == 'coffee'){
            color = 'brown'
          }
          if (fridgerow.location_type == 'church'){
            color = 'orange'
          }
          if (fridgerow.location_type == 'park'){
            color = 'green'
          }
          if (fridgerow.location_type == 'restaurant'){
            color = 'brown'
          }


  new mapboxgl.Marker({
    color: color
  })
    .setLngLat([fridgerow.longitude, fridgerow.latitude]) // use [] to make it an array
    .setPopup(new mapboxgl.Popup().setHTML(html))
    .addTo(map);
    })
  })

  // adding in all of the community fridge data to the mapbox
