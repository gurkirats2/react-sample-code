const getItem = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting value from local storage:", error);
    return null;
  }
};

const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting value in local storage:", error);
  }
};

const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing value from local storage:", error);
  }
};

const getToken = () => {
  return localStorage.getItem("accessToken");
};

const clear = () => {
  return localStorage.clear();
};

const local_storage = { getItem, setItem, removeItem, getToken, clear };

export default local_storage;
