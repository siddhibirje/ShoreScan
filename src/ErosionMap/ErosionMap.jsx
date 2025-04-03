import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ErosionMap = () => {
  useEffect(() => {
    // Initialize Map
    const map = L.map("map").setView([19.076, 72.8777], 11); // Center on Mumbai

    // Add Base Layer (OpenStreetMap)
    const baseLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add GEE Tile Layers
    const erosion2017_2020 = L.tileLayer(
      "https://earthengine.googleapis.com/v1/projects/ee-siddhibirje007/maps/44c2aafd6037b679bc1dc01d58a2fc69-48801abab84ae33a673bd2317697c7a9/tiles/{z}/{x}/{y}"
    );

    const erosion2020_2025 = L.tileLayer(
      "https://earthengine.googleapis.com/v1/projects/ee-siddhibirje007/maps/51effb02010a7252b37eb537be835112-2f8296fb25f5c876317fd67f566a1539/tiles/{z}/{x}/{y}"
    );

    // Layer Control Toggle
    const overlayMaps = {
      "Erosion 2017-2020": erosion2017_2020,
      "Erosion 2020-2025": erosion2020_2025,
    };

    L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

    // Default Layer
    erosion2017_2020.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }} />;
};

export default ErosionMap;