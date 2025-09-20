import maplibregl from "maplibre-gl";
import { GeoJSONParser } from "../geojson";
import { Point } from "../geojson";


/** Buoy, special purpose/general (Point) */
export class Boyspp {

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
            const { BOYSHP, COLOUR, COLPAT, CATSPM, INFORM } = point.properties;
            const { icon, offset } = this.getIcon(BOYSHP, COLOUR, COLPAT, CATSPM, INFORM);
            point.properties.icon = icon;
            point.properties.offset = offset;
        }
    }

    private getIcon(BOYSHP: number, COLOUR: string | number, COLPAT: number | string, CATSPM: number, INFORM: string) {
        let icon: string;
        let offset: [number, number];

        if(BOYSHP == 1 && COLOUR == "4,1,4,1,4" && COLPAT == 1) {
            icon = "BOYCON65";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "5,3,1,5" && COLPAT == "1,2") {
            icon = "BOYCON81";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "1,11,1" && COLPAT == 1) {
            icon = "BOYCON80";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "1,11,1" && COLPAT == 1) {
            icon = "BOYCAN78";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == "3,4,3" && COLPAT == 1) {
            icon = "BOYSPH66";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "1,11" && COLPAT == 1) {
            icon = "BOYCAN77";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "11,1" && COLPAT == 1) {
            icon = "BOYCAN81";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == "1,11" && COLPAT == 1) {
            icon = "BOYSPH77";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == "1,11" && COLPAT == 1) {
            icon = "BOYPIL81";
            offset = [0, -5];
        }
        else if(BOYSHP == 1 && COLOUR == "4,1" && COLPAT == 1) {
            icon = "BOYCON73";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "3,1" && COLPAT == 1) {
            icon = "BOYCAN80";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "3,4" && COLPAT == 1) {
            icon = "BOYCAN75";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == "3,1" && COLPAT == 2) {
            icon = "BOYPIL73";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == "3,1" && COLPAT == 4) {
            icon = "BOYPIL78";
            offset = [0, -5];
        }
        else if(BOYSHP == 7 && COLPAT == 1 && COLOUR == "3,1") {
            icon = "BOYSUP66";
            offset = [0, -4];
        }
        else if(BOYSHP == 7 && COLPAT == 2 && COLOUR == "3,1") {
            icon = "BOYSUP65";
            offset = [0, -4];
        }
        else if(CATSPM == 14 && BOYSHP == 2 && COLOUR == 1) {
            icon = "BOYMOR31";
            offset = [0, -4];
        }
        else if(CATSPM == 8 && BOYSHP == 2 && COLOUR == 3) {
            icon = "BOYCAN60";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "1,11") {
            icon = "BOYCON77";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "1,11") {
            icon = "BOYCAN77";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == "1,11") {
            icon = "BOYSPH77";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == "1,11") {
            icon = "BOYPIL81";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == "4,3") {
            icon = "BOYPIL74";
            offset = [0, -5];
        }
        else if(BOYSHP == 2 && COLOUR == 11) {
            icon = "BOYCAN79";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == 11) {
            icon = "BOYPIL59";
            offset = [0, -5];
        }
        else if(CATSPM == 14 && BOYSHP == 2) {
            icon = "BOYMOR03";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == 3) {
            icon = "BOYCON60";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == 6) {
            icon = "BOYCON62";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == 1) {
            icon = "BOYCAN65";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == 2) {
            icon = "BOYCAN64";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == 3) {
            icon = "BOYCAN60";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == 4) {
            icon = "BOYCAN61";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == 6) {
            icon = "BOYCAN63";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && INFORM == "white/orange") {
            icon = "BOYCAN77";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == 1) {
            icon = "BOYSPH05";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == 3) {
            icon = "BOYSPH60";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == 6) {
            icon = "BOYSPH62";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == 3) {
            icon = "BOYPIL60";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == 4) {
            icon = "BOYPIL61";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == 6) {
            icon = "BOYPIL62";
            offset = [0, -5];
        }
        else if(BOYSHP == 5 && COLOUR == 6) {
            icon = "BOYSPR62";
            offset = [-1, -6];
        }
        else if(BOYSHP == 6 && COLOUR == 3) {
            icon = "BOYBAR60";
            offset = [0, -4];
        }
        else if(BOYSHP == 6 && COLOUR == 4) {
            icon = "BOYBAR61";
            offset = [0, -4];
        }
        else if(BOYSHP == 6 && COLOUR == 6) {
            icon = "BOYBAR62";
            offset = [0, -4];
        }
        else if(BOYSHP == 7 && COLOUR == 6) {
            icon = "BOYSUP62";
            offset = [0, -4];
        }
        else if(CATSPM == 15) {
            icon = "BOYSUP03";
            offset = [0, -4];
        }
        else if(BOYSHP == 1) {
            icon = "BOYCON01";
            offset = [0, -4];
        }
        else if(BOYSHP == 2) {
            icon = "BOYCAN62";
            offset = [0, -4];
        }
        else if(BOYSHP == 3) {
            icon = "BOYSPH01";
            offset = [0, -4];
        }
        else if(BOYSHP == 4) {
            icon = "BOYPIL01";
            offset = [0, -5];
        }
        else if(BOYSHP == 5) {
            icon = "BOYSPR01";
            offset = [-1, -6];
        }
        else if(BOYSHP == 6) {
            icon = "BOYBAR01";
            offset = [0, -4];
        }
        else if(BOYSHP == 7) {
            icon = "BOYSUP01";
            offset = [0, -4];
        }
        else if(BOYSHP == 8) {
            icon = "BOYSPR01";
            offset = [-1, -6];
        }
        else if(CATSPM == 9) {
            icon = "BOYSUP01";
            offset = [0, -4];
        }
        else if(COLOUR == 6) {
            icon = "BOYSPH62";
            offset = [0, -4];
        }
        else {
            icon = "BOYGEN03";
            offset = [-3, -5];
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