

import { projects } from '@/lib/data/initialStates';
import { cookProjects } from '@/lib/helpers';
import { Container, Stack } from '@mui/material';
import { Title2 } from '../utils/titles';
import Carousel from './carousel';

export default function PorjectsCarousel() {



  return (
    <Container>
        {cookProjects(projects).map( ({title, list},key) => (
          <Stack key={key} gap={3} sx={{marginBottom:10}}>
                <Title2 title={title}/>
                <Carousel list={list}/>
            </Stack>
        ))}
    </Container>
  );
}
