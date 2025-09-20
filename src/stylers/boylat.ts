import maplibregl from "maplibre-gl";
import { GeoJSONParser } from "../geojson";
import { Point } from "../geojson";


/** Buoy, lateral (Point) */
export class Boylat {

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
            const { BOYSHP, CATLAM, COLOUR, COLPAT } = point.properties;
            const { icon, offset } = this.getIcon(BOYSHP, CATLAM, COLOUR, COLPAT);
            point.properties.icon = icon;
            point.properties.offset = offset;
        }
    }

    private getIcon(BOYSHP: number, CATLAM: number, COLOUR: string | number, COLPAT: number) {
        let icon: string;
        let offset: [number, number];

        if(BOYSHP == 2 && CATLAM == 7 && COLOUR == "3,1,3,1,3") {
            icon = "BOYCAN82";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && CATLAM == 7 && COLOUR == "3,1,3,1") {
            icon = "BOYCAN83";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "3,4,3" && COLPAT == 1) {
            icon = "BOYCON66";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "4,3,4" && COLPAT == 1) {
            icon = "BOYCAN73";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == "3,4,3" && COLPAT == 1) {
            icon = "BOYPIL66";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == "4,3,4" && COLPAT == 1) {
            icon = "BOYPIL67";
            offset = [0, -5];
        }
        else if(BOYSHP == 1 && COLOUR == "3,4" && COLPAT == 1) {
            icon = "QUESMRK1";
            offset = [-1, 0];
        }
        else if(BOYSHP == 3 && COLOUR == "3,4" && COLPAT == 1) {
            icon = "BOYSPH74";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == "4,3" && COLPAT == 1) {
            icon = "BOYSPH75";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == "4,3" && COLPAT == 1) {
            icon = "BOYPIL74";
            offset = [0, -5];
        }
        else if(BOYSHP == 3 && CATLAM == 23 && COLOUR == 6) {
            icon = "BOYSPH62";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "4,1,4,1,4") {
            icon = "BOYCON65";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "3,1,3,1,3") {
            icon = "BOYCAN74";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == "3,4,3,4,3") {
            icon = "BOYSPH74";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "4,3,4") {
            icon = "BOYCON67";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "3,4,3") {
            icon = "BOYCAN72";
            offset = [0, -4];
        }
        else if(BOYSHP == 4 && COLOUR == "3,4,3") {
            icon = "BOYPIL66";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == "4,3,4") {
            icon = "BOYPIL67";
            offset = [0, -5];
        }
        else if(BOYSHP == 1 && COLOUR == "4,1") {
            icon = "BOYCON73";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == "4,3") {
            icon = "BOYCON68";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "3,1") {
            icon = "BOYCAN74";
            offset = [0, -4];
        }
        else if(BOYSHP == 2 && COLOUR == "3,4") {
            icon = "BOYCAN75";
            offset = [0, -4];
        }
        else if(BOYSHP == 3 && COLOUR == "3,4") {
            icon = "BOYSPH74";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == 2) {
            icon = "BOYCON64";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == 3) {
            icon = "BOYCON60";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == 4) {
            icon = "BOYCON61";
            offset = [0, -4];
        }
        else if(BOYSHP == 1 && COLOUR == 6) {
            icon = "BOYCON62";
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
        else if(BOYSHP == 4 && COLOUR == 3) {
            icon = "BOYPIL60";
            offset = [0, -5];
        }
        else if(BOYSHP == 4 && COLOUR == 4) {
            icon = "BOYPIL61";
            offset = [0, -5];
        }
        else if(BOYSHP == 5 && COLOUR == 1) {
            icon = "BOYSPR05";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == 3) {
            icon = "BOYSPR60";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == 4) {
            icon = "BOYSPR61";
            offset = [-1, -6];
        }
        else if(COLOUR == 3 && CATLAM == 2) {
            icon = "BOYPIL60";
            offset = [0, -5];
        }
        else if(COLOUR == 4 && CATLAM == 1) {
            icon = "BOYPIL61";
            offset = [0, -5];
        }
        else if(BOYSHP == 1) {
            icon = "BOYCON01";
            offset = [0, -4];
        }
        else if(BOYSHP == 2) {
            icon = "BOYCAN01";
            offset = [-1, -4];
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
        else if(BOYSHP == 3 && COLOUR == "4,3" && COLPAT == 1) {
            icon = "BOYSPH75";
            offset = [0, -4];
        }
        else if(BOYSHP == 5 && COLOUR == "4,1,4,1") {
            icon = "BCNGEN65";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "3,1,3,1") {
            icon = "BCNGEN64";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "4,3") {
            icon = "BCNSTK83";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "3,4") {
            icon = "BCNSTK82";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "3,1" && COLPAT == 1) {
            icon = "BCNSTK78";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "4,1" && COLPAT == 1) {
            icon = "BCNSTK81";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "4,3,4") {
            icon = "BCNSTK80";
            offset = [-1, -6];
        }
        else if(BOYSHP == 5 && COLOUR == "3,4,3") {
            icon = "BCNSTK79";
            offset = [-1, -6];
        }
        else {
            icon = "BOYGEN03";
            offset = [-3, -5];
        }

        if(!this.addedIcons.has(icon)) {            
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