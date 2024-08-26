import React from 'react'
import {Box} from '@mui/material'
import Hero from '@/components/home/hero';
import Projects from '@/components/home/projects';
import Tecnologies from '@/components/home/tecnologies';

// export const metadata = {
//   title: {
//     es: "Sebastian Ortiz | Ingeniero en Electrónica y Comunicaciones | Programador FullStack Experto",
//     en: "Sebastian Ortiz | Electronics and Communications Engineer | Expert FullStack Developer"
//   },
//   description: {
//     es: "Descubre el portafolio profesional de Sebastian Ortiz, un ingeniero en electrónica especializado en comunicaciones y programador FullStack con una trayectoria destacada en el desarrollo de soluciones tecnológicas innovadoras. Explora proyectos que combinan experiencia técnica y creatividad.",
//     en: "Explore the professional portfolio of Sebastian Ortiz, an electronics engineer specializing in communications and an expert FullStack developer with a proven track record in developing innovative technological solutions. Discover projects that blend technical expertise with creativity."
//   },
// };
export const metadata = {
  title: "Sebastian Ortiz | Ingeniero en Electrónica y Comunicaciones | Programador FullStack Experto",
  description: "Sitio web de Orca salón jardín, eventos sociales, fiestas de cumpleaños, XV años, bodas, banquetes, taquizas, carnitas, mixiotes, inflables, renta de salón, renta de eventos",
};


export default function Home() {
  
  return (
    <Box sx={{maxWidth:'100vw',overflowX:'hidden'}}>
      <Hero/>
      <Projects/>
      <Tecnologies/>
    </Box>
  )
}
