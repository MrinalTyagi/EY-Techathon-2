import { Chart } from 'react-google-charts';
import React from 'react';
import { Spinner } from 'react-bootstrap';

function ComboChart2({ comboChartData }) {
  return (
    <div style={{ overflow: 'hidden', height: '100%' }}>
      {comboChartData.length !== 0 && (
        <Chart
          width={'100%'}
          height={'100%'}
          chartType='ComboChart'
          loader={
            <>
              <div
                className='spinner'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Spinner animation='border' variant='primary' />
              </div>
            </>
          }
          data={[['State', 'TFC', 'AR', 'SO2', 'OFA'], ...comboChartData]}
          options={{
            title: 'Relation b/w TFC, AR, SO2',
            vAxis: {
              title: 'Annual Data',
              viewWindowMode: 'explicit',
              viewWindow: { min: 0 },
            },
            hAxis: { title: 'Year' },
            seriesType: 'bars',
            // series: { 5: { type: 'line' }, 3: { type: 'line' } },
            //   series: {  },
            series: { 3: { type: 'line' } },
            backgroundColor: 'transparent',
            chartArea: {
              width: '80%',
              height: '70%',
            },
            legend: {
              position: 'right',
            },
            isStacked: 'true',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      )}
    </div>
  );
}

export default ComboChart2;
