import maplibregl from "maplibre-gl";


/** Pile (Point) */
export class Pilpnt {

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
        const PILPNT02 = await this.map.loadImage("assets/icons/PILPNT02.png");
        this.map.addImage("PILPNT02", PILPNT02.data);

        this.map.addLayer({
            id: `${id}-icon`,
            type: "symbol",
            source: id,
            layout: {
                "icon-image": "PILPNT02"
            }
        });
    }
}