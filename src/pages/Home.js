import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center' >
        <Row className='hero gap-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <Image src='https://scontent.fbag1-2.fna.fbcdn.net/v/t39.30808-6/344354260_121296130914571_5828338931627358956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGcpqtDunJiMgJ1pGutmk9-GvqLWOuQD0Ia-otY65APQsjbBwf_yB0tuXzrDlz_LGQRigmlhfjG8GguotL6jrDs&_nc_ohc=zUbJenHOq9wAX8JWdYR&_nc_ht=scontent.fbag1-2.fna&oh=00_AfB1TmJVvLnQQoXmu3AwPFCzGAL85bYf9DQ0pzS2jDkn7g&oe=64E4A5B0' className='w-100 h-100 bg-black'style={{minWidth:250,minHeight:250}} rounded fluid/>
          </Col>
          <Col>
            <h1 className='display-1 fw-bold'>Gester Luis M. Luchavez</h1>
            <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
            <hr />
            <p>
              A 20 year's old BSIT Student in PHINMA University of Pangasinan who loves driving motorcyle and programming.
            </p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/work'>
                <Button className='btn-lg' variant='dark'>View Work</Button>
              </Link>
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
