import maplibregl from "maplibre-gl";


/** Conveyor (Line) */
export class Convyr {

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
        const image = await this.map.loadImage("assets/icons/RACNSP01.png");
        this.map.addImage("RACNSP01", image.data);

        // Icon
        this.map.addLayer({
            id: `${id}-icon`,
            type: "symbol",
            source: id,
            layout: {
                "icon-image": [
                    "case", [
                        "any",
                        ["all", ["==", ["get", "CATCON"], 1],  ["==", ["get", "CONRAD"], 1]],
                        ["all", ["==", ["get", "CATCON"], 1],  ["==", ["get", "CONRAD"], 3]],
                        ["all", ["==", ["get", "CATCON"], 2],  ["==", ["get", "CONRAD"], 1]],
                        ["all", ["==", ["get", "CATCON"], 2],  ["==", ["get", "CONRAD"], 3]],
                        ["==", ["get", "CONRAD"], 1],
                        ["==", ["get", "CONRAD"], 3]
                    ],
                    "RACNSP01", ""
                ],
                "icon-allow-overlap": true,
                "symbol-placement": "line"
            }
        });

        // Lines
        this.map.addLayer({
            id: `${id}-polyline1`,
            type: "line",
            source: id,
            filter: [
                "any",
                ["all", ["==", ["get", "CATCON"], 2],  ["==", ["get", "CONRAD"], 1]],
                ["all", ["==", ["get", "CATCON"], 2],  ["==", ["get", "CONRAD"], 3]],
                ["==", ["get", "CATCON"], 2]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(125, 137, 140)",
                "line-width": 3
            }
        });

         this.map.addLayer({
            id: `${id}-polyline2`,
            type: "line",
            source: id,
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(125, 137, 140)",
                "line-width": 4,
                "line-dasharray": [12/4, 6/4]
            }
        });

        // Labels
        this.map.addLayer({
            id: `${id}-clr`,
            type: "symbol",
            source: id,
            filter: [">", ["to-number", ["get", "VERCLR"]], 0],
            layout: {
                "text-field": ["concat", "clr ", ["to-string", ["get", "VERCLR"]]],
                "text-size": 7,
                "text-offset": [1, 0],
                "symbol-placement": "line"
            },
            paint: {
                "text-color": "rgb( 7, 7, 7)"
            }
        });
    }
}