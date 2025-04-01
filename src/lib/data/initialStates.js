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
        srcImg:'/img/Proyects/CLEU/website.png',
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
            'mongoose',
            'mongoDB',
        ],  
        registers:[
            {
                label:'Leads generados',
                count:1000
            }
        ],
        url:'https://www.cleu.edu.mx',
        tag:'website',
    },
    {
        srcImg:'/img/Proyects/CLEU/email.png',
        altImg:'Home gestor de Emails.',
        title:'Gestor de Emails',
        owner:'CLEU',
        role:'Desarrollador Fullstack',
        year:'2024 - 2025',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'vite',
            'laravel',
            'mariaDB'
        ],  
        registers:[
            {
                label:'Registros',
                count:21000
            }
        ],
        url:'https://autoservicio.cleu.edu.mx/email-gestor/auth',
        tag:'platform',
    },
    {
        srcImg:'/img/Proyects/CLEU/encuestas.png',
        altImg:'Home plataforma de encuestas.',
        title:'Plataforma de encuestas',
        owner:'CLEU',
        role:'Desarrollador Fullstack',
        year:'2023 - 2025',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'vite',
            'laravel',
            'mariaDB'
        ],  
        registers:[
            {
                label:'Encuestas',
                count:52000
            }
        ],
        url:'https://autoservicio.cleu.edu.mx/encuestas/',
        tag:'platform',
    },
    {
        srcImg:'/img/Proyects/Geminis/landing.png',
        altImg:'Landing Website comedor industrial géminis.',
        title:'Website Géminis',
        owner:'Comedor Industrial Géminis',
        role:'Desarrollador Front End',
        year:'2024',
        tecnologies:[
            'react',
            'tailwind',
            'astro',
        ],  
        registers:[],
        url:'https://www.comedorindustrialgeminis.com/',
        tag:'website',
    },
    {
        srcImg:'/img/Proyects/Flownet/landing.png',
        altImg:'Landing Flownet.',
        title:'Landing Page Flownet',
        owner:'Flownet',
        role:'Desarrollador Front End',
        year:'2024',
        tecnologies:[
            'react',
            'tailwind',
            'astro',
        ],  
        registers:[],
        url:'https://www.flownet.com.ar/',
        tag:'landing',
    },
    {
        srcImg:'/img/Proyects/Orca/landingInflables.png',
        altImg:'Landing Inflables Orca Eventos Sociales.',
        title:'Landing Page Inflables',
        owner:'Orca Eventos Sociales',
        role:'Desarrollador Front End',
        year:'2025',
        tecnologies:[
            'react',
            'tailwind',
            'astro',
        ],  
        registers:[],
        url:'https://www.flownet.com.ar/',
        tag:'landing',
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
