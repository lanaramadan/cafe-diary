import React from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View, } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from '@/constants/Colors';
import { CafeData } from './types/CafeData';

interface CafeSearchProps {
  onCafeSelect: (CafeData: CafeData) => void;
}

export const CafeSearch: React.FC<CafeSearchProps> = ({ onCafeSelect }) => {
  return (
    <GooglePlacesAutocomplete
      styles={styles.searchBar}
      textInputProps={{
        placeholderTextColor: Colors['light'].primaryGreen,
        returnKeyType: "search"
      }}
      enablePoweredByContainer={false}
      disableScroll={true}
      placeholder='Search cafés'
      GooglePlacesDetailsQuery={{ fields: "formatted_address,geometry" }}
      fetchDetails={true}
      onPress={(data, details = null) => {
        const CafeData: CafeData = {
          name: data?.structured_formatting?.main_text || '',
          address: details?.formatted_address || '',
          location: details?.geometry?.location || { lat: 0, lng: 0 },
        };
        
        onCafeSelect(CafeData);
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    textInput: {
      backgroundColor: Colors['light'].background,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: Colors['light'].primaryGreen,
      height: 45,
      color: Colors['light'].text,
      fontSize: 16,
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
    poweredContainer: {
      borderColor: Colors['light'].primaryGreen,
      borderTopWidth: 1,
    },
    row: {
      backgroundColor: Colors['light'].secondaryGreen,
      padding: 13,
      height: 35,
      flexDirection: 'row',
    },
    separator: {
      height: 1,
      backgroundColor: Colors['light'].primaryGreen,
    },
  },
});

