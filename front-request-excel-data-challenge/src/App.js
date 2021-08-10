import React, { useEffect, useState } from 'react';
import { getDataByMonth, getNameMonth } from './components/utils/filterData';
import { getExcelData } from './components/utils/utils';
import nextId from "react-id-generator";
import Tables from './components/Table/Tables';

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
        loading
          ? <div>Cargando...</div>
          : <div>
              {
                months.map( month => (
                    <div key={nextId()}>
                      <div>{
                        getNameMonth(month)
                      }</div>
                      <Tables month={month} />
                    </div>
                  ))
              }
            </div>
      }
    </div>
  );
}

export default App;
