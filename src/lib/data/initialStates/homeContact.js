export const formInputs = [
    {
        label:'Nombre Completo',
        required:true,
        name:'fullName',
        width:'100%'
    },
    {
        label:'Email',
        required:true,
        name:'email'
    },
    {
        label:'Número telefónico',
        required:false,
        name:'phone'
    },
    {
        label:'Mensaje',
        required:true,
        name:'contactMessage',
        width:'100%',
        multiline:true,
    },
]

export const formEmailInitialState = {
    fullName:'',
    email:'',
    phone:'',
    contactMessage:'',
    date:''
}

export const validateFormEmailInitialState = {
    fullName: {
        status: false,
        regex: new RegExp(/^[a-zA-Z\s]+$/), // Solo letras y espacios
        helpText:'El nombre solo puede contener letras.',
    },
    email: {
        status: false,
        regex: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), // Dirección de correo electrónico válida
        helpText:'El email debe tener una forma válida correo@dominio.com.',
    },
    phone: {
        status: false,
        regex: new RegExp(/^(?:[0-9]{10})?$/),  // Número de teléfono de 10 dígitos
        helpText:'Número teleefónico a 10 digitos.',
    },
    contactMessage: {
        status: false,
        regex: new RegExp(/^.{20,512}$/), 
        helpText:'El mensaje debe contener entre 20 y 512 caracteres.',
    },
    date: {
        status: true, // No se requiere validación
        regex: new RegExp(''),
        helpText:'',
    },
};