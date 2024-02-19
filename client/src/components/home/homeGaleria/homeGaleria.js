import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HomeGaleria() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/img/homeGalery/01.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/img/homeGalery/02.jpg',
    title: 'Burger',
  },
  {
    img: '/img/homeGalery/03.jpg',
    title: 'Camera',
  },
  {
    img: '/img/homeGalery/04.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '/img/homeGalery/05.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
   img: '/img/homeGalery/06.jpg',  
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
   img: '/img/homeGalery/07.jpg',
    title: 'Basketball',
  },
  {
   img: '/img/homeGalery/08.jpg',
    title: 'Fern',
  },
  {
   img: '/img/homeGalery/09.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
   img: '/img/homeGalery/10.jpg',
    title: 'Tomato basil',
  },
  {
   img: '/img/homeGalery/11.jpg',
    title: 'Sea star',
  },
  {
   img: '/img/homeGalery/12.jpg',
    title: 'Bike',
    cols: 2,
  },
];