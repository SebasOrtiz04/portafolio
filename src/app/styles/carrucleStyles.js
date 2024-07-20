export const carrucelStyles = {
    container:{ position: 'relative', flexGrow: 1, width: '100vw', height: 'calc(100vh - 80px)', overflow: 'hidden'},
    imageContainer:{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height:'fit-content', overflow: 'hidden' , backgroundColor:'blue', display:'flex', alignItems:'center', justifyContent:'center'},
    contentContainer:{zIndex:20,position:'absolute',width:'100%',backgroundColor:'rgba(0,0,0,0.7)',height:'100%',paddingTop:'4rem'},
    mobileStepper:{backgroundColor:'transparent',position:'absolute'},
    content:{display:'flex',alignItems:'center',height:'100%',justifyContent:'space-evenly',flexDirection:'column', gap:'1rem','@media (max-width: 1024px)':{justifyContent:'center'}},
    contentText:{fontSize:'3rem','@media (max-width: 768px)':{fontSize:'2.2rem'}},
    contentStack:{width:'100%'},
}