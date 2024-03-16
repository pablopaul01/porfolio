import {useState} from 'react'
import CardProject from '../CardProject/CardProject'
import Modal from '../Modal'
import { motion } from "framer-motion"
import { proyectos } from '../../helpers/data'


const Proyectos = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
      setSelectedProject(project);
    };
  
    const closeModal = () => {
      setSelectedProject(null);
    };


  return (
    <div className='container-fluid my-5' id='projects'>
        <div className="row justify-content-center">
            <div className='col-4 col-md-2 py-4 text-center'>
                <h2 className='subrayado'>Proyectos</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col">
            <h5 className='text-center'>Aqui puedes ver algunos de los proyectos en los que trabajé</h5>
            </div>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-center py-5 flex-wrap gap-5">
            {proyectos.map((project) => (
                <CardProject
                key={project.title}
                title={project.title}
                text={project.text}
                site={project.site}
                repo={project.repo}
                img={project.img}
                openModal={() => openModal(project)}
                />
            ))}
            
            </div>
        </div>
        {selectedProject && (
        <Modal
          project={selectedProject}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}

export default Proyectos