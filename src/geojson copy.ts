import L from "leaflet";

export type Position2D = [number, number];
export type Position3D = [number, number, number];

export interface Point {
    type: "Point";
    coordinates: Position2D | Position3D;
}

export interface MultiPoint {
    type: "MultiPoint";
    coordinates: Point["coordinates"][];
}

export interface LineString {
    type: "LineString";
    coordinates: Position2D[] | Position3D[];
}

export interface MultiLineString {
    type: "MultiLineString";
    coordinates: LineString["coordinates"][];
}

export interface Polygon {
    type: "Polygon";
    coordinates: (Position2D[] | Position3D[])[];
}

export interface MultiPolygon {
    type: "MultiPolygon";
    coordinates: Polygon["coordinates"][];
}

export interface Feature<T extends Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | null> {
    type: "Feature";
    geometry: T;
    properties: any;
}

export interface LPoint {
    coords: L.LatLng;
    properties: any;
}

export interface LPolyline {
    coords: L.LatLng[];
    properties: any;
}

export interface LMultiPolyline {
    coords: L.LatLng[][];
    properties: any;
}

export interface LMultiPolygon {
    coords: L.LatLng[][][];
    properties: any;
}

export class GeoJSONParser<T extends Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon | null> {

    private features;
    private _type: "FeatureCollection" | "Feature";
    private _name: string;
    private _crs: {
        properties: {
            name: string;
        };
        type: "name";
    };

    constructor(data: any) {
        this._type = data.type;
        this._name = data.name;
        this._crs = data.crs;
        this.features = data.features as Feature<T>[];
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    get crs() {
        return this._crs;
    }

    // getFeatures() {
    //     const features = [];
    //     for (let feature of this.features) {
    //         const { geometry } = feature;
    //         if(!geometry) continue;

    //         if(geometry.type == "Point") {
    //             const point = this.getPoint(feature as Feature<Point>);
    //             features.push(point);
    //         }
    //         else if(geometry.type == "MultiPoint") {
    //             const points = this.getMultiPoints(feature as Feature<MultiPoint>);
    //             features.push(...points);
    //         }
    //         else if(geometry.type == "LineString") {
    //             const line = this.getLineString(feature as Feature<LineString>);
    //             features.push(line);
    //         }
    //         else if(geometry.type == "MultiLineString" || geometry.type == "Polygon") {
    //             const lineOrPolygon = this.getMultiLineStringOrPolygon(feature as Feature<MultiLineString | Polygon>);
    //             features.push(lineOrPolygon);
    //         }
    //         else if(geometry.type == "MultiPolygon") {
    //             const multiPolygon = this.getMultiPolygon(feature as Feature<MultiPolygon>);
    //             features.push(multiPolygon);
    //         }
    //     }

    //     return features;
    // }

    getPoint() {
        const features: LPoint[] = [];
        for (let feature of this.features) {
            const { geometry, properties } = feature;
            if (!geometry || geometry.type != "Point") continue;

            const coords = L.latLng(geometry.coordinates[1], geometry.coordinates[0]);
            if (geometry.coordinates[2] != undefined) properties.z = geometry.coordinates[2];
            features.push({ coords, properties });
        }

        return features;
    }

    getMultiPoints() {
        const features: LPoint[] = [];
        for (let feature of this.features) {
            const { geometry, properties } = feature;
            if (!geometry || geometry.type != "MultiPoint") continue;

            for (let point of geometry.coordinates) {
                const coords = L.latLng(point[1], point[0]);
                if (point[2] != undefined) properties.z = point[2];
                features.push({ coords, properties });
            }
        }

        return features;
    }

    getLineString() {
        const features: LPolyline[] = [];
        for (let feature of this.features) {
            const { geometry, properties } = feature;
            if (!geometry || geometry.type != "LineString") continue;

            const coords = geometry.coordinates.map((vertex) => L.latLng(vertex[1], vertex[0]));
            features.push({ coords, properties });
        }

        return features;
    }

    getMultiLineString() {
        const features: LMultiPolyline[] = [];
        for (let feature of this.features) {
            const { geometry, properties } = feature;
            const coords: L.LatLng[][] = [];
            if (!geometry || !(geometry.type == "MultiLineString" || geometry.type == "Polygon")) continue;

            for (let line of geometry.coordinates) {
                const lineCoords = line.map((vertex) => L.latLng(vertex[1], vertex[0]));
                coords.push(lineCoords);
            }

            features.push({ coords, properties });
        }

        return features;
    }

    getPolygon() {
        return this.getMultiLineString();
    }

    getMultiPolygon() {
        const features: LMultiPolygon[] = [];
        for (let feature of this.features) {
            const { geometry, properties } = feature;
            const coords: L.LatLng[][][] = [];
            if (!geometry || geometry.type != "MultiPolygon") continue;

            for (let polygon of geometry.coordinates) {
                const polygonCoords = polygon.map(
                    (polyShape) => polyShape.map((vertex) => L.latLng(vertex[1], vertex[0]))
                );
                coords.push(polygonCoords);
            }

            features.push({ coords, properties });
        }

        return features;
    }

    // private xyToLatLon(cooridnates: any[]) {
    //     if (!Array.isArray(cooridnates[0])) {
    //         const temp = cooridnates[0];
    //         cooridnates[0] = cooridnates[1];
    //         cooridnates[1] = temp;
    //         return cooridnates;
    //     }

    //     for (let value of cooridnates) {
    //         if (Array.isArray(value[0])) {
    //             this.xyToLatLon(value);
    //         }
    //         else {
    //             const temp = value[0];
    //             value[0] = value[1];
    //             value[1] = temp;
    //         }
    //     }

    //     return cooridnates;
    // }
}

