import logo from './logo.svg';
import './App.css';
import Header from './Headers';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { blog } from './Data/blog';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faSearch} from '@fortawesome/free-solid-svg-icons';



function App() {
  let headerInfo = {
    email: 'ws@gmail.com',
    phone: '9876567892'
  }
  return (
    <div className="main">


      <Header headerInfo={headerInfo} cname="wstech">
        <h1>Welcome to Header Section</h1>
        <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        <FontAwesomeIcon icon={faPhone} className='text-danger'/>
        <FontAwesomeIcon icon={faSearch} className='text-danger'/>
      </Header>
      {/* <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>

                <Card.Body>
                  <Card.Title>React Js</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>

                <Card.Body>
                  <Card.Title>Angular 18</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>

                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>

                <Card.Body>
                  <Card.Title>Python</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Click</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>


      </Container> */}

      <Container>
        <Row>
          {blog.map((v,i)=>{
            return(

              <ProductItems pitems={v} key={i}/>
            )
          })}
          


        </Row>
      </Container>


      <Footer />


    </div>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <div className="col-lg-3 mb-4">
      <Card>

        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>
            {pitems.body}
          </Card.Text>
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
    </div>

  )
}