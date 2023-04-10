"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStyles = void 0;
var mapStyles = [{
  featureType: "all",
  elementType: "geometry",
  stylers: [{
    color: "#2b2b2b"
  }, {
    visibility: "on"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    gamma: 0.01
  }, {
    lightness: "76"
  }, {
    saturation: "16"
  }, {
    color: "#cacaca"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    gamma: "0"
  }, {
    lightness: "-100"
  }, {
    saturation: "-100"
  }, {
    weight: "0.01"
  }, {
    visibility: "off"
  }]
}, {
  featureType: "all",
  elementType: "labels.icon",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "administrative.country",
  elementType: "geometry.stroke",
  stylers: [{
    visibility: "on"
  }, {
    color: "#e4aa00"
  }]
}, {
  featureType: "administrative.province",
  elementType: "geometry.stroke",
  stylers: [{
    visibility: "on"
  }, {
    color: "#e4aa00"
  }]
}, {
  featureType: "administrative.province",
  elementType: "labels.text.fill",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.province",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "landscape",
  elementType: "geometry",
  stylers: [{
    lightness: 30
  }, {
    saturation: "36"
  }, {
    color: "#383838"
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "landscape.natural.landcover",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }, {
    color: "#ff0000"
  }]
}, {
  featureType: "landscape.natural.terrain",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }, {
    color: "#2e2e2e"
  }]
}, {
  featureType: "landscape.natural.terrain",
  elementType: "geometry.fill",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "landscape.natural.terrain",
  elementType: "geometry.stroke",
  stylers: [{
    visibility: "off"
  }, {
    color: "#ead7d7"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    saturation: 20
  }, {
    visibility: "off"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry",
  stylers: [{
    lightness: "3"
  }, {
    saturation: "-100"
  }, {
    gamma: "1"
  }, {
    visibility: "off"
  }]
}, {
  featureType: "poi.park",
  elementType: "labels.text.fill",
  stylers: [{
    visibility: "off"
  }, {
    saturation: "-100"
  }]
}, {
  featureType: "poi.park",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "poi.school",
  elementType: "geometry",
  stylers: [{
    color: "#ff0000"
  }, {
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    lightness: 10
  }, {
    saturation: -30
  }, {
    visibility: "off"
  }, {
    color: "#d7d7d7"
  }]
}, {
  featureType: "road",
  elementType: "geometry.stroke",
  stylers: [{
    saturation: "68"
  }, {
    lightness: "58"
  }, {
    visibility: "off"
  }, {
    gamma: "5.02"
  }, {
    invert_lightness: true
  }]
}, {
  featureType: "road",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry.fill",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry.stroke",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    lightness: -20
  }, {
    visibility: "on"
  }, {
    saturation: "-100"
  }, {
    hue: "#ff0000"
  }]
}, {
  featureType: "water",
  elementType: "labels.text",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "on"
  }, {
    color: "#910c0c"
  }]
}];
exports.mapStyles = mapStyles;