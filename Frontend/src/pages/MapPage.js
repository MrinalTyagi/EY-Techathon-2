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
  Table,
  ToggleButton,
} from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import MapBox from '../components/MapBox';
import LineChart from '../components/maps/LineChartJs/LineChart';

// const token = `sk.eyJ1IjoiYWF2YWlnMjA2OSIsImEiOiJja3gyNmU5dWMwOGNwMm5xazJsbTJkdndsIn0.P8U1m-KogLxOchRCfvY60Q`;

function MapPage() {
  const [normalSelected, setNormalSelected] = useState(true);

  const [indiaData, setIndiaData] = useState([]);
  const [dataApi, setDataApi] = useState([]);
  const [years, setYears] = useState([]);
  const [forestCover, setForestCover] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch('http://127.0.0.1:5000/', {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data);

  //   setIndiaData([data]);
  // };

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:5000/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data.Data);

    // console.log(
    //   data['Data'].forEach((year) => year['Total Forest Cover Area'])
    // );

    // for( in data.Data){

    // }
    // Object.keys(data.Data).forEach((year) =>
    //   console.log(year['Total Forest Cover Area'])
    // );

    setYears(Object.keys(data.Data));

    // years = Object.keys(data.Data);

    setForestCover(
      years.map((item) => data.Data[item]['Total Forest Cover Area'])
    );

    // forestCover = years.map(
    //   (item) => data.Data[item]['Total Forest Cover Area']
    // );

    // console.log(data.Data['2019']['Total Forest Cover Area']);

    console.log(years);
    console.log(forestCover);

    setDataApi([data]);

    // setIndiaData([data]);
  };

  useEffect(() => {
    // const fetchAndSet = async () => {
    //   console.log(indiaData);
    //   await fetchData();
    //   console.log(indiaData);
    // };
    // fetchAndSet();
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
                <>
                  {/* <Card
                  bg='light'
                  // border='light'
                  style={{ width: '90%' }}
                  className='mb-2 right-container__top'
                >
                  <Card.Body>
                    <Card.Img
                      variant='top'
                      src='/pie-chart.png'
                      style={{ height: '140px' }}
                    />
                  </Card.Body>
                </Card> */}
                </>
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
                <>
                  {/* <Card
                  bg='light'
                  style={{ width: '90%' }}
                  className='mb-2 left-container__bottom'
                  // border='light'
                >
                  <Card.Body>
                    <Card.Img
                      variant='top'
                      src='/pie-chart.png'
                      style={{ height: '100px' }}
                    />

                    <Card.Title>Total Count </Card.Title>
                    <Card.Text>
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
                    </Card.Text>
                  </Card.Body>
                </Card> */}
                </>
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
            <>
              {/* {mapSelected === 'Normal View' ? (
              <>
                <GeoChart data={data} />
              </>
            ) : (
              <>
                <MapBox />
              </>
            )} */}
            </>
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
                    width: '90%',
                    border: '1px transparent',
                    height: '245px',
                  }}
                  className='mb-2 right-container__top box-shadow-main'
                >
                  <Card.Body>
                    {/* {indiaData.length !== 0 && <LineChart data={indiaData} />} */}
                    {dataApi.length === 0 ? (
                      <>Loading</>
                    ) : (
                      <>
                        <LineChart
                          dataApi={dataApi}
                          forestCover={forestCover}
                          years={years}
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
                    <Card.Img variant='top' src='/pie-chart.png' />

                    <Card.Title>Total Count </Card.Title>
                    <Card.Text>
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
                    </Card.Text>
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
                <Card.Img variant='top' src='/pie-chart.png' />

                <Card.Title>Total Count </Card.Title>
                <Card.Text>
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
                </Card.Text>
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
                <Card.Img variant='top' src='/pie-chart.png' />

                <Card.Title>Total Count </Card.Title>
                <Card.Text>
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
                </Card.Text>
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
                <Card.Img variant='top' src='/pie-chart.png' />

                <Card.Title>Total Count </Card.Title>
                <Card.Text>
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
                </Card.Text>
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
                <Card.Img variant='top' src='/pie-chart.png' />

                <Card.Title>Total Count </Card.Title>
                <Card.Text>
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
                </Card.Text>
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
