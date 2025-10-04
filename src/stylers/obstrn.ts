import maplibregl from "maplibre-gl";


/** Obstruction */
export class Obstrn {

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
            id: `${id}-icon`,
            type: "symbol",
            source: id,
            layout: {
                "icon-image": [
                    "case",
                    [
                        "any",
                        ["==", ["get", "CATOBS"], 8],
                        ["==", ["get", "CATOBS"], 10],
                        ["==", ["get", "WATLEV"], 7],
                    ], "QUESMRK1",
                    ["==", ["get", "CATOBS"], 9], "ACHARE02",
                    ""
                ]
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
                "line-color": [
                    "case",
                     [
                        "any",
                        ["==", ["get", "CATOBS"], 8],
                        ["==", ["get", "CATOBS"], 10],
                        ["==", ["get", "WATLEV"], 7],
                    ], "rgb(82, 90, 92)",
                    ["==", ["get", "CATOBS"], 9], "rgb(197, 69, 195)",
                    "rgba(0, 0, 0, 0)"
                ],
                "line-width": 1,
                "line-dasharray": [12, 6]
            }
        });
    }
}