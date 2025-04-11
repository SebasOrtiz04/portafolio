'use client';

import { Box, Button, Zoom } from '@mui/material';
import Autoplap from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './projectCard';

const autoplayOptions = {
  delay: 5000,
  stopOnInteraction: false,
  stopOnMouseEnter: false,
};

export default function Carousel({list}) {

  const {ref, inView} = useInView({
    threshold:0.2,
    triggerOnce:true
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplap(autoplayOptions),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());

  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <Box ref={ref}>
      <Zoom in={inView}>
        <Box>
          <Box
            ref={emblaRef}
            sx={{
              overflow: 'hidden',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              {list.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: {xs:'none',md:'flex'}, justifyContent: 'center', mt: 2, gap: 2 }}>
            <Button variant="outlined" onClick={scrollPrev}>
              Anterior
            </Button>
            <Button variant="outlined" onClick={scrollNext}>
              Siguiente
            </Button>
          </Box>
        </Box>
      </Zoom>
    </Box>
  );
}

Carousel.propTypes = {
    list: PropTypes.array.isRequired,
}