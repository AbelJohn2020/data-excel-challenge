import React, { useEffect, useState } from 'react';
import { getExcelData } from './components/utils/utils';

function App() {
  const [excelData, setExcelData] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getExcelData()
      .then( res => setExcelData({
        data: res,
        loading: false,
      }))
      .catch( e => e);
  }, []);

  console.log(excelData)

  return (
    <div className="App">
      Read data
    </div>
  );
}

export default App;
