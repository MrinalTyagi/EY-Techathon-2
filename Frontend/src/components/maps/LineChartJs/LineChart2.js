import React from 'react';
import Chart from 'react-google-charts';

function LineChart2({ rainfall }) {
  return (
    <div>
      {rainfall.length !== 0 && (
        <Chart
          width={'100%'}
          height={'100%'}
          chartType='LineChart'
          loader={<div>Loading Chart</div>}
          data={[['Year', 'Annual Rainfall'], ...rainfall]}
          options={{
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'Popularity',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      )}
    </div>
  );
}

export default LineChart2;
