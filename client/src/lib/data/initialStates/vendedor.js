import CheckIcon from '@mui/icons-material/Check';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import SoapIcon from '@mui/icons-material/Soap';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import WashIcon from '@mui/icons-material/Wash';
import PeopleIcon from '@mui/icons-material/People';
import GppGoodIcon from '@mui/icons-material/GppGood';

export const cardsList = [
    {
        title:'Paquete Full',
        subtitle:'Renta de salón y DJ',
        list:[
            {
                title: 'Moviliario',
                content : `Mesas y sillas, mantelería, equipo de iluminación y 
                sonido para el baile`,
                avatar: <TableRestaurantIcon/>
            },
            {
                title: 'Consumibles',
                content : `Papel higiénico, sanitas, jabón para manos, gas para recalentar`,
                avatar: <SoapIcon/>
            },
            {
                title: 'Limpieza',
                content : `La limpieza del salón antes y después del evento la realizamos nosotros`,
                avatar: <CleaningServicesIcon/>
            },
            {
                title: 'DJ',
                content : `El servicio del Dj es por 7 horas + música de ambiente durante la recepción`,
                avatar: <LibraryMusicIcon/>
            },
            {
                title: 'Recepción',
                content : `30 min de recepción`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Tiempo',
                content : `7 horas de evento`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Desalojo',
                content : `1 horas para desalojar`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Precio hasta 150 personas',
                content : `$7,899.00 apartado $1000.00`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio hasta 160 - 200 personas',
                content : `$10,399.00 apartado $2000.00 (1 carpa en el jardín con 50 personas en el área de carpas)`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio hasta 210 - 250 personas',
                content : `$12,899.00 apartado $3000.00 (2 carpas en el jardín con 100 personas en el área de carpas)`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Depósito',
                content : `Se deja un depósito de $500.00 el cual se devuelve a finalizar el evento`,
                avatar: <GppGoodIcon/>,
                avatarColor:'orange'
            },
        ]
    },
    {
        title:'Banquete de 3 tiempos',
        list:[
            {
                title: 'Primer tiempo de comida',
                content : `Usted elige una crema de nuestro menú para comenzar`,
                avatar: <SoupKitchenIcon/>
            },
            {
                title: 'Segundo tiempo de comida',
                content : `Usted elige una pasta de nuestro menú para el segundo tiempo`,
                avatar: <DinnerDiningIcon/>
            },
            {
                title: 'Tercer tiempo de comida',
                content : `Usted elige una plato fuerte y su guarnición de nuestro menú para cerrar la comida`,
                avatar: <SetMealIcon/>
            },
            {
                title: 'Moviliario',
                content : `Mesas y sillas, mantelería, platos, vasos, cubiertos`,
                avatar: <TableRestaurantIcon/>
            },
            {
                title: 'Consumibles',
                content : `Papel higiénico, sanitas, jabón para manos, gas para recalentar`,
                avatar: <SoapIcon/>
            },
            {
                title: 'Meseros',
                content : `El servicio de meseros está incluido al contratar el banquete`,
                avatar: <SpatialTrackingIcon/>
            },
            {
                title: 'Lava loza',
                content : `Nos encargamos de la limpieza de las bajilla `,
                avatar: <WashIcon/>
            },
            {
                title: 'Degustación',
                content : `Una vez contratado su evento se agenda una 
                degustación para dos personas con 2 platillos de cada 
                tiempo para que pueda elegir que comida se servirá 
                en su evento.`,
                avatar: <CleaningServicesIcon/>
            },

            {
                title: 'Recepción',
                content : `30 min de recepción`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Tiempo',
                content : `7 horas de evento`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Desalojo',
                content : `1 horas para desalojar`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Precio 50 - 80 personas',
                content : `$405.00 MXN por persona`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio 81 - 110 personas',
                content : `$346.00 MXN por persona`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio 111 - 140 personas',
                content : `$319.00 MXN por persona`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio 141 personas en adelante',
                content : `$304.00 MXN por persona`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio Platillo infantil',
                content : `$110.00 MXN por niño`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Apartado',
                content : `30% del valor del evento`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Mínimo 50 personas',
                content : `La cantidad mínima para realizar el banquete es de 50 personas`,
                avatar: <PeopleIcon/>,
                avatarColor:'orange'
            },
            {
                title: 'Depósito',
                content : `Se deja un depósito de $500.00 el cual se devuelve a finalizar el evento`,
                avatar: <GppGoodIcon/>,
                avatarColor:'orange'
            },
        ]
    },
    {
        title:'Paquete Basic',
        subtitle:'Renta de salón',
        list:[
            {
                title: 'Moviliario',
                content : `Mesas y sillas, mantelería`,
                avatar: <TableRestaurantIcon/>
            },
            {
                title: 'Consumibles',
                content : `Papel higiénico, sanitas, jabón para manos, gas para recalentar`,
                avatar: <SoapIcon/>
            },
            {
                title: 'Limpieza',
                content : `La limpieza del salón antes y después del evento la realizamos nosotros`,
                avatar: <CleaningServicesIcon/>
            },
            {
                title: 'Recepción',
                content : `30 min de recepción`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Tiempo',
                content : `7 horas de evento`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Desalojo',
                content : `1 horas para desalojar`,
                avatar: <AccessTimeFilledIcon/>
            },
            {
                title: 'Precio hasta 150 personas',
                content : `$6,000.00 apartado $1000.00`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio hasta 160 - 200 personas',
                content : `$8,500.00 apartado $2000.00 (1 carpa en el jardín con 50 personas en el área de carpas)`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Precio hasta 210 - 250 personas',
                content : `$11,00.00 apartado $3000.00 (2 carpas en el jardín con 100 personas en el área de carpas)`,
                avatar: <AttachMoneyIcon/>,
                avatarColor:'darkgreen'
            },
            {
                title: 'Depósito',
                content : `Se deja un depósito de $500.00 el cual se devuelve a finalizar el evento`,
                avatar: <GppGoodIcon/>,
                avatarColor:'orange'
            },
        ]
    },
    {
        title:'Diferenciadores',
        list:[
            {
                content:'Contamos con la bomba de agua automática para tener agua disponible en los baños y la cocina en todo momento.',
                title:'Bomba automática',
                avatar:<CheckIcon/>,
                avatarColor:'green'
            },
            {
                content:'Durante el evento una persona está destinada a vigilar los autos.',
                title:'Cuidador de automóviles',
                avatar:<CheckIcon/>,
                avatarColor:'green'
            },
            {
                content:'En el salón hay personal de Orca eventos sociales en todo momento para cualquier imprevisto o problematica correspondiente al salón y sus instalaciones.',
                title:'Personal en todo momento',
                avatar:<CheckIcon/>,
                avatarColor:'green'
            },
            {
                title:'Ingreso para adornos, refrescos, etc.',
                content:'Teniendo en cuenta lo extenuante que es organizar un evento, el ingreso de sus cosas puede ser un día antes.',
                avatar:<CheckIcon/>,
                avatarColor:'green'
            },
        ]
    },
]