import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <hr/>
        <Container className='p-5'>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>School 1 | Year 2015</Accordion.Header>
          <Accordion.Body>
            Libsong, East, Lingayen, Pangasinan
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>School 2 | Year 2018 junior high / Year 2020 senior high</Accordion.Header>
          <Accordion.Body>
            Pangasinan National High School / Lyceum NorthWesthern University
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>School 3 | Current 2023</Accordion.Header>
          <Accordion.Body>
            PHINMA university of Pangasinan
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default Education;
