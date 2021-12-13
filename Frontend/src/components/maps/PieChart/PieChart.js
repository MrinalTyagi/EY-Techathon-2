import React, { useState } from 'react';
import Chart from 'react-google-charts';

function PieChart({ forestDataObject }) {
  const [selectedYear, setSelectedYear] = useState(2019);
  const [selectedIndex, setSelectedIndex] = useState(16);

  const calculate = (val) => (val / 3287469) * 100;

  return (
    <div>
      {forestDataObject.length !== 0 && (
        <>
          <div className='forest-data-selector'>
            <select
              value={selectedIndex}
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedIndex(e.target.value);
              }}
            >
              {forestDataObject.map((val, idx) => (
                <option value={idx}>{forestDataObject[idx].year}</option>
              ))}
            </select>
          </div>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
              // ['Forest Cover', '%Cover'],
              // ['VDC', calculate(99278)],
              // ['MDC', calculate(398472)],
              // ['MFC', calculate(4975)],
              // ['OFA', calculate(304499)],
              // ['SLA', calculate(42084)],
              ['Forest Cover', '%Cover'],
              ['VDC', calculate(forestDataObject[selectedIndex]['VDC'])],
              ['MDC', calculate(forestDataObject[selectedIndex]['MDC'])],
              ['MFC', calculate(forestDataObject[selectedIndex]['MFC'])],
              ['OFA', calculate(forestDataObject[selectedIndex]['OFA'])],
              ['SLA', calculate(forestDataObject[selectedIndex]['SLA'])],
            ]}
            options={{
              // title: 'Forest Cover of 2019',
              // Just add this option
              legend: 'none',
              //   is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </>
      )}
    </div>
  );
}

export default PieChart;
