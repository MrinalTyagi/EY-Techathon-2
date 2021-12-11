import React, { useState } from 'react';
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

function MapPage() {
  const [mapSelected, setMapSelected] = useState('Normal View');

  return (
    <React.Fragment>
      <Container className='main-container' fluid>
        <Row style={{ height: '100%' }} className='map-page-row'>
          {/* col-left */}
          <Col style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
              <Col style={{ height: '100%' }} className='left-container'>
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
                <div className='left-container__heading'>
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
            <ButtonGroup
              aria-label='Basic example'
              className='map-toggle-buttons'
              onClick={(e) => console.log(e.target.value)}
            >
              <Button variant='secondary'>Normal View</Button>
              <Button variant='secondary'>Sat. View</Button>
            </ButtonGroup>
            <GeoChart data={data} />
          </Col>

          {/* col-right */}
          <Col style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
              <Col style={{ height: '100%' }} className='right-container'>
                <Card
                  bg='light'
                  // border='light'
                  style={{ width: '90%' }}
                  className='mb-2 right-container__top'
                >
                  <Card.Body>
                    <Card.Img
                      variant='top'
                      src='/pie-chart.png'
                      style={{ height: '120px' }}
                    />
                  </Card.Body>
                </Card>
                <Card
                  bg='light'
                  style={{ width: '90%' }}
                  className='mb-2 right-container__bottom'
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
        <Row className='map-page-row'>
          <Col>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom'
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
          <Col>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom'
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
          <Col>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom'
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
          <Col>
            <Card
              bg='light'
              style={{ width: '90%' }}
              className='mb-2 right-container__bottom'
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
