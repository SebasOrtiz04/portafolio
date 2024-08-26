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
        href:'https://www.linkedin.com/public-profile/settings',
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

export const projects = [
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
        private:true,
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
        private:true,
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
        url:'https://orcaeventos.com/',
    },
    {
        srcImg:'/img/Proyects/Buho/dashboard.png',
        altImg:'Dashboard Buho',
        title:'ERP Ecommerce abarrotes.',
        owner:'Buho Tienda de abarrotes',
        role:'Arquitecto de Frontend',
        year:'2023',
        tecnologies:[
            'react',
            'mui',
            'redux',
            'next',
        ],
        registers:[],
        url:'https://buho-panel.up.railway.app/',
        probe:'https://buho-webapp1.up.railway.app/client-list/'
    },
]