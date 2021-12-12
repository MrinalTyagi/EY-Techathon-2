import React from 'react';
import { Chart } from 'react-google-charts';

function GaugeChart() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <Chart
        width={'100%'}
        height={'100%'}
        chartType='Gauge'
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Memory', 55],
          //   ['CPU', comp.state.cpu],
          //   ['Network', comp.state.network],
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
    </div>
  );
}

export default GaugeChart;
