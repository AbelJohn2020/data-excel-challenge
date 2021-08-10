import React, { useEffect, useState } from 'react';
import Table from './components/Table/Table';
import { getDataByMonth } from './components/utils/filterData';
import { getExcelData } from './components/utils/utils';
import nextId from "react-id-generator";

function App() {
  const [excelData, setExcelData] = useState({
    data: [],
    loading: true,
  });

  const { data, loading } = excelData;

  useEffect(() => {
    getExcelData()
      .then( res => setExcelData({
        data: res,
        loading: false,
      }))
      .catch( e => e);
  }, []);

  const months = getDataByMonth(data);

  return (
    <div className="App">
      {
        months.map( month => (
          <Table key={nextId()} month={month} />
        ))
      }
    </div>
  );
}

export default App;
