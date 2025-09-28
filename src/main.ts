import maplibregl from "maplibre-gl";
import "./style.css";
import ACHARE from "./assets/data/ACHARE.json";
import DRGARE from "./assets/data/DRGARE.json";
import SOUNDG from "./assets/data/SOUNDG.json";
import BCNSPP from "./assets/data/BCNSPP.json";
import BOYLAT from "./assets/data/BOYLAT.json";
import BOYSPP from "./assets/data/BOYSPP.json";
import BRIDGE from "./assets/data/BRIDGE.json";
import BUAARE from "./assets/data/BUAARE.json";
import BUISGL from "./assets/data/BUISGL.json";
import CBLSUB from "./assets/data/CBLSUB.json";
import COALNE from "./assets/data/COALNE.json";
import CONVYR from "./assets/data/CONVYR.json";
import DEPARE from "./assets/data/DEPARE.json";
import DEPCNT from "./assets/data/DEPCNT.json";
import LIGHTS from "./assets/data/LIGHTS.json";
import LNDARE from "./assets/data/LNDARE.json";
import LNDMRK from "./assets/data/LNDMRK.json";
import LNDRGN from "./assets/data/LNDRGN.json";
import NAVLNE from "./assets/data/NAVLNE.json";
import OBSTRN from "./assets/data/OBSTRN.json";
import PILBOP from "./assets/data/PILBOP.json";
import PILPNT from "./assets/data/PILPNT.json";
import PRDARE from "./assets/data/PRDARE.json";

import { Soundg } from "./stylers/soundg";
import { Achare } from "./stylers/achare";
import { Bcnspp } from "./stylers/bcnspp";
import { Boylat } from "./stylers/boylat";
import { Boyspp } from "./stylers/boyspp";
import { Bridge } from "./stylers/bridge";
import { Buaare } from "./stylers/buaare";
import { Buisgl } from "./stylers/buisgl";
import { Cblsub } from "./stylers/cblsub";
import { Coalne } from "./stylers/coalne";
import { Convyr } from "./stylers/convyr";
import { Depare } from "./stylers/depare";
import { Depcnt } from "./stylers/depcnt";
import { Drgare } from "./stylers/drgare";
import { Lights } from "./stylers/lights";
import { Lndare } from "./stylers/lndare";
import { Lndmrk } from "./stylers/lndmrk";
import { Lndrgn } from "./stylers/lndrgn";
import { Navlne } from "./stylers/navlne";
import { Obstrn } from "./stylers/obstrn";
import { Pilbop } from "./stylers/pilbop";
import { Pilpnt } from "./stylers/pilpnt";
import { Prdare } from "./stylers/prdare";
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
    new Bcnspp(BCNSPP, map);
    new Boylat(BOYLAT, map);
    new Boyspp(BOYSPP, map);
    new Bridge(BRIDGE, map);
    new Buaare(BUAARE, map);
    new Buisgl(BUISGL, map);
    new Cblsub(CBLSUB, map);
    new Coalne(COALNE, map);
    new Convyr(CONVYR, map);
    new Depcnt(DEPCNT, map);
    new Lights(LIGHTS, map);
    new Lndmrk(LNDMRK, map);
    new Lndrgn(LNDRGN, map);
    new Navlne(NAVLNE, map);
    new Obstrn(OBSTRN, map);
    new Pilbop(PILBOP, map);
    new Pilpnt(PILPNT, map);
    new Prdare(PRDARE, map);
})
