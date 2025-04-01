import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const menuList = [
    // {
    //     section_name:'Orca Eventos Sociales',
    //     list:[
    //         {
    //             label:'Inicio',
    //             icon:<HomeIcon/>,
    //             link:'/'                
    //         },
    //         {
    //             label:'Contacto',
    //             icon:<ImportContactsIcon/>,
    //             link:'/contact'                
    //         },
    //         {
    //             label:'Galería',
    //             icon:<CameraRollIcon/>,
    //             link:'/galery'                
    //         },
    //     ]
    // },
    // {
    //     section_name:'Mi Cuenta',
    //     list:[
    //         {
    //             label:'Mis Controladores',
    //             icon:<DeveloperBoardIcon/>,
    //             link:'/controllers'                
    //         }
    //     ]
    // },
    // {
    //     section_name:'Administrador',
    //     list:[
    //         {
    //             label:'Administrador',
    //             icon:<AdminPanelSettingsIcon/>,
    //             link:'/admin'                
    //         },
    //         {
    //             label:'Dispositivos',
    //             icon:<DeveloperBoardIcon/>,
    //             link:'/admin/devices'                
    //         },
    //     ]
    // },
]


export const socialLinks = [
    {
        ariaLabel:"Enlace Linkedin",
        href:'http://www.linkedin.com/in/juansebastianortizcastro',
        icon:<LinkedInIcon color='secondary'/>
    },
    {
        ariaLabel:"Enlace Facebook",
        href:'https://github.com/SebasOrtiz04',
        icon:<GitHubIcon color='secondary'/>
    },
]

export const heroTypographyText = [
    'Que tal. ¿Quisieras que hagamos algo sorprendente juntos?',
    'Llevemos el control y la automatización a un nuevo nivel.',
    'Cuentame que tienes en mente y te doy una propuesta.'
]

export const chips = [
    {key:'platform',label:'Plataformas Web'},
    {key:'website',label:'Sitios Web'},
    {key:'landing',label:'Landing Pages'},
] 

export const projects = [
    {
        srcImg:'/img/Proyects/CLEU/cleu_background.png',
        altImg:'Login plataforma de encuestas.',
        title:'Website CLEU',
        owner:'CLEU',
        role:'Desarrollador Fullstack',
        year:'2024 - 2025',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'vite',
            'express',
            'moongoDB'
        ],  
        registers:[
            {
                label:'Encuestas',
                count:20000
            }
        ],
        url:'https://autoservicio.cleu.edu.mx/encuestas/admin-login',
        tag:'website',
    },
    {
        srcImg:'/img/Proyects/CLEU/login.png',
        altImg:'Login plataforma de encuestas.',
        title:'Gestor de Emails',
        owner:'CLEU',
        role:'Desarrollador Fullstack',
        year:'2024 - 2025',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'next',
            'laravel',
            'mariaDB'
        ],  
        registers:[
            {
                label:'Encuestas',
                count:20000
            }
        ],
        url:'https://autoservicio.cleu.edu.mx/encuestas/admin-login',
        tag:'platform',
    },
    {
        srcImg:'/img/Proyects/CLEU/login.png',
        altImg:'Login plataforma de encuestas.',
        title:'Plataforma de encuestas',
        owner:'CLEU',
        role:'Desarrollador Fullstack',
        year:'2023 - 2024',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'next',
            'laravel',
            'mariaDB'
        ],  
        registers:[
            {
                label:'Encuestas',
                count:20000
            }
        ],
        url:'https://autoservicio.cleu.edu.mx/encuestas/admin-login',
        tag:'platform',
    },
    {
        srcImg:'/img/Proyects/CLEU/login.png',
        altImg:'Login plataforma de encuestas.',
        title:'Website Géminis',
        owner:'Comedor Industrial Géminis',
        role:'Desarrollador Fullstack',
        year:'2023 - 2024',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'next',
            'laravel',
            'mariaDB'
        ],  
        registers:[
            {
                label:'Encuestas',
                count:20000
            }
        ],
        url:'https://autoservicio.cleu.edu.mx/encuestas/admin-login',
        tag:'platform',
    },
    {
        srcImg:'/img/Proyects/Artmex/dashboard.png',
        altImg:'Dashboard Artmex',
        title:'ERP Exportación de artesanias.',
        owner:'Artmex Imports Corp',
        role:'Desarollador Fullstack',
        year:'2023',
        tecnologies:[
            'react',
            'tailwind',
            'redux',
            'vite',
            'express',
            'sequelize',
            'postgreSQL',
            'node'

        ],
        registers:[
            {
                label:'Cajas',
                count:8000
            }
        ],
        url:'https://artmeximportscorp.com/auth/sign-in',
        tag:'platform',
        probe:'https://artmex-test.up.railway.app/auth/sign-in'
    },
    {
        srcImg:'/img/Proyects/Orca/home.png',
        altImg:'Home sitio Web de salón jardín',
        title:'Sitio Web de salón jardín.',
        owner:'Orca Eventos Sociales',
        role:'Desarrollador Fullstack',
        year:'2024',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'next',
            'express',
            'mongoose',
            'mongoDB'
        ],
        registers:[],
        url:'https://salonorca.com/',
        tag:'website',
    },
]
