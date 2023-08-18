import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero'>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
        <ul>
          <li>
            <h4>Project 1</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Project 2</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Project 3 </h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/366736733_683450113135618_6560603183012519082_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFGtyqdmdD2bPH2X5FEj2rBqMbHWxqbpPyoxsdbGpuk_K0PXWW2wym4qTDNlTWkZNbq6Yj776upuvtnGnG2x3rS&_nc_ohc=ld4Rlh-pumIAX-0PHJX&_nc_ht=scontent.fbag1-2.fna&oh=03_AdS-2-5vHNqQjNYnmFQ8oteW-vClhbg5aqY5rYeDv9Zkig&oe=6507064E" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 1</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/366396232_670916551724592_8351530521408924884_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFM-wQ2pXudm4Q8nE-DPhImVG1huGTsDNdUbWG4ZOwM1zQ15Y9Vza3AbjPWXPQ3F0uMTgRG7k5Y2WCzbBEMjXWP&_nc_ohc=HO42bmKCEAwAX-pifvz&_nc_ht=scontent.fbag1-2.fna&oh=03_AdTWBEFxi2NzTQb6sVICdWw57QH2d6WM7mlHSZbNRwqIug&oe=6506FA62" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 2</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368189586_195409850201377_5279528349391279648_n.png?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFW_EqROGNCYAT8fheG8wxgBFjoHzlNQUQEWOgfOU1BRM7YUHNL9udB1O-8j6yUYPghl65fi-CbxW3UUiOrGPId&_nc_ohc=VXY_am9o8WoAX_9mcOt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQBuemARQCRjdYosTUyRnjMlY6pZyk7cJ0EZkqKq8Mbdw&oe=65070F4B" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 3</h3>    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
