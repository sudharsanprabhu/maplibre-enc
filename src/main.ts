import maplibregl from "maplibre-gl";
import "./style.css";
import LNDARE from "./assets/data/LNDARE.json";
import ACHARE from "./assets/data/ACHARE.json";
import DRGARE from "./assets/data/DRGARE.json";
import DEPARE from "./assets/data/DEPARE.json";
import SOUNDG from "./assets/data/SOUNDG.json";
import BOYLAT from "./assets/data/BOYLAT.json";

import { Lndare } from "./stylers/lndare";
import { Drgare } from "./stylers/drgare";
import { Depare } from "./stylers/depare";
import { Soundg } from "./stylers/soundg";
import { Achare } from "./stylers/achare";
import { Boylat } from "./stylers/boylat";
import { GeoJSONParser, MultiPoint } from "./geojson";


// const map = new L.Map('map', { center: [8.76, 78.28], zoom: 12 });
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   subdomains: ['a', 'b', 'c']
// }).addTo(map);

const map = new maplibregl.Map({ 
  container: "map",
  // style: "https://demotiles.maplibre.org/style.json",
  style: "/empty-v8.json",
  center: [78.28, 8.76],
  zoom: 12,
  attributionControl: false
});

const soundg = new GeoJSONParser<MultiPoint>(SOUNDG);
const soundgData: any = { ...SOUNDG };
soundgData.features = soundg.getMultiPoints();
map.on("load", () => {
    new Lndare(LNDARE, map);
    new Depare(DEPARE, map);
    new Drgare(DRGARE, map);
    new Achare(ACHARE, map);
    new Soundg(soundgData, map);
    new Boylat(BOYLAT, map);
})
