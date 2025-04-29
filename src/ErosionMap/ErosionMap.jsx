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
      "https://earthengine.googleapis.com/v1/projects/ee-siddhibirje007/maps/b7d1c3276fede5d42ef0c2d05fb2d3a1-f73b12c563b5b35ed8e3fd52f02c659f/tiles/{z}/{x}/{y}",
      {
        opacity: 0.7,
        zIndex: 2
      }
    );

    const erosion2020_2025 = L.tileLayer(
      "https://earthengine.googleapis.com/v1/projects/ee-siddhibirje007/maps/4549179376112a773f046b9fdb4513a0-b282fad95693f744defb9bba64db403e/tiles/{z}/{x}/{y}",
      {
        opacity: 0.7,
        zIndex: 2
      }
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