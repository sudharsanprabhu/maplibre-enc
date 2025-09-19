import maplibregl from "maplibre-gl";


export class Lndare {

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
            type: "fill",
            source: id,
            paint: {
                "fill-color": ["rgb", 201, 185, 122],
                "fill-opacity": 1,
            }
        });

        this.map.addLayer({
            id: `${id}-label`,
            type: "symbol",
            source: id,
            layout: {
                "text-field": ["get", "OBJNAM"],
                "text-size": 7,
                "text-offset": [1, 1]
            },
            paint: {
                "text-color": ["rgb", 7, 7, 7]
            }
        });
    }
}