import React, { useEffect, useState } from 'react';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function MapBox() {
  const loadMap = () => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWF2YWlnMjA2OSIsImEiOiJja3gyNjhkdG0xOTljMnBueTluZnA0YzFzIn0.eZB9Au7ertDodRUyEVQHZQ';
    var map = new mapboxgl.Map({
      container: 'mapbox-map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      // style: 'mapbox://styles/mapbox/light-v10',
      center: [78.9629, 20.5937],
      zoom: 3.5,
      minZoom: 3,
    });

    map.on('load', () => {
      const layers = map.getStyle().layers;
      // Find the index of the first symbol layer in the map style
      let firstSymbolId;
      for (const layer of layers) {
        if (layer === 'symbol') {
          firstSymbolId = layer.id;
          break;
        }
      }

      map.addSource('drone', {
        type: 'raster',
        // url: 'mapbox://aavaig2069.4p9dmkt8',
        // url: 'mapbox://aavaig2069.1786uogx',
        // url: 'mapbox://aavaig2069.570b2alb',
        url: 'mapbox://aavaig2069.3d85qak1',
      });

      map.addLayer({
        id: 'drone-layer',
        type: 'raster',
        source: 'drone',
      });
    });

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

    // mapboxgl.accessToken = 'pk.mapboxgl.accessToken = 'pk.eyJ1IjoiYWF2YWlnMjA2OSIsImEiOiJja3gyNjhkdG0xOTljMnBueTluZnA0YzFzIn0.eZB9Au7ertDodRUyEVQHZQ';
    // const map = new mapboxgl.Map({
    //   container: 'mapbox-map',
    //   style: 'mapbox://styles/mapbox/satellite-v9',
    //   center: [-88.13734351262877, 35.137451890638886],
    //   zoom: 4,
    // });

    // map.on('load', () => {
    //   const layers = map.getStyle().layers;
    //   // Find the index of the first symbol layer in the map style
    //   let firstSymbolId;
    //   for (const layer of layers) {
    //     if (layer === 'symbol') {
    //       firstSymbolId = layer.id;
    //       break;
    //     }
    //   }

    //   map.addSource('drone', {
    //     type: 'raster',
    //     url: 'mapbox://aavaig2069.4p9dmkt8',
    //   });

    //   map.addLayer({
    //     id: 'drone-layer',
    //     type: 'raster',
    //     source: 'drone',
    //   });
    // });
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
