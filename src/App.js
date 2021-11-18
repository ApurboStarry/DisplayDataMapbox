import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import houseData from "./data/houseData.json";
import priceIcon from "./images/priceImage.svg";
import PriceSVG from "./IconComponent/price";

export default function App() {
  const [viewPort, setViewPort] = useState({
    latitude: 25.6278,
    longitude: 88.6331,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken="pk.eyJ1IjoiaGFzaW4tYXB1cmJvIiwiYSI6ImNrdzQ5aGJtazAzeTgycXFsaGsxMmRsYW0ifQ.W_VPy0mSu_nQgj6ZFuSYKw"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewPort) => setViewPort(viewPort)}
      >
        {houseData.map((house) => {
          return (
            <Marker
              key={house.id}
              latitude={house.latitude}
              longitude={house.longitude}
            >
              {/* <img
                style={{ cursor: "pointer" }}
                height={30}
                src={priceIcon}
                alt="Price of accommodation"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedHouse(house);
                  console.log(house);
                }}
              /> */}
              <div
                style={{ cursor: "pointer", height: 30 }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedHouse(house);
                  console.log(house);
                }}
              >
                <PriceSVG price={house.price} />
              </div>
            </Marker>
          );
        })}

        {selectedHouse && (
          <Popup
            latitude={selectedHouse.latitude}
            longitude={selectedHouse.longitude}
            onClose={() => {
              setSelectedHouse(null);
            }}
          >
            <div>
              <h2>{selectedHouse.id}</h2>
              <p>{selectedHouse.latitude + " " + selectedHouse.longitude}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}
