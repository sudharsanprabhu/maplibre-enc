import maplibregl from "maplibre-gl";


/** Pilot boarding place (Point) */
export class Pilbop {

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
                "icon-image": "PILBOP02",
                "text-field": [
                    "case",
                    ["to-boolean", ["get", "OBJNAM"]], ["concat", "Plt ", ["get", "OBJNAM"]],
                    ""
                ],
                "text-offset": [0, 2],
                "text-size": 7
            },
            paint: {
                "text-color": "rgb(7, 7, 7)",
            }
        });
    }
}