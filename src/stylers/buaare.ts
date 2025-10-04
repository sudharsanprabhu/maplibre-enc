import maplibregl from "maplibre-gl";


/** Built-up area (Polygon) */
export class Buaare {

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
        // Polygon
        this.map.addLayer({
            id: `${id}-polygon`,
            type: "fill",
            source: id,
            paint: {
                "fill-color": "rgb(150, 123, 48)"
            }
        });

        this.map.addLayer({
            id: `${id}-polyline`,
            type: "line",
            source: id,
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color":  "rgb(118, 87, 26)",
                "line-width": 1
            }
        });
    
        // Labels
        this.map.addLayer({
            id: `${id}-label`,
            type: "symbol",
            source: id,
            layout: {
                "text-field": ["get", "OBJNAM"],
                "text-size": 7,
                "text-offset": [0, 0]
            },
            paint: {
                "text-color": "rgb(7, 7, 7)"
            }
        });
    }
}