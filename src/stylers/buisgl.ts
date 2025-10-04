import maplibregl from "maplibre-gl";
import { GeoJSONParser } from "../geojson";
import { Point } from "../geojson";


/** Building, single (Point) */
export class Buisgl {

    private map: maplibregl.Map;
    private data: GeoJSONParser<Point>;

    constructor(data: any, map: maplibregl.Map) {
        this.map = map;
        this.data = new GeoJSONParser<Point>(data);
        this.addIconFields();

        const id = crypto.randomUUID();
        map.addSource(id, {
            type: "geojson",
            data
        });

        this.render(id);
    }

    private addIconFields() {
        const points = this.data.getPoints();

        for(let point of points) {
            const { FUNCTN, CONVIS, OBJNAM } = point.properties;
            const { icon, offset } = this.getIcon(FUNCTN, CONVIS, OBJNAM);
            point.properties.icon = icon;
            point.properties.offset = offset;
        }
    }

    private getIcon(FUNCTN: number, CONVIS: number, OBJNAM: string) {
        let icon: string | null;
        let offset: [number, number] | null;

        if(FUNCTN == 33 && CONVIS == 1 && OBJNAM == "") {
            icon = "POSGEN03";
            offset = [0, 0];
        }
        else if(FUNCTN == 20 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(FUNCTN == 21 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(FUNCTN == 22 && CONVIS == 1) {
            icon = "BUIREL14";
            offset = [0, 0];
        }
        else if(FUNCTN == 23 && CONVIS == 1) {
            icon = "BUIREL14";
            offset = [0, 0];
        }
        else if(FUNCTN == 24 && CONVIS == 1) {
            icon = "BUIREL14";
            offset = [0, 0];
        }
        else if(FUNCTN == 25 && CONVIS == 1) {
            icon = "BUIREL14";
            offset = [0, 0];
        }
        else if(FUNCTN == 26 && CONVIS == 1) {
            icon = "BUIREL15";
            offset = [0, -3];
        }
        else if(FUNCTN == 27 && CONVIS == 1) {
            icon = "BUIREL15";
            offset = [0, -3];
        }
        else if(FUNCTN == 33 && CONVIS == 1) {
            icon = "POSGEN03";
            offset = [0, 0];
        }
        else if(FUNCTN == 35 && CONVIS == 1) {
            icon = "TNKCON12";
            offset = [0, 0];
        }
        else if(CONVIS == 1) {
            icon = "BUISGL11";
            offset = [0, 0];
        }
        else {
            icon = null;
            offset = null;
        }

        return { icon, offset };
    }

 
    render(id: string) {
        this.map.addLayer({
            id: `${id}-icon`,
            type: "symbol",
            source: id,
            layout: {
                "icon-image": ["get", "icon"],
                "icon-allow-overlap": true,
                "icon-offset": ["get", "offset"]
            }
        });
    }
}