import maplibregl from "maplibre-gl";


/** Coastline (Line) */
export class Coalne {

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
 
    async render(id: string) {
        // Polyline (With dash array)
        this.map.addLayer({
            id: `${id}-polyline1`,
            type: "line",
            source: id,
            filter: [
                "in", 
                ["get", "CATCOA"], 
                ["literal", [6, 7, 8, 10]]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(70, 77, 78)",
                "line-width": 1,
                "line-dasharray": [12, 6]
            }
        });

        // Polyline (Without dash array)
        this.map.addLayer({
            id: `${id}-polyline2`,
            type: "line",
            source: id,
            filter: [
                "!", [
                    "in", 
                    ["get", "CATCOA"], 
                    ["literal", [6, 7, 8, 10]]
                ]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(70, 77, 78)",
                "line-width": 1
            }
        });
    }
}