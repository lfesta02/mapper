const bellingham = require('../data/bellingham.json')
const met = require('../data/meta')
const vanisland = require('../data/vanisland.json')
const sunshinecoast = require('../data/sunshinecoast.json')
const alagna = require('../data/alagna.json')
const italfrance = require('../data/italfrance.json')

let files = [bellingham, vanisland, sunshinecoast, alagna, italfrance]

const routes = files.map(route => {
    const slug = route.features[0].properties.name
    const data = route
    const metadata = met.meta[slug]
    if(metadata?.points){
        const points = metadata.points
        points.forEach((point, i, arr) => {
            const { title, lat, lng, desc, dist, icon, ignore} = point;

            let nextLng = null;
            let nextLat = null;
            let count = 1;
            let loop = true;
        
            if(i < metadata.points.length - 1 && !point.ignore) {
                while(loop) {
                    if (!arr[i + count].ignore) {
                        loop = false;
                    } else {
                        count++;
                    }
                }
                nextLng = arr[i + count].lng;
                nextLat = arr[i + count].lat;
            }

            data.features.push({
                type: 'Feature',
                properties: {
                    id: `point${i}`,
                    title: title,
                    description: desc,
                    icon: icon || 'camp',
                    dist: dist,
                    ignore: ignore,
                    next: nextLng + " " + nextLat,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [lng, lat]
                },
            })
        })
    }

    return {
        title: metadata?.title || 'Unnamed',
        desc: metadata?.description || 'Missing description',
        date: metadata?.date + " ⸱ " || 'Missing date',
        dist: metadata?.distance || 'Missing distance',
        id: slug,
        data: data,
        color: metadata?.color || 'red'
    }
})

module.exports = { routes }