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

export const CafeSearch: React.FC = ({ onCafeSelect }) => {
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
          location: details?.geometry?.location || { latitude: 0, longitude: 0 },
        };
        onCafeSelect(CafeData);
        // console.log('Data:', data);
        // console.log('Details:', details);
        // console.log('Address:', JSON.stringify(details?.formatted_address));
        // console.log('Location:', JSON.stringify(details?.geometry?.location));
        // console.log('Place:', JSON.stringify(data?.structured_formatting?.main_text));
      }}
      query={{
        key: 'AIzaSyDm02Vzk0SDNFVwWSJKRSwSrkFu46M50IQ',
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

