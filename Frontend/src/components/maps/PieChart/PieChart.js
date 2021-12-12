import React from 'react';
import Chart from 'react-google-charts';

function PieChart() {
  const calculate = (val) => (val / 3287469) * 100;

  return (
    <div>
      <Chart
        width={'100%'}
        height={'100%'}
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Forest Cover', '%Cover'],
          ['VDC', calculate(99278)],
          ['MDC', calculate(398472)],
          ['MFC', calculate(4975)],
          ['OFA', calculate(304499)],
          ['SLA', calculate(42084)],
        ]}
        options={{
          title: 'Forest Cover of 2019',
          // Just add this option
          legend: 'none',
          //   is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}

export default PieChart;
