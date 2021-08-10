import React, { useEffect, useState } from 'react';
import { getDataByMonth, getNameMonth } from './components/utils/filterData';
import { getExcelData } from './components/utils/utils';
import nextId from "react-id-generator";
import Tables from './components/Table/Tables';
import OrganizationChart from './components/OrganizationChart/OrganizationChart';
import './App.css';
import './components/UI/loading.css';

function App() {
  const [excelData, setExcelData] = useState({
    data: [],
    loading: true,
  });

  const [change, setChange] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleClickChange = () => {
    setChange(!change);
  }

  const handleClickShadow = () => {
    setShadow(!shadow);
  }

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
    <div className={shadow ? 'app darkApp' : 'app lightApp'}>
      {
        loading
          ? <div className="loading">
              <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          : <div>
              <div className="buttonsBox">
                <button 
                  type='button' 
                  onClick={() => handleClickShadow()}
                  className={shadow ? 'button shadowButton' : 'button lightButton'}
                >
                  {shadow ? 'claro' : 'oscuro'}
                </button>
                <button 
                  type='button' 
                  onClick={() => handleClickChange()}
                  className={shadow ? 'button shadowButton' : 'button lightButton'}
                >
                  {change ? 'tablas' : 'organigrama'}
                </button>
              </div>
              {
                change
                  ? <div>
                      {
                        months.map(month => (
                          <div className="month" key={nextId()}>
                            <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                              Reporte del mes de <div className="monthName"> {getNameMonth(month)} </div> del 2020
                            </h1>
                            <OrganizationChart month={month} shadow={shadow} />
                          </div>
                        ))
                      }
                    </div>
                  : <div>
                      {
                        months.map( month => (
                            <div className="month" key={nextId()}>
                              <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                                Reporte del mes de <div className="monthName"> {getNameMonth(month)} </div> del 2020
                              </h1>
                              <Tables month={month} shadow={shadow} />
                            </div>
                          ))
                      }
                    </div>
              }
              
            </div>
      }
    </div>
  );
}

export default App;
