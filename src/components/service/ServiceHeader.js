import { homeImages } from "@/lib/data/initialStates/homeGaleria";
import { Box,ImageList, ImageListItem, Stack, useTheme } from "@mui/material";
import ServiceResume from "./ServiceResume";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Hero = () =>(
  <Box sx={{width:{xs:'100%',lg:'60%'}}}>

    <ImageList 
      sx={{width:'100%',borderRadius:5,display:{xs:'none',sm:'grid'}}}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
    {homeImages.slice(0,4).map((item) => (
      <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
        <img
          {...srcset(item.img, 200, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
    </ImageList>

    <ImageList 
      sx={{width:'100%',borderRadius:5, display:{xs:'grid',sm:'none'}}}
      variant="quilted"
      cols={1}
      rowHeight={400}
    >
      <ImageListItem cols={1} rows={1}>
        <img
          {...srcset(homeImages[0].img, 400)}
          alt={homeImages[0].title}
          loading="lazy"
        />
      </ImageListItem>
    </ImageList>

</Box>
)

export default function ServiceHeader() {

  const theme = useTheme();

  return (
    <Stack direction={{xs:'column',lg:'row'}}>
      <Hero/>
      <ServiceResume/>
    </Stack>
  )
}