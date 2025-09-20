import maplibregl from "maplibre-gl";


/** Bridge (Polygon) */
export class Bridge {

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
        const image = await this.map.loadImage("assets/icons/BRIDGE01.png");
        this.map.addImage("BRIDGE01", image.data);

        // Icon
        this.map.addLayer({
            id: `${id}-icon`,
            type: "symbol",
            source: id,
            layout: {
                "icon-image": [
                    "match",
                    ["get", "CATBRG"],
                    [ 2, 3, 4, 5, 7, 8], "BRIDGE01", ""
                ],
                "icon-allow-overlap": true
            }
        });

        // Lines
        this.map.addLayer({
            id: `${id}-line`,
            type: "line",
            source: id,
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "rgb(106, 117, 119)",
                "line-width": 4
            }
            
        });

        // Labels
        this.map.addLayer({
            id: `${id}-clr`,
            type: "symbol",
            source: id,
            layout: {
                "text-field": [
                    "concat",
                    [
                        "case",
                        ["has", "VERCCL"], 
                        ["concat", "clr cl ", ["get", "VERCCL"]], ""
                    ],
                    "\n",
                    [
                        "case",
                        ["has", "VERCOP"], 
                        ["concat", "clr op ", ["get", "VERCOP"]], ""
                    ]
                ],
                "text-size": 7,
                "text-offset": [1, 0]
            },
            paint: {
                "text-color": "rgb( 7, 7, 7)"
            }
        });

        this.map.addLayer({
            id: `${id}-label`,
            type: "symbol",
            source: id,
            layout: {
                "text-field": ["get", "OBJNAM"],
                "text-size": 7,
                "text-offset": [1, 0]
            },
            paint: {
                "text-color": "rgb( 7, 7, 7)"
            }
        });
    }
}