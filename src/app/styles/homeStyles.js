const heroGridItemStyle = {height:{xs:'auto',md:'70vh'},display:'flex',flexDirection:'column',gap:1,alignItems:'center',justifyContent:'center'}

export const headerStyles ={
    gridContainerStyle:{minHeight:'100%',width:'100%'},
    avatarGridStyle:{...heroGridItemStyle},
    avatarStyle:{height:300,width:300},
    titleStyle:{fontSize:48,textAlign:'center'},
    subTitleStyle:{fontSize:40,textAlign:'center'},
    textStyle:{...heroGridItemStyle,padding:{xs:2,md:10}},
    typographyText:{fontSize:36}
}