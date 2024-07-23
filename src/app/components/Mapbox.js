"use client";

import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Infobar from './Infobar';
import * as turf from "@turf/turf";
import { useRef, useState, useEffect } from 'react';
import { defaults } from "../data/meta";
import { texthtml } from "../data/texthtml";
import { routes } from "../utils/routes_util";
import { flyToRoute, setAllLayersVisibility } from "../utils/map_util";

mapboxgl.accessToken = 'pk.eyJ1IjoibGZlc3RhMDIiLCJhIjoiY2xwa2d3dGVxMDBiZDJpanlxOTk2cG1iMyJ9.KCmfDN__oETnqiYLtRBsvw';

function Mapbox() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const inMapView = useRef(null);
  const [lng, setLng] = useState(4.5);
  const [lat, setLat] = useState(49);
  const [zoom, setZoom] = useState(5);
  const [currentRoute, setCurrentRoute] = useState({});
  const [mapView, setMapView] = useState(true);
  const [dayView, setDayView] = useState(false);
  const [titleText, setTitleText] = useState(defaults.title);
  const [descText, setDescText] = useState(defaults.description);
  const [dateText, setDateText] = useState("");
  const [distText, setDistText] = useState("");
  inMapView.current = mapView;

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [lng, lat],
      projection: 'mercator',
      logoPosition: 'top-right',
      zoom: zoom
    });

    map.current.on('load', () => {
      map.current.resize();

      map.current.loadImage("/camp.png", (error, image) => {
        if (error) throw error
        map.current.addImage("camp", image)
      })
      map.current.loadImage("/hotel.png", (error, image) => {
        if (error) throw error
        map.current.addImage("hotel", image)
      })
      map.current.loadImage("/hospital.png", (error, image) => {
        if (error) throw error
        map.current.addImage("injury", image)
      })
      map.current.loadImage("/boat.png", (error, image) => {
        if (error) throw error
        map.current.addImage("boat", image)
      })
      map.current.loadImage("/bus.png", (error, image) => {
        if (error) throw error
        map.current.addImage("autobus", image)
      })
      map.current.loadImage("/start.png", (error, image) => {
        if (error) throw error
        map.current.addImage("start", image)
      })
      map.current.loadImage("/end.png", (error, image) => {
        if (error) throw error
        map.current.addImage("end", image)
      })
      map.current.loadImage("/issue.png", (error, image) => {
        if (error) throw error
        map.current.addImage("issue", image)
      })

      routes.forEach((route) => {

        map.current.addSource(route.id, {
          type: 'geojson',
          data: route.data
        })

        map.current.addLayer({
          id: route.id,
          type: 'line',
          source: route.id,
          layout: {
          'line-join': 'round',
          'line-cap': 'round'
          },
          paint: {
          'line-color': route.color,
          'line-width': 5
          }
        })

        map.current.addLayer({
          id: `${route.id}-fill`,
          type: 'fill',
          source: route.id,
          paint: {
            'fill-color': 'transparent',
            'fill-outline-color': 'transparent'
          }
        })
        
        map.current.addLayer({
          id: `${route.id}-points`,
          type: "symbol",
          source: route.id,
          layout: {
            'icon-image': ['get', 'icon'],
            'icon-size': 0.3,
            'icon-allow-overlap': true,
            'visibility': 'none'
          },
          filter: ['==', '$type', 'Point']
        })

        map.current.on("click", `${route.id}-fill`, () => {  
          if(inMapView.current) {
            routes.forEach((routeInLoop) => {
              if(routeInLoop.id == route.id) {
                map.current.getCanvas().style.cursor = "";
                map.current.setPaintProperty(route.id, "line-width", 6);
                
                setAllLayersVisibility(map.current, routeInLoop.id, "visible");
                setMapView(false);
                setLat(map.current.getCenter().lat);
                setLng(map.current.getCenter().lng);
                setCurrentRoute(route);
                setTitleText(route.title);
                setDescText(route.desc);
                setDateText(route.date);
                setDistText(route.dist);
                setZoom(map.current.getZoom());
                flyToRoute(map.current, route.data, 20);
                
              } else {
                setAllLayersVisibility(map.current, routeInLoop.id, "none");
              }
            })
          }
        })
          
        map.current.on("mouseenter", `${route.id}-fill`, () => {
          if(inMapView.current) {
            map.current.getCanvas().style.cursor = "pointer";
            map.current.setPaintProperty(route.id, "line-width", 10);
          }  
        })

        map.current.on("mouseleave", `${route.id}-fill`, () => {
          if(inMapView.current) {
            map.current.getCanvas().style.cursor = "";
            map.current.setPaintProperty(route.id, "line-width", 6);
          }
        })

        map.current.on("click", `${route.id}-points`, (e) => {

          const coordinates = e.features[0].geometry.coordinates.slice();
          const title = e.features[0].properties.title;
          const description = e.features[0].properties.description;
          const dist = e.features[0].properties.dist;
          const next = e.features[0].properties.next.split(" ");
          
          if (!e.features[0].properties.ignore && e.features[0].properties.icon != 'end') {
            setDayView(true);
            const segment = turf.lineSlice(coordinates, next, route.data.features[0].geometry)
            setTitleText(title);
            setDateText("");
            setDescText(texthtml[route.id][description]);
            if(dist) {
              setDistText(dist + " km");
            } else {
              setDistText((Math.round(turf.length(segment, {units: 'kilometers'}) * 10) / 10).toFixed(1) + " km");
            }
            document.getElementById('infobar').scrollTop = 0;
            flyToRoute(map.current, segment, 50);   
          }

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
         
          // if (inMapView) {
          //   new mapboxgl.Popup({maxWidth: '420px'}).setLngLat(coordinates).setHTML("<p>" + description + "</p>").addTo(map.current);
          // }
          
        })

        map.current.on("mouseenter", `${route.id}-points`, (e) => {
          const clickable = ['camp', 'hotel', 'start', 'injury'];
          if (clickable.includes(e.features[0].properties.icon)) {
            map.current.getCanvas().style.cursor = "pointer";
          }
        })

        map.current.on("mouseleave", `${route.id}-points`, (e) => {
          map.current.getCanvas().style.cursor = "";
        })

      })

    })
  });

  const handleButtonClick = () => {
    if(!dayView){
      routes.forEach((routeInLoop) => {
        setAllLayersVisibility(map.current, routeInLoop.id, "visible", "none");
      })
      setMapView(true);
      setTitleText(defaults.title);
      setDescText(defaults.description);
      setDateText("");
      setDistText("");
      map.current.flyTo({center: [lng, lat], zoom: zoom});
    } else {
      flyToRoute(map.current, currentRoute.data, 20)
      setTitleText(currentRoute.title)
      setDateText(currentRoute.date)
      setDescText(currentRoute.desc);  
      setDistText(currentRoute.dist);
      setDayView(false);
    }
  }

  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Infobar hide = {mapView} 
               dayView = {dayView}
               fn = {handleButtonClick} 
               title = {titleText} 
               desc = {descText} 
               date = {dateText}
               dist = {distText}/>
      <div ref={mapContainer} className="map-container"/>
    </div>
  )
}

export default Mapbox