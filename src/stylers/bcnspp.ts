import maplibregl from "maplibre-gl";
import { GeoJSONParser } from "../geojson";
import { Point } from "../geojson";

/** Beacon, special purpose/general (Point) */
export class Bcnspp {

    private map: maplibregl.Map;
    private data: GeoJSONParser<Point>;
    private addedIcons = new Set<string>();

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
            const { BCNSHP, CATSPM, COLOUR, COLPAT, CONVIS } = point.properties;
            const { icon, offset } = this.getIcon(BCNSHP, CATSPM, COLOUR, COLPAT, CONVIS);
            point.properties.icon = icon;
            point.properties.offset = offset;
        }
    }

    private getIcon(BCNSHP: number, CATSPM: number, COLOUR: string | number, COLPAT: number | string, CONVIS: number) {
        let icon: string | null;
        let offset: [number, number] | null;

        if(BCNSHP == 1 && COLPAT == "1,2" && COLOUR == "5,3,1,5") {
            icon = null;
            offset = null;
        }
        else if(BCNSHP == 3 && COLPAT == 1 && COLOUR == "2,1,2") {
            icon = "BCNTOW87";
            offset = [0, -5];
        }
        else if(BCNSHP == 3 && COLOUR == "4,1" && COLPAT == 2) {
            icon = "BCNTOW85";
            offset = [0, -5];
        }
        else if(BCNSHP == 5 && CATSPM == 1 && COLOUR == 4) {
            icon = "BCNSTK61";
            offset = [-1, -5];
        }
        else if(BCNSHP == 3 && COLOUR == "4,1") {
            icon = "BCNTOW65";
            offset = [0, -5];
        }
        else if(BCNSHP == 4 && COLOUR == "1,2") {
            icon = "BCNTOW86";
            offset = [0, -5];
        }
        else if(BCNSHP == 4 && COLOUR == "2,1") {
            icon = "BCNTOW88";
            offset = [0, -5];
        }
        else if(CATSPM == 18 && COLOUR == 6) {
            icon = "NOTBRD12";
            offset = [-1, -6];
        }
        else if(BCNSHP == 1 && COLOUR == 1) {
            icon = "BCNSTK05";
            offset = [-1, -5];
        }
        else if(BCNSHP == 1 && COLOUR == 3) {
            icon = "BCNSTK60";
            offset = [-1, -5];
        }
        else if(BCNSHP == 1 && COLOUR == 4) {
            icon = "BCNSTK61";
            offset = [-1, -5];
        }
        else if(BCNSHP == 1 && COLOUR == 6) {
            icon = "BCNSTK08";
            offset = [-1, -5];
        }
        else if(BCNSHP == 3 && COLOUR == 1) {
            icon = "BCNTOW05";
            offset = [0, -5];
        }
        else if(BCNSHP == 3 && COLOUR == 2) {
            icon = "BCNTOW89";
            offset = [0, -5];
        }
        else if(BCNSHP == 3 && COLOUR == 4) {
            icon = "BCNTOW61";
            offset = [0, -5];
        }
        else if(BCNSHP == 3 && COLOUR == 6) {
            icon = "BCNTOW62";
            offset = [0, -5];
        }
        else if(BCNSHP == 4 && COLOUR == 1) {
            icon = "BCNTOW91";
            offset = [0, -5];
        }
        else if(BCNSHP == 4 && COLOUR == 2) {
            icon = "BCNTOW89";
            offset = [0, -5];
        }
        else if(BCNSHP == 4 && COLOUR == 3) {
            icon = "BCNTOW60";
            offset = [0, -5];
        }
        else if(BCNSHP == 4 && COLOUR == 8) {
            icon = "BCNTOW90";
            offset = [0, -5];
        }
        else if(BCNSHP == 5 && COLOUR == 1) {
            icon = "BCNSTK05";
            offset = [-1, -5];
        }
        else if(BCNSHP == 5 && COLOUR == 6) {
            icon = "BCNSTK08";
            offset = [-1, -5];
        }
        else if(BCNSHP == 6 && CONVIS == 1) {
            icon = "CAIRNS11";
            offset = [0, -6];
        }
        else if(BCNSHP == 7 && COLOUR == 6) {
            icon = "BCNSTK62";
            offset = [-1, -5];
        }
        else if(COLOUR == "3,4,3") {
            icon = "BCNSTK79";
            offset = [-1, -6];
        }
        else if(COLOUR == "4,3,4") {
            icon = "BCNSTK80";
            offset = [-1, -6];
        }
        else if(COLOUR == "3,1") {
            icon = "BCNSTK78";
            offset = [-1, -6];
        }
        else if(COLOUR == "4,1") {
            icon = "BCNSTK81";
            offset = [-1, -6];
        }
        else if(CATSPM == 18) {
            icon = "NOTBRD11";
            offset = [-1, -6];
        }
        else if(CATSPM == 44) {
            icon = "BCNGEN01";
            offset = [-1, -6];
        }
        else if(COLOUR == 11) {
            icon = "BCNGEN79";
            offset = [-1, -6];
        }
        else if(BCNSHP == 1) {
            icon = "BCNSTK02";
            offset = [-1, -5];
        }
        else if(BCNSHP == 3) {
            icon = "BCNTOW01";
            offset = [0, -5];
        }
        else if(BCNSHP == 4) {
            icon = "BCNLTC01";
            offset = [0, -5];
        }
        else if(BCNSHP == 5) {
            icon = "BCNGEN01";
            offset = [-1, -6];
        }
        else if(BCNSHP == 6) {
            icon = "CAIRNS01";
            offset = [-1, -6];
        }
        else if(BCNSHP == 7) {
            icon = "BCNGEN01";
            offset = [-1, -6];
        }
        else if(COLOUR == 1) {
            icon = "BCNGEN05";
            offset = [-1, -6];
        }
        else if(COLOUR == 2) {
            icon = "BCNGEN80";
            offset = [-1, -6];
        }
        else if(COLOUR == 3) {
            icon = "BCNGEN60";
            offset = [-1, -6];
        }
        else if(COLOUR == 4) {
            icon = "BCNGEN61";
            offset = [-1, -6];
        }
        else if(COLOUR == 6) {
            icon = "BCNSPR62";
            offset = [-1, -6];
        }
        else {
            icon = "BCNGEN01"
            offset = [-1, -6];
        }

        if(icon && !this.addedIcons.has(icon)) {            
            const imagePath = `assets/icons/${icon}.png`;
            this.map.loadImage(imagePath)
                .then((image) => this.map.addImage(icon, image.data))
                .catch((err) => {
                    console.log(err);
                    this.addedIcons.delete(icon);
                });

            this.addedIcons.add(icon);
        }

        return { icon, offset };
    }

 
    render(id: string) {
        this.map.addLayer({
            id,
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
                "text-offset": [1, 1]
            },
            paint: {
                "text-color": "rgb(7, 7, 7)"
            }
        });
    }
}