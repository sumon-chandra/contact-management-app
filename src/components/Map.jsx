// Leaflet Man CSS
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const customIcon = new Icon({
     iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
     iconSize: [38, 38],
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
     return new divIcon({
          html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
          className: "custom-marker-cluster",
          iconSize: point(33, 33, true),
     });
};

const Map = () => {
     const { data = [] } = useQuery({
          queryKey: ["map"],
          queryFn: async () => {
               const response = await axios("https://disease.sh/v3/covid-19/countries");
               return await response.data;
          },
     });
     const position = [48.86, 2.3522];
     return (
          <div className="w-[90%] mx-auto">
               <MapContainer className="h-[70vh]" center={position} zoom={4} scrollWheelZoom={true}>
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
                         {data.map(country => (
                              <Marker key={country?.country} position={[country?.countryInfo?.lat, country?.countryInfo?.long]} icon={customIcon}>
                                   <Popup>
                                        <div className="rounded w-52">
                                             <div className="flex items-center justify-between mb-2">
                                                  <p className="text-lg font-bold">{country?.country}</p>
                                                  <img src={country?.countryInfo?.flag} className="w-6" alt={country?.country} />
                                             </div>
                                             <p className="font-bold">Cases: {country?.cases}</p>
                                             <p className="font-bold">Deaths: {country?.deaths}</p>
                                             <p className="font-bold">Recovered: {country?.recovered}</p>
                                        </div>
                                   </Popup>
                              </Marker>
                         ))}
                    </MarkerClusterGroup>
               </MapContainer>
          </div>
     );
};

export default Map;
