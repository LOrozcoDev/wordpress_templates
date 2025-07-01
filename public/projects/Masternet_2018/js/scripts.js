jQuery(document).ready(function ($) {
  if ($("#map").length > 0) {
    var map = new GMaps({
      div: "#map",
      lat: 9.10466,
      scrollwheel: false,
      zoom: 14,
      lng: -79.572415,
    });
    map.addMarker({
      lat: 9.10466,
      lng: -79.572415,
      //icon: "img/triplex_mark.png",
      title: "Masternet",
    });
  }
});
