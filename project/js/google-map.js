// // Create the script tag, set the appropriate attributes
// var script = document.createElement("script");
// script.src =
//   "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDEGd-tXu2iz23vMMxSw4WAvl2WRCX32M";
// script.async = true;
// // https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly&language=ar&region=E
// //
// // Attach your callback function to the `window` object
// window.initMap = function () {
//   // JS API is loaded and available
//   var myLatLng = { lat: 29.406507286385217, lng: 31.164998303822074 }; // Replace with your latitude and longitude ,
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: myLatLng,
//   });
//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: "My Location",
//   });
//   var infowindow = new google.maps.InfoWindow({
//     content: "My Location",
//   });
//   marker.addListener("click", function () {
//     infowindow.open(map, marker);
//   });
//   var directionsService = new google.maps.DirectionsService();
//   var directionsRenderer = new google.maps.DirectionsRenderer();
//   directionsRenderer.setMap(map);
//   var btn = document.getElementById("directions");
//   btn.addEventListener("click", function () {
//     var request = {
//       origin: myLatLng,
//       destination: "San Francisco, CA", // Replace with your destination address
//       travelMode: "DRIVING",
//     };
//     directionsService.route(request, function (result, status) {
//       if (status == "OK") {
//         directionsRenderer.setDirections(result);
//       }
//     });
//   });
// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);

// window.onload = function initMap() {
//   // var myLatLng = { lat: 29.406507286385217, lng: 31.164998303822074 }; // Replace with your latitude and longitude ,
//   // var map = new google.maps.Map(document.getElementById("map"), {
//   //   zoom: 12,
//   //   center: myLatLng,
//   // });
//   // var marker = new google.maps.Marker({
//   //   position: myLatLng,
//   //   map: map,
//   //   title: "My Location",
//   // });
//   // var infowindow = new google.maps.InfoWindow({
//   //   content: "My Location",
//   // });
//   // marker.addListener("click", function () {
//   //   infowindow.open(map, marker);
//   // });
//   // var directionsService = new google.maps.DirectionsService();
//   // var directionsRenderer = new google.maps.DirectionsRenderer();
//   // directionsRenderer.setMap(map);
//   // var btn = document.getElementById("directions");
//   // btn.addEventListener("click", function () {
//   //   var request = {
//   //     origin: myLatLng,
//   //     destination: "San Francisco, CA", // Replace with your destination address
//   //     travelMode: "DRIVING",
//   //   };
//   //   directionsService.route(request, function (result, status) {
//   //     if (status == "OK") {
//   //       directionsRenderer.setDirections(result);
//   //     }
//   //   });
//   // });
// };

// function initMap() {
//   const cairo = {
//     lat: 29.406507286385217,
//     lng: 31.164998303822074,
//   };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     scaleControl: true,
//     center: cairo,
//     zoom: 16,
//   });
//   const infowindow = new google.maps.InfoWindow();

//   infowindow.setContent("<b>القاهرة</b>");

//   const marker = new google.maps.Marker({
//     map,
//     position: cairo,
//   });

//   marker.addListener("click", () => {
//     infowindow.open(map, marker);
//   });
// }

// window.initMap = initMap;
