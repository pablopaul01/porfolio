import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProject = ({title, text, site, repo, img}) => {
  return (
    <Card 
    style={{ width: '30rem' }} className='px-0'
    data-aos="zoom-in"
            data-aos-offset="200" 
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-delay="200"
            data-aos-once="false">
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <div className='d-flex justify-content-around'>
      <Button variant="primary" href={site} target='blank'>Ir al sitio</Button>
      <Button variant="primary" href={repo} target='blank'>Ver repositorio</Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default CardProject