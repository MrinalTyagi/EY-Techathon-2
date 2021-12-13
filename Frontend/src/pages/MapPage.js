import React, { useState, useEffect } from 'react';
import '../App.css';
import data from '../india.min.geo.json';
import GeoChart from '../components/GeoChart';
import {
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Col,
  Container,
  Figure,
  Row,
  Spinner,
  Table,
  ToggleButton,
} from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import MapBox from '../components/MapBox';
import LineChart from '../components/maps/LineChartJs/LineChart';
import ComboChart from '../components/maps/ComboChart/ComboChart';
import GaugeChart from '../components/maps/GaugeChart/GaugeChart';
import PieChart from '../components/maps/PieChart/PieChart';
import LineChart2 from '../components/maps/LineChartJs/LineChart2';
import BarChart from '../components/maps/BarChart/BarChart';
import LineChart3 from '../components/maps/LineChartJs/LineChart3';

// const token = `sk.eyJ1IjoiYWF2YWlnMjA2OSIsImEiOiJja3gyNmU5dWMwOGNwMm5xazJsbTJkdndsIn0.P8U1m-KogLxOchRCfvY60Q`;

function MapPage() {
  const [normalSelected, setNormalSelected] = useState(true);

  const [indiaData, setIndiaData] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [years, setYears] = useState([]);
  const [forestCover, setForestCover] = useState([]);
  const [forestData, setForestData] = useState([]);
  const [forestDataArray, setForestDataArray] = useState([]);
  const [rainfall, setRainfall] = useState([]);
  const [aqiParams, setAqiParams] = useState([]);
  const [comboChartData, setComboChartData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:5000/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data.Data);

    setYears(Object.keys(data.Data));

    setForestCover(
      years.map((item) => data.Data[item]['Total Forest Cover Area'])
    );

    const annualRainfall = Object.keys(data.Data).map((year) => [
      year,
      data.Data[year]['Annual Rainfall'],
    ]);

    setRainfall(annualRainfall.filter((item) => item[1] !== 0));

    setDataApi([data.Data]);

    const forestObj = Object.keys(data.Data).map((year) => {
      return {
        year,
        TFC: data.Data[year]['Total Forest Cover Area'],
        VDC: data.Data[year]['Very Dense Forest Area'],
        MDC: data.Data[year]['Moderately Dense Forest Area'],
        MFC: data.Data[year]['Mangrove Forest Area'],
        OFA: data.Data[year]['Open Forest Area'],
        SLA: data.Data[year]['Scrub Land Area'],
      };
    });

    // console.log(forestObj);

    const forestArr = Object.keys(data.Data).map((year) => {
      return [
        year,
        data.Data[year]['Total Forest Cover Area'],
        data.Data[year]['Very Dense Forest Area'],
        data.Data[year]['Moderately Dense Forest Area'],
        data.Data[year]['Mangrove Forest Area'],
        data.Data[year]['Open Forest Area'],
        data.Data[year]['Scrub Land Area'],
      ];
    });

    // console.log(forestObj);
    setForestData(forestObj);

    setForestDataArray(forestArr);

    const aqiVal = {
      year: 2015,
      SO2: data.Data['2015']['SO2'],
      NO2: data.Data['2015']['NO2'],
      RSPM: data.Data['2015']['RSPM'],
      SPM: data.Data['2015']['SPM'],
      PM25: data.Data['2015']['PM25'],
    };
    setAqiParams(aqiVal);

    const comboData = Object.keys(data.Data).map((year) => [
      year,
      data.Data[year]['Total Forest Cover Area'],
      data.Data[year]['Annual Rainfall'],
      data.Data[year]['SPM'],
    ]);

    console.log(comboData);
    setComboChartData(comboData);

    // const aqiVal =

    // console.log(aqiVal);

    // console.log(aqiVal[1][1]);
  };

  useEffect(() => {
    fetchData();
  }, [dataApi.length]);

  return (
    <React.Fragment>
      <Container className='main-container' fluid>
        <Row style={{ height: '100%' }} className='map-page-row'>
          {/* col-left */}
          <Col style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
              <Col style={{ height: '100%' }} className='left-container'>
                <div
                  className='left-container__heading'
                  onClick={(e) => console.log('Clicked')}
                >
                  <h1>DASHBOARD</h1>
                </div>
                <div className='left-container__top--tags'>
                  <h1>This is title</h1>
                  <p>This is a paragraph</p>
                </div>
                <div className='left-container__top--stats'>
                  <h1>This is title</h1>
                  <p>This is a paragraph</p>
                </div>
                <></>
              </Col>
            </Row>
          </Col>

          {/* col-middle */}
          <Col
            xs
            lg={6}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div className='map-toggle-buttons'>
              <Button
                variant='primary'
                onClick={() => setNormalSelected(true)}
                // onClick={(e) => console.log('Clicked')}
              >
                Normal View
              </Button>
              <Button
                variant='secondary'
                onClick={(e) => setNormalSelected(false)}
              >
                Satellite View
              </Button>
            </div>
            <></>
            {normalSelected ? (
              <>
                <GeoChart data={data} />
              </>
            ) : (
              <>
                <MapBox />
              </>
            )}
          </Col>

          {/* col-right */}
          <Col style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
              <Col style={{ height: '100%' }} className='right-container'>
                <Card
                  bg='light'
                  // border='light'
                  style={{
                    width: '262px',
                    border: '1px transparent',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                  className='mb-2 right-container__top box-shadow-main'
                >
                  <Card.Body>
                    {dataApi.length === 0 ? (
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
                    ) : (
                      <>
                        <LineChart3
                          dataApi={dataApi}
                          forestCover={forestCover}
                          years={years}
                          forestData={forestDataArray}
                        />
                      </>
                    )}
                  </Card.Body>
                </Card>
                <Card
                  bg='light'
                  style={{ width: '90%' }}
                  className='mb-2 right-container__bottom box-shadow-main global-card-styles'
                  // border='light'
                >
                  <Card.Body>
                    <ComboChart comboChartData={comboChartData} />

                    <Card.Title>Total Count </Card.Title>
                    {/* <Card.Text>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>#</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Larry Bird</td>
                            <td>Bird</td>
                            <td>@twitter</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Larry Bird</td>
                            <td>Bird</td>
                            <td>@twitter</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>Larry Bird</td>
                            <td>Bird</td>
                            <td>@twitter</td>
                            <td>1</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 4-cards */}
        <Row className='map-page-row'>
          <Col className='container-card'>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom box-shadow-main global-card-styles'
              // border='light'
            >
              <Card.Body>
                <GaugeChart aqiParams={aqiParams} />

                <Card.Title>Total Count </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='container-card'>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom box-shadow-main global-card-styles'
              // border='light'
            >
              <Card.Body>
                <PieChart
                  // forestData={forestDataArray}
                  forestDataObject={forestData}
                />

                <Card.Title>Total Count </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='container-card'>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom box-shadow-main global-card-styles'
              // border='light'
            >
              <Card.Body>
                <LineChart2 rainfall={rainfall} />

                <Card.Title>Total Count </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='map-page-row'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default MapPage;
