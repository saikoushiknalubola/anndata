import { createClient } from '@supabase/supabase-js';

// Public Supabase URL and anon key are safe to expose in the client
const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface Location {
  id: number;
  name: string;
  crop_suggestion: string;
  reason: string;
}

export interface SoilTip {
  id: number;
  tip: string;
}

export interface Alert {
  id: number;
  message: string;
}

export interface FarmerTip {
  id: number;
  tip: string;
}

export interface WasteIdea {
  id: number;
  idea: string;
}

// Mock data with Warangal district locations
export const mockLocations: Location[] = [
  { id: 1, name: 'Ananthasagar', crop_suggestion: 'Paddy', reason: 'Ideal monsoon conditions and water availability' },
  { id: 2, name: 'Hanamkonda', crop_suggestion: 'Cotton', reason: 'Perfect soil conditions for summer crop' },
  { id: 3, name: 'Parkal', crop_suggestion: 'Chili Peppers', reason: 'Optimal temperature and dry climate for cultivation' },
  { id: 4, name: 'Jammikunta', crop_suggestion: 'Turmeric', reason: 'Soil quality and moderate rainfall favor root crops' },
  { id: 5, name: 'Huzurabad', crop_suggestion: 'Maize', reason: 'Good drainage and suitable for intercropping' },
  { id: 6, name: 'Hasanparthy', crop_suggestion: 'Groundnut', reason: 'Sandy loam soil perfect for legume cultivation' },
];

export const mockSoilTips: SoilTip[] = [
  { id: 1, tip: 'Add organic compost to improve soil structure and nutrients' },
  { id: 2, tip: 'Your soil needs more nitrogen - consider planting legumes' },
  { id: 3, tip: 'Soil appears compacted - aerate before planting' },
  { id: 4, tip: 'Good phosphorus levels detected - ideal for flowering crops' },
  { id: 5, tip: 'pH level slightly high - add sulfur to reduce alkalinity' },
];

export const mockAlerts: Alert[] = [
  { id: 1, message: 'Spray neem solution tomorrow to prevent aphid infestation' },
  { id: 2, message: 'Heavy rainfall expected in 3 days - secure young plants' },
  { id: 3, message: 'Wheat rust detected in nearby farms - check your crops now' },
];

export const mockFarmerTips: FarmerTip[] = [
  { id: 1, tip: 'Ramesh says: Intercrop maize with pulses for better soil health' },
  { id: 2, tip: 'Priya says: Rotate your crops every season to prevent pest build-up' },
  { id: 3, tip: 'Mohan says: Apply mulch around vegetable plants to conserve water' },
];

export const mockWasteIdeas: WasteIdea[] = [
  { id: 1, idea: 'Convert rice straw to biogas instead of burning' },
  { id: 2, idea: 'Use coconut husks as growing medium for nursery plants' },
  { id: 3, idea: 'Compost fruit and vegetable waste for nutrient-rich fertilizer' },
];

// Functions to fetch data (will use mock data until Supabase is connected)
export async function getLocations(): Promise<Location[]> {
  try {
    // Uncomment when Supabase is connected
    // const { data, error } = await supabase.from('locations').select('*');
    // if (error) throw error;
    // return data || [];
    return mockLocations;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return mockLocations;
  }
}

export async function getLocationById(id: number): Promise<Location | null> {
  try {
    // Uncomment when Supabase is connected
    // const { data, error } = await supabase.from('locations').select('*').eq('id', id).single();
    // if (error) throw error;
    // return data;
    return mockLocations.find(loc => loc.id === id) || null;
  } catch (error) {
    console.error('Error fetching location:', error);
    return mockLocations.find(loc => loc.id === id) || null;
  }
}

export async function getRandomSoilTip(): Promise<SoilTip | null> {
  try {
    // Uncomment when Supabase is connected
    // const { data, error } = await supabase.from('soil_tips').select('*');
    // if (error) throw error;
    // const randomIndex = Math.floor(Math.random() * data.length);
    // return data[randomIndex] || null;
    const randomIndex = Math.floor(Math.random() * mockSoilTips.length);
    return mockSoilTips[randomIndex] || null;
  } catch (error) {
    console.error('Error fetching soil tip:', error);
    const randomIndex = Math.floor(Math.random() * mockSoilTips.length);
    return mockSoilTips[randomIndex] || null;
  }
}

export async function getAlerts(): Promise<Alert[]> {
  try {
    // Uncomment when Supabase is connected
    // const { data, error } = await supabase.from('alerts').select('*');
    // if (error) throw error;
    // return data || [];
    return mockAlerts;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    return mockAlerts;
  }
}

export async function getFarmerTips(): Promise<FarmerTip[]> {
  try {
    // Uncomment when Supabase is connected
    // const { data, error } = await supabase.from('farmer_tips').select('*');
    // if (error) throw error;
    // return data || [];
    return mockFarmerTips;
  } catch (error) {
    console.error('Error fetching farmer tips:', error);
    return mockFarmerTips;
  }
}

export async function getWasteIdeas(): Promise<WasteIdea[]> {
  try {
    // Uncomment when Supabase is connected
    // const { data, error } = await supabase.from('waste_ideas').select('*');
    // if (error) throw error;
    // return data || [];
    return mockWasteIdeas;
  } catch (error) {
    console.error('Error fetching waste ideas:', error);
    return mockWasteIdeas;
  }
}

// Function to send SMS (to be replaced with actual Twilio integration)
export async function sendSmsAlert(message: string, phoneNumber: string = '+1234567890'): Promise<boolean> {
  try {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    // This would be replaced with actual Twilio API call
    // For now, simulate success
    return true;
  } catch (error) {
    console.error('Error sending SMS:', error);
    return false;
  }
}
