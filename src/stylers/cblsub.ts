import maplibregl from "maplibre-gl";


/** Cable, submarine (Line) */
export class Cblsub {

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
        // Polyline
        this.map.addLayer({
            id: `${id}-polyline`,
            type: "line",
            source: id,
            filter: ["==", ["get", "CATCBL"], 6],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(168, 59, 166)",
                "line-width": 1,
                "line-dasharray": [12, 6]
            }
        });
    }
}