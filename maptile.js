const libre = new maplibregl.Map({
  container: 'libre',
  style: {
    version: 8,
    sources: {
      s_contour7: {
        type: 'raster',
        tiles: [
          'https://grt.code4history.dev/cont7/18/1/{z}/{x}/{y}',
        ],
        tileSize: 256,
        attribution: 'MapLibre',
      },
    },
    layers: [
      {
        id: 'contour7',
        type: 'raster',
        source: 's_contour7',
        minzoom: 8,
        maxzoom: 14,
      },
    ],
  },
  center: [139.506540, 36.195698], // starting position [lng, lat]
  zoom: 13 // starting zoom
});
  
const ol6 = new ol.Map({
  target: 'ol',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        attributions: "OpenLayers",
      url: 'https://grt.code4history.dev/cont7/18/1/{z}/{x}/{y}',
      projection: "EPSG:3857",
      tileGrid: new ol.tilegrid.createXYZ({
        minZoom: 8,
        maxZoom: 14,
        tileSize: 256,
      }),
    })
  })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([139.506540, 36.195698]),
    zoom: 13
  })
});