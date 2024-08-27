/**
 * Represents the data for a café.
 * 
 * @interface CafeData
 * @property {string} name - The name of the café.
 * @property {string} address - The address of the café.
 * @property {object} location - The geographical location of the café.
 * @property {number} location.lat - The latitude of the café's location.
 * @property {number} location.lng - The longitude of the café's location.
 */
export interface CafeData {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}
