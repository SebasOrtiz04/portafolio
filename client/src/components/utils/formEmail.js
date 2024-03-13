'use client'

import { formEmailInitialState, formInputs, validateFormEmailInitialState } from '@/lib/data/initialStates/homeContact'
import {
    Card, 
    CardContent, 
    CardActions, 
    Button, 
    TextField,
    Stack,
    CircularProgress
} from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { handleInput } from '@/lib/helpers';
import { sendContactMail } from '@/redux/actions/EmailAction';
import SendIcon from '@mui/icons-material/Send';
import { MostrarAlerta } from '@/redux/actions/AlertaAction';

export default function FormEmail() {

    const dispatch = useDispatch();

    const {isLoading, status} = useSelector(state => state.email);

    const [form, setForm] = useState(formEmailInitialState);
    const [validateForm, setValidateForm] = useState(validateFormEmailInitialState);
  
    useEffect(() => {

        const updatedValidateForm = { ...validateForm };
    
        Object.entries(form).forEach(([key, value]) => {
            updatedValidateForm[key] = {
                ...updatedValidateForm[key],
                status: updatedValidateForm[key].regex.test(value)
            };
        });
    
        setValidateForm(updatedValidateForm);
    }, [form]);

    useEffect(()=>{
        if(isLoading?.sendContactEmail || status.sendContactEmail != 201)return;
        setForm(formEmailInitialState)
    },[isLoading, status])

    const handleSend = () =>{
        if(!Object.values(validateForm).every(field => field.status === true)){
            dispatch(MostrarAlerta({msg:'Debes llenar el formuario correctamente',severity:'warning'})) 
            return;
        }
        dispatch(sendContactMail(form))
    }

    return (
    <Card >
        <CardContent>

        <Stack direction={'row'} useFlexGap flexWrap='wrap' spacing={3}>
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
                error = {!validateForm[name].status && form[name ? true : false]}
                color={validateForm[name].status ? 'success' : 'error'}
                onChange={e => setForm(handleInput(form,e.target))}
                helperText={!validateForm[name].status && validateForm[name].helpText}
                rows={4}
                />
            ))}
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label='Fecha de interés' onChange={e => console.log(e)} />
                </DemoContainer>
            </LocalizationProvider> */}
        </Stack>


        </CardContent>
        <CardActions sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',paddingY:2}}>
            <Button 
            aria-label='enviar mensaje' 
            variant='contained' 
            onClick={() => handleSend()}
            disabled={isLoading?.sendContactEmail}
            endIcon={isLoading?.sendContactEmail ? <CircularProgress/> : <SendIcon/>}
            >
                Envíar Mensaje
            </Button>
        </CardActions> 
    </Card>
  )
}
