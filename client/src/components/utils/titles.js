import {Typography, Divider} from '@mui/material'

export const Title1 = ({title}) =>{

    return(
        <Typography variant='h3' margin={'2rem'}>
            {title}
            <Divider/>
        </Typography>
    )
}