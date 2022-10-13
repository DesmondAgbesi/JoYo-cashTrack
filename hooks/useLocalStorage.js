import { useState, useEffect } from "react";

const  useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() =>{
    const result = localStorage.getItem(key);
    if (!result) return initialValue;
    return JSON.parse(result);
  });

 const setValue = (value) => {
  const newData = [value, ...data];
  setData(newData)
 };

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(data))
 }, []);

 return {data, setValue};
};

export default useLocalStorage;