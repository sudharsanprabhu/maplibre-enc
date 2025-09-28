import maplibregl from "maplibre-gl";


/** Navigation line (Line) */
export class Navlne {

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
            id: `${id}-polyline`,
            type: "line",
            source: id,
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(125, 137, 140)",
                "line-width": 1,
                "line-dasharray": [12, 6]
            }
        });

        this.map.addLayer({
            id: `${id}-label`,
            type: "symbol",
            source: id,
            filter: [">", ["get", "ORIENT"], 0],
            layout: {
                "text-field": ["concat", ["get", "ORIENT"], " deg"],
                "text-size": 7,
                "text-offset": [1, -1],
                "symbol-placement": "line-center"
            },
            paint: {
                "text-color": "rgb(7, 7, 7)"
            }
        });
    }
}