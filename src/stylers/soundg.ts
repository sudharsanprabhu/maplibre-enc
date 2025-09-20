import maplibregl from "maplibre-gl";


export class Soundg {

    private map: maplibregl.Map;

    constructor(data: any, map: maplibregl.Map) {
        this.map = map;
        const id = crypto.randomUUID();
        map.addSource(id, {
            type: "geojson",
            data
        });

        this.render(id);
    }

    render(id: string) {
        this.map.addLayer({
            id: `${id}`,
            type: "symbol",
            source: id,
            layout: {
                // 'icon-image': 'custom-marker',
                "text-field": ["to-string",  ["floor", ["get", "z"]]],
                "text-optional": true,
                "text-allow-overlap": true,
                "text-size": 11,
                // 'text-font': [
                //     'Open Sans Semibold',
                //     'Arial Unicode MS Bold'
                // ],
                // 'text-offset': [0, 1.25],
                // 'text-anchor': 'top'
            },
            paint: {
                "text-color": ["rgb", 125, 137, 140]
            }
        });

        this.map.addLayer({
            id: `${id}-decimal`,
            type: "symbol",
            source: id,
            layout: {
                // 'icon-image': 'custom-marker',
                "text-field": ["to-string",  ["round", ["*", ["-", ["get", "z"], ["floor", ["get", "z"]]], 10]]],
                "text-optional": true,
                "text-allow-overlap": true,
                "text-size": 10,
                'text-offset': [0.8, 0.5],
                // 'text-anchor': 'top'
            },
            paint: {
                "text-color": ["rgb", 125, 137, 140]
            }
        });

        
    }
}