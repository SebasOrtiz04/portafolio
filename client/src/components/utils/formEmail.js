'use client'

import { formEmailInitialState, formInputs } from '@/lib/data/initialStates/homeContact'
import {
    Card, 
    CardContent, 
    CardActions, 
    Button, 
    TextField,
    Stack
} from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react'

export default function FormEmail() {

    const [form, setForm] = useState(formEmailInitialState);
  
  
    return (
    <Card >
        <CardContent>

        <Stack direction='rows' useFlexGap flexWrap='wrap' spacing={3}>
            {formInputs.map(({label,required,width = 250,name,multiline = false},key) =>(
                <TextField
                key={key}
                required={required}
                label={label}
                name={name}
                value={form[name]}
                aria-label={label}
                sx={{width:width}}
                multiline = {multiline}
                rows={4}
                />
            ))}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label='Fecha de interés' />
                </DemoContainer>
            </LocalizationProvider>
        </Stack>


        </CardContent>
        <CardActions sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',paddingY:2}}>
            <Button aria-label='enviar mensaje' variant='contained'>
                Envíar Mensaje
            </Button>
        </CardActions> 
    </Card>
  )
}
