import maplibregl from "maplibre-gl";
import { GeoJSONParser } from "../geojson";
import { Point } from "../geojson";


/** Landmark (Point) */
export class Lndmrk {

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
            const { CATLMK, COLPAT, FUNCTN, COLOUR, CONVIS } = point.properties;
            const { icon, offset } = this.getIcon(CATLMK, COLPAT, FUNCTN, COLOUR, CONVIS);
            point.properties.icon = icon;
            point.properties.offset = offset;
        }
    }

    private getIcon(CATLMK: number, COLPAT: number, FUNCTN: number | string, COLOUR: number | string, CONVIS: number) {
        let icon: string;
        let offset: [number, number];

        if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "1,2,1") {
            icon = "TOWERS51";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "1,3,1") {
            icon = "TOWERS72";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "2,1,2") {
            icon = "TOWERS92";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "2,1,7") {
            icon = "TOWERS93";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "2,3,2") {
            icon = "TOWERS73";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "1,2") {
            icon = "TOWERS79";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "1,4") {
            icon = "TOWERS48";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && FUNCTN == 33 && COLOUR == "2,1") {
            icon = "TOWERS83";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 3 && FUNCTN == 33 && COLOUR == "2,1") {
            icon = "TOWERS94";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 4 && FUNCTN == 33 && COLOUR == "3,1") {
            icon = "TOWERS98";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "3,1,3,1") {
            icon = "TOWERS85";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "1,6,1") {
            icon = "TOWERS67";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "1,7,1") {
            icon = "TOWERS66";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "1,2") {
            icon = "TOWERS88";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "1,3") {
            icon = "TOWERS52";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "2,1") {
            icon = "TOWERS83";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 1 && COLOUR == "3,1") {
            icon = "TOWERS53";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 2 && COLOUR == "1,2") {
            icon = "TOWERS96";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 2 && COLOUR == "1,3") {
            icon = "TOWERS50";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 2 && COLOUR == "2,1") {
            icon = "TOWERS49";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && COLPAT == 3 && COLOUR == "1,2") {
            icon = "TOWERS97";
            offset = [-1, -9];
        }
        else if(CATLMK == 15 && FUNCTN == 20 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 15 && FUNCTN == 21 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 17 && FUNCTN == 17 && COLOUR == 7) {
            icon = "TOWERS65";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 20 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 17 && FUNCTN == 21 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && COLOUR == 1) {
            icon = "TOWERS05";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && COLOUR == 3) {
            icon = "TOWERS60";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && COLOUR == 4) {
            icon = "TOWERS61";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && COLOUR == 6) {
            icon = "TOWERS62";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && COLOUR == 7) {
            icon = "TOWERS65";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && COLOUR == 8) {
            icon = "TOWERS59";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33 && CONVIS == 1) {
            icon = "TOWERS03";
            offset = [-1, -9];
        }
        else if(CATLMK == 20 && FUNCTN == 20 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 20 && FUNCTN == 21 && CONVIS == 1) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 20 && FUNCTN == 26 && CONVIS == 1) {
            icon = "BUIREL15";
            offset = [0, -3];
        }
        else if(CATLMK == 20 && FUNCTN == 27 && CONVIS == 1) {
            icon = "BUIREL15";
            offset = [0, -3];
        }
        else if(CATLMK == 17 && FUNCTN == "31,33") {
            icon = "TOWERS15";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 20) {
            icon = "BUIREL13";
            offset = [0, 0];
        }
        else if(CATLMK == 17 && FUNCTN == 31) {
            icon = "TOWERS15";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && FUNCTN == 33) {
            icon = "TOWERS01";
            offset = [-1, -9];
        }
        else if(CATLMK == 20 && FUNCTN == 20) {
            icon = "BUIREL01";
            offset = [0, 0];
        }
        else if(CATLMK == 10 && CONVIS == 1) {
            icon = "MONUMT12";
            offset = [0, -5];
        }
        else if(CATLMK == 12 && CONVIS == 1) {
            icon = "MONUMT12";
            offset = [0, -5];
        }
        else if(CATLMK == 13 && CONVIS == 1) {
            icon = "MONUMT12";
            offset = [0, -5];
        }
        else if(CATLMK == 15 && CONVIS == 1) {
            icon = "DOMES011";
            offset = [-1, -5];
        }
        else if(CATLMK == 16 && CONVIS == 1) {
            icon = "RASCAN11";
            offset = [0, -7];
        }
        else if(CATLMK == 17 && COLOUR == 1) {
            icon = "TOWERS05";
            offset = [-1, -9];
        }
        else if(CATLMK == 17 && CONVIS == 1) {
            icon = "TOWERS03";
            offset = [-1, -9];
        }
        else if(CATLMK == 18 && CONVIS == 1) {
            icon = "WNDMIL12";
            offset = [-1, -3];
        }
        else if(CATLMK == 19 && CONVIS == 1) {
            icon = "WIMCON11";
            offset = [-2, -8];
        }
        else if(CATLMK == 20 && CONVIS == 1) {
            icon = "POSGEN03";
            offset = [0, 0];
        }
        else if(CATLMK == 1 && CONVIS == 1) {
            icon = "CAIRNS11";
            offset = [0, -6];
        }
        else if(CATLMK == 3 && CONVIS == 1) {
            icon = "CHIMNY11";
            offset = [-2, -8];
        }
        else if(CATLMK == 4 && CONVIS == 1) {
            icon = "DSHAER11";
            offset = [0, -6];
        }
        else if(CATLMK == 5 && CONVIS == 1) {
            icon = "FLGSTF01";
            offset = [-1, -6];
        }
        else if(CATLMK == 6 && CONVIS == 1) {
            icon = "FLASTK11";
            offset = [-1, -8];
        }
        else if(CATLMK == 7 && CONVIS == 1) {
            icon = "MSTCON14";
            offset = [-1, -8];
        }
        else if(CATLMK == 8 && CONVIS == 1) {
            icon = "POSGEN03";
            offset = [0, 0];
        }
        else if(CATLMK == 9 && CONVIS == 1) {
            icon = "MONUMT12";
            offset = [0, -5];
        }
        else if(CATLMK == 10 || CATLMK == 12 || CATLMK == 13) {
            icon = "MONUMT02";
            offset = [0, -5];
        }
        else if(CATLMK == 15) {
            icon = "DOMES001";
            offset = [-1, -5];
        }
        else if(CATLMK == 16) {
            icon = "RASCAN01";
            offset = [0, -7];
        }
        else if(CATLMK == 17) {
            icon = "TOWERS01";
            offset = [-1, -9];
        }
        else if(CATLMK == 18) {
            icon = "WNDMIL02";
            offset = [-1, -3];
        }
        else if(CATLMK == 19) {
            icon = "WIMCON01";
            offset = [-2, -8];
        }
        else if(CATLMK == 20) {
            icon = "POSGEN01";
            offset = [0, 0];
        }
        else if(CATLMK == 1) {
            icon = "CAIRNS01";
            offset = [-1, -6];
        }
        else if(CATLMK == 3) {
            icon = "CHIMNY01";
            offset = [-2, -8];
        }
        else if(CATLMK == 4) {
            icon = "DSHAER01";
            offset = [0, -6];
        }
        else if(CATLMK == 5) {
            icon = "FLGSTF01";
            offset = [-1, -6];
        }
        else if(CATLMK == 6) {
            icon = "FLASTK01";
            offset = [-1, -8];
        }
        else if(CATLMK == 7) {
            icon = "MSTCON04";
            offset = [-1, -8];
        }
        else if(CATLMK == 8) {
            icon = "POSGEN03";
            offset = [0, 0];
        }
        else if(CATLMK == 9) {
            icon = "MONUMT02";
            offset = [0, -5];
        }
        else if(CONVIS == 1) {
            icon = "POSGEN03";
            offset = [0, 0];
        }
        else {
            icon = "POSGEN01";
            offset = [0, 0];
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

        this.map.addLayer({
            id: `${id}-label`,
            type: "symbol",
            source: id,
            layout: {
                "text-field": ["get", "OBJNAM"],
                "text-size": 7,
                "text-offset": [0, 1]
            },
            paint: {
                "text-color": "rgb(7, 7, 7)"
            }
        });
    }
}