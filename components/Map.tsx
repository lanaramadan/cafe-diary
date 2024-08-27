import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Region } from "react-native-maps";
import { Colors } from "@/constants/Colors";
import { Marker } from "react-native-maps";

interface MarkerData {
  location: {
    lat: number;
    lng: number;
  };
  title: string;
  description: string;
}

export const Map: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0,
    longitudeDelta: 0.0121,
  });

  const [markers, setMarkers] = useState<MarkerData[]>([
    {
      location: { latitude: 37.78825, longitude: -122.4324 },
      title: "Marker 1",
      description: "This is marker 1",
    },
    {
      location: { latitude: 37.78925, longitude: -122.4334 },
      title: "Marker 2",
      description: "This is marker 2",
    },
  ]);

  const onRegionChange = (newRegion: Region) => {
    setRegion(newRegion);
  };

  return (
    <MapView
      style={styles.map}
      region={region}
      onRegionChange={onRegionChange}
      userInterfaceStyle={"light"}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.location}
          title={marker.title}
          description={marker.description}
          image={require("../assets/images/coffee-pin.png")}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 375,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors["light"].primaryPink,
  },
});
