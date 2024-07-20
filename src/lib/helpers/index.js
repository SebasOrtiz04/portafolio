export const handleInput = (form,target) =>{
    const {name,value} = target;
    return {...form,[name]:value}
}