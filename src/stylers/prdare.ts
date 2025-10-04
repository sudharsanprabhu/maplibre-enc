import maplibregl from "maplibre-gl";


/** Production / storage area */
export class Prdare {

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
                    ["all", ["==", ["get", "CATPRA"], 5], ["==", ["get", "CONVIS"], 1]], "RFNERY11",
                    ["all", ["==", ["get", "CATPRA"], 8], ["==", ["get", "CONVIS"], 1]], "TNKFRM11",
                    ["all", ["==", ["get", "CATPRA"], 9], ["==", ["get", "CONVIS"], 1]], "WNDFRM61",
                    ""
                ]
            }
        });

        this.map.addLayer({
            id: `${id}-polyline`,
            type: "line",
            source: id,
            filter: [
                "any",
                ["all", ["==", ["get", "CATPRA"], 5], ["==", ["get", "CONVIS"], 1]],
                ["all", ["==", ["get", "CATPRA"], 8], ["==", ["get", "CONVIS"], 1]],
                ["all", ["==", ["get", "CATPRA"], 9], ["==", ["get", "CONVIS"], 1]],
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(7, 7, 7)",
                "line-width": 1,
                "line-dasharray": [12, 6]
            }
        });
    }
}