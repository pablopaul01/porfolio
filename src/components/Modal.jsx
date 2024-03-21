import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

const Modal = ({ project, closeModal }) => {
  return (
    <div
      className='modal fade show'
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      // onClick={closeModal}
    >
      <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
        className='modal-dialog modal-dialog-centered modal-xl'
      >
        <motion.div className='modal-content'       layoutId={`card_${project.title}`}>
            <motion.img src={project.img} alt="" className='w-100'         />
          <motion.div 
          className='modal-body' >
            <div className='d-flex flex-column gap-3'>
                <h1 className='modal-title fs-5'>{project.title}</h1>
                <p><strong>Alcance:</strong> {project.alcance}</p>
                <h2 className='modal-title fs-5'>Tecnologias</h2>
                <p><strong>Frontend:</strong> {project.tecnologiasFront}</p>
                {
                    project.tecnologiasBack ? 
                    (
                        <p><strong>Backend:</strong> {project.tecnologiasBack}</p>
                    )
                    :
                    (
                        <></>
                    )
                }
            </div>
            <div className='d-flex justify-content-end gap-2 mt-5'>
                <Button variant="primary" href={project.site} target='blank'>Ir al sitio</Button>
                {
                    project.repo ? 
                    (
                        <Button variant="primary" href={project.repo} target='blank'>Ver repositorio</Button>
                    )
                    :
                    (
                        <></>
                    )
                }

                <Button variant='secondary' onClick={closeModal}>Cerrar</Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Modal;