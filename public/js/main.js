let map;
let lat, lng, add_name;

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  coordinate_data = document.getElementById("coordinate_data");
  lat = coordinate_data.getAttribute("data-lat");
  lng = coordinate_data.getAttribute("data-lng");
  add_name = coordinate_data.getAttribute("data-name");
});

function initMap(lat, lng, add_name) {
  console.log(lat, lng, add_name);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: Number(lat), lng: Number(lng) },
    zoom: 8,
  });
}

function myfunction() {
  initMap(lat, lng, add_name);
}
