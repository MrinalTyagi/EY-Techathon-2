import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

function GaugeChart({ aqiParams }) {
  // const [selectedYear, setSelectedYear] = useState(2015);

  const [selectedAqiParam, setSelectedAqiParam] = useState('SO2');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      {aqiParams.length !== 0 && (
        <>
          <div className='aqi-param-selector'>
            <select
              value={selectedAqiParam}
              onChange={(e) => setSelectedAqiParam(e.target.value)}
            >
              <option value='SO2'>SO2</option>
              <option value='NO2'>NO2</option>
              <option value='RSPM'>RSPM</option>
              <option value='SPM'>SPM</option>
              <option value='PM25'>PM25</option>
            </select>
          </div>

          <Chart
            width={'100%'}
            height={'100%'}
            chartType='Gauge'
            loader={<div>Loading Chart</div>}
            data={[
              ['AQI Param', '%Value'],
              [selectedAqiParam, aqiParams[selectedAqiParam] / 100000],
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
