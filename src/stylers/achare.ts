import maplibregl from "maplibre-gl";

/** Anchorage area */
export class Achare {

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
            id: id,
            type: "line",
            source: id,
            paint: {
                "line-color": "rgb(197, 69, 195)",
                "line-width": 2,
                "line-dasharray": [12/2, 6/2]
            },
            layout: {
                "line-cap": "round",
                "line-join": "round"
            }
        });


        this.map.addLayer({
            id: `${id}-marker`,
            type: "symbol",
            source: id,
            layout: {
                "icon-image": "ACHARE02",
            }
        });
    }
}