import React, { useEffect, useState } from 'react';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function MapBox() {
  const loadMap = () => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWF2YWlnMjA2OSIsImEiOiJja3gyNjhkdG0xOTljMnBueTluZnA0YzFzIn0.eZB9Au7ertDodRUyEVQHZQ';
    // var map = new mapboxgl.Map({
    //   container: 'mapbox-map',
    //   // style: 'mapbox://styles/mapbox/satellite-v9',
    //   style: 'mapbox://styles/mapbox/light-v10',
    //   center: [78.9629, 20.5937],
    //   zoom: 3.5,
    //   minZoom: 3.5,
    // });

    // map.on('load', () => {
    //   console.log('map loaded');
    //   map.addSource('mapbox-terrain', {
    //     type: 'vector',
    //     // Use any Mapbox-hosted tileset using its tileset id.
    //     // Learn more about where to find a tileset id:
    //     // https://docs.mapbox.com/help/glossary/tileset-id/
    //     url: 'mapbox://aavaig2069.4p9dmkt8',
    //   });
    //   map.addLayer({
    //     id: 'terrain-data',
    //     type: 'line',
    //     source: 'mapbox-terrain',
    //     'source-layer': 'contour',
    //     layout: {
    //       'line-join': 'round',
    //       'line-cap': 'round',
    //     },
    //     paint: {
    //       'line-color': '#ff69b4',
    //       'line-width': 1,
    //     },
    //   });
    // });

    // mapboxgl.accessToken = 'pk.eyJ1IjoiZm9ybXVsYTQiLCJhIjoiY2lzNWl5N3RpMDNhYTNvcDFvNGVrZmZheCJ9.2X-n4Yk2XyxYqoPbP_IMnQ';

    var map = new mapboxgl.Map({
      container: 'mapbox-map',
      maxZoom: 5.99,
      minZoom: 4,
      zoom: 5,
      center: [-75.789, 41.874],
      style: 'mapbox://styles/mapbox/satellite-v9',
    });

    map.on('load', function () {
      map.addSource('myImageSource', {
        type: 'image',
        url: 'radar.gif',
        coordinates: [
          [-80.425, 46.437],
          [-71.516, 46.437],
          [-71.516, 37.936],
          [-80.425, 37.936],
        ],
      });

      map.addLayer({
        id: 'overlay',
        source: 'myImageSource',
        type: 'raster',
        paint: {
          'raster-opacity': 0.85,
        },
      });
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
