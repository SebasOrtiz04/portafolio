import About from '@/components/home/about';
import Hero from '@/components/home/hero';
import PorjectsCarousel from '@/components/home/porjectsCarousel';
import { Box } from '@mui/material';

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
  title: "FullStack Developer & Electronics Engineer | Sebastian Ortiz",
  description: "Ingeniero en Electrónica y Comunicaciones con sólida experiencia como Programador FullStack. Sebastian Ortiz combina creatividad, precisión técnica y pasión por la tecnología para desarrollar soluciones innovadoras y robustas en diversas plataformas. Explora proyectos que van desde aplicaciones web avanzadas hasta integraciones de hardware, destacando por su enfoque en calidad y eficiencia.",
};


export default function Home() {
  
  return (
    <Box sx={{maxWidth:'100vw',overflowX:'hidden'}}>
      <Hero/>
      <About/>
      <PorjectsCarousel/>
    </Box>
  )
}
