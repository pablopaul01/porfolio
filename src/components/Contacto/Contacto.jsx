import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { FORM_SCHEMA } from '../../helpers/validationsSchemas'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser';
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacto = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(FORM_SCHEMA)
      })
      const form = useRef();
      
      const onSubmit = async (data) => {
        setLoading(true)
        const sendEmail = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        try {
          if (sendEmail.text === "OK"){
            Swal.fire({
                icon: "success",
                title: "El formulario se mando correctamente!",
                text: "Gracias por ponerse en contacto"
              })
          }
          setLoading(false)
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: `Ocurrió un problema! Error${error.text}`,
            text: `${error.text}`
          })
        }
        finally {
          setLoading(false)
          reset();
        }
      }

  return (
    <div className='contactoContainer py-5'>
        <div className='container'>
            <div className="row">
                <h2>Contactame</h2>
                <h5 className='subtitleBlack mb-5'>Si quieres contactarme puedes completar el formulario</h5>
                <div className="col-6">
                    <Form ref={form} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3 pe-5 w-lg-75">
                        <Row className="d-flex justify-content-between">
                            <Col className="p-0">
                                <Form.Control
                                type='text'
                                placeholder="Nombre completo"
                                name="user_name"
                                {...register("user_name")} />
                                <p className="text-danger my-1">
                                {errors.user_name?.message}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Control
                                type="email"
                                placeholder="E-mail"
                                name="user_email"
                                {...register("user_email")} />
                            <p className="text-danger my-1">
                                {errors.user_email?.message}
                            </p>
                        </Row>
                        <Row>
                        <Form.Control
                                as="textarea"
                                placeholder="Escriba su mensaje"
                                style={{ height: "100px" }}
                                className="textarea"
                                name="message"
                                {...register("message")}
                            />
                            <p className="text-danger my-1">
                                {errors.message?.message}
                            </p>
                        </Row>
                        <Row>
                            { loading ? (
                                <div className="text-center">
                                    <Spinner />
                                </div>
                            ) : (
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            )}

                        </Row>
                    </Form>
                </div>
                <div className="col-6 d-flex flex-column justify-content-start">
                    <h5 className='mb-4'>Otros medios de contacto:</h5>
                    <div className='subtitleBlack'>
                        <a href="https://www.linkedin.com/in/juanpablosalomon/" target='blank' className='linkContacto'>
                            <p><FaLinkedin className='contactIcons'/>&nbsp; /juanpablosalomon</p>
                        </a>
                    </div>
                    <div className='subtitleBlack'>
                        <a href="mailto:juanpablosalomon@gmail.com" target='blank' className='linkContacto'>
                            <p><MdEmail className='contactIcons'/>&nbsp; juanpablosalomon@gmail.com</p>
                        </a>
                    </div>
                    <div className='subtitleBlack' >
                        <a href="https://api.whatsapp.com/send?phone=5493814039814&text=Hola Juan Pablo..." target='blank' className='linkContacto'>
                            <p> <FaWhatsapp className='contactIcons'/>&nbsp; +54 3814039814</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto