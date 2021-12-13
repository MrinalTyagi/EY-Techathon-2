import React from 'react';
import Chart from 'react-google-charts';

function LineChart3({ dataApi, forestCover, years, forestData }) {
  return (
    <div style={{ overflowY: 'hidden' }}>
      {dataApi.length !== 0 && (
        <Chart
          width={'100%'}
          height={'100%'}
          chartType='LineChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['years', 'TFC', 'VDC', 'MDC', 'MFC', 'OFA', 'SLA'],

            ...forestData,
          ]}
          options={{
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'Forest Area',
              viewWindowMode: 'explicit',
              viewWindow: { min: 0 },
            },
            series: {
              1: { curveType: 'function' },
            },
            backgroundColor: 'rgb(248,289,250)',
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      )}
    </div>
  );
}

export default LineChart3;
