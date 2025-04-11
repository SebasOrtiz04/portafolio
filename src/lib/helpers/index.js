export const handleInput = (form,target) =>{
    const {name,value} = target;
    return {...form,[name]:value}
}

export const cookProjects = list => [
    { 
        title : 'Plataformas digitales',
        list : [...list.filter( project => project.tag === 'platform')],
    },
    { 
        title : 'Sitios Web',
        list : [...list.filter( project => project.tag === 'website')],
    },
    { 
        title : 'Landings Page',
        list : [...list.filter( project => project.tag === 'landing')],
    },
]
