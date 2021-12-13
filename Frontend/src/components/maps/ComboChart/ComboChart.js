import { Chart } from 'react-google-charts';
import React from 'react';

function ComboChart({ comboChartData }) {
  return (
    <div>
      {comboChartData.length !== 0 && (
        <Chart
          width={'100%'}
          height={'100%'}
          chartType='ComboChart'
          loader={<div>Loading Chart</div>}
          data={[['Year', 'TFC', 'AR', 'SPM'], ...comboChartData]}
          options={{
            title: 'Monthly Coffee Production by Country',
            vAxis: {
              title: 'Annual Data',
              viewWindowMode: 'explicit',
              viewWindow: { min: 0 },
            },
            hAxis: { title: 'Year' },
            seriesType: 'bars',
            // series: { 5: { type: 'line' }, 3: { type: 'line' } },
            //   series: {  },
            series: { 1: { type: 'line' }, 2: { type: 'line' } },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      )}
    </div>
  );
}

export default ComboChart;
