import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

function GaugeChart({ aqiParams, aqiArr }) {
  // const [selectedYear, setSelectedYear] = useState(2015);

  const [selectedAqiParam, setSelectedAqiParam] = useState('SO2');
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      {aqiArr.length !== 0 && (
        <>
          <div
            className='aqi-param-selector'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div className='param-selector'>
              <select
                value={selectedAqiParam}
                onChange={(e) => {
                  setSelectedAqiParam(e.target.value);
                }}
              >
                <option value='SO2'>SO2</option>
                <option value='NO2'>NO2</option>
                <option value='RSPM'>RSPM</option>
                <option value='SPM'>SPM</option>
                <option value='PM25'>PM25</option>
              </select>
            </div>

            <div className='year-selector'>
              <select
                onChange={(e) => {
                  console.log(
                    aqiArr[e.target.value][selectedAqiParam],
                    +e.target.value
                  );
                  setSelectedIndex(+e.target.value);
                }}
              >
                {aqiArr.map((val, idx) => (
                  <option value={idx}>{aqiArr[idx].year}</option>
                ))}
              </select>
            </div>
          </div>

          <Chart
            width={'100%'}
            height={'100%'}
            chartType='Gauge'
            loader={<div>Loading Chart</div>}
            data={[
              ['AQI Param', '%Value'],
              [
                selectedAqiParam,
                aqiArr[selectedIndex][selectedAqiParam] / 100000,
              ],
            ]}
            options={{
              redFrom: 90,
              redTo: 100,
              yellowFrom: 75,
              yellowTo: 90,
              minorTicks: 5,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </>
      )}
    </div>
  );
}

export default GaugeChart;
