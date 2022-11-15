import { setItemAsync, getItemAsync, deleteItemAsync } from 'expo-secure-store';

export const setItem = async (key: string, value: string) => {
  try {
    await setItemAsync(key, value);
  } catch (error) {}
};

export const getItem = async (key: string) => {
  try {
    const result = await getItemAsync(key);
    if (result) {
      return result;
    }
  } catch (error) {}
};

export const deleteItem = async (key: string) => {
  try {
    await deleteItemAsync(key);
  } catch (error) {}
};
