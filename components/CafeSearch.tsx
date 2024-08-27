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
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';

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
      renderRow={(data) => (
        <View style={styles.searchBar.row}>
          <Ionicons name="location-outline" size={27} color={Colors['light'].text} />
          <View style={styles.resultContainer}>
            <Text style={styles.name}>{data.structured_formatting.main_text}</Text>
            <Text style={styles.address}>{data.structured_formatting.secondary_text}</Text>
          </View>
        </View>
      )}
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
  resultContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors['light'].text,
    width: 315
  },
  address: {
    fontSize: 12,
    textAlign: 'left',
    color: Colors['light'].text,
    width: 315
  },
  searchBar: {
    textInput: {
      height: 40,
      backgroundColor: Colors['light'].background,
      borderColor: Colors['light'].primaryGreen,
      borderWidth: 2,
      borderRadius: 10,
      color: Colors['light'].text,
      fontSize: 16,
    },
    listView: {
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: Colors['light'].secondaryGreen,
    },
    row: {
      // backgroundColor: Colors['light'].secondaryGreen,
      backgroundColor: Colors['light'].background,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      paddingBottom: 2,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    separator: {
      height: 1.5,
      backgroundColor: Colors['light'].secondaryGreen,
      margin: 10,
    },
    poweredContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    powered: {
      width: 20,
      height: 20,
    },
  },
});

