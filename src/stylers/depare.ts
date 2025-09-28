import maplibregl from "maplibre-gl";


/** Depth area (Polygon) */
export class Depare {

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
            id: `${id}-polygon`,
            type: "fill",
            source: id,
            paint: {
                "fill-color": [
                    "case",
                    ["!", ["has", "DRVAL1"]], "rgb(131, 178, 149)",
                    [">=", ["get", "DRVAL1"], 30], "rgb(212, 234, 238)",
                    [">=", ["get", "DRVAL1"], 20], "rgb(152, 197, 242)",
                    [">=", ["get", "DRVAL1"], 10], "rgb(186, 213, 225)",
                    [">=", ["get", "DRVAL1"], 0], "rgb(115, 182, 239)",
                    "rgb(131, 178, 149)"
                ]
            }
        });
    }
}