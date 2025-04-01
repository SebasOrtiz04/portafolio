export const handleInput = (form,target) =>{
    const {name,value} = target;
    return {...form,[name]:value}
}

export const cookProjects = (list,selected) => list.filter( project => project.tag === selected);