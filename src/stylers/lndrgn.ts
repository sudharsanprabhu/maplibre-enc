import maplibregl from "maplibre-gl";


/** Land region (Polygon) */
export class Lndrgn {

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
        const MARSHES1 = await this.map.loadImage("assets/icons/MARSHES1.png");
        this.map.addImage("MARSHES1", MARSHES1.data);

        const POSGEN04 = await this.map.loadImage("assets/icons/POSGEN04.png");
        this.map.addImage("POSGEN04", POSGEN04.data);

        this.map.addLayer({
            id: `${id}-polygon`,
            type: "symbol",
            source: id,
            filter: ["==", ["geometry-type"], "Polygon"],
            layout: {
                "icon-image": [
                    "case",
                    [
                        "any", 
                        ["==", ["to-number", ["get", "CATLND"]], 12],
                        ["==", ["to-number", ["get", "CATLND"]], 2],
                    ], "MARSHES1", ""
                ],
                "text-field": ["get", "OBJNAM"],
                "text-size": 7
            },
            paint: {
                "text-color": "rgb(7, 7, 7)"
            }
        });

        this.map.addLayer({
            id: `${id}-point`,
            type: "symbol",
            source: id,
            filter: ["==", ["geometry-type"], "Point"],
            layout: {
                "icon-image": "POSGEN04",
                "text-field": ["get", "OBJNAM"],
                "text-size": 7
            },
            paint: {
                "text-color": "rgb(7, 7, 7)"
            }
        });
    }
}