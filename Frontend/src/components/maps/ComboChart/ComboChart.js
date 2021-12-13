import { Chart } from 'react-google-charts';
import React from 'react';

function ComboChart({ comboChartData }) {
  return (
    <div>
      {comboChartData.lenght !== 0 && (
        <Chart
          width={'100%'}
          height={'100%'}
          chartType='ComboChart'
          loader={<div>Loading Chart</div>}
          data={[
            // [
            //   'Month',
            //   'Bolivia',
            //   'Ecuador',
            //   'Madagascar',
            //   'Papua New Guinea',
            //   'Rwanda',
            //   'Average',
            // ],
            // ['2004/05', 165, 938, 522, 998, 450, 614.6],
            // ['2005/06', 135, 1120, 599, 1268, 288, 682],
            // ['2006/07', 157, 1167, 587, 807, 397, 623],
            // ['2007/08', 139, 1110, 615, 968, 215, 609.4],
            // ['2008/09', 136, 691, 629, 1026, 366, 569.6],
            ['Year', 'TFC', 'AR', 'SPM'],
            ...comboChartData,
          ]}
          options={{
            title: 'Monthly Coffee Production by Country',
            vAxis: { title: 'Annual Data' },
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
