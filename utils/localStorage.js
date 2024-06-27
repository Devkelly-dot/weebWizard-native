// localStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save a key-value pair to local storage
export async function saveToLocalStorage (key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving to local storage', error);
  }
};

// Function to delete an item from local storage
export async function deleteFromLocalStorage (key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error deleting from local storage', error);
  }
};

export async function getFromLocalStorage(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null; // Return null if the item does not exist
  } catch (error) {
    console.error('Error retrieving from local storage', error);
    return null;
  }
};