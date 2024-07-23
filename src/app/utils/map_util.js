import * as turf from "@turf/turf";

export const flyToRoute = (map, geoJSON, pad) => {
    const bounds = turf.bbox(geoJSON)
    map.fitBounds(bounds, {
        padding: pad
    })
}

export const setAllLayersVisibility = (map, id, essentialsVisibility, extrasVisibility) => {
    if (map) {
      map.setLayoutProperty(id, 'visibility', essentialsVisibility)
      map.setLayoutProperty(`${id}-fill`, 'visibility', essentialsVisibility)
      map.setLayoutProperty(`${id}-points`, 'visibility', extrasVisibility || essentialsVisibility)
    }
}