import maplibregl from "maplibre-gl";
import { GeoJSONParser } from "../geojson";
import { Point } from "../geojson";


/** Light (Point) */
export class Lights {

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
            const { CATLIT, ORIENT, COLOUR, SECTR1, SECTR2, VALNMR } = point.properties;
            const { icon, offset } = this.getIcon(CATLIT, ORIENT, COLOUR, SECTR1, SECTR2, VALNMR);
            point.properties.icon = icon;
            point.properties.offset = offset;
        }
    }

    private getIcon(CATLIT: number, ORIENT: number, COLOUR: string | number, SECTR1: string, SECTR2: string, VALNMR: number) {
        let icon: string | null;
        let offset: [number, number] | null;

        if(CATLIT == 11 || CATLIT == 8) {
            icon = "LIGHTS82";
            offset = [15, -7];
        }
        else if(CATLIT == 9) {
            icon = "LIGHTS81";
            offset = [0, 0];
        }
        else if((CATLIT == 1 || CATLIT == 16) && ORIENT == null) {
            icon = "LIGHTS81";
            offset = [0, 0];
        }
        else if(CATLIT == 1 || CATLIT == 16) {
            icon = "LIGHTS81";
            offset = [0, 0];
        }
        else if(COLOUR == "3,1" || COLOUR == 3) {
            icon = "LIGHTS11";
            offset = [9, 9];
        }
        else if(COLOUR == "4,1" || COLOUR == 4) {
            icon = "LIGHTS12";
            offset = [9, 9];
        }
        else if(COLOUR == 11 || COLOUR == 6 || COLOUR == 1) {
            icon = "LIGHTS13";
            offset = [9, 9];
        }
        else if(SECTR1 == "" && SECTR2 == "" && VALNMR < 10 && COLOUR == 3) {
            icon = "LIGHTS11";
            offset = [9, 9];
        }
        else if(SECTR1 == "" && SECTR2 == "" && VALNMR < 10 && COLOUR == 4) {
            icon = "LIGHTS12";
            offset = [9, 9];
        }
        else if(SECTR1 == "" && SECTR2 == "" && VALNMR < 10 && (COLOUR == 1 || COLOUR == 6 || COLOUR == 11)) {
            icon = "LIGHTS13";
            offset = [9, 9];
        }
        else if(SECTR1 == "" && SECTR2 == "" && COLOUR == 3) {
            icon = "LIGHTS96";
            offset = [0, 0];
        }
        else if(SECTR1 == "" && SECTR2 == "" && COLOUR == 4) {
            icon = "LIGHTS95";
            offset = [0, 0];
        }
        else if(SECTR1 == "" && SECTR2 == "" && (COLOUR == 1 || COLOUR == 6 || COLOUR == 11)) {
            icon = "LIGHTS91";
            offset = [0, 0];
        }
        else if(SECTR1 == "" && SECTR2 == "") {
            icon = "LIGHTS90";
            offset = [0, 0];
        }
        else {
            icon = null;
            offset = null;
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
    }
}