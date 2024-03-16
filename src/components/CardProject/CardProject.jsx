import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion"

const CardProject = ({title, text, site, repo, img, openModal}) => {
  return (
    <motion.div layoutId={`card_${title}`} >
      <Card 
      style={{ width: '30rem', minHeight:'450px'}} className='px-0'
      data-aos="zoom-in"
              data-aos-offset="200" 
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-delay="200"
              data-aos-once="false">
      <Card.Img variant="top" src={img} />
      <Card.Body className='d-flex flex-column justify-content-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className='d-flex justify-content-end gap-3 mt-3'>
        <Button variant="primary" href={site} target='blank'>Ir al sitio</Button>
          {
              repo ? 
              (
                  <Button variant="primary" href={repo} target='blank'>Ver repositorio</Button>
              )
              :
              (
                  <></>
              )
          }
        <Button variant='dark' onClick={openModal}>Mas info</Button>
        </div>
      </Card.Body>
    </Card>
  </motion.div>
  )
}

export default CardProject