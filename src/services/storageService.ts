type IAddToLocalStorage = (key: string, value: string) => void;
type IGetFromLocalStorage = (key: string) => string | null;
type IDeleteFromLocalStorage = (key: string) => void;

const addToLocalStorage: IAddToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage: IGetFromLocalStorage = key => {
  const storageKey = localStorage.getItem(key);
  return storageKey ? JSON.parse(storageKey) : null;
};

const deleteFromLocalStorage: IDeleteFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export const localStorageService = {
  addToLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage
};
