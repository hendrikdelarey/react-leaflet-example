import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function NavigationMap(props) {
  const [markers, setMarkers] = useState([
    {
      name: "London 1",
      location: [51.505, -0.09],
      details: "soemthing ",
    },
    {
      name: "London 2",
      location: [51.525, -0.39],
      details: "basdfsdla",
    },
    {
      name: "London 3",
      location: [51.705, -0.19],
      details: "bla bla",
    },
  ]);


  const [mapLocation, setLocation] = useState(props.location)


  useEffect(() => setLocation(props.location),[props.location])

  return (
    <div>
      <MapContainer key={mapLocation} center={mapLocation} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers?.map((m) => (
          <Marker position={m.location} key={m.name}>
            <Popup>
              {m.name} <br /> {m.details}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
