import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const menuList = [
    {
        section_name:'Orca Eventos Sociales',
        list:[
            {
                label:'Inicio',
                icon:<HomeIcon/>,
                link:'/'                
            },
            {
                label:'Contacto',
                icon:<ImportContactsIcon/>,
                link:'/contact'                
            },
        ]
    },
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
