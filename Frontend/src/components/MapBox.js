import React, { useEffect, useState } from 'react';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function MapBox() {
  const loadMap = () => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWF2YWlnMjA2OSIsImEiOiJja3gyNjhkdG0xOTljMnBueTluZnA0YzFzIn0.eZB9Au7ertDodRUyEVQHZQ';
    var map = new mapboxgl.Map({
      container: 'mapbox-map',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  };

  useEffect(() => {
    loadMap();
  }, []);

  //   return <div id='mapbox-map'></div>;
  return (
    <div id='mapbox-map' style={{ height: '100%' }}>
      Mapbox
    </div>
  );
}

export default MapBox;
