'use client'

import {ImageList, Container, ImageListItem} from '@mui/material';
import ImageFullScreen from '@/components/utils/imageFullScreen';
import {useDispatch}  from 'react-redux';
import { OpenImage } from '@/redux/actions/FullImageActions';
import { galeryImages } from '@/lib/data/initialStates/galery';
import styles from './styles.module.css'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Galery() {

  const dispatch = useDispatch();

  return (
    <Container>

      <ImageFullScreen
      list={galeryImages}
      />        
        <ImageList
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {galeryImages.map((item,key) => (
            <ImageListItem key={key} cols={item.cols || 1} rows={item.rows || 1} >
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onClick={() => dispatch(OpenImage({list:galeryImages,selected:key}))}
                className={styles.image}
            />
            </ImageListItem>
        ))}
        </ImageList>
    </Container>
  );
}

