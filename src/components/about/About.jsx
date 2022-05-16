import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <h2>Hola, mi nombre es Jehan Carlos Veracierta</h2>
      <p>Soy un <strong>Fullstack Web Developer.</strong> Desde muy joven he sido atraido 
      por las maravillas de la tecnologia y todo lo que se puede lograr con estas.
      Han pasado alrededor de 2 anos desde que empece en el mundo de la programacion y 
      aunque me reconozca como fullstack, mi punto fuerte y por el cual siento una 
      gran atraccion, es por el <strong>backend</strong>.
      </p>
      <br />
      <h5>Quieres descargar mi curriculum?</h5>
      <h5>Aqui lo tienes</h5>
      <a href="mi curriculum" className='btn btn-danger'>Curriculum Vitae</a>
    </div>
  )
}

export default About