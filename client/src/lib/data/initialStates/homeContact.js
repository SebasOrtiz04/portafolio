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
        required:false,
        name:'message',
        width:'100%',
        multiline:true,
    },
]

export const formEmailInitialState = {
    fullName:'',
    email:'',
    phone:'',
    message:''
}