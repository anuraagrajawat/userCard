import React, { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const apiData = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
      const jsonData = await apiData.json();
      setData(jsonData?.results || []);
    } catch (error) {
      console.log("Error in fetching API data");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Card data={data} /> 
    </div>
  );
};

export default App;
