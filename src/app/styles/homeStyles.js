const heroGridItemStyle = {height:{xs:'auto',md:'70vh'},display:'flex',flexDirection:'column',gap:1,alignItems:'center',justifyContent:'center'}

export const headerStyles ={
    gridContainerStyle:{minHeight:'100%',width:'100%'},
    avatarGridStyle:{...heroGridItemStyle},
    avatarStyle:{height:300,width:300},
    titleStyle:{fontSize:48},
    subTitleStyle:{fontSize:40},
    textStyle:{...heroGridItemStyle,padding:10}
}